interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "badge",
    accent: "badge badge-accent",
  };

  return (
    <span className={`${variantStyles[variant]} ${className}`}>{children}</span>
  );
}
