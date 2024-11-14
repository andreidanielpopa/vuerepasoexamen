<template>
  <div v-if="token != '' && alumnos">
    <h1>Alumnos</h1>

    <div class="d-flex flex-wrap justify-content-around">
      <div
        class="card"
        style="width: 18rem"
        v-for="alumno of alumnos"
        :key="alumno"
      >
        <img :src="alumno.imagen" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{{ alumno.nombre }} {{ alumno.apellidos }}</p>
          <router-link
            class="btn btn-info"
            aria-current="page"
            :to="'/perfil/' + alumno.idAlumno"
            >Ver Perfil</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Global from "@/Global";
import AlumnosService from "./../services/AlumnosService";
const service = new AlumnosService();
export default {
  data() {
    return {
      token: "",
      alumnos: [],
    };
  },
  mounted() {
    this.token = Global.token;
    if (this.token == "") {
      this.$router.push("/login");
    } else {
      service.getListaAlumnos().then((result) => {
        this.alumnos = result;
      });
    }
  },
};
</script>

<style>
</style>