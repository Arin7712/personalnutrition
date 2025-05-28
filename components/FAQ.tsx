import { Noto_Serif } from 'next/font/google';
import React from 'react'
import { Faq3 } from './faq3';

const font = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  display: "swap",
});


const demoData = {
  items: [
    {
      id: "faq-1",
      question: "What is P-Nut's 90 Day Gut Reset Program?",
      answer:
        "shadcnblocks is a collection of ready-to-use block components built on top of shadcn/ui, designed to help you build beautiful websites faster.",
    },
    {
      id: "faq-2",
      question: "How is the program personalised?",
      answer:
        "shadcnblocks components are designed to be copied and pasted into your project. Simply browse the components, click on the one you want to use, and copy the code directly into your project. This gives you full control over the code and allows for easy customization.",
    },
    {
      id: "faq-3",
      question: "How are the diet plans created?",
      answer:
        "Yes, shadcnblocks is open-source and free to use in both personal and commercial projects. You can customize and modify the blocks to suit your needs.",
    },
    {
      id: "faq-4",
      question: "How are the diet plans created?",
      answer:
        "Absolutely! All blocks are built with customization in mind. You can modify the styling, content, and behavior through props and Tailwind CSS classes.",
    },
    {
      id: "faq-5",
      question: "How are the diet plans created?",
      answer:
        "Yes, we provide support through our GitHub repository where you can report issues, suggest features, or ask questions about implementation.",
    },
        {
      id: "faq-2",
      question: "How do you ensure that I get started and stay on track?",
      answer:
        "shadcnblocks components are designed to be copied and pasted into your project. Simply browse the components, click on the one you want to use, and copy the code directly into your project. This gives you full control over the code and allows for easy customization.",
    },
    {
      id: "faq-3",
      question: "What can I expect in the first month?",
      answer:
        "Yes, shadcnblocks is open-source and free to use in both personal and commercial projects. You can customize and modify the blocks to suit your needs.",
    },
        {
      id: "faq-2",
      question: "What kind of support will I receive?",
      answer:
        "shadcnblocks components are designed to be copied and pasted into your project. Simply browse the components, click on the one you want to use, and copy the code directly into your project. This gives you full control over the code and allows for easy customization.",
    },
    {
      id: "faq-3",
      question: "What kind of support will I receive?",
      answer:
        "Yes, shadcnblocks is open-source and free to use in both personal and commercial projects. You can customize and modify the blocks to suit your needs.",
    },
        {
      id: "faq-2",
      question: "What kind of support will I receive?",
      answer:
        "shadcnblocks components are designed to be copied and pasted into your project. Simply browse the components, click on the one you want to use, and copy the code directly into your project. This gives you full control over the code and allows for easy customization.",
    },

  ],
};

const FAQ = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center md:px-0 px-6'>
            <h1
        className={`md:w-[50%] md:text-5xl text-4xl  text-center ${font.className}`}
      >
        FAQs      </h1>
        <Faq3 {...demoData} />;
    </div>
  )
}

export default FAQ
