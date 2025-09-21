import RegisterCard from "./components/card/RegisterCard";
import RegisterPageImage from "./components/RegisterPageImage";

export default function Register() {
  return (
    <div className="flex h-screen"> 
      <div className="auth-page-image-container">
        <RegisterPageImage
          alt="Imagem de usuário em registro"
          className="h-full"
        />
      </div>

      <div className="bg-gray-100 flex justify-center items-center flex-1 border-l-blue-950">
        <RegisterCard />
      </div>
    </div>
  );
}
