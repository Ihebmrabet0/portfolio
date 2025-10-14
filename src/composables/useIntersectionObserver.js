import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useIntersectionObserver(options = {}) {
  const target = ref(null)
  const isIntersecting = ref(false)
  const hasIntersected = ref(false)
  
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  let observer = null

  onMounted(() => {
    // Use nextTick to ensure the DOM is updated
    nextTick(() => {
      if (target.value) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            isIntersecting.value = entry.isIntersecting
            if (entry.isIntersecting && !hasIntersected.value) {
              hasIntersected.value = true
            }
          })
        }, defaultOptions)

        observer.observe(target.value)
      }
    })
  })

  onUnmounted(() => {
    if (observer && target.value) {
      observer.unobserve(target.value)
    }
  })

  return {
    target,
    isIntersecting,
    hasIntersected
  }
}

