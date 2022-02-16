import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    vite: {
      esbuild: {
        target: 'esnext',
        minifyIdentifiers: true,
        minifyWhitespace: true,
        minifySyntax: true,
        minify: true
      }
    },
    adapter: adapter(),
    files: {
      lib: 'lib',
      routes: 'routes',
      hooks: 'hooks',
      template: 'lib/app.html'
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
