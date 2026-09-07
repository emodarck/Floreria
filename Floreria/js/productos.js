// Lista inicial de productos
let productos = JSON.parse(localStorage.getItem("productos")) || [
    { id: 1, nombre: "Arreglo Floral Rosas Rojas", precio: 19990, envio: "Envío gratis", imagen: "img/Rosas.png", descripcion: "Hermoso arreglo de rosas rojas frescas.", stock: 10 },
    { id: 2, nombre: "Arreglo Mixto Primavera", precio: 24990, envio: "Envío gratis", imagen: "img/primavera.png", descripcion: "Flores variadas para iluminar tu hogar.", stock: 10 },
    { id: 3, nombre: "Ramo de Lirios Blancos", precio: 17990, envio: "Envío gratis", imagen: "img/lirios.png", descripcion: "Elegante ramo de lirios blancos.", stock: 10 },
    { id: 4, nombre: "Bouquet de Tulipanes", precio: 22990, envio: "Envío gratis", imagen: "img/tulipanes.webp", descripcion: "Colorido bouquet de tulipanes frescos.", stock: 10 },
    { id: 5, nombre: "Caja de Rosas y Chocolates", precio: 29990, envio: "Envío gratis", imagen: "img/rosas_chocolates.webp", descripcion: "Caja elegante con rosas y chocolates premium.", stock: 10 },
    { id: 6, nombre: "Centro de Mesa Gerberas", precio: 18990, envio: "Envío gratis", imagen: "img/gerberas.webp", descripcion: "Centro de mesa con gerberas de colores.", stock: 10 },
    { id: 7, nombre: "Orquídea en Maceta", precio: 34990, envio: "Envío gratis", imagen: "img/orquidea.webp", descripcion: "Orquídea blanca en maceta decorativa.", stock: 10 },
    { id: 8, nombre: "Ramo de Margaritas", precio: 15990, envio: "Envío gratis", imagen: "img/margaritas.webp", descripcion: "Ramo fresco de margaritas blancas y amarillas.", stock: 10 },
    { id: 9, nombre: "Arreglo de Girasoles", precio: 21990, envio: "Envío gratis", imagen: "img/girasoles.webp", descripcion: "Arreglo vibrante de girasoles grandes.", stock: 10 },
    { id: 10, nombre: "Ramo de Flores Silvestres", precio: 16990, envio: "Envío gratis", imagen: "img/silvestres.webp", descripcion: "Ramo alegre de flores silvestres variadas.", stock: 10 }
];

// guardar el de arriba si no hay nada en localStorage
if(!localStorage.getItem("productos")){
    localStorage.setItem("productos", JSON.stringify(productos));
} else {
    productos = JSON.parse(localStorage.getItem("productos"));
}

// guardar productos en localStorage
function guardar() {
    localStorage.setItem('productos', JSON.stringify(productos));
}

// argegar producto
function agregarProducto(nombre, precio, imagen = "img/carrusel1.jpg") {
    const id = productos.length > 0 ? productos[productos.length-1].id + 1 : 1;
    productos.push({ id, nombre, precio, envio: "Envío gratis", imagen, descripcion: "", stock: 10 });
    guardar();
}

// borrar productos
function borrarProducto(index) {
    productos.splice(index, 1);
    guardar();
}

//este es pa editar los prodcuctos
function editarProducto(index) {
    const producto = productos[index];
    document.getElementById('producto').value = producto.nombre;
    document.getElementById('precio').value = producto.precio;

    productoEditando = index; 
    document.querySelector('#form-producto input[type="submit"]').value = "Guardar Cambios";
}

function guardarProducto(nombre, precio) {
    if (productoEditando !== null) {
        productos[productoEditando].nombre = nombre;
        productos[productoEditando].precio = precio;
        guardar();
        productoEditando = null;
        document.querySelector('#form-producto input[type="submit"]').value = "Agregar";
    } else {
        agregarProducto(nombre, precio);
    }
}

// Obtener todos los productos
function obtenerProductos() {
    return productos;
}



// Renderizar productos en un contenedor
function renderProductos(contenedorId, admin = false) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    contenedor.innerHTML = "";

    productos.forEach((p, i) => {
        const stockStyle = p.stock <= 3 ? "color:red;font-weight:bold" : "";


            // aca se llaman a las funciones que hicimos arriba
        if (admin) {
            contenedor.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td><img src="${p.imagen}" width="60"></td>
                <td>${p.nombre}</td>
                <td>$${p.precio.toLocaleString()}</td>
                <td style="${stockStyle}">Stock: ${p.stock}</td>
                <td>
                    
                    <button class="btn btn-warning btn-sm me-1" onclick="editarProducto(${i})">Editar</button> 
                    <button class="btn btn-danger btn-sm" onclick="borrarProducto(${i}); renderProductos('${contenedorId}', true);">Borrar</button>
                </td>
            </tr>`;
        } else {
            contenedor.innerHTML += `
            <div class="col">
                <a href="producto.html?id=${p.id}" style="text-decoration: none; color: inherit;">
                <div class="card h-100">
                    <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text">$${p.precio.toLocaleString()}</p>
                        <p class="envio">${p.envio}</p>
                        <p style="${stockStyle}">Stock: ${p.stock}</p>
                    </div>
                </div>
                </a>
            </div>`;
        }
    });

    if (productos.length === 0 && !admin) {
        contenedor.innerHTML = "<p>No hay productos disponibles</p>";
    }
}

// Renderizar detalle de producto
function renderProductoDetalle(contenedorId) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const producto = productos.find(p => p.id === id);

    const contenedor = document.getElementById(contenedorId);
    if(!producto || !contenedor) return;

    const stockStyle = producto.stock <= 3 ? "color:red;font-weight:bold" : "";

    contenedor.innerHTML = `
        <div class="row mt-5">
            <div class="col-md-6 text-center">
                <img src="${producto.imagen}" class="img-fluid rounded" alt="${producto.nombre}">
            </div>
            <div class="col-md-6">
                <h2>${producto.nombre}</h2>
                <p class="price">$${producto.precio.toLocaleString()}</p>
                <p class="envio">${producto.envio}</p>
                <p class="description">${producto.descripcion}</p>
                <p style="${stockStyle}">Stock: ${producto.stock}</p>
                <div class="mt-3">
                    <button class="btn btn-success me-2" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                    <a href="Inventario.html" class="btn btn-secondary">Volver al Inventario</a>
                </div>
                <div id="mensaje-carrito" class="mt-3"></div>
            </div>
        </div>`;
}

// Agregar al carrito y restar stock
function agregarAlCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let idx = carrito.findIndex(item => item.id === id);
    if (idx >= 0) {
        carrito[idx].cantidad += 1;
    } else {
        carrito.push({ id, cantidad: 1 });
    }

    // Restar stock
    const producto = productos.find(p => p.id === id);
    if(producto && producto.stock > 0){
        producto.stock -= 1;
        guardar();
        renderProductos("tabla-productos", true);
        renderProductoDetalle("contenedor-detalle");
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    const mensaje = document.getElementById('mensaje-carrito');
    if(mensaje) {
        mensaje.innerHTML = '<div class="alert alert-success">Producto agregado al carrito</div>';
        setTimeout(() => mensaje.innerHTML = '', 1500);
    }
}

window.productos = productos;
window.editarProducto = editarProducto;
window.borrarProducto = borrarProducto;
window.renderProductos = renderProductos;
window.guardarProducto = guardarProducto;
