import React from "react";
import { CardIcon } from "../icons";

interface IAboutCard {
  title: string;
  body: string;
}

export default function AboutCard(props: IAboutCard) {
  return (
    <div className="space-y-6 bg-white p-10">
      <div className="flex w-max items-center justify-center rounded-md bg-primary p-4">
        <CardIcon />
      </div>

      <h3 className="text-2xl font-semibold md:text-4xl">{props.title}</h3>
      <p className="text-sm leading-[140%] text-slate-500 md:text-base">
        {props.body}
      </p>
    </div>
  );
}
