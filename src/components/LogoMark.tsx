interface LogoMarkProps {
  className?: string;
  size?: number;
}

export default function LogoMark({ className = "", size = 24 }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Ghost body */}
      <path
        d="M12 2C7.58 2 4 5.58 4 10v7c0 0.8 0.6 1.2 1.2 0.8l1.6-1.6c0.4-0.4 1-0.4 1.4 0l1.4 1.4c0.4 0.4 1 0.4 1.4 0l1-1c0.4-0.4 1-0.4 1.4 0l1 1c0.4 0.4 1 0.4 1.4 0l1.4-1.4c0.4-0.4 1-0.4 1.4 0l1.6 1.6c0.6 0.4 1.2 0 1.2-0.8V10c0-4.42-3.58-8-8-8z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M12 2C7.58 2 4 5.58 4 10v7c0 0.8 0.6 1.2 1.2 0.8l1.6-1.6c0.4-0.4 1-0.4 1.4 0l1.4 1.4c0.4 0.4 1 0.4 1.4 0l1-1c0.4-0.4 1-0.4 1.4 0l1 1c0.4 0.4 1 0.4 1.4 0l1.4-1.4c0.4-0.4 1-0.4 1.4 0l1.6 1.6c0.6 0.4 1.2 0 1.2-0.8V10c0-4.42-3.58-8-8-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left eye */}
      <circle cx="9.5" cy="10" r="1.5" fill="currentColor" />
      {/* Right eye */}
      <circle cx="14.5" cy="10" r="1.5" fill="currentColor" />
      {/* Monocle on right eye */}
      <circle cx="14.5" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.75" fill="none" />
      <line x1="17" y1="10" x2="18.5" y2="12" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
