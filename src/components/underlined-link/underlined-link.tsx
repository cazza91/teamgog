import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const UnderlinedLink = component$((props: {href: string}) => {
    return <Link class="group text-white transition-all duration-300 ease-in-out" href={props.href}>
    <span class="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
      <Slot></Slot>
    </span>
  </Link>
})