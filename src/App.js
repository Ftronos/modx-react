import Header from "components/template/Header/Header";
import { useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { getMenu } from "redux/app_reducer";
import router from "router/router";
import "./App.scss";

function App({ getMenu, menu }) {
  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return (
    <HashRouter>
      <div className="body">
        <Header menu={menu} />
        <Routes>
          {router.map((route, idx) => (
            <Route path={route.path} element={<route.component />} key={idx} />
          ))}
        </Routes>
      </div>
    </HashRouter>
  );
}

const mapStateToProps = (state) => ({
  menu: state.app.menu,
});

export default connect(mapStateToProps, { getMenu })(App);
