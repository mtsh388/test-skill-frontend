<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="container">
      <HelloWorld />
      <FootBar />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import FootBar from '@/components/Footbar.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FootBar,
  },
};
</script>
