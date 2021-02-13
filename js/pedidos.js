const carro = new carrito();
const carritoContenedor = document.getElementById("contenedor-prod")
const buyButton = document.querySelector(".card_description a")

function cargarEvento(){
    buyButton.addEventListener("click", (e)=>{carro.comprarProducto(e)})
}

cargarEvento();