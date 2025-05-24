"use client";
import { BadgePlus, Bot, Instagram } from "lucide-react";
import { v4 } from "uuid";

export type AutomationListenerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: "SMART_AI" | "MESSAGE";
};

export const AUTOMATION_TRIGGERS = AutomationTriggerProps[] = [
  {
    id: v4(),
    label: "User comment on my post",
    icon: <Instagram />,
    description: "Select if you want to automate comments on your post",
    type: "COMMENT",
  },
  {
    id: v4(),
    label: "Send me a dm with a keyword",
    icon: <Instagram />,
    description: "Trigger the automation when a user joins the project",
    type: "JOIN_PROJECT",
  },
]

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: "User will be sent the message",
    icon: <BadgePlus />,
    description: "Enter the message that you want to be sent to the client",
    type: "MESSAGE",
  },
  {
    id: v4(),
    label: "Let Smart AI take over",
    icon: <Bot />,
    description: "Tell AI about your project. (Upgrade to use this feature)",
    type: "SMART_AI",
  },
];


