import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getArticles } from "redux/articles_reducer";

const ArticlesContainer = ({ articles, getArticles, ...props }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <>
      {articles.map((article) => (
        <Link to={`/articles/${article.alias}`} key={article.id}>
          <div>{article.longtitle}</div>
        </Link>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articlesPage.articles,
});

export default connect(mapStateToProps, {
  getArticles,
})(ArticlesContainer);
