"use client";
import { timeline } from "../app/constants/timeline";
import React from "react";

import { Paragraph } from "./Paragraph";
import {
  IconCheck,
  IconCheckbox,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div className="">
    
      {timeline.map((item, index) => (
        <div 
          className="flex md:flex-row flex-col space-y-5 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-40">{item.date}</Paragraph>
          <div as="h5" className=" text-lg md:text-lg lg:text-lg text-emerald-500">
            {item.company}
          </div>
          <Paragraph className=" flex text-base md:text-base lg:text-base font-semibold">
            {item.title}
          </Paragraph>
          <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
            {item.description}
          </Paragraph>

          {item.responsibilities.map((responsibility, index) => (
            <Step key={responsibility}>{responsibility}</Step>
          ))}
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
