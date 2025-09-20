import { useParams } from "react-router-dom";
import HeaderDefault from "../../components/header-default/HeaderDefault";
import ProductForm from "../components/ProductForm";

export default function EditProduct() {
  const params = useParams()
  return (
    <div>
      <HeaderDefault title="Editar Produto" />
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <ProductForm productId={params.productId} />
      </div>
    </div>
  );
}
