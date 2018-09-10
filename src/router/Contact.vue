<template>
  <div>
    <MobileNav />
    <Nav />
    <Hero />

    
    
    <section class="container">
      <div class="content">
        <h1>{{D.header_1}}</h1>
        
        <div class="flex-parent">
          <div>
            <GoogleMap :mapName="'map'" />
          </div>
          
          <div>
            <h3>{{D.name_1}}</h3>
            <p v-html="D.adress_1"></p>
            <p>{{D.org_nr}}</p>
            <p v-html="D.telephone_1"></p>
            <p v-html="D.email_1"></p>
          </div>
        </div>

      </div>
    </section>
     <span class="copyright">Copyright Stiftelsen Juridisk Fakultetslitteratur i Stockholm &copy; 2017</span>
  </div>
</template>

<script>

import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';

import { storyblok } from '@/mixins/storyblok';
import GoogleMap from '@/components/GoogleMap.vue';

export default {
  mixins: [storyblok],
  components: { Nav, MobileNav, Hero, GoogleMap },
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
  height:300px;
  width:300px;
}

h1 {
  margin-top: 40px;
  margin-bottom: 40px;
  
}

.flex-parent {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
}

@include respond-above(xs) {
  #map {
    height:350px;
    width:500px;
  }
  .content {
    max-width: 950px;
    margin: 0 auto;
  }

}

</style>
