import { appApi } from "api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "redux/store";
import { resource_type } from "types";

const SET_HEADER_MENU = "SET_MENU";
const SET_PAGE = "SET_PAGE";

let initialState = {
  menu: [] as Array<resource_type>,
  page: {} as resource_type,
};

type initialState_type = typeof initialState;

const appReducer = (state = initialState, action: AppActions_types): initialState_type => {
  switch (action.type) {
    case SET_HEADER_MENU: {
      return {
        ...state,
        menu: action.menu,
      };
    }

    case SET_PAGE: {
      return {
        ...state,
        page: action.page,
      };
    }

    default: {
      return state;
    }
  }
};

export type AppActions_types = InferActionsTypes<typeof appActions>;

export const appActions = {
  setHeaderMenu: (menu: Array<resource_type>) =>
    ({
      type: SET_HEADER_MENU,
      menu,
    } as const),

  setPage: (page: resource_type) =>
    ({
      type: SET_PAGE,
      page,
    } as const),
};

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActions_types>;

export const initApp = (): ThunkType => async (dispatch) => {
  try {
    let data = await appApi.getHeaderMenu();

    dispatch(appActions.setHeaderMenu(data.results));
  } catch (error) {
    console.error(error);
  }
};

export const getPage =
  (uri: string): ThunkType =>
  async (dispatch) => {
    try {
      let data = await appApi.getPage(uri.substring(1));

      dispatch(appActions.setPage(data.object));
    } catch (error) {
      console.error(error);
    }
  };

export default appReducer;
