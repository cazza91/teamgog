export interface IBlog {
  id: string,
  title: string,
  image?: string,
  coverEmoji?: string,
  date: Date | string, // importing from json date result as a string, didn't found anything else
  pubblicationDate: Date | string, // importing from json date result as a string, didn't found anything else
  location: string,
  content: string,
  url: string,
  tags?: [
      {
          label: string,
          bg: string
      }
  ]

}