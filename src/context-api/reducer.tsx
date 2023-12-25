export interface InitialStateT {
  selectedId?: string;
  sortColumn?: string;
}
export interface ActionT {
  type: string;
  payload: InitialStateT;
}

export const initialState: InitialStateT = {
  selectedId: "",
  sortColumn: "",
};

const reducer = (state = initialState, action: ActionT) => {
  switch (action.type) {
    case "SET_SELECTED_PRODUCT_ID":
      return {
        ...state,
        selectedId: action.payload.selectedId,
      };
    case "SET_SORT_COLUMN":
      return {
        ...state,
        sortColumn: action.payload.sortColumn,
      };
    default:
      return state;
  }
};

export default reducer;
