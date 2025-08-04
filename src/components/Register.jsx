import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";

const Register = ({ setIsLogin }) => {
  const { userData, setUserData } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const userFind = userData.find((temp) => temp.email == data.email);

    if (userFind) {
      toast("You are allready Registered", {
        position: "top-left",
      });
    } else {
      setUserData([...userData, data]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white text-black p-8 w-[400px] rounded-sm"
    >
      <ToastContainer />

      <div className="w-ful flex flex-col gap-7">
        <div className="flex flex-col">
          <input
            className="border-2 p-2"
            type="text"
            name="name"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required.</p>}
        </div>

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
          Login
        </span>
      </p>
      <button className="text-white w-full mt-7 cursor-pointer bg-[#050708] hover:bg-[#0c0c0c] py-2 rounded">
        REGISTER
      </button>
    </form>
  );
};

export default Register;
