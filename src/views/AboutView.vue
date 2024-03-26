<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <NavBar />
    <div class="container">
      <h1>About</h1>
    </div>
    <FootBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue';
import FootBar from '@/components/Footbar.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    FootBar,
  },
};
</script>
