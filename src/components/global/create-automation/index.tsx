"use client";
import React from "react";
import { Loader } from "../loader";
import { Button } from "@/components/ui/button";
import Automation from "@/svgs/automation";

type Props = {};

const CreateAutomation = (props: Props) => {
  // WIP: Create the automation in the database using mutate
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1c2D70]">
      <Loader state={false}>
        <Automation />
        <p className="lg:inline hindden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
