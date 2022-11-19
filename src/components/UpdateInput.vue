<template>
  <div class="mt-2 input-conteiner">
    <v-text-field
        class="mr-10"
        dense
        outlined
        v-model="text"
    />
    <v-btn color="primary" class="mr-2 mt-2"
           @click="putt">
      Сохранить
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    human: {
      type: String
    },
    humanId: {
      type: String
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
  },
  methods: {
    putt() {
      this.axios.put(`https://crudcrud.com/api/eefa33ebe8434f3da10db11c62feaa8d/people/${this.humanId}`, {name: this.text}).then(() => {
        this.$emit('gett')
      })
    }
  }
}
</script>

<style scoped>

.input-conteiner {
  display: flex;
  align-items: baseline;
  max-width: 30%;
}

</style>