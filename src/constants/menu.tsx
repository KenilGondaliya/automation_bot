import { v4 as uuid } from "uuid";
import { House } from "lucide-react";
import { Settings } from 'lucide-react';
import { Workflow } from 'lucide-react';
import { Blocks } from 'lucide-react';

type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <House />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <Workflow />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <Blocks />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <Settings />,
  },
 
];
