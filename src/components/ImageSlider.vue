<template>
  <div class="slider-container">
    <img :src="images[current]" class="slider-image" alt="Imagen carrusel" />
    <button class="slider-btn left" @click="prev">&#8592;</button>
    <button class="slider-btn right" @click="next">&#8594;</button>
    <div class="slider-dots">
      <span
        v-for="(img, idx) in images"
        :key="idx"
        :class="['dot', { active: idx === current }]"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '/slider1.jpg',
  '/slider2.jpg',
  '/slider3.jpg'
]

const current = ref(0)

function next() {
  current.value = (current.value + 1) % images.length
}
function prev() {
  current.value = (current.value - 1 + images.length) % images.length
}
function goTo(idx) {
  current.value = idx
}
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 30px auto 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
  background: #fff;
}
.slider-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #D18971cc;
  border: none;
  color: #fff;
  font-size: 2rem;
  padding: 0.2em 0.6em;
  cursor: pointer;
  border-radius: 50%;
  z-index: 2;
  transition: background 0.2s;
}
.slider-btn.left { left: 10px; }
.slider-btn.right { right: 10px; }
.slider-btn:hover { background: #D18971; }
.slider-dots {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 8px;
}
.dot {
  width: 12px;
  height: 12px;
  background: #ddd;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background 0.2s;
}
.dot.active {
  background: #D18971;
}
</style>