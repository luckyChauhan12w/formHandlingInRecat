import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Register from "./components/Register";
import UserContext from "./contexts/UserContext";
import UserDataList from "./components/UserDataList";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [isLight]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="flex flex-col lg:flex-row relative">
        <div className="bg-black lg:h-screen flex justify-center items-center p-2.5 mt-20 lg:mt-0 lg:w-[60%]">
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Register setIsLogin={setIsLogin} />
          )}
        </div>
        <UserDataList />
        <button
          onClick={() => setIsLight((pre) => !pre)}
          className=" bg-black dark dark:text-white p-1 px-4 rounded-2xl cursor-pointer absolute right-4 top-4"
        >
          {isLight ? "Dark" : "Light"}
        </button>
      </div>
    </UserContext.Provider>
  );
};

export default App;
