import { useListener } from "@/hooks/use-automations";
import React from "react";
import { AUTOMATION_LISTENERS } from "@/constants/automation";
import { SubscriptionPlan } from "../../subscription-plan";
import TriggerButton from "../trigger-button";

type Props = {
  id: string;
};

const ThenAction = ({ id }: Props) => {
  const {
    onSetListener,
    listener: Listener,
    onFormSubmit,
    register,
    isPending,
  } = useListener(id); 
  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === "MESSAGE" ? (
            <SubscriptionPlan key={listener.type} type="PRO">
              <div onClick={() => onSetListener(listener.type)}></div>
            </SubscriptionPlan>
          ) : (
            ""
          )
        )}
      </div>
    </TriggerButton>
  );
};

export default ThenAction;
