import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setIsLogin }) => {
  const { userData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const isUserExist = userData.find(
      (temp) => temp.email == data.email && temp.password == data.password
    );

    if (isUserExist) {
      toast("User Logged in Succesfully!", {
        position: "top-left",
      });
    } else {
      toast("You are not Registered");
    }
  };

  return (
    <form
      className="bg-white text-black p-8 w-[400px] rounded-sm"
      onSubmit={handleSubmit(handleLogin)}
    >
      <ToastContainer />
      <div className=" flex flex-col gap-7">
        <div className="flex flex-col">
          <input
            className="border-2 p-2"
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required.</p>}
        </div>

        <div className="flex flex-col">
          <input
            className="border-2 p-2"
            type="text"
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required.</p>
          )}
        </div>
      </div>
      <p className="mt-3">
        Click here to{" "}
        <span
          className="text-sky-700 underline cursor-pointer"
          onClick={() => setIsLogin((pre) => !pre)}
        >
          Register
        </span>
      </p>
      <button className="text-white w-full mt-7 cursor-pointer bg-[#050708] hover:bg-[#0c0c0c] py-2 rounded">
        LOGIN
      </button>
    </form>
  );
};

export default Login;
