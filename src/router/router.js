import ArticlesContainer from "pages/Articles/ArticlesContainer";
import ArticleContainer from "pages/Article/ArticleContainer";

const router = [
  {
    path: "/articles/",
    component: ArticlesContainer,
  },
  {
    path: "/articles/:uri",
    component: ArticleContainer,
  },
];

export default router;
