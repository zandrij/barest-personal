import { HeaderLayout } from "@/presentation";

export default async function BusinessPage() {
    return (
        <article>
            <HeaderLayout 
                searchPlaceholder="Buscar negocios"
                title="Negocios" 
            />
        </article>
    );
};