
let cadena = location.search;


let datos = new URLSearchParams(cadena);


let resultado = {};

for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
    resultado[precio] = valor;
    resultado[cantidad] = valor;
    resultado[direccion] = valor
}


document.getElementById("id").value = resultado["id"]
document.getElementById("nombre").value = resultado["nombre"]
document.getElementById("precio").value = resultado["precio"]
document.getElementById("cantidad").value = resultado["cantidad"]
document.getElementById("direccion").value = resultado["direccion"]