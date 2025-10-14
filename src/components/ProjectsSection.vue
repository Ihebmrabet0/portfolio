<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('projects.title') }}</h2>
        <p class="section-subtitle">{{ t('projects.subtitle') }}</p>
      </div>
      
      <div class="projects-grid">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :project="project"
          :style="{ 'animation-delay': `${index * 0.1}s` }"
        />
      </div>
      
      <div class="projects-footer animate">
        <p class="more-projects-text">
          {{ t('projects.moreProjects') }} 
          <a href="#contact" class="contact-link">{{ t('projects.getInTouch') }}</a> {{ t('projects.forDetailedPortfolio') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { useLanguage } from '../composables/useLanguage'
import ProjectCard from './ProjectCard.vue'
import { resumeData } from '../assets/data/resume-data-multilingual'

const { t, getLocalizedContent } = useLanguage()
const { target: projectsRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})

// Extract featured projects from experience data
const featuredProjects = computed(() => {
  const projects = []
  
  // Add projects from experience
  resumeData.experience.forEach(exp => {
    if (exp.projects) {
      exp.projects.forEach(project => {
        // Get the localized name for ID generation
        const localizedName = getLocalizedContent(project.name)
        projects.push({
          id: `${exp.id}-${localizedName.toLowerCase().replace(/\s+/g, '-')}`,
          name: project.name,
          description: project.description,
          technologies: project.technologies,
          image: project.image,
          url: project.url || null
        })
      })
    }
  })
  
  // Add personal projects
  if (resumeData.projects) {
    resumeData.projects.forEach(project => {
      projects.push({
        id: project.id,
        name: project.name,
        description: project.description,
        technologies: project.technologies,
        image: project.image,
        url: project.url || null
      })
    })
  }
  
  // Return first 6 projects
  return projects.slice(0, 6)
})
</script>

<style scoped>
.projects-section {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.projects-footer {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.3s;
}

.projects-footer.animate {
  opacity: 1;
  transform: translateY(0);
}

.more-projects-text {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 0;
}

.contact-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-section {
    padding: 4rem 0;
  }
}
</style>

