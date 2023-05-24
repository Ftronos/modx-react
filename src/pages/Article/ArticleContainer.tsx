import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticle } from "redux/articles_reducer";
import { AppStateType } from "redux/store";

const ArticleContainer: FC<reduxProps_type> = ({ article, getArticle, ...restProps }) => {
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

const mapStateToProps = (state: AppStateType) => ({
  article: state.articlesPage.article,
});

const connector = connect(mapStateToProps, { getArticle });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(ArticleContainer);
