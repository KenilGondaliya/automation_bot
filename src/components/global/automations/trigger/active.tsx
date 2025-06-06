"use client";

import { Instagram, SendHorizontal } from "lucide-react";
import send from "@/assets/svgs/send.svg";
import React from "react";

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ keywords, type }: Props) => {
  return (
    <div className="bg-background-80 p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === "COMMENT" ? (
          <Instagram color="#3352CC" size={19} />
        ) : (
          <img src={send.src} alt="this is img" />
        )}
        <p className="text-lg">
          {type === "COMMENT"
            ? "User comments on my post"
            : "User send me a direct message."}
        </p>
      </div>
      <p className="text-text-secondary">
        {type === "COMMENT"
          ? "If the user comment on a video that is setup  to listen for keywork, this automation will fire"
          : "If the user send your a message that contains a keyword, this automation will fire"}
      </p>
      <div className="flex gap-2 my-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-[#3352CC] to-[#1C2D70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full"
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
