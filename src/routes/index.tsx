import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import CoverMan from "./../../public/img/coolMan.png?url&jsx";
import { HOMEPAGE_CONTENT } from "~/shared/enums/homepageContent";

import type { IBlog } from "~/shared/interfaces/blog";
import type { IEvent } from "~/shared/interfaces/event";
import _eventsJson from './../data/events.json';
import _blogJson from '../data/blog.json';
import { Article } from "~/components/article/article";

export default component$(() => {

  const events = _eventsJson as IEvent[];

  const blogs = _blogJson as IBlog[];

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
              <Article key={`event${index}`} {...ev}></Article>
            )
          })}
        </div>
      </section>


      <section class="max-w-5xl mx-auto mt-10 px-4">
        <h2 class="text-3xl font-bold mb-4">{HOMEPAGE_CONTENT.BLOG_SECTION.TITLE}</h2>
        <div class="flex flex-col gap-6">
          {blogs.map(( article, index ) => {
            return (
              <Article key={`event${index}`} {...article}></Article>
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
