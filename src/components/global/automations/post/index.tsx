import { useQueryAutomationPosts } from "@/hooks/user-queries";
import React from "react";

type Props = {};

const PostButton = (props: Props) => {
  const { data } = useQueryAutomationPosts();
  return <div>PostButton</div>;
};

export default PostButton;
