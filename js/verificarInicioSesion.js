//Al cargar verifica que el estado de la key sesion-status sea igual a true(esto se setea una ves iniciada sesion en su respectiva seccion), en caso de serlo modificara la parte del header
//para mostar el mail registado

function verificarSesion(){
    let sesionBoolean = localStorage.getItem('sesion-status');
    let perfilInfo = localStorage.getItem('email');
    if(sesionBoolean == "true"){
        infoSesionCaja.html(`
        <div class="sesion-img">
          <img src="./img/avatar.png" onerror="this.src='../img/avatar.png'" alt="">
        </div>
        <div class="account">
            <p>${perfilInfo}</p>
            <a href="#">Cerrar sesion</a>
        </div>`);

        //Al presionar el boton cerrar sesion la key del localstarge cambia a false para que al reiniciar la pagina se no se modifique el html, y vuelve a sobreescribir la seccion de incio de sesion con los
        //links correspondientes
        let botonCerrarSesion = $(".account").last();

        botonCerrarSesion.click(
            function(e){
                e.preventDefault()
                localStorage.setItem('sesion-status',false)
                infoSesionCaja.html('<a href="./secciones/login.html">Iniciar Sesion</a><a href="./secciones/register.html">Registrarse</a>')
            }
        );
    };
};

verificarSesion();