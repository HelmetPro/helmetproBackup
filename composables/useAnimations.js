import { onMounted } from 'vue'
import { animateWhenVisible, animateProgressBar } from '@/utils/animationUtils'
import { stagger } from 'motion'

export function useAnimations() {
  const setupAnimations = (animationConfigs) => {
    onMounted(() => {
      animationConfigs.forEach((config) => {
        const { element, elements, props, options, customFn, fade } = config

        let animationProps = props || {}
        if (fade) {
          animationProps = { ...animationProps, opacity: [0, 1] }
        }
        const animationOptions = options?.stagger
          ? { ...options, delay: stagger(options.stagger) }
          : options

        animateWhenVisible(elements || element, animationProps, animationOptions, customFn)
      })
    })
  }

  return {
    setupAnimations,
    animateProgressBar
  }
}
