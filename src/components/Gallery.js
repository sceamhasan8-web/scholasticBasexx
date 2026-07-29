export const galleryItems = [
  {
    id: 1,
    category: 'dashboard',
    title: 'Executive Admin Dashboard',
    subtitle: 'Comprehensive overview of enrollment, revenue, and daily attendance.',
    icon: '📊',
    gradient: 'from-blue-600 to-cyan-500',
    details: 'Displays real-time institution KPIs, quick action buttons, recent activity logs, and pending administrative tasks.'
  },
  {
    id: 2,
    category: 'students',
    title: 'Student Directory & Records',
    subtitle: 'Digital student bio-data, parent emergency contacts, and ID generator.',
    icon: '👨‍🎓',
    gradient: 'from-purple-600 to-pink-500',
    details: 'Allows batch student imports, roll allocation, section assignment, and digital student card printing with QR codes.'
  },
  {
    id: 3,
    category: 'teachers',
    title: 'Teacher Portal & Timetable',
    subtitle: 'Faculty duty schedules, substitution planner, and salary slips.',
    icon: '👩‍🏫',
    gradient: 'from-cyan-500 to-emerald-500',
    details: 'Teachers can view assigned period routines, log attendance, upload homework assignments, and submit term marks.'
  },
  {
    id: 4,
    category: 'exams',
    title: 'Exam Gradebook & Cards',
    subtitle: 'Multi-term grade calculation, admit cards, and report publishing.',
    icon: '📝',
    gradient: 'from-blue-600 to-purple-600',
    details: 'Supports customizable GPA/CGPA grading rules, automated mark sheets, rank generation, and printable report cards.'
  },
  {
    id: 5,
    category: 'attendance',
    title: 'QR Code Attendance Tracker',
    subtitle: 'Gate RFID scanner integration with instant parent SMS alerts.',
    icon: '⚡',
    gradient: 'from-emerald-500 to-cyan-500',
    details: 'Monitors real-time gate entry times for students and faculty. Sends immediate absent notifications to parents.'
  },
  {
    id: 6,
    category: 'fees',
    title: 'Fee Collection & Invoicing',
    subtitle: 'Integrated online payments, due alerts, and PDF digital receipts.',
    icon: '💳',
    gradient: 'from-purple-600 to-blue-600',
    details: 'Supports Stripe gateway payments, partial fee collections, late penalty waivers, and automated financial ledgers.'
  },
  {
    id: 7,
    category: 'mobile',
    title: 'Mobile Application Portal',
    subtitle: 'iOS & Android app for parents to view homework and attendance.',
    icon: '📱',
    gradient: 'from-pink-500 to-purple-500',
    details: 'Parent and teacher native app with push notifications, fees payment directly from mobile, and live attendance alerts.'
  },
  {
    id: 8,
    category: 'reports',
    title: 'Analytics & Financial Audit',
    subtitle: 'Exportable PDF/Excel reports for school board meetings and audits.',
    icon: '📈',
    gradient: 'from-cyan-400 to-blue-600',
    details: 'In-depth visual charts for academic performance trends, revenue versus expenses, and attendance distribution.'
  }
];

export function setupGallery(containerId, filterContainerId, lightboxModalId) {
  const container = document.getElementById(containerId);
  const filterBtns = document.querySelectorAll('.gallery-filter');
  const lightboxModal = document.getElementById(lightboxModalId);
  if (!container) return;

  let activeFilter = 'all';
  let currentIndex = 0;

  function renderGallery() {
    const itemsToDisplay = activeFilter === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === activeFilter);

    container.innerHTML = itemsToDisplay.map((item, idx) => `
      <div class="glass-card glass-card-hover p-4 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 cursor-pointer group" data-index="${idx}">
        <div class="w-full h-44 rounded-xl bg-slate-900 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-4">
          <div class="absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div class="z-10 text-center space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-white/10 text-2xl flex items-center justify-center mx-auto shadow-md transform group-hover:scale-110 transition-transform">
              ${item.icon}
            </div>
            <div class="text-xs font-bold text-white">${item.title}</div>
            <span class="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Click to Preview</span>
          </div>
        </div>
        <div>
          <h3 class="text-xs font-bold text-white mb-1">${item.title}</h3>
          <p class="text-[11px] text-gray-400 leading-snug">${item.subtitle}</p>
        </div>
      </div>
    `).join('');

    // Attach Click event to open Lightbox
    container.querySelectorAll('.glass-card').forEach((card, idx) => {
      card.addEventListener('click', () => {
        openLightbox(idx, itemsToDisplay);
      });
    });
  }

  function openLightbox(index, list) {
    currentIndex = index;
    const item = list[currentIndex];
    const box = document.getElementById('lightbox-image-box');
    const caption = document.getElementById('lightbox-caption');

    if (box && caption && lightboxModal) {
      box.innerHTML = `
        <div class="w-full h-full min-h-[320px] bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col items-center justify-center space-y-4 relative">
          <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-4xl shadow-glow-cyan">
            ${item.icon}
          </div>
          <div class="text-2xl font-extrabold text-white">${item.title}</div>
          <p class="text-sm text-gray-300 max-w-xl text-center leading-relaxed">${item.details}</p>
          <div class="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
            High-Definition Screen View • ScholasticBase SaaS
          </div>
        </div>
      `;
      caption.innerHTML = `Screen ${currentIndex + 1} of ${list.length}: <span class="text-cyan-400">${item.title}</span>`;
      lightboxModal.classList.remove('hidden');
    }
  }

  // Setup Filter listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.className = 'gallery-filter px-4 py-1.5 rounded-full text-xs font-semibold glass-card hover:bg-white/10 text-gray-300');
      btn.className = 'gallery-filter active px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500 text-slate-950 shadow-glow-cyan';
      activeFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  // Lightbox Close / Nav listeners
  const closeBtn = document.getElementById('close-lightbox-modal');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (closeBtn) closeBtn.addEventListener('click', () => lightboxModal.classList.add('hidden'));
  if (prevBtn) prevBtn.addEventListener('click', () => {
    const list = activeFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
    currentIndex = (currentIndex - 1 + list.length) % list.length;
    openLightbox(currentIndex, list);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const list = activeFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);
    currentIndex = (currentIndex + 1) % list.length;
    openLightbox(currentIndex, list);
  });

  renderGallery();
}
