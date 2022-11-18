<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <div class="d-flex align-center">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
      />
      <span>Некрасова Екатерина</span>
    </div>
    <span class="ml-auto mr-2">Тестовое задание</span>
    <!-- <span> {{obj.array2[0]}}} </span> -->
 
   </v-app-bar>
 </template>
 
 <script>
 export default {
   name: "HeaderBar",
   data() {
     return {
       obj: {
         array1: [
           'vuetify-loader',
         ],
         array2: [
           'vuetify-loader',
         ]
       },
       
       num: [
           1, 2, 3, 4, 5,
       ]
     }
   },
   methods: {
     newElement() {
       this.obj.array2.push('Иван')
     },
     log(el) {
       console.log(el)
     }
     
   },
   
   created() {
     this.newElement()
     this.log(this.obj)
     this.obj.num = this.num
     this.log(this.obj)
   }
 }
 </script>
 
 <style scoped>

 
 </style>