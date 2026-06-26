/**
 * Dr Mom 2.0 — Inline SVG Icon System
 * Usage: <Icon name="book" size={20} color="currentColor" />
 */

const ICONS = {
  // Education
  book: (
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  bookOpen: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  graduationCap: (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  pencil: (
    <>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  clipboard: (
    <>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  microscope: (
    <>
      <path d="M6 18h8M10 22V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M8 11V3h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="14" cy="7" r="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M2 18a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M9 3v6L5 19a2 2 0 0 0 1.84 2.8h10.32A2 2 0 0 0 19 19L15 9V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="5.5" y1="14" x2="18.5" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  // UI / Actions
  play: (
    <polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  lockOpen: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M7 11V7a5 5 0 0 1 9.9-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  key: (
    <>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  eye: (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  eyeOff: (
    <>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  mail: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  // Decorative / Branding
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
  ),
  starOutline: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  trophy: (
    <>
      <polyline points="8 21 12 17 16 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7 4H4a2 2 0 0 0-2 2v4a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V6a2 2 0 0 0-2-2h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M7 4h10a0 0 0 0 1 0 0v6a5 5 0 0 1-10 0V4z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <circle cx="12" cy="12" r="6"  stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <circle cx="12" cy="12" r="2"  stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  lightbulb: (
    <>
      <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M9 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M9 17v-1a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  video: (
    <>
      <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  barChart: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="20" x2="12" y2="4"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="6"  y1="20" x2="6"  y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  repeat: (
    <>
      <polyline points="17 1 21 5 17 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <polyline points="7 23 3 19 7 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  mapPin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  helpCircle: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </>
  ),
  diamond: (
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  messageCircle: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  zap: (
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  ),
  map: (
    <>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="8" y1="2" x2="8" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="16" y1="6" x2="16" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </>
  ),
  creditCard: (
    <>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="1" y1="10" x2="23" y2="10" stroke="currentColor" strokeWidth="1.8"/>
    </>
  ),
  smartphone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </>
  ),
  bank: (
    <>
      <line x1="3" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="6" y1="18" x2="6" y2="11"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="10" y1="18" x2="10" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="14" y1="18" x2="14" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="18" y1="18" x2="18" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="12 2 20 7 4 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  checkCircle: (
    <>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  partyPopper: (
    <>
      <path d="M5.8 11.3L2 22l10.7-3.79" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M11 13l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M13 11l-2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3L13.5 8.5H19L14.5 11.5L16 17L12 14L8 17L9.5 11.5L5 8.5H10.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M5 3l.5 1.5L7 5l-1.5.5L5 7l-.5-1.5L3 5l1.5-.5L5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M19 14l.5 1.5L21 16l-1.5.5L19 18l-.5-1.5L17 16l1.5-.5L19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
  galaxy: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3" fill="none"/>
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" strokeDasharray="6 2" fill="none"/>
    </>
  ),
  school: (
    <>
      <path d="M2 20h20M4 20V8l8-6 8 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M9 20v-5h6v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="9" y="9" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none"/>
    </>
  ),
  heart: (
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
  ),
  palette: (
    <>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      <circle cx="8.5"  cy="7.5"  r="1.5" fill="currentColor"/>
      <circle cx="15.5" cy="7.5"  r="1.5" fill="currentColor"/>
      <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor"/>
      <circle cx="8.5"  cy="14.5" r="1.5" fill="currentColor"/>
      <path d="M12 8a4 4 0 1 0 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </>
  ),
  send: (
    <>
      <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </>
  ),
};

const Icon = ({ name, size = 18, color = "currentColor", className = "", style = {} }) => {
  const paths = ICONS[name];
  if (!paths) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      className={`dm-icon${className ? ` ${className}` : ""}`}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
};

export default Icon;
