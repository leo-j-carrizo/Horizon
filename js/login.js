let usuario = document.getElementById("user");
let contraseña = document.getElementById("pswrd");
let submit = document.querySelector('input[type="submit"]')

submit.addEventListener("click", 
    function (e){
    //Si el usuario ingresa el nombre de usuario o email(se puede usar uno u otro) y contraseña coincidentes con los almacenados se mostrara una alerta que indique un incio de sesion
    //correcto
    if(usuario.value == localStorage.getItem('usuario') || localStorage.getItem('email') && contraseña.value == localStorage.getItem('contraseña')){
        e.preventDefault()
        divAlerta.css("visibility","visible")
        localStorage.setItem('sesion-status',true)
            setTimeout(()=>{
                divAlerta.css("visibility","hidden")
                window.location.href = "../index.html";
            },3000)

            
        
    }
    //En caso contrase se mostrara una alerta que indique que lo ingresado no es correcto y no se hara nada
    else{
        e.preventDefault()
        divAlertaIncorrecto.css("visibility","visible")
            setTimeout(()=>{
                divAlertaIncorrecto.css("visibility","hidden")
            },2000)
    }
}
)


