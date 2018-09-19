<template>
  <div class="mobile-nav-container">
    <nav>
      <ul :class="{ 'is-expanded': isActive }">
        <li @click="eventHandler()"><router-link class="router-link" to="/">Om Stiftelsen</router-link></li>
        <li @click="eventHandler()"><router-link class="router-link" to="/bidrag">Bidrag</router-link></li>
        <li @click="eventHandler()"><router-link class="router-link" to="/kontakt">Kontakt</router-link></li>
      </ul>
      
      <button
        @click="eventHandler()"
        class="hamburger hamburger--spring"
        :class="{ 'is-active': isActive }"
        type="button" 
        aria-label="navigation" 
        >
        <span 
          class="hamburger-box" 
          aria-label="navigation"
         >
          <span 
            class="hamburger-inner" 
            aria-label="navigation" 
            ></span>
        </span>
      </button>
    </nav>
    <div @click="eventHandler()" class="overlay" :class="{ 'is-overlay': isActive }"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      // isExpanded: false
    }
  },
  methods: {
    eventHandler() {
      this.isActive = !this.isActive
      // this.isExpanded = !this.isExpanded
    },
    logger() {
      console.log('hello')
    }
  }
 
  
}
</script>


<style lang="scss" scoped>

@import '../../static/hamburger.css';

nav {
  position:relative;
  background-color: $dark;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  z-index: 99;
}

.nav-container {
  position: relative;
}

ul {
  position: fixed;
  z-index:99;
  top: 57px;
  left:0;
  margin:0;
  padding:0;
  max-height: 0;
  overflow:hidden;
  background-color: $dark;
  width:100%;
  list-style-type: none;
  display: flex;
  flex-flow:column nowrap;
  align-items: center;
  justify-content: center;
  transition: max-height .3s ease;

}

.is-expanded {
  max-height: 200px
}

li {
  display: block;
  border-top: 1px $lightgray solid;
  width:100%;
}

.router-link {
  font-size: 1.2em;
  font-weight: 400;
  color: $white;
  width:100%;
  display: block;
  padding: 15px;
  height:100%;
}

.overlay {
  display:none;
  background-color: $lightdark;
  opacity: .5;
  z-index: 0;
  position:fixed;
  width:100%;
  height:100%;
}

.is-overlay {
  display: block;
}

@include respond-above(sm) {
  .mobile-nav-container {
    display:none;
  }
}


</style>
