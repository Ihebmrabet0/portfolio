<template>
  <div class="language-dropdown" :class="{ 'active': isOpen }">
    <button 
      class="dropdown-trigger" 
      @click="toggleDropdown"
      @blur="handleBlur"
    >
      <span class="flag">{{ currentLanguage.flag }}</span>
      <svg class="dropdown-icon" :class="{ 'rotated': isOpen }" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
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
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 40px;
}

.dropdown-trigger:hover {
  border-color: #667eea;
  background: #f8fafc;
}

.dropdown-icon {
  margin-left: auto;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 0.25rem;
  overflow: hidden;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0.8rem;
  width: 100%;
  text-align: left;
  border: none;
  background: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;
}

.dropdown-item:hover {
  background: #f8fafc;
}

.dropdown-item.active {
  background: #667eea;
  color: white;
}

.dropdown-item .flag {
  font-size: 1rem;
}

.dropdown-item .lang-name {
  flex: 1;
  font-weight: 500;
}

.check-icon {
  margin-left: auto;
  opacity: 0.8;
}

/* Mobile styles */
@media (max-width: 768px) {
  .dropdown-trigger {
    min-width: 100px;
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }
  
  .dropdown-item {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
}
</style>
