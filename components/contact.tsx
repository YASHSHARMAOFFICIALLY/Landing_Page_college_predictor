"use client";

import { useState } from "react";

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    query: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  const inputClass =
    "w-full rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20";

  return (
    <section className="pointer-events-none mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#010C39] to-[#3766CB] translate-y-[120px]">
      <div className="flex h-max flex-col-reverse items-stretch lg:flex-row">
        
        {/* Globe Image */}
        <div className="relative flex-1 overflow-hidden min-h-[400px] lg:h-auto pointer-events-auto">
          <div className="absolute inset-0 flex items-end justify-center sm:-bottom-96 md:-bottom-40 lg:justify-start lg:-left-50 lg:-bottom-70">
            <img
              src="https://harkirat.classx.co.in/home-globe.svg"
              alt="Global network"
              className="h-auto w-full max-w-[600px] md:max-w-[820px] lg:max-w-full object-contain lg:object-cover"
            />
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col justify-end items-center py-12 gap-12 px-4 md:px-6 lg:px-12 pointer-events-auto">
          <div className="space-y-3 w-full">
            <h2 className="w-full text-2xl font-bold leading-tight text-white md:text-3xl text-start">
              Having doubts? Let's get in touch!
            </h2>
            <p className="text-base text-white/80 md:text-md font-normal">
              Send us your queries and we'll get back to you soon.
            </p>
          </div>

          <div className="space-y-6 w-full">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={inputClass}
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className={inputClass}
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contact"
              placeholder="Your contact number"
              className={inputClass}
              value={form.contact}
              onChange={handleChange}
            />
            <textarea
              name="query"
              placeholder="Type your query here..."
              rows={6}
              className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              value={form.query}
              onChange={handleChange}
            />

            <div className="flex items-center justify-center">
              <button
                onClick={handleSubmit}
                className="rounded-lg bg-[#00DDB3] px-8 py-3 font-semibold text-gray-900 transition-all hover:bg-[#00DDB3]/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};