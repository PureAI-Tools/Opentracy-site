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
      {/* Outer moon ring */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Moon phase shadow */}
      <path
        d="M12 2C7.58 2 4 5.58 4 10C4 14.42 7.58 18 12 18C14.21 18 16.21 17.12 17.66 15.66C15.5 16.5 12.5 15.5 11 13C9.5 10.5 10 7 12 5C12.5 4.5 13 4 13.5 3.7C13 2.6 12.5 2 12 2Z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* Inner core */}
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      {/* Core highlight */}
      <circle cx="11" cy="11" r="1" fill="black" opacity="0.3" />
    </svg>
  );
}
