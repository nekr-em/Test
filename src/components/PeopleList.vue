<template>
  <div class="mt-3 width">
    <v-chip
        @click="changeHuman(human.name, human._id)"
        class="mr-2 mb-1"
        @click:close="dell(human._id)"
        close
        v-for="human in people"
        :key="human._id"
    >
      {{ human.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "PeopleList",
  props: {
    people: {
      type: Array,
    },
    human: {
      type: String
    },
    humanId: {
      type: String
    },
  },

  methods: {
    changeHuman(name, id) {
      this.$emit('update:human', name)
      this.$emit('update:humanId', id)
    },
    dell(id) {
      this.axios.delete(`https://crudcrud.com/api/b6dde83212b545d08d09a8a12e43fcc0/people/${id}`).then(() => {
        this.$emit('gett')
      })
    },
  },
}
</script>

<style scoped>

.width {
  display: flex;
  max-width: 30%;
  flex-wrap: wrap;
}
</style>