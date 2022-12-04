let baseUrl = "http://localhost:8080";
let usuarios = [];

function ObtenerUsuarios() {
    fetch(baseUrl + '/usuario/all').then(res => {
        res.json().then(json => {
            usuarios = json;
            ValidarUsuario();
        });
    });
}

function ValidarUsuario() {
    let Validar = document.getElementById("validar");

    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);

    var usuario = urlParams.get('usuario');
    var contrasena = urlParams.get('contrasena');
    var bandera = 0;

    if (usuario != null) {
        usuarios.forEach(elemento => {
            if (elemento.correo == usuario && elemento.contrasena == contrasena) {
                sessionStorage.setItem("id_usuario", elemento.idusuarios);
                sessionStorage.setItem("nombre", elemento.nombreUsuario);
                sessionStorage.setItem("login", 1);
                sessionStorage.setItem("tusuario", elemento.tipo_usuario);
                console.log("Usuario y contraseña validos");
                bandera = 1;
            } else if (bandera == 0) {
                Validar.innerHTML = `<p class="color">Usuario y contraseña incorrectos</p>`;
                console.log("Usuario y contraseña incorrectos");
            }
        });
    }

    var tusuario = sessionStorage.getItem("tusuario");

    if (bandera == 1 && tusuario == 0) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html"><img src="img/perfil.png" alt=""><p>${usuario}</p></a></li>
        <li class="info"><a href="../Pagina Contacto/Contact.html">Contacto</a></li>
        <li class="info"><a href="../Pagina SobreNosotros/AboutUs.html">Sobre Nosotros</a></li>
        <li class="info"><a href="../Pagina Menu/Menu.html">Menu</a></li>
        <li class="info"><a href="../Pagina Principal/Home.html">Inicio</a></li>
    </ul>`;
    window.location.href = "../Pagina Principal/Home.html";
    } else if (bandera == 1 && tusuario == 1) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html"><img src="img/perfil.png" alt=""><p>${sessionStorage.getItem("nombre")}</p></a></li>
        <li class="info"><a href="../Pagina NuevoPlatillo/NewFood.html">Creacion de platillos</a></li>
        <li class="info"><a href="../Pagina RevisionPlatillos/Revision.html">Revisiones</a></li>
         class="info"><a href="../Pagina Reportes/Platillos.html">Reportes</a></li>
    </ul>`;
    window.location.href = "../Pagina PrincipalAdmin/HomeAdmin.html";
    } else {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li><a href="../Pagina Contacto/Contact.html">Contacto</a></li>
        <li><a href="../Pagina SobreNosotros/AboutUs.html">Sobre Nosotros</a></li>
        <li><a href="../Pagina Menu/Menu.html">Menu</a></li>
        <li><a href="../Pagina Principal/Home.html">Inicio</a></li>
    </ul>`;
    }
}