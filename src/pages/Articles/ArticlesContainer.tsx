import Page from "components/DefaultTemplate/DefaultTemplate";
import Grid from "components/Grid/Grid";
import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getPage } from "redux/app_reducer";
import { getArticles } from "redux/articles_reducer";
import { AppStateType } from "redux/store";

const ArticlesContainer: FC<reduxProps_type> = ({
  articles,
  getArticles,
  getPage,
  ...restProps
}) => {
  useEffect(() => {
    getPage("articles/");
    getArticles();
  }, [getArticles, getPage]);

  return (
    <>
      <Page />
      <Grid data={articles} />
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  articles: state.articlesPage.articles,
});

const connector = connect(mapStateToProps, { getArticles, getPage });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(ArticlesContainer);
