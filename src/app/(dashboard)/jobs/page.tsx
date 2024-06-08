import { PageParams } from "@/infrastructure";
import { HeaderLayout } from "@/presentation";

export default async function Jobs(params: PageParams) {
    return( 
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar empleo por puesto" 
                title="Empleos"
            />
        </article>
    );
};