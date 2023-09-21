import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="relative flex flex-col justify-center h-[32rem]">
      <h3 class="text-center z-50">sentitamente vostro</h3>
      <h1 class="text-center text-5xl font-bold z-50">We are<br />Team GOG</h1>
      <article class="absolute left-0 right-0 top-0 bottom-0 bg-fuchsia-100 z-10">
        <div class="
          absolute
          left-0
          right-0
          top-0
          bottom-0
          bg-gradient-to-r
          from-blue-500
          transition-all
        "></div>
        <div class="absolute inset-x-2/3 inset-y-1/3 w-24 h-24 rounded-full bg-fuchsia-400"></div>
        <div class="w-24 h-24 rounded-full bg-fuchsia-400"></div>
        <div class="w-24 h-24 rounded-full bg-fuchsia-400"></div>
        <div class="w-24 h-24 rounded-full bg-fuchsia-400"></div>
      </article>
    </section>
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
