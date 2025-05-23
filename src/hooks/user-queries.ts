"use client";
import { getAllAutomations, getAutomationInfo } from "@/actions/automations";
import { onUserInfo } from "@/actions/user/queries";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
  });
};

export const useQueryAutomation = (id: string) => {
  return useQuery({
    queryKey: ["automation-info"],
    queryFn: () => getAutomationInfo(id),
  });
};

export const useQueryUser = () => {
  return useQuery({
    queryKey: ["use-profile"],
    queryFn: onUserInfo,
  });
};
