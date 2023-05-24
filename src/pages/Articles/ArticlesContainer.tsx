import Grid from "components/Grid/Grid";
import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getArticles } from "redux/articles_reducer";
import { AppStateType } from "redux/store";

const ArticlesContainer: FC<reduxProps_type> = ({ articles, getArticles, ...restProps }) => {
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return <Grid data={articles} itemLink="articles" />;
};

const mapStateToProps = (state: AppStateType) => ({
  articles: state.articlesPage.articles,
});

const connector = connect(mapStateToProps, { getArticles });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(ArticlesContainer);
