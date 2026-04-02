"use client"
import { useState } from "react"
import { Container } from "./Container"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqsData = [
    {
      question: 'What makes 100xDevs different from other coding platforms?',
      answer: 'No compromises. With 100xDevs, you dont have to choose between different tutors and random tutorials. Get the power of building production-ready applications.'
    },
    {
      question: 'Do I need prior coding experience to join?',
      answer: 'No prior experience is required. Our courses are designed to take you from beginner to advanced levels with structured learning paths.'
    },
    {
      question: 'What kind of support can I expect?',
      answer: 'Youll get 24/7 community support through our active Discord, weekly study groups, peer code reviews, and direct mentorship opportunities.'
    },
    {
      question: 'Are the courses self-paced or scheduled?',
      answer: 'We offer both self-paced learning materials and scheduled live sessions, giving you the flexibility to learn at your own pace while staying connected with the community.'
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, youll receive a certificate of completion for each course you finish, along with portfolio projects that demonstrate your skills to potential employers.'
    }
  ]

  return (
    <div className="w-full  bg-[lab(94.2%_0_0)] dark:bg-black pb-20">

      <Container className="flex flex-col items-center text-center px-3 w-full">

        <h1 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
          FAQ
        </h1>

        <p className="text-muted-foreground mt-4 max-w-sm">
          Get your questions answered
        </p>

        <div className="max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left">

          {faqsData.map((faq, index) => (
            <div key={index} className="w-full">

              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full cursor-pointer bg-[lab(94.2%_0_0)] border border-border p-4 rounded-lg"
              >
                <h2 className="text-sm text-neutral-800 dark:text-neutral-800">
                  {faq.question}
                </h2>

                <svg
                  className={`w-4 h-4 transition-all duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p
                className={`text-sm dark:text-neutral-200 text-neutral-600 px-4 transition-all duration-300 ${
                  openIndex === index
                    ? "opacity-100 max-h-[200px] pt-4"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </p>

            </div>
          ))}

        </div>
      </Container>
    </div>
  )
}