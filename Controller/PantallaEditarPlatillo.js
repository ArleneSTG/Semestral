let baseUrl = "http://localhost:8080";
let comidas = [];

//OBTENEMOS LAS CATEGORIAS
function ObtenerComidas() {
    fetch(baseUrl + '/comidas/all').then(res => {
        res.json().then(json => {
            comidas = json;
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

    CargarCampos();
}

function CargarCampos() {
    let Platillo = document.getElementById("Platillo");
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);

    var idPlatillo = urlParams.get('idPlatillo');
    sessionStorage.setItem("idPlatillo", idPlatillo);
    sessionStorage.getItem("id_usuario");

    comidas.forEach(element => {
        if (element.id == idPlatillo) {
            Platillo.innerHTML = `<div class="texto">
            <br>
            <!--en este div se editan todos los textos-->
            <input type="text" value="${element.fotoUrl}" class="nombre" id="fotoUrl" placeholder="foto URL"><br>
            <input type="text" value="${element.nombreComida}" class="nombre" id="nombre" placeholder="Nombre del producto"><br>
            <input type="text" value="${element.precioComida}" class="precio" id="precio" placeholder="Precio"><br>
            <input type="text" value="${element.descriIngredient}" name="descripcionI" id="descripcionI" placeholder="Decripcion de ingredientes">
            <input type="text" value="${element.descriComida}" name="descripcionI" id="descripcionC" placeholder="Decripcion de la comida">
            <div class="gender-details">
                <input type="radio" value="1" name="categoria" id="dot-1">
                <input type="radio" value="2" name="categoria" id="dot-2">
                <input type="radio" value="3" name="categoria" id="dot-3">
                <input type="radio" value="4" name="categoria" id="dot-4">
                <span class="gender-title">Categoria del platillo</span>
                <div class="category">
                    <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Bebidas</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Entradas</span>
                    </label>
                    <label for="dot-3">
                        <span class="dot thre"></span>
                        <span class="gender">Plato Fuerte</span>
                    </label>
                    <label for="dot-4">
                        <span class="dot four"></span>
                        <span class="gender">Postres</span>
                    </label>
                </div>
            </div>
        </div>
            `;
        }
    });
}

function ActualizarComida() {
    var radios = document.getElementsByName('categoria');
    let mensaje = document.getElementById("mensaje");
    var categoria;
    for (var radio of radios) {
        if (radio.checked) {
            categoria = radio.value;
        }
    }


    let data = {
        id: sessionStorage.getItem("idPlatillo"),
        nombreComida: document.getElementById("nombre").value,
        precioComida: document.getElementById("precio").value,
        descriIngredient: document.getElementById("descripcionI").value,
        descriComida: document.getElementById("descripcionC").value,
        categoria_id: categoria,
        fotoUrl: document.getElementById("fotoUrl").value
    };

    fetch(baseUrl + "/actualizarcomida", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }

    }).then(res => {
        ObtenerComidas();
        mensaje.innerHTML = "Platillo Actualizado con exito";
    });
}

function EliminarPlatillo(){
    fetch(baseUrl + '/eliminarplatillo/' + sessionStorage.getItem("idPlatillo"), { method: "Delete" }).then(res => {
        console.log(res);
        window.location.href = "../Pagina RevisionPlatillos/Revision.html";
    });
}

function PublicarComida() {
    var radios = document.getElementsByName('categoria');
    let mensaje = document.getElementById("mensaje");
    var categoria;
    for (var radio of radios) {
        if (radio.checked) {
            categoria = radio.value;
        }
    }

    ActualizarPublicado();

    let data = {
        nombre_comida: document.getElementById("nombre").value,
        descrip_ingre: document.getElementById("descripcionI").value,
        id: categoria,
        fotoUrl: document.getElementById("fotoUrl").value
    };

    fetch(baseUrl + "/publicarplatillo", {
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

function ActualizarPublicado() {
    let data = {
        id: sessionStorage.getItem("idPlatillo"),
        publicada: 0
    };

    fetch(baseUrl + "/actualizarpublicado", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }

    }).then(res => {
        ObtenerComidas();
    });
}