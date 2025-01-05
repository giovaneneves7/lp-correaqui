export function MapBackground() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 600">
      {/* Roads */}
      <path d="M0 300 L400 300" stroke="#e5e7eb" strokeWidth="8" />
      <path d="M200 0 L200 600" stroke="#e5e7eb" strokeWidth="8" />

      {/* Building blocks */}
      <rect x="20" y="40" width="60" height="40" fill="#f3f4f6" />
      <rect x="120" y="60" width="50" height="50" fill="#f3f4f6" />
      <rect x="270" y="30" width="70" height="60" fill="#f3f4f6" />
      <rect x="30" y="320" width="90" height="40" fill="#f3f4f6" />
      <rect x="150" y="340" width="60" height="70" fill="#f3f4f6" />
      <rect x="280" y="380" width="50" height="50" fill="#f3f4f6" />
      <rect x="40" y="480" width="70" height="60" fill="#f3f4f6" />
      <rect x="220" y="500" width="80" height="40" fill="#f3f4f6" />

      {/* Street names */}
      <text x="210" y="290" fill="#9ca3af" fontSize="12" fontFamily="system-ui">
        Av. Principal
      </text>
      <text
        x="320"
        y="320"
        fill="#9ca3af"
        fontSize="12"
        fontFamily="system-ui"
        transform="rotate(90 320,320)"
      >
        Rua do Comércio
      </text>
    </svg>
  );
}
