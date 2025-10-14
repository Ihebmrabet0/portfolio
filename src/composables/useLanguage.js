import { ref, computed, watch } from 'vue'
import { translations } from '../assets/data/translations'

// Get language from URL or default to 'en'
const getLanguageFromURL = () => {
  const path = window.location.pathname
  if (path.startsWith('/de')) return 'de'
  if (path.startsWith('/en')) return 'en'
  return 'en' // default
}

// Set language in URL
const setLanguageInURL = (lang) => {
  const currentPath = window.location.pathname
  const newPath = currentPath.replace(/^\/(de|en)/, '') || '/'
  const newURL = `/${lang}${newPath}`
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
