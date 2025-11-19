import * as yup from "yup";



export default yup.object({
  name: yup.string().required("Bitte gib deinen Namen ein"),
  email: yup
    .string()
    .required("Bitte gib eine Email ein")
    .min(5, "Email muss mindestens 5 Zeichen lang sein")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Bitte gib eine gültige Email ein"),
  nachricht: yup
    .string()
    .required("Bitte gib eine Nachricht ein")
    .min(20, "Die Nachricht muss mindestens 20 Zeichen lang sein"),
});
