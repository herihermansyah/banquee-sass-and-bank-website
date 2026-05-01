import React from "react";
import {Button} from "./ui/button";
import {ArrowRight} from "lucide-react";

function ButtonAction() {
  return (
    <div className="flex flex-wrap items-center sm:justify-start justify-center gap-5">
      <Button className="px-6 py-6 text-[18px] font-medium font-DMSans">
        Open Account
      </Button>
      <Button
        variant={"ghost"}
        className="text-primary hover:text-primary/90 hover:bg-inverse text-[18px] font-medium font-DMSans"
      >
        Compare Cards <ArrowRight />
      </Button>
    </div>
  );
}

export default ButtonAction;
