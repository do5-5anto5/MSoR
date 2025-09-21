import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo necessário"),
  password: yup
    .string()
    .required("Campo necessário")
    .min(4, "Senha deve ter no mínimo 4 caracteres")
});

export default schema;
