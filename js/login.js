let usuario = document.getElementById("user");
let contraseña = document.getElementById("pswrd");
let submit = document.querySelector('input[type="submit"]')

function verificarPerfil (){
    if(usuario.value == localStorage.getItem('usuario') || localStorage.getItem('email') && contraseña.value == localStorage.getItem('contraseña')){
    alert("Se ha iniciado sesion con exito!")
    }
    else{
        alert("Usuario y/o contraseña invalidos!")
    }
}

submit.addEventListener("click", verificarPerfil)