import clsx from "clsx";
import type { ComponentProps } from "react";

interface HeaderProps extends ComponentProps<"header"> {
  title: string;
  subTitle: string;
  arial: string;
}

export const HeaderSection = ({
  title,
  subTitle,
  arial,
  ...props
}: HeaderProps) => {
  return (
    <>
      <header
        {...props}
        className={clsx(
          "grid place-content-center text-center h-28 gap-2 main-header",
          "tablet:h-16",
          "tablet:h-32"
        )}
        aria-label={arial}
      >
        <h2 className="text-md desktop:text-3xl font-bold text-gray-900">
          {/* ÁREAS DE ATUAÇÃO */}
          {title}
        </h2>
        <p className="text-sm text-center px-4">
          {/* Juntos, podemos fazer a diferença, descubra mais sobre como atuamos */}
          {subTitle}
        </p>
      </header>
    </>
  );
};
