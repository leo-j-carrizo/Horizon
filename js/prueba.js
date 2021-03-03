let botonCompra = $(".price").next();

let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json");

let tarjeta = $(".card");

let htmlDinamico = $("#dinamico");

botonCompra.click((e)=>{
e.preventDefault()

});


tarjeta.click(
    function(){
        let dataId = $(this).data("id")
        for(var i = 0; dataId < baseProductos.responseJSON.length;i++){
            if(baseProductos.responseJSON[i].id == dataId){
                let jsonProducto = baseProductos.responseJSON[i]
                window.location.href = "./secciones/detalles.html";
                htmlDinamico.append(
                    `<section class="product-detail">
                    <!-- imagen -->
                    <div class="img-container">
                        <img src="${jsonProducto.assets}" alt="${jsonProducto.nombre}">
                    </div>
                    <!-- resto info -->
                    <div class="info-container">
                        <h3>${jsonProducto.nombre}</h3>
                        <div class="all-info">
                            <div>
                                <h4>${jsonProducto.marca}</h4>
                            </div>
                            <div>
                                <h4>Precio: $${jsonProducto.precio}</h4>
                            </div>
                            <div>
                                <a href="">Comprar ahora</a>
                            </div>
                        </div>
                    </div>
                    </section>
                    
                    <section class="description">
                        <h3>Acerca de: ${jsonProducto.nombre}</h3>
                        <p>${jsonProducto.descripcion}</p>
                    </section>
                    
                    <section>
                    </section>`
                )
                break
            }
        }   
    })


    