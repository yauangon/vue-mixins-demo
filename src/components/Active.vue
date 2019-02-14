<template>
  <div>
    <h2>Active Users</h2>
    <ul>
      <li>
        <span><strong>NAME</strong></span>
        <span><strong>CREATED</strong></span>
        </li>
      <li 
        v-for="(user, index) in sortedUsers"
        :key="index">
        <span>{{user.name}}</span>
        <span>{{user.created}}</span>
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
      status: 1
    };
  }
};
</script>

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
  width: 50%;
  padding: 0.1rem 0;
}
</style>
