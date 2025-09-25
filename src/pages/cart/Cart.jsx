import { useState, useEffect } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { formatToCurrency } from "../../utils/formatToCurrency";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([
    {
      productId: 1,
      image: "https://m.media-amazon.com/images/I/81pieXC63IL.jpg",
      name: "Tv",
      price: 1,
      qty: 1,
      subTotal: 1,
    },
    {
      productId: 2,
      image: "https://t2.tudocdn.net/723333?w=1200&h=1200",
      name: "Celular",
      price: 2,
      qty: 2,
      subTotal: 4,
    },
    {
      productId: 3,
      image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/215620",
      name: "Notebook",
      price: 3,
      qty: 3,
      subTotal: 9,
    },
  ]);

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.productId !== id);
    setItems(newItems);
  };

  const changeQuantity = (id, qty) => {
    if (qty < 1) return;
    const newItems = items.map((item) => {
      if (item.productId === id) {
        return { ...item, qty, subTotal: item.price * qty };
      }
      return item;
    });
    setItems(newItems);
  };

  const calculateTotal = () => {
    let t = 0;
    items.forEach((item) => {
      t += item.subTotal;
    });
    setTotal(t);
  }

  useEffect(() => {
    calculateTotal();
  })

  return (
    <main className="min-h-screen px-12 pt-10">
      <span className="text-2xl text-right font-medium block mb-6">
        Total: {`${formatToCurrency(total)}`}
      </span>
      <div className="overflow-x-auto rounded-2xl">
        <table className="table">
          <thead className="bg-primary text-white bg-gradient-to-r from-blue-500 to-blue-700">
            <tr className="font-medium text-lg">
              <th className="w-1/6">Produto</th>
              <th className="w-1/6">Nome</th>
              <th className="w-1/6">Preço</th>
              <th className="w-1/6">Quantidade</th>
              <th className="w-1/6">Subtotal</th>
              <th className="w-1/6"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.productId}
                className={`${index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}`}
              >
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  {formatToCurrency(item.price)}
                </td>
                <td>
                  <div className="flex items-center gap-x-2">
                    <button>
                      <FaPlus
                        onClick={() =>
                          changeQuantity(item.productId, item.qty + 1)
                        }
                        className="text-xs font-light text-blue-500"
                      />
                    </button>
                    <input
                      type="text"
                      value={item.qty}
                      className="border-2 border-gray-300 rounded-lg p-2 w-10 text-center font-medium"
                    />
                    <button>
                      <FaMinus
                        onClick={() =>
                          changeQuantity(item.productId, item.qty - 1)
                        }
                        className="text-xs font-light text-blue-500"
                      />
                    </button>
                  </div>
                </td>
                <td>
                  {formatToCurrency(item.subTotal)}
                </td>
                <td>
                  <div className="flex justify-center">
                    <button onClick={() => removeItem(item.productId)}>
                      <FaTrash className="text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-6">
        <button
          className="bg-primary 
            font-medium text-white
            py-3 px-6 rounded-xl
          "
        >
          Finalizar compra
        </button>
      </div>
    </main>
  );
}
