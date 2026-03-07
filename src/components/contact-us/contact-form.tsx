"use client";

import React, { useState, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Container } from "@/layouts";
import { toast } from "sonner";
import { MapPin, Phone, Mail } from "lucide-react";
import { RightArrowCTA, LoadingSpinner } from "../icons";
import { sanityClient } from "@/config";
import GoogleMapCard from "@/components/partials/googleMapCard";

interface IContactInfo {
  _type: string;
  full_name: string;
  email: string;
  phone: string;
  message: string;
  company_name: string;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [desc, setDesc] = useState("");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: (data: IContactInfo) => sanityClient.create(data),
    onSuccess() {
      toast.success("Your message has been sent successfully");
    },
    onError() {
      toast.error("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await mutateAsync({
        _type: "guest",
        full_name: name,
        email,
        phone: phoneNo,
        message: desc,
        company_name: companyName,
      });

      setName("");
      setCompanyName("");
      setEmail("");
      setPhoneNo("");
      setDesc("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-slate-50 py-24">
      <Container>

        {/* SECTION HEADER */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Let's Build Something Great
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Have a project in mind? Tell us about it and our team will get back
            to you shortly.
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-8">

            <h3 className="text-2xl font-semibold text-slate-900">
              Get in Touch
            </h3>

            <p className="text-slate-600 leading-relaxed">
              We help utilities and enterprise organizations build powerful
              platforms for revenue assurance, intelligent vending, and
              seamless ERP integrations.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900">Office Address</p>
                  <p className="text-slate-600">
                    No 10 Chris Akinro Street<br />
                    Agungi, Lekki, Lagos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">+234 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-600">contact@sterling.ng</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-lg">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary"
                />

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary"
                />

              </div>

              <textarea
                placeholder="Tell us about your project..."
                required
                rows={5}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-primary"
              />

              <button
                disabled={isPending}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white disabled:opacity-60"
              >
                {isPending ? (
                  <LoadingSpinner fill="black" size="28" />
                ) : (
                  <>
                    Submit Message
                    <RightArrowCTA />
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

        {/* GOOGLE MAP */}
        <div className="mt-24">
          <GoogleMapCard />
        </div>

      </Container>
    </section>
  );
}