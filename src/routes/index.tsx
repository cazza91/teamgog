import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-center text-5xl font-bold">We are<br />Team GOG</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Team GOG",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
