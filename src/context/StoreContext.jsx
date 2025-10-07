import { createContext } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    // you can store shared data or functions here later
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
