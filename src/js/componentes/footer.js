function footer() {
    const footer = document.querySelector("footer");
    footer.classList.add("footer");

    const footerDiv = document.createElement("DIV");
    footerDiv.classList.add("max-width");

    const footerIconos = document.createElement("DIV");
    footerIconos.classList.add("footer__iconos");

    const footerA1 = document.createElement("A");
    footerA1.classList.add("footer__link");
    footerA1.href = "https://www.instagram.com/martin_flores_28/";
    footerA1.target = "_blank";
    footerA1.title = "instagram";

    const footerA2 = document.createElement("A");
    footerA2.classList.add("footer__link");
    footerA2.href = "#";
    footerA2.target = "_blank";
    footerA2.title = "twitter";

    const footerA3 = document.createElement("A");
    footerA3.classList.add("footer__link");
    footerA3.href = "https://web.facebook.com/garena.flores.9";
    footerA3.target = "_blank";
    footerA3.title = "facebook";

    const footerA4 = document.createElement("A");
    footerA4.classList.add("footer__link");
    footerA4.href = "#";
    footerA4.title = "whatsapp";

    const footerA5 = document.createElement("A");
    footerA5.classList.add("footer__link");
    footerA5.href = "#";
    footerA5.target = "_blank";
    footerA5.title = "linkedin";

    const footerI1 = document.createElement("I");
    footerI1.className = "bx bxl-instagram";

    const footerI2 = document.createElement("I");
    footerI2.className = "bx bxl-twitter";

    const footerI3 = document.createElement("I");
    footerI3.className = "bx bxl-facebook-square";

    const footerI4 = document.createElement("I");
    footerI4.className = "bx bxl-whatsapp";

    const footerI5 = document.createElement("I");
    footerI5.className = "bx bxl-linkedin";

    const footerP = document.createElement("P");
    footerP.classList.add("footer__texto");
    footerP.textContent = "ⓒ 2022 Copyright | White Code";

    footerA1.appendChild(footerI1);
    footerA2.appendChild(footerI2);
    footerA3.appendChild(footerI3);
    footerA4.appendChild(footerI4);
    footerA5.appendChild(footerI5);

    footerIconos.appendChild(footerA1);
    footerIconos.appendChild(footerA2);
    footerIconos.appendChild(footerA3);
    footerIconos.appendChild(footerA4);
    footerIconos.appendChild(footerA5);

    footerDiv.appendChild(footerIconos);
    footerDiv.appendChild(footerP);

    footer.appendChild(footerDiv);
}

export default footer;
