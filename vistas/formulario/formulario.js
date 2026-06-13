const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = document.getElementById("edad").value
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre.length < 5) {
        alert("El nombre debe tener al menos 5 caracteres");
        event.preventDefault();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Ingrese un correo electrónico válido");
        event.preventDefault();
        return;
    }

    if (edad < 18 || edad > 60) {
        alert("La edad debe estar entre 18 y 60 años");
        event.preventDefault();
        return;
    }

    if (pais === "") {
        alert("Debe seleccionar un país");
        event.preventDefault();
        return;
    }

    if (!terminos) {
        alert("Debe aceptar los términos y condiciones");
        event.preventDefault();
        return;
    }

    alert("Usuario registrado correctamente");
    
});