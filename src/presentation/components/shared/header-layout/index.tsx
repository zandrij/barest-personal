"use client";
import { FC } from "react";
import style from "./index.module.scss";
import { ButtonHeader } from "../button-header";
import { InputHeader } from "../input-header";
import { BsPlusLg } from 'react-icons/bs';

interface Props {
    title: string;
    onClickSearch?: () => void;
    searchPlaceholder?: string;
    visibleSearch?: boolean;

    onClickButton?: () => void;
    textButton?: string;
    visibleButton?: boolean;
}

export const HeaderLayout: FC<Props> = ({
    title,
    onClickSearch,
    searchPlaceholder = "Buscar anuncio",
    onClickButton,
    textButton = "Publicar anuncio",
    visibleButton = true,
    visibleSearch = true,
}) => {
    return (
        <div
            className={`${style.headLayout} ${visibleButton && style.spaceBetween}`}
            style={{ gap: visibleSearch ? 50 : 0 }}
            >
            <h1>{title}</h1>

            {visibleSearch && (
                <InputHeader onClick={onClickSearch} placeholder={searchPlaceholder} />
            )}

            {visibleButton && (
                <ButtonHeader
                    icon={<BsPlusLg size={18} />}
                    text={textButton}
                    onClick={onClickButton}
                />
            )}
        </div>
    );
};
