import "./App.scss";

import HeaderContainer from "components/template/Header/HeaderContainer";
import React, { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { initApp } from "redux/app_reducer";
import { AppStateType } from "redux/store";
import router from "router/router";

const App: FC<reduxProps_type> = ({ initApp }) => {
  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <HashRouter>
      <div className="body wrapper">
        <HeaderContainer />
        <React.Suspense>
          <Routes>
            {router.map((route, idx) => (
              <Route path={route.path} element={<route.component />} key={idx} />
            ))}
          </Routes>
        </React.Suspense>
      </div>
    </HashRouter>
  );
};

const mapStateToProps = (state: AppStateType) => ({});

const connector = connect(mapStateToProps, {
  initApp,
});

type reduxProps_type = ConnectedProps<typeof connector>;

export default connector(App);
