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
  padding: 6rem 0;
  background: #f8fafc;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
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
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 2rem;
}

.key-highlights h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.key-highlights ul {
  list-style: none;
  padding: 0;
}

.key-highlights li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: #4a5568;
  line-height: 1.6;
}

.key-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
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
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.skill-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-category {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.skill-category h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.8rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.skill-tag.more {
  background: #e2e8f0;
  color: #4a5568;
}

.skill-tag.more:hover {
  background: #cbd5e0;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skill-categories {
    gap: 1rem;
  }
  
  .skill-category {
    padding: 1rem;
  }
}
</style>

