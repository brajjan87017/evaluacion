import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/repaso/Login.vue";
import Admin from "./components/repaso/Admin.vue";
import Register from "./components/repaso/Register.vue";
import User from "./components/repaso/User.vue";
import Ventas from "./components/repaso/Ventas.vue";
import Product from "./components/repaso/Product.vue";
import Lister from "./components/repaso/Lister.vue";
import Roladmin from "./components/repaso/Roladmin.vue";
// ----- admin2
import Admin2 from "./components/admin/Admin2.vue";
import Studens from "./components/admin/Studens.vue";
import Teacher from "./components/admin/Teacher.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    components: { main: Login },
  },
  {
    path: "/admin",
    name: "Admin",
    components: { main: Admin },
    children: [
      {
        path: "Product",
        component: Product,
      },
      {
        path: "Lister",
        component: Lister,
      },
      {
        path: "Ventas",
        component: Ventas,
      },
      {
        path: "User",
        component: User,
      },
      {
        path: "Roladminr",
        component: Roladmin,
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    components: { main: Register },
  },
 

  {
    path: "/Admin2",
    name: "Admin2",
    components: { main: Admin2 },
    children: [
      {
        path: "Studens",
        component: Studens,
      },
      {
        path: "Teacher",
        component: Teacher,
      },
     
      
    ],
  },
];

const _router = createRouter({
  history: createWebHistory(),
  routes,
});

export default _router;
