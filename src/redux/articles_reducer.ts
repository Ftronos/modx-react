import { articlesApi } from "api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "redux/store";
import { resource_type } from "types";

const SET_ARTICLES = "SET_ARTICLES";
const SET_ARTICLE = "SET_ARTICLE";

let initialState = {
  articles: [] as Array<resource_type>,
  article: {} as resource_type,
};

type initialState_type = typeof initialState;

const articlesReducer = (state = initialState, action: AppActions_types): initialState_type => {
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

export type AppActions_types = InferActionsTypes<typeof articlesActions>;

export const articlesActions = {
  setArticles: (articles: Array<resource_type>) =>
    ({
      type: SET_ARTICLES,
      articles,
    } as const),

  setArticle: (article: resource_type) =>
    ({
      type: SET_ARTICLE,
      article,
    } as const),
};

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActions_types>;

export const getArticles = (): ThunkType => async (dispatch) => {
  try {
    let data = await articlesApi.getArticles();

    dispatch(articlesActions.setArticles(data.results));
  } catch (error) {
    console.error(error);
  }
};

export default articlesReducer;
