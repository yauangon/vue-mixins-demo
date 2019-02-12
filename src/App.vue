<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="users">
      <AllUsers />
      <Active />
      <Inactive />
    </div>
  </div>
</template>

<script>
import AllUsers from './components/AllUsers.vue'
import Active from './components/Active.vue'
import Inactive from './components/Inactive.vue'

export default {
  name: 'app',
  components: {
    AllUsers,
    Active,
    Inactive
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.users > * {
  float: left;
  width: 50%;
  padding: 0 4rem;
  text-align: right;
}
.users > *:first-child {
  text-align: left;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
