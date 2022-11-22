<template>
  <div style="display: flex;" class="mt-3">
    <v-btn color="primary" class="mr-2" @click="postt">
      Отправить
    </v-btn>
    <v-btn color="primary" class="mr-2" @click="gett">
      Получить
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      type: Array,
    }
  },

  data() {
    return {
      names: ['Иван', 'Петр', 'Антон', 'Михаил', 'Владимир', 'Артем', 'Андрей'],
      lastNames: ['Иванов', 'Петров', 'Антонов', 'Михайлов', 'Владимиров', 'Артемов', 'Андреев'],
  }
  },
  name: "HeaderButtons",
  created() {
    this.gett()
  },
  methods: {
    gett() {
      this.axios.get(this.$apiUrl).then((response) => {
        this.$emit('update:people', response.data)
      });
    },
    postt() {
      for (let i=0; i<5; i++) {
        let human = {
          name: `${this.names[this.getRandom(this.names.length)]} ${this.lastNames[this.getRandom(this.lastNames.length)]}`,
        }
        this.axios.post(this.$apiUrl, human)
      }
    },
    getRandom(max) {
      return Math.floor(Math.random() * (max + 1))
    },
  },
}
</script>

<style scoped>
</style>