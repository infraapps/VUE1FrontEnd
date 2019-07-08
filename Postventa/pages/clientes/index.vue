<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">
          Nuevo Cliente
          <!-- <b-card-text>Complete los items solicitados:</b-card-text> -->
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="container">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Nombre cliente:"
                label-for="input-1"
                description="Ingrese razon social."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Nombre o Razon Social"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Correo:"
                label-for="input-2"
                description="Ingrese correo."
              >
                <b-form-input
                  id="input-2"
                  v-model="form.correo"
                  type="email"
                  required
                  placeholder="correo"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.opcion" id="checkboxes-4">
                  <b-form-checkbox value="hora">Generar informe cada hora</b-form-checkbox>
                  <b-form-checkbox value="evento">Reportar Evento</b-form-checkbox>
                  <b-form-checkbox value="llamada">Generar Llamada</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>

              <!-- <b-form-group label="Seleccione las opciones:">
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="selected"
                  :options="options"
                  name="opcion"
                ></b-form-checkbox-group>
              </b-form-group>-->

              <b-button type="submit" variant="primary">Aceptar</b-button>
              <b-button type="reset" variant="danger">Limpiar</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Modificar Cliente</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="container">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ form }}</pre>
            </b-card>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>


<script>
import { text } from "body-parser";
export default {
  data() {
    return {
      form: {
        name: "",
        correo: "",
        opcion: []
      },
      options: [
        { value: null },
        "hora",
        "evento",
        "llamada"
        // { text: 'Generar informe cada hora', value: 'hora' },
        // { text: 'Reportar Evento', value: 'evento' },
        // { text: 'Generar Llamada', value: 'llamada' },
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.correo = "";
      this.form.name = "";
      this.selected = false;
      this.show = false;

      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>