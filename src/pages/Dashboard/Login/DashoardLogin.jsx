import LoginImage from "./components/DashBoardLoginImage.jsx";
import LoginCard from "./components/login-card/LoginCard.jsx";

export default function DashboardLogin() {
  return (
    <div className="flex h-screen">
      <div className="auth-page-image-container">
        <LoginImage className='h-full' alt='Logotipo da tela de Login'/>
      </div>

      <div className="bg-gray-100 flex justify-center items-center flex-1 border-l-blue-950">
        <LoginCard />
      </div>
    </div>
  );
}
