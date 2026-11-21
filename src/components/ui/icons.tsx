import type { SVGProps } from "react";

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 25 22"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 22v-8.8c0-3.6.9-6.6 2.7-9C4.5 1.8 7 .4 10.2 0l1 2.6C9.4 3.2 8 4.3 7.1 5.8c-.9 1.5-1.3 3.1-1.2 4.8h4.6V22H0Zm13.5 0v-8.8c0-3.6.9-6.6 2.7-9C18 1.8 20.5.4 23.7 0l1 2.6c-1.8.6-3.2 1.7-4.1 3.2-.9 1.5-1.3 3.1-1.2 4.8H24V22H13.5Z" />
    </svg>
  );
}
