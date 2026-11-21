import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepIcon } from "@/components/ui/StepIcon";
import { steps } from "@/data/steps";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="py-15 lg:py-25">
      <Container>
        <SectionHeading
          eyebrow="How Luma Works"
          title="Less borwsing. More learning."
          titleId="how-it-works-title"
          align="center"
        />

        <ol className="mt-12 grid gap-10 lg:mt-27 lg:grid-cols-3 lg:gap-20">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="lg:after:bg-line relative lg:after:absolute lg:after:top-7 lg:after:-right-16 lg:after:left-18 lg:after:h-px lg:last:after:hidden"
            >
              <div aria-hidden="true">
                <StepIcon variant={step.icon} />
              </div>

              <p className="text-subtle mt-6 text-xs font-semibold tracking-[0.12em] uppercase">
                Step {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="font-heading mt-2 text-xl/8 font-bold">{step.title}</h3>

              <p className="text-muted mt-3 text-base/7">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
