export const faqList = [
  {
    q: 'How long does it take to set up ScholasticBase for our institution?',
    a: 'Initial cloud setup takes less than 15 minutes. Our team provides free data migration tools to easily import student, teacher, and historical class records from Excel, CSV, or legacy school software.'
  },
  {
    q: 'Can we install ScholasticBase on Windows, Mac, and Mobile devices?',
    a: 'Yes! ScholasticBase offers native Windows EXE, macOS DMG installers, and mobile applications for Android (APK / Google Play) and iOS App Store. It also runs in any web browser.'
  },
  {
    q: 'How secure is our school data and student information?',
    a: 'We enforce bank-grade AES-256 bit encryption in transit and at rest. Data is hosted on high-availability cloud servers with automated daily backups and zero-knowledge privacy protocols.'
  },
  {
    q: 'Can parents pay tuition fees online through ScholasticBase?',
    a: 'Yes. ScholasticBase integrates with major payment gateways including Stripe, Credit/Debit Cards, Mobile Banking, and NetBanking. Digital receipts are generated automatically upon successful payment.'
  },
  {
    q: 'Is there a limit on how many teachers or parents can access the system?',
    a: 'No! All plans include unlimited teacher, student, and parent user logins. Pricing is based solely on your total active enrolled student count.'
  },
  {
    q: 'How does automated QR code attendance scanning work?',
    a: 'Each student is issued a digital or printed ID badge with a unique QR code. Students scan their code at school entrance gates via our mobile app or desktop camera, triggering an instant SMS notification to parents.'
  },
  {
    q: 'What kind of support and training do you provide?',
    a: 'We offer 24/7 dedicated support via admin email (sceamhasan8@gmail.com), live chat, and video tutorials. Enterprise plans include a dedicated account manager and staff onboarding sessions.'
  }
];

export function setupFAQ(containerId, searchInputId) {
  const container = document.getElementById(containerId);
  const searchInput = document.getElementById(searchInputId);
  if (!container) return;

  function render(query = '') {
    const filtered = query.trim() === ''
      ? faqList
      : faqList.filter(item => 
          item.q.toLowerCase().includes(query.toLowerCase()) || 
          item.a.toLowerCase().includes(query.toLowerCase())
        );

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-card p-8 rounded-2xl text-center text-gray-400 text-xs">
          No questions matching "${query}". Contact support at <a href="mailto:sceamhasan8@gmail.com" class="text-cyan-400 underline">sceamhasan8@gmail.com</a>.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((item, idx) => `
      <div class="faq-item glass-card rounded-2xl border border-white/10 overflow-hidden transition-all">
        <button class="faq-toggle w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between focus:outline-none hover:bg-white/5">
          <span>${item.q}</span>
          <span class="faq-icon text-cyan-400 font-mono text-lg transition-transform">+</span>
        </button>
        <div class="faq-answer hidden px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
          ${item.a}
        </div>
      </div>
    `).join('');

    // Re-attach Accordion toggle listeners
    container.querySelectorAll('.faq-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        const isHidden = answer.classList.contains('hidden');
        
        // Close all others
        container.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
        container.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');

        if (isHidden) {
          answer.classList.remove('hidden');
          icon.textContent = '−';
        }
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      render(e.target.value);
    });
  }

  render();
}
