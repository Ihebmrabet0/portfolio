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
          url: project.url || null,
          video: project.video || null,
          projectDetails: project.projectDetails || null,
          journalArticle: project.journalArticle || null
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
        url: project.url || null,
        video: project.video || null,
        projectDetails: project.projectDetails || null,
        journalArticle: project.journalArticle || null
      })
    })
  }
  
  // Debug: Log Penelope project specifically
  const penelopeProject = projects.find(p => {
    if (typeof p.name === 'string') {
      return p.name.includes('Penelope')
    } else if (typeof p.name === 'object' && p.name) {
      return Object.values(p.name).some(name => name.includes('Penelope'))
    }
    return false
  })
  if (penelopeProject) {
    console.log('Penelope project found:', penelopeProject)
  }
  
  // Return first 6 projects
  return projects.slice(0, 6)
})
</script>

<style scoped>
.projects-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%) !important;
  position: relative;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(29, 29, 31, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 30% 70%, rgba(134, 134, 139, 0.01) 0%, transparent 50%);
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
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 0;
  font-weight: 400;
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.contact-link:hover {
  color: var(--primary-dark);
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

