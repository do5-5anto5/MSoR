import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import schema from "./schema";
import InputDefault from "../../../dashboard/components/input-default/InputDefault";

export default function RegisterCard() {
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
          id={"name"}
          label={"Nome"}
          type={"text"}
          placeholder={"Digite o nome"}
          formObject={formObject.register("name")}
          errorMessage={formObject.formState.errors.name?.message}
        />
        <InputDefault
          id={"password"}
          label={"Senha"}
          type={"password"}
          placeholder={"Digite a senha"}
          formObject={formObject.register("password")}
          errorMessage={formObject.formState.errors.password?.message}
        />
        <InputDefault
          id={"confirmPassword"}
          label={"Confirmar Senha"}
          type={"confirmPassword"}
          placeholder={"Confirmação de senha"}
          formObject={formObject.register("confirmPassword")}
          errorMessage={formObject.formState.errors.confirmPassword?.message}
        />
        <button
          type="submit"
          className="mt-7 bg-blue-300 w-full py-2 rounded-lg text-white"
        >
          Cadastrar
        </button>
        <Link to="/login" className="text-center text-blue-500">
          Já tem conta?
        </Link>
      </form>
    </div>
  );
}
