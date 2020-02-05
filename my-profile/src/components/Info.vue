<template>
  <div class="info-container">
    <div align="center" style="paddingTop: 10px; backgroundColor: #68696b;">
      <div
        class="infoBar"
        style="display: flex; flexDirection: row; justifyContent: center; padding: 20px;"
      >
        <v-btn icon depressed @click="slideBackward" class="slideButtons">
          <div class="buttonCircle">
            <v-icon x-large color="red lighten-3">
              mdi-chevron-left-circle
            </v-icon>
          </div>
        </v-btn>

        <div
          class="display-2 font-weight-light mb-4"
          style="width: 800px; color: #ededed; marginLeft: 30px;  marginRight: 30px;"
        >
          {{ Section.title }}
        </div>

        <v-btn icon depressed @click="slideForward" class="slideButtons">
          <div class="buttonCircle">
            <v-icon x-large color="red lighten-3">
              mdi-chevron-right-circle
            </v-icon>
          </div>
        </v-btn>
      </div>

      <overview v-if="Section.number == 0"> </overview>
      <technical v-if="Section.number == 1"> </technical>
      <education v-if="Section.number == 2"> </education>
      <experience v-if="Section.number == 3"> </experience>
      <reach v-if="Section.number == 4"> </reach>
      <portfolio v-if="Section.number == 5"> </portfolio>

      <div class="spacer"></div>
      <div class="circleButtons">
        <v-btn
          icon
          large
          depressed
          v-for="title in titles"
          :key="title"
          @click="slideTo(title)"
        >
          <v-icon
            :color="
              Section.number == titles.indexOf(title)
                ? 'red lighten-2'
                : 'grey darken-2'
            "
          >
            mdi-moon-full
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.infoBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 20px;
}

.buttonCircle {
  margin-top: 20px;
  width: 80px;
  height: 80px;
  border: 1px solid #E57373;
  border-radius: 40px 40px 40px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.buttonCircle:hover {
  background-color: #E57373;
}

.circleButtons {
  height: 50px;
  background-color: rgba(28, 28, 31, 0.8);
}

.slideButtons {
  background-color: none !important;
}

.slideButtons:active {
  background-color: none !important;
}

.spacer {
  height: 50px;
}

@media screen and (max-width: 1600px) {
  .buttonCircle {
    margin-top: 20px;
    width: 80px;
  }
}
</style>

<script>
import Overview from "./Overview";
import Technical from "./Technical";
import Education from "./Education";
import Experience from "./Experience";
import Reach from "./Reach";
import Portfolio from "./Portfolio";

export default {
  name: "Info",
  components: {
    Overview,
    Technical,
    Education,
    Experience,
    Reach,
    Portfolio
  },
  data: function() {
    return {
      Section: {
        title: "About Me",
        number: 0
      },
      titles: [
        "About Me",
        "Technical Skills",
        "Accolades and Education",
        "Professional Experience",
        "Reach Me",
        "Portfolio"
      ]
    };
  },
  props: ["portfolio", "section"],
  watch: {
    portfolio: function(newVal) {
      if (newVal == true) {
        this.Section.number = 5;
        this.Section.title = this.titles[this.Section.number];
      }
    },
    section: function(newVal) {
      this.Section.title = this.titles[newVal];
      this.Section.number = newVal;
    }
  },
  methods: {
    slideForward() {
      if (this.Section.number == 5) {
        this.Section.number = 0;
      } else {
        this.Section.number++;
      }
      this.Section.title = this.titles[this.Section.number];
      this.$emit("sliding");
    },
    slideBackward() {
      if (this.Section.number == 0) {
        this.Section.number = 5;
      } else {
        this.Section.number--;
      }
      this.Section.title = this.titles[this.Section.number];
      this.$emit("sliding");
    },
    slideTo(title) {
      let index = this.titles.indexOf(title);
      this.Section.number = index;
      this.Section.title = this.titles[this.Section.number];
      this.$emit("sliding");
    }
  }
};
</script>
