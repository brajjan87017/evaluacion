<template>
  <div class="container_register">
    <article>
      <span><h3>registrate</h3></span>
      <input id="loco" type="text" class="form-control" placeholder="nombre" />
      <input id="loco" type="text" class="form-control" placeholder="gmail" />
      <input
        id="loco"
        type="text"
        class="form-control"
        placeholder="contraseña"
      />
      <input
        id="loco"
        type="text"
        class="form-control"
        placeholder="confirmar contraseña "
      />
      <span>
        <button class="bot">
          <router-link class="pendejo" to="/Admin/User">user</router-link>
        </button>
        <button class="bot">
          <router-link class="pendejo" to="/Admin/Roladminr">admin</router-link>
        </button>
      </span>
    </article>
  </div>
</template>
<style>
@import "../../assets/css/Register.css";
</style>
