<script setup>
import 'css-doodle';
</script>

<template>
  <div class="doodle-container">
    <css-doodle grid="50x1 / 50vmin" perspective="23vmin">
      <div class="doodle-background"></div>
    </css-doodle>
  </div>
</template>
    <!--Codigo de como crear un fondo svg animado-->
    <!-- <div class="links">
        <a href="https://dev.to/uuuuuulala/making-background-blob-animation-in-just-15kb-step-by-step-guide-2482"
            target="_blank">tutorial<img class="icon" src="https://ksenia-k.com/img/icons/link.svg"></a>
    </div> -->
<style scoped>
html, body { 
  height: 100%; 
  margin: 0; 
  overflow: hidden;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000; 
}

.doodle-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.doodle-background {
  background: radial-gradient(
    circle,
    #00b8a9 15%,
    transparent 50%
  ) no-repeat;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: scale-up 20s linear infinite;
  animation-delay: calc(var(--i) * -0.4s);
}

@keyframes scale-up {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) rotate(0);
  }
  10% {
    opacity: 1;
  }
  95% {
    transform: translate3d(0, 0, 50vmin) rotate(360deg);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 1vmin);
  }
}
</style>