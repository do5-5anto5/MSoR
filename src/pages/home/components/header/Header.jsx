import { useState } from "react";
import { IoCartOutline as CartIcon } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [isAuthenticated] = useState(false);

  return (
    <div>
      <header className="py-4 px-12 flex justify-between items-center">
        <span className="font-bold text-2xl">LOGO</span>
        <div className="flex items-center gap-x-3 font-bold">
          <Link to="/cart">
            <CartIcon className="text-3xl text-gray-700 items-center" />
          </Link>
          {isAuthenticated ? (
            <span>
              Olá, <span className="text-primary">Usuário</span>
            </span>
          ) : (
            <Link to="/login" className="text-primary">
              Login
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}
