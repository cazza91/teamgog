import { component$ } from "@builder.io/qwik";
import { MAIN_MENU } from "~/shared/enums/mainMenu";
import { UnderlinedLink } from "../underlined-link/underlined-link";

export const Header = component$(() => {

    const menu = MAIN_MENU;

    return <header class="w-100">
        <nav class="max-w-5xl h-20 p-4 flex items-center mx-auto">
            <p>logo</p>
            <ul class="grow flex gap-4 justify-center">
                {/* {menu.map((item, index) => {
                    return <li key={index + item.label}>
                              <UnderlinedLink href={item.url}>{item.label}</UnderlinedLink>
                        </li>
                })} */}
            </ul>
            <ul class="flex gap-4 justify-center">
                {menu.map((item, index) => {
                    return <li key={index + item.label}>
                              <UnderlinedLink href={item.url}>{item.label}</UnderlinedLink>
                        </li>
                })}
            </ul>
        </nav>
    </header>
})