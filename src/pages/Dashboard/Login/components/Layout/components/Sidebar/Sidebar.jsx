import { Link } from "react-router-dom";
import { FaUser as UserIcon } from "react-icons/fa";
import { SiShopware as ProdIcon } from "react-icons/si";
import { IoColorFilter as CtgIcon } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside
      className="fixed flex flex-col justify-between
        left-0 top-0 h-full w-60 
        bg-primary shadow-lg
        rounded-tr-lg rounded-br-lg 
         p-8"
    >
      <ul className="flex flex-col gap-y=3 text-white text-md">
        <li>
          <Link to="/dashboard" className="flex items-center gap-x-4">
            <UserIcon />
            Usuários
          </Link>
        </li>
        <li>
          <Link to="/dashboard/products" className="flex items-center gap-x-4">
            <ProdIcon />
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/categories"
            className="flex items-center gap-x-4"
          >
            <CtgIcon />
            Categorias
          </Link>
        </li>
      </ul>
      <button type="button" className="w-fit text-red-200 text-lg">
        Sair
      </button>
    </aside>
  );
}
