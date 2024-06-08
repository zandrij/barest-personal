import { HeaderLayout } from "@/presentation";

export default async function Jobs({
    searchParams
}: {
    searchParams: {
        search?: string
    }
}) {
    return( 
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar empleo por puesto" 
                title="Empleos"
            />
        </article>
    );
};