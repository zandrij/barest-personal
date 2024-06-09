"use client";
import { FC, Suspense } from "react";
import { ButtonHeader } from "../button-header";
import { InputHeader } from "../input-header";
import { BsPlusLg } from "react-icons/bs";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  title: string;
  onClickSearch?: () => void;
  searchPlaceholder?: string;
  visibleSearch?: boolean;

  onClickButton?: () => void;
  textButton?: string;
  textButtonResponsive?: string;
  visibleButton?: boolean;
}

export const HeaderLayout: FC<Props> = ({
  title,
  onClickSearch,
  searchPlaceholder = "Buscar anuncio",
  onClickButton,
  textButton = "Publicar anuncio",
  textButtonResponsive = "Publicar",
  visibleButton = true,
  visibleSearch = true,
}) => {
    const width = useWindowSize().width!;
    
    return (
        <div
            className={`w-full py-4 px-8 bg-[--white] min-h-[72px] flex flex-wrap items-center shadow-custom order-3basis-auto sm:order-none 
                ${visibleButton && "justify-between"}
                ${visibleButton && "gap-[20px] sm:gap-[50px]"}
            `}
        >
            <h1 className="text-lg font-bold text-[--darkpurple] m-0 font-[Sora] order-1 sm:text-2xl">
                {title}
            </h1>

            {visibleSearch && (
                <Suspense>
                    <div className="order-3 flex-grow basis-auto sm:basis-1 sm:order-2 w-full">
                        <InputHeader
                            onClick={onClickSearch}
                            placeholder={searchPlaceholder}
                        />
                    </div>
                </Suspense>
            )}

            {visibleButton && (
                <div className="order-2 sm:order-3">
                    <ButtonHeader
                        icon={<BsPlusLg size={18} />}
                        text={width <= 990 ? textButtonResponsive : textButton}
                        onClick={onClickButton}
                    />
                </div>
            )}
        </div>
    );
};
