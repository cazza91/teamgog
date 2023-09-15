import { Slot, component$ } from "@builder.io/qwik";

export const Card = component$(() => {
    return <article class="shadow-xl rounded">
        <Slot />
    </article>
    
})