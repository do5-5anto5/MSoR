import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { schema } from "./schema";

export default function SearchBar(props) {
  const formObject = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmitHandler(data) {
    props.onSearch(data.searchValue);
  }

  return (
    <div>
      <form
        className="flex items-center gap-x-2"
        onSubmit={formObject.handleSubmit(onSubmitHandler)}
      >
        <input
          type="search"
          placeholder="Pesquisar produto"
          className="
            border border-gray-200 outline-none rounded-lg
            p-2 w-3/4
            placeholder-gray-400
             "
          {...formObject.register("searchValue")}
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
    </div>
  );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func
}
