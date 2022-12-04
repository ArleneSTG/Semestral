function ValidarLogin() {
    var login = sessionStorage.getItem("login");
    var usuario = sessionStorage.getItem("nombre");
    var tusuario = sessionStorage.getItem("tusuario");

    if (login == 1 && tusuario == 0) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html"><img src="img/perfil.png" alt=""><p>${usuario}</p></a></li>
        <li class="info"><a href="../Pagina Contacto/Contact.html">Contacto</a></li>
        <li class="info"><a href="../Pagina SobreNosotros/AboutUs.html">Sobre Nosotros</a></li>
        <li class="info"><a href="../Pagina Menu/Menu.html">Menu</a></li>
        <li class="info"><a href="../Pagina Principal/Home.html">Inicio</a></li>
    </ul>`;
    } else if (login == 1 && tusuario == 1) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html"><img src="img/perfil.png" alt=""><p>${sessionStorage.getItem("nombre")}</p></a></li>
        <li class="info"><a href="../Pagina NuevoPlatillo/NewFood.html">Creacion de platillos</a></li>
        <li class="info"><a href="../Pagina RevisionPlatillos/Revision.html">Revisiones</a></li>
        <li class="info"><a href="../Pagina Reportes/Platillos.html">Reportes</a></li>
    </ul>`;
    } else {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li><a href="../Pagina InicioSesion/LogIn.html">Iniciar sesion</a></li>
        <li><a href="../Pagina Contacto/Contact.html">Contacto</a></li>
        <li><a href="../Pagina SobreNosotros/AboutUs.html">Sobre Nosotros</a></li>
        <li><a href="../Pagina Menu/Menu.html">Menu</a></li>
        <li><a href="../Pagina Principal/Home.html">Inicio</a></li>
    </ul>`;
    }
}

function EnviarMensaje() {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Mensaje enviado con exito";

    let data = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    };

    fetch(baseUrl + "/enviar", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }

    }).then(res => {
        mensaje.innerHTML = "Mensaje enviado con exito";
    });
}