import { createContext, useState } from "react";

export const Context = createContext();
// created and exported context api

const AppContext = ({ children }) => {
  const value = "My Context Value";
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

//provided context to our app component

export default AppContext;
