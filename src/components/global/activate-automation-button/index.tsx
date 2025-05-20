"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Loader } from "../loader";
import robotics from "@/assets/Lottie/robotics.json";
import Lottie from "lottie-react";

const ActivateAutomationButton = () => {
  //WIP: Setup optimistic ui
  // Getch some automation data
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      {/* WIP: Set the loading state */}
      <Loader state={false}>
        <div className="flex justify-center items-center gap-1">
          <Lottie animationData={robotics} loop={true} className="w-7" />

          <p className="lg:inline hidden">
            {/* {data?.data?.active ? "Disable" : "Activate"} */}
            Activate
          </p>
        </div>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
