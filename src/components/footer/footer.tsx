import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { FOOTER_CONTENT } from "~/shared/enums/footerContent";
import { MAIN_MENU } from "~/shared/enums/mainMenu";

export const Footer = component$(() => {

    const menu = MAIN_MENU;

    return (
        <footer class="rounded-lg shadow bg-gray-900 m-4 max-w-5xl mx-auto">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <p>Team GOG</p>
                    <ul class="flex flex-wrap gap-6 items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
                    {menu.map((item, index) => {
                        return <li key={index + item.url}><Link href={item.url}>{item.label}</Link></li>
                    })}
                    </ul>
                </div>
                <hr class="my-3 sm:mx-auto border-gray-700 lg:my-8" />
                <span class="block text-sm sm:text-center text-gray-400">{FOOTER_CONTENT.COPYRIGHT_TEXT}</span>
            </div>
        </footer>
    )
})