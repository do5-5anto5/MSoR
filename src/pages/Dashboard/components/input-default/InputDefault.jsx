import PropTypes from "prop-types";

export default function InputDefault(props) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        className="border outline-none px-3 py-1 rounded-lg shadow-lg"
        placeholder={props.placeholder}
        {...props.formObject}
      />
      <span className="text-red-500">{props.errorMessage}</span>
    </div>
  );
}

InputDefault.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  formObject: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
