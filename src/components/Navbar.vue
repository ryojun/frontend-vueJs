<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="/img/logo.svg" alt="Logo">
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="register">Register</a>
            </li>
            </ul>
        </div>
        <a @click="onLogout()" class="btn-logout">
            <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
        </a>
    </nav>
</template>

<script>
import axios from "axios";
import router from "../router/index"
import store from '../store'
export default {
  name: "navbar",
  methods: {
    onLogout() {
      axios
        .post("api/account/logout")
        .then(response => {
          router.push({ name: "Login" });
          store.commit('set_user', null);
        })
        .catch(error => alert(error.response.data.message));
    }
  }
};
</script>

<style scoped>
.navbar {
  /* height: 60px; */
  border-bottom: solid 1px #17a2b8;
  padding-right: 0;
}
.navbar-brand img {
  width: 262px;
  height: 45px;
}
.btn-logout {
  width: 80px;
  height: 60px;
  background-color: #17a2b8;
  font-size: 24px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
.btn-logout {
  color: #ffffff;
}
</style>

