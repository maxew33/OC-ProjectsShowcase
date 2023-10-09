export interface dataFormat {
    [key: string]: string | number | string[]
    id: string
    rank: number
    name: string
    illustration: string
    closeup: string
    techno: string[]
    description: string
    purpose: string[]
    skills: string[]
    link: string
    repo: string
    comment: string[]
}


export interface dataEntry {
    name: string
    display: string
    type: string
}