<template>
  <v-app>
    <header-bar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import HeaderBar from "@/components/HeaderBar";
export default {
  name: 'App',
  components: {
    HeaderBar,
  },
  data: () => ({
    //
  }),
};
</script>
