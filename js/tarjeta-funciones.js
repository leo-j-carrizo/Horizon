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
        
        
        
        
        for(var i = 0; infoId < baseProductos.responseJSON.length;i++){
            if(baseProductos.responseJSON[i].id == infoId){
                if(productosArray.includes(infoId) == false){
                    productosArray.push(infoId)
                    localStorage.setItem('productosAlmacenados',JSON.stringify(productosArray));
                    contenedorCarrito.append(
                        `<div class="carritoMini_contenido_producto">
                        <div>
                        <img src="${baseProductos.responseJSON[i].assets}" onerror="this.src='${baseProductos.responseJSON[i].assets2}'" alt="${baseProductos.responseJSON[i].nombre}">
                        </div>
                        <p>${baseProductos.responseJSON[i].nombre}</p>
                        <p class="carritoMini_contenido_precio">$${baseProductos.responseJSON[i].precio}</p>
                        </div>`
                    )
                }

                if(localStorage.getItem(`infoProducto${baseProductos.responseJSON[i].id}`) == null){
                    let valoresDefault = 1
                    localStorage.setItem(`infoProducto${baseProductos.responseJSON[i].id}`,valoresDefault)
                }
                else{
                    let valoresDefault = localStorage.getItem(`infoProducto${baseProductos.responseJSON[i].id}`)
                    valoresDefault++
                    localStorage.setItem(`infoProducto${baseProductos.responseJSON[i].id}`,valoresDefault)
                }
                
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





