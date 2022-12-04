let baseUrl = "http://localhost:8080";
let menu = [];

//OBTENEMOS LAS CATEGORIAS
function ObtenerMenu() {
    fetch(baseUrl + '/infcomida/all').then(res => {
        res.json().then(json => {
            menu = json;
            ImprimirCategoriasMenu();
        });
    });
}

function ImprimirCategoriasMenu() {
    ValidarLogin();
    let Bebidas = document.getElementById("Bebidas");
    let Entradas = document.getElementById("Entradas");
    let PlatoFuerte = document.getElementById("PlatoFuerte");
    let Postres = document.getElementById("Postres");
    Bebidas.innerHTML = "";
    Entradas.innerHTML = "";
    PlatoFuerte.innerHTML = "";
    Postres.innerHTML = "";

    menu.forEach(elemento => {
        if (elemento.id_categoria == 1 && elemento.publicada == 0) {
            Bebidas.innerHTML += MapearCategoriasMenu(elemento);
        } else if (elemento.id_categoria == 2 && elemento.publicada == 0) {
            Entradas.innerHTML += MapearCategoriasMenu(elemento);
        } else if (elemento.id_categoria == 3 && elemento.publicada == 0) {
            PlatoFuerte.innerHTML += MapearCategoriasMenu(elemento);
        } else if (elemento.id_categoria == 4 && elemento.publicada == 0) {
            Postres.innerHTML += MapearCategoriasMenu(elemento);
        }
    });
}

function MapearCategoriasMenu(elemento) {
    return `
    <a href="../Pagina DetallePlatillo/Details.html?id=${elemento.id}">
                <div class="divi">
                    <img src="${elemento.fotoUrl}" alt="">
                    <div class="info">
                        <h3>${elemento.nombre_comida}</h3>
                        <p>${elemento.descrip_ingre}</p>
                    </div>
                </div>
            </a>
    `;
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
    } else if (login == 1 && tusuario == 1) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html"><img src="img/perfil.png" alt=""><p>${sessionStorage.getItem("nombre")}</p></a></li>
        <li class="info"><a href="../Pagina Contacto/Contact.html">Administrador</a></li>
        <li class="info"><a href="../Pagina SobreNosotros/AboutUs.html">Sobre Nosotros</a></li>
        <li class="info"><a href="../Pagina Menu/Menu.html">Menu</a></li>
        <li class="info"><a href="../Pagina Principal/Home.html">Inicio</a></li>
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