import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputDefault from "../../../components/input-default/InputDefault";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(4, "Senha deve ter no mínimo 4 caracteres")
    .required("Senha é obrigatório"),
});

export default function LoginCard() {
  const navigate = useNavigate();

  const formObject = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    navigate("/dashboard");
  }

  return (
    <div className="bg-white px-6 py-8 rounded-lg shadow-md w-80">
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
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
