<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        <p class="section-subtitle">{{ t('skills.subtitle') }}</p>
      </div>
      
      <div class="skills-grid">
        <div 
          v-for="(skills, category) in skillsData" 
          :key="category"
          class="skill-category-card animate"
        >
          <div class="category-header">
            <h3 class="category-title">{{ category }}</h3>
            <div class="skill-count">{{ skills.length }} {{ t('skills.skills') }}</div>
          </div>
          
          <div class="skills-list">
            <div 
              v-for="(skill, index) in skills" 
              :key="skill"
              class="skill-item"
              :style="{ 'animation-delay': `${index * 0.05}s` }"
            >
              <span class="skill-name">{{ skill }}</span>
              <div class="skill-level">
                <div class="skill-bar">
                  <div 
                    class="skill-progress" 
                    :style="{ width: getSkillLevel(skill) + '%' }"
                  ></div>
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

const skillsData = resumeData.skills
const { t, getLocalizedContent } = useLanguage()

const { target: skillsRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})

// Mock skill levels based on category and skill name
const getSkillLevel = (skill) => {
  const skillLevels = {
    // Programming
    'Python': 95,
    'C++': 90,
    'C': 80,
    'JavaScript': 85,
    'SQL': 75,
    'Pascal': 70,
    'OpenCV': 80,
    'REST': 85,
    'MQTT': 80,
    'TCP/IP': 85,
    'Git': 90,
    'Linux': 85,
    
    // AI & ML
    'PyTorch': 90,
    'Scikit-learn': 85,
    'Jetson/JetPack': 80,
    'LLMs': 75,
    'Unsloth': 70,
    'Isaac-GR00T': 70,
    
    // Robotics
    'ROS2': 95,
    'MuJoCo': 80,
    'RoboDK': 85,
    'Unity': 75,
    'KUKA (KRL)': 90,
    'Universal Robots': 80,
    
    // CAD & Prototyping
    'SolidWorks': 90,
    'CATIA V5': 85,
    'Fusion 360': 80,
    'Blender': 75,
    'Autocad': 80,
    'Eagle': 75,
    '3D printing': 90,
    'soldering': 85,
    'assembly': 90,
    
    // Cloud & Systems
    'Docker': 80,
    'Google Cloud': 75,
    'SAP': 70,
    
    // PLC & Automation
    'SIMATIC S7-1200': 80,
    'TIA-Portal': 75,
    'TwinCAT': 85,
    
    // Web Technologies
    'Node.js': 80,
    'Vue.js': 85,
    'HTML/CSS': 90,
    'Headless CMS (Directus)': 75,
    
    // MS Office
    'Word': 90,
    'Excel': 85,
    'PowerPoint': 85,
    
    // Default level
    'default': 70
  }
  
  return skillLevels[skill] || skillLevels.default
}
</script>

<style scoped>
.skills-section {
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.skill-category-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.skill-category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #667eea;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.category-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.skill-count {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.6s ease-out forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.skill-name {
  font-weight: 500;
  color: #4a5568;
  font-size: 0.95rem;
}

.skill-level {
  display: flex;
  align-items: center;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  transition: width 1s ease-out;
  position: relative;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skill-category-card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
