let baseProductos = $.get("https://github.com/leo-j-carrizo/Horizon.git",function(){
    if(localStorage.getItem('productosAlmacenados') == null){}
    else{
    //recorre el array devolviendo como parametro en cada vuelta los elementos del mismo
    almacenamiento.forEach(arrayElements);

    
    let botonSuma = $(".botonSuma")
    let botonResta = $(".botonResta")
    
    let cantidadProductos = $(".cantidad-productos")
    //Cuando la funcion se llame almacena en forma de string el subotal de todos los productos que se encuentren en el carrito separandolos, convirtiendolos en un array y parseandolos
    //para poder sumarlos, el resultado es la suma de todos los subtotales, esto se almacena en el localstorage y se introduce en el html 
    function totalWriter(){
    let subtotalText = $(".subtotal-col").text()
    let subtotalArray = subtotalText.split("$")
    delete subtotalArray[0]
    subtotalArray = subtotalArray.splice(1)
    let totalParse = subtotalArray.reduce(function(valorAnterior, valorActual, indice, vector){
        return (parseFloat(valorAnterior) + parseFloat(valorActual)).toFixed(2);
    });
    localStorage.setItem('totalProductosSumados',totalParse);
    totalMonto.html(`Total: $${localStorage.getItem('totalProductosSumados')}`);
    }
    
    totalWriter()

    //Al presionar el boton suma se incrementa en 1 el valor del input number, se multiplica por el precio del producto, se almacena en el localstorage para no perderlo al recargar la pagina
    //y se vuelve a llamar a la funcion totalWriter para actualizar el total
    botonSuma.click(
        function(){
            
            let inp = $(this).prev()
            let inpVal = $(this).prev().val()
            inpVal++
            inp.attr("value",inpVal)
            localStorage.setItem(`infoProducto${$(this).parent().parent().data("id")}`,inpVal)
            let subtotal = $(this).parent().next()
            let subPrecio = $(this).parent().prev().html()
            subPrecio = subPrecio.replace('$','')
            let multi = (inpVal*subPrecio).toFixed(2)
            subtotal.html(`$${multi}`)
            totalWriter()
        }
    )
    //Aplica la misma logica y funcionalidad que el boton suma pero en ves de incrementar, reduce el valor del input en 1, y si se intenta reducir a 0 automaticamente se sumara 1 para que
    //no se pueda reducir hasta o pot debajo de ese numero
    botonResta.click(
        function(){
            
            let inpRest = $(this).next()
            let inpValRest = $(this).next().val()
            inpValRest--
            
            inpRest.attr("value",inpValRest)
            localStorage.setItem(`infoProducto${$(this).parent().parent().data("id")}`,inpValRest)
            if(inpValRest == 0){
                inpValRest++
                inpRest.attr("value",inpValRest)
            }
            let subtotal = $(this).parent().next()
            
            let subPrecio = $(this).parent().prev().html()
            
            subPrecio = subPrecio.replace('$','')
            
            let multi = (inpValRest*subPrecio).toFixed(2)
            
            subtotal.html(`$${multi}`)

            totalWriter()
        }
    )

    //Adquiere el data-id del producto padre del boton, elimina el html del producto, recupera el array de productos almacenados, lo actualiza quitando del array el id del producto borrado,
    //sobreescribe el localstorage con los nuevos valores,elimina la kay con la cantidad individual del producto y actualiza el total resultante de los productos que quedaron
    botonBorrar = $(".delet-button")
    botonBorrar.click(
        function(){
        
        let buttonParent = $(this).parent().parent()
        let idPadre = buttonParent.data('id')
        
        buttonParent.remove()
        let arry = JSON.parse(localStorage.getItem('productosAlmacenados'))
        
        let filteredAry = arry.filter(e => e !== `${idPadre}`)

        localStorage.setItem('productosAlmacenados',JSON.stringify(filteredAry))

        localStorage.removeItem(`infoProducto${idPadre}`)

        totalWriter()
        }
    )
    
    //Al ingresar manualmente la cantidad individual en el input number sobreescribe el localstorage y vuelve a multiplicar el precio por la cantidad para que se actualice en cada modificacion
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
            
            let multiInpt = (inptVal*subPrecioInp).toFixed(2)
            
            subtotalInp.innerHTML=`$${multiInpt}`

            totalWriter()

        }
    )


}
});

//Esta funcion utiliza como paramentros el element devuelto por el foreach mas arriba, que son los ids almacenados en el array que el forEach esta recorriendo
function arrayElements(element){
    //La logica es la misma que al agregar los id al localstorage(file tarjeta-funciones.js) o al crear el template de los productos(file htmlWriter.js) se recorre el json hasta encontrar la informacion coincidente
    //y se genera el emplate del producto
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
                <td class="subtotal-col">$${(baseProductos.responseJSON[i].precio*localStorage.getItem(`infoProducto${baseProductos.responseJSON[i].id}`)).toFixed(2)}</td>
                <td class="delet-col">
                    <button class="delet-button">X</button>
                </td>
            </tr>`
            );
            
            
            break         
        };
        
    };
    
};

//Elimina la informacion del localstorage de los productos almacenados y de la cantidad individual de cada producto junto con el total almacenado
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
          localStorage.removeItem('totalProductosSumados');
          totalMonto.html('Total: $0')
    }

    

)



