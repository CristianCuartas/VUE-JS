<template>
  <div class="hero" :style="{ backgroundImage: `url('${media}')` }">
    <div class="hero-inner">
      <h1 class="hero-title">{{title}}</h1>
      <div class="hero-description">{{message}}</div>
      <div class="hero-actions mt-4">
        <div class="btn btn-primary mr-3">{{primaryButtonText}}</div>
        <div class="btn btn-secondary">{{secondaryButtonText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import backgroundImage from "./../assets/rectangle.gif";
export default {
  name: "BaseHero",
  data() {
    return {
      title: "",
      media: backgroundImage
    };
  }
};
</script>
<style>
.hero {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
</style>