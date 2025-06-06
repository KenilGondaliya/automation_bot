import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex overflow-hidden gap-x-2 border-2 border-[#3352CC] rounded-full px-4 py-1 items-center flex-1">
      <SearchIcon color="#3353CC" />
      <Input
        placeholder="Search by name, email or status"
        className="border-none outline-none ring-none focus:ring-0 flex-1"
      />
    </div>
  );
};

export default Search;
