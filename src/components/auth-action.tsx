import React from "react";
import {Button} from "./ui/button";

type AuthActionProps = {
  className?: string;
};
function AuthAction({className = "flex items-center gap-7.5"}: AuthActionProps) {
  return (
    <div className={`${className}`}>
      {/* login */}
      <Button
        variant={"ghost"}
        className="text-primary font-DMSans font-medium text-[18px] hover:text-primary/90"
      >
        Login
      </Button>
      <Button
        variant={"destructive"}
        className="px-4 py-5 text-inverse bg-primary hover:bg-primary/90 font-medium font-DMSans text-[15px]"
      >
        Open Account
      </Button>
    </div>
  );
}

export default AuthAction;
