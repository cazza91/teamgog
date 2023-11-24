export interface IEvent {
    id: string,
    title: string,
    image?: string,
    coverEmoji?: string,
    date: Date | string, // importing from json date result as a string, didn't found anything else
    pubblicationDate: Date | string,
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