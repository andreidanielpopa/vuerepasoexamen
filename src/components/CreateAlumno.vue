<template>
  <div v-if="token != ''">
    <h1>Create Alumno</h1>
    <form
      v-on:submit.prevent="crearAlumno()"
      style="width: 500px; margin: 0 auto"
    >
      <label>Nombre</label>
      <input type="text" v-model="alumno.nombre" class="form-control" />

      <label>Apellidos</label>
      <input type="text" v-model="alumno.apellidos" class="form-control" />

      <label>Imagen</label>
      <input type="text" v-model="alumno.imagen" class="form-control" />

      <label>Activo</label>
      <input type="number" v-model="alumno.activo" class="form-control" />

      <label>Curso</label>
      <input type="number" v-model="alumno.idCurso" class="form-control" />

      <br />
      <button class="btn btn-success">Crear</button>
    </form>
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
      alumno: {
        idAlumno: 0,
        nombre: "",
        apellidos: "",
        imagen: "",
        activo: 0,
        idCurso: 0,
      },
    };
  },
  mounted() {
    this.token = Global.token;
    if (this.token == "") {
      this.$router.push("/login");
    }
  },
  methods: {
    crearAlumno() {
      service.createAlumno(this.alumno).then((result) => {
        console.log(result);
        this.$router.push("/perfil/" + result.idAlumno);
      });
    },
  },
};
</script>

<style>
</style>