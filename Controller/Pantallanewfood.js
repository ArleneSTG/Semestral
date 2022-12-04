let baseUrl = "http://localhost:8080";
let comidas = [];
let mensajes = [];

function ObtenerComidas() {
    fetch(baseUrl + '/comidas/all').then(res => {
        res.json().then(json => {
            comidas = json;
        });
    });
}

function GuardarComida() {
    var radios = document.getElementsByName('categoria');
    let mensaje = document.getElementById("mensaje");
    var categoria;
    var id_categoria;
    for (var radio of radios) {
        if (radio.checked) {
            categoria = radio.value;
        }
    }


    let data = {
        nombreComida: document.getElementById("nombre").value,
        precioComida: document.getElementById("precio").value,
        descriIngredient: document.getElementById("descripcionI").value,
        descriComida: document.getElementById("descripcionC").value,
        categoria_id: categoria,
        fotoUrl: document.getElementById("fotoUrl").value
    };

    fetch(baseUrl + "/anadircomida", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }

    }).then(res => {
        ObtenerComidas();
        window.location.href = "../Pagina RevisionPlatillos/Revision.html";
    });
}

function ValidarLogin() {
    ObtenerComidas();
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