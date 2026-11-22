import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Commnunity() {
  return (
    <section id="community" aria-labelledby="community-title" className="py-15 lg:py-25">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-8">
          <SectionHeading
            eyebrow="The people"
            title="Meet international studnets & teachers"
            titleId="community-title"
          />

          <p className="text-muted text-base/6.5 lg:text-lg/7">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel,
            velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.
            Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>

          <ButtonLink href="#contact" variant="secondary" size="lg">
            Explore teachers and students
          </ButtonLink>
        </div>

        <div className="relative mx-auto aspect-530/522 w-full max-w-132.5">
          <Image
            src="/images/community-mosaic.png"
            alt="Collage of students and teachers from around the world studying, teaching and graduating"
            fill
            sizes="(min-width: 1024px) 530px, 100vw"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
