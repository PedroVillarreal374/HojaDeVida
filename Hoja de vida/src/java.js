
document.getElementById("welcome-btn").addEventListener("click", function () {
    alert("¡Bienvenido a mi página personal!");
});

document.getElementById("submit-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
    } else {
        alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    }
});
