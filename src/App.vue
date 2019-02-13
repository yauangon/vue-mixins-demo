<template>
  <div id="app">
    <div class="users">
      <AllUsers />
      <Active />
      <Inactive />
    </div>
  </div>
</template>

<script>
import AllUsers from "./components/AllUsers.vue";
import Active from "./components/Active.vue";
import Inactive from "./components/Inactive.vue";

export default {
  name: "app",
  components: {
    AllUsers,
    Active,
    Inactive
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.users > * {
  float: left;
  width: 46%;
  padding: 1rem 3rem;
  margin: 0 2%;
  text-align: left;
  border: 0.5px solid #ccc;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
