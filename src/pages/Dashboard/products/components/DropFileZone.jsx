import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";

export default function DropFileZone(props) {

  const dropZoneObject = useDropzone({ onDrop: props.onDrop });
  return (
    <div {...dropZoneObject.getRootProps()} className="border border-dashed py-8 rounded-lg text-center">
      <input {...dropZoneObject.getInputProps()} />
      <span className="">Arraste ou selecione imagem aqui</span>
    </div>
  );
}

DropFileZone.propTypes = {
  onDrop: PropTypes.func.isRequired,
}
