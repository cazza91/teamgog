import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface Event {
    id: string,
    title: string,
    date: Date
}

export default component$(() => {
    const events: Event[] = [
        {id: '1', title: 'LaGaraDi - Ragù', date: new Date('2023/09/14')}
    ]

    return (
        <section>
            {events.map(ev => {
                return <article key={ev.id}><Link href={ev.id}>{ev.title}</Link></article>
            }) }
        </section>
    )
})