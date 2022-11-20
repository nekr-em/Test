<template>
  <div class="mt-2 input-conteiner">
    <v-text-field 
        v-if="visible===true"
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
      this.axios.put(`https://crudcrud.com/api/b6dde83212b545d08d09a8a12e43fcc0/people/${this.humanId}`, {name: this.text}).then(() => {
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