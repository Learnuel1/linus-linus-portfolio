// Linus Linus Portfolio — Core Interactive Application Logic
// Verified Data Models from CASH DESK, GRUBBEX, BYHELB LMS, and SECURESYNC

// ==================== 1. VERIFIED SKILLS INVENTORY ====================
const skillsData = [
  // Desktop & Systems
  { name: 'C# (5.0 / 6.0)', category: 'desktop', level: 'Expert', icon: 'file-code-2', desc: 'Object-oriented systems programming, async Task patterns' },
  { name: '.NET Framework 4.5', category: 'desktop', level: 'Architect', icon: 'layers', desc: 'Windows Forms, ADO.NET, Service & Factory layers' },
  { name: 'ADO.NET & SqlHelper', category: 'desktop', level: 'Advanced', icon: 'database', desc: 'Direct parameterization, SqlDataAdapter, ACID transactions' },
  { name: 'Multi-Threading (Async)', category: 'desktop', level: 'Architect', icon: 'cpu', desc: 'GroundWorker non-blocking reconciliation, Task.Run()' },
  { name: 'WMI Hardware Security', category: 'desktop', level: 'Advanced', icon: 'shield-alert', desc: 'Win32_Processor & BIOS hashing to SHA-256 for machine licenses' },
  { name: 'SAP Crystal Reports 13', category: 'desktop', level: 'Advanced', icon: 'file-text', desc: '15+ enterprise audit reports, thermal POS slip generation' },
  { name: 'Zen Barcode Engine', category: 'desktop', level: 'Advanced', icon: 'scan', desc: 'Code128 1D & QR Code 2D generation & parsing' },
  { name: 'ExcelDataReader', category: 'desktop', level: 'Advanced', icon: 'table', desc: 'High-throughput binary .xlsx/.xls parsing & roster cleaning' },

  // Backend & Real-Time
  { name: 'Node.js (v18 / v20)', category: 'backend', level: 'Expert', icon: 'server', desc: 'High-throughput microservices, non-blocking I/O runtime' },
  { name: 'Express.js 4.x', category: 'backend', level: 'Architect', icon: 'network', desc: 'Dual-route gateways, middleware pipelines, error handling' },
  { name: 'Socket.io WebSockets', category: 'backend', level: 'Advanced', icon: 'radio', desc: 'Real-time GPS location broadcasting & live delivery events' },
  { name: 'Zod Runtime Validation', category: 'backend', level: 'Advanced', icon: 'check-square', desc: 'Centralized schema validation, type safety, route isolation' },
  { name: 'EventEmitter Architecture', category: 'backend', level: 'Advanced', icon: 'activity', desc: 'Decoupled domain event notifications, transactional emailers' },
  { name: 'RESTful APIs & Swagger', category: 'backend', level: 'Architect', icon: 'file-code', desc: 'OpenAPI 2.0 specs, YAML definitions, Postman documentation' },
  { name: 'Dual-Route Gateways', category: 'backend', level: 'Advanced', icon: 'split', desc: 'Enforced Web (/api/v1) vs Mobile (/api/v1/m) client separation' },
  { name: 'Winston & Morgan', category: 'backend', level: 'Advanced', icon: 'align-left', desc: 'Structured MongoDB collection logging & HTTP profiling' },

  // Databases & FinTech
  { name: 'Microsoft SQL Server', category: 'database', level: 'Expert', icon: 'database', desc: '2012–2022/Express, 90+ Stored Procedures, Views, Triggers' },
  { name: 'MongoDB & Mongoose 6', category: 'database', level: 'Expert', icon: 'hard-drive', desc: 'Aggregation pipelines, soft deletes, relational mappings' },
  { name: 'Double-Entry Ledgers', category: 'database', level: 'Architect', icon: 'book-open', desc: 'Wallet & WalletHistory accounting, debit/credit audit trails' },
  { name: 'Platform Escrow Engine', category: 'database', level: 'Architect', icon: 'lock', desc: 'Payment escrow holding, automated commission splitting' },
  { name: 'Paystack API & Transfers', category: 'database', level: 'Expert', icon: 'credit-card', desc: 'Card checkout, NIP bank transfers, recipient code payouts' },
  { name: 'Flutterwave SDK', category: 'database', level: 'Expert', icon: 'dollar-sign', desc: 'Inline fee payments, mobile webhooks, dispute resolution' },
  { name: 'Central Bank BVN & NIP', category: 'database', level: 'Advanced', icon: 'landmark', desc: 'Real-time KYC identity verification & account name resolution' },
  { name: 'Multi-Tier KYC Engine', category: 'database', level: 'Advanced', icon: 'badge-check', desc: 'Virtual NIN, Voter Card, Driver License, CAC corporate, TIN' },

  // Frontend & Cloud
  { name: 'React 18 & Vite', category: 'frontend', level: 'Expert', icon: 'layout', desc: 'Modern hooks, functional components, fast bundle compilation' },
  { name: 'Next.js App Router', category: 'frontend', level: 'Advanced', icon: 'globe', desc: 'Server/client components, SEO metadata, API routes' },
  { name: 'Redux Toolkit & RTK Query', category: 'frontend', level: 'Expert', icon: 'repeat', desc: 'Normalized state, automated 401 token refresh & rotation' },
  { name: 'MobX State Management', category: 'frontend', level: 'Advanced', icon: 'zap', desc: 'Observable stores, wizard progress providers, draft resume' },
  { name: 'React Router DOM v6', category: 'frontend', level: 'Expert', icon: 'compass', desc: 'createBrowserRouter, protected route guards, layout nested paths' },
  { name: 'Tailwind CSS & PostCSS', category: 'frontend', level: 'Expert', icon: 'palette', desc: 'Utility-first modern design, dark/light theme switching' },
  { name: '@cyntler Doc Viewer', category: 'frontend', level: 'Advanced', icon: 'eye', desc: 'In-app native rendering for PDF, Word, Excel, PowerPoint' },
  { name: 'Google Maps Platform', category: 'frontend', level: 'Advanced', icon: 'map-pin', desc: 'Geocoding, Distance Matrix API, Haversine geo-fencing' },
  { name: 'AWS Secrets & S3', category: 'frontend', level: 'Advanced', icon: 'cloud', desc: 'Cloud credentials management, asset storage pipelines' },
  { name: 'Two-Factor Auth (2FA)', category: 'frontend', level: 'Advanced', icon: 'key', desc: 'Timed OTP challenges, challenge verification, fallback recovery' }
];

// ==================== 2. FIVE FLAGSHIP SYSTEMS DATA ====================
const projectsData = [
  {
    id: 'cashdesk',
    title: 'Cash Desk (CashDeskApp)',
    badge: 'Desktop & Institutional FinTech',
    badgeColor: 'border-brand-500/40 text-brand-300 bg-brand-950/30',
    subtitle: 'Enterprise Windows Desktop Financial Suite, Bursary, POS & Stored Procedures',
    stack: ['C#', '.NET Framework 4.5', 'SQL Server 2012+', 'ADO.NET', 'Crystal Reports 13', 'WMI SHA-256', 'LiveCharts', 'Zen Barcode'],
    metrics: [
      { label: 'SQL Stored Procs', val: '90+' },
      { label: 'Trial Record Guard', val: '120 Records' },
      { label: 'Built-in Reports', val: '15+ RPT' },
      { label: 'Architecture', val: 'Factory + Async' }
    ],
    overview: 'An enterprise-grade Windows desktop financial management and accounting suite tailored for educational institutions. Unifies school fee billing, multi-term installments, bank teller voucher reconciliation, cashless student digital wallets, barcode-enabled POS inventory, and background debt audits.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="cpu" class="w-4 h-4 text-brand-400"></i>
          Asynchronous GroundWorker Architecture:
        </h4>
        <p>Heavy financial reconciliations are executed non-blockingly via <code>Task.Run()</code> inside <code>GroundWorker.cs</code> during boot, preventing UI freezes while crunching thousands of academic debt balances across First, Second, and Third terms simultaneously.</p>
        
        <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-brand-300 space-y-1">
          <div>// GroundWorker Async Multi-threading Pipeline</div>
          <div>1. Exec sp_clear_debtors_and_regularpayments</div>
          <div>2. Task.Run(FirstTermDebtAsync) || Task.Run(SecondTermDebtAsync) || Task.Run(ThirdTermDebtAsync)</div>
          <div>3. GroundworkerFulPay -> Populate FullPayment table</div>
          <div>4. DeleteDoubleDebtor() -> Deduplicate zero-payment accounts</div>
        </div>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
          Hardware-Bound WMI Anti-Tamper Licensing:
        </h4>
        <p>Queries WMI for <code>Win32_Processor.ProcessorId</code> and <code>Win32_BIOS.SerialNumber</code>, computes a machine-bound SHA-256 hash, and verifies it across a two-factor persistence layer (SQL <code>ActivationTable</code> + Windows Isolated Storage <code>apps.txt</code>).</p>
      </div>
    `
  },
  {
    id: 'grubbex',
    title: 'Grubbex Backend API',
    badge: 'Real-Time Logistics & On-Demand Marketplace',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30',
    subtitle: 'Multi-Sided Logistics Marketplace, Socket.io Geo-Dispatching & Escrow Ledger',
    stack: ['Node.js v20', 'Express.js', 'Socket.io', 'MongoDB (Mongoose)', 'Zod', 'Google Maps API', 'Paystack Transfer', 'AWS Secrets'],
    metrics: [
      { label: 'Personas Coordinated', val: '4 Actors' },
      { label: 'Dispatch Latency', val: '< 250ms' },
      { label: 'Verification Method', val: 'QR + 6-Digit PIN' },
      { label: 'Ledger Strategy', val: 'Double-Entry' }
    ],
    overview: 'High-concurrency backend API and real-time WebSocket hub powering an on-demand food and grocery logistics marketplace connecting Shoppers, Couriers (Riders), Merchant Stores, and Platform Administrators.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="split" class="w-4 h-4 text-emerald-400"></i>
          Dual-Route Gateway Isolation:
        </h4>
        <p>Enforces strict client isolation through <code>dual.route.js</code> and <code>checkRouteUsed</code> middleware: Web clients (Vendors/Admins) operate exclusively under <code>/api/v1</code>, while Mobile clients (Shoppers/Couriers) are isolated under <code>/api/v1/m</code>.</p>
        
        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="map-pin" class="w-4 h-4 text-cyan-400"></i>
          Haversine Geo-Radius Courier Dispatch:
        </h4>
        <p>Utilizes Google Maps Geocoding and Haversine distance computations (<code>getOrdersWithinRadius</code>) to detect nearby couriers within active geofences and dispatch order pickup requests via low-latency Socket.io events.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="qr-code" class="w-4 h-4 text-amber-400"></i>
          Cryptographic QR Handover & Platform Escrow:
        </h4>
        <p>Shoppers generate a dynamic QR code paired with a 6-digit PIN. Upon physical delivery, the courier scans the QR code; the server verifies the cryptographic payload, unlocks platform escrow funds, programmatically deducts commission, and credits the courier wallet in <code>WalletHistory</code>.</p>
      </div>
    `
  },
  {
    id: 'byhelb-be',
    title: 'BYHELB LMS Backend v2',
    badge: 'Government FinTech & Distributed Governance',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30',
    subtitle: 'Distributed Loan Processing Engine, 8-Tier RBAC & Concurrency View Locks',
    stack: ['Node.js v20', 'Express.js', 'MongoDB', 'Mongoose 6', 'Winston', 'Paystack', 'Flutterwave', 'SendGrid', 'EJS'],
    metrics: [
      { label: 'Permission Hierarchy', val: '8 Tiers' },
      { label: 'Concurrency Collisions', val: '0 (Locked)' },
      { label: 'Identity KYC', val: 'BVN & NIP Verified' },
      { label: 'Audit Trail', val: 'Memos & ActivityLog' }
    ],
    overview: 'The central loan management backend powering the Bayelsa State Higher Education Loans Board, automating tertiary student applications, civil service governance, KYC verification, and multi-million naira loan batch disbursements.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="lock" class="w-4 h-4 text-cyan-400"></i>
          Active Concurrency Prevention (Loan Profile View Lock):
        </h4>
        <p>To eliminate conflicting multi-officer evaluations on high-stakes loan files, <code>LoanProfileView</code> maintains active database locks when an application is opened by staff, immediately blocking concurrent edits until explicitly freed or timed out.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="git-branch" class="w-4 h-4 text-brand-400"></i>
          Internal Batch Memo Approval Routing:
        </h4>
        <p>Vetted loans are bundled into tracked digital <strong>Memos</strong> that flow sequentially: Loan Officer (LO) -> Loan Processing Head (LPH) -> Auditor (LA) -> Executive Secretary (ES) sign-off -> Accountant (ACC) bulk disbursement.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="shield" class="w-4 h-4 text-purple-400"></i>
          Symmetric Token Claims Obfuscation:
        </h4>
        <p>JWT payloads are transformed using custom reversible Base64-to-Hex symmetric cryptography before signing to prevent client inspection of internal role claims and user IDs on mobile devices.</p>
      </div>
    `
  },
  {
    id: 'byhelb-fe',
    title: 'BYSHELB Student Loan Portal Frontend',
    badge: 'Citizen-Facing Web App & Multi-Step Wizard',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/30',
    subtitle: '7-Stage Loan Application Pipeline & 3-Tier Prerequisite Onboarding Gatekeeper',
    stack: ['React 18', 'Vite', 'MobX State', 'React Router DOM', 'Styled Components', 'Flutterwave Inline SDK'],
    metrics: [
      { label: 'Onboarding Gates', val: '3 Milestones' },
      { label: 'Application Wizard', val: '7 Sequential Steps' },
      { label: 'Loan Tracks', val: 'Undergrad & Postgrad' },
      { label: 'Fee Checkout', val: 'Inline Payment' }
    ],
    overview: 'High-throughput, accessible student loan portal enabling thousands of tertiary students from Bayelsa State to register, verify identity, complete multi-step applications, and accept disbursement offers.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="shield-alert" class="w-4 h-4 text-blue-400"></i>
          3-Tier Onboarding Gatekeeper:
        </h4>
        <p>Students must pass an immutable 3-step verification checklist before the application pipeline unlocks: 1. LGA & Hometown bio verification -> 2. Next-of-Kin emergency contact -> 3. NIP BVN-resolved bank details.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="list-ordered" class="w-4 h-4 text-emerald-400"></i>
          7-Stage Isolated Step Provider:
        </h4>
        <p>Managed via <code>UndergraduateLoanStepProvider</code>, persisting incomplete forms across sessions: Step 0 (Institution info) -> Step 1 (Loan amounts) -> Step 2 & 3 (Surety 1 & 2 details) -> Step 4 (Document uploads) -> Step 5 (Audit review) -> Step 6 (Flutterwave payment settlement).</p>
      </div>
    `
  },
  {
    id: 'securesync',
    title: 'SecureSync Cloud Storage Platform',
    badge: 'Cloud Storage & Collaboration',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/30',
    subtitle: 'Encrypted Cloud Document Management, In-App Doc Viewer & 2FA Security',
    stack: ['React 18', 'Vite', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Lucide Icons', '@cyntler Doc Viewer', 'Yup'],
    metrics: [
      { label: 'Document Formats', val: 'PDF, DOCX, XLSX, PPT' },
      { label: 'Auth Security', val: '2FA + Auto Token Rotation' },
      { label: 'File Sharing', val: 'Granular View / Download' },
      { label: 'Quota Engine', val: 'Real-Time Storage Bar' }
    ],
    overview: 'An intuitive, privacy-centric cloud storage application enabling users to upload, preview, organize, and securely share documents with granular permission controls, two-factor authentication, and dynamic quota management.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="refresh-cw" class="w-4 h-4 text-purple-400"></i>
          RTK Query Token Rotation on 401s:
        </h4>
        <p>Configured inside <code>src/api/index.js</code> with automatic JWT bearer authorization attachment and silent token rotation on 401 Unauthorized responses to ensure uninterrupted document management sessions.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="file-text" class="w-4 h-4 text-cyan-400"></i>
          In-App Multi-Format Document Viewer:
        </h4>
        <p>Integrated <code>@cyntler/react-doc-viewer</code> to render complex documents (Word, Excel, PowerPoint, PDF) directly in-browser with zoom, pagination, and full-screen controls without requiring local downloads.</p>
      </div>
    `
  }
];

// ==================== 3. DOM INJECTION & EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
  renderSkills('all');
  renderProjects();
  initSimulator('groundworker');
  initTheme();
  initMobileMenu();
  initContactForm();
  lucide.createIcons();
});

// Render Skills Matrix
function renderSkills(category) {
  const container = document.getElementById('skillsGrid');
  if (!container) return;

  const filtered = category === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === category);

  container.innerHTML = filtered.map(skill => `
    <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:scale-[1.02] transition-all flex flex-col justify-between group">
      <div>
        <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400 mb-3 group-hover:bg-brand-500/10 transition-colors">
          <i data-lucide="${skill.icon}" class="w-4 h-4"></i>
        </div>
        <h4 class="font-bold text-white text-sm tracking-tight mb-1">${skill.name}</h4>
        <p class="text-[11px] text-slate-400 leading-tight">${skill.desc}</p>
      </div>
      <div class="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span class="text-[10px] font-mono text-slate-400 uppercase tracking-widest">${skill.category}</span>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-brand-300 font-semibold">${skill.level}</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// Category Tabs Click
document.getElementById('skillTabs')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.skill-tab');
  if (!btn) return;

  document.querySelectorAll('.skill-tab').forEach(b => {
    b.classList.remove('active', 'bg-brand-500', 'text-slate-950');
    b.classList.add('bg-slate-800/80', 'text-slate-300');
  });

  btn.classList.add('active', 'bg-brand-500', 'text-slate-950');
  btn.classList.remove('bg-slate-800/80', 'text-slate-300');

  renderSkills(btn.dataset.category);
});

// Render 5 Projects
function renderProjects() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = projectsData.map((p, idx) => `
    <div class="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
      <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        
        <div class="space-y-3 max-w-3xl">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-xs font-mono px-3 py-1 rounded-full border ${p.badgeColor} uppercase tracking-wider">${p.badge}</span>
            <span class="text-xs font-mono text-slate-400">Flagship System 0${idx + 1}</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${p.title}</h3>
          <p class="text-brand-300 font-mono text-xs sm:text-sm font-medium">${p.subtitle}</p>
          <p class="text-slate-300 text-sm leading-relaxed pt-2">${p.overview}</p>

          <!-- Tech Stack Chips -->
          <div class="flex flex-wrap gap-2 pt-3">
            ${p.stack.map(st => `<span class="code-chip px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300">${st}</span>`).join('')}
          </div>
        </div>

        <!-- Right Side Metrics & Modal CTA -->
        <div class="lg:w-72 flex flex-col justify-between shrink-0 pt-4 lg:pt-0 lg:border-l lg:border-slate-800 lg:pl-6 space-y-4">
          <div class="grid grid-cols-2 gap-3">
            ${p.metrics.map(m => `
              <div class="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 text-center">
                <span class="block text-sm font-bold text-brand-400">${m.val}</span>
                <span class="text-[10px] text-slate-400 font-mono uppercase">${m.label}</span>
              </div>
            `).join('')}
          </div>

          <button onclick="openProjectModal('${p.id}')" class="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-brand-500 hover:bg-brand-400 text-slate-950 transition-all shadow-md">
            <i data-lucide="layers" class="w-4 h-4"></i>
            <span>View Architecture Deep-Dive</span>
          </button>
        </div>

      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ==================== 4. ARCHITECTURE PLAYGROUND SIMULATOR ====================
function initSimulator(simType) {
  const display = document.getElementById('simulatorDisplay');
  if (!display) return;

  if (simType === 'groundworker') {
    display.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h4 class="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="cpu" class="w-5 h-5 text-brand-400"></i>
              Cash Desk: GroundWorker Multi-Threaded Async Execution
            </h4>
            <p class="text-xs text-slate-400 font-mono">Simulating concurrent term audits without UI blocking</p>
          </div>
          <button id="runGroundworkerBtn" class="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-500 hover:bg-brand-400 text-slate-950 transition-all flex items-center gap-1.5">
            <i data-lucide="play" class="w-4 h-4"></i> Trigger Background Audit
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4" id="threadBoxes">
          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800" id="thread1">
            <div class="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
              <span>Task.Run 1</span>
              <span class="status text-slate-400">Idle</span>
            </div>
            <h5 class="text-sm font-bold text-white mb-2">FirstTermDebtAsync()</h5>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bar bg-brand-500 h-full w-0 transition-all duration-500"></div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800" id="thread2">
            <div class="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
              <span>Task.Run 2</span>
              <span class="status text-slate-400">Idle</span>
            </div>
            <h5 class="text-sm font-bold text-white mb-2">SecondTermDebtAsync()</h5>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bar bg-emerald-500 h-full w-0 transition-all duration-700"></div>
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-950 border border-slate-800" id="thread3">
            <div class="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
              <span>Task.Run 3</span>
              <span class="status text-slate-400">Idle</span>
            </div>
            <h5 class="text-sm font-bold text-white mb-2">ThirdTermDebtAsync()</h5>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bar bg-cyan-500 h-full w-0 transition-all duration-600"></div>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 h-32 overflow-y-auto space-y-1" id="simLog">
          <div class="text-slate-500">// GroundWorker Engine ready on background threadpool. Click 'Trigger Background Audit'.</div>
        </div>
      </div>
    `;

    document.getElementById('runGroundworkerBtn')?.addEventListener('click', runGroundworkerSimulation);
  } else if (simType === 'loan-statemachine') {
    display.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h4 class="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="git-merge" class="w-5 h-5 text-cyan-400"></i>
              BYHELB LMS: 8-Tier Loan State Machine & Concurrency Lock
            </h4>
            <p class="text-xs text-slate-400 font-mono">Watch state advancement and active reviewer concurrency locking</p>
          </div>
          <button id="advanceLoanBtn" class="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all flex items-center gap-1.5">
            <i data-lucide="chevrons-right" class="w-4 h-4"></i> Advance Next Stage
          </button>
        </div>

        <!-- State Timeline -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center" id="loanSteps">
          <div class="step-card p-3 rounded-xl border border-slate-800 bg-slate-950" data-stage="0">
            <span class="block text-xs font-mono text-slate-400">Stage 0</span>
            <span class="text-sm font-bold text-white">Student Apply</span>
          </div>
          <div class="step-card p-3 rounded-xl border border-slate-800 bg-slate-950" data-stage="1">
            <span class="block text-xs font-mono text-slate-400">Stage 1</span>
            <span class="text-sm font-bold text-white">LO Review (Locked)</span>
          </div>
          <div class="step-card p-3 rounded-xl border border-slate-800 bg-slate-950" data-stage="2">
            <span class="block text-xs font-mono text-slate-400">Stage 2</span>
            <span class="text-sm font-bold text-white">LPH Memo Batch</span>
          </div>
          <div class="step-card p-3 rounded-xl border border-slate-800 bg-slate-950" data-stage="3">
            <span class="block text-xs font-mono text-slate-400">Stage 3</span>
            <span class="text-sm font-bold text-white">ES Sign-off</span>
          </div>
          <div class="step-card p-3 rounded-xl border border-slate-800 bg-slate-950" data-stage="4">
            <span class="block text-xs font-mono text-slate-400">Stage 4</span>
            <span class="text-sm font-bold text-white">ACC Disbursed</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 h-28 overflow-y-auto space-y-1" id="loanSimLog">
          <div class="text-slate-500">// Loan record initialized in 'Pending' state. Click 'Advance Next Stage'.</div>
        </div>
      </div>
    `;

    document.getElementById('advanceLoanBtn')?.addEventListener('click', advanceLoanSimulation);
  } else if (simType === 'grubbex-flow') {
    display.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h4 class="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="wallet" class="w-5 h-5 text-emerald-400"></i>
              Grubbex: Real-Time Geo-Dispatch, Escrow & Handover Verification
            </h4>
            <p class="text-xs text-slate-400 font-mono">Simulating order escrow, courier proximity matching, and QR settlement</p>
          </div>
          <button id="advanceGrubbexBtn" class="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all flex items-center gap-1.5">
            <i data-lucide="arrow-right-circle" class="w-4 h-4"></i> Step Next Event
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center" id="grubbexSteps">
          <div class="g-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-step="0">
            <span class="text-xs font-mono text-slate-400 block">Step 1</span>
            <span class="text-sm font-bold text-white">Escrow Hold</span>
          </div>
          <div class="g-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-step="1">
            <span class="text-xs font-mono text-slate-400 block">Step 2</span>
            <span class="text-sm font-bold text-white">Socket.io Dispatch</span>
          </div>
          <div class="g-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-step="2">
            <span class="text-xs font-mono text-slate-400 block">Step 3</span>
            <span class="text-sm font-bold text-white">QR / PIN Scan</span>
          </div>
          <div class="g-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-step="3">
            <span class="text-xs font-mono text-slate-400 block">Step 4</span>
            <span class="text-sm font-bold text-white">Wallet Credited</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 h-28 overflow-y-auto space-y-1" id="grubbexLog">
          <div class="text-slate-500">// Customer initiates checkout of ₦14,500. Click 'Step Next Event'.</div>
        </div>
      </div>
    `;

    document.getElementById('advanceGrubbexBtn')?.addEventListener('click', advanceGrubbexSimulation);
  }

  lucide.createIcons();
}

// Selector buttons
document.getElementById('simSelector')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.sim-btn');
  if (!btn) return;

  document.querySelectorAll('.sim-btn').forEach(b => {
    b.classList.remove('active', 'bg-brand-500', 'text-slate-950');
    b.classList.add('text-slate-300');
  });

  btn.classList.add('active', 'bg-brand-500', 'text-slate-950');
  btn.classList.remove('text-slate-300');

  initSimulator(btn.dataset.sim);
});

// GroundWorker Simulation Logic
function runGroundworkerSimulation() {
  const log = document.getElementById('simLog');
  if (!log) return;

  log.innerHTML = `<div class="text-brand-400">> [WorkerBoot]: Spawning Task.Run() background threads...</div>`;

  const t1 = document.querySelector('#thread1 .bar');
  const t2 = document.querySelector('#thread2 .bar');
  const t3 = document.querySelector('#thread3 .bar');

  document.querySelector('#thread1 .status').textContent = 'Auditing...';
  document.querySelector('#thread2 .status').textContent = 'Auditing...';
  document.querySelector('#thread3 .status').textContent = 'Auditing...';

  t1.style.width = '100%';
  t2.style.width = '100%';
  t3.style.width = '100%';

  setTimeout(() => {
    log.innerHTML += `<div class="text-emerald-400">> [FirstTermDebtAsync]: 148 outstanding fee liabilities resolved.</div>`;
    document.querySelector('#thread1 .status').textContent = 'Done (148)';
  }, 600);

  setTimeout(() => {
    log.innerHTML += `<div class="text-cyan-400">> [ThirdTermDebtAsync]: 210 debtor profiles updated in database.</div>`;
    document.querySelector('#thread3 .status').textContent = 'Done (210)';
  }, 900);

  setTimeout(() => {
    log.innerHTML += `<div class="text-emerald-400">> [SecondTermDebtAsync]: 92 records audited. Calling DeleteDoubleDebtor().</div>`;
    log.innerHTML += `<div class="text-brand-300 font-bold">> [GroundWorker Success]: Total 450 accounts reconciled in 1.2s. Main UI remained at 60 FPS.</div>`;
    document.querySelector('#thread2 .status').textContent = 'Done (92)';
  }, 1200);
}

// Loan State Machine Simulation Logic
let currentLoanStage = 0;
function advanceLoanSimulation() {
  const log = document.getElementById('loanSimLog');
  const steps = document.querySelectorAll('.step-card');
  if (!log || steps.length === 0) return;

  steps.forEach(s => s.classList.remove('border-cyan-400', 'bg-cyan-950/40', 'text-cyan-300'));

  currentLoanStage = (currentLoanStage + 1) % steps.length;
  const activeStep = steps[currentLoanStage];
  activeStep.classList.add('border-cyan-400', 'bg-cyan-950/40', 'text-cyan-300');

  const stageMessages = [
    `<div class="text-slate-300">> [Stage 0]: Student submits application. Fees confirmed via Flutterwave webhook.</div>`,
    `<div class="text-amber-400">> [Stage 1]: Loan Officer opens file. LoanProfileView locks record (Lock ID: LK_84920). Concurrent access denied to other staff.</div>`,
    `<div class="text-brand-300">> [Stage 2]: Loan Processing Head bundles 50 vetted records into Internal Memo #MEMO-2024-081. Lock released.</div>`,
    `<div class="text-purple-300">> [Stage 3]: Auditor signs compliance. Executive Secretary stamps final electronic approval.</div>`,
    `<div class="text-emerald-400">> [Stage 4]: Accountant executes bulk disbursement to verified NIP bank account. Loan marked DISBURSED.</div>`
  ];

  log.innerHTML += stageMessages[currentLoanStage];
  log.scrollTop = log.scrollHeight;
}

// Grubbex Simulation Logic
let currentGrubbexStep = 0;
function advanceGrubbexSimulation() {
  const log = document.getElementById('grubbexLog');
  const steps = document.querySelectorAll('.g-step');
  if (!log || steps.length === 0) return;

  steps.forEach(s => s.classList.remove('border-emerald-400', 'bg-emerald-950/40', 'text-emerald-300'));

  currentGrubbexStep = (currentGrubbexStep + 1) % steps.length;
  const activeStep = steps[currentGrubbexStep];
  activeStep.classList.add('border-emerald-400', 'bg-emerald-950/40', 'text-emerald-300');

  const messages = [
    `<div class="text-slate-300">> [Checkout]: Paystack charges ₦14,500. Order status set to 'open'. Held in platform escrow.</div>`,
    `<div class="text-cyan-400">> [GeoDispatch]: Haversine search within 3km found Courier #CR_419. Socket.io broadcasts pickup event.</div>`,
    `<div class="text-amber-300">> [Handover]: Courier arrives at shopper coordinates. Scans dynamic QR Code (PIN: 819203). Verification match confirmed.</div>`,
    `<div class="text-emerald-400 font-bold">> [Settlement]: Escrow released. ₦2,200 delivery fee credited to Rider wallet; 15% platform commission deducted in WalletHistory ledger.</div>`
  ];

  log.innerHTML += messages[currentGrubbexStep];
  log.scrollTop = log.scrollHeight;
}

// ==================== 5. MODAL DIALOGS ====================
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalTag').textContent = project.badge;
  document.getElementById('modalContent').innerHTML = project.architecture;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

document.getElementById('closeModalBtn')?.addEventListener('click', closeProjectModal);
document.getElementById('projectModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') closeProjectModal();
});

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

// ==================== 6. THEME SWITCHER ====================
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('linus_portfolio_theme') || 'dark';
  if (savedTheme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
  } else {
    html.classList.add('dark');
    html.classList.remove('light');
  }

  toggleBtn?.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('linus_portfolio_theme', 'light');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
      localStorage.setItem('linus_portfolio_theme', 'dark');
    }
    lucide.createIcons();
  });
}

// ==================== 7. MOBILE MENU ====================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');

  menuBtn?.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// ==================== 8. CONTACT FORM & CLIPBOARD ====================
function initContactForm() {
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    const mailtoUri = `mailto:linus.linus204@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoUri;
    showToast('Redirecting to your email client...');
  });
}

function copyToClipboard(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${text} to clipboard!`);
  }).catch(() => {
    showToast('Failed to copy');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3000);
}
