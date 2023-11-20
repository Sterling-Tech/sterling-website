import React from "react";
import { Container } from "@/layouts";
import { CTAButton } from "../partials";

export default function ContactForm() {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-16">
          <h1 className="text-heading-three font-bold md:text-heading-two">
            Let us help you help realize the ideas you have in mind
          </h1>
          <form className="flex flex-col gap-4 md:gap-10">
            <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2">
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="name">
                  Name*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="name">
                  Company Name*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="name">
                  Email*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="name"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700">
                <label className="md:text-2xl" htmlFor="name">
                  Phone Number*
                </label>
                <input
                  className="outline-none md:text-lg"
                  id="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-14 border-b border-slate-700 md:col-span-2">
                <label className="md:text-2xl" htmlFor="name">
                  Project Description *
                </label>
                <textarea className="outline-none md:text-lg" id="name" />
              </div>
            </div>

            <div className="self-end">
              <CTAButton title="Submit" />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
