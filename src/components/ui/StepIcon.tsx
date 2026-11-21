import type { StepIconVariant } from "@/data/steps";

type StepIconProps = {
  variant: StepIconVariant;
};

export function StepIcon({ variant }: StepIconProps) {
  switch (variant) {
    case "focus":
      return (
        <div className="bg-primary-light flex size-14 items-center justify-center rounded-full">
          <div className="bg-primary size-6 rounded-md" />
        </div>
      );

    case "experience":
      return (
        <div className="relative size-14">
          <div className="bg-orange absolute inset-0 -rotate-12 rounded-lg" />
          <div className="bg-coral absolute top-6 left-6 size-7 rounded-full" />
        </div>
      );

    case "practice":
      return (
        <div className="bg-yellow-light relative size-14 rounded-xl">
          <div className="bg-yellow-dark absolute top-7 left-2 size-5 rounded-full" />
        </div>
      );
  }
}
