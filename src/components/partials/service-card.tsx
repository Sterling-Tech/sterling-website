import React from "react";

interface IServiceCard {
  icon: string;
  title: string;
  body: string;
}

export default function ServiceCard(props: IServiceCard) {
  return (
    <div className="space-y-6 bg-white p-10 h-full rounded-lg hover:shadow-lg transition-shadow duration-300">
      {/* <div className="flex w-max items-center justify-center rounded-md bg-primary p-4">
        <CardIcon />
      </div> */}
      <div className="bg-primary p-3 flex  rounded-md w-max mx-auto">
        <img src={props.icon} alt={props.title} className="w-12 h-12 mx-auto" />
      </div>
      <h3 className="text-2xl font-semibold md:text-4xl text-center">{props.title}</h3>
      <p className="text-sm leading-[140%] text-slate-500 md:text-base">
        {props.body}
      </p>
    </div>
  );
}
