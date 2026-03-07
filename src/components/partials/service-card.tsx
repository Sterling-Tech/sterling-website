"use client";

import Image from "next/image";
import React from "react";

interface IServiceCard {
  title: string;
  body: string;
  image: string;
}

export default function ServiceCard({ title, body, image }: IServiceCard) {
  return (
    <div className="space-y-6 rounded-xl bg-white p-10 shadow-sm transition hover:shadow-lg">

      <div className="flex w-max items-center justify-center rounded-md bg-primary/10 p-4">

        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />

      </div>

      <h3 className="text-2xl font-semibold md:text-3xl">
        {title}
      </h3>

      <p className="text-sm leading-[140%] text-slate-500 md:text-base">
        {body}
      </p>

    </div>
  );
}