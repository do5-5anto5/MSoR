import HeaderDefault from "../components/header-default/HeaderDefault";
import { IoMdAddCircle as AddIcon } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [page, setPage] = useState(1);
  const categoriesMock = [
    {
      id: 1,
      name: "Celulares",
      units: "10",
      createdAt: "00/00/0001",
      updatedAt: "11/11/1111",
    },
    {
      id: 2,
      name: "Notebooks",
      units: "20",
      createdAt: "00/00/0002",
      updatedAt: "11/11/1112",
    },
    {
      id: 3,
      name: "Eletrodomésticos",
      units: "30",
      createdAt: "00/00/0003",
      updatedAt: "11/11/1113",
    },
    {
      id: 4,
      name: "Vestuário",
      units: "40",
      createdAt: "00/00/0004",
      updatedAt: "11/11/1114",
    },
    {
      id: 5,
      name: "Perfumaria",
      units: "50",
      createdAt: "00/00/0005",
      updatedAt: "11/11/1115",
    },
    {
      id: 6,
      name: "Naturais",
      units: "60",
      createdAt: "00/00/6",
      updatedAt: "11/11/6",
    },
  ];

  let perPage = 2;
  const totalPages = Math.ceil(categoriesMock.length / perPage);

  function handleNextButton() {
    setPage(page + 1);
  }

  function handlePreviousButton() {
    setPage(page - 1);
  }

  return (
    <div>
      <HeaderDefault
        title="Categorias"
        icon={<AddIcon className="icon-header" />}
        linkTo="/dashboard/categories/create"
      />

      <div className="custom-container items-center flex flex-col">
        <div className="overflow-x-auto mt-12">
          <table className="table w-full border-2 rounded-2xl overflow-hidden">
            <thead className="text-tabletitle bg-tertiary">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Unidades</th>
                <th>Criação</th>
                <th>Atualização</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categoriesMock.slice(0, page * perPage).map((category, index) => (
                <tr
                  key={category.id}
                  className={index % 2 === 0 ? "bg-slate-300" : "bg-slate-400"}
                >
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.units}</td>
                  <td>{category.createdAt}</td>
                  <td>{category.updatedAt}</td>
                  <td>
                    <Link to={`/dashboard/categories/edit/${category.id}`}>Editar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" p-4 flex justify-center gap-16 items-center">
          <button
            onClick={handlePreviousButton}
            disabled={page === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Anterior
          </button>

          <span className="text-sm text-gray-600">
            Página {page} de {totalPages}
          </span>

          <button
            onClick={handleNextButton}
            disabled={page === totalPages}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              page === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}
