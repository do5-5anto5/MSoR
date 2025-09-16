import { useState } from "react";
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
    {
      id: 6,
      name: "Valeria",
      email: "va@va.va",
      createdAt: "00/00/6",
      updatedAt: "11/11/6",
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
    <div className="custom-container items-center flex flex-col">
      <h1 className="text-3xl font-medium">Users</h1>

      <div className="overflow-x-auto mt-4">
        <table
          className="table table-zebra
          w-full"
        >
          <thead className="text-tabletitle">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Criação</th>
              <th>Atualização</th>
            </tr>
          </thead>
          <tbody>
            {usersMock.slice(0, page * perPage).map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.createdAt}</th>
                <th>{user.updatedAt}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" p-4 flex justify-center gap-4 items-center">
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
  );
}
