<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header animate">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle">{{ t('contact.subtitle') }}</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info animate">
          <div class="contact-card">
            <div class="contact-header">
              <h3>{{ t('contact.contactInfo') }}</h3>
              <p>{{ t('contact.readyToCollaborate') }}</p>
            </div>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div class="contact-text">
                  <h4>{{ t('contact.email') }}</h4>
                  <a :href="`mailto:${personal.email}`" class="contact-link">
                    {{ personal.email }}
                  </a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div class="contact-text">
                  <h4>{{ t('contact.phone') }}</h4>
                  <a :href="`tel:${personal.phone}`" class="contact-link">
                    {{ personal.phone }}
                  </a>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <h4>{{ t('contact.location') }}</h4>
                  <span class="contact-value">{{ personal.address }}</span>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🌐</div>
                <div class="contact-text">
                  <h4>LinkedIn</h4>
                  <a :href="personal.linkedin" target="_blank" class="contact-link">
                    linkedin.com/in/iheb-mrabet
                  </a>
                </div>
              </div>
            </div>
            
            <div class="contact-actions">
              <a :href="`mailto:${personal.email}?subject=Portfolio Inquiry`" class="btn btn-primary">
                {{ t('contact.sendEmail') }}
              </a>
              <a :href="personal.linkedin" target="_blank" class="btn btn-secondary">
                {{ t('contact.connectLinkedIn') }}
              </a>
            </div>
          </div>
        </div>
        
        <div class="contact-form animate">
          <div class="form-card">
            <h3>{{ t('contact.quickMessage') }}</h3>
            <p>{{ t('contact.sendMessageDirectly') }}</p>
            
            <div class="form-actions">
              <a :href="`mailto:${personal.email}?subject=Portfolio Inquiry&body=Hello Iheb,%0D%0A%0D%0AI'm interested in discussing a potential collaboration.%0D%0A%0D%0AProject details:%0D%0A%0D%0A%0D%0A%0D%0ABest regards,`" 
                 class="btn btn-primary btn-large">
                {{ t('contact.openEmailClient') }}
              </a>
            </div>
            
            <div class="form-note">
              <p><strong>{{ t('contact.note') }}</strong> {{ t('contact.emailNote') }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-footer animate">
        <div class="availability-status">
          <div class="status-indicator available"></div>
          <span>{{ t('contact.availableForProjects') }}</span>
        </div>
        
        <div class="response-time">
          <p>{{ t('contact.responseTime') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import { useLanguage } from '../composables/useLanguage'
import { resumeData } from '../assets/data/resume-data-multilingual'

const personal = resumeData.personal
const { t, getLocalizedContent } = useLanguage()

const { target: contactRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1
})
</script>

<style scoped>
.contact-section {
  padding: 8rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%) !important;
  color: var(--text-primary);
  position: relative;
}

.contact-section::before {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-info {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out 0.2s;
}

.contact-info.animate {
  opacity: 1;
  transform: translateX(0);
}

.contact-form {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease-out 0.4s;
}

.contact-form.animate {
  opacity: 1;
  transform: translateX(0);
}

.contact-card,
.form-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.contact-card::before,
.form-card::before {
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

.contact-card:hover,
.form-card:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-4px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    inset 0 -1px 0 rgba(255, 255, 255, 0.3);
}

.contact-header h3,
.form-card h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1D1D1F;
}

.contact-header p,
.form-card p {
  color: #424245;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.contact-text h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1D1D1F;
  margin-bottom: 0.3rem;
}

.contact-link,
.contact-value {
  color: #424245;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #1D1D1F;
  text-decoration: underline;
}

.contact-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
  text-align: center;
}

.btn-primary {
  background: #1D1D1F;
  color: white;
}

.btn-primary:hover {
  background: #424245;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #1D1D1F;
  border-color: #E5E5EA;
}

.btn-secondary:hover {
  background: #1D1D1F;
  color: white;
  transform: translateY(-2px);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  width: 100%;
}

.form-actions {
  margin-bottom: 1.5rem;
}

.form-note {
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #E5E5EA;
}

.form-note p {
  margin: 0;
  font-size: 0.9rem;
  color: #424245;
}

.contact-footer {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out 0.6s;
}

.contact-footer.animate {
  opacity: 1;
  transform: translateY(0);
}

.availability-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-indicator.available {
  background: #48bb78;
  box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(29, 29, 31, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(29, 29, 31, 0);
  }
}

.availability-status span {
  font-weight: 500;
  color: #1D1D1F;
}

.response-time p {
  color: #424245;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-card,
  .form-card {
    padding: 1.5rem;
  }
  
  .contact-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
  
  .availability-status {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
