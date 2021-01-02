import { ADD_NOMINEE, GET_NOMINEES, REMOVE_NOMINEE } from "./types";

const initialState = {
  nomineeList: [],
};

const nomineeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOMINEE: {
      return {
        ...state,
        nomineeList: [...state.nomineeList, action.nominee],
      };
    }
    case GET_NOMINEES: {
      return {
        ...state,
      };
    }
    case REMOVE_NOMINEE: {
      return {
        ...state,
        nomineeList: state.nomineeList.filter(
          (movieTitle) => movieTitle !== action.nominee
        ),
      };
    }
    default:
      return state;
  }
};

export default nomineeReducer;
