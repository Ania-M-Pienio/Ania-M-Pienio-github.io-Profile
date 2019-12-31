<template>
    <div>
        
        <banner></banner>
        <div class="sub-nav" id="toInfo"> </div>    
        <info 
            
            class="info" 
            :portfolio="portfolio" 
            :section="section"
            v-on:sliding="onSlider" >
        </info>

    </div>    
</template>

<style scoped>

    .sub-nav{
        height: 50px;
    }
    .info {
        background-color: #424242;
    }


</style>

<script>
import Banner from './Banner';
import Info   from './Info';
export default {
    name: 'MainContainer',
    props: [ 'portfolio', 'section'],
    components: {
        Banner,
        Info
    },
    methods: {
        onSlider() {
            this.$emit('sliding');
        }
    } 
}
</script>