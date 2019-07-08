Vue.prototype.$http = axios;

new Vue({
    el: 'main',
    mounted() {
        this.cargarPersonas();
    },
    data: {
        personas: []
    },
    methods: {
        cargarPersonas() {
            this.$http.get('http://172.16.3.15/posventa/sebas/usuarios.php/usuarios/')
                .then((respuesta) => {
                    this.personas = respuesta.data.results;
                });
            // axios.get('https://randomuser.me/api/?results=500')
            //     .then((respuesta) => {
            //         this.personas = respuesta.data.results;
            //     });
        }
    }
});