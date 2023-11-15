import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Event } from "~/shared/interfaces/event";
import _eventsJson from '../../data/events.json';

export default component$(() => {
    const eventsJson = _eventsJson as Event[];
    const events: Event[] = eventsJson;

    return (
      <section class="max-w-5xl mx-auto mt-10 px-4 flex gap-4">
            {events.map((ev, index) => {
                return <Link class="w-1/3" key={ev.id + index} href={ev.id}>
                    <div class="rounded overflow-hidden shadow-lg bg-white">
                        <img class="w-full" src={ev.image} alt={ev.title} />
                        <div class="px-6 py-4">
                        <div class="text-gray-700 font-bold text-xl mb-2">{ev.title}</div>
                        <p class="text-gray-700 text-base">{ev.description}</p>
                        </div>
                        <div class="px-6 pt-4 pb-2">{ev.tags?.map((tag, i) => {
                            return (
                                <div key={'tag' + i} class={['inline-block', 'mr-1', 'rounded-md', 'px-2', 'py-1', 'text-xs', 'font-semibold', tag.bg]}>{tag.label}</div>
                            )
                        })}
                        </div>
                    </div>
                </Link>
            }) }
        </section>
    )
})