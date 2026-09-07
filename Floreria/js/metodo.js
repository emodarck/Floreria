//////////////////////////////////////////////aca es pa los productos

//usuarios basee

const usuarios = [
    {
        correo: "admin@gmail.com",
        pass: "Admin123!",
        rol: "admin"
    },
    {
        correo: "cliente@gmail.com",
        pass: "Cliente123!",
        rol: "cliente"
    }
];

//la validacion de los correos que pedia el ava
function correoPermitido(correo) {
    return (
        correo.endsWith("@gmail.com") ||
        correo.endsWith("@duocuc.cl") ||
        correo.endsWith("@profesor.duoc.cl")
    );
}

//lo de la contraseña
function passValida(pass) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(pass);
}

//y aca es para los mensajes de error de js
function loginUsuario() {                                  
    let correo = document.getElementById("correo").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let mensaje = document.getElementById("mensaje-error");

    // aca revias el dominio del correo
    if (correoPermitido(correo) === false) {  
        mensaje.innerText = "Solo se permiten correos @gmail.com, @duocuc.cl o @profesor.duoc.cl";
        return false;
    }

    // lo de las contraseñas
    if (passValida(pass) === false) {      
        mensaje.innerText = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.";
        return false;
    }

    // eee revisa si el usuario esta en la lista que puse al incoi
    let user = usuarios.find(u => u.correo === correo && u.pass === pass);

    if (user !== undefined) {                  
        mensaje.innerText = "";
        alert("Bienvenido " + user.rol.toUpperCase());
        if (user.rol === "admin") {
            window.location.href = "Admin.html";
        } else {
            window.location.href = "principal.html";
        }
        return false;
    } else {
        mensaje.innerText = "Correo o contraseña incorrectos";
        return false;
    }
}

/* Validar registro */
function registrarUsuario() {
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let region = document.getElementById("region").value;               //aca se obtienen los valores que pusiste al y toda la praranoia
    let comuna = document.getElementById("comuna").value;
    let mensaje = document.getElementById("mensaje-error");

    //lo de mensaje de error si es que estan vacios

    if (nombre === "") {
        mensaje.innerText = "Debe ingresar su nombre.";
        return false;
    }

    if (correoPermitido(correo) === false) { 
        mensaje.innerText = "Solo se permiten correos @gmail.com, @duocuc.cl o @profesor.duoc.cl";
        return false;
    }

    if (passValida(pass) === false) {
        mensaje.innerText = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.";  
        return false;
    }

    if (region === "") {
        mensaje.innerText = "Debe seleccionar una región.";
        return false;
    }

    if (comuna === "") {
        mensaje.innerText = "Debe seleccionar una comuna.";
        return false;
    }

    mensaje.innerText = "";
    alert("Usuario registrado correctamente");
    return false;
}

// --- contacto Envío de mensaje ---
function enviarMensajeSoporte(e) {
    e.preventDefault();
    document.getElementById('mensaje-exito').innerText = "¡Tu mensaje ha sido enviado al soporte!";
    document.getElementById('form-contacto').reset();
}

// --- contacto Mostrar info WhatsApp e Instagram ---
function mostrarInfoWsp() {
    var info = document.getElementById('info-wsp');
    info.classList.toggle('d-none');
}

