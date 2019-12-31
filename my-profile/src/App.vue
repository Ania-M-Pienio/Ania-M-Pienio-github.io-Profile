<template>
  <v-app>
    <p style="height: 30px; color: black;"> <span v-if="portfolio"> </span> </p>
    <v-app-bar app style="backgroundColor: black;" class="bar">
      <v-toolbar-title class="headline text-uppercase" style="color: gainsboro;">
        <span>cv</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="nav">
      <drop 
        style="marginRight: 20px;"
        v-on:resection="changeSection"
      >
      </drop>    
      <v-spacer></v-spacer> 
      <v-btn
        class="links"
        text
        @click="showPortfolio"
      >
        <v-icon style="color: gainsboro; marginRight: 10px;"> mdi-briefcase </v-icon>
        <span class="mr-2" style="color: gainsboro;">Portfolio</span>
      </v-btn>
       <v-btn
        class="links"
        text
        href="https://github.com/Ania-M-Pienio?tab=repositories"
        target="_blank"
      >
        <v-icon style="color: gainsboro; marginRight: 10px;"> mdi-github-box </v-icon>
        <span class="mr-2" style="color: gainsboro;">Github</span>
      </v-btn>
       <v-btn
        class="links"
        text
        href="https://www.linkedin.com/in/letscreatetogether/"
        target="_blank"
      >
         <v-icon style="color: gainsboro; marginRight: 10px;"> mdi-linkedin-box </v-icon>
        <span class="mr-2" style="color: gainsboro;">LinkedIn</span>
      </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <div class="flex-spacer">
      <main-container 
      
        class="main" 
        :portfolio="portfolio" 
        :section="section"
        v-on:sliding="resetPortfolio">
      </main-container>
      </div>
      <div id="toBottom"></div>
    </v-content>

  </v-app>
</template>

<style scoped>

.links:hover {
  background-color: rgb(105, 105, 105);
}

.nav {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 430px) {
  .nav {
    flex-direction: column;
    margin-top: 100px;
  }  
  .bar {
    height: 150px !important;
  }

  .links {
    justify-content: left;
  }
  .main {
    height: 2000px;
  }
}  



</style>

<script>
import MainContainer from './components/MainContainer';
import Drop from './components/Drop';

export default {
  name: 'App',
  data: function() {
    return {
      portfolio: false,
      section: 0
    }
  },
  components: {
    MainContainer,
    Drop
  },
  methods: {
    showPortfolio() {
      this.section = 5;
      let element = document.getElementById("toInfo");
      element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"}); 

    },
    resetPortfolio() {
      this.portfolio = false;
    },
    changeSection(id) {
      this.section = id;
      let element = document.getElementById("toInfo");
      element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"}); 
      // console.log(`this is the new section: ${this.section}`);
    }
  }
};
</script>
