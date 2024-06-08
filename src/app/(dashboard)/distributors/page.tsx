import { PageParams } from "@/infrastructure";
import { HeaderLayout } from "@/presentation";

export default async function Distributors(params: PageParams) {
    return (
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar distribuidores"
                title="Distribuidores" 
            />
        </article>
    );
};