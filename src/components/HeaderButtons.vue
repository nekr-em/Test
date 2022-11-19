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
      data: [
        {
          name: "Имя Фамилия"
        },
        {
          name: "Имя Фамилия2"
        },
        {
          name: "Имя Фамилия3"
        },
        {
          name: "Имя Фамилия4"
        },
        {
          name: "Имя Фамилия5"
        },
        {
          name: "Имя Фамилия6"
        },
        {
          name: "Имя Фамилия7"
        },
        {
          name: "Имя Фамилия8"
        },
      ],
    }
  },
  name: "HeaderButtons",
  created() {
    this.gett()
  },
  methods: {
    gett() {
      this.axios.get('https://crudcrud.com/api/eefa33ebe8434f3da10db11c62feaa8d/people').then((response) => {
        this.$emit('update:people', response.data)
      });
    },
    postt() {
      this.data.forEach((human)=>{
        this.axios.post('https://crudcrud.com/api/eefa33ebe8434f3da10db11c62feaa8d/people', human)
      })
    },
  },
}
</script>

<style scoped>
</style>