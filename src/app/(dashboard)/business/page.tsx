import { HeaderLayout } from "@/presentation";

export default async function Business() {
    return( 
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar negocios"
                title="Negocios" 
            />
        </article>
    );
};