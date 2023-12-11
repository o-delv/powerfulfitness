function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value
    let precio_ingresado = document.getElementById("precio").value 
    let cantidad_ingresada = document.getElementById("cantidad").value 
    let direccion_ingresada = document.getElementById("direccion").value 

 
    let datos = {
        nombre: nombre_ingresado,
        precio: precio_ingresado,
        cantidad: cantidad_ingresada,
        direccion: direccion_ingresada
    }
    console.log(datos);
    
    let url = "http://localhost:5000/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "ingresar_pedido.html";  
            
        })
        .catch(err => {
            alert("Error al grabar los datos" )
            console.error(err);
        })
}