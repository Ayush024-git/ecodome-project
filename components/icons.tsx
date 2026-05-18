import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function BrandMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="10"
        fill="url(#brand-fill)"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <path
        d="M22.4 9.8H14.8C10.9 9.8 8.5 12.1 8.5 15.5C8.5 18.7 10.7 21 14.5 21H18.6C20.8 21 22.1 22.2 22.1 24C22.1 25.9 20.7 27 18.3 27H9.4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="brand-fill" x1="6" y1="4" x2="25" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DCE4FF" />
          <stop offset="1" stopColor="#6F86D8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.16675 10H15.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.8333 5L15.8333 10L10.8333 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 10.4167L8.33333 13.75L15 7.08334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3L19 6V11.2C19 16 16.1 19.8 12 21C7.9 19.8 5 16 5 11.2V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.5 12L11.2 13.7L14.8 10.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3L13.7 9.3L20 11L13.7 12.7L12 19L10.3 12.7L4 11L10.3 9.3L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M9 8L5 12L9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8L19 12L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5L11 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M13 2L5 13H11L10 22L19 10H13L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 7H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 7L4.5 13H10.5L7.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.5 7L13.5 13H19.5L16.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8L12 13L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M19 16.5V18.5C19 19.6 18.1 20.5 17 20.5C9.5 20.5 3.5 14.5 3.5 7C3.5 5.9 4.4 5 5.5 5H7.5C8.2 5 8.8 5.5 8.9 6.1L9.4 9.4C9.5 10 9.2 10.7 8.7 11L7.2 12C8.3 14.2 10.1 16 12.3 17.1L13.3 15.6C13.7 15.1 14.3 14.8 15 14.9L18.3 15.4C18.9 15.5 19.4 16.1 19.4 16.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 12H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 3C14.8 5.9 16.4 8.8 16.4 12C16.4 15.2 14.8 18.1 12 21C9.2 18.1 7.6 15.2 7.6 12C7.6 8.8 9.2 5.9 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
