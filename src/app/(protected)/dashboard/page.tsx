import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {};

const Page = async (props: Props) => {
  console.log("Running onboard page...");
  const user = await onBoardUser();
  // console.log("User from onboard:", user?.data);

  if (user?.status === 200 || user?.status === 201) {
    console.log("Redirecting to /dashboard");
    return redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }
  
  return redirect("/sign-in");
};

export default Page;
