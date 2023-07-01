import React from "react";

import "./App.css";
import Home from "./pages/Home";
import { useGetGroceryQuery } from "./features/apiSlice";

function App() {
  const { data: allData, isLoading, isError, error } = useGetGroceryQuery();

  return (
    <div className="App">
      {allData && <Home allData={allData} />}
    </div>
  );
}

export default App;
