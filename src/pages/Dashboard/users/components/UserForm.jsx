import { useForm } from "react-hook-form";
import InputDefault from "../../components/input-default/InputDefault";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import PropTypes from "prop-types";

export default function UserForm(props) {
  const formObject = useForm({
    defaultValues: props.userId
      ? {
          name: "Mock User",
          email: "mock@email.com",
          password: "123456",
          role: 1,
        }
      : undefined,
    resolver: yupResolver(schema),
  });

  function onSubmitHandler(data) {
    console.log(data);
    if (props.userId) {
      //TODO: edit user
    } else {
      //TODO: create user
    }
  }

  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={formObject.handleSubmit(onSubmitHandler)}
    >
      <InputDefault
        id={"name"}
        label={"Nome"}
        type={"text"}
        placeholder={"Digite o nome"}
        formObject={formObject.register("name")}
        errorMessage={formObject.formState.errors.name?.message}
      />
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
      <select
        className="border-1 outline-none px-3 py-1 rounded-lg shadow-lg mt-4"
        {...formObject.register("role")}
      >
        <option value="">Selecione</option>
        <option value="1">ADMIN</option>
      </select>
      <button
        type="submit"
        className="mt-7 bg-primary w-full py-2 rounded-lg text-white"
      >
        {props.userId ? "Editar" : "Cadastrar"}
      </button>
    </form>
  );
}

UserForm.propTypes = {
  userId: PropTypes.string,
};
