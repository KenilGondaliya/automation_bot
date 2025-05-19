import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
    id: string
};

const AutomationsBreadCrumb = ({id}: Props) => {
//    User mutation stuff to update the automations
  //WIP: get the aitomation data
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center">
          {/* Show the editing data */}
          <p className="text-[#9B9CA0]">This is the automation title</p>
          <span
            // onClick={enableEdit}
            className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
          >
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All Posts are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Changes Saved
          </p>
          <p className="text-text-secondary text-sm truncate min-w-0">
            Undo | Redo
          </p>
        </div>
      </div>
      <ActivateAutomationButton  />
    </div>
  );
};

export default AutomationsBreadCrumb;
