import Grid from "components/Grid/Grid";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getArticles } from "redux/articles_reducer";

const ArticlesContainer = ({ articles, getArticles, ...restProps }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return <Grid data={articles} itemLink="articles" />;
};

const mapStateToProps = (state) => ({
  articles: state.articlesPage.articles,
});

export default connect(mapStateToProps, {
  getArticles,
})(ArticlesContainer);
