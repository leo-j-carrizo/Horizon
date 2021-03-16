let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json",function(){
    if(localStorage.getItem('productosAlmacenados') == null){}
    else{
    almacenamiento.forEach(arrayElements);
    let botonSuma = $(".botonSuma")
    let botonResta = $(".botonResta")
    
    botonSuma.click(
        function(){
            
            let inp = $(this).prev()
            let inpVal = $(this).prev().val()
            inpVal++
            inp.attr("value",inpVal)
            let subtotal = $(this).parent().next()
            let subPrecio = $(this).parent().prev().html()
            subPrecio = subPrecio.replace('$','')
            let multi = inpVal*subPrecio
            subtotal.html(`$${multi}`)
        }
    )
    
    botonResta.click(
        function(){
            
            let inpRest = $(this).next()
            let inpValRest = $(this).next().val()
            inpValRest--
            console.log(inpValRest)
            inpRest.attr("value",inpValRest)
            if(inpValRest == 0){
                inpValRest++
                inpRest.attr("value",inpValRest)
            }
            let subtotal = $(this).parent().next()
            console.log(subtotal)
            let subPrecio = $(this).parent().prev().html()
            console.log(subPrecio)
            subPrecio = subPrecio.replace('$','')
            console.log(subPrecio)
            let multi = inpValRest*subPrecio
            console.log(multi)
            subtotal.html(`$${multi}`)
        }
    )
}
});

//Esta funcion lee los datos almacenados sobre que producto se agrego al carrito para que al recargar la pagina los productos sigan ahi
function arrayElements(element,index,array){
    
    for(var i = 0; element < baseProductos.responseJSON.length;i++){
        if(baseProductos.responseJSON[i].id == element){
            contenedorCarritoMain.append(
                `<tr>
                <td class="img-col">
                    <div><img src="${baseProductos.responseJSON[i].assets}" alt="ps5"></div>
                </td>
                <td class="name-col">${baseProductos.responseJSON[i].nombre}</td>
                <td class="price-col">$${baseProductos.responseJSON[i].precio}</td>
                <td class="amount-col">
                    <button class="botonResta">-</button>
                        <input type="number" min="1" value="1">
                    <button class="botonSuma">+</button>
                </td>
                <td class="subtotal-col">
                    $${baseProductos.responseJSON[i].precio}
                </td>
                <td class="delet-col">
                    <button>X</button>
                </td>
            </tr>`
            );
            
            break         
        };
        
    };
    
};

