<template>
  <div v-editable="D">
    <MobileNav />
    <Nav />
    <Hero />
    <section class="container">
      <div class="content">
        <h1>{{D.header_1}}</h1>
        <h2>{{D.sub_header_1}}</h2>
        <p>{{D.paragraph_1}}</p>
      </div>
    </section>
    <section class="container background">
      <div class="content">
        <h1>{{D.header_2}}</h1>
        <h2>{{D.sub_header_2}}</h2>
        <p v-html="D.paragraph_2"></p>
        <img class="outside" src="../assets/img/utsida.jpg" alt="Bild på juristernas bokhandel">
      </div>
    </section>
    <section class="container">
      <div class="content">
        <h2>{{D.sub_header_3}}</h2>
        <div class="person" v-for="person in D.person">
          <img :src="person.image" :alt="person.alt">
          <span v-html="person.title"></span>
          <i class="line-breaker"></i>
          <span>{{person.work_title}}</span>
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

export default {
  mixins: [storyblok],
  components: { Nav, MobileNav, Hero },
  data () {
    return {
      slug: 'om'
    }
  },
  methods: {
    logger() {
      console.log(this.headers)
    }
  },
  asyncComputed: {
    D() {
      return this.data.content;
    }
  }
}
</script>

<style lang="scss" scoped>


.outside {
  max-width: 200px;
  margin-left: 30px;
}


.person {
  display: inline-block;
  max-width: 180px;
  text-align: left;
  margin: 30px;
}

.person > span {
  width:500px;
  display: inline-block;
}

.person > img {
  margin-bottom: 20px;

}

.line-breaker {
  width: 20px;
  height:2px;
  background-color: $lightblue;
  display: block;
  margin: 10px 0;
}

@media (max-width: 499px) {
  .outside {
    margin-left: 0px;
  }

  .person {
    margin-left: 0;
  }


}

@media (min-width: 440px) {
  .person {
    margin-left:30px;
  }


  .outside {
    margin-left: 30px;
  }

}



</style>

