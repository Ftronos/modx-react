import { appApi } from "./../api/api";

const SET_HEADER_MENU = "SET_MENU";

let initialState = {
  menu: [],
};

const appReducer = (state = initialState, action) => {
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

export const setHeaderMenu = (menu) => ({
  type: SET_HEADER_MENU,
  menu,
});

export const initApp = () => async (dispatch) => {
  try {
    let data = await appApi.getHeaderMenu();

    dispatch(setHeaderMenu(data.results));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
