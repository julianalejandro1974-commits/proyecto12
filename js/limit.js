
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");
const zonaTexto = document.querySelector(".zona-texto");

const limite = 10;

mensaje.addEventListener("input", function () {
    const cantidad = mensaje.value.length;

    contador.textContent = cantidad + " / " + limite;

    if (cantidad === limite) {
        zonaTexto.classList.add("limite");
    } else {
        zonaTexto.classList.remove("limite");
    }
});
