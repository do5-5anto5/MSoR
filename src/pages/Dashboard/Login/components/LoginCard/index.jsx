import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Preencha o campo email'),
  password: yup.string().required('Preencha o campo email'),
});

export default function LoginCard() {
  const formObject = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="bg-white px-6 py-8 rounded-lg shadow-md w-80">
      <form onSubmit={formObject.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="border outline-none px-3 py-1 rounded-lg"
            placeholder="Digite seu email"
            {...formObject.register("email")}
          />
        </div>
        <span className="text-red-500">{formObject.formState.errors.email?.message}</span>
        <div className="flex flex-col gap-y-1 mt-10">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            className="border outline-none px-3 py-1 rounded-lg"
            placeholder="Digite sua senha"
            {...formObject.register("password")}
            />
            <span className="text-red-500">{formObject.formState.errors.password?.message}</span>
        </div>
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
