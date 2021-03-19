let htmlDinamico = $("#dinamico");
//De la misma manera que el carrito, la funcion recupera el id del localstorage y recorre el json hasta encontrar el objeto que posea un id coincidente y crea el template con los datos del mismo
let baseProductosDetalles = $.get("https://joako20.github.io/Horizon/json/productos.json", function(){
    let dataId = localStorage.getItem('id-producto');
    for(var i = 0; dataId < baseProductosDetalles.responseJSON.length;i++){
        if(baseProductosDetalles.responseJSON[i].id == dataId){
            htmlDinamico.append(
                `<section class="product-detail">
                <!-- imagen -->
                <div class="img-container">
                    <img src="${baseProductosDetalles.responseJSON[i].assets}" alt="${baseProductosDetalles.responseJSON[i].nombre}">
                </div>
                <!-- resto info -->
                    <h3>${baseProductosDetalles.responseJSON[i].nombre}</h3>
                    <div class="all-info">
                        <div>
                            <h4>${baseProductos.responseJSON[i].marca}</h4>
                        </div>
                        <div>
                            <h4>Precio: $${baseProductosDetalles.responseJSON[i].precio}</h4>
                        </div>
                        <div>
                            <a href="">Comprar ahora</a>
                        </div>
                    </div>
                </div>
                </section>
                
                <section class="description-detalles">
                    <h3>Acerca de: ${baseProductosDetalles.responseJSON[i].nombre}</h3>
                    <p>${baseProductosDetalles.responseJSON[i].descripcion}</p>
                </section>
                
                <section>
                </section>`
            )
            break
                    
        }
    }
});


