import React from "react";
import { HeaderSection } from "../Areasofactivity/Header/header";

import { Button } from "../button/GlobalButton";
import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const histories = [
  {
    name: "Naomi",
    age: 34,
    history:
      "“Lorem ipsum dolor sit amet consectetur. Commodo magna enim hac velit quam consequat quis lectus lorem.”",
  },
  {
    name: "Maria",
    age: 28,
    history:
      "“Lorem ipsum dolor sit amet consectetur. Commodo magna enim hac velit quam consequat quis lectus lorem.”",
  },
  {
    name: "Vania",
    age: 24,
    history:
      "“Lorem ipsum dolor sit amet consectetur. Commodo magna enim hac velit quam consequat quis lectus lorem.”",
  },
];

export const Histories = () => {
  return (
    <section>
      <HeaderSection
        arial="header"
        title="HISTÓRIA DE IMPACTO"
        subTitle="Conheça algumas das histórias de mulheres apoiadas pela nossa ONG"
      />
      <section className="container-histories flex relative">
        {histories.map(({ name, age, history }, index) => (
          <article className="overflow-hidden relative bg-[url(https://i.imgur.com/5tO6bcP.jpg)] bg-cover bg-bottom card-histories w-[165px] h-[300px] rounded-xl bg-white-normal drop-shadow-lg cursor-pointer">
            <div className="absolute flex flex-col justify-center inset-0 bg-gradient-to-t from-[#15052A] to-transparent text-white-normal">
              <div className="flex-1 flex flex-col justify-end text-center">
                <strong className="text-md">
                  {name}, {age}
                </strong>
                <p className="text-[12px] px-2">{history}</p>
              </div>
              <div className="py-4 flex flex-col justify-end bg-gradient-to-t from-[#15052A] to-[#15052aa8]">
                <Button
                  size="small"
                  backgroundColor="purple"
                  fontColor="white"
                  icon={<BiArrowFromLeft />}
                >
                  Ver história
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};
