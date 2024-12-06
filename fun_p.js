document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const mensajeInput = document.getElementById("mensaje");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!nombreInput.value.trim() || !correoInput.value.trim() || !mensajeInput.value.trim()) {
            alert("Por favor, completa todos los campos antes de enviar el formulario.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoInput.value)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
        alert(`¡Gracias, ${nombreInput.value}! Hemos recibido tu mensaje y nos pondremos en contacto pronto.`);
        form.reset();
    });
});

const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑ Volver al Inicio";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 20px";
backToTopButton.style.backgroundColor = "#007BFF";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";

document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
