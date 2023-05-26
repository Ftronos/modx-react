import { Parser } from "html-to-react";
import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "redux/store";

import styles from "./Page.module.scss";

const Page: FC<reduxProps_type> = ({ page, ...restProps }) => {
  return (
    <div className="wrapper full-width">
      <h1 className={styles.page__h1}>{page.pagetitle}</h1>
      <div className={styles.page__description}>{Parser().parse(page.content)}</div>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  page: state.app.page,
});

const connector = connect(mapStateToProps, {});

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(Page);
