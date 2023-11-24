import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    const loc = useLocation();
    return <div>Welcome to blog article {loc.params.url}!</div>;
})