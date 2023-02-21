import { ADD_EXPENSE, DELETE_EXPENSE } from "../actions-types/expenses";

const initialState = {
  expenseList: [],
};
export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter((item) => {
       return item.created !== data.created;
      });
      return {
        ...state,
        expenseList: updatedList,
      };
    }

    default:
      return state;
  }
};
