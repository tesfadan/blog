import { Post } from "../types/types";

const article = (post: Post) => {
    let article = document.createElement('article');
    article.className = 'article';

    const header = document.createElement('div');
    header.setAttribute('style', `
        background: ${post.header.background};
        color: ${post.header.color};
        background-image: ${post.header.image};
        `);
    header.className = "header";
    const title = document.createElement("h1");
    title.innerHTML = post.title;
    header.appendChild(title)

    document.title = post.title;
    const content = document.createElement("div");
    content.className = "content";
    article.appendChild(header);
    document.getElementById('main').appendChild(article);

    post.content.map(block => {
        const element = document.createElement(block.type);
        element.innerHTML = block.content;
        content.appendChild(element);
    })

    return article.appendChild(content)
}

export default article;