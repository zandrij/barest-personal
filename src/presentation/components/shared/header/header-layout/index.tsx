"use client";
import { FC } from "react";
import style from "./index.module.scss";
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
            className={`${style.headLayout} ${visibleButton && style.spaceBetween}`}
            style={{ gap: visibleSearch && width > 640 ? 50 : width <= 640 ? 22 : 0 }}
        >
            <h1>{title}</h1>

            {visibleSearch && (
                <div className={style.inputHeader}>
                    <InputHeader
                        onClick={onClickSearch}
                        placeholder={searchPlaceholder}
                    />
                </div>
            )}

            {visibleButton && (
                <div className={style.visibleButton}>
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
