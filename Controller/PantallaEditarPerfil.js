let baseUrl = "http://localhost:8080";
let usuarios = [];

//OBTENEMOS LAS CATEGORIAS
function ObtenerUsuario() {
    fetch(baseUrl + '/usuario/all').then(res => {
        res.json().then(json => {
            usuarios = json;
            ValidarLogin();
        });
    });
}

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
    CargarCampos();
    } else if (login == 1 && tusuario == 1) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html"><img src="img/perfil.png" alt=""><p>${sessionStorage.getItem("nombre")}</p></a></li>
        <li class="info"><a href="../Pagina NuevoPlatillo/NewFood.html">Creacion de platillos</a></li>
        <li class="info"><a href="../Pagina RevisionPlatillos/Revision.html">Revisiones</a></li>
        <li class="info"><a href="../Pagina Reportes/Platillos.html">Reportes</a></li>
    </ul>`;
    CargarCampos();
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

function CargarCampos() {
    let Perfil = document.getElementById("Perfil");
    var id_usuario = sessionStorage.getItem("id_usuario");

    usuarios.forEach(element => {
        if (element.idusuarios == id_usuario) {
            Perfil.innerHTML = `
                        <div class="user-details">
                <div class="input-box">
                    <span class="details">Nombre de usuario</span>
                    <input type="text" id="nombreUsuario" value="${element.nombreUsuario}" placeholder="Ingrese su nombre de usuario" required>
                </div>
                <div class="input-box">
                    <span class="details">Correo Electrónico</span>
                    <input type="email" id="correo" value="${element.correo}" placeholder="Ingrese su nombre de usuario" required>
                </div>
                <div class="input-box">
                    <span class="details">Número Telefónico</span>
                    <input type="text" id="telefono" value="${element.telefono}" placeholder="Ingrese su correo electrónico" required>
                </div>
                <div class="input-box">
                    <span class="details">Contraseña</span>
                    <input type="password" id="contrasena" value="${element.contrasena}" placeholder="Ingrese su contraseña" required>
                </div>
            </div>
            <div class="gender-details">
                <input type="radio" value="M" name="gender" id="dot-1">
                <input type="radio" value="F" name="gender" id="dot-2">
                <input type="radio" value="N" name="gender" id="dot-3">
                <span class="gender-title">Género</span>
                <div class="category">
                    <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Hombre</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Mujer</span>
                    </label>
                    <label for="dot-3">
                        <span class="dot thre"></span>
                        <span class="gender">Prefiero no decir</span>
                    </label>
                </div>
            </div>`;
        }
    });
}

function ActualizarPerfil() {
    var radios = document.getElementsByName('gender');
    var id_usuario = sessionStorage.getItem("id_usuario");
    sessionStorage.setItem("nombre", document.getElementById("nombreUsuario").value)
    let mensaje = document.getElementById("mensaje");
    var genero;
    for (var radio of radios) {
        if (radio.checked) {
            genero = radio.value;
        }
    }

    let data = {
        idusuarios: id_usuario,
        telefono: document.getElementById("telefono").value,
        nombreUsuario: document.getElementById("nombreUsuario").value,
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
        genero: genero,
    };

    fetch(baseUrl + "/usuarioupdate", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }

    }).then(res => {
        ObtenerUsuario();
        mensaje.innerHTML = "Campos actualizados con exito";
    });
}

function CerrarSesion() {
    sessionStorage.setItem("login", 0);
}