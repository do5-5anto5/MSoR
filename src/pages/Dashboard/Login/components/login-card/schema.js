import * as yup from "yup";
export const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é necessário"),
  password: yup
    .string()
    .min(4, "Senha deve ter no mínimo 4 caracteres")
    .required("Senha é necessário"),
});