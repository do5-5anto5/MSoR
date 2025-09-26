import { useContext } from "react";
import PropTypes from "prop-types";
import { IoCartOutline } from "react-icons/io5";
import { formatToCurrency } from "../../../../../utils/formatToCurrency";
import cartContext from "../../../../../context/cart/cartContext";

export default function ProductCard(props) {
  const context = useContext(cartContext);

  const addToCart = () => {
   context.addItem({...props.product, productId: props.product.id});
   context.setOpenCart
  };

  return (
    <div className="rounded-2xl border border-gray-200 shadow-lg">
      <div className="h-36">
        <img
          // src={props.product.image}
          src={props.product.image}
          className="w-full h-full object-cover rounded-2xl "
          alt="Nome do Produto"
        />
      </div>
      <div className="px-4 pt-6 pb-4">
        <h2 className="text-lg text-gray-800 font-medium">
          {props.product.name}
        </h2>
        <span className="text-gray-400">
          Restam {props.product.stock} no estoque
        </span>
        <button
          onClick={addToCart}
          className="
                  bg-primary text-white
                  rounded-2xl 
                  w-full flex 
                  justify-center items-center gap-x-3
                  mt-6 py-2
                  "
        >
          <IoCartOutline className="text-3xl text-white" />
          <span className="text-lg font-medium">
            {formatToCurrency(props.product.price)}
          </span>
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};
