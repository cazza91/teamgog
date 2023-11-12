import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import _eventsJson from './../data/events.json';
import type { Event } from "~/shared/interfaces/event";
import CoverMan from "./../../public/img/coolMan.png?jsx";
import { HOMEPAGE_CONTENT } from "~/shared/enums/homepageContent";

export default component$(() => {
  const eventsJson = _eventsJson as Event[];
  const events: Event[] = eventsJson;
  return (
    <>
      <section class="relative items-center max-w-5xl mx-auto mt-10 md:flex md:justify-between md:gap-x-10">
        <div class="px-4">
          <h1 class="text-3xl font-bold mb-4">{HOMEPAGE_CONTENT.HERO_SECTION.TITLE}</h1>
          <p class="text-xl leading-9 max-w-lg">{HOMEPAGE_CONTENT.HERO_SECTION.DESCRIPTION}</p>
        </div>
        <div>
          <CoverMan class="invert h-auto block" />
        </div>
      </section>

      <section class="max-w-5xl mx-auto mt-10 px-4">
        <h2 class="text-3xl font-bold mb-4">{HOMEPAGE_CONTENT.EVENTS_SECTION.TITLE}</h2>
        <div class="flex flex-col gap-6">
          {events.map(( ev, index ) => {
            return (
            <a
              href={ev.url}
              key={'event' + index}
              class="
              flex flex-col items-center gap-x-8 rounded-md py-5 px-3 md:flex-row
              transition-all duration-400 bg-gradient-to-t to-slate-800 via-slate-800 from-blue-900 bg-300 bg-pos-0 hover:bg-300y cursor-pointer"
            >
              <div class="shrink-0">
                <div class="text-5xl md:ml-4">
                  {ev.coverEmoji}
                </div>
              </div>
              <div>
                <div class="flex flex-col items-center gap-y-2 md:flex-row">
                  <div class="hover:text-cyan-400">
                    <div class="text-xl font-semibold">{ev.title}</div>
                  </div>

                  <div class="ml-3 flex gap-2">
                    {ev.tags?.map((tag, i) => {
                      return (
                        <div key={'tag' + i} class={['rounded-md', 'px-2', 'py-1', 'text-xs', 'font-semibold', tag.bg]}>{tag.label}</div>
                      )
                    })}
                  </div>
                </div>
                <p class="mt-3 text-gray-400">
                  {ev.description}
                </p>
              </div>
            </a>
            )
          })}
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Team GOG",
  meta: [
    {
      name: "description",
      content: "Team GOG description",
    },
  ],
};
