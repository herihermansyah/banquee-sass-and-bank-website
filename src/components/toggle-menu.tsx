import React from "react";
import {Button} from "./ui/button";
import {Menu, X} from "lucide-react";

type ToggleMenuProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  click: boolean;
};

function ToggleMenu({onClick, click}: ToggleMenuProps) {
  return (
    <Button className="text-[32px]" size={"lg"} onClick={onClick}>
      {click ? <X /> : <Menu />}
    </Button>
  );
}

export default ToggleMenu;
