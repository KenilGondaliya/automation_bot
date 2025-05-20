"use client";
import { usePaths } from "@/hooks/user-nav";
import React from "react";
import Items from "./items";
import { SidebarSeparator } from "@/components/ui/sidebar";
import ClerkAuthState from "../clerk-auth-state";
import { BadgeHelp } from "lucide-react";
import { SubscriptionPlan } from "../subscription-plan";
import UpgradeCard from "./upgrade";
import robotics from "@/assets/Lottie/robotics.json";
import Lottie from "lottie-react";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();

  return (
    <div
      className="w-[250px] border-2 radial fixed left-0 
    border-[#545454] bg-gradient-to-b from-[#768BDD] lg:inline-block via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden"
    >
      <div
        className="flex flex-col 
      gap-y-5
      w-full
      h-full 
      p-3 
      bg-[#171717] 
      bg-opacity-90 
      bg-clip-padding
      backdrop-filter 
      backdrop--blur__safari
      backdrop-blur-3xl"
      >
        <div className="flex gap-x-2 items-center justify-center">
          {/* <LogoSmall /> */}
          <Lottie
            animationData={robotics}
            loop={true}
            className="w-36"
          />

        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <SidebarSeparator orientation="horizontal" className="bg-[#5C5C5f]" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#9B9CA0] mt-1">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <BadgeHelp />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
