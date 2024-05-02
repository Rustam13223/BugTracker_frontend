import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const FilterContext = createContext();
const useFilterContext = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState("");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilterContext, FilterProvider };
