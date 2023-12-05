import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { IBlog } from "~/shared/interfaces/blog";
import type { IEvent } from "~/shared/interfaces/event";

export const Article = component$((article: IEvent | IBlog) => {

  return (
    <Link
      href={article.url}
      class="
    flex flex-col items-center gap-x-8 rounded-md py-5 px-3 md:flex-row
    transition-all duration-400 bg-gradient-to-t to-slate-800 via-slate-800 from-blue-900 bg-300 bg-pos-0 hover:bg-300y cursor-pointer"
    >
      <div class="shrink-0">
        <div class="text-5xl md:ml-4">
          {article.coverEmoji}
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center gap-y-2 md:flex-row">
          <div class="hover:text-cyan-400">
            <div class="text-xl font-semibold">{article.title}</div>
          </div>

          <div class="ml-3 flex gap-2">
            {article.tags?.map((tag, i) => {
              return (
                <div key={'tag' + i} class={['rounded-md', 'px-2', 'py-1', 'text-xs', 'font-semibold', tag.bg]}>{tag.label}</div>
              )
            })}
          </div>
        </div>
        {"description" in article && (
          <p class="mt-3 text-gray-400">
            {article.description}
          </p>
        )}
      </div>
    </Link>
  );
})
