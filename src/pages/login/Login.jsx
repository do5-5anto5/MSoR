import LoginCard from "./components/card/LoginCard";
import LoginPageImage from "./components/LoginPageImage";

export default function Login() {

  return (
    <div className="flex h-screen">
      <div className="auth-page-image-container">
        <LoginPageImage
          alt="Imagem de usuário em login"
          className="h-full"
        />
      </div>

      <div className="bg-gray-100 flex justify-center items-center flex-1 border-l-blue-950">
        <LoginCard />
      </div>
    </div>
  );
}
