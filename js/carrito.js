class carrito{
    //añadir producto
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('clase-prueba')){
            const producto = e.target.parentElement.parentElement;
            // this.leerDatosProducto(producto)
            console.log(producto)
        }

    }
}

