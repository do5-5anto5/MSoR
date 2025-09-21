import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo necessário"),
  name: yup
    .string()
    .required("Campo necessário")
    .min(3, "Mínimo de 3 caracteres"),
  password: yup
    .string()
    .required("Senha é necessário")
    .min(4, "Senha deve ter no mínimo 4 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo necessário")
    .oneOf([yup.ref("password")], "Senha não confere"),
});

export default schema;
