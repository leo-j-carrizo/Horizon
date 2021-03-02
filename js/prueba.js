let botonCompra = $(".price").next();

let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json");

let tarjeta = $(".card");

botonCompra.click((e)=>{
e.preventDefault()

})


tarjeta.click(
    function(){
        
        let nose = baseProductos.responseJSON[0].id
        for(var i = $(this).data("id"); i >= nose;nose++){
            if(nose = i){

                alert(baseProductos.responseJSON[i].nombre);
                break;
            }
            else{
                alert("no")
            }
        }
    }
)

