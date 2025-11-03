import { ref, computed, watch } from 'vue'
import { translations } from '../assets/data/translations'

// Get language from URL or default to 'en'
const getLanguageFromURL = () => {
  const path = window.location.pathname
  // Remove base path for GitHub Pages (e.g., /portfolio)
  const pathWithoutBase = path.replace(/^\/[^/]+/, '') || '/'
  
  if (pathWithoutBase.startsWith('/de')) return 'de'
  if (pathWithoutBase.startsWith('/en')) return 'en'
  
  // Also check the full path in case we're at root
  if (path.includes('/de')) return 'de'
  if (path.includes('/en')) return 'en'
  
  return 'en' // default
}

// Set language in URL
const setLanguageInURL = (lang) => {
  const currentPath = window.location.pathname
  const basePath = import.meta.env.BASE_URL || '/'
  
  // Remove existing language prefix
  let pathWithoutLang = currentPath.replace(/\/(de|en)(\/|$)/, '/')
  
  // Remove double slashes
  pathWithoutLang = pathWithoutLang.replace(/\/+/g, '/')
  
  // Ensure we keep the base path
  let newPath = pathWithoutLang
  if (!newPath.startsWith(basePath)) {
    newPath = basePath + pathWithoutLang.replace(/^\//, '')
  }
  
  // Add language prefix after base path
  const basePathClean = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
  const pathAfterBase = newPath.replace(basePathClean, '')
  const newURL = `${basePathClean}/${lang}${pathAfterBase}`
  
  window.history.replaceState({}, '', newURL)
}

// Reactive language state
const currentLanguage = ref(getLanguageFromURL())

// Computed translation function
const t = computed(() => {
  return (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found for language "${currentLanguage.value}"`)
        return key
      }
    }
    
    return value
  }
})

// Function to get localized content from resume data
const getLocalizedContent = (content) => {
  if (typeof content === 'object' && content !== null && (content.en || content.de)) {
    return content[currentLanguage.value] || content.en || content
  }
  return content
}

// Language switching function
const switchLanguage = (lang) => {
  if (lang !== currentLanguage.value) {
    currentLanguage.value = lang
    setLanguageInURL(lang)
  }
}

// Available languages
const availableLanguages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]

// Watch for URL changes (for browser back/forward)
const handlePopState = () => {
  const newLang = getLanguageFromURL()
  if (newLang !== currentLanguage.value) {
    currentLanguage.value = newLang
  }
}

// Set up event listener
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', handlePopState)
}

export function useLanguage() {
  return {
    currentLanguage,
    t,
    getLocalizedContent,
    switchLanguage,
    availableLanguages
  }
}
