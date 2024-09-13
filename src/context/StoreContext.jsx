import { createContext, useState } from "react";
import { event_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const contextValue = {
    event_list,
    search,
    setSearch,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
