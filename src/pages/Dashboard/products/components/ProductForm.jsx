import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputDefault from "../../components/input-default/InputDefault";
import DropFileZone from "./DropFileZone";
import { schema } from "./schema";

export default function ProductForm(props) {
  const [file, setFile] = useState();
  const formObject = useForm({
    defaultValues: props.productId
      ? {
          name: "Mock Product",
          price: 100,
          stock: 10,
          category: "1",
        }
      : undefined,
    resolver: yupResolver(schema),
  });

  function onSubmitHandler(data) {
    console.log(data);
    if (props.productId) {
      //TODO: edit product
    } else {
      //TODO: create product
    }
    //todo: integration
  }

  function onDropHandler(files) {
    console.log(files);
    setFile(files[0]);
  }

  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={formObject.handleSubmit(onSubmitHandler)}
    >
      <div>
        <DropFileZone onDrop={onDropHandler} />
        {file?.name}
      </div>
      <InputDefault
        id={"name"}
        label={"Nome"}
        type={"text"}
        placeholder={"Nome do produto"}
        formObject={formObject.register("name")}
        errorMessage={formObject.formState.errors.name?.message}
      />
      <InputDefault
        id={"price"}
        label={"Preço"}
        type={"number"}
        placeholder={"Preço do produto"}
        formObject={formObject.register("price")}
        errorMessage={formObject.formState.errors.price?.message}
      />
      <InputDefault
        id={"stock"}
        label={"Stock"}
        type={"number"}
        placeholder={"Unidades do produto"}
        formObject={formObject.register("stock")}
        errorMessage={formObject.formState.errors.stock?.message}
      />
      <select
        className="border-1 outline-none px-3 py-1 rounded-lg shadow-lg mt-4"
        {...formObject.register("category")}
      >
        <option value="">Selecione Categoria</option>
        <option value="1">Celulares</option>
        <option value="2">Notebooks</option>
        <option value="3">Eletrodomésticos</option>
        <option value="4">Naturais</option>
      </select>
      <span className="text-red-500">{formObject.formState.errors.category?.message}</span>
      <button
        type="submit"
        className="mt-7 bg-primary w-full py-2 rounded-lg text-white"
      >
        {props.productId ? "Editar" : "Cadastrar"}
      </button>
    </form>
  );
}

ProductForm.propTypes = {
  productId: PropTypes.string,
};
