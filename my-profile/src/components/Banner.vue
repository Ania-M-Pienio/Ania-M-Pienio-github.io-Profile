<template>
  <v-parallax
    height="750"
    dark
    src="https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  >

    <div>
      <div align="center" justify="center">
        <v-img
          src="../assets/Profile.png"
          aspect-ration="1"
          max-width="450"
          max-height="450"
          style="marginBottom: 50px; border: 15px solid #FAFAFA;"
        >
        </v-img>
      </div>
    </div>

   <social></social>
 
    <div
      align="center"
      justify="center"
      style="
                backgroundColor: rgb(255, 255, 255, 0.9); 
                marginLeft: -40px; 
                marginRight: -40px; 
                padding: 15px;"
    >
      <h1 class="display-3 font-weight-light mb-4" style="color: #32332f;">
        Ania M. Pienio
      </h1>
      <h3 class="subheading" style="color: #32332f;">
        Front-End Web Developer
      </h3>
    </div>

  </v-parallax>
</template>

<style scoped>

</style>

<script>
import Social from "./Social";
export default {
    components: { Social }
};
</script>
