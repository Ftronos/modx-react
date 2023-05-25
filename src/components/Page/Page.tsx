import { Parser } from "html-to-react";
import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { getPage } from "redux/app_reducer";
import { AppStateType } from "redux/store";
import router from "router/router";

import styles from "./Page.module.scss";

const Page: FC<reduxProps_type> = ({ page, getPage, ...restProps }) => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (!pathname) {
      return;
    }

    getPage(pathname);
  }, [getPage, pathname]);

  if (!page) {
    return <></>;
  }

  return (
    <div className="wrapper full-width">
      <h1 className={styles.page__h1}>{page.pagetitle}</h1>
      <div className={styles.page__description}>{Parser().parse(page.content)}</div>
      <Routes>
        {router.map((route, idx) => (
          <Route path={route.path} element={<route.component />} key={idx} />
        ))}
      </Routes>
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  page: state.app.page,
});

const connector = connect(mapStateToProps, { getPage });

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(Page);
