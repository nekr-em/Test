<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
      />
      <span>Некрасова Екатерина</span>
    </div>
    <span class="ml-auto mr-2">Тестовое задание</span>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped>

</style>