<template>
  <div class="social-media">
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
  border-bottom: 8px solid #e57373;
  background-image: linear-gradient(rgba(255, 255, 255, 0), white);
}

.social-button {
  padding: 10%;
  padding-top: 0;
  padding-bottom: 0;
}
</style>

<script>
export default {
  
};
</script>
