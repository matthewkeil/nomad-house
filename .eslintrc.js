module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended', // goes with plugin
    'plugin:prettier/recommended', // goes with plugin
    'prettier', // from eslint-config-prettier
    'prettier/standard', // from eslint-config-prettier
    'prettier/vue', // from eslint-config-prettier
  ],
  plugins: [
    'prettier',
    'nuxt'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off'
  }
}
