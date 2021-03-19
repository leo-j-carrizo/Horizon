//variables
let almacenamiento = JSON.parse(localStorage.getItem('productosAlmacenados'));
let botonCompra = $(".price").next();
let tarjeta = $(".card");
let carritoMini = $("#carritoMini");
let alertaCarrito = $(".alerta_carrito");
let carritoIcon= $(".cartBx");
const contenedorCarrito = $(".carritoMini_contenido");
let vaciarCarrito = $(".vaciar-carrito");
const contenedorCarritoMain = $(".product-display");
let totalMonto = $(".total-monto");
let divAlerta = $(".correcto");
let divAlertaIncorrecto = $(".incorrecto");
let infoSesionCaja = $(".logBx");
