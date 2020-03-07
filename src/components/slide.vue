<template>
  <div class="slide">
    <div class="carousel-place">
      <transition name="fade-slide">
        <img :src="item.src" v-for="(item,index) in slides" v-if="index == currentIndex" :key="index" @mouseenter="stop"
          @mouseleave="go">
      </transition>
    </div>
    <div class="slide-page">
      <ul>
        <li @click="prevImage">&larr;</li>
        <li v-for="(item, index) in slides" @mouseover="goto(index)">
          <a>{{ index + 1 }}</a>
        </li>
        <li @click="nextImage">&rarr;</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
    },
    data () {
      return {
        currentIndex: 0,
        slideName: "fade-slide",
        timer: ''
      }
    },
    methods: {
      go() {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop() {
        clearInterval(this.timer)
        this.timer = null
      },
      goto(index) {
        this.currentIndex = index
      },
      autoPlay() {
        this.currentIndex++
        if (this.currentIndex > this.slides.length - 1) {
          this.currentIndex = 0
        }
      },
      prevImage() {
        if (this.currentIndex === 0) {
          this.currentIndex = this.slides.length - 1
        } else {
          this.currentIndex--
          this.slideName = "fade-rslide"
        }
      },
      nextImage() {
        if (this.currentIndex === this.slides.length - 1) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
          this.slideName = "fade-slide"
        }
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 6000)
    }
  }
</script>

<style>
  .slide {
    width: 600px;
    height: 500px;
    margin: 0 auto;
   /* border: 1px solid #000000 ; */
  }
  .carousel-place{
    position: relative;
    width: 100%;
    height: 15rem;
  }
  .carousel-place img {
    width: 600px;
    height: 500px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
  .fade-slide-enter-active {
    transition: all 4s ease
  }
  .fade-slide-leave-active {
    transition: all 4s ease
  }
  .fade-slide-enter {
    opacity: 0;
    transform: translateX(600px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-600px);
  }
  .slide-page {
   width: 600px;
   height: 30px;
   position: absolute;
   background-color: grey;
   opacity: 0.7;
   top: 500px;
  }

  .slide-page ul {
    margin: 0;
    padding: 0;
    line-height: 30px;

  }

  .slide-page li {
    list-style: none;
    float: left;
    cursor: pointer;
    margin: 0 10px;
    color: white;
  }
</style>
