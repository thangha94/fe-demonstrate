import React, { Dispatch, createContext, useContext, useReducer } from "react";
import reducer, { ActionT, InitialStateT, initialState } from "./reducer";

interface PropsT {
  children: React.ReactNode;
}

interface StateProviderT {
  state?: InitialStateT;
  dispatch?: Dispatch<ActionT>;
}

const StateContext = createContext<StateProviderT>({ state: initialState });

export const StateProvider: React.FC<PropsT> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
