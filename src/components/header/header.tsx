import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MAIN_MENU } from "~/shared/enums/mainMenu";
import style from "./header.module.css";

export const Header = component$(() => {

    const menu = MAIN_MENU;

    return <header class={style.header}>
        <nav>
            <ul>
                {menu.map((item, index) => {
                    return <li key={index + item.label}><Link href={item.url}>{item.label}</Link></li>
                })}
            </ul>
        </nav>
    </header>
})