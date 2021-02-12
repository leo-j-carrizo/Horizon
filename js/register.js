let usuario = document.getElementById("user");
let email = document.getElementById("email");
let contraseña = document.getElementById("pswrd");
let submit = document.querySelector('input[type="submit"]')

function crearUsuario(){
    localStorage.setItem('usuario',usuario.value);
    localStorage.getItem('usuario')
    localStorage.setItem('email',email.value);
    localStorage.getItem('email')
    localStorage.setItem ('contraseña', contraseña.value);
    localStorage.getItem('contraseña');
    alert("Usuario creado con exito!")
}
submit.addEventListener("click", crearUsuario)

