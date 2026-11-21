export type StepIconVariant = "focus" | "experience" | "practice";

export type Step = {
  title: string;
  description: string;
  icon: StepIconVariant;
};

export const steps: Step[] = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    icon: "experience",
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];
