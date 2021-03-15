//variables
let almacenamiento = JSON.parse(localStorage.getItem('productosAlmacenados'));
let botonCompra = $(".price").next();
let tarjeta = $(".card");
let carritoMini = $("#carritoMini");
let alertaCarrito = $(".alerta_carrito");
let carritoIcon= $(".cartBx");
const contenedorCarrito = $(".carritoMini_contenido");
let vaciarCarrito = $(".vaciar-carrito")
//Json con informacion de los productos
let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json",function(){
    almacenamiento.forEach(arrayElements);
});



//Esta funcion lee los datos almacenados sobre que producto se agrego al carrito para que al recargar la pagina los productos sigan ahi
function arrayElements(element,index,array){
    for(var i = 0; element < baseProductos.responseJSON.length;i++){
        if(baseProductos.responseJSON[i].id == element){
            contenedorCarrito.append(
                `<div class="carritoMini_contenido_producto">
                    <div>
                    <img src="${baseProductos.responseJSON[i].assets}" alt="">
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



//Establece el id del producto seleccionado al presionar LA TARJETA en el localstorage, y redigira a la pagina que se encargara de comparar ese id en el json para llenar el template con la informacion del producto clickeado
//Evitar que la funcion llegue al boton de compra para usarlo luego
tarjeta.click(
    function(){
        let dataId = $(this).data("id");
        localStorage.setItem('id-producto', dataId);
        window.location.href = "./secciones/detalles.html";
    }
);

//Al clickear en el boton comprar ahora luego de comprobar el local storage (funcion comprobar) se obtiene el id de la tarjeta en la que se ejecuta el evento, se lo incluye en el array de productos y se sobreescribe
//el localstorage con el nuevo id en el array para usarlo en el futuro. Ademas, la funcion compara el id del producto con los id de los productos en el json hasta encontrar el que coincida, una ves encontrado se
//crea el item en el carrito con los datos proporcionados por el json
botonCompra.click(
    function(e){
        e.preventDefault()
        e.stopPropagation();
        comprobar();
        
        let infoId = this.parentElement.parentElement.dataset.id
        console.log(productosArray)
        productosArray.push(infoId)
        localStorage.setItem('productosAlmacenados',JSON.stringify(productosArray));
        
        console.log(productosArray)
        for(var i = 0; infoId < baseProductos.responseJSON.length;i++){
            if(baseProductos.responseJSON[i].id == infoId){
                contenedorCarrito.append(
                    `<div class="carritoMini_contenido_producto">
                        <div>
                        <img src="${baseProductos.responseJSON[i].assets}" alt="">
                        </div>
                        <p>${baseProductos.responseJSON[i].nombre}</p>
                        <p class="carritoMini_contenido_precio">$${baseProductos.responseJSON[i].precio}</p>
                    </div>`
                )
                break         
            }
        }
        alertaCarrito.css("visibility","visible")
        setTimeout(()=>{
            alertaCarrito.css("visibility","hidden")
        },3000)
    }
);

//Comprueba si hay informacion existente de los productos que se deberian agregar al carrito, en caso de que no la halla creara la variable donde se almacenara los productos a replicar en el carrito
//En caso de que ya exista informacion (porque se esta recargando la pagina o se esta volviendo a visitar y no se borro el carrito) la funcion recuperara la informacion ya almacenada
function comprobar(){
    if(localStorage.getItem('productosAlmacenados') == null){
        console.log("no hay array")
        productosArray = [];
        
        
    }
    else{
        console.log("si hay array")
        productosArray = JSON.parse(localStorage.getItem('productosAlmacenados'))
    }
} 

vaciarCarrito.click(
    ()=>{
        localStorage.removeItem('productosAlmacenados');
        contenedorCarrito.html("");
    }
)



