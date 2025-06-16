import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  items?: FaqItem[];
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
  },
  {
    id: "faq-2",
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to track your order.",
  },
  {
    id: "faq-3",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    id: "faq-4",
    question: "Can I change my order after it has been placed?",
    answer:
      "You can change your order within 24 hours of placing it by contacting our customer service team.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    id: "faq-6",
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567.",
  },
  {
    id: "faq-7",
    question: "Are there any discounts for bulk purchases?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.",
  },
];

const Faq3 = ({ items = faqItems }: Faq3Props) => {
  // Split the items into left and right columns
  const leftItems = items.slice(0, Math.ceil(items.length / 2));
  const rightItems = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="pt-[4rem] md:px-0 ">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column */}
          <Accordion
            type="single"
            collapsible
            className="w-full lg:w-1/2 space-y-4"
          >
            {leftItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="md:w-lg pb-6">
                <AccordionTrigger className="hover:no-underline hover:opacity-60">
                  <div className="font-medium lg:text-md">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground text-sm leading-loose">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right column */}
          <Accordion
            type="single"
            collapsible
            className="w-full lg:w-1/2 space-y-4"
          >
            {rightItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="md:w-lg pb-6">
                <AccordionTrigger className="hover:no-underline hover:opacity-60">
                  <div className="font-medium lg:text-md">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground text-sm">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq3 };
