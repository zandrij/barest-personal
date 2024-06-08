import { PageParams } from "@/infrastructure";
import { HeaderLayout } from "@/presentation";

export default async function BusinessPage(params: PageParams) {
    return (
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar negocios"
                title="Negocios" 
            />
        </article>
    );
};