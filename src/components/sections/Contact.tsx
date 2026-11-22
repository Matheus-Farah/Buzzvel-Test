import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ClockIcon, MessageIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

type ContactInfo = {
  label: string;
  icon: ReactNode;
  value: ReactNode;
};

const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    icon: <MessageIcon />,
    value: (
      <a href="mailto:contact@luma.com" className="text-primary hover:underline">
        contact@luma.com
      </a>
    ),
  },
  {
    label: "Response Time",
    icon: <ClockIcon />,
    value: <span className="text-subtle">Up to 24 hours on business days</span>,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-line border-y bg-white py-15 lg:py-25"
    >
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-10 lg:max-w-120">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            titleId="contact-title"
            description="Have a question? We're here to help. Wether you're looking for the right course, learning with your team or interested in teaching with Luma, we'd love to hear from you."
          />

          <ul className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <li key={item.label} className="bg-cream flex items-center gap-4 rounded-xl p-5">
                <span className="bg-primary-light text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                  {item.icon}
                </span>

                <div className="text-sm/6">
                  <p>{item.label}</p>
                  {item.value}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-line rounded-2xl border bg-white p-6 shadow-[0_12px_32px_rgb(23_27_44/0.04)] sm:p-10 lg:w-135">
          <h3 className="font-heading text-xl/8 font-bold">Contact us</h3>

          <p className="text-muted mt-1 text-sm/6">Fill out the fields and we will get in touch.</p>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
