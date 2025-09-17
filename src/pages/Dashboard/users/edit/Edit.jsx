import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function EditUser() {
    const params = useParams()

  return (
    <div>
      <div className="header">
        <h1 className="h1-header">Editar Usuário</h1>
      </div>
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <UserForm userId={params.userId} btnTxt={"Editar"} />
      </div>
    </div>
  );
}
