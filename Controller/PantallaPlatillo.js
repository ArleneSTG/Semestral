let baseUrl = "http://localhost:8080";
let platillo = [];

function ObtenerInfoPlatillo() {
    fetch(baseUrl + '/infcomida/all').then(res => {
        res.json().then(json => {
            platillo = json;
            ImprimirPlatillo();
        });
    });
}

function ImprimirPlatillo() {
    //ValidarLogin();
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var pid = urlParams.get('id');

    let InfoCategorias = document.getElementById("informacionComida");
    platillo.forEach(element => {
        if(pid == element.id){
            InfoCategorias.innerHTML += MapearListaPlatillos(element);
        }
    });
    
}

function MapearListaPlatillos(element) {
    return `<div class="colum1">
    <img src="${element.fotoUrl}" alt="">
</div>

<div class="colum2">
    <div class="nombre">
        <h1>${element.nombre_comida}</h1>
    </div>
    <div class="descripcion">
        <p>${element.descriComida}
        </p>
    </div>
    <div class="precio">
        <h4>${element.precioComida}</h4>
    </div>
</div>`;
}

function ValidarLogin(){
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);

    var login = urlParams.get('login');

    if (login == 1) {
        let nav = document.getElementById("navbar");
        nav.innerHTML = `<ul>
        <a href="../Pagina Principal/Home.html"><img class="logo" src="img/logo.png"></a>
        <li class="imagen"><a href="../Pagina EditarPerfil/ProfileSettings.html?login=1"><img src="img/perfil.png" alt=""><p>Perfil</p></a></li>
        <li class="info"><a href="../Pagina Contacto/Contact.html?login=1">Contacto</a></li>
        <li class="info"><a href="../Pagina SobreNosotros/AboutUs.html?login=1">Sobre Nosotros</a></li>
        <li class="info"><a href="../Pagina Menu/Menu.html?login=1">Menu</a></li>
        <li class="info"><a href="../Pagina Principal/Home.html?login=1">Inicio</a></li>
    </ul>`;
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