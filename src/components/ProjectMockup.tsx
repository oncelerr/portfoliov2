interface ProjectMockupProps {
  variant: "browser" | "terminal" | "report" | "none";
}

function WindowChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-border-subtle px-3 py-2">
      <span className="h-2 w-2 rounded-full border border-border-strong" />
      <span className="h-2 w-2 rounded-full border border-border-strong" />
      <span className="h-2 w-2 rounded-full border border-border-strong" />
    </div>
  );
}

export function ProjectMockup({ variant }: ProjectMockupProps) {
  return (
    <div
      aria-hidden="true"
      className="aspect-video w-full overflow-hidden rounded-t-card border-b border-border-subtle bg-surface-2"
    >
      {variant === "browser" && (
        <div className="flex h-full flex-col">
          <WindowChrome />
          <div className="flex flex-1 gap-3 p-3">
            <div className="flex w-1/4 flex-col gap-2">
              <div className="h-2 w-full rounded-sm bg-border-subtle" />
              <div className="h-2 w-3/4 rounded-sm bg-border-subtle" />
              <div className="h-2 w-5/6 rounded-sm bg-border-subtle" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-3 w-2/3 rounded-sm bg-border-subtle" />
              <div className="h-2 w-full rounded-sm bg-border-subtle" />
              <div className="h-2 w-full rounded-sm bg-border-subtle" />
              <div className="mt-1 h-10 w-1/3 rounded-sm border border-accent/60" />
            </div>
          </div>
        </div>
      )}

      {variant === "terminal" && (
        <div className="flex h-full flex-col">
          <WindowChrome />
          <div className="flex-1 space-y-2 p-3 font-mono text-[10px] leading-none">
            <div className="h-2 w-2/5 rounded-sm bg-accent/50" />
            <div className="h-2 w-4/5 rounded-sm bg-border-subtle" />
            <div className="h-2 w-3/5 rounded-sm bg-border-subtle" />
            <div className="h-2 w-1/3 rounded-sm bg-accent/40" />
            <div className="h-2 w-2/3 rounded-sm bg-border-subtle" />
          </div>
        </div>
      )}

      {variant === "report" && (
        <div className="flex h-full flex-col gap-2 p-4">
          <div className="h-2.5 w-1/2 rounded-sm bg-border-subtle" />
          <div className="h-2 w-full rounded-sm bg-border-subtle" />
          <div className="h-2 w-5/6 rounded-sm bg-border-subtle" />
          <div className="mt-2 flex flex-1 items-end gap-1.5">
            {[40, 65, 30, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-t-sm bg-border-subtle last:bg-accent/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      )}

      {variant === "none" && (
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--color-border-subtle) 0, var(--color-border-subtle) 1px, transparent 1px, transparent 14px)",
          }}
        />
      )}
    </div>
  );
}
