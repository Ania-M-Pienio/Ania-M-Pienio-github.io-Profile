<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-3"
          light
          v-on="on"
        >
          Profile
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="runSection(index)"       
        
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
     data: () => ({
      items: [
        { title: 'About Me'},
        { title: 'Technical Skills'},     
        { title: 'Education'},  
        { title: 'Experience'},
        { title: 'Contact'},
      ],
    }),
    methods: {
        runSection(id) {
            // console.log(`this is the new section id: ${id}`);
            this.$emit('resection', id)
        }
    }
}
</script>