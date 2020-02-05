<template>
  <div
    class="main-container"
    style="display: flex; flexDirection: row; justifyContent: center;"
  >
    <v-card
      id="container"
      class="max-auto"
      style="display: flex; flexDirection: row;"
      color="grey lighten-5"
      flat
      tile
      min-width="100"
    >
      <v-card flat tile class="max-auto ma-3 pa-8" style="wordWrap: breakWord;">
        <v-img
          id="pic"
          class="white--text"
          max-height="400"
          max-width="600"
          src="https://images.pexels.com/photos/164531/pexels-photo-164531.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        >
        </v-img>
      </v-card>

      <v-card
        id="toInput"
        flat
        tile
        class="max-auto ma-3 pa-8"
        style="wordWrap: breakWord;"
        align="left"
      >
        <v-img
          id="pic"
          class="white--text"
          max-height="300"
          max-width="500"
          src="https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
        </v-img>
        <hr />
        <v-card-title class="title">Let's Stay in Touch </v-card-title>

        <div v-show="response">
          <div v-if="response === `added`">
            <div class="response">
              <span class="responseTitle"> THANK YOU! </span>
              Your email:
              <span class="responseEmail"> {{ subscriber.Email }} </span> has
              been added
            </div>
          </div>
          <div v-else>
            <div class="response">
              <span class="responseTitle"> OOPS! </span>
              Your email:
              <span class="responseEmail"> {{ subscriber.Email }} </span> is
              already on the list
              <span class="responseSuggest">
                Perhaps
                <a @click="tryAgain" class="responseTry"> try again </a>, using
                a different email
              </span>
            </div>
          </div>
        </div>
        <v-card-text
          v-show="!response"
          align="left"
          style="fontSize: 16px; marginTop: 20px;"
        >
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="subscriber.Email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="subscriber.FirstName"
              :rules="firstNameRules"
              label="First Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="subscriber.LastName"
              :rules="lastNameRules"
              label="Last Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="subscriber.PhoneNum"
              label="Phone Number"
            ></v-text-field>
            <v-text-field
              v-model="subscriber.Company"
              label="Company or Organization"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions
          class="actions"
          style="display: flex; flexDirection: row;"
        >
          <v-btn
            :disabled="isSubmitted"
            depressed
            color="grey darken-4"
            style="color: gainsboro;"
            @click="submit"
          >
            Subscribe
          </v-btn>
          <v-btn
            depressed
            color="grey darken-4"
            style="color: gainsboro;"
            @click="clear"
          >
            Clear
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card
        flat
        tile
        class="max-auto ma-3 pa-8"
        style="wordWrap: breakWord;"
        align="left"
      >
        <v-img
          id="pic"
          class="white--text"
          max-height="400"
          max-width="600"
          src="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        >
        </v-img>
      </v-card>
    </v-card>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");
.left {
  text-align: left;
}

.response {
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.responseTitle {
  font-size: 40px;
  font-family: "Varela Round", sans-serif;
}

.responseEmail {
  color: rgb(231, 52, 117);
}

.responseSuggest {
  font-size: 15px;
  font-weight: 900;
}

.responseTry {
  color: rgb(231, 52, 117);
}
.responseTry:hover {
  text-decoration: underline;
}

@media screen and (max-width: 1600px) {
  #container {
    flex-direction: column !important;
  }
  .title {
    text-align: center !important;
  }
  #pic {
    max-width: 100% !important;
  }
}
</style>

<script>
import moment from "moment";
import { saveData } from "../data";
export default {
  data: function() {
    return {
      valid: true,
      subscriber: {
        FirstName: "",
        LastName: "",
        Company: "",
        PhoneNum: "",
        Email: "",
        pattern: ""
      },
      isSubmitted: false,
      response: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      firstNameRules: [v => !!v || "First Name is required"],
      lastNameRules: [v => !!v || "Last Name is required"]
    };
  },

  methods: {
    submit() {
      let subscriber = {
        FirstName: this.subscriber.FirstName,
        LastName: this.subscriber.LastName,
        Company: this.subscriber.Company,
        PhoneNum: this.subscriber.PhoneNum,
        Email: this.subscriber.Email,
        Date: moment()
      };
      if (this.$refs.form.validate()) {
        saveData("subscribers", subscriber)
          .then(response => {
            this.isSubmitted = true;
            if (response == `added`) {
              this.response = `added`;
            } else if (response == `duplicate key`) {
              this.response = `duplicate`;
            }
          })
          .catch(err => {

          });
      }
    },

    tryAgain() {
      this.isSubmitted = false;
      this.response = ``;
      this.subscriber.Email = "";
    },

    clear() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.isSubmitted = false;
      this.response = ``;
    }
  }
};
</script>
