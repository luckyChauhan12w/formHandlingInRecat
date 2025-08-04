import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { nanoid } from "nanoid";

const UserDataList = () => {
  const { userData } = useContext(UserContext);
  return (
    <>
      <div className="lg:w-[40%] h-screen] sm:mt-2 py-6 px-2.5 lg:px-20 flex flex-col gap-5">
        <h1 className="font-bold text-center text-2xl mb-4">USER LIST</h1>
        {userData.map((tempUserData) => {
          return (
            <div className="border-3 p-2 rounded " key={nanoid()}>
              <p>{tempUserData.name}</p>
              <p>{tempUserData.email}</p>
              <p>{tempUserData.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserDataList;
