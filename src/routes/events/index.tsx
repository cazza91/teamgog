import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import _eventsJson from './../../data/events.json';
import { Card } from "~/components/card/card";

export interface Event {
    id: string,
    title: string,
    date: Date | string, // importing from json date result as a string, didn't found anything else
    location: string,
    description: string,
    image: string,
    url: string
}

export default component$(() => {
    const eventsJson = _eventsJson as Event[];
    const events: Event[] = eventsJson;

    return (
        <section class="flex gap-4">
            {events.map((ev, index) => {
                const {title,image,description} = ev;
                return <Link key={ev.id + index} href={ev.id}>
                <Card>
                    <img src={image} alt={title} width="600" height="400" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </Card>
                </Link>
            }) }
        </section>
    )
})