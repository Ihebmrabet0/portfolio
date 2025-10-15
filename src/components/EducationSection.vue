<template>
  <section id="education" class="education-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('education.title') }}</h2>
        <p class="section-subtitle">{{ t('education.subtitle') }}</p>
      </div>
      
      <div class="education-timeline">
        <div 
          v-for="(education, index) in educationData" 
          :key="education.id"
          class="education-item animate"
          :class="{ 'current': education.status === 'current' }"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="education-marker">
            <div class="marker-dot" :class="education.status"></div>
            <div v-if="education.status === 'current'" class="current-indicator">{{ t('education.current') }}</div>
          </div>
          
          <div class="education-content">
            <div class="education-header">
              <h3 class="degree-title">{{ getLocalizedContent(education.degree) }}</h3>
              <div class="education-meta">
                <span class="institution">{{ getLocalizedContent(education.institution) }}</span>
                <span class="location">{{ getLocalizedContent(education.location) }}</span>
                <span class="period">{{ getLocalizedContent(education.period) }}</span>
              </div>
            </div>
            
            <div class="education-details">
              <div v-if="education.thesis" class="thesis-info">
                <h4 class="thesis-title">{{ t('education.thesis') }}</h4>
                <p class="thesis-description">{{ getLocalizedContent(education.thesis) }}</p>
              </div>
              
              <div v-if="education.focus" class="focus-info">
                <h4 class="focus-title">{{ t('education.focus') }}</h4>
                <p class="focus-description">{{ getLocalizedContent(education.focus) }}</p>
              </div>
              
              <div v-if="education.achievement" class="achievement-info">
                <h4 class="achievement-title">{{ t('education.achievement') }}</h4>
                <p class="achievement-description">{{ getLocalizedContent(education.achievement) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { useLanguage } from '../composables/useLanguage'
import { resumeData } from '../assets/data/resume-data-multilingual'

const educationData = resumeData.education
const { t, getLocalizedContent } = useLanguage()

const { target: educationRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})
</script>

<style scoped>
.education-section {
  padding: 6rem 0;
  background: #f8fafc;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.section-header.animate {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

.education-timeline {
  position: relative;
  padding-left: 2rem;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #1D1D1F, #424245);
}

.education-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.education-item.animate {
  opacity: 1;
  transform: translateX(0);
}

.education-item.current {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border-radius: 12px;
  padding: 1rem;
  margin: -1rem;
}

.education-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.marker-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #1D1D1F;
}

.marker-dot.current {
  background: #1D1D1F;
  box-shadow: 0 0 0 3px #1D1D1F, 0 0 0 6px rgba(29, 29, 31, 0.3);
  animation: pulse 2s infinite;
}

.marker-dot.completed {
  background: #424245;
  box-shadow: 0 0 0 3px #424245;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.current-indicator {
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #1D1D1F;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: 500;
  white-space: nowrap;
}

.education-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-left: 1rem;
  transition: all 0.3s ease;
}

.education-content:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.education-header {
  margin-bottom: 1.5rem;
}

.degree-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.education-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #718096;
}

.institution {
  font-weight: 600;
  color: #4a5568;
}

.location {
  color: #718096;
}

.period {
  color: #1D1D1F;
  font-weight: 500;
}

.education-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.thesis-info,
.focus-info,
.achievement-info {
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #1D1D1F;
}

.thesis-title,
.focus-title,
.achievement-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.thesis-description,
.focus-description,
.achievement-description {
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.achievement-info {
  border-left-color: #424245;
  background: linear-gradient(135deg, rgba(72, 187, 120, 0.05), rgba(72, 187, 120, 0.1));
}

@media (max-width: 768px) {
  .education-timeline {
    padding-left: 1.5rem;
  }
  
  .education-timeline::before {
    left: 0.75rem;
  }
  
  .education-marker {
    left: -1.5rem;
  }
  
  .education-content {
    margin-left: 0.5rem;
    padding: 1.5rem;
  }
  
  .education-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .current-indicator {
    font-size: 0.6rem;
    padding: 0.1rem 0.3rem;
  }
}
</style>
