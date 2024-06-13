import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  href?: string;
  btnChild?: ReactNode
}

export const ContentSeparator: FC<Props> = ({ title, href, btnChild }) => {
    return (
        <article className="w-full mb-3 mt-8 flex justify-between">
            <h3 className="text-lg font-bold text-[--gray21] font-[Sora]">{title}</h3>

            <div className="flex flex-row gap-8">
                {btnChild}

                {href && (
                    <Link href={href} className="font-bold font-[Lato] text-sm text-[--orange] underline">
                        Ver más
                    </Link>
                )}
            </div>
        </article>
    );
};
