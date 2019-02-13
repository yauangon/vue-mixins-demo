<template>
  <div>
    <h2>Inactive Users</h2>
    <ul>
      <li>
        <span><strong>NAME</strong></span>
        <span><strong>AGE</strong></span>
        <span><strong>CREATED</strong></span>
        </li>
      <li 
        v-for="user in filteredUsers">
        <span>{{user.name}}</span>
        <span>{{user.age}}</span>
        <span>{{user.created_at}}</span>
      </li> 
    </ul>
  </div>
</template>

<script>
import { filterUsers } from "./../mixins/filterUsers.js";

export default {
  mixins: [filterUsers],
  data() {
    return {
      status: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-bottom: 2rem;
  border: 0.5px solid #ccc;
}
ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  display: block;
  margin: 0 10px;
}
ul li:first-child {
  margin-bottom: 0.5rem;
}
ul li span {
  display: inline-block;
  width: 33.3%;
  padding: 0.1rem 0;
}
</style>
