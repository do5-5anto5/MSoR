import HeaderDefault from "../../components/header-default/HeaderDefault";
import ProductForm from "../components/ProductForm";

export default function CreateProduct() {
  return (
    <div>
      <HeaderDefault title="Novo Produto" />
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <ProductForm />
      </div>
    </div>
  );
}
