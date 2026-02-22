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
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Moon crescent shadow */}
      <path
        d="M15 6C12.5 7.5 11 10 11 12.5C11 15 12.5 17.5 15 18.5C13.5 19.5 11.5 20 10 20C5.5 20 2 16.5 2 12C2 7.5 5.5 4 10 4C11.5 4 13.5 4.5 15 6Z"
        fill="currentColor"
        opacity="0.2"
      />
      {/* Center core */}
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
