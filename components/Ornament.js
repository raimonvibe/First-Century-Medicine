export function Ornament({ className = "" }) {
  return (
    <svg
      className={`mx-auto text-gold ${className}`}
      width="180"
      height="28"
      viewBox="0 0 180 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 14h52M118 14h52"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M90 4c-6 6-10 8-18 10 8 2 12 4 18 10 6-6 10-8 18-10-8-2-12-4-18-10Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="64" cy="14" r="2" fill="currentColor" />
      <circle cx="116" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

export function OliveMark({ className = "h-9 w-9" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" stroke="#b8963e" strokeWidth="1.2" />
      <path
        d="M24 38c8-6 14-14 14-22-8 2-12 8-14 22Z"
        fill="#3a452c"
      />
      <path
        d="M24 38c-8-6-14-14-14-22 8 2 12 8 14 22Z"
        fill="#5b6a43"
      />
      <path d="M24 10v28" stroke="#b8963e" strokeWidth="1.4" />
      <circle cx="24" cy="12" r="2.2" fill="#b85c38" />
    </svg>
  );
}
