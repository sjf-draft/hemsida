<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>


<style lang="scss">

@import '../static/normalize.css';

button {
    outline: none;
}

a {
    text-decoration: none;
    font-weight: 700;
    color: $link;
}

body {
    overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}


h1, h2, p, h3, #map {
  text-align: left;
  max-width: 600px;
  margin-left:30px;
} 

h1 {
  font-size: 2.2em;
}

h3 {
    font-size: 1.4em;
}

h2 {
  font-size: 1.4em;
  font-weight: 400;
  font-style: italic;
  max-width:250px;
  line-height: 1.4em;
}
p {
  font-size: 1em;
  line-height: 1.8em;
}
img {
  width:100%;
}

.container {
  padding: 10px;
  text-align: left;
}
.background {
  background-color: $background;
  padding-bottom: 30px;
}

.copyright {
  display: inline-block;
  font-size:.9em;
  color: $lightgray;
  line-height: 1.5em;
  margin: 40px 0;
}


@media (min-width: 440px) {

   h1, h2, p, h3, #map {
    text-align: left;
    max-width: 600px;
    margin-left:30px;
  } 

  .award-force, .pdf {
      margin-left:30px;
  }

}

@media (max-width: 499px) {
  h1, h2, p, h3, #map {
  text-align: left;
  max-width: 600px;
  margin-left:0;
} 

  .award-force, .pdf {
      margin-left:0;
  }

}


@include respond-above(xs) {
  .content {
    max-width: 500px;
    margin: 0 auto;
  }
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-ExtraLightItalic.eot');
    src: local('Source Sans Pro ExtraLight Italic'), local('./assets/fonts/./assets/fonts/SourceSansPro-ExtraLightItalic'),
        url('./assets/fonts/SourceSansPro-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-ExtraLightItalic.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-ExtraLightItalic.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-Italic.eot');
    src: local('Source Sans Pro Italic'), local('./assets/fonts/SourceSansPro-Italic'),
        url('./assets/fonts/SourceSansPro-Italic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-Italic.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-Italic.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-ExtraLight.eot');
    src: local('Source Sans Pro ExtraLight'), local('./assets/fonts/SourceSansPro-ExtraLight'),
        url('./assets/fonts/SourceSansPro-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-ExtraLight.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-ExtraLight.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-BoldItalic.eot');
    src: local('Source Sans Pro Bold Italic'), local('./assets/fonts/SourceSansPro-BoldItalic'),
        url('./assets/fonts/SourceSansPro-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-BoldItalic.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-BoldItalic.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-Bold.eot');
    src: local('Source Sans Pro Bold'), local('./assets/fonts/SourceSansPro-Bold'),
        url('./assets/fonts/SourceSansPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-Bold.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-Bold.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-Black.eot');
    src: local('Source Sans Pro Black'), local('./assets/fonts/SourceSansPro-Black'),
        url('./assets/fonts/SourceSansPro-Black.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-Black.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-Black.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-BlackItalic.eot');
    src: local('Source Sans Pro Black Italic'), local('./assets/fonts/SourceSansPro-BlackItalic'),
        url('./assets/fonts/SourceSansPro-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-BlackItalic.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-BlackItalic.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-Light.eot');
    src: local('Source Sans Pro Light'), local('./assets/fonts/SourceSansPro-Light'),
        url('./assets/fonts/SourceSansPro-Light.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-Light.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-Light.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-SemiBold.eot');
    src: local('Source Sans Pro SemiBold'), local('./assets/fonts/SourceSansPro-SemiBold'),
        url('./assets/fonts/SourceSansPro-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-SemiBold.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-SemiBold.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-LightItalic.eot');
    src: local('Source Sans Pro Light Italic'), local('./assets/fonts/SourceSansPro-LightItalic'),
        url('./assets/fonts/SourceSansPro-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-LightItalic.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-LightItalic.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-SemiBoldItalic.eot');
    src: local('Source Sans Pro SemiBold Italic'), local('./assets/fonts/SourceSansPro-SemiBoldItalic'),
        url('./assets/fonts/SourceSansPro-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-SemiBoldItalic.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-SemiBoldItalic.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/SourceSansPro-Regular.eot');
    src: local('Source Sans Pro Regular'), local('./assets/fonts/SourceSansPro-Regular'),
        url('./assets/fonts/SourceSansPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/SourceSansPro-Regular.woff2') format('woff2'),
        url('./assets/fonts/SourceSansPro-Regular.woff') format('woff'),
        url('./assets/fonts/SourceSansPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}



</style>
