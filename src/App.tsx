import "./App.scss";

import Page from "components/Page/Page";
import HeaderContainer from "components/template/Header/HeaderContainer";
import { FC, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { HashRouter } from "react-router-dom";
import { initApp } from "redux/app_reducer";
import { AppStateType } from "redux/store";

const App: FC<reduxProps_type> = ({ initApp }) => {
  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <HashRouter>
      <div className="body wrapper">
        <HeaderContainer />
        <Page />
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
