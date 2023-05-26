import ArticleContainer from "pages/Article/ArticleContainer";
import ArticlesContainer from "pages/Articles/ArticlesContainer";
import Main from "pages/Main/Main";
import { router_type } from "types";

const router = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/articles/",
    component: ArticlesContainer,
  },
  {
    path: "/articles/:uri",
    component: ArticleContainer,
  },
] as Array<router_type>;

export default router;
