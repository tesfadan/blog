// @ts-ignore
import articles from "./components/articles";
import subscribe from "./components/subscribe";
import { posts } from "./content/posts";
import "./style/index.scss";

// article(posts[0]);
// articles(posts);

articles([posts[0], posts[1], posts[1], posts[0]]);
subscribe()

