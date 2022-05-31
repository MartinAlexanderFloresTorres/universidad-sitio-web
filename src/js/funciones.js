import { formulario } from "./variables.js";

export function enviarFormulario() {
    const btnEnviar = document.querySelector(".boton-secundario");

    const correcto = document.createElement("P");
    correcto.classList.add("correcto");
    correcto.textContent = "Datos enviados exitoxamente";

    btnEnviar.textContent = "Enviando...";
    btnEnviar.classList.add("correcto");

    setTimeout(() => {
        btnEnviar.textContent = "Enviar";
        btnEnviar.classList.remove("correcto");

        const existe = document.querySelector(".correcto");
        if (!existe) {
            formulario.appendChild(correcto);
            formulario.reset();
            setTimeout(() => {
                correcto.remove();
            }, 3000);
        }
    }, 3000);
}
