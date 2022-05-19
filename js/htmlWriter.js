let htmlDinamico = $("#dinamico");
//De la misma manera que el carrito, la funcion recupera el id del localstorage y recorre el json hasta encontrar el objeto que posea un id coincidente y crea el template con los datos del mismo
let baseProductosDetalles = $.get("https://github.com/leo-j-carrizo/Horizon.git", function(){
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
                <div class="info-container">
                    <h3>${baseProductosDetalles.responseJSON[i].nombre}</h3>
                    <div class="all-info" data-id="${baseProductosDetalles.responseJSON[i].id}">
                        <div class="extra-texto">
                            <h4>${baseProductos.responseJSON[i].marca}</h4>
                            <p>Mas de 125k usuarios lo califican de <span>EXCELENTE</span></p>
                        </div>
                        <div class="extra-precio">
                            <h4>Precio: $${baseProductosDetalles.responseJSON[i].precio} USD</h4>
                        </div>
                        <div class="extra-boton">
                            
                            <a href="">Comprar ahora</a>
                        </div>
                    </div>
                </div>
                </section>
                
                <section class="description-detalles">
                    <h3>ACERCA DE: ${baseProductosDetalles.responseJSON[i].nombre}</h3>
                    <p>${baseProductosDetalles.responseJSON[i].descripcion}</p>
                </section>
                
                <section>
                </section>`
            )
            break
                    
        }
    }
});


