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
         
              <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: breakWord;" align="left" >
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="300"  
                            max-width="200"      
                            style="marginTop: 70px; marginBottom: 20px;"                                              
                            src="https://ict.senecacollege.ca/sites/default/files/public_files/Techcom.jpg"
                        > </v-img>
                        <hr>
                        <v-card-title class="title">QA Analyst - Techcom Systems </v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                         
                            <p> Techcom is a leading Canadian software technology provider in the field of strategic inter-organizational portfolio and third-party communication management.</p> 
                            <p> 
                                <ul>
                                <li> Gathered requirements to plan, draft, execute and document Test Cases </li>
                                <li> Worked within and beyond plan - leading to the discovery of critical defects </li>
                                <li> Rigorously and continously tested UX components to achieve an intuitive, universal and user-friendly UI </li>
                                <li> Collaborated with other QA staff, developers and project managers to deliver high-quality product within deadline</li>
                                <li> Addressed service tickets and high-priority work orders for over 15 large clients </li>
                                </ul>
                            </p>                         
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                            <v-btn outlined
                                href="https://www.techcomnet.com/"
                                target="_blank">Techcom    
                            </v-btn>
                        </v-card-actions>     
               </v-card>       
               
               <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: normal;" align="left">   
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"
                            max-width="200"                          
                            src="https://cdn.canada247.info/assets/uploads/c15d29249e77d61cccb700268b1a3013_-ontario-regional-municipality-of-peel-mississauga-ak-tradinghtml.jpg"                 
                        > </v-img>
                        <hr>
                        <v-card-title class="title">Warehouse Logistics - AK Trading</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                                            
                           <p> AK Trading Home Options is an indepdently operated bathroom product retailer which supplies quality products to some of the most successful renovators, contractors, and designers in the GTA.</p> 
                            <p> 
                                <ul>
                                <li> Collaborated with management staff, sales staff and warehouse personnel in order to ascertain an appropriate business process </li>
                                <li> Delivered a scalable inventory management program to address business needs </li>
                                <li> Implemented an inventory store on AppSheet - a mobile-friendly business app supported by GoogleSheets </li>
                                </ul>
                            </p>                        
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                            <v-btn text
                                href="https://www.appsheet.com/"
                                target="_blank">TRY AppSheet
                            </v-btn>
                            <v-btn outlined
                                href="https://www.aktrading.org/"
                                target="_blank">AK Trading    
                            </v-btn>
                        </v-card-actions>
                </v-card>

                 <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: normal;" align="left">   
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"
                            max-width="200"    
                            style="marginTop: 45px; marginBottom: 45px;"              
                            src="http://socialcondosvip.ca/wp-content/uploads/sites/59/2017/10/Pemberton-Group.jpg"
                        > </v-img>  
                        <hr>
                        <v-card-title class="title">Sales Representative (Circle M Realty)</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                      
                            <p> With more than 50 years of experience creating successful residential and commercial devleopments, Pemberton Group is a major player in the evoloution of the city's landscape and landmarks.</p> 
                            <p> 
                                <ul>
                                <li> As Compliance Officer - created and implemented a functional Compliance Regime for the realty to adhere to federal regulations under FINTRAC </li>
                                <li> Self-learned VBA to create an agreement-generating program with built-in sales analysis tools - adopted by builder</li>
                                <li> Conducted an anayliss of software products to write an effective operations manual</li>
                                </ul>
                            </p>                                                        
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row; wordWrap: normal;">
                            <v-btn outlined
                                href="https://pembertongroup.com/"
                                target="_blank">Pemberton Group  
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
            max-width: 20% !important;
            max-height: 20% !important;

        }
    }  

    @media screen and (max-width: 1000px) {
        #container {
            flex-direction: column !important;
        }

        #pic {
            display: none;

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