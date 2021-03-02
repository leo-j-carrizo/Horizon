let botonCompra = $(".price").next();

let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json");

let tarjeta = $(".card");

botonCompra.click((e)=>{
e.preventDefault()

});


tarjeta.click(
    function(){

        let dataId = $(this).data("id")
        
        
        for(var i = 0; dataId >= baseProductos.responseJSON[i].id;i++){
            if(baseProductos.responseJSON[i].id == dataId){
                alert(baseProductos.responseJSON[i].nombre,)
                break
            }
        }   
    })


    