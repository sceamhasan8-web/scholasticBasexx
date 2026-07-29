(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const h=[{id:"student",title:"Student Management",icon:"👨‍🎓",badge:"Core Module",description:"Comprehensive student profile tracking from enrollment to graduation with digital IDs and performance logs.",items:[{name:"Student Profiles",desc:"Centralized bio data, emergency contacts, medical records, and academic history."},{name:"Online Admission",desc:"Customizable application forms, document upload, and automated application tracking."},{name:"Digital Student ID",desc:"Generate printable high-resolution student ID cards with barcodes and QR codes."},{name:"Class Promotion",desc:"One-click batch student promotion with roll number reassignment and section allocation."},{name:"Attendance Tracking",desc:"Real-time daily roll call, subject-wise attendance, and automated absentees alerts."},{name:"Performance Analytics",desc:"Interactive grade tracking, behavioral logs, and extracurricular achievements."}]},{id:"teacher",title:"Teacher Management",icon:"👩‍🏫",badge:"Staff Hub",description:"Empower faculty with streamlined profiles, payroll integration, timetable management, and leave tracking.",items:[{name:"Teacher Profiles",desc:"Qualifications, employment history, department roles, and contact records."},{name:"Staff Attendance",desc:"Biometric fingerprint and QR code check-in with late arrival monitoring."},{name:"Salary & Payroll",desc:"Automated salary slip generation, deductions, allowances, and direct bank transfers."},{name:"Department Management",desc:"Organize faculty by subject departments and assign department heads."},{name:"Dynamic Timetable",desc:"Automated routine allocation with conflict detection and substitute teacher assignments."}]},{id:"academic",title:"Academic Management",icon:"📅",badge:"Curriculum",description:"Structure academic routines, sections, subject mappings, and institutional holiday calendars effortlesly.",items:[{name:"Class Routines",desc:"Multi-section weekly timetables with period countdowns and room allocations."},{name:"Subject Mapping",desc:"Assign core subjects, electives, and credit hours across classes."},{name:"Sections & Wings",desc:"Group students by medium (English/Native), shifts (Morning/Day), and sections."},{name:"Academic Calendar",desc:"Publish term dates, exam periods, sports events, and parent-teacher meetings."},{name:"Holidays & Vacations",desc:"Configure institutional holidays with auto-sync to student and teacher calendars."}]},{id:"exam",title:"Examination & Grades",icon:"📝",badge:"Evaluations",description:"End-to-end examination schedules, mark entry portals, automated grade calculation, and report cards.",items:[{name:"Exam Schedules",desc:"Publish date sheets, admit cards, seating plans, and roominvigilation duties."},{name:"Marks Entry Portal",desc:"Secure web and mobile mark submission for teachers with multi-level approval."},{name:"Grade Calculation",desc:"Custom grading scales (GPA 5.0, CGPA 4.0, Letter Grades A-F, Percentages)."},{name:"Result Publishing",desc:"Instant online result publication with parent portal access restriction."},{name:"Printable Report Cards",desc:"Beautiful customizable report cards with principal signature and performance graphs."}]},{id:"attendance",title:"Smart Attendance",icon:"⚡",badge:"Real-Time",description:"Instant attendance capture using QR code scanners, biometrics, or teacher mobile app with instant SMS alerts.",items:[{name:"Student Attendance",desc:"Period-wise or daily attendance marked in seconds on web or mobile app."},{name:"Teacher Attendance",desc:"Track faculty punch-in/out times with geolocation and leave requests."},{name:"QR Code Attendance",desc:"Fast RFID & QR card scanning at school entry gates for automatic check-in."},{name:"Daily Attendance Reports",desc:"Export PDF/Excel summary reports for monthly attendance percentages."}]},{id:"fee",title:"Fee Management",icon:"💳",badge:"Finance",description:"Automate fee structures, online payments, payment gateway integration, due notices, and digital receipts.",items:[{name:"Fee Collection Portal",desc:"Collect tuition, exam fees, transport, and hostel fees with partial payment support."},{name:"Due Reports & Penalties",desc:"Automated late fee calculation and instant due reminders sent to parents."},{name:"Online Payments",desc:"Integrated Stripe, Credit Card, Mobile Banking, and NetBanking gateways."},{name:"Digital Receipts",desc:"Auto-generate printable and downloadable PDF receipts with SMS confirmation."}]},{id:"communication",title:"Communication",icon:"📢",badge:"Connect",description:"Bridge the gap between school, parents, and students with SMS, email notifications, and digital circulars.",items:[{name:"Push Notifications",desc:"Instant app notifications for homework, exam schedules, and emergency alerts."},{name:"SMS Broadcasts",desc:"Bulk SMS integration for immediate absentees notices and fee reminders."},{name:"Email Newsletters",desc:"Send rich HTML announcements, newsletter updates, and fee invoices."},{name:"Digital Circulars",desc:"Publish signed school notices and event invitations directly to parent portals."}]},{id:"reports",title:"Reports & Analytics",icon:"📊",badge:"Insights",description:"Comprehensive data analytics for school boards, administrators, and education inspectors.",items:[{name:"Student Progress Reports",desc:"Multi-year academic trajectory and attendance trends for every student."},{name:"Financial Revenue Reports",desc:"Fee collections, pending balances, expenses, and audit-ready ledgers."},{name:"Attendance Analytics",desc:"Identify chronic absenteeism patterns by class, section, or subject."},{name:"Exam Class Performance",desc:"Class pass percentages, subject averages, and topper rankings."}]},{id:"admin",title:"Administration & System",icon:"⚙️",badge:"Security",description:"Role-based access control, data encryption, audit logs, automated daily backups, and custom settings.",items:[{name:"Role Management",desc:"Granular permissions for Super Admins, Accountants, Teachers, and Librarians."},{name:"Security & Audit Logs",desc:"Track every system action, user login time, and grade modification log."},{name:"System Settings",desc:"Configure school logo, academic session dates, grading rules, and currency."},{name:"Automatic Cloud Backup",desc:"Daily automated database snapshots with one-click restore capabilities."}]}];function I(s,e){const t=document.getElementById(e),i=document.getElementById(s);if(!t||!i)return;let n=h[0].id;function a(){t.innerHTML=h.map(o=>`
      <button class="feature-tab-btn flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${o.id===n?"bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan":"glass-card text-gray-400 hover:text-white hover:bg-white/10"}" data-id="${o.id}">
        <span>${o.icon}</span>
        <span>${o.title}</span>
      </button>
    `).join("");const d=h.find(o=>o.id===n);i.innerHTML=d.items.map(o=>`
      <div class="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">✓</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/10">${d.badge}</span>
          </div>
          <h3 class="text-base font-bold text-white">${o.name}</h3>
          <p class="text-xs text-gray-400 leading-relaxed">${o.desc}</p>
        </div>
        <div class="pt-2 text-[10px] text-cyan-400 font-semibold flex items-center space-x-1">
          <span>Explore sub-features</span>
          <span>→</span>
        </div>
      </div>
    `).join(""),t.querySelectorAll(".feature-tab-btn").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.id,a()})})}a()}const w={overview:{title:"School Executive Admin Overview",subtitle:"Real-time metrics on enrollment, fee status, attendance rates, and urgent notices.",content:`
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
    `},student:{title:"Student Directory & Bio Profiles",subtitle:"Filter by class, section, roll number, or search by parent contact details.",content:`
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
    `},attendance:{title:"Smart QR & Biometric Attendance Portal",subtitle:"Scan digital student ID badges for instant gate check-in and parent SMS broadcast.",content:`
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
    `},exam:{title:"Examination Marks & Result Gradebook",subtitle:"Automated GPA, rank calculations, and instant digital report card publishing.",content:`
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
    `},fee:{title:"Fee Collection & Online Payment Gateway",subtitle:"Automated invoice generation, payment links, and instant receipt PDF creation.",content:`
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
    `}};function L(){const s=document.getElementById("preview-screen-content"),e=document.querySelectorAll(".preview-tab");if(!s||e.length===0)return;function t(i){const n=w[i]||w.overview;s.innerHTML=`
      <div class="space-y-3 animate-fadeIn">
        <div class="border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <h3 class="text-lg font-bold text-white">${n.title}</h3>
            <p class="text-xs text-gray-400">${n.subtitle}</p>
          </div>
          <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">v2.4.0 Interactive</span>
        </div>
        ${n.content}
      </div>
    `,e.forEach(a=>{a.dataset.module===i?a.className="preview-tab px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950 transition-all shadow-glow-cyan":a.className="preview-tab px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 transition-all"})}e.forEach(i=>{i.addEventListener("click",()=>{t(i.dataset.module)})}),t("overview")}const A=[{icon:"✨",title:"Easy to Use",desc:"Zero learning curve with a intuitive, user-friendly interface."},{icon:"☁️",title:"Cloud-Based",desc:"Access your school database securely from any browser or mobile app."},{icon:"🔒",title:"Bank-Grade Security",desc:"AES-256 encryption, SSL/TLS layer, and GDPR compliant privacy."},{icon:"🚀",title:"Ultra-Fast Speed",desc:"Optimized serverless infrastructure ensuring sub-second page loads."},{icon:"📈",title:"Real-Time Reports",desc:"Live financial, attendance, and exam analytics updated instantly."},{icon:"👥",title:"Multi-User Roles",desc:"Tailored portals for Super Admins, Teachers, Students, & Parents."},{icon:"📱",title:"100% Responsive",desc:"Flawless user experience across desktop, laptop, tablet, & smartphones."},{icon:"💾",title:"Automatic Backups",desc:"Daily automated cloud snapshots with 1-click restore functionality."},{icon:"💰",title:"Affordable Pricing",desc:"Cost-effective plans tailored for institutions of any student size."},{icon:"🎨",title:"Modern Interface",desc:"Designed with sleek dark mode aesthetics inspired by Stripe & Linear."}];function k(s){const e=document.getElementById(s);e&&(e.innerHTML=A.map(t=>`
    <div class="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3">
      <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xl">
        ${t.icon}
      </div>
      <div>
        <h3 class="text-sm font-bold text-white mb-1">${t.title}</h3>
        <p class="text-[11px] text-gray-400 leading-relaxed">${t.desc}</p>
      </div>
      <div class="text-[9px] text-cyan-400 font-mono">ScholasticBase Guarantee</div>
    </div>
  `).join(""))}const y=[{id:1,category:"dashboard",title:"Executive Admin Dashboard",subtitle:"Comprehensive overview of enrollment, revenue, and daily attendance.",icon:"📊",gradient:"from-blue-600 to-cyan-500",details:"Displays real-time institution KPIs, quick action buttons, recent activity logs, and pending administrative tasks."},{id:2,category:"students",title:"Student Directory & Records",subtitle:"Digital student bio-data, parent emergency contacts, and ID generator.",icon:"👨‍🎓",gradient:"from-purple-600 to-pink-500",details:"Allows batch student imports, roll allocation, section assignment, and digital student card printing with QR codes."},{id:3,category:"teachers",title:"Teacher Portal & Timetable",subtitle:"Faculty duty schedules, substitution planner, and salary slips.",icon:"👩‍🏫",gradient:"from-cyan-500 to-emerald-500",details:"Teachers can view assigned period routines, log attendance, upload homework assignments, and submit term marks."},{id:4,category:"exams",title:"Exam Gradebook & Cards",subtitle:"Multi-term grade calculation, admit cards, and report publishing.",icon:"📝",gradient:"from-blue-600 to-purple-600",details:"Supports customizable GPA/CGPA grading rules, automated mark sheets, rank generation, and printable report cards."},{id:5,category:"attendance",title:"QR Code Attendance Tracker",subtitle:"Gate RFID scanner integration with instant parent SMS alerts.",icon:"⚡",gradient:"from-emerald-500 to-cyan-500",details:"Monitors real-time gate entry times for students and faculty. Sends immediate absent notifications to parents."},{id:6,category:"fees",title:"Fee Collection & Invoicing",subtitle:"Integrated online payments, due alerts, and PDF digital receipts.",icon:"💳",gradient:"from-purple-600 to-blue-600",details:"Supports Stripe gateway payments, partial fee collections, late penalty waivers, and automated financial ledgers."},{id:7,category:"mobile",title:"Mobile Application Portal",subtitle:"iOS & Android app for parents to view homework and attendance.",icon:"📱",gradient:"from-pink-500 to-purple-500",details:"Parent and teacher native app with push notifications, fees payment directly from mobile, and live attendance alerts."},{id:8,category:"reports",title:"Analytics & Financial Audit",subtitle:"Exportable PDF/Excel reports for school board meetings and audits.",icon:"📈",gradient:"from-cyan-400 to-blue-600",details:"In-depth visual charts for academic performance trends, revenue versus expenses, and attendance distribution."}];function C(s,e,t){const i=document.getElementById(s),n=document.querySelectorAll(".gallery-filter"),a=document.getElementById(t);if(!i)return;let d="all",o=0;function c(){const p=d==="all"?y:y.filter(u=>u.category===d);i.innerHTML=p.map((u,x)=>`
      <div class="glass-card glass-card-hover p-4 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 cursor-pointer group" data-index="${x}">
        <div class="w-full h-44 rounded-xl bg-slate-900 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-4">
          <div class="absolute inset-0 bg-gradient-to-br ${u.gradient} opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div class="z-10 text-center space-y-2">
            <div class="w-12 h-12 rounded-2xl bg-white/10 text-2xl flex items-center justify-center mx-auto shadow-md transform group-hover:scale-110 transition-transform">
              ${u.icon}
            </div>
            <div class="text-xs font-bold text-white">${u.title}</div>
            <span class="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Click to Preview</span>
          </div>
        </div>
        <div>
          <h3 class="text-xs font-bold text-white mb-1">${u.title}</h3>
          <p class="text-[11px] text-gray-400 leading-snug">${u.subtitle}</p>
        </div>
      </div>
    `).join(""),i.querySelectorAll(".glass-card").forEach((u,x)=>{u.addEventListener("click",()=>{l(x,p)})})}function l(p,u){o=p;const x=u[o],b=document.getElementById("lightbox-image-box"),v=document.getElementById("lightbox-caption");b&&v&&a&&(b.innerHTML=`
        <div class="w-full h-full min-h-[320px] bg-slate-950 rounded-xl p-6 border border-white/10 flex flex-col items-center justify-center space-y-4 relative">
          <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr ${x.gradient} flex items-center justify-center text-4xl shadow-glow-cyan">
            ${x.icon}
          </div>
          <div class="text-2xl font-extrabold text-white">${x.title}</div>
          <p class="text-sm text-gray-300 max-w-xl text-center leading-relaxed">${x.details}</p>
          <div class="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
            High-Definition Screen View • ScholasticBase SaaS
          </div>
        </div>
      `,v.innerHTML=`Screen ${o+1} of ${u.length}: <span class="text-cyan-400">${x.title}</span>`,a.classList.remove("hidden"))}n.forEach(p=>{p.addEventListener("click",()=>{n.forEach(u=>u.className="gallery-filter px-4 py-1.5 rounded-full text-xs font-semibold glass-card hover:bg-white/10 text-gray-300"),p.className="gallery-filter active px-4 py-1.5 rounded-full text-xs font-semibold bg-cyan-500 text-slate-950 shadow-glow-cyan",d=p.dataset.filter,c()})});const r=document.getElementById("close-lightbox-modal"),m=document.getElementById("lightbox-prev-btn"),g=document.getElementById("lightbox-next-btn");r&&r.addEventListener("click",()=>a.classList.add("hidden")),m&&m.addEventListener("click",()=>{const p=d==="all"?y:y.filter(u=>u.category===d);o=(o-1+p.length)%p.length,l(o,p)}),g&&g.addEventListener("click",()=>{const p=d==="all"?y:y.filter(u=>u.category===d);o=(o+1)%p.length,l(o,p)}),c()}const B=[{name:"Dr. Richard Vance",role:"Principal, St. Xavier Academy",badge:"1,400+ Students",avatar:"👨‍💼",rating:5,quote:"ScholasticBase cut our daily administrative workload by 60%. The automated QR code gate attendance and parent SMS notifications are absolutely game-changing."},{name:"Prof. Elena Rostova",role:"Academic Director, Oxford International",badge:"2,800+ Students",avatar:"👩‍🏫",rating:5,quote:"Exam gradebook calculation and printable report card generation used to take our teachers weeks of overtime. With ScholasticBase, results are published in 10 minutes!"},{name:"Marcus Sterling",role:"Finance Officer, Apex Public College",badge:"950+ Students",avatar:"👨‍🎓",rating:5,quote:"Fee collection is now 100% automated. Parents receive SMS reminders with direct online payment links, and receipts generate instantly with zero manual entry."}];function P(s){const e=document.getElementById(s);e&&(e.innerHTML=B.map(t=>`
    <div class="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="text-yellow-400 text-sm">★★★★★</div>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Verified Institution</span>
        </div>
        <p class="text-xs text-gray-300 leading-relaxed italic">"${t.quote}"</p>
      </div>

      <div class="flex items-center space-x-4 pt-4 border-t border-white/10">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-xl shadow-md">
          ${t.avatar}
        </div>
        <div>
          <h4 class="text-sm font-bold text-white">${t.name}</h4>
          <div class="text-xs text-gray-400">${t.role}</div>
          <div class="text-[10px] text-cyan-400 font-mono mt-0.5">${t.badge}</div>
        </div>
      </div>
    </div>
  `).join(""))}const S=[{q:"How long does it take to set up ScholasticBase for our institution?",a:"Initial cloud setup takes less than 15 minutes. Our team provides free data migration tools to easily import student, teacher, and historical class records from Excel, CSV, or legacy school software."},{q:"Can we install ScholasticBase on Windows, Mac, and Mobile devices?",a:"Yes! ScholasticBase offers native Windows EXE, macOS DMG installers, and mobile applications for Android (APK / Google Play) and iOS App Store. It also runs in any web browser."},{q:"How secure is our school data and student information?",a:"We enforce bank-grade AES-256 bit encryption in transit and at rest. Data is hosted on high-availability cloud servers with automated daily backups and zero-knowledge privacy protocols."},{q:"Can parents pay tuition fees online through ScholasticBase?",a:"Yes. ScholasticBase integrates with major payment gateways including Stripe, Credit/Debit Cards, Mobile Banking, and NetBanking. Digital receipts are generated automatically upon successful payment."},{q:"Is there a limit on how many teachers or parents can access the system?",a:"No! All plans include unlimited teacher, student, and parent user logins. Pricing is based solely on your total active enrolled student count."},{q:"How does automated QR code attendance scanning work?",a:"Each student is issued a digital or printed ID badge with a unique QR code. Students scan their code at school entrance gates via our mobile app or desktop camera, triggering an instant SMS notification to parents."},{q:"What kind of support and training do you provide?",a:"We offer 24/7 dedicated support via admin email (sceamhasan8@gmail.com), live chat, and video tutorials. Enterprise plans include a dedicated account manager and staff onboarding sessions."}];function M(s,e){const t=document.getElementById(s),i=document.getElementById(e);if(!t)return;function n(a=""){const d=a.trim()===""?S:S.filter(o=>o.q.toLowerCase().includes(a.toLowerCase())||o.a.toLowerCase().includes(a.toLowerCase()));if(d.length===0){t.innerHTML=`
        <div class="glass-card p-8 rounded-2xl text-center text-gray-400 text-xs">
          No questions matching "${a}". Contact support at <a href="mailto:sceamhasan8@gmail.com" class="text-cyan-400 underline">sceamhasan8@gmail.com</a>.
        </div>
      `;return}t.innerHTML=d.map((o,c)=>`
      <div class="faq-item glass-card rounded-2xl border border-white/10 overflow-hidden transition-all">
        <button class="faq-toggle w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between focus:outline-none hover:bg-white/5">
          <span>${o.q}</span>
          <span class="faq-icon text-cyan-400 font-mono text-lg transition-transform">+</span>
        </button>
        <div class="faq-answer hidden px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
          ${o.a}
        </div>
      </div>
    `).join(""),t.querySelectorAll(".faq-toggle").forEach(o=>{o.addEventListener("click",()=>{const c=o.closest(".faq-item"),l=c.querySelector(".faq-answer"),r=c.querySelector(".faq-icon"),m=l.classList.contains("hidden");t.querySelectorAll(".faq-answer").forEach(g=>g.classList.add("hidden")),t.querySelectorAll(".faq-icon").forEach(g=>g.textContent="+"),m&&(l.classList.remove("hidden"),r.textContent="−")})})}i&&i.addEventListener("input",a=>{n(a.target.value)}),n()}function f(s,e="success"){const t=document.getElementById("toast-container");if(!t)return;const i=document.createElement("div");i.className=`pointer-events-auto flex items-center space-x-3 px-5 py-3.5 rounded-2xl glass-card border text-xs font-semibold shadow-2xl animate-fadeIn ${e==="success"?"border-emerald-500/40 text-emerald-300 bg-emerald-950/90":"border-cyan-500/40 text-cyan-300 bg-slate-900/90"}`,i.innerHTML=`
    <span class="text-base">${e==="success"?"✅":"🔔"}</span>
    <span>${s}</span>
  `,t.appendChild(i),setTimeout(()=>{i.remove()},4e3)}function D(){const s=window.navigator.userAgent||"",e=document.getElementById("os-detected-text"),t=document.getElementById("hero-download-text"),i=document.getElementById("hero-primary-download-btn");let n="Windows",a="ScholasticBase_v2.4.0_Setup.exe";s.includes("Macintosh")||s.includes("Mac OS")?(n="macOS",a="ScholasticBase_v2.4.0.dmg"):s.includes("Android")?(n="Android",a="ScholasticBase_v2.4.0.apk"):s.includes("iPhone")||s.includes("iPad")?(n="iOS",a="AppStore_ScholasticBase"):s.includes("Linux")&&(n="Linux",a="ScholasticBase_v2.4.0.AppImage"),e&&(e.textContent=`Recommended for your OS: ${n} (v2.4.0)`),t&&(t.textContent=`Download for ${n}`),i&&i.addEventListener("click",()=>{E(n,a)})}function $(){const s=document.querySelectorAll(".counter");let e=!1;const t=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&!e&&(e=!0,s.forEach(d=>{const o=parseInt(d.dataset.target,10),l=Math.ceil(o/(2e3/20));let r=0;const m=setInterval(()=>{r+=l,r>=o?(d.textContent=o.toLocaleString(),clearInterval(m)):d.textContent=r.toLocaleString()},20)}))})},{threshold:.3}),i=document.getElementById("stats");i&&t.observe(i)}function T(){const s=document.getElementById("navbar"),e=document.getElementById("back-to-top-btn");window.addEventListener("scroll",()=>{window.scrollY>40?s==null||s.classList.add("shadow-2xl","bg-brand-dark/95"):s==null||s.classList.remove("shadow-2xl","bg-brand-dark/95"),window.scrollY>400?e==null||e.classList.remove("opacity-0","pointer-events-none"):e==null||e.classList.add("opacity-0","pointer-events-none")}),e==null||e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function E(s,e){const t=document.getElementById("download-simulation-modal"),i=document.getElementById("download-modal-title"),n=document.getElementById("download-modal-subtitle"),a=document.getElementById("download-progress-bar"),d=document.getElementById("download-modal-status"),o=document.getElementById("close-download-modal");if(!t)return;t.classList.remove("hidden"),i.textContent=`Downloading ${s} Installer`,n.textContent=`File: ${e}`,a.style.width="0%",d.textContent="Connecting to high-speed cloud CDN...";let c=0;const l=setInterval(()=>{c+=Math.floor(Math.random()*15)+10,c>=100?(c=100,clearInterval(l),d.textContent="Download Complete! Launch installer to install.",f(`${e} successfully downloaded!`,"success")):c>50&&(d.textContent="Verifying cryptographic checksum (SHA-256)..."),a.style.width=`${c}%`},200);o.onclick=()=>t.classList.add("hidden")}function R(){const s=document.getElementById("pricing-billing-toggle"),e=document.getElementById("pricing-toggle-dot"),t=document.querySelectorAll(".pricing-val");let i=!1;s==null||s.addEventListener("click",()=>{i=!i,i?(e==null||e.classList.add("translate-x-6"),t.forEach(n=>n.textContent=n.dataset.annual),f("20% Annual Discount Applied!","info")):(e==null||e.classList.remove("translate-x-6"),t.forEach(n=>n.textContent=n.dataset.monthly))}),document.querySelectorAll(".select-plan-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.plan,d=document.getElementById("get-started-modal");d&&d.classList.remove("hidden"),f(`Selected Plan: ${a}`,"info")})})}function q(){const s=document.getElementById("mobile-menu-toggle"),e=document.getElementById("mobile-menu");s==null||s.addEventListener("click",()=>{e==null||e.classList.toggle("hidden")}),document.querySelectorAll(".mobile-nav-link").forEach(r=>{r.addEventListener("click",()=>e==null?void 0:e.classList.add("hidden"))});const t=document.getElementById("get-started-modal"),i=[document.getElementById("open-get-started-btn"),document.getElementById("mobile-get-started-btn"),document.getElementById("hero-get-started-btn")],n=document.getElementById("close-get-started-modal"),a=document.getElementById("get-started-form");i.forEach(r=>r==null?void 0:r.addEventListener("click",()=>t==null?void 0:t.classList.remove("hidden"))),n==null||n.addEventListener("click",()=>t==null?void 0:t.classList.add("hidden")),a==null||a.addEventListener("submit",r=>{r.preventDefault(),t==null||t.classList.add("hidden"),f("Institution registered! Free 14-day trial link sent to your email.","success")});const d=document.getElementById("demo-video-modal"),o=document.getElementById("hero-watch-demo-btn"),c=document.getElementById("close-demo-video-modal"),l=document.getElementById("demo-video-play-btn");o==null||o.addEventListener("click",()=>d==null?void 0:d.classList.remove("hidden")),c==null||c.addEventListener("click",()=>d==null?void 0:d.classList.add("hidden")),l==null||l.addEventListener("click",()=>{f("Playing ScholasticBase 3-Minute HD Demo Video...","info")}),document.querySelectorAll(".trigger-download-modal-btn").forEach(r=>{r.addEventListener("click",()=>{const m=r.dataset.os,g=r.dataset.file;E(m,g)})})}function j(){const s=document.getElementById("contact-form");s==null||s.addEventListener("submit",t=>{t.preventDefault();const i=document.getElementById("contact-name").value;document.getElementById("contact-email").value,f(`Thank you ${i}! Message sent directly to sceamhasan8@gmail.com. We will respond within 2 hours.`,"success"),s.reset()});const e=document.getElementById("newsletter-form");e==null||e.addEventListener("submit",t=>{t.preventDefault();const i=document.getElementById("newsletter-email").value;f(`Subscribed ${i} to ScholasticBase updates!`,"success"),e.reset()})}function F(){const s=document.getElementById("chat-toggle-btn"),e=document.getElementById("chat-drawer"),t=document.getElementById("close-chat-drawer"),i=document.getElementById("chat-form"),n=document.getElementById("chat-input"),a=document.getElementById("chat-messages");s==null||s.addEventListener("click",()=>e==null?void 0:e.classList.toggle("hidden")),t==null||t.addEventListener("click",()=>e==null?void 0:e.classList.add("hidden"));const d={pricing:"Our pricing starts at $49/mo for Starter (up to 300 students) and $99/mo for Professional (up to 1,500 students). Annual plans save 20%!",download:"You can download installers for Windows (.exe), macOS (.dmg), Android (.apk / Play Store), and iOS App Store in the Download section.",security:"We use AES-256 bit encryption, role-based security permissions, and automated daily cloud backups.",email:"Our admin email is sceamhasan8@gmail.com. You can reach out anytime for custom setups!",features:"ScholasticBase includes Student Profiles, QR Attendance, Exam Gradebooks, Fee Collections, SMS alerts, and Parent Portals."};i==null||i.addEventListener("submit",o=>{o.preventDefault();const c=n.value.trim();if(!c)return;const l=document.createElement("div");l.className="bg-blue-600/30 p-2.5 rounded-xl border border-blue-500/20 text-white ml-6 text-right",l.textContent=c,a.appendChild(l),n.value="",a.scrollTop=a.scrollHeight,setTimeout(()=>{const r=c.toLowerCase();let m="Thank you for contacting ScholasticBase support! For specific questions, email our admin at sceamhasan8@gmail.com.";r.includes("price")||r.includes("cost")||r.includes("plan")?m=d.pricing:r.includes("download")||r.includes("install")||r.includes("windows")||r.includes("mac")?m=d.download:r.includes("security")||r.includes("data")||r.includes("safe")?m=d.security:r.includes("email")||r.includes("admin")||r.includes("contact")?m=d.email:(r.includes("feature")||r.includes("module")||r.includes("attendance"))&&(m=d.features);const g=document.createElement("div");g.className="bg-slate-900 p-2.5 rounded-xl border border-cyan-500/30 text-cyan-300 mr-6",g.textContent=m,a.appendChild(g),a.scrollTop=a.scrollHeight},600)})}function O(){const s=document.getElementById("theme-toggle-btn"),e=document.getElementById("theme-toggle-icon"),t=document.getElementById("theme-toggle-text"),i=document.getElementById("mobile-theme-toggle-btn"),n=document.getElementById("mobile-theme-toggle-icon"),a=document.getElementById("mobile-theme-toggle-text"),d=localStorage.getItem("scholastic_theme")||"dark";function o(l){l==="light"?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light"),e&&(e.textContent="☀️"),t&&(t.textContent="Light"),n&&(n.textContent="☀️"),a&&(a.textContent="Switch to Dark Mode")):(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"),e&&(e.textContent="🌙"),t&&(t.textContent="Dark"),n&&(n.textContent="🌙"),a&&(a.textContent="Switch to Light Mode")),localStorage.setItem("scholastic_theme",l)}o(d);function c(){const r=document.documentElement.classList.contains("light")?"dark":"light";o(r),f(`Switched to ${r==="light"?"Light":"Dark"} Mode`,"info")}s==null||s.addEventListener("click",c),i==null||i.addEventListener("click",c)}document.addEventListener("DOMContentLoaded",()=>{O(),D(),$(),T(),I("features-grid","features-tab-container"),L(),k("why-choose-grid"),C("gallery-grid","gallery-filter-buttons","lightbox-modal"),R(),P("testimonials-grid"),M("faq-accordion-container","faq-search-input"),q(),j(),F()});
