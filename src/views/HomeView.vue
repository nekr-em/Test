<template>
  <div class="ml-8">
    <header-buttons ref="headerButtons" :people.sync="people"/>
    <people-list :people="people" :human.sync="human" :human-id.sync="humanId" @gett="gett"/>
    <update-input @gett="gett" :human="human" :human-id="humanId"/>
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
      humanId: '',
    }
  },
  components: {
    UpdateInput,
    PeopleList,
    HeaderButtons,

  },
  methods: {
    gett(){
      this.$refs.headerButtons.gett();
    },
  },
}
</script>
