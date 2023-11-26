import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

import _blogsJson from '../../../data/blog.json';
import type { IBlog } from "~/shared/interfaces/blog";


export default component$(() => {
    const loc = useLocation();

    const single: IBlog | undefined = (_blogsJson as IBlog[]).find(ev => ev.url === `/blog/${loc.params.url}`);

    if (!single) return <></>;

    return (
        <section class="max-w-3xl mx-auto mt-10 px-4 gap-4">
            <h1 class="text-center block w-full text-3xl font-bold mb-2">{single.title}</h1>
            <p class="text-center block w-full text-gray-400 text-sm">
                {new Date(single.pubblicationDate).toLocaleDateString("it-IT", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <img width="16" height="9" class="w-full mt-4" src={single.image} alt={single.title} />
            <p class="block w-full mt-8 leading-7 text-gray-100">
                {single.content}
            </p>
        </section>
    );
})