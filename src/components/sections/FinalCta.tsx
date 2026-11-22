import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaDecorations } from "@/components/ui/CtaDecorations";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="bg-yellow-light relative isolate py-15 lg:py-25"
    >
      <CtaDecorations />

      <div className="relative mx-auto flex max-w-180 flex-col items-center px-5 text-center lg:px-8">
        <Image
          src="/images/cta-avatars.png"
          alt=""
          width={656}
          height={40}
          className="h-10 w-34 object-cover"
        />

        <h2
          id="final-cta-title"
          className="font-heading mt-8 text-4xl/11 font-extrabold tracking-[-0.9px] lg:text-[56px]/16 lg:tracking-[-1.4px]"
        >
          What will you learn next?
        </h2>

        <p className="text-muted mt-3 text-base/6.5 lg:text-lg/7">
          Start with one course. Build from there.
        </p>

        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#courses" size="lg">
            Explore all courses
          </ButtonLink>

          <ButtonLink href="#contact" variant="secondary" size="lg">
            Join Luma
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
