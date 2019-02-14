<template>
    <li>
        <img 
            :src="user.image" 
            :alt="user.name">
        <h4>{{user.name}}</h4>
        <div :class="{ 'active': user.status == 1, 'inactive': user.status == 0 }"></div>
        <span>Age: {{user.age}}</span>
        <span>Created: {{ user.created }}</span>
    </li> 
</template>

<script>
export default {
  props: ["user"]
};
</script>

<style scoped>
li {
  padding: 1rem;
  border: 0.5px solid #ccc;
}
li img {
  border-radius: 50%;
  width: 3rem;
  float: left;
  margin-right: 1rem;
}
li h4 {
  margin: 0 0 0.5rem 0;
}
li p {
  margin: 0;
}
li span {
  display: inline-block;
  width: 40%;
}
div.active,
div.inactive {
  width: 1rem;
  height: 1rem;
  float: right;
  border-radius: 50%;
}
div.active {
  background-color: green;
}
div.inactive {
  background-color: red;
}
</style>
