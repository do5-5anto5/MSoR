import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import HeaderDefault from "../../components/header-default/HeaderDefault";

export default function EditUser() {
    const params = useParams()

  return (
    <div>
      <div>
        <HeaderDefault title="Editar Usuário" />
      </div>
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <UserForm userId={params.userId} btnTxt={"Editar"} />
      </div>
    </div>
  );
}
