import { Post } from "../types/types";

export default function articles(posts: Post[]): HTMLElement {
    let articles = document.createElement('div');
    articles.className = 'articles';
    document.getElementById('main').appendChild(articles);

    posts.map(post => {
        const thumbnail = document.createElement('a');
        thumbnail.href = `post/${post.permalink}`;
        thumbnail.className = 'postThumbnail';
        const title = document.createElement('h5');
        title.innerText = post.title;
        thumbnail.appendChild(title);
        articles.appendChild(thumbnail);
    })

    return articles;
}