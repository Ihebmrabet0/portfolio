<template>
  <div 
    ref="containerRef"
    class="lazy-image-container"
    :class="{ 'loaded': isLoaded }"
  >
    <div v-if="!isLoaded" class="image-placeholder" :style="{ aspectRatio: aspectRatio }">
      <div class="placeholder-content">
        <div class="placeholder-icon">📷</div>
        <div class="placeholder-text">{{ placeholderText }}</div>
      </div>
    </div>
    <img 
      v-else
      :src="src" 
      :alt="alt"
      class="lazy-image fade-in"
      :style="{ aspectRatio: aspectRatio }"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: '16/9'
  },
  placeholderText: {
    type: String,
    default: 'Loading...'
  }
})

const isLoaded = ref(false)
const hasError = ref(false)

// Use intersection observer to load image when it comes into view
const { target: containerRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})

const onImageLoad = () => {
  isLoaded.value = true
}

const onImageError = () => {
  hasError.value = true
  console.error('Failed to load image:', props.src)
}

// Start loading when image comes into view
onMounted(() => {
  if (hasIntersected.value) {
    // Image should start loading immediately
    const img = new Image()
    img.onload = onImageLoad
    img.onerror = onImageError
    img.src = props.src
  }
})

// Watch for intersection changes
watch(hasIntersected, (intersected) => {
  if (intersected && !isLoaded.value && !hasError.value) {
    const img = new Image()
    img.onload = onImageLoad
    img.onerror = onImageError
    img.src = props.src
  }
})
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #666;
  min-height: 200px;
}

.placeholder-content {
  text-align: center;
}

.placeholder-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.placeholder-text {
  font-size: 0.9rem;
  opacity: 0.8;
}

.lazy-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.lazy-image.fade-in {
  opacity: 1;
}

.lazy-image-container.loaded .lazy-image {
  opacity: 1;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

