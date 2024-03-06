import { Button, Image } from "@nextui-org/react";
import paellaFuego from "../img/paellaFuego.png";
import paella from "../img/paellaPlano.png";
import { useState, useEffect } from "react";
import BlinkingButtonBlack from "../components/BlinkingButtonBlack";
import Footer from "../components/Footer";

const Recetario = ({ move, setMove, setHidden }) => {
  const [text, setText] = useState(false);
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    if (move) {
      console.log(move);
      // Si move es true, mostramos las imágenes después de 0.5 segundos
      const timeout = setTimeout(() => {
        setShowImages(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      <div
        className={`absolute w-screen flex flex-col items-center left-0 top-0 md:grid  md:grid-cols-12 md:grid-row-2 bg-yellow-100 object-cover gap-7 p-2 transition-transform duration-500 transform translate-x-0 `}
        style={{
          transform: move ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="max-md:hidden md:col-span-1"></div>
        <div className="  max-md:hidden md:col-span-2  mt-[-80px]">
          {showImages && <Image src={paellaFuego} alt="paella al fuego" />}
        </div>
        <div className=" md:col-span-2 mt-60">
          {showImages && <Image src={paella} alt="Plano paella" />}
        </div>
        <div></div>
        <div className="col-span-6 my-0 mr-20 flex flex-col items-start gap-4">
          <h1 className="font-hammersmith uppercase text-6xl">
            paella de costelletes
          </h1>
          <h3 className="font-hammersmith uppercase text-xl">
            Ingredientes para 4:
          </h3>
          <ul>
            <li>Garbanzos hidratados 1/2 bote</li>
            <li>Judías verdes un puñado</li>
            <li>5 dientes de ajo</li>
            <li>Costillas de cerdo 100-200gr</li>
            <li>Garrofó</li>
            <li>Arroz 9 puñados</li>
            <li>Tomate tamizado 2 cucharadas</li>
            <li>sal y aceite</li>
            <li>Especias preparado para paella Mercadona</li>
            <li>Caldo de verduras</li>
          </ul>
          {!text && (
            <>
              <p>...</p>
              <Button
                onClick={() => {
                  setText(true);
                }}
                className="text-lg underline"
              >
                Leer
              </Button>
            </>
          )}

          <BlinkingButtonBlack
            className=" "
            setHidden={() => setHidden(true)}
            setMove={setMove}
          />
        </div>
        {text ? (
          <div
            className="md:row-span-2 md:col-span-12 h-screen 
          mx-20 flex flex-col items-start gap-4 "
          >
            <h3 className="font-hammersmith uppercase text-xl">preparado</h3>

            <ul className=" max-h-full overflow-y-auto">
              <li>
                <h4 className="  text-xl">Preparación inicial:</h4>
                <p>
                  Reúne todos los ingredientes y utensilios necesarios para
                  tenerlos a mano durante la preparación.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">
                  Calentar el caldo de verduras:
                </h4>
                <p>
                  En una olla aparte, calienta el caldo de verduras junto con
                  los garbanzos y deja que se caliente durante 5-10 minutos.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">
                  Dorar las costillas de cerdo:
                </h4>
                <p>
                  En una paellera, agrega un poco de aceite y dora los trozos de
                  costillas de cerdo hasta que estén dorados. Luego, retíralos y
                  colócalos a un lado de la paellera.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">Sofreír las verduras:</h4>
                <p>
                  En la misma paellera, añade los dientes de ajo con su piel y
                  un corte por el medio, las judías verdes y el garrofó. Cuando
                  las verduras estén en la paellera, retira los trozos de carne
                  que se encuentran a los lados y añádelos al caldo.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">
                  Añadir el tomate y las especias:
                </h4>
                <p>
                  Una vez que las verduras estén doradas, añade dos cucharadas
                  de tomate y las especias al gusto. Remueve durante 3 minutos y
                  luego añade el arroz. Remueve nuevamente durante unos 3
                  minutos más.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">
                  Agregar el caldo y los trozos de carne:
                </h4>
                <p>
                  Añade el caldo caliente a la paellera, suficiente para cubrir
                  el arroz por un dedo. Corrige la sal si es necesario. A
                  continuación, añade los trozos de carne a la paellera. La
                  cantidad de caldo puede variar, asegúrate de que sobrepase la
                  capa de arroz por un dedo.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">Cocción final:</h4>
                <p>
                  Deja que la paella se cocine a fuego medio-bajo hasta que el
                  líquido se reduzca y el arroz esté cocido. Para comprobar si
                  está listo, inserta una cuchara en el centro de la paellera
                  hasta el fondo y trata de moverla hacia adelante y hacia atrás
                  con suavidad. Si encuentras resistencia, la paella está lista.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">Socarrat y reposo:</h4>
                <p>
                  Sube el fuego a alto durante unos 30 segundos para obtener el
                  socarrat deseado en la base de la paella. Luego, retira la
                  paellera del fuego y déjala reposar tapada durante 5 minutos
                  antes de servir.
                </p>
              </li>
              <li>
                <h4 className="text-bold text-xl">¡A disfrutar!:</h4>
                <p>
                  Sirve la paella caliente y disfruta de este delicioso plato
                  mediterráneo junto con tus seres queridos. ¡Buen provecho!
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <div className="row-span-2 col-span-12 bottom-0"></div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Recetario;
