<template>
  <div>
    <MobileNav />
    <Nav />
    <Hero />
    
    <section class="container">
      <div class="content">
        <h1>{{D.header_1}}</h1>
        <div id="map">KARTA SKA FINNAS HÄR</div>
        
        <h3>{{D.name_1}}</h3>
        <p v-html="D.adress_1"></p>
        <p>{{D.org_nr}}</p>
        <p v-html="D.telephone_1"></p>
        <p v-html="D.email_1"></p>
      </div>
    </section>
    
  </div>
  
</template>

<script>


import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';

import { storyblok } from '@/mixins/storyblok';







export default {
  mixins: [storyblok],
  components: { Nav, MobileNav, Hero },
  data () {
    return {
      slug: 'kontakt',
    }
  },
  asyncComputed: {
    D() {
      return this.data.content;
    }
  },
}
</script>


<style lang="scss" scoped>

#map {
  height:200px;
  width:200px;
}

</style>
