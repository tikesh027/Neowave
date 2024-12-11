import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import Login from "./components/login";
import { setToken } from "./components/redux/slices/authSlice"; // Corrected import
import HomePage from "./components/homePage";

const App = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const token = useSelector((state) => state.auth.token); // Corrected selector path

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(setToken(token)); // Dispatch setToken action to store token in Redux
    }
  }, [dispatch]); // Run useEffect only when dispatch changes (not token)

  return <div>{token ? <HomePage /> : <Login />}</div>;
};

export default App;
