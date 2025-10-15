<template>
  <div class="project-card animate">
    <div class="project-image">
      <!-- Show YouTube video if available, otherwise show image -->
      <YouTubeVideo
        v-if="project.video"
        :video-id="project.video"
        :title="getLocalizedContent(project.name)"
        :autoplay="true"
        :muted="true"
      />
      <LazyImage
        v-else
        :src="project.image"
        :alt="getLocalizedContent(project.name)"
        aspect-ratio="16/9"
        :placeholder-text="getLocalizedContent(project.name)"
      />
      <div class="project-overlay" v-if="!project.video">
        <div class="project-links">
          <a v-if="project.url" :href="project.url" target="_blank" class="project-link">
            <span>{{ t('common.viewProject') }}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          <a v-if="project.projectDetails" :href="project.projectDetails" target="_blank" class="project-link">
            <span>Project Details</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          <a v-if="project.journalArticle" :href="project.journalArticle" target="_blank" class="project-link">
            <span>Journal Article</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Links for projects with videos - show below the video -->
      <div class="project-links-below" v-if="project.video && (project.url || project.projectDetails || project.journalArticle)">
        <a v-if="project.url" :href="project.url" target="_blank" class="project-link">
          <span>{{ t('common.viewProject') }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
        <a v-if="project.projectDetails" :href="project.projectDetails" target="_blank" class="project-link">
          <span>Project Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
        <a v-if="project.journalArticle" :href="project.journalArticle" target="_blank" class="project-link">
          <span>Journal Article</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
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
import YouTubeVideo from './YouTubeVideo.vue'

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

// Debug: Log project data for Penelope
const isPenelopeProject = () => {
  if (typeof props.project.name === 'string') {
    return props.project.name.includes('Penelope')
  } else if (typeof props.project.name === 'object' && props.project.name) {
    return Object.values(props.project.name).some(name => name.includes('Penelope'))
  }
  return false
}

if (isPenelopeProject()) {
  console.log('Penelope project data:', props.project)
  console.log('Has video:', !!props.project.video)
}
</script>

<style scoped>
.project-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all var(--transition-spring);
  opacity: 0;
  transform: translateY(30px);
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.8),
    transparent
  );
  z-index: 1;
}

.project-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    transparent,
    rgba(255, 255, 255, 0.3)
  );
  z-index: 1;
}

.project-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  border-color: var(--primary-color);
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
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all var(--transition-normal);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links-below {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid #E5E5EA;
  justify-content: center;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #1D1D1F;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.project-link:hover {
  background: #424245;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.project-content {
  padding: 2rem;
}

.project-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1D1D1F;
  margin-bottom: 1rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.project-description {
  color: #424245;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #1D1D1F;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid #1D1D1F;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.tech-tag:hover {
  background: #424245;
  color: white;
  border-color: #424245;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}
</style>

