import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automations";
import { FileWarning } from "lucide-react";
import React from "react";
import Trigger from "@/components/global/automations/trigger";
import { getAutomations } from "@/actions/automations/queries";
import { getAutomationInfo } from "@/actions/automations";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PrefetchUserAutomation } from "@/react-query/prefetch";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  // console.log(info);

  return {
    title: info.data?.name,
  };
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient();
  // console.log(query);

  await PrefetchUserAutomation(query, params.id);
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex flex-col items-center gap-y-2">
        <AutomationsBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <FileWarning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
