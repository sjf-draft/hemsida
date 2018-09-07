
import StoryblokClient from 'storyblok-js-client';

const token = 'xQh2rNpTR0r74S800gRqQQtt';

let API = new StoryblokClient({
  accessToken: token
})

export const storyblok = {
  data () {
    return {
      data: [],
      loading: false
    }
  },
  methods: {
    log (log) {
      console.log(JSON.parse(JSON.stringify(log)));
    },
    getStory(version) {
      
      this.loading = true
      const self = this;
      const slug = this.slug ? this.slug : '';

      API.get('cdn/stories/' + slug, {
        version: version, // draft or published
        starts_with: self.startsWith, // returns all content entries inside folder
        is_startpage: 0 // excludes the startpage inside folder
      }).then((response) => {
        self.log(response.data.story)
        this.data = response.data.story
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created () {
    window.storyblok.init({
      accessToken: token
    })

    window.storyblok.on('change', () => {
      this.getStory('draft')
    })

    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor() || location.hostname === 'localhost' || location.hostname === '10.0.1.44') {
        this.getStory('draft')
      } else {
        this.getStory('published')
      }
    })
  },
}