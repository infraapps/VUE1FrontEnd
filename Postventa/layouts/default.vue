<template>
<section class="bg"  :style="{'background-image': 'url(' + require('@/assets/infomedia.jpg') + ')'}">
<div >
<div class="container"> 
  
<b-navbar toggleable="lg" type="light" variant="Light">
       <b-img class="my-2 mr-5" src="@/assets/logo.png" fluid alt="Responsive image" width="100" height="50"></b-img>
    <b-navbar-brand>Bienvenido {{msg + ' ' + msj}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-item title="home" :to="{name:'clientes'}">Clientes</b-nav-item>
        <b-nav-item title="usuarios" :to="{name:'usuarios'}">Usuarios</b-nav-item>
        <b-nav-item title="servicios" :to="{name:'servicios'}">Servicios</b-nav-item>
        <b-nav-item title="turnos" :to="{name:'turnos'}">Turnos</b-nav-item>
        <b-nav-item title="perfil" :to="{name:'perfil'}">Mi perfil</b-nav-item>
        <b-nav-item title="informes" :to="{name:'informes'}">Informes</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>Usuario</em></template>
          <b-dropdown-item :to="{name:'perfil'}">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Salir</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <nuxt />
  </div>
  </div>
  </section>
</template>

<script>

export default {
    data() {
    return {
      msg: "Jorge",
      msj: "Florez"
    };
  }
}
</script>

<style scoped>
body, html {
  height: 100%;
}

.bg { 
  /* Full height */
  height: 70%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
