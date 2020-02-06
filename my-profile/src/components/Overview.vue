<template>
    <div 
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
              <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: breakWord;" >
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"  
                            max-width="500"               
                            src="https://images.pexels.com/photos/2306898/pexels-photo-2306898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        > </v-img>
                        <hr/>
                        <v-card-title class="title">Team Skills</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                         
                            <p> As an adaptive team contributor, I embrace diversity among my colleagues and thrive in multicultural environments.  When each team member brings their own unique perspective to the table, all obstacles can be overcome.</p> 
                            <p> My experience in teams includes long-term work on collaborative projects and includes progress tracking, commitment to objectives, continuous feedback and building cohesion. </p>                       
                            <p> I recognize that as organizations shift a bulk of their team work to the Cloud, iterative and self-organized individuals become critical components of success. For this reason, I am deeply committed to Agile and its 12 Principles of software development.  </p>    
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                            <v-btn text
                                href="https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/"
                                target="_blank">12 Principles
                            </v-btn>
                            <v-btn outlined
                                href="https://www.agilealliance.org/"
                                target="_blank">The Agile Alliance    
                            </v-btn>
                        </v-card-actions>     
               </v-card>       
               
               <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: normal;">   
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"
                            max-width="500"                          
                            src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg"
                        > </v-img>
                        <hr>
                        <v-card-title class="title">Testing and Quality</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                                            
                            <p> My ultimate ambition is to deliver a high-quality and stress-tested product to my stakeholders.  I have experience planning, drafting and executing test cases to deliver on that ambition. </p>                           
                            <p> In order to ensure a flawless User Experience (UX) I have committed many hours to the meticulous testing of the front-end interface, to validating it against the back-end database, and to evaluating and testing the work of others. </p>   
                            <p> I follow the 4 Golden Rules of User Interface Design. </p>                         
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                            <v-btn text
                                href="https://theblog.adobe.com/4-golden-rules-ui-design/"
                                target="_blank"
                            >4 Golden Rules</v-btn>
                            <v-btn outlined
                                href="https://theblog.adobe.com/"
                                target="_blank">The Adobe Blog    
                            </v-btn>
                        </v-card-actions>
                </v-card>

                 <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: normal; borderBottom: 5px solid #EF9A9A;">   
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"
                            max-width="500"                
                            src="https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg"
                        > </v-img>  
                        <hr>
                        <v-card-title class="title">Technical Writing</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                      
                            <p>From the very first drafted design to the last chapter in the technical manual - a well-documented software project is always a top priority for me. </p>  
                            <p>For this reason, I have completed courses in Business Writing, Professional Communication and Test Case Drafting. Since then, I have applied those skills into practice in many professional settings. </p>                           
                            <p>Proper and current documentation enhances face-to-face communication and establishes a shared history for future generations of employees to draw upon for knowledge and inspiration.  </p>                      
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row; wordWrap: normal;">
                            <v-btn text
                                href="https://plan.io/blog/technical-documentation/"
                                target="_blank"
                            >5 Step Docs</v-btn>
                            <v-btn outlined
                                href="https://plan.io/"
                                target="_blank">Plan.io    
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

    @media screen and (max-width: 430px) {
        .actions {
            flex-direction: column !important;
        }
    }
</style>

<script>
export default {
    
}
</script>