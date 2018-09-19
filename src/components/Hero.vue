<template>
  <section class="hero">
    <div class="logo-wrap">
      <router-link to="/" class="logo" aria-label="logo"></router-link>
    </div>
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
  width:250px;
  // margin: 0 auto;
  height:300px;
  
  background-image: url('../assets/img/logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.logo-wrap {
  max-width: 800px;
  // padding: 0 px;
  text-align: left;
  padding-left: 20px;
}

@include respond-above(xs) {
  .hero {
    height: 300px; 
    }
  .logo {
    height: 300px;
    width:300px;
  }
  .logo-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
  }
}

@include respond-above(sm) {
  .hero {
    height: 400px; 
    }
  .logo {
    height: 450px;
    width:350px;
  }
}

@include respond-above(md) {
  .hero {
    height: 450px; 
    }
}


</style>
