<template>
  <v-parallax
    height="850"
    dark
    src="https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  >
    <!-- src="https://images.pexels.com/photos/843266/pexels-photo-843266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1050&w=1560" -->
    <!-- src="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" -->
    <!-- src="https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" -->
    <div>
      <div align="center" justify="center">
        <v-img
          src="../assets/Profile.png"
          aspect-ration="1"
          max-width="450"
          max-height="450"
          style="marginBottom: 50px; border: 25px solid white;"
        >
        </v-img>
      </div>
    </div>

    <div
      class="social-media">
      <div class="social-button">
        <v-btn
          icon
          depressed
          href="https://twitter.com/AniaPienio"
          target="_blank"
        >
          <div class="buttonCircle">
            <v-icon size="60" color="red lighten-2">
              mdi-twitter
            </v-icon>
          </div>
        </v-btn>
      </div>
      <div class="social-button">
        <v-btn
          icon
          depressed
          href="https://www.linkedin.com/in/aniapienio"
          target="_blank"
        >
          <div class="buttonCircle">
            <v-icon size="60" color="red lighten-2">
              mdi-linkedin
            </v-icon>
          </div>
        </v-btn>
      </div>
      <div class="social-button">
        <v-btn
          icon
          depressed
          href="https://www.facebook.com/ania.pienio"
          target="_blank"
        >
          <div class="buttonCircle">
            <v-icon size="60" color="red lighten-2">
              mdi-facebook
            </v-icon>
          </div>
        </v-btn>
      </div>
    </div>

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
.social-media {
  margin-left: -20px;
  margin-right: -20px;
  padding-top: 5%;
  padding-bottom: 0.2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
  border-bottom: 8px solid #E57373;
  background-image: linear-gradient( rgba(255, 255, 255, 0), white);
}

.social-button {
  padding: 10%;
  padding-top: 0;
  padding-bottom: 0;
}
</style>

<script>
export default {};
</script>
