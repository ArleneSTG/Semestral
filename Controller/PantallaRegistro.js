let baseUrl = "http://localhost:8080";
let usuario = [];

function ObtenerUsuarios() {
    fetch(baseUrl + '/usuario/all').then(res => {
        res.json().then(json => {
            usuario = json;
        });
    });
}

function GuardarUsuario() {
    var radios = document.getElementsByName('gender');
    let mensaje = document.getElementById("mensaje");
    var genero;
    for (var radio of radios) {
        if (radio.checked) {
            genero = radio.value;
        }
    }

    let data = {
        telefono: document.getElementById("telefono").value,
        nombreUsuario: document.getElementById("nombreUsuario").value,
        correo: document.getElementById("correo").value,
        contrasena: document.getElementById("contrasena").value,
        genero: genero,
    };

    fetch(baseUrl + "/usuario", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }

    }).then(res => {
        ObtenerUsuarios();
        mensaje.innerHTML = "Registro de usuario realizado con exito";
    });
}