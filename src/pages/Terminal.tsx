import { type KeyboardEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { runCommand } from "../terminal/commands";

const BOOT_LINES = [
  "Booting jaehyung.site v2.0 ...",
  "Loading kernel modules: [react] [security] [caffeine] ... done",
  "Mounting filesystem ... done",
  "Establishing secure shell session ...",
  "Connection established.",
  "",
  "Welcome, guest.",
  "Type 'help' to see available commands.",
];

interface Entry {
  id: number;
  kind: "input" | "output" | "boot";
  node: ReactNode;
}

const PROMPT = "guest@jaehyung:~$";

export function Terminal() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [booted, setBooted] = useState(false);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const nextId = () => {
    idRef.current += 1;
    return idRef.current;
  };

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setEntries((prev) => [...prev, { id: nextId(), kind: "boot", node: line || " " }]);
        if (i === BOOT_LINES.length - 1) setBooted(true);
      }, i * 140),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (booted) inputRef.current?.focus();
  }, [booted]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [entries]);

  function submit(raw: string) {
    setEntries((prev) => [
      ...prev,
      {
        id: nextId(),
        kind: "input",
        node: (
          <span>
            <span className="text-[color:var(--term-accent)]">{PROMPT}</span> {raw}
          </span>
        ),
      },
    ]);

    const trimmed = raw.trim();
    if (trimmed) {
      setHistory((prev) => [...prev, trimmed]);
    }
    setHistoryIndex(null);

    const result = runCommand(raw, history);

    if (result.clear) {
      setEntries([]);
      return;
    }

    if (result.content) {
      setEntries((prev) => [...prev, { id: nextId(), kind: "output", node: result.content }]);
    }

    if (result.navigateTo) {
      setTimeout(() => navigate(result.navigateTo!), 700);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      submit(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    }
  }

  return (
    <div
      className="terminal relative flex h-[100svh] w-full flex-col overflow-hidden font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />

      <header className="flex shrink-0 items-center justify-between border-b border-[color:var(--term-dim)]/30 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef6f61]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3a53d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4caf7d]" />
          </div>
          <span className="text-xs text-[color:var(--term-dim)]">guest@jaehyung: ~</span>
        </div>
        <a href="/site" className="text-xs text-[color:var(--term-dim)] hover:text-[color:var(--term-accent)]">
          Prefer a normal website? &rarr;
        </a>
      </header>

      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6"
      >
        <div className="mx-auto max-w-3xl space-y-1">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={
                entry.kind === "boot"
                  ? "whitespace-pre-wrap text-[color:var(--term-dim)]"
                  : entry.kind === "input"
                    ? "whitespace-pre-wrap"
                    : "py-1"
              }
            >
              {entry.node}
            </div>
          ))}

          {booted && (
            <div className="flex items-center gap-2">
              <span className="shrink-0 text-[color:var(--term-accent)]">{PROMPT}</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Terminal command input"
                className="min-w-0 flex-1 border-none bg-transparent text-[color:var(--term-fg)] caret-[color:var(--term-accent)] outline-none"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
