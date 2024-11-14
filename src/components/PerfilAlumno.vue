<template>
  <div v-if="token != '' && alumno">
    <h1>Perfil {{ alumno.nombre }} {{ alumno.apellidos }}</h1>
    <div class="card" style="width: 18rem">
      <img :src="alumno.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ alumno.nombre }}</h5>
        <p class="card-text">
          {{ alumno.apellidos }}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ alumno.idCurso }}</li>
        <li class="list-group-item">{{ alumno.activo }}</li>
        <li class="list-group-item">
          <button class="btn btn-danger" @click="deleteAlumno">
            BorrarAlumno
          </button>
        </li>
        <li class="list-group-item">
          <router-link class="btn btn-info" aria-current="page" to="/alumnos"
            >Volver al listado</router-link
          >
        </li>
      </ul>
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
      alumno: [],
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.token = Global.token;
    if (this.token == "") {
      this.$router.push("/login");
    } else {
      service.getPerfilAlumno(id).then((result) => {
        this.alumno = result;
      });
    }
  },
  methods: {
    deleteAlumno() {
      service.deleteAlumno(this.$route.params.id).then((result) => {
        console.log(result);
        this.$router.push("/alumnos");
      });
    },
  },
};
</script>

<style>
</style>