export const testimonials = [
  {
    name: 'Dr. Richard Vance',
    role: 'Principal, St. Xavier Academy',
    badge: '1,400+ Students',
    avatar: '👨‍💼',
    rating: 5,
    quote: 'ScholasticBase cut our daily administrative workload by 60%. The automated QR code gate attendance and parent SMS notifications are absolutely game-changing.'
  },
  {
    name: 'Prof. Elena Rostova',
    role: 'Academic Director, Oxford International',
    badge: '2,800+ Students',
    avatar: '👩‍🏫',
    rating: 5,
    quote: 'Exam gradebook calculation and printable report card generation used to take our teachers weeks of overtime. With ScholasticBase, results are published in 10 minutes!'
  },
  {
    name: 'Marcus Sterling',
    role: 'Finance Officer, Apex Public College',
    badge: '950+ Students',
    avatar: '👨‍🎓',
    rating: 5,
    quote: 'Fee collection is now 100% automated. Parents receive SMS reminders with direct online payment links, and receipts generate instantly with zero manual entry.'
  }
];

export function renderTestimonials(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = testimonials.map(item => `
    <div class="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-yellow-400 text-sm">★★★★★</div>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Verified Institution</span>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed italic">"${item.quote}"</p>
      </div>

      <div class="flex items-center space-x-4 pt-4 border-t border-white/10">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-xl shadow-md">
          ${item.avatar}
        </div>
        <div>
          <h4 class="text-sm font-bold text-white">${item.name}</h4>
          <div class="text-xs text-gray-400">${item.role}</div>
          <div class="text-[10px] text-cyan-400 font-mono mt-0.5">${item.badge}</div>
        </div>
      </div>
    </div>
  `).join('');
}
