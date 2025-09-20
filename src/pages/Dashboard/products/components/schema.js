import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres"),
    price: yup.string().required("Campo obrigatório"),
    stock: yup.string(),
    category: yup.string().required("Campo obrigatório"),
});