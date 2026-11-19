import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/sections/HeroVisual";

const avatars = [
  { src: "/images/avatar-1.png", alt: "" },
  { src: "/images/avatar-2.png", alt: "" },
  { src: "/images/avatar-3.png", alt: "" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip py-15 lg:py-25">
      <Container className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:max-w-140">
          <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">
            Learn at your own pace
          </p>

          <h1
            id="hero-title"
            className="font-heading mt-4 text-[40px]/[44px] font-extrabold tracking-[-1px] lg:text-[64px]/[70px] lg:tracking-[-1.6px]"
          >
            Build skills that actually move you forward.
          </h1>

          <p className="text-muted mt-6 text-base/[26px] lg:max-w-120 lg:text-lg/7">
            Practical courses taught by people who do the work every day. Learn design, technology,
            business and more — one focused lesson at a time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#courses" size="lg">
              Explore courses
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" size="lg">
              See how it works
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <Image
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={32}
                  height={32}
                  className="border-cream bg-primary-light size-8 rounded-full border-2 object-cover"
                />
              ))}
            </div>

            <p className="text-muted text-sm/6">
              <strong className="text-ink font-bold">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
