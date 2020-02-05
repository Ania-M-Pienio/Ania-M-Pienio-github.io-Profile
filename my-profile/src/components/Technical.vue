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
      <v-card flat tile class="max-auto ma-3 pa-1" style="wordWrap: breakWord;">
        <v-img
          id="pic"
          class="white--text"
          max-height="150"
          max-width="500"
          src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        >
        </v-img>
        <hr />
        <v-card-title class="title">Frameworks and Languages</v-card-title>

        <v-card-text align="left" style="fontSize: 16px;">
          <p>
            I am knowledgable about and have hands-on expreience with the
            following frameworks and langauges:
          </p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Frameworks</th>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left"><b>React</b></td>
                  <td class="text-left"><b>Vue.js</b></td>
                  <td class="text-left"><b>Angular</b></td>
                </tr>
                <tr>
                  <td>
                    <v-btn
                      align="center"
                      depressed
                      color="grey darken-4"
                      style="height: 20px; fontSize: 10px; color: gainsboro;"
                      href="https://teams-serve.herokuapp.com/"
                      target="_blank"
                      >View
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      align="center"
                      depressed
                      color="grey darken-4"
                      style="height: 20px; fontSize: 10px; color: gainsboro;"
                      href="https://teams-serve-vu.herokuapp.com/"
                      target="_blank"
                      >View
                    </v-btn>
                  </td>
                  <td>
                    <v-btn
                      align="center"
                      depressed
                      color="grey darken-4"
                      style="height: 20px; fontSize: 10px; color: gainsboro;"
                      href="https://projects-serve.herokuapp.com/"
                      target="_blank"
                      >View
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="spacer"></div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Languages</th>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JavaScript (ES6)</td>
                  <td>TypeScript</td>
                  <td>HTML5 + CSS3</td>
                </tr>
                <tr>
                  <td>Java SE</td>
                  <td>C</td>
                  <td>C++</td>
                </tr>
                <tr>
                  <td>Bash</td>
                  <td>CL</td>
                  <td>IBM RPG</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions
          class="actions"
          style="display: flex; flexDirection: row;"
        >
        </v-card-actions>
      </v-card>

      <v-card flat tile class="max-auto ma-3 pa-1" style="wordWrap: normal;">
        <v-img
          id="pic"
          class="white--text"
          max-height="150"
          max-width="500"
          src="https://images.pexels.com/photos/6390/model-wooden-toy-pressure.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
        </v-img>
        <hr />
        <v-card-title class="title">Database and Enviornments</v-card-title>
        <v-card-text align="left" style="fontSize: 16px;">
          <p>
            My completed projects are created within the following enviornments
            and data is persisted using the listed databases:
          </p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Database</th>
                  <th class="text-left">Model</th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MongoDB</td>
                  <td>Mongoose</td>
                  <td></td>
                </tr>
                <tr>
                  <td>PostgreSQL</td>
                  <td>Sequelize</td>
                  <td>MySQL</td>
                </tr>
                <tr>
                  <td>Oracle Server</td>
                  <td>SQL</td>
                  <td></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <div class="spacer"></div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Enviornments</th>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Node.js + NPM</td>
                  <td>Visual Studio Code</td>
                  <td>MS Visual Studio</td>
                </tr>
                <tr>
                  <td>IntelliJ</td>
                  <td>Eclipse</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions
          class="actions"
          style="display: flex; flexDirection: row;"
        >
        </v-card-actions>
      </v-card>

      <v-card flat tile class="max-auto ma-3 pa-1" style="wordWrap: normal;">
        <v-img
          id="pic"
          class="white--text"
          max-height="150"
          max-width="500"
          src="https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"
        >
        </v-img>
        <hr />
        <v-card-title class="title">Platforms and Libraries</v-card-title>
        <v-card-text align="left" style="fontSize: 16px;">
          <p>
            My deployments are featured on the following platforms and below is
            a list of my favorite go-to libraries:
          </p>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Platforms</th>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Heroku</td>
                  <td>AppSheet</td>
                  <td>GitHub</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Libraries and Utilities</th>
                  <th class="text-left"></th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Express.js</td>
                  <td>Lodash</td>
                  <td>Moment</td>
                </tr>
                <tr>
                  <td>Handlebars</td>
                  <td>jQuery</td>
                  <td>Parcel</td>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                  <td>Material UI</td>
                  <td>Vuetify</td>
                </tr>
                <tr>
                  <td>Angular Material</td>
                  <td>Babel</td>
                  <td>Bcrypt</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
        <v-card-actions
          class="actions"
          style="display: flex; flexDirection: row; wordWrap: normal;"
        >
        </v-card-actions>
      </v-card>
    </v-card>
  </div>
</template>

<style scoped>
.left {
  text-align: left;
}

.spacer {
  height: 10px;
}

@media screen and (max-width: 1500px) {
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

@media screen and (max-width: 430px) {
  .actions {
    flex-direction: column !important;
  }
}
</style>

<script>
export default {};
</script>
