//Establece el id del producto seleccionado al presionar LA TARJETA en el localstorage, y redigira a la pagina que se encargara de comparar ese id en el json para llenar el template con la informacion del producto clickeado

tarjeta.click(
    function(){
        let dataId = $(this).data("id");
        localStorage.setItem('id-producto', dataId);
        window.location.href = "./secciones/detalles.html";
    }
);

//Al clickear en el boton comprar ahora luego de comprobar el localstorage (funcion comprobar)(se verifica si existre o no el array donde se almacenaran los productos a comprar) se obtiene el id de la tarjeta en la 
//que se ejecuta el evento.
//El for accede a los objetos del json hasta dar con el que posea el mismo id que el producto seleccionado, luego procede a comprobar si el id ya estaba previamente agregado, en caso de que no, se pushea el id al array
//y se almacena el nuevo array en localstorage, ademas se crea la estructura del html con la info sacada del json
botonCompra.click(
    function(e){
        e.preventDefault();
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

                //Esta parte se encarga de crear una key que indica cuanta cantidad el mismo producto se pedira (else), osea sus cantidades individuales, en caso de que no se alla seleccionado el producto previamente(if) se creara la key con un valor
                //default de 1
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
        //al clickear el boton de compra se mostrara un cartel en la esquina inferior izquierda que confirmara que el producto se agrego al carrito
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
        productosArray = [];
    }
    else{
        
        productosArray = JSON.parse(localStorage.getItem('productosAlmacenados'))
    }
} 





