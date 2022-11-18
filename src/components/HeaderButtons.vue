<template>
  <div style="display: flex;">
    <v-btn color="primary" class="mr-2 mt-2" @click="postt">
      Отправить
    </v-btn>
    <v-btn color="primary" class="mr-2 mt-2" @click="gett">
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
  methods: {
    gett() {
      this.axios.get('https://crudcrud.com/api/0d0df18f0abe403daa4f1b3f8637c23a/people').then((response) => {
        this.$emit('update:people', response.data)
      });
    },
    postt() {
      this.data.forEach((human)=>{
        this.axios.post('https://crudcrud.com/api/0d0df18f0abe403daa4f1b3f8637c23a/people', human)
      })
    },
  },
}
</script>

<style scoped>
</style>