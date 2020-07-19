const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const util = require('util')

export default {
  mode: 'universal',
  target: 'static',

  /*
   ** Headers of the page
   */
  head: {
    title: 'noobtronics: from noob to pro electronics',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        innerHTML: `(function(w) {var loadCSS = function(href, before, media) {        var doc = w.document;        var ss = doc.createElement('link');        var ref;        if(before) {            ref = before;        } else {            var refs = (doc.body || doc.getElementsByTagName('head')[0]).childNodes;            ref = refs[refs.length - 1];        }        var sheets = doc.styleSheets;        ss.rel = 'stylesheet';        ss.href = href;        ss.media = 'only x';        function ready(cb) {            if(doc.body) {                return cb();            }            setTimeout(function() {                ready(cb);            });        }        ready(function() {            ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));        });        var onloadcssdefined = function(cb) {            var resolvedHref = ss.href;            var i = sheets.length;            while(i--) {                if(sheets[i].href === resolvedHref) {                    return cb();                }            }            setTimeout(function() {                onloadcssdefined(cb);            });        };        function loadCB() {            if(ss.addEventListener) {                ss.removeEventListener('load', loadCB);            }            ss.media = media || 'all';        }        if(ss.addEventListener) {            ss.addEventListener('load', loadCB);        }        ss.onloadcssdefined = onloadcssdefined;        onloadcssdefined(loadCB);        return ss;    };    if(typeof exports !== 'undefined') {        exports.loadCSS = loadCSS;    } else {        w.loadCSS = loadCSS;    }}(typeof global !== 'undefined' ? global : this));`,
        type: 'text/javascript',
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/lazysizes.js',
    '@/plugins/raise404.js',
    '@/plugins/picture.js',
    '@/plugins/notify.js',
  ],

  styleResources: {
    sass: ['~assets/sass/mobile-mixin.sass'],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '~/modules/pwa_extension.js',
    '@nuxtjs/pwa',
    '~/modules/async_css.js',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-125040779-2',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  // axios: {
  //   host: 'api.noobtronics.in',
  //   port: 443,
  //   https: true,
  // },

  googleAnalytics: {
    debug: {
      enabled: true,
      sendHitTask: true,
    },
  },
  axios: {
    host: 'api.localhost',
    port: 80,
    https: false,
  },
  env: {
    cdnURL: 'https://cdn.noobtronics.in',
  },

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },

    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },

    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true,
        }),
      ],
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {},
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'script' || type === 'style') {
          return true
        }
      },
    },
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => {
        return preloadFiles
          .filter((f) => f.asType === 'script')
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
      },
    },
  },

  pwa: {
    meta: {
      name: 'noobtronics: from noob to pro electronics',
      author: 'noobtronics',
      description:
        'noobtronics is one stop shop to lean, read, test and shop electronics',
    },
    manifest: {
      name: 'noobtronics: from noob to pro electronics',
      short_name: 'noobtronics',
      orientation: 'portrait',
      lang: 'en',
    },
    workbox: {
      cacheId: 'noobtronics',
      dev: false,

      offlineAnalytics: true,

      runtimeCaching: [
        {
          urlPattern: 'https://cdn.noobtronics.in/.*.(webp|jpg)',
          handler: 'cacheFirst',
        },
        {
          urlPattern: 'https://api.noobtronics.in/api/.*',
          method: 'GET',
          handler: 'networkFirst',
        },
      ],
    },
  },

  generate: {
    routes: ['/shop', '/'],
    fallback: true,
  },
}
