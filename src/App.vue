<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="nav-container">
        <div class="nav-brand">
          <a href="#hero" class="brand-link">
            <span class="brand-name">Iheb Mrabet</span>
          </a>
        </div>
        
        <div class="nav-menu" :class="{ 'active': mobileMenuOpen }">
          <a href="#about" class="nav-link" @click="closeMobileMenu">{{ t('nav.about') }}</a>
          <a href="#experience" class="nav-link" @click="closeMobileMenu">{{ t('nav.experience') }}</a>
          <a href="#projects" class="nav-link" @click="closeMobileMenu">{{ t('nav.projects') }}</a>
          <a href="#skills" class="nav-link" @click="closeMobileMenu">{{ t('nav.skills') }}</a>
          <a href="#education" class="nav-link" @click="closeMobileMenu">{{ t('nav.education') }}</a>
          <a href="#contact" class="nav-link" @click="closeMobileMenu">{{ t('nav.contact') }}</a>
          
          <div class="nav-actions">
            <div class="language-switcher">
              <LanguageDropdown />
            </div>
            <a :href="`mailto:${personal.email}?subject=CV Request`" class="btn btn-resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>
        </div>
        
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    
    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <LanguagesSection />
      <ContactSection />
    </main>
    
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <h3>Iheb Mrabet</h3>
            <p>{{ t('footer.subtitle') }}</p>
          </div>
          
          <div class="footer-links">
            <a href="#about">{{ t('nav.about') }}</a>
            <a href="#experience">{{ t('nav.experience') }}</a>
            <a href="#projects">{{ t('nav.projects') }}</a>
            <a href="#contact">{{ t('nav.contact') }}</a>
          </div>
          
          <div class="footer-social">
            <a :href="personal.linkedin" target="_blank" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a :href="`mailto:${personal.email}`" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 8.545l6.545 4.91V3.821h3.819A1.636 1.636 0 0 1 24 5.457z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Iheb Mrabet. All rights reserved.</p>
          <p>{{ t('footer.builtWith') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { resumeData } from './assets/data/resume-data-multilingual'
import { useLanguage } from './composables/useLanguage'

// Import all components
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import LanguagesSection from './components/LanguagesSection.vue'
import ContactSection from './components/ContactSection.vue'
import LanguageDropdown from './components/LanguageDropdown.vue'

const personal = resumeData.personal

// Language functionality
const { currentLanguage, t, getLocalizedContent, switchLanguage, availableLanguages } = useLanguage()

// Navigation state
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

// Handle scroll for navbar
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Smooth scroll for navigation links
const smoothScroll = (targetId) => {
  const target = document.querySelector(targetId)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Add smooth scroll to all nav links
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      smoothScroll(targetId)
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navigation Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: #2d3748;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.brand-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
}

.language-switcher {
  margin-left: 0;
  padding-left: 0;
  border-left: none;
}

.btn-resume {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.btn-resume:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  color: white;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #4a5568;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Main Content */
main {
  flex: 1;
  margin-top: 70px;
}

/* Footer Styles */
.footer {
  background: #2d3748;
  color: white;
  padding: 3rem 0 1rem;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-info h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.footer-info p {
  color: #a0aec0;
  margin: 0;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-links a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #667eea;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding-top: 1rem;
  text-align: center;
}

.footer-bottom p {
  color: #a0aec0;
  margin: 0.3rem 0;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 1rem;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-links {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .footer-social {
    align-items: center;
  }
  
  .nav-actions {
    flex-direction: column;
    margin-left: 0;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
    gap: 1rem;
  }
  
  .language-switcher {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
}

@media (max-width: 480px) {
  .nav-container {
    height: 60px;
  }
  
  main {
    margin-top: 60px;
  }
  
  .brand-name {
    font-size: 1.1rem;
  }
  
  .brand-title {
    font-size: 0.7rem;
  }
}
</style>
