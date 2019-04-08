<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{name: 'Home'}" class="brand-logo left">GeoNinjas</router-link>
        <ul class="right">
          <li>
            <router-link :to="{name: 'Signup'}">Sign Up</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Login'}">Log In</router-link>
          </li>
          <li>
            <a @click="logout">Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  }
};
</script>

<style>
</style>
