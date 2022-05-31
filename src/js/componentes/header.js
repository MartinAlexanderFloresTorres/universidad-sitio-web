//===== variables =====
const headerContenedor = document.querySelector("header");

//===== eventos =====
function eventos() {
    const navegacion = document.querySelector("#navegacion-contenido");

    window.onload = function () {
        headerScroll();
    };

    document.addEventListener("scroll", () => {
        headerScroll();
    });

    headerContenedor.addEventListener("click", (e) => {
        if (e.target.id === "menu-toggle") {
            navegacion.classList.add("active");
        }
        if (e.target.id === "close-toggle") {
            navegacion.classList.remove("active");
        }
        if (e.target.classList.contains("navegacion__link")) {
            navegacion.classList.remove("active");
        }
    });
}

//===== funciones =====
function headerScroll() {
    let valorScroll;
    const navegacion = document.querySelector(".navegacion");
    valorScroll = window.scrollY;
    if (valorScroll > 90) {
        if (navegacion) {
            navegacion.classList.add("scroll");
        }
    } else {
        if (navegacion) {
            navegacion.classList.remove("scroll");
        }
    }
}
function header() {
    const navegacionNav = document.createElement("NAV");
    navegacionNav.classList.add("navegacion");

    const navegacionDiv = document.createElement("DIV");
    navegacionDiv.classList.add("navegacion__contenedor", "max-width");

    const logoDiv = document.createElement("DIV");
    logoDiv.classList.add("navegacion_logo");

    const navegacionMenu = document.createElement("SPAN");
    navegacionMenu.classList.add("navegacion__menu");
    navegacionMenu.id = "menu-toggle";

    const navegacionMenuI = document.createElement("I");
    navegacionMenuI.className = "bx bx-menu i";

    const logoA = document.createElement("A");
    logoA.href = "/";
    logoA.title = "Inicio";

    const logoImg = document.createElement("IMG");
    logoImg.classList.add("navegacion__img");
    logoImg.alt = "Logo";
    logoImg.src = "../../src/img/logo.png";

    const navegacionUl = document.createElement("UL");
    navegacionUl.classList.add("navegacion__lista");
    navegacionUl.id = "navegacion-contenido";

    const navegacionLi1 = document.createElement("LI");
    navegacionLi1.classList.add("navegacion__item");

    const navegacionLi2 = document.createElement("LI");
    navegacionLi2.classList.add("navegacion__item");

    const navegacionLi3 = document.createElement("LI");
    navegacionLi3.classList.add("navegacion__item");

    const navegacionLi4 = document.createElement("LI");
    navegacionLi4.classList.add("navegacion__item");

    const navegacionLi5 = document.createElement("LI");
    navegacionLi5.classList.add("navegacion__item");

    const navegacionClose = document.createElement("SPAN");
    navegacionClose.classList.add("navegacion__close");

    const navegacionCloseI = document.createElement("I");
    navegacionCloseI.className = "bx bx-x i";
    navegacionClose.id = "close-toggle";

    const navegacionA1 = document.createElement("A");
    navegacionA1.classList.add("navegacion__link");
    navegacionA1.href = "/";
    navegacionA1.textContent = "Inicio";

    const navegacionA2 = document.createElement("A");
    navegacionA2.classList.add("navegacion__link");
    navegacionA2.href = "../../src/html/about.html";
    navegacionA2.textContent = "Nosotros";

    const navegacionA3 = document.createElement("A");
    navegacionA3.classList.add("navegacion__link");
    navegacionA3.href = "../../src/html/cursos.html";
    navegacionA3.textContent = "Cursos";

    const navegacionA4 = document.createElement("A");
    navegacionA4.classList.add("navegacion__link");
    navegacionA4.href = "../../src/html/blog.html";
    navegacionA4.textContent = "Blog";

    const navegacionA5 = document.createElement("A");
    navegacionA5.classList.add("navegacion__link");
    navegacionA5.href = "../../src/html/contacto.html";
    navegacionA5.textContent = "Contactenos";

    logoA.appendChild(logoImg);
    logoDiv.appendChild(logoA);

    navegacionMenu.appendChild(navegacionMenuI);

    navegacionClose.appendChild(navegacionCloseI);
    navegacionLi1.appendChild(navegacionA1);
    navegacionLi2.appendChild(navegacionA2);
    navegacionLi3.appendChild(navegacionA3);
    navegacionLi4.appendChild(navegacionA4);
    navegacionLi5.appendChild(navegacionA5);

    navegacionUl.appendChild(navegacionClose);
    navegacionUl.appendChild(navegacionLi1);
    navegacionUl.appendChild(navegacionLi2);
    navegacionUl.appendChild(navegacionLi3);
    navegacionUl.appendChild(navegacionLi4);
    navegacionUl.appendChild(navegacionLi5);

    navegacionDiv.appendChild(logoDiv);
    navegacionDiv.appendChild(navegacionUl);
    navegacionDiv.appendChild(navegacionMenu);
    navegacionNav.appendChild(navegacionDiv);

    headerContenedor.insertBefore(
        navegacionNav,
        headerContenedor.childNodes[0]
    );
    eventos();
}

export default header;
