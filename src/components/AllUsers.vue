<template>
  <div>
    <h2>All Users</h2>
    <div class="radio-btns">
        <p>Sort by:</p>
        <div 
            class="radio-btn-filter"
            v-for="(prop, index) in userFilters"
            v-if="prop != 'image'"
            :key="index">
            <input 
                type="radio"
                :id="prop"
                :value="prop"
                v-model="filter">
            <label 
                :for="prop">{{ prop }}</label>
        </div>
    </div>
    <hr>
    <ul>
        <!-- <li 
            v-for="user in filteredUsers">
            Name: {{user.name}}, 
            Age: {{user.age}} 
            <span class="active" v-if="user.status == 1">, Active</span> 
            <span class="inactive" v-else>, Inactive</span>
        </li>  -->
        <User 
            v-for="(user, index) in filteredUsers"
            :key="index"
            :user="user" />
    </ul>
  </div>
</template>

<script>
import User from "./User.vue";
import { filterUsers } from "./../mixins/filterUsers.js";

export default {
  mixins: [filterUsers],
  data() {
    return {
      status: null
    };
  },
  components: {
    User
  }
};
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
.radio-btns {
  padding-bottom: 1rem;
}
.radio-btn-filter {
  display: inline-block;
  padding-right: 0.5rem;
}
</style>
