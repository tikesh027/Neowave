import React, { useEffect } from "react";
import Login from "./components/login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/constants";
import HomePage from "./components/homePage";

const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);
  return <div>{token ? <HomePage /> : <Login />}</div>;
};

export default App;
