<template>
  <div id="app">
    <div class="index-wrap">
       <slide-show :slides="slides"></slide-show>
     </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
  import axios from 'axios'
  import slideShow from "@/components/slide.vue"
  export default {
    components: {
      slideShow
    },
    data () {
      return {
        slides: null
      }
    },
    mounted () {
      axios.get('./static/slide.json')
      .then(response => {this.slides = response.data.swiperList})
      .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.index-wrap {
      overflow: hidden;
  }
</style>
