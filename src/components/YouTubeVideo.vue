<template>
  <div class="youtube-video-container" ref="videoRef">
    <div class="video-wrapper" :class="{ 'playing': isPlaying }">
      <iframe
        v-if="isVisible"
        :src="embedUrl"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="youtube-iframe"
        @load="onVideoLoad"
      ></iframe>
      <div v-else class="video-placeholder" @click="playVideo">
        <div class="play-button">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div class="video-thumbnail">
          <img :src="thumbnailUrl" :alt="title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const props = defineProps({
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'YouTube Video'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  muted: {
    type: Boolean,
    default: true
  }
})

const isVisible = ref(false)
const isPlaying = ref(false)

// Extract video ID from URL if full URL is provided
const videoId = computed(() => {
  if (props.videoId.includes('youtube.com') || props.videoId.includes('youtu.be')) {
    const url = new URL(props.videoId)
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.slice(1)
    } else {
      return url.searchParams.get('v')
    }
  }
  return props.videoId
})

const embedUrl = computed(() => {
  const baseUrl = `https://www.youtube.com/embed/${videoId.value}`
  const params = new URLSearchParams()
  
  if (props.autoplay) {
    params.append('autoplay', '1')
  }
  if (props.muted) {
    params.append('mute', '1')
  }
  params.append('rel', '0') // Don't show related videos
  params.append('modestbranding', '1') // Minimal YouTube branding
  
  return `${baseUrl}?${params.toString()}`
})

const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${videoId.value}/maxresdefault.jpg`
})

const playVideo = () => {
  isVisible.value = true
  isPlaying.value = true
}

const onVideoLoad = () => {
  isPlaying.value = true
}

// Use intersection observer to trigger video when it comes into view
const { target: videoRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.5,
  rootMargin: '50px'
})

// Auto-play when video comes into view
onMounted(() => {
  if (hasIntersected.value && props.autoplay) {
    playVideo()
  }
})

// Watch for intersection changes
watch(hasIntersected, (intersected) => {
  if (intersected && props.autoplay && !isVisible.value) {
    playVideo()
  }
})
</script>

<style scoped>
.youtube-video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 8px;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
}

.video-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.video-placeholder:hover .play-button {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
}

.youtube-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

.video-wrapper.playing {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>
