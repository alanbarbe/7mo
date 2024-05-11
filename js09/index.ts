/**
 * Clase que representa un autor con sus datos.
 */
class CAutores {
    /**
     * Crea una instancia de CAutores.
     * @param nombre - El nombre del autor.
     * @param apellido - El apellido del autor.
     * @param nacionalidad - La nacionalidad del autor.
     * @param mejorObra - La mejor obra del autor.
     * @param anioPublicacion - El año de publicación de la mejor obra.
     * @param edadPublicacion - La edad del autor al publicar su mejor obra.
     */
    constructor(
        public nombre: string,
        public apellido: string,
        public nacionalidad: string,
        public mejorObra: string,
        public anioPublicacion: number,
        public edadPublicacion: number
    ) {}
}

// Crear una lista de autores
const autores: CAutores[] = [
    new CAutores("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40),
    new CAutores("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48),
    new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
    new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
    new CAutores("Clarice", "Lispector", "Brasileña", "La hora de estrella", 1977, 56),
    new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Paramo", 1955, 38),
    new CAutores("Carlos", "Fuentes", "null", "La región más transparente", 1958, 29),
    new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31)
];

/**
 * Función que lista todos los autores de una nacionalidad específica.
 * @param nacionalidad - La nacionalidad a filtrar.
 */
function listarAutoresPorNacionalidad(nacionalidad: string): void {
    const autoresFiltrados = autores.filter(autor => autor.nacionalidad === nacionalidad);
    autoresFiltrados.forEach(autor => console.log(`${autor.nombre} ${autor.apellido}`));
}

/**
 * Función que lista todos los autores que publicaron entre dos años específicos.
 * @param anioInicio - El año de inicio del rango.
 * @param anioFin - El año de fin del rango.
 */
function listarAutoresPorRangoPublicacion(anioInicio: number, anioFin: number): void {
    const autoresFiltrados = autores.filter(autor => autor.anioPublicacion >= anioInicio && autor.anioPublicacion <= anioFin);
    autoresFiltrados.forEach(autor => console.log(`${autor.nombre} ${autor.apellido} - ${autor.mejorObra} (${autor.anioPublicacion})`));
}

/**
 * Función que calcula el promedio de la edad de publicación de los autores.
 * @returns El promedio de la edad de publicación.
 */
function obtenerPromedioEdadPublicacion(): number {
    const edadesPublicacion = autores.filter(autor => autor.edadPublicacion !== null).map(autor => autor.edadPublicacion);
    const sumaEdades = edadesPublicacion.reduce((total, edad) => total + edad, 0);
    return sumaEdades / edadesPublicacion.length;
}

/**
 * Función que muestra todos los autores con sus datos.
 */
function mostrarTodosLosAutores(): void {
    autores.forEach(autor => console.log(`${autor.nombre} ${autor.apellido} - ${autor.nacionalidad} - ${autor.mejorObra} (${autor.anioPublicacion}, ${autor.edadPublicacion})`));
}

// Llamadas a las funciones
console.log("Autores argentinos:");
listarAutoresPorNacionalidad("Argentino");

console.log("\nAutores que publicaron entre 1960 y 1980:");
listarAutoresPorRangoPublicacion(1960, 1980);

console.log("\nPromedio de edad de publicación:", obtenerPromedioEdadPublicacion());

console.log("\nTodos los autores:");
mostrarTodosLosAutores();