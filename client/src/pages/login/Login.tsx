import { useForm } from "react-hook-form";
import TestComp from "../../components/TestComp";
import { useAuth } from "../../contexts/authContext";

import type { LoginData } from "../../contexts/authContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const formInitialData: LoginData = {
  userName: "",
  password: "",
};

// Componets
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({ defaultValues: formInitialData });

  const { login, loginSuccess } = useAuth();

  function handleFormSubmit(data: LoginData) {
    login(data);
  }

  useEffect(() => {
    if (loginSuccess) {
      navigate("/home");
    }
  }, [loginSuccess]);

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          type="text"
          placeholder="Enter Username"
          {...register("userName", { required: "Please enter UserName" })}
        />
        {errors?.userName && <p>{errors.userName.message}</p>}
        <input
          type="text"
          placeholder="Enter Password"
          {...register("password", { required: "Please enter Password" })}
        />
        {errors?.password && <p>{errors.password.message}</p>}

        <button>Submit</button>
      </form>
    </div>
  );
}
