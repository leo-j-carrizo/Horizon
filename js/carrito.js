let baseProductos = $.get("https://joako20.github.io/Horizon/json/productos.json",function(){
    if(localStorage.getItem('productosAlmacenados') == null){}
    else{
    almacenamiento.forEach(arrayElements);
    let botonSuma = $(".botonSuma")
    let botonResta = $(".botonResta")
    let cantidadProductos = $(".cantidad-productos")
    let total = $(".total-monto")
    botonSuma.click(
        function(){
            //Multiplica el precio del producto por la cantidad total y actualiza el subtotal
            let inp = $(this).prev()
            let inpVal = $(this).prev().val()
            inpVal++
            inp.attr("value",inpVal)
            localStorage.setItem(`infoProducto${$(this).parent().parent().data("id")}`,inpVal)
            let subtotal = $(this).parent().next()
            let subPrecio = $(this).parent().prev().html()
            subPrecio = subPrecio.replace('$','')
            let multi = inpVal*subPrecio
            subtotal.html(`$${multi}`)
            totalMontoArray.push(multi)
            console.log(totalMontoArray)
            localStorage.setItem('totalMonto',JSON.stringify(totalMontoArray))

            
            
        }
    )
    
    botonResta.click(
        function(){
            
            let inpRest = $(this).next()
            let inpValRest = $(this).next().val()
            inpValRest--
            console.log(inpValRest)
            inpRest.attr("value",inpValRest)
            localStorage.setItem(`infoProducto${$(this).parent().parent().data("id")}`,inpValRest)
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
    
    //Al ingresar manualmente la cantidad sobreescribe el localstorage y vuelve a multiplicar el precio por la cantidad
    cantidadProductos.on('input',
        (e)=>{
            let generalValue = e.target.value
            
            e.target.setAttribute("value",generalValue)
            
            localStorage.setItem(`infoProducto${e.target.parentElement.parentElement.dataset.id}`,generalValue);


            let idValue = e.target.parentElement.parentElement.dataset.id
            
            let inptVal = localStorage.getItem(`infoProducto${idValue}`)
            
            let subtotalInp = e.target.parentElement.nextElementSibling
            
            let subPrecioInp = e.target.parentElement.previousElementSibling.textContent
            
            subPrecioInp = subPrecioInp.replace('$','')
            
            let multiInpt = inptVal*subPrecioInp
            
            subtotalInp.innerHTML=`$${multiInpt}`

        }
    )


}
});

//Esta funcion lee los datos almacenados sobre que producto se agrego al carrito para que al recargar la pagina los productos sigan ahi
function arrayElements(element){
    
    for(var i = 0; element < baseProductos.responseJSON.length;i++){
        if(baseProductos.responseJSON[i].id == element){
            $(".no-product").remove();
            contenedorCarritoMain.append(
                `<tr class="element-product" data-id="${baseProductos.responseJSON[i].id}">
                <td class="img-col">
                    <div><img src="${baseProductos.responseJSON[i].assets}" alt=""></div>
                </td>
                <td class="name-col">${baseProductos.responseJSON[i].nombre}</td>
                <td class="price-col">$${baseProductos.responseJSON[i].precio}</td>
                <td class="amount-col">
                    <button class="botonResta">-</button>
                        <input class="cantidad-productos" type="number" min="1" value="${localStorage.getItem(`infoProducto${baseProductos.responseJSON[i].id}`)}">
                    <button class="botonSuma">+</button>
                </td>
                <td class="subtotal-col">
                    $${baseProductos.responseJSON[i].precio*localStorage.getItem(`infoProducto${baseProductos.responseJSON[i].id}`)}
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

//Elimina la informacion del localstorage de los productos almacenados y de la cantidad individual de cada producto
vaciarCarrito.click(
    ()=>{
        if(localStorage.getItem('productosAlmacenados') == null){}
        else{
        localStorage.removeItem('productosAlmacenados');
        $(".element-product").remove();
        contenedorCarritoMain.append(
            `<tr class="no-product"><td><h2>No hay productos en el carrito</h2></td></tr>`
        )}
        
        for (key in localStorage) {
            if (key.substring(0,12) == 'infoProducto') {
              localStorage.removeItem(key);
            }
          }
    }

)



