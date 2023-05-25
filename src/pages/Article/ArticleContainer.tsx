import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getPage } from "redux/app_reducer";
import { AppStateType } from "redux/store";

const ArticleContainer: FC<reduxProps_type> = ({ page, getPage, ...restProps }) => {
  return <></>;
};

const mapStateToProps = (state: AppStateType) => ({
  page: state.app.page,
});

const connector = connect(mapStateToProps, { getPage });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(ArticleContainer);
