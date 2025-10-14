<template>
  <section id="languages" class="languages-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('languages.title') }}</h2>
        <p class="section-subtitle">{{ t('languages.subtitle') }}</p>
      </div>
      
      <div class="languages-content">
        <div class="languages-grid animate">
          <div 
            v-for="language in languagesData" 
            :key="language.name"
            class="language-card"
          >
            <div class="language-header">
              <h3 class="language-name">{{ language.name }}</h3>
              <span class="language-level">{{ getLocalizedContent(language.level) }}</span>
            </div>
            
            <div class="proficiency-chart">
              <div class="proficiency-item">
                <span class="skill-label">{{ t('languages.reading') }}</span>
                <div class="proficiency-bar">
                  <div class="proficiency-track">
                    <div 
                      class="proficiency-fill" 
                      :style="{ width: (language.proficiency.read / 5) * 100 + '%' }"
                    ></div>
                  </div>
                  <span class="proficiency-score">{{ language.proficiency.read }}</span>
                </div>
              </div>
              
              <div class="proficiency-item">
                <span class="skill-label">{{ t('languages.speaking') }}</span>
                <div class="proficiency-bar">
                  <div class="proficiency-track">
                    <div 
                      class="proficiency-fill" 
                      :style="{ width: (language.proficiency.speak / 5) * 100 + '%' }"
                    ></div>
                  </div>
                  <span class="proficiency-score">{{ language.proficiency.speak }}</span>
                </div>
              </div>
              
              <div class="proficiency-item">
                <span class="skill-label">{{ t('languages.writing') }}</span>
                <div class="proficiency-bar">
                  <div class="proficiency-track">
                    <div 
                      class="proficiency-fill" 
                      :style="{ width: (language.proficiency.write / 5) * 100 + '%' }"
                    ></div>
                  </div>
                  <span class="proficiency-score">{{ language.proficiency.write }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="certifications-section animate">
          <h3 class="certifications-title">{{ t('languages.certifications') }}</h3>
          <div class="certifications-grid">
            <div 
              v-for="cert in certificationsData" 
              :key="cert.name"
              class="certification-card"
            >
              <div class="cert-header">
                <h4 class="cert-name">{{ getLocalizedContent(cert.name) }}</h4>
                <span class="cert-date">{{ cert.year }}</span>
              </div>
              <p v-if="cert.provider" class="cert-provider">{{ getLocalizedContent(cert.provider) }}</p>
            </div>
          </div>
        </div>
        
        <div class="achievements-section animate">
          <h3 class="achievements-title">{{ t('languages.notableAchievements') }}</h3>
          <div class="achievements-list">
            <div 
              v-for="achievement in achievementsData" 
              :key="achievement.title"
              class="achievement-item"
            >
              <div class="achievement-icon">🏆</div>
              <div class="achievement-content">
                <h4 class="achievement-title">{{ getLocalizedContent(achievement.title) }}</h4>
                <p class="achievement-description">{{ getLocalizedContent(achievement.description) }}</p>
                <span class="achievement-year">{{ achievement.year }}</span>
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

const languagesData = resumeData.languages
const certificationsData = resumeData.certifications
const achievementsData = resumeData.achievements
const { t, getLocalizedContent } = useLanguage()

const { target: languagesRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})
</script>

<style scoped>
.languages-section {
  padding: 6rem 0;
  background: white;
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

.languages-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.2s;
}

.languages-grid.animate {
  opacity: 1;
  transform: translateY(0);
}

.language-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.language-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.language-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.language-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.language-level {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.proficiency-chart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.proficiency-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;
}

.proficiency-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.proficiency-track {
  flex: 1;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.proficiency-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 1s ease-out;
  position: relative;
}

.proficiency-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

.proficiency-score {
  font-weight: 600;
  color: #2d3748;
  min-width: 2rem;
  text-align: right;
  flex-shrink: 0;
}

.certifications-section,
.achievements-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.certifications-section.animate {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.4s;
}

.achievements-section.animate {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.6s;
}

.certifications-title,
.achievements-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.certification-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.cert-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
}

.cert-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  flex: 1;
}

.cert-date {
  background: #667eea;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
}

.cert-description {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.cert-provider {
  color: #718096;
  font-size: 0.85rem;
  font-style: italic;
  margin: 0;
}

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.achievement-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.achievement-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #48bb78;
}

.achievement-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.achievement-content {
  flex: 1;
}

.achievement-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.achievement-description {
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.achievement-category {
  background: #48bb78;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
}

@media (max-width: 768px) {
  .languages-grid,
  .certifications-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .language-card,
  .certification-card {
    padding: 1.5rem;
  }
  
  .achievement-item {
    flex-direction: column;
    text-align: center;
  }
  
  .achievement-icon {
    align-self: center;
  }
}
</style>
