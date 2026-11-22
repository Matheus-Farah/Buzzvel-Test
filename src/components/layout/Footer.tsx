import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerGroups } from "@/data/footer";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="bg-ink pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-[1fr_repeat(3,13rem)]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Luma"
                width={54}
                height={17}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-mist mt-3 max-w-60 text-sm/6">
              Practical learning for curious people.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-labelledby={`footer-${group.title.toLocaleLowerCase()}`}>
              <h2
                id={`footer-${group.title.toLocaleLowerCase()}`}
                className="text-soft-white text-xs font-semibold tracking-[0.12em] uppercase"
              >
                {group.title}
              </h2>

              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-mist text-sm/6 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-muted mt-15 border-t pt-6">
          <p className="text-soft-white text-[13px]/[19.5px]">© {currentYear} Luma Learning</p>
        </div>
      </Container>
    </footer>
  );
}
