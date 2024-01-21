import { createContext } from "react";

export const Context = createContext();
// created and exported context api

const AppContext = ({ children }) => {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

//provided context to our app components

export default AppContext;

