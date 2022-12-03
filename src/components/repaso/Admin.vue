<template>
  <div class="container_body">
    <aside class="nav">
      
      <span id="logo">

        <img src="../../assets/img/logo14.png" alt="">
      </span>
      <p id="tit">MAIN</p>
      <a id="car">
        <span>
          <ion-icon name="bag-handle-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Product">product</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>

      <hr id="tit" />
      <p id="tit">Pre-built Apps</p> 
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
  

      <hr id="tit"/>
      <p id="tit">components</p>
      
      <a id="car">
        <span>
          <ion-icon name="list-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Lister">lister</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>

      <hr id="tit"/>
      <p id="tit">formos</p>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <hr id="tit"/>
      <p id="tit">extra components</p>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
      <a id="car">
        <span>
          <ion-icon name="call-outline"></ion-icon>
        </span>
        <router-link class="pende" to="/Admin/Ventas">Ventas</router-link>
      </a>
    </aside>

    <main>
      <nav id="nav">
        <a>advan</a>
        <a> <router-link class="pend" to="/Admin/User">User</router-link></a>
      </nav>
      <div class="contenido">
        <router-view>
            
        </router-view>
      </div>
    </main>
  </div>
</template>
<style>
@import "../../assets/css/admin.css";
</style>
