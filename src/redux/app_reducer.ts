import { appApi } from "api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "redux/store";
import { resource_type } from "types";

const SET_HEADER_MENU = "SET_MENU";

let initialState = {
  menu: [] as Array<resource_type>,
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

export default appReducer;
