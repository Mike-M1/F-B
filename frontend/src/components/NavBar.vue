<template>
    <div class=" flex flex-row justify-between items-center w-4/5 p-2 
    text-sm m-auto  text-white">
  <router-link to="/mensProducts" class="logo">
    <h1>Mens Products</h1>
  </router-link>
  <router-link to="/womensProducts" class="logo">
    <h1>Womens Products</h1>
  </router-link>
  <router-link to="/about" class="logo">
    <h1>About</h1>
  </router-link>
  <router-link to="/login" class="logo">
    <h1>Login</h1>
  </router-link>
  <router-link to="/cart" class="logo">
    <h1>Cart</h1>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}

</script>

<style scoped>

div > *{
  padding: 5px;;
}
</style>
