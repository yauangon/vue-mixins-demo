<template>
  <div>
    <h2>All Users</h2>
    <div class="radio-btns">
        <p>Sort by:</p>
        <div 
            class="radio-btn-filter"
            v-for="(prop, index) in userProperties"
            :key="index">
            <input 
                type="radio"
                :id="prop"
                :value="prop"
                v-model="sortCriteria">
            <label 
                :for="prop">{{ prop }}</label>
        </div>
    </div>
    <hr>
    <ul>
        <User 
            v-for="(user, index) in sortedUsers"
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
.radio-btns {
  padding-bottom: 1rem;
}
.radio-btn-filter {
  display: inline-block;
  padding-right: 0.5rem;
}
</style>
