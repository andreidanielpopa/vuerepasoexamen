<template>
  <nav
    class="navbar navbar-expand-sm navbar-dark bg-dark"
    aria-label="Third navbar example"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Empleados</a>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/alumnos"
              >Alumnos</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/create">Crear Alumno</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/login">LogIn</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>