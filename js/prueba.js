let botonCompra = $(".price").next();

let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json");

let tarjeta = $(".card");

botonCompra.click((e)=>{
e.preventDefault()

})


tarjeta.click(
    function(){

        let dataId = $(this).data("id")
        let indice = 1
        let accesoBase = baseProductos.responseJSON[indice]

        
        for(var i = $(this).data("id"); i == accesoBase.id;indice++){
            if(accesoBase.id == i){

                alert(accesoBase.nombre);
                break;
            }
            else{
                alert("no")
            }
        }

        

        // if(dataId == accesoBase){
        //     alert(baseProductos.responseJSON[indice].nombre)
        // }
        // else{
            
        

        
    }
)

