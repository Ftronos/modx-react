import ArticleContainer from "pages/Article/ArticleContainer";
import ArticlesContainer from "pages/Articles/ArticlesContainer";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { connect } from "react-redux";
import { getMenu } from "redux/app_reducer";
import Header from "components/template/Header/Header";

function App({ getMenu, menu }) {
  useEffect(() => {
    getMenu();
  }, [getMenu]);

  return (
    <HashRouter>
      <div className="body">
        <Header menu={menu} />
        <Routes>
          <Route path="/articles/" element={<ArticlesContainer />} />
          <Route path="/articles/:uri" element={<ArticleContainer />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

const mapStateToProps = (state) => ({
  menu: state.app.menu,
});

export default connect(mapStateToProps, { getMenu })(App);
