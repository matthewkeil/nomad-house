import { createApp } from './app'

const { app, store } = createApp()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((window as any).__INITIAL_STATE__) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  store.replaceState((window as any).__INITIAL_STATE__)
}

app.$mount('#app', process.env.NODE_ENV === 'development')
