import { appApi } from "./../api/api";

const SET_MENU = "SET_MENU";

let initialState = {
  menu: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU: {
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

export const setMenu = (menu) => ({
  type: SET_MENU,
  menu,
});

export const getMenu = () => async (dispatch) => {
  try {
    let data = await appApi.getMenu();

    dispatch(setMenu(data.results));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
