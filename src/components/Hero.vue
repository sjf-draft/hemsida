<template>
  <section class="hero">
    <router-link to="/" class="logo"></router-link>
  </section>
</template>

<script>
export default {

  
}
</script>


<style lang="scss" scoped>

.hero {
  width:100%;
  height:270px;
  background-image: url('../assets/img/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.logo {
  display:inline-block;
  width:700px;
  margin: 0 auto;
  height:300px;
  
  background-image: url('../assets/img/logo.png');
  background-size: contain;
  background-position: -20px;
  background-repeat: no-repeat;
}

@include respond-above(xs) {
  .hero {
    height: 300px; 
    }
  .logo {
    height: 330px;
    width:800px;
  }
}

@include respond-above(sm) {
  .hero {
    height: 400px; 
    }
  .logo {
    height: 450px;
    width:1000px;
  }
}

@include respond-above(md) {
  .hero {
    height: 450px; 
    }
}


</style>
