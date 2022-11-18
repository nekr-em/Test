<template>
<div class="mt-2 ml-2">
  <v-chip
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
    }
  },
}
</script>

<style scoped>

</style>