import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MAIN_MENU } from "~/shared/enums/mainMenu";
import style from "./header.module.css";

export const Header = component$(() => {

    const menu = MAIN_MENU;

    return <header class="shadow-md w-100">
        <nav class="max-w-5xl py-4 flex items-center mx-auto">
            <p>logo</p>
            <ul class="grow flex gap-4 justify-center">
                {menu.map((item, index) => {
                    return <li key={index + item.label}><Link href={item.url}>{item.label}</Link></li>
                })}
            </ul>
            <p>login</p>
        </nav>
    </header>
})