import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    version: {
      name: 'hi mau'
    },
    csp: {
      mode: 'hash',
      directives: {
        'default-src': ['self'],
        'style-src': ['self', 'unsafe-inline']
      }
    }
  }
}

export default config
