import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircle as AddIcon } from "react-icons/io";
export default function Dashboard() {
  const [page, setPage] = useState(1);
  const usersMock = [
    {
      id: 1,
      name: "Nayara",
      email: "na@na.na",
      createdAt: "00/00/0001",
      updatedAt: "11/11/1111",
    },
    {
      id: 2,
      name: "Tayane",
      email: "ta@ta.ta",
      createdAt: "00/00/0002",
      updatedAt: "11/11/1112",
    },
    {
      id: 3,
      name: "Glícia",
      email: "gli@gli.gli",
      createdAt: "00/00/0003",
      updatedAt: "11/11/1113",
    },
    {
      id: 4,
      name: "Luana",
      email: "lu@lu.lu",
      createdAt: "00/00/0004",
      updatedAt: "11/11/1114",
    },
    {
      id: 5,
      name: "Bruna",
      email: "bru@bru.bru",
      createdAt: "00/00/0005",
      updatedAt: "11/11/1115",
    },
    {
      id: 6,
      name: "Valeria",
      email: "va@va.va",
      createdAt: "00/00/6",
      updatedAt: "11/11/6",
    },
  ];

  let perPage = 2;
  const totalPages = Math.ceil(usersMock.length / perPage);

  function handleNextButton() {
    setPage(page + 1);
  }

  function handlePreviousButton() {
    setPage(page - 1);
  }

  return (
    <div>
      <div className="header">
        <h1 className="h1-header">Usuários</h1>
        <Link to="/dashboard/users/create">
          <AddIcon className="text-4xl text-secondary mr-3" />
        </Link>
      </div>
      <div className="custom-container items-center flex flex-col">
        <div className="overflow-x-auto mt-4">
          <table className="table w-full border-2 rounded-2xl overflow-hidden">
            <thead className="text-tabletitle bg-tertiary">
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Criação</th>
                <th>Atualização</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {usersMock.slice(0, page * perPage).map((user, index) => (
                <tr
                  key={user.id}
                  className={index % 2 === 0 ? "bg-slate-300" : "bg-slate-400"}
                >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.updatedAt}</td>
                  <td><Link to={`/dashboard/users/edit/${user.id}`}>Editar</Link></td>
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
