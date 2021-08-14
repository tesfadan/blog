export interface Post {
    header: {
        image?: String,
        background: String,
        color: String
    },
    title: string,
    content: Block[],
}

export interface Block {
    type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'bold',
    className?: String,
    content: string
}