let usuario = document.getElementById("user");
let email = document.getElementById("email");
let contraseña = document.getElementById("pswrd");



let confirmButton = $(".confirmButton")

//Se almacenan en el localstorage los datos de sesion que ingresa el usuario(por ahora solo es posible crear un usuario a la ves)
//Se muestra una alerta que avisa que se creo el usuario y redirecciona a la pagina principal
confirmButton.click(
    function(e){
        e.preventDefault()
        localStorage.setItem('usuario',usuario.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem ('contraseña', contraseña.value);
        divAlerta.css("visibility","visible")
        setTimeout(()=>{
            divAlerta.css("visibility","hidden")
            window.location.href = "../index.html";
            },2000)
    }
)