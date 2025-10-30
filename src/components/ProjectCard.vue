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
      <div v-else class="image-wrapper" @click="openImageModal(0)" style="cursor: zoom-in;">
        <LazyImage
          :src="project.images && project.images.length ? project.images[0] : project.image"
          :alt="getLocalizedContent(project.name)"
          aspect-ratio="16/9"
          :placeholder-text="getLocalizedContent(project.name)"
        />
        <div class="project-overlay">
          <div class="project-links">
            <a v-if="project.url" :href="project.url" target="_blank" class="project-link" @click.stop>
              <span>{{ t('common.viewProject') }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
            <a v-if="project.projectDetails" :href="project.projectDetails" target="_blank" class="project-link" @click.stop>
              <span>Project Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
            <a v-if="project.journalArticle" :href="project.journalArticle" target="_blank" class="project-link" @click.stop>
              <span>Journal Article</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
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
    
    <!-- Light image modal (no dark background) - teleported to body -->
    <Teleport to="body">
      <div 
        v-if="showImageModal"
        class="image-modal"
        @click.self="closeImageModal"
      >
        <button class="image-modal-close" @click="closeImageModal" aria-label="Close image">
          ✕
        </button>
        <button v-if="totalImages > 1" class="image-nav prev" aria-label="Previous image" @click.stop="prevImage">‹</button>
        <img 
          class="image-modal-content"
          :src="currentImageSrc" 
          :alt="getLocalizedContent(project.name)"
        />
        <button v-if="totalImages > 1" class="image-nav next" aria-label="Next image" @click.stop="nextImage">›</button>
      </div>
    </Teleport>
    
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
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

// Image lightbox state and handlers
const showImageModal = ref(false)
const currentImageIndex = ref(0)
const totalImages = computed(() => {
  return Array.isArray(props.project.images) && props.project.images.length > 0
    ? props.project.images.length
    : (props.project.image ? 1 : 0)
})
const currentImageSrc = computed(() => {
  if (Array.isArray(props.project.images) && props.project.images.length > 0) {
    return props.project.images[currentImageIndex.value]
  }
  return props.project.image
})

const openImageModal = (index = 0) => {
  if (props.project.video) return
  currentImageIndex.value = index
  showImageModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  showImageModal.value = false
  document.body.style.overflow = ''
}

const onKeydown = (e) => {
  if (e.key === 'Escape' && showImageModal.value) {
    closeImageModal()
  }
  if ((e.key === 'ArrowRight' || e.key === 'Right') && showImageModal.value) {
    nextImage()
  }
  if ((e.key === 'ArrowLeft' || e.key === 'Left') && showImageModal.value) {
    prevImage()
  }
}

const nextImage = () => {
  if (totalImages.value <= 1) return
  currentImageIndex.value = (currentImageIndex.value + 1) % totalImages.value
}

const prevImage = () => {
  if (totalImages.value <= 1) return
  currentImageIndex.value = (currentImageIndex.value - 1 + totalImages.value) % totalImages.value
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  // Ensure body scrolling is restored if component unmounts while modal is open
  if (showImageModal.value) {
    document.body.style.overflow = ''
  }
})
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

.image-wrapper {
  position: relative;
  display: block;
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
  pointer-events: none; /* allow clicks to pass through when hidden */
}

.image-wrapper:hover .project-overlay {
  opacity: 1;
  pointer-events: auto; /* enable links when visible */
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

/* Lightbox styles */
.image-modal {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.96); /* light, not dark */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.image-modal-content {
  max-width: 92vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.image-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #1D1D1F;
  color: #fff;
  font-size: 20px;
  line-height: 44px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,0.2);
}

.image-modal-close:hover {
  background: #424245;
}

.image-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #1D1D1F;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-nav.prev { left: 1rem; }
.image-nav.next { right: 1rem; }

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

