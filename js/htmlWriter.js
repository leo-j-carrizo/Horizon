let htmlDinamico = $("#dinamico");

let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json", function(){
    let dataId = localStorage.getItem('id-producto');
    for(var i = 0; dataId < baseProductos.responseJSON.length;i++){
        if(baseProductos.responseJSON[i].id == dataId){
            htmlDinamico.append(
                `<section class="product-detail">
                <!-- imagen -->
                <div class="img-container">
                    <img src="${baseProductos.responseJSON[i].assets}" alt="${baseProductos.responseJSON[i].nombre}">
                </div>
                <!-- resto info -->
                    <h3>${baseProductos.responseJSON[i].nombre}</h3>
                    <div class="all-info">
                        <div>
                            <h4>${baseProductos.responseJSON[i].marca}</h4>
                        </div>
                        <div>
                            <h4>Precio: $${baseProductos.responseJSON[i].precio}</h4>
                        </div>
                        <div>
                            <a href="">Comprar ahora</a>
                        </div>
                    </div>
                </div>
                </section>
                
                <section class="description">
                    <h3>Acerca de: ${baseProductos.responseJSON[i].nombre}</h3>
                    <p>${baseProductos.responseJSON[i].descripcion}</p>
                </section>
                
                <section>
                </section>`
            )
            break
                    
        }
    }
});


