import HeaderDefault from "../../components/header-default/HeaderDefault";
import CategoryForm from "../components/category-form/CategoryForm";

export default function CreateCategory() {
  return (
    <div>
      <HeaderDefault title="Criar Categoria" />
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <CategoryForm />
      </div>
    </div>
  );
}
