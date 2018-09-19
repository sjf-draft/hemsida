<template>
  <div>
    <MobileNav />
    <Nav />
    <Hero />
    
    <section class="container">
      <div class="content">
        <h1>{{D.header_1}}</h1>
        <h2>{{D.sub_header_1}}</h2>
        <p>{{D.paragraph_1}}</p>
        <a href="https://res.cloudinary.com/dpehzqvvx/image/upload/v1536222545/sjf/SJF_riktlinjer_2010.pdf"
        target="_blank" rel="noopener noreferrer" class="pdf">Riktlinjer för ansökan om bidrag​</a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="award-force">Sök bidrag online samt redovisning</a>
      </div>
    </section>
    <section class="container background">
      <div class="content">
        <h1>{{D.header_2}}</h1>
        <p v-html="D.bidrag_1"></p>
        <p v-html="D.bidrag_2"></p>
        <p v-html="D.bidrag_3"></p>
        <p v-html="D.bidrag_4"></p>
        <p v-html="D.bidrag_5"></p>
        <p v-html="D.bidrag_6"></p>
        <p v-html="D.bidrag_7"></p>
       
      </div>
    </section>
    <section class="container">
      <div class="content">
        <h1>{{D.header_3}}</h1>
        <p v-html="D.paragraph_2"></p>
      </div>
    </section>
    <span class="copyright">Copyright Stiftelsen Juridisk Fakultetslitteratur i Stockholm &copy; 2017</span>
  </div>
  
</template>

<script>
const FileSaver = require('file-saver');

import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';

import { storyblok } from '@/mixins/storyblok';
// import { base64str } from '@/mixins/base64str';



export default {
  components: { Nav, MobileNav, Hero },
  mixins: [storyblok],
  components: { Nav, MobileNav, Hero },
  data () {
    return {
      slug: 'bidrag'
    }
  },
  methods: {
    // saveFile() {
    //   // base64 string
    //   var base64str = this.base64str;

    //   // decode base64 string, remove space for IE compatibility
    //   var binary = atob(base64str.replace(/\s/g, ''));
    //   var len = binary.length;
    //   var buffer = new ArrayBuffer(len);
    //   var view = new Uint8Array(buffer);
    //   for (var i = 0; i < len; i++) {
    //       view[i] = binary.charCodeAt(i);
    //   }

    //   const blob = new Blob([view], {type: "data:application/pdf;base64,"});
    //   FileSaver.saveAs(blob, "SJF_riktlinjer_2010.pdf");
    // }
  },
  asyncComputed: {
    D() {
      return this.data.content;
    }
  }
}
</script>


<style lang="scss" scoped>

.pdf {
  cursor: pointer;
  display: inline-block;
  padding: 15px 15px 15px 0;
  
}
.award-force {
  padding: 20px 15px;
  border-radius: 3px;
  display:inline-block;
  background-color:$link;
  color:$white;
  margin-top:10px;
  margin-bottom:40px;
  
  -webkit-box-shadow: 0px 10px 34px -8px rgba(122,122,122,1);
  -moz-box-shadow: 0px 10px 34px -8px rgba(122,122,122,1);
  box-shadow: 0px 10px 34px -8px rgba(122,122,122,1);
}

</style>
