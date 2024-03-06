import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import BlinkingButton from "../components/BlinkingButton";

import Recetario from "./Recetario";

function Home() {
  const [move, setMove] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* useEffect(() => {
    if (move) {
      const timeout = setTimeout(() => {
        setHidden(true);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setHidden(false);
    }
  }, []);
  console.log();
  console.log(move);*/
  return (
    <>
      <article
        className={` relative w-screen h-screen overflow-hidden transition-transform duration-400 transform translate-x-0 sm:translate-x-full  `}
        style={{
          transform: move ? "translateX(-100%)" : "translateX(0)",
        }}
      >
        <p className="font-solway absolute z-10 top-20 left-0 right-0 text-center text-white text-xl md:text-2xl font-bold  ">
          FUSIÓN MEDITERRANEA
        </p>
        <div className="flex flex-col items-center">
          <h1 className="tracking-tight inline font-hammersmith absolute z-10 uppercase   top-1/3  transform -translate-y-1/2 text-center text-white text-7xl md:text-9xl animate-fade-up animate-once">
            Sabores &nbsp;
          </h1>
          <h1 className="tracking-tight inline font-hammersmith absolute z-10 uppercase   top-1/2   -translate-y-1 text-center text-white text-7xl md:text-9xl animate-fade-up animate-once ">
            del mundo
          </h1>
        </div>
        <div className="absolute z-0 inset-0 bg-black opacity-50"></div>

        <Image
          src="https://valenciaplaza.com/public/Image/2019/12/20191209035_WEB_NoticiaAmpliada.jpg"
          width={5000}
          radius="none"
          className="absolute z-[-10] inset-0 mx-auto object-scale-up h-screen w-screen"
          alt="fondo principal"
        />
      </article>

      <Recetario
        setMove={setMove}
        setHidden={setHidden}
        move={move}
        className=""
      />
      {!move && <BlinkingButton setMove={setMove} />}
    </>
  );
}

export default Home;
