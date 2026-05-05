// Single inline-SVG icon registry. Keeps bundle tiny and avoids icon libraries.

const stroke = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.6,
};

const paths = {
  menu: <path {...stroke} strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />,
  close: <path {...stroke} strokeWidth="2" d="M6 6l12 12M6 18L18 6" />,
  chevronLeft: <path {...stroke} strokeWidth="2" d="M15 18l-6-6 6-6" />,
  chevronRight: <path {...stroke} strokeWidth="2" d="M9 18l6-6-6-6" />,
  chevronDown: <path {...stroke} strokeWidth="2" d="M6 9l6 6 6-6" />,
  arrowRight: <path {...stroke} strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />,
  arrowUp: <path {...stroke} strokeWidth="2" d="M12 19V5M5 12l7-7 7 7" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" {...stroke} />
      <path {...stroke} d="M20 20l-3.5-3.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path {...stroke} d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  contrast: (
    <>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor" />
    </>
  ),
  textSize: (
    <path {...stroke} d="M4 7V5h10v2M9 5v14M7 19h4M14 12h7M14 12V8h7v4M17.5 8v11M16 19h3" />
  ),
  scheme: <path {...stroke} d="M9 12h6m-6 4h4M7 4h7l5 5v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 0v5h5" />,
  service: <path {...stroke} d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />,
  apply: <path {...stroke} d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" />,
  announce: <path {...stroke} d="M3 11v2a1 1 0 0 0 1 1h3l5 4V6L7 10H4a1 1 0 0 0-1 1zm14-4a6 6 0 0 1 0 10" />,
  rti: (
    <>
      <path {...stroke} d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <path {...stroke} d="M9 14h6M9 17h4" />
      <path {...stroke} d="M11 10.5a1.5 1.5 0 1 1 1.7 1.5c-.5.1-.7.5-.7 1V13" />
      <circle cx="12" cy="15" r="0.4" fill="currentColor" />
    </>
  ),
  tender: (
    <>
      <path {...stroke} d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" />
      <path {...stroke} d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M9 12h6M9 16h4" />
    </>
  ),
  download: <path {...stroke} d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" />,
  directory: (
    <>
      <circle cx="12" cy="8" r="3.5" {...stroke} />
      <path {...stroke} d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="9" r="3" {...stroke} />
      <circle cx="17" cy="10" r="2.4" {...stroke} />
      <path {...stroke} d="M3 19a6 6 0 0 1 12 0M14 19a5 5 0 0 1 7 0" />
    </>
  ),
  programme: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
      <path {...stroke} d="M3 9h18M7 13h10M7 16h6" />
    </>
  ),
  handshake: <path {...stroke} d="M3 12l4-4 3 3 4-4 7 7-3 3-4-4-3 3-3-3-4 4z" />,
  map: (
    <>
      <path {...stroke} d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path {...stroke} d="M9 4v14M15 6v14" />
    </>
  ),
  phone: <path {...stroke} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
      <path {...stroke} d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path {...stroke} d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" {...stroke} />
    </>
  ),
  external: <path {...stroke} d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />,
  eye: (
    <>
      <path {...stroke} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" {...stroke} />
    </>
  ),
  twitter: (
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.835l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z"
      fill="currentColor"
    />
  ),
  facebook: (
    <path
      d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} fill="none" />
      <circle cx="12" cy="12" r="4" {...stroke} fill="none" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
  linkedin: (
    <path
      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.7 0h4.37v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.06c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.21V22H7.92V8z"
      fill="currentColor"
    />
  ),
  youtube: (
    <path
      d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"
      fill="currentColor"
    />
  ),
  play: <path d="M8 5v14l11-7z" fill="currentColor" />,
};

export default function Icon({ name, className = "w-5 h-5", ...rest }) {
  const node = paths[name];
  if (!node) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...rest}
    >
      {node}
    </svg>
  );
}
