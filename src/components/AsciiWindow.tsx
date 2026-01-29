interface AsciiWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function AsciiWindow({
  title,
  children,
  className = "",
}: AsciiWindowProps) {
  return (
    <div className={`ascii-window ${className}`}>
      <div className="ascii-window-header">{title}</div>
      <div className="p-4">{children}</div>
    </div>
  );
}

interface AsciiPanelProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function AsciiPanel({ title, children, className = "" }: AsciiPanelProps) {
  return (
    <div className={`ascii-panel ${className}`}>
      <div className="ascii-panel-header">{title}</div>
      <div className="p-3">{children}</div>
    </div>
  );
}
