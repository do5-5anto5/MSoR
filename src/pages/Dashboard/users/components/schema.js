import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(4, "Senha deve ter no mínimo 4 caracteres")
    .required("Senha é obrigatório"),
  role: yup.string(),
});