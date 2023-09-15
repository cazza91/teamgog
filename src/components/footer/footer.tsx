import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MAIN_MENU } from "~/shared/enums/mainMenu";

export const Footer = component$(() => {

    const menu = MAIN_MENU;

    return <nav>
        <ul>
            {menu.map((item, index) => {
                return <li key={index + item.url}><Link href={item.url}>{item.label}</Link></li>
            })}
        </ul>
    </nav>
})