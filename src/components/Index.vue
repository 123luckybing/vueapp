<template>
  <ul>
    <li><router-link to='/HelloWorld'>HelloWorld</router-link></li>
    <li><router-link to='/TodoList'>TodoList</router-link></li>
  </ul>
</template>
<script>
export default {
}
</script>
<style scoped>
  a {
    padding: 10px;
    background:pink;
    color: black;
    text-decoration: none;
  }

  li {
    display: inline-block;
    list-style: none;
  }
</style>
