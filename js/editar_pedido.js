function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let precio_ingresado = document.getElementById("precio").value 
    let cantidad_ingresada = document.getElementById("cantidad").value 
    let direccion_ingresada = document.getElementById("direccion").value 

    let datos = {
        nombre: nombre_ingresado,
        precio:precio_ingresado,
        cantidad:cantidad_ingresada,
        direccion:direccion_ingresada
    }

    console.log(datos);

    let url = "http://localhost:5000/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

           window.location.href = "tabla_pedidos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error en la modificación")
        })      
}