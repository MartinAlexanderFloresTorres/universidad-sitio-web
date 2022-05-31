import header from "./componentes/header.js";
import footer from "./componentes/footer.js";
import { formulario, nombre, email, mensaje, tema } from "./variables.js";
import { enviarFormulario } from "./funciones.js";

header();
footer();

//===== eventos =====
formulario.addEventListener("submit", validarFormulario);

//===== validar el formulario =====
function validarFormulario(e) {
    e.preventDefault();

    const datos = {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value,
        tema: tema.value,
    };

    const vacios = !Object.values(datos).every((campo) => campo !== "");

    if (vacios) {
        formulario.classList.add("error");
        setTimeout(() => {
            formulario.classList.remove("error");
        }, 3000);
    } else {
        enviarFormulario();
    }
}
