<template>
  <div class="container_login">
    
    <article>
      <span><h3> bienvenidos </h3></span>
      <input id="loco" type="text"  class="form-control" placeholder="nombre">
      <input id="loco" type="text"  class="form-control" placeholder="gmail">
      <span id="botones">
        <button class="boton"><router-link class="pendejo" to="/Admin/product">student</router-link></button>
      <button class="boton"><router-link class="pendejo" to="/Admin2/studens">admin</router-link></button>
      </span>
      

      <span id="contra">¿OLVIDASTE TU CONTRASEÑA?</span>
      <span id="contra"> <router-link class="pendejo" to="register">REGISTER </router-link> </span>
      
    </article>
   
  </div>
  
</template>
<style>
@import "../../assets/css/login.css";
</style>
