import { useState } from "react";
import ProductCard from "./components/card/product/ProductCard";
import SearchBar from "./components/search-bar/SearchBar";
import { products as productsList } from "./mocks";

export default function Home() {
  const [products, setProducts] = useState(productsList);

  function onSearchHandler(value) {
    if (value) {
      const filteredProducts = products.filter((product) =>
        product.name.includes(value)
      );
      setProducts(filteredProducts);
    } else {
      setProducts(productsList);
    }
  }

  function onChangeSearchHandler(value) {
    if (!value) {
      setProducts(productsList);
    }
  }

  return (
    <div className="min-h-screen">
      <main className="px-12 pt-12 pb-60">
        <SearchBar
          onSearch={onSearchHandler}
          onChange={onChangeSearchHandler}
        />
        <div className="mt-10">
          <h1 className="font-medium text-4xl">Produtos</h1>
          <ul className="grid grid-cols-4 mt-6 gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
