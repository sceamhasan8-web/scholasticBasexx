export const featureCategories = [
  {
    id: 'student',
    title: 'Student Management',
    icon: '👨‍🎓',
    badge: 'Core Module',
    description: 'Comprehensive student profile tracking from enrollment to graduation with digital IDs and performance logs.',
    items: [
      { name: 'Student Profiles', desc: 'Centralized bio data, emergency contacts, medical records, and academic history.' },
      { name: 'Online Admission', desc: 'Customizable application forms, document upload, and automated application tracking.' },
      { name: 'Digital Student ID', desc: 'Generate printable high-resolution student ID cards with barcodes and QR codes.' },
      { name: 'Class Promotion', desc: 'One-click batch student promotion with roll number reassignment and section allocation.' },
      { name: 'Attendance Tracking', desc: 'Real-time daily roll call, subject-wise attendance, and automated absentees alerts.' },
      { name: 'Performance Analytics', desc: 'Interactive grade tracking, behavioral logs, and extracurricular achievements.' }
    ]
  },
  {
    id: 'teacher',
    title: 'Teacher Management',
    icon: '👩‍🏫',
    badge: 'Staff Hub',
    description: 'Empower faculty with streamlined profiles, payroll integration, timetable management, and leave tracking.',
    items: [
      { name: 'Teacher Profiles', desc: 'Qualifications, employment history, department roles, and contact records.' },
      { name: 'Staff Attendance', desc: 'Biometric fingerprint and QR code check-in with late arrival monitoring.' },
      { name: 'Salary & Payroll', desc: 'Automated salary slip generation, deductions, allowances, and direct bank transfers.' },
      { name: 'Department Management', desc: 'Organize faculty by subject departments and assign department heads.' },
      { name: 'Dynamic Timetable', desc: 'Automated routine allocation with conflict detection and substitute teacher assignments.' }
    ]
  },
  {
    id: 'academic',
    title: 'Academic Management',
    icon: '📅',
    badge: 'Curriculum',
    description: 'Structure academic routines, sections, subject mappings, and institutional holiday calendars effortlesly.',
    items: [
      { name: 'Class Routines', desc: 'Multi-section weekly timetables with period countdowns and room allocations.' },
      { name: 'Subject Mapping', desc: 'Assign core subjects, electives, and credit hours across classes.' },
      { name: 'Sections & Wings', desc: 'Group students by medium (English/Native), shifts (Morning/Day), and sections.' },
      { name: 'Academic Calendar', desc: 'Publish term dates, exam periods, sports events, and parent-teacher meetings.' },
      { name: 'Holidays & Vacations', desc: 'Configure institutional holidays with auto-sync to student and teacher calendars.' }
    ]
  },
  {
    id: 'exam',
    title: 'Examination & Grades',
    icon: '📝',
    badge: 'Evaluations',
    description: 'End-to-end examination schedules, mark entry portals, automated grade calculation, and report cards.',
    items: [
      { name: 'Exam Schedules', desc: 'Publish date sheets, admit cards, seating plans, and roominvigilation duties.' },
      { name: 'Marks Entry Portal', desc: 'Secure web and mobile mark submission for teachers with multi-level approval.' },
      { name: 'Grade Calculation', desc: 'Custom grading scales (GPA 5.0, CGPA 4.0, Letter Grades A-F, Percentages).' },
      { name: 'Result Publishing', desc: 'Instant online result publication with parent portal access restriction.' },
      { name: 'Printable Report Cards', desc: 'Beautiful customizable report cards with principal signature and performance graphs.' }
    ]
  },
  {
    id: 'attendance',
    title: 'Smart Attendance',
    icon: '⚡',
    badge: 'Real-Time',
    description: 'Instant attendance capture using QR code scanners, biometrics, or teacher mobile app with instant SMS alerts.',
    items: [
      { name: 'Student Attendance', desc: 'Period-wise or daily attendance marked in seconds on web or mobile app.' },
      { name: 'Teacher Attendance', desc: 'Track faculty punch-in/out times with geolocation and leave requests.' },
      { name: 'QR Code Attendance', desc: 'Fast RFID & QR card scanning at school entry gates for automatic check-in.' },
      { name: 'Daily Attendance Reports', desc: 'Export PDF/Excel summary reports for monthly attendance percentages.' }
    ]
  },
  {
    id: 'fee',
    title: 'Fee Management',
    icon: '💳',
    badge: 'Finance',
    description: 'Automate fee structures, online payments, payment gateway integration, due notices, and digital receipts.',
    items: [
      { name: 'Fee Collection Portal', desc: 'Collect tuition, exam fees, transport, and hostel fees with partial payment support.' },
      { name: 'Due Reports & Penalties', desc: 'Automated late fee calculation and instant due reminders sent to parents.' },
      { name: 'Online Payments', desc: 'Integrated Stripe, Credit Card, Mobile Banking, and NetBanking gateways.' },
      { name: 'Digital Receipts', desc: 'Auto-generate printable and downloadable PDF receipts with SMS confirmation.' }
    ]
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: '📢',
    badge: 'Connect',
    description: 'Bridge the gap between school, parents, and students with SMS, email notifications, and digital circulars.',
    items: [
      { name: 'Push Notifications', desc: 'Instant app notifications for homework, exam schedules, and emergency alerts.' },
      { name: 'SMS Broadcasts', desc: 'Bulk SMS integration for immediate absentees notices and fee reminders.' },
      { name: 'Email Newsletters', desc: 'Send rich HTML announcements, newsletter updates, and fee invoices.' },
      { name: 'Digital Circulars', desc: 'Publish signed school notices and event invitations directly to parent portals.' }
    ]
  },
  {
    id: 'reports',
    title: 'Reports & Analytics',
    icon: '📊',
    badge: 'Insights',
    description: 'Comprehensive data analytics for school boards, administrators, and education inspectors.',
    items: [
      { name: 'Student Progress Reports', desc: 'Multi-year academic trajectory and attendance trends for every student.' },
      { name: 'Financial Revenue Reports', desc: 'Fee collections, pending balances, expenses, and audit-ready ledgers.' },
      { name: 'Attendance Analytics', desc: 'Identify chronic absenteeism patterns by class, section, or subject.' },
      { name: 'Exam Class Performance', desc: 'Class pass percentages, subject averages, and topper rankings.' }
    ]
  },
  {
    id: 'admin',
    title: 'Administration & System',
    icon: '⚙️',
    badge: 'Security',
    description: 'Role-based access control, data encryption, audit logs, automated daily backups, and custom settings.',
    items: [
      { name: 'Role Management', desc: 'Granular permissions for Super Admins, Accountants, Teachers, and Librarians.' },
      { name: 'Security & Audit Logs', desc: 'Track every system action, user login time, and grade modification log.' },
      { name: 'System Settings', desc: 'Configure school logo, academic session dates, grading rules, and currency.' },
      { name: 'Automatic Cloud Backup', desc: 'Daily automated database snapshots with one-click restore capabilities.' }
    ]
  }
];

export function renderFeatures(containerId, tabContainerId) {
  const tabContainer = document.getElementById(tabContainerId);
  const gridContainer = document.getElementById(containerId);
  if (!tabContainer || !gridContainer) return;

  let activeTabId = featureCategories[0].id;

  function updateView() {
    // Render Tabs
    tabContainer.innerHTML = featureCategories.map(cat => `
      <button class="feature-tab-btn flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
        cat.id === activeTabId 
          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow-cyan' 
          : 'glass-card text-gray-400 hover:text-white hover:bg-white/10'
      }" data-id="${cat.id}">
        <span>${cat.icon}</span>
        <span>${cat.title}</span>
      </button>
    `).join('');

    // Render Cards for active category
    const category = featureCategories.find(c => c.id === activeTabId);
    gridContainer.innerHTML = category.items.map(item => `
      <div class="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">✓</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/10">${category.badge}</span>
          </div>
          <h3 class="text-base font-bold text-white">${item.name}</h3>
          <p class="text-xs text-gray-400 leading-relaxed">${item.desc}</p>
        </div>
        <div class="pt-2 text-[10px] text-cyan-400 font-semibold flex items-center space-x-1">
          <span>Explore sub-features</span>
          <span>→</span>
        </div>
      </div>
    `).join('');

    // Re-attach Tab event listeners
    tabContainer.querySelectorAll('.feature-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTabId = btn.dataset.id;
        updateView();
      });
    });
  }

  updateView();
}
