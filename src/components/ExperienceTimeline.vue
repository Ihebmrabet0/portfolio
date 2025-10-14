<template>
  <section id="experience" class="experience-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('experience.title') }}</h2>
        <p class="section-subtitle">{{ t('experience.subtitle') }}</p>
      </div>
      
      <div class="timeline">
        <div 
          v-for="(experience, index) in experienceData" 
          :key="experience.id"
          class="timeline-item animate"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="timeline-marker">
            <div class="marker-dot" :class="experience.type"></div>
          </div>
          
          <div class="timeline-content">
            <div class="experience-header">
              <h3 class="experience-title">{{ getLocalizedContent(experience.title) }}</h3>
              <div class="experience-meta">
                <span class="company">{{ getLocalizedContent(experience.company) }}</span>
                <span class="location">{{ getLocalizedContent(experience.location) }}</span>
                <span class="period">{{ getLocalizedContent(experience.period) }}</span>
              </div>
            </div>
            
            <div class="experience-projects" v-if="experience.projects">
              <div 
                v-for="project in experience.projects" 
                :key="project.name"
                class="project-item"
              >
                <h4 class="project-name">{{ getLocalizedContent(project.name) }}</h4>
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

const experienceData = resumeData.experience
const { t, getLocalizedContent } = useLanguage()

const { target: experienceRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})
</script>

<style scoped>
.experience-section {
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.timeline-item.animate {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #667eea;
}

.marker-dot.current {
  background: #667eea;
  box-shadow: 0 0 0 3px #667eea, 0 0 0 6px rgba(102, 126, 234, 0.3);
}

.marker-dot.industry {
  background: #48bb78;
  box-shadow: 0 0 0 3px #48bb78;
}

.marker-dot.academic {
  background: #ed8936;
  box-shadow: 0 0 0 3px #ed8936;
}

.marker-dot.freelance {
  background: #9f7aea;
  box-shadow: 0 0 0 3px #9f7aea;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-left: 1rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.experience-header {
  margin-bottom: 1.5rem;
}

.experience-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #718096;
}

.company {
  font-weight: 600;
  color: #4a5568;
}

.location {
  color: #718096;
}

.period {
  color: #667eea;
  font-weight: 500;
}

.experience-projects {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-item {
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.project-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1.5rem;
  }
  
  .timeline::before {
    left: 0.75rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
  }
  
  .timeline-content {
    margin-left: 0.5rem;
    padding: 1.5rem;
  }
  
  .experience-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>

