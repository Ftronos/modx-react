import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticle } from "redux/articles_reducer";

const ArticleContainer = ({ article, getArticle, ...restProps }) => {
  const { uri } = useParams();

  useEffect(() => {
    if (!uri) {
      return;
    }

    getArticle(uri);
  }, [getArticle, uri]);

  if (!article) {
    return <></>;
  }

  return <>{article.content}</>;
};

const mapStateToProps = (state) => ({
  article: state.articlesPage.article,
});

export default connect(mapStateToProps, {
  getArticle,
})(ArticleContainer);
