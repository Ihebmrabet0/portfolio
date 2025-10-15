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
import profileImage from '../assets/images/profile.jpg'

const personal = { ...resumeData.personal, profileImage }
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
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  padding: 4rem 0;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 20%, rgba(29, 29, 31, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(134, 134, 139, 0.03) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
  z-index: 1;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
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
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  text-align: center;
}

.profile-container {
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.profile-image {
  width: 200px;
  height: 200px;
  margin: 0 auto 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--primary-color);
  box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
  transition: all var(--transition-spring);
  background: var(--bg-primary);
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(0, 123, 255, 0.25);
  border-color: var(--primary-dark);
}

.hero-text.animate {
  opacity: 1;
  transform: translateY(0);
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  color: #1D1D1F;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #424245;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.hero-description {
  font-size: 1.1rem;
  color: #6E6E73;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

.core-competencies {
  margin-top: 3rem;
  text-align: center;
}

.competencies-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1D1D1F;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
}

.competency-tags {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.competency-tag {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #1D1D1F;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.competency-tag::before {
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

.competency-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(29, 29, 31, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
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
  background: #1D1D1F;
  color: white;
  border: none;
  box-shadow: var(--shadow-card);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  background: #424245;
}

.btn-secondary {
  background: transparent;
  color: #1D1D1F;
  border: 2px solid #1D1D1F;
}

.btn-secondary:hover {
  background: #1D1D1F;
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
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
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  opacity: 0;
  transition: all var(--transition-slow) 0.5s;
  text-align: center;
  width: 100%;
}

.scroll-indicator.animate {
  opacity: 1;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: var(--text-muted);
  position: relative;
  margin-bottom: 0.5rem;
  animation: bounce 2s infinite;
  border-radius: 1px;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--text-muted);
  border-bottom: 2px solid var(--text-muted);
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
    width: 160px;
    height: 160px;
  }
  
  .hero-name {
    font-size: 2.2rem;
  }
  
  .hero-title {
    font-size: 1.1rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .competency-tags {
    gap: 0.8rem;
  }
  
  .competency-tag {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}
</style>

