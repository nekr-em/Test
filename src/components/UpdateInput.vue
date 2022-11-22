<template>
  <div v-if="visible===true" class="mt-2 input-conteiner">
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
      visible: false,
    }
  },
  watch: {
    human(value) {
      this.text = value;
      this.visible = true;
    }
  },
  methods: {
    putt() {
      this.axios.put(`${this.$apiUrl}${this.humanId}`, {name: this.text}).then(() => {
        this.$emit('gett')
        this.visible=false
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