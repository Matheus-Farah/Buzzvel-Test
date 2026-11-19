import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="border-line bg-cream sticky top-0 z-50 border-b">
      <Container className="flex h-17 items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/">
          <Image src="/logo.svg" alt="Luma" width={54} height={17} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted hover:text-ink text-sm/6 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 justify-self-end lg:flex">
          <a
            href="#login"
            className="text-muted hover:text-ink px-4 py-2.5 text-sm/6 transition-colors"
          >
            Log in
          </a>

          <ButtonLink href="#courses">Start learning</ButtonLink>
        </div>

        <MobileMenu links={navLinks} />
      </Container>
    </header>
  );
}
