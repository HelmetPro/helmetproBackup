import { animate, stagger } from 'motion'
import { unref } from 'vue'

export const animateProgressBar = (element, targetWidth, duration = 4000) => {
  const el = unref(element)
  if (!el) return

  const randomMidpoint1 = Math.floor(Math.random() * (targetWidth - 50)) + 50
  const randomMidpoint2 = Math.floor(Math.random() * (targetWidth - 50)) + 50

  animate(
    el,
    {
      width: ['0%', '100%', `${randomMidpoint1}%`, '100%', `${randomMidpoint2}%`, `${targetWidth}%`]
    },
    {
      duration: duration / 1000,
      easing: [0.25, 0.1, 0.25, 1],
      times: [0, 0.2, 0.4, 0.6, 0.8, 1]
    }
  )
}

export const animateWhenVisible = (
  elements,
  animationProps,
  options = {},
  customAnimationFn = null
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targets = Array.isArray(elements) ? elements.map(unref) : unref(elements)

          if (customAnimationFn) {
            customAnimationFn(entry.target)
          } else {
            animate(targets, animationProps, {
              ...options,
              delay: options.delay instanceof Function ? options.delay : undefined
            })
          }

          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  const observeElement = (el) => {
    const element = unref(el)
    if (element instanceof Element) {
      observer.observe(element)
    }
  }

  if (Array.isArray(elements)) {
    observeElement(elements[0])
    // elements.forEach(observeElement)
  } else {
    observeElement(elements)
  }
}
