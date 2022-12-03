<template>
  <div class="container_teacher">
    <div class="punt">
      <b>ALL TEACHER</b>
      
      <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal_crear"
              >
              <ion-icon id="crear2" name="add-circle-outline"></ion-icon>
              </button>
    </div>
    <form id="buscar" class="d-flex" role="search">
        <input class="form-control me-2" v-model="search" @keyup="filtrar" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" @click="filtrar">Search</button>
      </form>
    <div class="contenido_teacher">
      <table id="table" class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">apellido</th>
            <th scope="col">dni</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th>funciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in mostrar_datos" :key="('studen '+ p.d)">
            <th>{{ p.name }}</th>
            <td>{{ p.apellido }}</td>
            <td>{{ p.dni }}</td>
            <td>{{ p.email }}</td>
            <td>{{ p.addres }}</td>
            <td>
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal_editar"
              >
                <ion-icon id="eliminar" name="create-outline"></ion-icon>
              </button>
              <button
                type="button"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#modal_eliminar"
              >
                <ion-icon id="eliminar" name="trash-outline"></ion-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ----------modals--------------- -->
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="modal_editar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">EDITAR</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">

          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >name</label
              >
              <input 
              v-model="mostrar_datos.name"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >apellido</label
              >
              <input 
              v-model="mostrar_datos.apellido"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >dni</label
              >
              <input 
              v-model="mostrar_datos.dni"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input 
              v-model="mostrar_datos.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >addres</label
              >
              <input 
              v-model="mostrar_datos.addres"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" data-bs-dismiss="modal" class="btn btn-primary">editar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- crear -->
  <div
    class="modal fade"
    id="modal_crear"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">CREAR</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">

          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >name</label
              >
              <input 
              v-model="mostrar_datos.name"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >apellido</label
              >
              <input 
              v-model="mostrar_datos.apellido"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >dni</label
              >
              <input 
              v-model="mostrar_datos.dni"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input 
              v-model="mostrar_datos.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >addres</label
              >
              <input 
              v-model="mostrar_datos.addres"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" data-bs-dismiss="modal" class="btn btn-primary">CREAR</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="modal_eliminar"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">eliminar</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body"><h4>¿deseas eliminar este studiante?</h4> </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" data-bs-dismiss="modal" class="btn btn-primary">eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "../../assets/css/teacher.css";
</style>

<script>
export default {
  data() {
    return {
      lista_productos: [],
      mostrar_datos: [],
    };
  },
  mounted() {},

  created() {
    this.lista_productos = [
      {
        name: "brajjan",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "daniel",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "pepito",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "julian",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "fabio",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "cruz",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "marles",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "andres",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "esteban",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      {
        name: "karol",
        apellido: "hernandez",
        dni: 1117954350,
        email: "brajjan@gmail.com",
        addres: "en el caño mas profundo",
      },
      
    ];
    this.mostrar_datos = this.lista_productos;
  },

  methods: {
      
  
      filtrar() {
        this.mostrar_datos = this.lista_productos.filter(
          (pro) =>
            (pro.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1) |
            (pro.dni.toString().indexOf(this.search) > -1)
        );
      },
    },
};
</script>
