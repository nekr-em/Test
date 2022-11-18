<template>
  <div class="ml-8">
    <header-buttons :people.sync="people"/>
    <people-list :people="people" :human.sync="human"/>
    <update-input :human="human"/>
  </div>
</template>

<script>

import HeaderButtons from "@/components/HeaderButtons";
import PeopleList from "@/components/PeopleList";
import UpdateInput from "@/components/UpdateInput";

export default {
  name: 'HomeView',
  data() {
    return {
      people: [],
      human: '',
    }
  },
  components: {
    UpdateInput,
    PeopleList,
    HeaderButtons,

  },
}
</script>
