import UserForm from "../components/UserForm";
import HeaderDefault from "../../components/header-default/HeaderDefault";

export default function CreateUser() {
  return (
    <div>
      <div>
        <HeaderDefault title="Novo Usuário" />
      </div>
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <UserForm />
      </div>
    </div>
  );
}
