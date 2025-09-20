import { useState } from "react";
import HeaderDefault from "../components/header-default/HeaderDefault";
import { Link } from "react-router-dom";
import { IoMdAddCircle as AddIcon } from "react-icons/io";

export default function Products() {
  const productsMock = [
    {
      id: 1,
      image: "1",
      name: "Produto 1",
      price: "100",
      stock: "1",
      category: "a",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 2,
      image: "",
      name: "Produto 2",
      price: "200",
      stock: "2",
      category: "b",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 3,
      image: "",
      name: "Produto 3",
      price: "300",
      stock: "3",
      category: "c",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 4,
      image: "",
      name: "Produto 4",
      price: "400",
      stock: "4",
      category: "d",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 5,
      image: "",
      name: "Produto 5",
      price: "500",
      stock: "5",
      category: "e",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 6,
      image: "",
      name: "Produto 6",
      price: "600",
      stock: "6",
      category: "f",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 7,
      image: "",
      name: "Produto 7",
      price: "700",
      stock: "7",
      category: "g",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 8,
      image: "",
      name: "Produto 8",
      price: "800",
      stock: "8",
      category: "h",
      createdAt: "x",
      updatedAt: "x",
    },
  ];

  const [page, setPage] = useState(1);
  const perPage = 2;
  const totalPages = Math.ceil(productsMock.length / perPage);

  function handleNextButton() {
    setPage(page + 1);
  }

  function handlePreviousButton() {
    setPage(page - 1);
  }

  return (
    <div>
      <HeaderDefault
        title="Produtos"
        icon={<AddIcon className="icon-header" />}
        linkTo="/dashboard/products/create"
      />
      <div className="custom-container items-center flex flex-col">
        <div className="overflow-x-auto mt-12">
          <table className="table w-full border-2 rounded-2xl overflow-hidden">
            <thead className="text-tabletitle bg-tertiary">
              <tr>
                <th>ID</th>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Stock</th>
                <th>Categoria</th>
                <th>Criação</th>
                <th>Atualização</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productsMock.slice(0, page * perPage).map((product, index) => (
                <tr
                  key={product.id}
                  className={index % 2 === 0 ? "bg-slate-300" : "bg-slate-400"}
                >
                  <td>{product.id}</td>
                  <td>{product.image}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.category}</td>
                  <td>{product.createdAt}</td>
                  <td>{product.updatedAt}</td>
                  <td>
                    <Link to={`/dashboard/products/edit/${product.id}`}>
                      Editar
                    </Link>
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
