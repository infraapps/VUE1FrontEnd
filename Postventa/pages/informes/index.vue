<template>
  <div>
    <v-form>
      <h1>Usuarios</h1>
      <div class="container">
        <b-table responsive striped hover small :items="usuarios"></b-table>
        <b-card-text>
          <b-card class="mb-3" v-for="(item, index) in usuarios" :key="index">
            <b-chip label color="blue" text-color="red" class="ml-0"><p>{{item.USUARIO_NOMBRE}}</p></b-chip>
          </b-card>
            <b-button color="warning" class="ml-0" v-b-modal.modal-1>Editar</b-button>
            <b-button variant="primary" >
                  <b-spinner small></b-spinner>
    <span class="sr-only">Loading...</span>Eliminar</b-button>
      <b-modal id="modal-1" title="Editado">
    <p class="my-4">Archivo Editado</p>
  </b-modal>
        </b-card-text>
      </div>
    </v-form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      usuarios: [],
      selected: null,
      mensaje: "",
      datos: {
        nombre: "",
        login: "",
        pass: "",
        perfil: "",
        empresa: "",
        correo: ""
      }
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "../usuarios.json"
      );
      //console.log(res.data);
      this.usuarios = res.data;
    } catch (error) {
      console.log(error);
    }
  },
      methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.datos))
      }
}
}
</script>