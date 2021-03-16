//Json con informacion de los productos
let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json",function(){
    if(localStorage.getItem('productosAlmacenados') == null){}
    else{
    almacenamiento.forEach(arrayElements);}
});

//Esta funcion lee los datos almacenados sobre que producto se agrego al carrito para que al recargar la pagina los productos sigan ahi
function arrayElements(element,index,array){
    
    for(var i = 0; element < baseProductos.responseJSON.length;i++){
        if(baseProductos.responseJSON[i].id == element){
            contenedorCarrito.append(
                `<div class="carritoMini_contenido_producto">
                    <div>
                    <img src="${baseProductos.responseJSON[i].assets}" onerror="this.src='${baseProductos.responseJSON[i].assets2}' alt="">
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

//Elimina la informacion del localstorage de los productos almacenados
vaciarCarrito.click(
    ()=>{
        localStorage.removeItem('productosAlmacenados');
        contenedorCarrito.html("");
    }
)