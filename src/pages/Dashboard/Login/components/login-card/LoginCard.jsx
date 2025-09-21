import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputDefault from "../../../components/input-default/InputDefault";
import { schema } from "./schema";

export default function LoginCard() {
  const navigate = useNavigate();

  const formObject = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    navigate("/dashboard");
  }

  return (
    <div className="auth-card">
      <form onSubmit={formObject.handleSubmit(onSubmit)} className="auth-form">
        <InputDefault
          id={"email"}
          label={"Email"}
          type={"text"}
          placeholder={"Digite o email"}
          formObject={formObject.register("email")}
          errorMessage={formObject.formState.errors.email?.message}
        />
        <InputDefault
          id={"password"}
          label={"Senha"}
          type={"password"}
          placeholder={"Digite a senha"}
          formObject={formObject.register("password")}
          errorMessage={formObject.formState.errors.password?.message}
        />

        <button
          type="submit"
          className="mt-7 bg-blue-300 w-full py-2 rounded-lg text-white"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
