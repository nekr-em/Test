<template>
<div class="mt-2 input-conteiner">
  <v-text-field
      class="mr-10"
      dense 
      outlined
      v-model="text"
  />
  <v-btn color="primary" class="mr-2 mt-2">
    Сохранить
  </v-btn>
</div>
</template>

<script>
export default {
  props:{
    human: {
      type: String
    },
    humanId: {
      type: Number
    },
  },
  name: "UpdateInput",
  data() {
    return {
      text: '',
    }
  },
  watch: {
    human(value) {
      this.text = value;
    }
  }
}
</script>

<style scoped>

.input-conteiner {
  display: flex;
  align-items: baseline;
  max-width: 50%;
}

</style>