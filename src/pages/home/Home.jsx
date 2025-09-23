import Header from "./components/header/Header";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "./components/card/product/ProductCard";

export default function Home() {

   const productsMock = [
    {
      id: 1,
      image: "1",
      name: "Produto 1",
      price: 100,
      stock: 1,
      category: "a",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 2,
      image: "",
      name: "Produto 2",
      price: 200,
      stock: 2,
      category: "b",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 3,
      image: "",
      name: "Produto 3",
      price: 300,
      stock: 3,
      category: "c",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 4,
      image: "",
      name: "Produto 4",
      price: 400,
      stock: 4,
      category: "d",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 5,
      image: "",
      name: "Produto 5",
      price: 500,
      stock: 5,
      category: "e",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 6,
      image: "",
      name: "Produto 6",
      price: 600,
      stock: 6,
      category: "f",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 7,
      image: "",
      name: "Produto 7",
      price: 700,
      stock: 7,
      category: "g",
      createdAt: "x",
      updatedAt: "x",
    },
    {
      id: 8,
      image: "",
      name: "Produto 8",
      price: 800,
      stock: 8,
      category: "h",
      createdAt: "x",
      updatedAt: "x",
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="px-12 pt-12 pb-60">
        <form className="flex items-center gap-x-2">
          <input
            type="search"
            placeholder="Pesquisar produto"
            className="
            border border-gray-200 outline-none rounded-lg
            p-2 w-3/4
            placeholder-gray-400
             "
          />
          <button
            type="submit"
            className="
          bg-primary rounded-full
          w-10 h-10 p-2
          flex items-center justify-center
          "
          >
            <IoIosSearch className="text-3xl text-white" />
          </button>
        </form>
        <div className="mt-10">
          <h1 className="font-medium text-4xl">Produtos</h1>
          <ul className="grid grid-cols-4 mt-6 gap-4">
            {productsMock.map((product) => (
              <li key={product.id}>
              <ProductCard product={product}/>
            </li> 
            ))}        
          </ul>
        </div>
      </main>
    </div>
  );
}
