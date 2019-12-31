<template>
    <div 
        id="toPortfolio"
        class="main-container"
        style="display: flex; flexDirection: row; justifyContent: center;">   
        
        <v-card
            id="container"
            class="max-auto"
            style="display: flex; flexDirection: row;"
            color="grey lighten-5"
            flat 
            tile 
            min-width="100"      
        >         
              <v-card flat tile class="max-auto ma-3 pa-8" style="wordWrap: breakWord;" align="center" >
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="300"  
                            max-width="300"                                                  
                            src="https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png"
                        > </v-img>
                        <hr style="marginTop: 25px;">
                        <v-card-title class="title">Teams Portal - Vue </v-card-title>
                        <v-card-text align="left" style="fontSize: 16px; marginTop: 20px;"> 
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                              <v-btn outlined
                                href="https://teams-serve-vu.herokuapp.com/"
                                target="_blank">VIEW PROJECT
                            </v-btn>
                                               
                        </v-card-actions>                          
                        
               </v-card>         
              <v-card flat tile class="max-auto ma-3 pa-8" style="wordWrap: breakWord; " align="center" >
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="300"  
                            max-width="200"                                                  
                            src="https://cdn.worldvectorlogo.com/logos/react.svg"
                        > </v-img>
                        <hr style="marginTop: 50px;">
                        <v-card-title class="title"> Teams Portal - React </v-card-title>
                        <v-card-text align="left" style="fontSize: 16px; marginTop: 20px;">                                                     
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                              <v-btn outlined
                                href="https://teams-serve.herokuapp.com/"
                                target="_blank">VIEW PROJECT   
                            </v-btn>                                               
                        </v-card-actions>     
               </v-card> 
               <v-card flat tile class="max-auto ma-3 pa-8" style="wordWrap: breakWord;" align="center" >
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="300"  
                            max-width="200"                                                  
                            src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
                        > </v-img> 
                        <hr style="marginTop: 20px;">
                        <v-card-title class="title"> Projects Portal - Angular </v-card-title>
                        <v-card-text align="left" style="fontSize: 16px; marginTop: 20px;">                                                     
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                              <v-btn outlined
                                href="https://projects-serve.herokuapp.com/"
                                target="_blank">VIEW PROJECT
                            </v-btn>
                                               
                        </v-card-actions> 
               </v-card>                   
        </v-card>   
    </div> 
    
</template>

<style scoped>
 .left {
        text-align: left;
    }

     @media screen and (max-width: 1000px) {
        #container {
            flex-direction: column !important;
        }
        .title {
            text-align: center !important;
        }
        #pic {
            max-width: 200px !important;
            max-height: 300px !important;
        }
    }  

    @media screen and (max-width: 430px) {
        .actions {
            flex-direction: column !important;
        }

        #pic {
            max-width: 120px !important;
            max-height: 125px !important;
        }

        .actions {
             text-align: center !important;
        }
    }

</style>

<script>
export default {
    
}
</script>