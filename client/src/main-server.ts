import { createApp } from './app'

export default (context: any) =>
  new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      // no matched routes, reject with 404
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      context.rendered = () => (context.state = store.state)

      resolve(app)
    }, reject)
  })
