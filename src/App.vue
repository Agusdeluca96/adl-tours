<template>
  <div id="app">
    <navigation-menu />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
  name: 'App',

  components: {
    TheFooter,
    NavigationMenu
  }
};
</script>
