<template>
  <div class="language-dropdown" :class="{ 'active': isOpen }">
    <button 
      class="dropdown-trigger" 
      @click="toggleDropdown"
      @blur="handleBlur"
    >
      <span class="flag">{{ currentLanguage.flag }}</span>
    </button>
    
    <div class="dropdown-menu" v-show="isOpen">
      <button 
        v-for="lang in availableLanguages" 
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="dropdown-item"
        :class="{ 'active': currentLanguage.code === lang.code }"
      >
        <span class="flag">{{ lang.flag }}</span>
        <svg v-if="currentLanguage.code === lang.code" class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLanguage: currentLangCode, switchLanguage, availableLanguages } = useLanguage()

const isOpen = ref(false)

const currentLanguage = computed(() => {
  return availableLanguages.find(lang => lang.code === currentLangCode.value) || availableLanguages[0]
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (langCode) => {
  switchLanguage(langCode)
  isOpen.value = false
}

const handleBlur = (event) => {
  // Close dropdown when clicking outside
  setTimeout(() => {
    if (event.currentTarget && !event.currentTarget.contains(document.activeElement)) {
      isOpen.value = false
    }
  }, 100)
}
</script>

<style scoped>
.language-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--border-light);
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-normal);
  min-width: 40px;
  width: 40px;
  box-shadow: var(--shadow-sm);
}

.dropdown-trigger:hover {
  border-color: var(--border-medium);
  background: var(--bg-overlay);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.dropdown-trigger:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}


.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-dropdown);
  margin-top: var(--space-1);
  overflow: hidden;
  animation: dropdownFadeIn var(--transition-normal) ease-out;
  min-width: 40px;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-3);
  width: 100%;
  text-align: left;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: var(--text-sm);
  font-family: var(--font-primary);
  font-weight: var(--font-normal);
  color: var(--text-primary);
  position: relative;
}

.dropdown-item:hover {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.dropdown-item.active {
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-weight: var(--font-medium);
}

.dropdown-item.active:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.dropdown-item .flag {
  font-size: var(--text-base);
  line-height: 1;
}

.dropdown-item .lang-name {
  flex: 1;
  font-weight: inherit;
}

.check-icon {
  margin-left: auto;
  opacity: 0.9;
  transition: opacity var(--transition-fast);
}

.dropdown-item.active .check-icon {
  opacity: 1;
}

/* Apple-style focus states */
.dropdown-trigger:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

.dropdown-item:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: -2px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .dropdown-trigger {
    min-width: 60px;
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
  }
  
  .dropdown-item {
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-sm);
  }
  
  .dropdown-menu {
    box-shadow: var(--shadow-xl);
  }
}

/* Dark mode support (if needed) */
@media (prefers-color-scheme: dark) {
  .dropdown-trigger {
    background: rgba(0, 0, 0, 0.7);
    border-color: var(--border-dark);
    color: var(--bg-primary);
  }
  
  .dropdown-trigger:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  
  .dropdown-menu {
    background: rgba(0, 0, 0, 0.7);
    border-color: var(--border-dark);
  }
  
  .dropdown-item {
    color: var(--bg-primary);
  }
  
  .dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
</style>
