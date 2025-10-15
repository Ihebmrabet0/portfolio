<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('about.title') }}</h2>
        <p class="section-subtitle">{{ t('about.subtitle') }}</p>
      </div>
      
      <div class="about-content">
        <div class="about-text animate">
          <p class="about-description">{{ getLocalizedContent(about.summary) }}</p>
          
          <div class="key-highlights">
            <h3>{{ t('about.keyExpertise') }}</h3>
            <ul>
              <li v-for="point in t('about.expertisePoints')" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
        
        <div class="skills-preview animate">
          <h3>{{ t('about.coreCompetencies') }}</h3>
          <div class="skill-categories">
            <div 
              v-for="(skills, category) in skills" 
              :key="category"
              class="skill-category"
            >
              <h4>{{ category }}</h4>
              <div class="skill-tags">
                <span 
                  v-for="skill in skills.slice(0, 4)" 
                  :key="skill"
                  class="skill-tag"
                >
                  {{ skill }}
                </span>
                <span v-if="skills.length > 4" class="skill-tag more">
                  +{{ skills.length - 4 }} more
                </span>
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

const about = resumeData.about
const skills = resumeData.skills
const { t, getLocalizedContent } = useLanguage()

const { target: aboutRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.2
})
</script>

<style scoped>
.about-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
  min-height: 100vh;
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(29, 29, 31, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(134, 134, 139, 0.02) 0%, transparent 50%);
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
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
  font-size: 3rem;
  font-weight: 700;
  color: #1D1D1F;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.3rem;
  color: #424245;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.5;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out 0.2s;
}

.about-text.animate {
  opacity: 1;
  transform: translateX(0);
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #424245;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.key-highlights h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1D1D1F;
  margin-bottom: 1.5rem;
  letter-spacing: -0.01em;
}

.key-highlights ul {
  list-style: none;
  padding: 0;
}

.key-highlights li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #424245;
  line-height: 1.6;
  font-size: 1.1rem;
}

.key-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.1rem;
}

.skills-preview {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out 0.4s;
}

.skills-preview.animate {
  opacity: 1;
  transform: translateX(0);
}

.skills-preview h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
}

.skill-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  transition: all var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.skill-category::before {
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

.skill-category::after {
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

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 20px 10px rgba(255, 255, 255, 1);
  border-color: var(--primary-color);
}

.skill-category h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1D1D1F;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--primary-color);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);
}

.skill-tag:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.skill-tag.more {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--border-light);
}

.skill-tag.more:hover {
  background: var(--border-light);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .skill-categories {
    gap: 1.2rem;
  }
  
  .skill-category {
    padding: 1.5rem;
  }
}
</style>

