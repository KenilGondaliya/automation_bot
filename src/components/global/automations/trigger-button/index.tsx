import React, { Children } from "react";
import PopOver from "../../popover";
import { BadgePlus } from "lucide-react";

type Props = {
  children: React.ReactNode;
  label: string;
};

const TriggerButton = ({ children, label }: Props) => {
  return (
    <PopOver
      className="w-[400px]"
      trigger={
        <div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4">
            <BadgePlus color='#3352cc' />
            <p className="text-[#768BDD] font-bold">{label}</p>
        </div>
      }
    >
        {children}
    </PopOver>
  );
};

export default TriggerButton;
