"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const cleint = new QueryClient()

const ReactQueryProvider = ({children}: Props) => {
  return <QueryClientProvider client={cleint}>ReactQueryProvider</QueryClientProvider>;
};

export default ReactQueryProvider;
