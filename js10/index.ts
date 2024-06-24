/**
 * Clase que representa a un jugador con sus datos.
 */
class CJugador {
    /**
     * Crea una instancia de CJugador.
     * @param nombre - El nombre del jugador.
     * @param posicion - La posición del jugador.
     * @param edad - La edad del jugador.
     * @param estatura - La estatura del jugador.
     * @param peso - El peso del jugador.
     * @param nacionalidad - La nacionalidad del jugador.
     */
    constructor(
        public nombre: string,
        public posicion: string,
        public edad: number,
        public estatura: string,
        public peso: number,
        public nacionalidad: string
    ) {}
}

// Crear una lista de jugadores
const jugadores: CJugador[] = [
    new CJugador("Fábio", "G", 43, "1.88 m", 86, "Brasil"),
    new CJugador("Marlon", "D", 28, "1.83 m", 78, "Brasil"),
    new CJugador("Marcelo", "D", 35, "1.73 m", 72, "Brasil"),
    new CJugador("Nino", "D", 26, "1.88 m", 82, "Brasil"),
    new CJugador("John Kennedy", "A", 21, "1.73 m", 71, "Brasil"),
    new CJugador("Keno", "A", 34, "1.78 m", 72, "Brasil"),
    new CJugador("Germán Cano", "A", 35, "1.78 m", 81, "Argentina")
];

/**
 * Función que lista todos los jugadores de una nacionalidad específica.
 * @param nacionalidad - La nacionalidad a filtrar.
 */
function listarJugadoresPorNacionalidad(nacionalidad: string): void {
    const jugadoresFiltrados = jugadores.filter(jugador => jugador.nacionalidad === nacionalidad);
    jugadoresFiltrados.forEach(jugador => console.log(`${jugador.nombre} (${jugador.posicion})`));
}

/**
 * Función que lista todos los jugadores que tienen un peso dentro de un rango específico.
 * @param pesoMinimo - El peso mínimo del rango.
 * @param pesoMaximo - El peso máximo del rango.
 */
function listarJugadoresPorRangoPeso(pesoMinimo: number, pesoMaximo: number): void {
    const jugadoresFiltrados = jugadores.filter(jugador => jugador.peso >= pesoMinimo && jugador.peso <= pesoMaximo);
    jugadoresFiltrados.forEach(jugador => console.log(`${jugador.nombre} (${jugador.posicion}) - ${jugador.peso} kg`));
}

/**
 * Función que muestra el jugador más alto.
 */
function mostrarJugadorMasAlto(): void {
    const jugadorMasAlto = jugadores.reduce((jugadorAlto, jugadorActual) => {
        const estaturaAlto = parseFloat(jugadorAlto.estatura);
        const estaturaActual = parseFloat(jugadorActual.estatura);
        return estaturaAlto > estaturaActual ? jugadorAlto : jugadorActual;
    });
    console.log(`El jugador más alto es ${jugadorMasAlto.nombre} con una estatura de ${jugadorMasAlto.estatura}`);
}

// Llamadas a las funciones
console.log("Jugadores argentinos:");
listarJugadoresPorNacionalidad("Argentina");

console.log("\nJugadores con peso entre 75 y 80 kg:");
listarJugadoresPorRangoPeso(75, 80);

console.log("\nJugador más alto:");
mostrarJugadorMasAlto();