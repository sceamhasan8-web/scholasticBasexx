import './style.css';
import { renderFeatures } from './components/Features.js';
import { setupDashboardPreview } from './components/DashboardPreview.js';
import { renderWhyChoose } from './components/WhyChoose.js';
import { setupGallery } from './components/Gallery.js';
import { renderTestimonials } from './components/Testimonials.js';
import { setupFAQ } from './components/FAQ.js';

// Global Toast Notification System
export function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center space-x-3 px-5 py-3.5 rounded-2xl glass-card border text-xs font-semibold shadow-2xl animate-fadeIn ${
    type === 'success' 
      ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/90' 
      : 'border-cyan-500/40 text-cyan-300 bg-slate-900/90'
  }`;
  
  toast.innerHTML = `
    <span class="text-base">${type === 'success' ? '✅' : '🔔'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// 1. Operating System Auto Detection Logic
function detectOperatingSystem() {
  const userAgent = window.navigator.userAgent || '';
  const osText = document.getElementById('os-detected-text');
  const heroDownloadText = document.getElementById('hero-download-text');
  const primaryBtn = document.getElementById('hero-primary-download-btn');

  let detectedOS = 'Windows';
  let installerFile = 'ScholasticBase_v2.4.0_Setup.exe';

  if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) {
    detectedOS = 'macOS';
    installerFile = 'ScholasticBase_v2.4.0.dmg';
  } else if (userAgent.includes('Android')) {
    detectedOS = 'Android';
    installerFile = 'ScholasticBase_v2.4.0.apk';
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    detectedOS = 'iOS';
    installerFile = 'AppStore_ScholasticBase';
  } else if (userAgent.includes('Linux')) {
    detectedOS = 'Linux';
    installerFile = 'ScholasticBase_v2.4.0.AppImage';
  }

  if (osText) {
    osText.textContent = `Recommended for your OS: ${detectedOS} (v2.4.0)`;
  }
  if (heroDownloadText) {
    heroDownloadText.textContent = `Download for ${detectedOS}`;
  }

  if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
      triggerDownloadSimulation(detectedOS, installerFile);
    });
  }
}

// 2. Animated Stats Counter Trigger
function setupAnimatedCounters() {
  const counters = document.querySelectorAll('.counter');
  let started = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.target, 10);
          const duration = 2000;
          const step = Math.ceil(target / (duration / 20));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = current.toLocaleString();
            }
          }, 20);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

// 3. Navbar Scroll Blur Transparency & Back To Top Button
function setupScrollEffects() {
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('shadow-2xl', 'bg-brand-dark/95');
    } else {
      navbar?.classList.remove('shadow-2xl', 'bg-brand-dark/95');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      backToTopBtn?.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 4. Download Simulation Modal Progress
function triggerDownloadSimulation(osName, fileName) {
  const modal = document.getElementById('download-simulation-modal');
  const title = document.getElementById('download-modal-title');
  const subtitle = document.getElementById('download-modal-subtitle');
  const progressBar = document.getElementById('download-progress-bar');
  const statusText = document.getElementById('download-modal-status');
  const closeBtn = document.getElementById('close-download-modal');

  if (!modal) return;

  modal.classList.remove('hidden');
  title.textContent = `Downloading ${osName} Installer`;
  subtitle.textContent = `File: ${fileName}`;
  progressBar.style.width = '0%';
  statusText.textContent = 'Connecting to high-speed cloud CDN...';

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 10;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      statusText.textContent = 'Download Complete! Launch installer to install.';
      showToast(`${fileName} successfully downloaded!`, 'success');
    } else if (progress > 50) {
      statusText.textContent = 'Verifying cryptographic checksum (SHA-256)...';
    }
    progressBar.style.width = `${progress}%`;
  }, 200);

  closeBtn.onclick = () => modal.classList.add('hidden');
}

// 5. Pricing Billing Toggle Logic
function setupPricingToggle() {
  const toggleBtn = document.getElementById('pricing-billing-toggle');
  const dot = document.getElementById('pricing-toggle-dot');
  const priceElements = document.querySelectorAll('.pricing-val');
  let isAnnual = false;

  toggleBtn?.addEventListener('click', () => {
    isAnnual = !isAnnual;
    if (isAnnual) {
      dot?.classList.add('translate-x-6');
      priceElements.forEach(el => el.textContent = el.dataset.annual);
      showToast('20% Annual Discount Applied!', 'info');
    } else {
      dot?.classList.remove('translate-x-6');
      priceElements.forEach(el => el.textContent = el.dataset.monthly);
    }
  });

  document.querySelectorAll('.select-plan-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      const modal = document.getElementById('get-started-modal');
      if (modal) modal.classList.remove('hidden');
      showToast(`Selected Plan: ${plan}`, 'info');
    });
  });
}

// 6. Modals Setup (Get Started, Demo Video, Mobile Menu)
function setupModals() {
  // Mobile Menu
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu?.classList.add('hidden'));
  });

  // Get Started Modal
  const getStartedModal = document.getElementById('get-started-modal');
  const openGetStartedBtns = [
    document.getElementById('open-get-started-btn'),
    document.getElementById('mobile-get-started-btn'),
    document.getElementById('hero-get-started-btn')
  ];
  const closeGetStartedBtn = document.getElementById('close-get-started-modal');
  const getStartedForm = document.getElementById('get-started-form');

  openGetStartedBtns.forEach(btn => btn?.addEventListener('click', () => getStartedModal?.classList.remove('hidden')));
  closeGetStartedBtn?.addEventListener('click', () => getStartedModal?.classList.add('hidden'));

  getStartedForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    getStartedModal?.classList.add('hidden');
    showToast('Institution registered! Free 14-day trial link sent to your email.', 'success');
  });

  // Demo Video Modal
  const videoModal = document.getElementById('demo-video-modal');
  const watchDemoBtn = document.getElementById('hero-watch-demo-btn');
  const closeVideoBtn = document.getElementById('close-demo-video-modal');
  const videoPlayBtn = document.getElementById('demo-video-play-btn');

  watchDemoBtn?.addEventListener('click', () => videoModal?.classList.remove('hidden'));
  closeVideoBtn?.addEventListener('click', () => videoModal?.classList.add('hidden'));
  videoPlayBtn?.addEventListener('click', () => {
    showToast('Playing ScholasticBase 3-Minute HD Demo Video...', 'info');
  });

  // Download Trigger buttons across page
  document.querySelectorAll('.trigger-download-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const os = btn.dataset.os;
      const file = btn.dataset.file;
      triggerDownloadSimulation(os, file);
    });
  });
}

// 7. Contact Form & Admin Email Submission
function setupContactForm() {
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;

    showToast(`Thank you ${name}! Message sent directly to sceamhasan8@gmail.com. We will respond within 2 hours.`, 'success');
    form.reset();
  });

  // Newsletter Form
  const newsForm = document.getElementById('newsletter-form');
  newsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    showToast(`Subscribed ${email} to ScholasticBase updates!`, 'success');
    newsForm.reset();
  });
}

// 8. AI Chat Assistant Drawer
function setupChatDrawer() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const drawer = document.getElementById('chat-drawer');
  const closeBtn = document.getElementById('close-chat-drawer');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');

  toggleBtn?.addEventListener('click', () => drawer?.classList.toggle('hidden'));
  closeBtn?.addEventListener('click', () => drawer?.classList.add('hidden'));

  const botAnswers = {
    pricing: 'Our pricing starts at $49/mo for Starter (up to 300 students) and $99/mo for Professional (up to 1,500 students). Annual plans save 20%!',
    download: 'You can download installers for Windows (.exe), macOS (.dmg), Android (.apk / Play Store), and iOS App Store in the Download section.',
    security: 'We use AES-256 bit encryption, role-based security permissions, and automated daily cloud backups.',
    email: 'Our admin email is sceamhasan8@gmail.com. You can reach out anytime for custom setups!',
    features: 'ScholasticBase includes Student Profiles, QR Attendance, Exam Gradebooks, Fee Collections, SMS alerts, and Parent Portals.'
  };

  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'bg-blue-600/30 p-2.5 rounded-xl border border-blue-500/20 text-white ml-6 text-right';
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    chatInput.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Bot Response logic
    setTimeout(() => {
      const lower = text.toLowerCase();
      let response = 'Thank you for contacting ScholasticBase support! For specific questions, email our admin at sceamhasan8@gmail.com.';

      if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) response = botAnswers.pricing;
      else if (lower.includes('download') || lower.includes('install') || lower.includes('windows') || lower.includes('mac')) response = botAnswers.download;
      else if (lower.includes('security') || lower.includes('data') || lower.includes('safe')) response = botAnswers.security;
      else if (lower.includes('email') || lower.includes('admin') || lower.includes('contact')) response = botAnswers.email;
      else if (lower.includes('feature') || lower.includes('module') || lower.includes('attendance')) response = botAnswers.features;

      const botMsg = document.createElement('div');
      botMsg.className = 'bg-slate-900 p-2.5 rounded-xl border border-cyan-500/30 text-cyan-300 mr-6';
      botMsg.textContent = response;
      messages.appendChild(botMsg);
      messages.scrollTop = messages.scrollHeight;
    }, 600);
  });
}

// 9. Theme Switcher Manager (Dark & Light Mode Toggle)
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const toggleIcon = document.getElementById('theme-toggle-icon');
  const toggleText = document.getElementById('theme-toggle-text');

  const mobileToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  const mobileToggleIcon = document.getElementById('mobile-theme-toggle-icon');
  const mobileToggleText = document.getElementById('mobile-theme-toggle-text');

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('scholastic_theme') || 'dark';

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      if (toggleIcon) toggleIcon.textContent = '☀️';
      if (toggleText) toggleText.textContent = 'Light';
      if (mobileToggleIcon) mobileToggleIcon.textContent = '☀️';
      if (mobileToggleText) mobileToggleText.textContent = 'Switch to Dark Mode';
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      if (toggleIcon) toggleIcon.textContent = '🌙';
      if (toggleText) toggleText.textContent = 'Dark';
      if (mobileToggleIcon) mobileToggleIcon.textContent = '🌙';
      if (mobileToggleText) mobileToggleText.textContent = 'Switch to Light Mode';
    }
    localStorage.setItem('scholastic_theme', theme);
  }

  // Initial Apply
  applyTheme(savedTheme);

  function toggle() {
    const isLight = document.documentElement.classList.contains('light');
    const newTheme = isLight ? 'dark' : 'light';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} Mode`, 'info');
  }

  toggleBtn?.addEventListener('click', toggle);
  mobileToggleBtn?.addEventListener('click', toggle);
}

// Initialize Application Modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  detectOperatingSystem();
  setupAnimatedCounters();
  setupScrollEffects();
  renderFeatures('features-grid', 'features-tab-container');
  setupDashboardPreview();
  renderWhyChoose('why-choose-grid');
  setupGallery('gallery-grid', 'gallery-filter-buttons', 'lightbox-modal');
  setupPricingToggle();
  renderTestimonials('testimonials-grid');
  setupFAQ('faq-accordion-container', 'faq-search-input');
  setupModals();
  setupContactForm();
  setupChatDrawer();
});

