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
      this.axios.delete(`https://crudcrud.com/api/eefa33ebe8434f3da10db11c62feaa8d/people/${id}`).then(() => {
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