import HeaderContainer from "components/template/Header/HeaderContainer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { initApp } from "redux/app_reducer";
import router from "router/router";
import "./App.scss";

function App({ initApp, menu }) {
  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <HashRouter>
      <div className="body wrapper">
        <HeaderContainer menu={menu} />
        <Routes>
          {router.map((route, idx) => (
            <Route path={route.path} element={<route.component />} key={idx} />
          ))}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default connect(() => {}, { initApp })(App);
