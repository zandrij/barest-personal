import { HeaderLayout } from "@/presentation";

export default async function Jobs() {
    return( 
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar empleo por puesto" 
                title="Empleos"
            />
        </article>
    );
};