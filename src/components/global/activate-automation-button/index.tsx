"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { Loader } from "../loader";
import activeAutomation from "@/assets/svgs/activeAutomation.png";

type Props = {
    id: string
};

const ActivateAutomationButton = ({id}: Props) => {
  //WIP: Setup optimistic ui
  // Getch some automation data
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      {/* WIP: Set the loading state */}
      <Loader state={false}>
        <img src={activeAutomation.src} alt="" />
        <p className="lg:inline hidden">
          {/* {data?.data?.active ? "Disable" : "Activate"} */}
          Activate
        </p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
