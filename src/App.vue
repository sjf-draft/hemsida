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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
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
  text-rendering: optimizeLegibility;
  
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
  padding: 20px 10px;
  text-align: left;
}
.background {
  background-color: $background;
  padding-bottom: 30px;
}

.copyright {
  display: inline-block;
  font-size:.9em;
  color: $lightdark;
  line-height: 1.5em;
  margin: 40px 10px;
}

::-webkit-scrollbar {
    display:none;
}


@media (min-width: 440px) {

   h1, h2, p, h3, #map {
    text-align: left;
    max-width: 800px;
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

@include respond-above(md) {
    p {
        font-size: 1.2em;
    }

    h1 {
        font-size: 2.6em;
    }

    h2 {
        font-size: 1.6em;
    }
}

@include respond-above(xs) {
  .content {
    max-width: 800px;
    margin: 0 auto;
  }
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-ExtraLight.eot');
    src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLight.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLight.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLight.svg#SourceSansPro-ExtraLight') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLight.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-ExtraLightItalic.eot');
    src: local('Source Sans Pro ExtraLight Italic'), local('SourceSansPro-ExtraLightItalic'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLightItalic.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLightItalic.svg#SourceSansPro-ExtraLightItalic') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLightItalic.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-ExtraLightItalic.ttf') format('truetype');
        
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-Black.eot');
    src: local('Source Sans Pro Black'), local('SourceSansPro-Black'),
        url('./assets/fonts/hinted-SourceSansPro-Black.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-Black.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-Black.svg#SourceSansPro-Black') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-Black.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-Black.ttf') format('truetype');
        
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-BoldItalic.eot');
    src: local('Source Sans Pro Bold Italic'), local('SourceSansPro-BoldItalic'),
        url('./assets/fonts/hinted-SourceSansPro-BoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-BoldItalic.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-BoldItalic.svg#SourceSansPro-BoldItalic') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-BoldItalic.woff') format('woff')
        url('./assets/fonts/hinted-SourceSansPro-BoldItalic.ttf') format('truetype');
        
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-LightItalic.eot');
    src: local('Source Sans Pro Light Italic'), local('SourceSansPro-LightItalic'),
        url('./assets/fonts/hinted-SourceSansPro-LightItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-LightItalic.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-LightItalic.svg#SourceSansPro-LightItalic') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-LightItalic.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-Italic.eot');
    src: local('Source Sans Pro Italic'), local('SourceSansPro-Italic'),
        url('./assets/fonts/hinted-SourceSansPro-Italic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-Italic.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-Italic.svg#SourceSansPro-Italic') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-Italic.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-BlackItalic.eot');
    src: local('Source Sans Pro Black Italic'), local('SourceSansPro-BlackItalic'),
        url('./assets/fonts/hinted-SourceSansPro-BlackItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-BlackItalic.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-BlackItalic.svg#SourceSansPro-BlackItalic') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-BlackItalic.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-Regular.eot');
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
        url('./assets/fonts/hinted-SourceSansPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-Regular.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-Regular.svg#SourceSansPro-Regular') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-Regular.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-SemiBoldItalic.eot');
    src: local('Source Sans Pro SemiBold Italic'), local('SourceSansPro-SemiBoldItalic'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBoldItalic.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBoldItalic.svg#SourceSansPro-SemiBoldItalic') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBoldItalic.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-SemiBold.eot');
    src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBold.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBold.svg#SourceSansPro-SemiBold') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBold.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-Bold.eot');
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
        url('./assets/fonts/hinted-SourceSansPro-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-Bold.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-Bold.svg#SourceSansPro-Bold') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-Bold.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./assets/fonts/hinted-SourceSansPro-Light.eot');
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
        url('./assets/fonts/hinted-SourceSansPro-Light.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/hinted-SourceSansPro-Light.woff2') format('woff2'),
        url('./assets/fonts/hinted-SourceSansPro-Light.svg#SourceSansPro-Light') format('svg'),
        url('./assets/fonts/hinted-SourceSansPro-Light.woff') format('woff'),
        url('./assets/fonts/hinted-SourceSansPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}




</style>
