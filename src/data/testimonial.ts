export type Testimonial = {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export type Stat = {
  value: string;
  label: string;
};

export const testimonial: Testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    avatar: "/images/alex-morgan.png",
  },
};

export const stats: Stat[] = [
  { value: "24k+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];
