import React from "react";
import { Image, Button } from "@nextui-org/react";

const BlinkingButton = ({ setMove }) => {
  return (
    <Button
      color="none"
      type="submit"
      className="absolute z-20 top-3/4 left-1/2 animate-pulse h-20"
      onClick={() => setMove(true)}
    >
      <Image
        src="https://cdn.icon-icons.com/icons2/3641/PNG/512/forward_white_button_icon_227833.png"
        width={50}
        alt="arrow next"
      />
    </Button>
  );
};

export default BlinkingButton;
