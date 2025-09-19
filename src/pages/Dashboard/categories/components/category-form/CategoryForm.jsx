import { useForm } from "react-hook-form";
import InputDefault from "../../../components/input-default/InputDefault";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

export default function CategoryForm(props) {
  const formObject = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmitHandler(data) {
    console.log(data);
    if (props.categoryId) {
      //todo: edit category
    } else {
      //todo: create category
    }
    //TODO: API integration
  }

  return (
    <div>
      <form onSubmit={formObject.handleSubmit(onSubmitHandler)}>
        <InputDefault
          id="name"
          label="Nome"
          type="text"
          placeholder="Nome da categoria"
          formObject={formObject.register("name")}
          errorMessage={formObject.formState.errors.name?.message}
        />
        <InputDefault
          id="units"
          label="Unidades"
          type="text"
          placeholder="Digite a quatidade de itens"
          formObject={formObject.register("name")}
          errorMessage={formObject.formState.errors.name?.message}
        />
        <button
          type="submit"
          className="mt-7 bg-primary w-full py-2 rounded-lg text-white"
        >
          {props.categoryId ? "Editar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

CategoryForm.propTypes = {
  categoryId: PropTypes.string,
};
