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
                            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        > </v-img>
                        <hr>
                        <v-card-title class="title">Computer Programming Diploma - Seneca College</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                         
                            <p> Computer Programming at Seneca College is a 2-year diploma accredited by the Association for Information Technology Professionals.</p> 
                            <p> The program provides a variety of skills ranging from hands-on mobile development all the way to the mastering of high-level theoretical concepts. </p>      
                        <div class="list" style ="display: flex; flex-direction: row;">
                            <p style="marginRight: 40px;"> <b> Relevant Course Work: </b> <br> 
                            <ul>
                                <li> Unix/Linux and the Internet </li>
                                <li> Computer Principles for Programmers </li> 
                                <li> Web Programming Principles </li>
                                <li> Object-Oriented Programming (C++, Java) </li>
                                <li> Web Programming Tools and Frameworks </li>
                                <li> Web Programming for Apps and Services </li>  
                                <li> Applied Professional Communications </li>
                                <li> Business Report Writting </li>  
                            </ul>        
                            </p> 

                            <p> <b> Accolades: </b> <br> 
                            <ul>
                                <li> President's Honour List (all semesters) </li>
                                <li> FSOSS Student Volunteer 2018</li>  
                            </ul>    
                            </p>  
                        </div>

                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                            <v-btn text
                                href="https://fsoss.senecacollege.ca/2018/"
                                target="_blank">FSOSS
                            </v-btn>
                            <v-btn outlined
                                href="https://www.senecacollege.ca/home.html"
                                target="_blank">Seneca College    
                            </v-btn>
                        </v-card-actions>     
               </v-card>       
               
               <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: normal;">   
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"
                            max-width="500"                          
                            src="https://i.cbc.ca/1.2985143.1499893210!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/york-university-toronto-ontario.jpg"
                        > </v-img>
                        <hr>
                        <v-card-title class="title"> Bachelor of Arts Political Science - York University </v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;">                                            
                            <p> Renowned for its interdisciplinary and innovative programs, York produces students that think critically and are able to analyze independently. </p>                           
                            <p> York is a public research and writing university that has international appeal, bringing together diverse sets of people seeking a well-rounded education. </p>   
                        <div class="list" style ="display: flex; flex-direction: row;">
                             <p> <b> Accolades: </b> <br> 
                             <ul>
                                <li> York University Faculty of Arts Sessional Academic Achievement List </li>
                                <li> York University Excellent Academic Standing Award and Bursary </li>  
                                <li> Student Ambassador at the Canadian Mission to the European Union </li>
                                <li> Executive President of the Polish Student Association at York University (PSAY) </li>
                            </ul>
                            </p>  
                        </div>                         
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row;">
                            <v-btn text
                                href="https://www.uvic.ca/interdisciplinary/europe/study-tour/index.php"
                                target="_blank"
                            >Student Mission to the EU</v-btn>
                            <v-btn outlined
                                href="https://theblog.adobe.com/"
                                target="_blank">YorkU   
                            </v-btn>
                        </v-card-actions>
                </v-card>

                 <v-card flat tile class="max-auto ma-3 pa-2" style="wordWrap: normal;">   
                        <v-img
                            id="pic"
                            class="white--text"
                            max-height="200"
                            max-width="500"                
                            src="https://images.pexels.com/photos/1076815/pexels-photo-1076815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        > </v-img>  
                        <hr>
                        <v-card-title class="title">RECO Accreditation and Liscence - Orea College</v-card-title>
                        <v-card-text align="left" style="fontSize: 16px;"> 
                            <p> Real Estate as a profession is one the most challenging and also rewarding careers in the GTA. </p> 
                            <p> The Real Estate Council of Ontario has mandated a program of study that includes immersive work in principles of appraisal, contract law, business ethics, duty of care, fiduciary responsibilities and due dilligence. </p>                           
                            <div class="list" style ="display: flex; flex-direction: row;">
                             <p> <b> Accolades: </b> <br> 
                             <ul>
                                <li> Member Real Estate Councile of Ontario 2009 </li>
                                <li> Member Toronto Real Estate Board 2011 </li>  
                                <li> Fintrac Compliance Officer 2009 - 2017  </li>
                            </ul>
                            </p>  
                        </div>                         
                        </v-card-text>
                        <v-card-actions class="actions" style="display: flex; flexDirection: row; wordWrap: normal;">
                            <v-btn text
                                href="https://www.orea.com/"
                                target="_blank"
                            >Orea</v-btn>
                            <v-btn outlined
                                href="https://www.reco.on.ca/"
                                target="_blank">RECO    
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

    @media screen and (max-width: 1840px) {
        .list {
            flex-direction: column !important;
        }
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

        .list {
            flex-direction: row !important;
        }
    } 

    @media screen and (max-width: 800px) {
 
        .list {
            flex-direction: column !important;
        }
    } 



    @media screen and (max-width: 430px) {
        .actions {
            flex-direction: column !important;
        }
        .list {
            font-size: 12px;
            word-wrap: none;
        }
    }

</style>

<script>
export default {
    
}
</script>