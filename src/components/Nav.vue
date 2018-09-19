<template>
  <nav>
    <ul>
      <li><router-link class="router-link" to="/">Om Stiftelsen</router-link></li>
      <li><router-link class="router-link" to="/bidrag">Bidrag</router-link></li>
      <li><router-link class="router-link" to="/kontakt">Kontakt</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>

nav {
  width:100%;
  position: relative;
  background-color:transparent;
  position:absolute;
}

ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  list-style-type: none;
  max-width:600px;
  margin: 30px auto;
}

.router-link {
  font-size: 1.35em;
  color: $white;
  font-weight: 400;
  padding: 1em;
}

.router-link-exact-active {
  font-weight:700;

}

@include respond-below(sm) {
  nav {
    display: none;
  }
} 

</style>
