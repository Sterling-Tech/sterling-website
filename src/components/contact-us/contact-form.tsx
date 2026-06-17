
"use client";

import React, { useState, FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Container } from "@/layouts";
import { toast } from "sonner";
import { RightArrowCTA, LoadingSpinner } from "../icons";
import { sanityClient } from "@/config";
import MapSection from "../about-us/Map";

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
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inputStyles =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="mt-[-30rem] opacity-70 flex">
          <div className="ml-auto bg-gray-50 p-10 mb-5 rounded-lg font-bold text-2xl">
            <h1>Our Location</h1>
            <h1>
              10 Chris Akinro Cl, Lekki Penninsula II, Lekki 106104, Lagos
            </h1>
          </div>
        </div>
      </Container>
      <Container>
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow p-8 md:p-14">

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Let’s Bring Your Idea to Life
            </h1>
            <p className="mt-4 text-slate-600">
              Tell us about your project and we’ll get back to you shortly.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Full Name *
                </label>
                <input
                  className={inputStyles}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Company Name *
                </label>
                <input
                  className={inputStyles}
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Email Address *
                </label>
                <input
                  className={inputStyles}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  className={inputStyles}
                  type="text"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Project Description *
              </label>
              <textarea
                required
                rows={5}
                className={inputStyles}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isPending}
                className="group flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 text-black font-semibold transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <LoadingSpinner fill="black" size="28" />
                ) : (
                  <>
                    Submit Request
                    <RightArrowCTA />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        <div className='mt-16 h-[350px]'>
          <MapSection />
        </div>
      </Container>
    </section>
  );
}


// import React, { useState, FormEvent } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { Container } from "@/layouts";
// import { toast } from "sonner";
// import { RightArrowCTA } from "../icons";
// import { LoadingSpinner } from "../icons";
// import { sanityClient } from "@/config";

// interface IContactInfo {
//   _type: string;
//   full_name: string;
//   email: string;
//   phone: string;
//   message: string;
//   company_name: string;
// }

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [desc, setDesc] = useState("");

//   const { isPending, mutateAsync } = useMutation({
//     mutationFn: (data: IContactInfo) =>
//       sanityClient.create(data).then((res) => {
//         return res;
//       }),
//     onSuccess(data) {
//       toast.success("Your message has been sent");
//     },
//   });

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await mutateAsync({
//         _type: "guest",
//         full_name: name,
//         email: email,
//         phone: phoneNo,
//         message: desc,
//         company_name: companyName,
//       });

//       setName("");
//       setCompanyName("");
//       setEmail("");
//       setPhoneNo("");
//       setDesc("");
//     } catch (error) {
//       toast.error("Something went wrong, try again");
//     }
//   };

//   return (
//     <div className="py-20">
//       <Container>
//         <div className="space-y-16">
//           <h1 className="text-heading-three font-bold md:text-heading-two">
//             Let us help you realize the ideas you have in mind
//           </h1>
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col gap-4 md:gap-10"
//           >
//             <div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2">
//               <div className="flex flex-col gap-14 border-b border-slate-700">
//                 <label className="md:text-2xl" htmlFor="name">
//                   Name*
//                 </label>
//                 <input
//                   className="outline-none md:text-lg"
//                   id="name"
//                   type="text"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col gap-14 border-b border-slate-700">
//                 <label className="md:text-2xl" htmlFor="company-name">
//                   Company Name*
//                 </label>
//                 <input
//                   className="outline-none md:text-lg"
//                   id="company-name"
//                   type="text"
//                   required
//                   value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col gap-14 border-b border-slate-700">
//                 <label className="md:text-2xl" htmlFor="email">
//                   Email*
//                 </label>
//                 <input
//                   className="outline-none md:text-lg"
//                   id="email"
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col gap-14 border-b border-slate-700">
//                 <label className="md:text-2xl" htmlFor="phone">
//                   Phone Number
//                 </label>
//                 <input
//                   className="outline-none md:text-lg"
//                   id="phone"
//                   type="text"
//                   value={phoneNo}
//                   onChange={(e) => setPhoneNo(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col gap-14 border-b border-slate-700 md:col-span-2">
//                 <label className="md:text-2xl" htmlFor="desc">
//                   Project Description *
//                 </label>
//                 <textarea
//                   required
//                   className="outline-none md:text-lg"
//                   id="desc"
//                   value={desc}
//                   onChange={(e) => setDesc(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="self-end">
//               <button
//                 // disabled={isPending}
//                 className="group flex w-full items-center gap-4 rounded-[40px] border border-primary bg-primary px-10 py-4 text-black transition-all duration-100 hover:bg-transparent hover:text-primary disabled:cursor-not-allowed md:w-max md:text-[1.75rem]"
//               >
//                 {isPending ? (
//                   <LoadingSpinner fill="black" size="34" />
//                 ) : (
//                   <>
//                     <span className="mx-auto font-semibold md:mx-0">
//                       Submit
//                     </span>{" "}
//                     <RightArrowCTA />
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </Container>
//     </div>
//   );
// }