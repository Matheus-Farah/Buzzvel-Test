"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { NavLink } from "@/data/navigation";

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="text-ink flex size-9 items-center justify-center rounded-md"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id={menuId}
        hidden={!isOpen}
        className="border-line bg-cream absolute inset-x-0 top-full border-b"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col px-5 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="text-ink block py-3 text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-line flex flex-col gap-2 border-t px-5 py-4">
            <Link
              href="#login"
              onClick={closeMenu}
              className="text-muted py-2.5 text-center text-sm/6"
            >
              Log in
            </Link>

            <ButtonLink href="#courses" onClick={closeMenu}>
              Start learning
            </ButtonLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
