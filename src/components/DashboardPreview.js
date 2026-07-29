export const previewModules = {
  overview: {
    title: 'School Executive Admin Overview',
    subtitle: 'Real-time metrics on enrollment, fee status, attendance rates, and urgent notices.',
    content: `
      <div class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30">
            <div class="text-[10px] text-gray-400">Total Enrolled</div>
            <div class="text-xl font-bold text-white">1,420</div>
            <div class="text-[10px] text-emerald-400">↑ 98% active status</div>
          </div>
          <div class="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
            <div class="text-[10px] text-gray-400">Attendance Today</div>
            <div class="text-xl font-bold text-cyan-400">96.8%</div>
            <div class="text-[10px] text-cyan-300">1,375 Checked In</div>
          </div>
          <div class="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <div class="text-[10px] text-gray-400">Fees Collected</div>
            <div class="text-xl font-bold text-emerald-400">$142,850</div>
            <div class="text-[10px] text-gray-400">This Semester</div>
          </div>
          <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
            <div class="text-[10px] text-gray-400">Total Faculty</div>
            <div class="text-xl font-bold text-purple-400">84 Staff</div>
            <div class="text-[10px] text-emerald-400">Full Attendance</div>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-white">
            <span>Recent Administrative Alerts</span>
            <span class="text-[10px] text-cyan-400">System Logs</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300">
            <div class="p-2 rounded bg-white/5 flex items-center justify-between">
              <span>📅 Class 10 Midterm Admit Cards Ready</span>
              <span class="text-emerald-400">Published</span>
            </div>
            <div class="p-2 rounded bg-white/5 flex items-center justify-between">
              <span>💳 Automated SMS Fee Reminder Sent</span>
              <span class="text-cyan-400">140 Sent</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  student: {
    title: 'Student Directory & Bio Profiles',
    subtitle: 'Filter by class, section, roll number, or search by parent contact details.',
    content: `
      <div class="space-y-3 text-xs">
        <div class="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-white/10">
          <div class="flex items-center space-x-2">
            <input type="text" readonly value="Class 10 - Section A (Physics Wing)" class="bg-transparent text-cyan-300 font-bold text-xs outline-none" />
          </div>
          <span class="px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 font-mono text-[10px]">35 Students</span>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-gray-300 text-[11px]">
            <thead class="bg-white/5 text-gray-400 uppercase text-[9px] border-b border-white/10">
              <tr>
                <th class="p-2">Roll</th>
                <th class="p-2">Student Name</th>
                <th class="p-2">Guardian Contact</th>
                <th class="p-2">Attendance %</th>
                <th class="p-2">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <tr>
                <td class="p-2 font-mono text-cyan-400">#101</td>
                <td class="p-2 font-semibold text-white">Alexander Wright</td>
                <td class="p-2 text-gray-400">+1 (555) 234-5678</td>
                <td class="p-2 text-emerald-400 font-bold">98.5%</td>
                <td class="p-2"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">Active</span></td>
              </tr>
              <tr>
                <td class="p-2 font-mono text-cyan-400">#102</td>
                <td class="p-2 font-semibold text-white">Emma Watson</td>
                <td class="p-2 text-gray-400">+1 (555) 987-6543</td>
                <td class="p-2 text-cyan-400 font-bold">95.0%</td>
                <td class="p-2"><span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">Active</span></td>
              </tr>
              <tr>
                <td class="p-2 font-mono text-cyan-400">#103</td>
                <td class="p-2 font-semibold text-white">Lucas Vance</td>
                <td class="p-2 text-gray-400">+1 (555) 456-7890</td>
                <td class="p-2 text-yellow-400 font-bold">89.2%</td>
                <td class="p-2"><span class="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 text-[9px]">Warning</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  attendance: {
    title: 'Smart QR & Biometric Attendance Portal',
    subtitle: 'Scan digital student ID badges for instant gate check-in and parent SMS broadcast.',
    content: `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
          <div class="text-xs font-bold text-cyan-300">Gate QR Scanner Simulation</div>
          <div class="w-full h-32 rounded-lg bg-black/60 border border-dashed border-cyan-400 flex flex-col items-center justify-center space-y-1">
            <span class="text-2xl animate-pulse">📷</span>
            <span class="text-[10px] text-cyan-400 font-mono">Align QR Code Frame</span>
          </div>
          <div class="text-[10px] text-gray-400 text-center">Auto-sends Parent SMS upon check-in</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
          <div class="text-xs font-bold text-white">Live Check-in Stream</div>
          <div class="space-y-2 text-[10px]">
            <div class="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
              <span>#104 Olivia Taylor • Checked In</span>
              <span>08:14 AM</span>
            </div>
            <div class="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
              <span>#105 Ethan Hunt • Checked In</span>
              <span>08:15 AM</span>
            </div>
            <div class="p-2 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-between">
              <span>#88 Prof. David Miller • Staff Gate</span>
              <span>08:16 AM</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  exam: {
    title: 'Examination Marks & Result Gradebook',
    subtitle: 'Automated GPA, rank calculations, and instant digital report card publishing.',
    content: `
      <div class="space-y-3 text-xs">
        <div class="flex items-center justify-between text-gray-300">
          <span class="font-bold text-white">Subject: Physics Term 1 Final</span>
          <span class="text-purple-400 font-mono text-[10px]">Grading Scale: GPA 5.0</span>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="p-2 rounded-xl bg-white/5 text-center">
            <div class="text-[10px] text-gray-400">Class Average</div>
            <div class="text-base font-bold text-cyan-400">84.6%</div>
          </div>
          <div class="p-2 rounded-xl bg-white/5 text-center">
            <div class="text-[10px] text-gray-400">Highest Score</div>
            <div class="text-base font-bold text-emerald-400">99 / 100</div>
          </div>
          <div class="p-2 rounded-xl bg-white/5 text-center">
            <div class="text-[10px] text-gray-400">Pass Rate</div>
            <div class="text-base font-bold text-purple-400">100%</div>
          </div>
        </div>
      </div>
    `
  },
  fee: {
    title: 'Fee Collection & Online Payment Gateway',
    subtitle: 'Automated invoice generation, payment links, and instant receipt PDF creation.',
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between">
          <div>
            <div class="text-[10px] text-gray-400">Invoice #INV-2026-889</div>
            <div class="text-sm font-bold text-white">Tuition & Lab Fee - Q3 2026</div>
            <div class="text-[10px] text-emerald-400">Paid via Stripe Gateway</div>
          </div>
          <div class="text-right">
            <div class="text-lg font-bold text-emerald-400">$650.00</div>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">Receipt Issued</span>
          </div>
        </div>
      </div>
    `
  }
};

export function setupDashboardPreview() {
  const container = document.getElementById('preview-screen-content');
  const tabs = document.querySelectorAll('.preview-tab');
  if (!container || tabs.length === 0) return;

  function setModule(key) {
    const data = previewModules[key] || previewModules.overview;
    container.innerHTML = `
      <div class="space-y-3 animate-fadeIn">
        <div class="border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-white">${data.title}</h3>
            <p class="text-xs text-gray-400">${data.subtitle}</p>
          </div>
          <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">v2.4.0 Interactive</span>
        </div>
        ${data.content}
      </div>
    `;

    tabs.forEach(tab => {
      if (tab.dataset.module === key) {
        tab.className = 'preview-tab px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 transition-all shadow-glow-cyan';
      } else {
        tab.className = 'preview-tab px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-all';
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setModule(tab.dataset.module);
    });
  });

  // Initial render
  setModule('overview');
}
