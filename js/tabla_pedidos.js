const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"http://127.0.0.1:5000/pedidos",
        pedidos:[],
        error:false,
        cargando:true
      }
    },

    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.pedidos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                });
        },
        eliminar(id) {
            
            const url = 'http://localhost:5000/borrar/'+id;
            var options = {
                method: 'DELETE',
                
            }
            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },
    



  }).mount('#app')