<template>
<div class="mt-2 ml-2">
  <v-chip
      @click="changeHuman(human.name)"
      class="mr-2"
      close
      v-for="human in people"
      :key="human._id"
  >
    {{human.name}}
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
  },
  
  methods: {
    changeHuman(name) {
      this.$emit('update:human', name)
    }
  },
}
</script>

<style scoped>

</style>