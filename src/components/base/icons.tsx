import type { SVGProps } from "react";

/**
 * Generic geometric UI icons, hand-drawn as inline SVG.
 *
 * These are NOT brand assets and are not traced from any supplied artwork —
 * they are neutral line icons standing in for the official icon set, which
 * has not been supplied (see docs/assets.md). Every consumer routes through
 * <IconTile name="..." />, so swapping in the real set later is a change to
 * this file alone. See docs/decisions.md #6.
 */

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function make(path: React.ReactNode) {
  return function IconGlyph(props: SVGProps<SVGSVGElement>) {
    return (
      <svg {...base} aria-hidden="true" {...props}>
        {path}
      </svg>
    );
  };
}

export const icons = {
  // — Metrics
  building: make(
    <path d="M4 21h16M6 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M14 21V10h3a1 1 0 0 1 1 1v10M9 8h2M9 12h2M9 16h2" />,
  ),
  clock: make(
    <>
      <circle cx="12" cy="12" r="8.3" />
      <path d="M12 7.4V12l3 1.8" />
    </>,
  ),
  network: make(
    <>
      <circle cx="12" cy="5.4" r="2.2" />
      <circle cx="5.2" cy="18.2" r="2.2" />
      <circle cx="18.8" cy="18.2" r="2.2" />
      <path d="M10.7 7.4 6.4 16.1M13.3 7.4l4.3 8.7M7.4 18.2h9.2" />
    </>,
  ),
  users: make(
    <>
      <circle cx="9.6" cy="8" r="3.4" />
      <path d="M3.8 19.4v-1.3a3.6 3.6 0 0 1 3.6-3.6h4.4a3.6 3.6 0 0 1 3.6 3.6v1.3M15.4 4.9a3.4 3.4 0 0 1 0 6.4M20.2 19.4v-1.3a3.6 3.6 0 0 0-2.7-3.5" />
    </>,
  ),

  // — Services
  monitor: make(
    <>
      <rect x="3" y="5" width="18" height="11" rx="1.4" />
      <path d="M9 20h6M12 16v4" />
    </>,
  ),
  storefront: make(
    <path d="M4.2 9.6V20h15.6V9.6M3 9.6 4.7 4.6h14.6L21 9.6M3 9.6h18M9.2 20v-5.6h5.6V20" />,
  ),
  shield: make(
    <>
      <path d="M12 3.4 5.2 6v5.2c0 4.2 2.8 7.5 6.8 9.1 4-1.6 6.8-4.9 6.8-9.1V6L12 3.4Z" />
      <path d="m9.3 11.9 1.9 1.9 3.5-3.7" />
    </>,
  ),
  presentation: make(
    <path d="M3.4 4.4h17.2M4.8 4.4v9.8h14.4V4.4M12 14.2V19M9.2 19h5.6M8.6 11V8.7M11.7 11V7.1M14.9 11V8" />,
  ),

  // — Mission / Vision / Values / Goal
  eye: make(
    <>
      <path d="M2.6 12S6 6.3 12 6.3 21.4 12 21.4 12 18 17.7 12 17.7 2.6 12 2.6 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>,
  ),
  target: make(
    <>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="12" cy="12" r="1" />
    </>,
  ),
  spark: make(
    <path d="m12 3.2 2.3 5.3 5.3 2.3-5.3 2.3L12 18.4l-2.3-5.3-5.3-2.3 5.3-2.3L12 3.2Z" />,
  ),
  flag: make(<path d="M6 21V3.8M6 4.6h11l-2 3.5 2 3.5H6" />),

  // — Investment
  documentChart: make(
    <path d="M6 3.6h8l4 4v12.8H6zM14 3.6v4h4M9.2 16.6v-3.2M12 16.6v-5.2M14.8 16.6v-2.1" />,
  ),
  chartLine: make(<path d="M4 4v16h16M7.4 15.1l3.3-3.7 2.7 2.2 4.7-5.5" />),
  layers: make(
    <path d="m12 3.4 8.2 4.3-8.2 4.3-8.2-4.3L12 3.4ZM3.8 12.3l8.2 4.3 8.2-4.3M3.8 16.5l8.2 4.3 8.2-4.3" />,
  ),
  documentCheck: make(
    <path d="M6 3.6h8l4 4v12.8H6zM14 3.6v4h4M9.2 14.6l2 2 4-4.2" />,
  ),

  // — Contact
  headset: make(
    <path d="M4.6 14.4v-2.3a7.4 7.4 0 0 1 14.8 0v2.3M3 15.2a1.8 1.8 0 0 1 1.8-1.8h.7v5.2h-.7A1.8 1.8 0 0 1 3 16.8zM21 15.2a1.8 1.8 0 0 0-1.8-1.8h-.7v5.2h.7a1.8 1.8 0 0 0 1.8-1.8z" />,
  ),
  phone: make(
    <path d="M7.8 4.4H5.5a2 2 0 0 0-2 2.2c.4 6.6 5.7 11.9 12.3 12.3a2 2 0 0 0 2.2-2v-2.3l-3.6-1.4-1.7 1.7a12.7 12.7 0 0 1-4.8-4.8l1.7-1.7z" />,
  ),
  mail: make(
    <>
      <rect x="3.2" y="5.6" width="17.6" height="12.8" rx="1.4" />
      <path d="m3.8 6.6 8.2 6.1 8.2-6.1" />
    </>,
  ),
  pin: make(
    <>
      <path d="M12 21s6.9-5.1 6.9-10.9a6.9 6.9 0 1 0-13.8 0C5.1 15.9 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>,
  ),

  // — UI chrome
  play: make(<path d="M8 5.5v13l10.5-6.5L8 5.5Z" />),
  chevronRight: make(<path d="m9.5 5.5 6.5 6.5-6.5 6.5" />),
  chevronLeft: make(<path d="m14.5 5.5-6.5 6.5 6.5 6.5" />),
  menu: make(<path d="M3.5 7h17M3.5 12h17M3.5 17h17" />),
  close: make(<path d="m6 6 12 12M18 6 6 18" />),
  image: make(
    <>
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="1.4" />
      <path d="m3.8 16.6 4.7-4.5 3.2 3 3-2.6 5.5 4.7" />
      <circle cx="8.7" cy="9.5" r="1.4" />
    </>,
  ),
} as const;

export type IconName = keyof typeof icons;
