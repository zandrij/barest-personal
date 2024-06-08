import { FC } from "react";
import style from "./index.module.scss";
import { ButtonHeader } from "../button-header";
import { InputHeader } from "../input-header";
import { BsPlusLg } from "react-icons/bs";

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
  const width = 780
    return (
        <div
            className={`
                ${style.headLayout} 
                ${visibleButton && style.spaceBetween}
                ${visibleButton && style.gap}
            `}
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
