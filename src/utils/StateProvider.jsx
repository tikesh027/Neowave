import { Children, createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

export const stateProvider = ({ Children, initialState, reducer }) => {
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {Children}
  </stateContext.Provider>;
};
