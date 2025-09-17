import UserForm from "../components/UserForm";

export default function CreateUser() {
  return (
    <div>
      <div className="header">
        <h1 className="h1-header">Novo Usuário</h1>
      </div>
      <div className="custom-container px-10 w-96 mx-auto mt-8">
        <UserForm />
      </div>
    </div>
  );
}
