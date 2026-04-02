"use client";

import { TestimonialMarquee } from "@/components/siddz-ui/marquee";
import { Container } from "./Container";

const testimonials = [
  {
    name: "Arjun Mehta",
    username: "@arjunbuilds",
    content: "Joined 100x Dev thinking I knew JavaScript. Turns out I only knew console.log. Character development arc unlocked.",
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  {
    name: "Neha Sharma",
    username: "@nehacodes",
    content: "Started the course for fun. Now I debug other people's code for fun. This is my villain origin story.",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
  {
    name: "Rohit Verma",
    username: "@rohitdev",
    content: "Watched one Harkirat lecture and suddenly I have opinions about system design. Who allowed this growth.",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    name: "Priya Nair",
    username: "@priyacodes",
    content: "Used to fear backend. Now I casually say 'let's build a scalable service' like I know what I'm doing.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "Karan Singh",
    username: "@karanscripts",
    content: "My sleep schedule is gone but my GitHub is finally alive. Fair trade honestly.",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    name: "Sneha Patel",
    username: "@snehadev",
    content: "Before 100x Dev: tutorial hell. After 100x Dev: still confused but now building cooler stuff.",
    avatar: "https://i.pravatar.cc/150?img=26",
  },
  {
    name: "Aditya Rao",
    username: "@adiwritescode",
    content: "Told my friends I'm learning dev seriously now. They sent bugs instead of memes. Big mistake.",
    avatar: "https://i.pravatar.cc/150?img=27",
  },
  {
    name: "Vikram Joshi",
    username: "@vikramdev",
    content: "Every time I think I understand something, the next lecture humbles me instantly. Growth mindset forced.",
    avatar: "https://i.pravatar.cc/150?img=28",
  },
  {
    name: "Ananya Das",
    username: "@ananyabuilds",
    content: "Joined for coding. Stayed for the chaos, concepts, and existential crisis about optimization.",
    avatar: "https://i.pravatar.cc/150?img=29",
  },
  {
    name: "Rahul Kapoor",
    username: "@rahulcodes",
    content: "Now I look at apps and think 'I could build this'. I cannot build this. But I think it.",
    avatar: "https://i.pravatar.cc/150?img=30",
  },
];

export const Marquee = () => {
    
  return (
    <div className="bg-neutral-200">
       
    

    <div className="bg-neutral-200 dark:bg-[#0a0f1e]">
      <div className="w-full py-20">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-6">
          <div className="flex flex-col items-center mb-12 justify-center gap-y-4 text-center">
            <h2 className="text-4xl text-center sm:text-start font-bold text-[#001c52] dark:text-white md:text-5xl">
              Why 100xDevs?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Our most comprehensive and impactful learning experience
            </p>
          </div>
        </div>

        <div className="relative  flex h-full w-full flex-col items-center justify-center overflow-hidden  font-inter">
          <TestimonialMarquee
            testimonials={testimonials as any }
            speed={45}
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
    </div>
  );
};