"use client"
import React from "react";
import Lottie from "lottie-react";
import loading from "@/assets/Lottie/loading.json";

type Props = {
  color?: string;
};

export const Spinner = (props: Props) => {
  return (
    <div role="status">
      <Lottie animationData={loading} loop={true} color="#fff" />
    </div>
  );
};
