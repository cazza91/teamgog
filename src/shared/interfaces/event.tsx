export interface Event {
    id: string,
    title: string,
    image?: string,
    coverEmoji?: string,
    date: Date | string, // importing from json date result as a string, didn't found anything else
    location: string,
    description: string,
    url: string,
    tags?: [
        {
            label: string,
            bg: string
        }
    ]
}