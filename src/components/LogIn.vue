<template>
  <div>
    <h1>LogIn</h1>

    <form v-on:submit.prevent="logIn()" style="width: 500px; margin: 0 auto">
      <label>User</label>
      <input type="text" v-model="login.userName" class="form-control" />

      <label>Password</label>
      <input type="text" v-model="login.password" class="form-control" />

      <br />
      <button class="btn btn-info">LogIn</button>
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
      login: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      service.getToken(this.login).then((result) => {
        Global.token = result;
        this.$router.push("/alumnos");
        console.log(Global.token);
      });
    },
  },
};
</script>
  
  <style>
</style>
  