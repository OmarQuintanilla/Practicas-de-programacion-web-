const estanteria = {
    libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false
    },
    {
        nombre: 'Harry Potter y el cáliz de fuego',
        autor: 'J.K. Rowling',
        leido: true
    },
    {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false
    },
    {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
    },
    {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
    }],
    log() {
        const { libros } = this;
        libros.forEach(libro => {
            const { nombre, autor, leido } = libro;
            if (leido) {
                console.log(`Ya has leído "${nombre}" de ${autor}.`);
            } else {
                console.log(`Aún no has leído "${nombre}" de ${autor}.`);
            }
        });
    },
    sugerencia() {
        const { libros } = this;
        const noLeidos = libros.filter(libro => !libro.leido);

        if (noLeidos.length > 0) {
            const randomIndex = Math.floor(Math.random() * noLeidos.length);
            const { nombre, autor } = noLeidos[randomIndex];
            console.log(`Sugerencia para leer: "${nombre}" de ${autor}`);
        } else {
            console.log("¡Has leído todos los libros!");
        }
    }
}

console.log("Estado de la estantería:");
estanteria.log();
console.log("\nSugerencias de lectura:");
estanteria.sugerencia();
