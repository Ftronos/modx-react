import { articlesApi } from "./../api/api";

const SET_ARTICLES = "SET_ARTICLES";
const SET_ARTICLE = "SET_ARTICLE";

let initialState = {
  articles: [],
  article: {},
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }

    case SET_ARTICLE: {
      return {
        ...state,
        article: action.article,
      };
    }

    default: {
      return state;
    }
  }
};

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  articles,
});

export const setArticle = (article) => ({
  type: SET_ARTICLE,
  article,
});

export const getArticles = () => async (dispatch) => {
  try {
    let data = await articlesApi.getArticles();

    dispatch(setArticles(data.results));
  } catch (error) {
    console.error(error);
  }
};

export const getArticle = (uri) => async (dispatch) => {
  try {
    let data = await articlesApi.getArticle(uri);

    dispatch(setArticle(data.object));
  } catch (error) {
    console.error(error);
  }
};

export default articlesReducer;
