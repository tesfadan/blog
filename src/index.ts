// @ts-ignore
import { posts } from "./content/posts";
import { Post } from "./types/types";

const article = (post: Post) => {
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
    document.getElementById('article').appendChild(header);

    document.title = post.title;

    const content = document.createElement("div");
    content.className = "content";

    document.getElementById('article').appendChild(content);





    post.content.map(block => {
        const element = document.createElement(block.type);

        element.innerHTML = block.content;

        return content.appendChild(element)
    })
}

// article(posts[0]);
article(posts[1]);