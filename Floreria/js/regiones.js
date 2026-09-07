// regiones.js

// Objeto con todas las regiones y sus comunas
const regionesYcomunas = {
    "Región de Arica y Parinacota": [
        "Arica", "Camarones", "Putre", "General Lagos"
    ],
    "Región de Tarapacá": [
        "Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"
    ],
    "Región de Antofagasta": [
        "Antofagasta", "Mejillones", "Sierra Gorda", "Taltal",
        "Calama", "Ollagüe", "San Pedro de Atacama",
        "Tocopilla", "María Elena"
    ],
    "Región de Atacama": [
        "Copiapó", "Caldera", "Tierra Amarilla",
        "Chañaral", "Diego de Almagro",
        "Vallenar", "Alto del Carmen", "Freirina", "Huasco"
    ],
    "Región de Coquimbo": [
        "La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña",
        "Illapel", "Canela", "Los Vilos", "Salamanca",
        "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"
    ],
    "Región de Valparaíso": [
        "Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana",
        "Casablanca", "Juan Fernández",
        "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo",
        "Quillota", "La Calera", "Hijuelas", "La Cruz", "Nogales",
        "San Felipe", "Llaillay", "Catemu", "Panquehue", "Putaendo", "Santa María",
        "Los Andes", "San Esteban", "Rinconada", "Calle Larga", "Quintero", "Puchuncaví",
        "Isla de Pascua"
    ],
    "Región Metropolitana de Santiago": [
        "Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central",
        "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana",
        "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú",
        "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura",
        "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón",
        "Vitacura", "Puente Alto", "San Bernardo", "Buin", "Calera de Tango", "Paine",
        "Melipilla", "Curacaví", "María Pinto", "San Pedro", "Alhué",
        "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor", "Tiltil", "Colina", "Lampa"
    ],
    "Región de O’Higgins": [
        "Rancagua", "Machalí", "Graneros", "Mostazal", "Codegua",
        "San Fernando", "Chimbarongo", "Nancagua", "Placilla", "Santa Cruz",
        "Pichilemu", "Marchigüe", "Navidad", "Litueche", "La Estrella",
        "Doñihue", "Coinco", "Coltauco", "Las Cabras", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa"
    ],
    "Región del Maule": [
        "Talca", "San Clemente", "Maule", "Pelarco", "Pencahue", "Río Claro",
        "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén",
        "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas",
        "Cauquenes", "Chanco", "Pelluhue"
    ],
    "Región de Ñuble": [
        "Chillán", "Chillán Viejo", "Bulnes", "Quillón", "San Ignacio", "El Carmen", "Pinto", "Coihueco",
        "San Carlos", "Ñiquén", "San Fabián", "San Nicolás", "Cobquecura", "Treguaco", "Quirihue", "Ninhue", "Ránquil", "Portezuelo"
    ],
    "Región del Biobío": [
        "Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz",
        "Santa Juana", "Talcahuano", "Tomé", "Hualpén",
        "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco",
        "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa"
    ],
    "Región de La Araucanía": [
        "Temuco", "Padre Las Casas", "Cunco", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche",
        "Melipeuco", "Nueva Imperial", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol",
        "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"
    ],
    "Región de Los Ríos": [
        "Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli",
        "La Unión", "Futrono", "Lago Ranco", "Río Bueno"
    ],
    "Región de Los Lagos": [
        "Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas",
        "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao",
        "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo",
        "Chaitén", "Futaleufú", "Hualaihué", "Palena"
    ],
    "Región de Aysén": [
        "Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas",
        "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"
    ],
    "Región de Magallanes": [
        "Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio",
        "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"
    ]
};

// Función para cargar regiones en un select
function cargarRegiones(selectRegionId, selectComunaId) {
    const selectRegion = document.getElementById(selectRegionId);
    const selectComuna = document.getElementById(selectComunaId);

    // Llenar las regiones
    for (let region in regionesYcomunas) {
        let option = document.createElement("option");
        option.value = region;
        option.text = region;
        selectRegion.appendChild(option);
    }

    // Evento para mostrar comunas según la región seleccionada
    selectRegion.addEventListener("change", function () {
        let comunas = regionesYcomunas[this.value];
        selectComuna.innerHTML = "<option value=''>Seleccione comuna</option>"; // reset
        if (comunas) {
            comunas.forEach(c => {
                let opt = document.createElement("option");
                opt.value = c;
                opt.text = c;
                selectComuna.appendChild(opt);
            });
        }
    });
}
