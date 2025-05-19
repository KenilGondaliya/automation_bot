import { Instagram } from "lucide-react";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATIONS_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description: "Lormdjvfdkdkkddksksks c,cmcmcmmccmcmcmccmcm",
    icon: <Instagram color="#3352CC" />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect SalesForce",
    description: "Lormdjvfdkdkkddksksks cmcmcmcmmdmmmcmcmcm",
    icon: <Instagram color="#3352CC" />,
    strategy: "CRM",
  },
];
