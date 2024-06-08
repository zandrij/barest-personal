import { PageParams } from "@/infrastructure";
import { Conversations } from "@/presentation";

export default async function MessagePage(params: PageParams) {
    return (
        <article>
            <Conversations />
        </article>
    )
}