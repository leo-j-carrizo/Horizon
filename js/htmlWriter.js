let htmlDinamico = $("#dinamico");

let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json");

function recuperarData(){
    let dataId = localStorage.getItem('id-producto');
    for(var i = 0; dataId < 5;i++){
        if(baseProductos.responseJSON[i].id == dataId){
            alert("dow")
            let jsonProducto = baseProductos.responseJSON[i]
            htmlDinamico.append(`<p>${jsonProducto.nombre}</p>`)
            break
        }
    }   
}


 recuperarData()