import InfoBar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  PrefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  // Query
  // WIP: Query cleint fetch data

  const query = new QueryClient();

  await PrefetchUserProfile(query);

  await PrefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/* sidebar */}
        <Sidebar slug={params.slug} />
        {/* navbar */}
        <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
          <InfoBar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
