export const advantages = [
  { icon: '✨', title: 'Easy to Use', desc: 'Zero learning curve with a intuitive, user-friendly interface.' },
  { icon: '☁️', title: 'Cloud-Based', desc: 'Access your school database securely from any browser or mobile app.' },
  { icon: '🔒', title: 'Bank-Grade Security', desc: 'AES-256 encryption, SSL/TLS layer, and GDPR compliant privacy.' },
  { icon: '🚀', title: 'Ultra-Fast Speed', desc: 'Optimized serverless infrastructure ensuring sub-second page loads.' },
  { icon: '📈', title: 'Real-Time Reports', desc: 'Live financial, attendance, and exam analytics updated instantly.' },
  { icon: '👥', title: 'Multi-User Roles', desc: 'Tailored portals for Super Admins, Teachers, Students, & Parents.' },
  { icon: '📱', title: '100% Responsive', desc: 'Flawless user experience across desktop, laptop, tablet, & smartphones.' },
  { icon: '💾', title: 'Automatic Backups', desc: 'Daily automated cloud snapshots with 1-click restore functionality.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Cost-effective plans tailored for institutions of any student size.' },
  { icon: '🎨', title: 'Modern Interface', desc: 'Designed with sleek dark mode aesthetics inspired by Stripe & Linear.' }
];

export function renderWhyChoose(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = advantages.map(item => `
    <div class="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3">
      <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xl">
        ${item.icon}
      </div>
      <div>
        <h3 class="text-sm font-bold text-white mb-1">${item.title}</h3>
        <p class="text-[11px] text-gray-400 leading-relaxed">${item.desc}</p>
      </div>
      <div class="text-[9px] text-cyan-400 font-mono">ScholasticBase Guarantee</div>
    </div>
  `).join('');
}
