import React from "react";
import { Image, Button } from "@nextui-org/react";
import BlackArrow from "../img/puta_flecha.png";

const BlinkingButtonBlack = ({ setMove }) => {
  return (
    <Button
      color="none"
      type="submit"
      className="    animate-pulse h-20 m-10 absolute top-20 left-20 lg:top-1/4 md:left-0"
      onClick={() => setMove(false)}
    >
      <Image src={BlackArrow} width={50} alt="arrow next" />
    </Button>
  );
};

export default BlinkingButtonBlack;
