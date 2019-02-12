<template>
  <div>
    <h2>Inactive Users</h2>
    <ul>
      <li 
        v-for="user in filteredUsers">Name: {{user.name}}, Age: {{user.age}}</li> 
    </ul>
  </div>
</template>

<script>
import { filterUsers } from './../mixins/filterUsers.js';

export default {
  mixins: [filterUsers],
  data() {
    return {
      status: 0,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  display: block;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
