import { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

export const StateProvider = ({ Children, initialState, reducer }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {Children}
  </stateContext.Provider>
);

export const useStateProvider = () => useContext(stateContext);
