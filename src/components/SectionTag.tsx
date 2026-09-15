interface SectionTagProps {
  index: string;
  tag: string;
}

export function SectionTag({ index, tag }: SectionTagProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-content-secondary">
      <span className="line-rail" aria-hidden="true">
        {index}
      </span>
      <span className="text-accent">{tag}</span>
    </div>
  );
}
