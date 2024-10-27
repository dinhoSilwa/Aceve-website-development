import clsx from "clsx";
import { Button } from "../button/GlobalButton";
import { FaArrowRight } from "react-icons/fa6";
import { HeaderSection } from "./Header/header";

const areasofactivity = [
  {
    name: "Cultura",
    description: `
Cultura aqui é ferramenta de transformação. Celebramos a diversidade, apoiamos comunidades e combatemos racismo e violência.`,
    imgSection:
      "https://files.edgestore.dev/vw3zcktyh34h8hz5/publicImages/_public/post/1ecc92a3-f04d-4cc7-ac88-79b16fba81ac.jpg",
  },
  {
    name: "Cursos",
    description: `
Nossa ONG oferece cursos gratuitos em Tecnologia, Reciclagem, Bijuterias, Skate e Empreendedorismo.`,
    imgSection:
      "https://files.edgestore.dev/vw3zcktyh34h8hz5/publicImages/_public/post/c3d1d1ba-fa96-4346-9bb3-482cc8f3a619.jpg",
  },

  {
    name: "Empreendedorismo",
    description: `
Empreendedorismo é oportunidade de mudança! Cursos capacitam para transformar paixões em negócios, promovendo autonomia e impacto social.    `,
    imgSection:
      "https://files.edgestore.dev/vw3zcktyh34h8hz5/publicImages/_public/post/c33da3bb-5801-4309-8222-3ed47afc6cc4.jpg",
  },
];

export const Areasofactivity = () => {
  return (
    <>
      <section className=" bg-[#FDF7ED] m-auto py-8  overflow-hidden">
        <HeaderSection
          arial="header"
          title="ÁREAS DE ATUAÇÃO"
          subTitle="Juntos, podemos fazer a diferença, descubra mais sobre como atuamos"
        />
        <section className="flex flex-col gap-4 px-2 tablet:flex-row  tablet:overflow-x-auto container-articles no-scrollbar">
          <div className=" w-full flex flex-col tablet:flex-row tablet:gap-12 gap-8 py-8 tablet:w-[200%]">
            {areasofactivity.map(
              ({ name: title, description, imgSection }, index) => (
                <article
                  key={index}
                  className={clsx(
                    "shadow-md flex gap-2 bg-white rounded-lg tablet:w-[800px] bg-[#fff]",
                    "tablet:w-[360px]",
                    "laptop:w-[632px] laptop:items-center laptop:text-lg"
                  )}
                >
                  <figure>
                    <img
                      src={imgSection}
                      alt={title}
                      className="tablet:w-[300px] h-auto"
                    />
                  </figure>
                  <div className="relative w-1/2 pt-2 tablet:w-1/2 px-2 flex flex-col gap-2 tablet:gap-4 tablet:items-start tablet:justify-start tablet:pt-8 font-roboto">
                    <h3 className="text-sm font-bold tablet:text-lg">
                      {title}
                    </h3>
                    <p className="h-auto text-[12px] leading-[14px] pr-2 tablet:text-md tablet:leading-5">
                      {description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        <div className=" h-28 w-full  grid place-content-center">
          <Button
            backgroundColor="purple"
            size="small"
            fontColor="white"
            icon={<FaArrowRight />}
          >
            Ver Mais
          </Button>
        </div>
      </section>
    </>
  );
};
