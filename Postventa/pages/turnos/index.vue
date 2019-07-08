<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="info">
          Nuevo Usuario
          <b-card-text>Complete los items solicitados:</b-card-text>
          </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="container">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Nombre completo:"
                label-for="input-1"
                description="Ingrese su nombre completo."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ingrese su nombre"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Usuario:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.user" required placeholder="Usuario"></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-5"
                label="Password:"
                label-for="input-5"
                description="Ingrese su password."
              >
                <b-form-input
                  id="input-5"
                  v-model="form.pass"
                  type="password"
                  required
                  placeholder="password"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-6"
                label="Correo:"
                label-for="input-6"
                description="Ingrese su correo."
              >
                <b-form-input
                  id="input-6"
                  v-model="form.correo"
                  type="email"
                  required
                  placeholder="correo"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Perfil:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.perfil" :options="perfil" required></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-7" label="Cliente:" label-for="input-7">
                <b-form-select id="input-7" v-model="form.cliente" :options="cliente" required></b-form-select>
              </b-form-group>

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

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Modificar Usuario</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <div class="container">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Nombre completo:"
                label-for="input-1"
                description="Ingrese su nombre completo."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ingrese su nombre"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Usuario:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.user" required placeholder="Usuario"></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-5"
                label="Password:"
                label-for="input-5"
                description="Ingrese su password."
              >
                <b-form-input
                  id="input-5"
                  v-model="form.pass"
                  type="password"
                  required
                  placeholder="password"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-6"
                label="Correo:"
                label-for="input-6"
                description="Ingrese su correo."
              >
                <b-form-input
                  id="input-6"
                  v-model="form.correo"
                  type="email"
                  required
                  placeholder="correo"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="Perfil:" label-for="input-3">
                <b-form-select id="input-3" v-model="form.perfil" :options="perfil" required></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-7" label="Cliente:" label-for="input-7">
                <b-form-select id="input-7" v-model="form.cliente" :options="cliente" required></b-form-select>
              </b-form-group>

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
export default {
  data() {
    return {
      form: {
        name: "",
        user: "",
        pass: "",
        correo: "",
        perfil: null,
        cliente: null
      },
      perfil: [
        { text: "Seleccione uno", value: null },
        "Administrador",
        "Superusuario",
        "Usuario"
      ],
      show: true,
      cliente: [
        { text: "Seleccione uno", value: null },
        "Infomedia",
        "Colsanitas",
        "Colombina"
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
      // Reset our form values
      this.form.correo = "";
      this.form.name = "";
      this.form.pass = "";
      this.form.user = "";
      this.form.perfil = null;
      this.form.cliente = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>