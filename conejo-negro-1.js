// Definición de variables sencillas
document.addEventListener("DOMContentLoaded", () => {
    const nombre = "Luis";
    const edad = 30;
    const esProgramador = true;

    // Mostrar las variables en la consola
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("¿Es programador?:", esProgramador);

    // Crear un elemento h1
    const h1 = document.createElement("h1");

    // Asignar texto al h1
    h1.textContent = "Hola, soy Luis";

    // Inyectar el h1 en el body
    document.body.appendChild(h1);
});