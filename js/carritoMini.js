//Json con informacion de los productos
let baseProductos = $.get("https://github.com/leo-j-carrizo/Horizon.git",function(){
    //Si no se a agregado un producto a la key que almacena los ids no se hace nada
    if(localStorage.getItem('productosAlmacenados') == null){}
    //En caso de que se halla presionado comprar en algun producto y se halla almacenado su id se ejecutara la funcion
    else{
    almacenamiento.forEach(arrayElements);}
});

//Esta funcion utiliza como paramentros el element devuelto por el foreach mas arriba, que son los ids almacenados en el array que el forEach esta recorriendo
function arrayElements(element){
    //La logica es la misma que al agregar los id al localstorage(file tarjeta-funciones.js) o al crear el template de los productos(file htmlWriter.js) se recorre el json hasta encontrar la informacion coincidente
    //y se genera el emplate del producto
    for(var i = 0; element < baseProductos.responseJSON.length;i++){
        if(baseProductos.responseJSON[i].id == element){
            contenedorCarrito.append(
                `<div class="carritoMini_contenido_producto">
                    <div>
                    <img src="${baseProductos.responseJSON[i].assets}" onerror="this.src='${baseProductos.responseJSON[i].assets2}'" alt="${baseProductos.responseJSON[i].nombre}">
                    </div>
                    <p>${baseProductos.responseJSON[i].nombre}</p>
                    <p class="carritoMini_contenido_precio">$${baseProductos.responseJSON[i].precio}</p>
                </div>`
            );
            break         
        };
    };
};

//Crea hover de la vista previa del carrito pasando el mouse sobre el icono
$( "#carritoMini,.cartBx" ).hover(
    ()=>{
        carritoMini.css("visibility","visible");
    },
    ()=>{
        carritoMini.css("visibility","hidden");
    }
);

//Elimina la informacion del localstorage de los productos almacenados y de sus cantidades individuales
vaciarCarrito.click(
    ()=>{
        localStorage.removeItem('productosAlmacenados');
        contenedorCarrito.html("");
        for (key in localStorage) {
            if (key.substring(0,12) == 'infoProducto') {
              localStorage.removeItem(key);
            }
          }
          localStorage.removeItem('totalProductosSumados');
    }
)

//Al presionar el boton procesar compra redirecciona al carrito(solo funciona con live server)
botonProcesar.click(
    function(){
    
    }
)