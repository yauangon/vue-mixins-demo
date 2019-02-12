<template>
    <li>
        Name: {{user.name}}, 
        Age: {{user.age}} 
        <span class="active" v-if="user.status == 1">, Active</span> 
        <span class="inactive" v-else>, Inactive</span>
    </li> 
</template>

<script>
export default {
    props: ["user"]
}
</script>

<style scoped>
    span.active {
        color: green;
    }
    span.inactive {
        color: red;
    }
</style>
