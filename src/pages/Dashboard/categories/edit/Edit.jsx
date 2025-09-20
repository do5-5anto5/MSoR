import { useParams } from "react-router-dom";
import HeaderDefault from "../../components/header-default/HeaderDefault";
import CategoryForm from "../components/category-form/CategoryForm";

export default function EditCategory() {
  const params = useParams();
  return (
    <div>
      <HeaderDefault title="Editar Categoria" />
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <CategoryForm categoryId={params.categoryId} />
      </div>
    </div>
  );
}
