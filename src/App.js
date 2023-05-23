import ArticlesContainer from "pages/Articles/ArticlesContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticleContainer from "pages/Article/ArticleContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
          <Route path="/articles/" element={<ArticlesContainer />} />
          <Route path="/articles/:uri" element={<ArticleContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
