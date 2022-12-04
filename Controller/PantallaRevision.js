let baseUrl = "http://localhost:8080";
let comidas = [];
let mensajes = [];

//OBTENEMOS LAS CATEGORIAS
function ObtenerComidas() {
    fetch(baseUrl + '/comidas/all').then(res => {
        res.json().then(json => {
            comidas = json;
            ImprimirComidasPublicadas();
        });
    });
}

function ImprimirComidasPublicadas() {
    let Publicadas = document.getElementById("Publicadas");

    comidas.forEach(elemento => {
        if (elemento.publicada == 1) {
            Publicadas.innerHTML += MapearComidasPublicadas(elemento);
        }
    });
}

function MapearComidasPublicadas(elemento) {
    return `
    <div class="contenedor_comidas">
        <img src="${elemento.fotoUrl}" alt="" class="img_comidas">
        <div class="texto">
            <!--en este div se editan todos los textos-->
            <h2>${elemento.nombreComida}</h2>
            <p class="precio">${elemento.precioComida}</p>
            <p>${elemento.descriIngredient}
            </p>
            <p>
            ${elemento.descriComida}
            </p>
            <div class="div_botones">
                <!--en este div se editan todos los botones-->
                <a href="../Pagina EditarPlatillo/EditFood.html?idPlatillo=${elemento.id}" class="botones">Editar platillo</a>
            </div>
        </div>
    </div>
    `;
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
        <li class="info"><a href="../Pagina comidas/comidas.html">comidas</a></li>
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
        <li><a href="../Pagina comidas/comidas.html">comidas</a></li>
        <li><a href="../Pagina Principal/Home.html">Inicio</a></li>
    </ul>`;
    }
}