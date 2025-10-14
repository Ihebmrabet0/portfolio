<template>
  <section id="hero" class="hero-section" ref="heroRef">
    <div class="hero-content">
      <div class="profile-container animate">
        <div class="profile-image">
          <LazyImage
            :src="personal.profileImage"
            :alt="`${personal.name} - ${personal.title}`"
            aspect-ratio="1/1"
            placeholder-text="Profile Photo"
          />
        </div>
        
        <h1 class="hero-name">{{ personal.name }}</h1>
        <h2 class="hero-title">{{ getLocalizedContent(personal.title) }}</h2>
        <p class="hero-description">{{ getLocalizedContent(personal.tagline) }}</p>
        
        <div class="core-competencies">
          <h3 class="competencies-title">Core Competencies</h3>
          <div class="competency-tags">
            <span class="competency-tag">Robotics & Simulation</span>
            <span class="competency-tag">AI & Machine Learning</span>
            <span class="competency-tag">CAD & Prototyping</span>
            <span class="competency-tag">Programming</span>
            <span class="competency-tag">PLC & Automation</span>
            <span class="competency-tag">Web Technologies</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator animate">
      <div class="scroll-arrow"></div>
      <span>{{ t('hero.scrollToExplore') }}</span>
    </div>
  </section>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { useLanguage } from '../composables/useLanguage'
import LazyImage from './LazyImage.vue'
import { resumeData } from '../assets/data/resume-data-multilingual'

const personal = resumeData.personal
const { t, getLocalizedContent } = useLanguage()

const { target: heroRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: #f8fafc;
  padding: 2rem 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: -2;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.6; }
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.profile-container {
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.profile-image {
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #6A5ACD;
  box-shadow: 0 4px 16px rgba(106, 90, 205, 0.2);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(106, 90, 205, 0.3);
}

.hero-text.animate {
  opacity: 1;
  transform: translateY(0);
}

.hero-name {
  font-family: 'Poppins', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 0.5rem;
  line-height: 1.1;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #666666;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1rem;
  color: #555555;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.core-competencies {
  margin-top: 3rem;
  text-align: center;
}

.competencies-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.competency-tags {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.competency-tag {
  background: #E0E0F8;
  color: #6A5ACD;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.competency-tag:hover {
  background: #6A5ACD;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(106, 90, 205, 0.3);
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-2px);
}

.hero-image {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.8s ease-out 0.2s;
}

.hero-image.animate {
  opacity: 1;
  transform: translateX(0);
}

.hero-image :deep(.lazy-image-container) {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #718096;
  opacity: 0;
  transition: all 0.8s ease-out 0.5s;
  text-align: center;
  width: 100%;
}

.scroll-indicator.animate {
  opacity: 1;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: #718096;
  position: relative;
  margin-bottom: 0.5rem;
  animation: bounce 2s infinite;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 10px;
  height: 10px;
  border-right: 2px solid #718096;
  border-bottom: 2px solid #718096;
  transform: rotate(45deg);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

.scroll-indicator span {
  font-size: 0.9rem;
  opacity: 0.8;
  text-align: center;
  width: 100%;
  display: block;
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 1rem;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
  }
  
  .hero-name {
    font-size: 1.8rem;
  }
  
  .hero-title {
    font-size: 1rem;
  }
  
  .hero-description {
    font-size: 0.9rem;
  }
  
  .competency-tags {
    gap: 0.5rem;
  }
  
  .competency-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>

