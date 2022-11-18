<template>
  <div>
    <header-buttons :people.sync="people"/>
    <people-list :people="people"/>
  </div>
</template>

<script>

import HeaderButtons from "@/components/HeaderButtons";
import PeopleList from "@/components/PeopleList";

export default {
  name: 'HomeView',
  data() {
    return {
      people: [],
    }
  },
  components: {
    PeopleList,
    HeaderButtons,

  },
}
</script>
