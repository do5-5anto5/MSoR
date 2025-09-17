import LoginImage from "./components/DashBoardLoginImage.jsx";
import LoginCard from "./components/login-card/LoginCard.jsx";

export default function DashboardLogin() {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-300 flex justify-center items-center flex-1 h-screen">
        <LoginImage width={300} height={400} alt='Logotipo caveira mexicana'/>
      </div>

      <div className="bg-gray-100 flex justify-center items-center flex-1 border-l-blue-950">
        <LoginCard />
      </div>
    </div>
  );
}
