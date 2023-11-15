import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MAIN_MENU } from "~/shared/enums/mainMenu";

export const Footer = component$(() => {

    const menu = MAIN_MENU;

    return (
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 max-w-5xl mx-auto">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <p>Team GOG</p>
                    <ul class="flex flex-wrap gap-6 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    {menu.map((item, index) => {
                        return <li key={index + item.url}><Link href={item.url}>{item.label}</Link></li>
                    })}
                    </ul>
                </div>
                <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Sentitamente Vostro</span>
            </div>
        </footer>
    )
})