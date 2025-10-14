<template>
  <div class="project-card animate">
    <div class="project-image">
      <LazyImage
        :src="project.image"
        :alt="getLocalizedContent(project.name)"
        aspect-ratio="16/9"
        :placeholder-text="getLocalizedContent(project.name)"
      />
      <div class="project-overlay">
        <div class="project-links">
          <a v-if="project.url" :href="project.url" target="_blank" class="project-link">
            <span>{{ t('common.viewProject') }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="project-content">
      <h3 class="project-name">{{ getLocalizedContent(project.name) }}</h3>
      <p class="project-description">{{ getLocalizedContent(project.description) }}</p>
      
      <div class="project-technologies">
        <span 
          v-for="tech in project.technologies" 
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { useLanguage } from '../composables/useLanguage'
import LazyImage from './LazyImage.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const { t, getLocalizedContent } = useLanguage()
const { target: cardRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.2
})
</script>

<style scoped>
.project-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.project-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #5a67d8;
  transform: translateY(-2px);
}

.project-content {
  padding: 1.5rem;
}

.project-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #f7fafc;
  color: #4a5568;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}
</style>

