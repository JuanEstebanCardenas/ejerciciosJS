const profesores = [];
const estudiantes = [];


estudiantes.push({
    nombre: "Juan",
    edad: 17,
    curso: "11",
    Grupo: "A",
});

profesores.push({
    nombre: "Rodrigo",
    edad: 38,
    Asignatura: "Ingles",
    nivel: "C1"
});

const personas = [ ... profesores, ...estudiantes];