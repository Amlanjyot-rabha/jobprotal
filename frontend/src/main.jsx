import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

axios.defaults.withCredentials = true;

// Create ApiContext and custom hook
 
export const ApiContext = createContext({ baseUrl: "https://jobprotal-g6ed.onrender.com" });
export const useApi = () => useContext(ApiContext);

 
 


 
export const Context = createContext({
  isAuthorized: false,
});

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState({});
 
  const baseUrl = "https://jobprotal-g6ed.onrender.com";
 
 

  return (
    <ApiContext.Provider value={{ baseUrl }}>
      <Context.Provider
        value={{
          isAuthorized,
          setIsAuthorized,
          user,
          setUser,
        }}
      >
        <App />
      </Context.Provider>
    </ApiContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
