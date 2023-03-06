export default defineNuxtPlugin((/* nuxtApp */) => {
  const debounce = (fn, delay) => {
    let timeoutID = null

    return function () {
      clearTimeout(timeoutID)
      const args = arguments
      const that = this
      timeoutID = setTimeout(function () {
        fn.apply(that, args)
      }, delay)
    }
  }

  return {
    provide: {
      debounce,
    },
  }
})
