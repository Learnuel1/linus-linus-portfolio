// Linus Linus Portfolio — UI Screenshots & Interface Showcase Logic
// Mapped across all 7 Enterprise Systems: 21 Production Views

const galleryItems = [
  // ==================== 1. CASH DESK (.NET WinForms) ====================
  {
    id: 'cashdesk-01',
    systemId: 'cashdesk',
    systemTitle: 'Cash Desk (CashDeskApp)',
    badge: 'Desktop Bursary & FinTech',
    badgeColor: 'border-brand-500/40 text-brand-300 bg-brand-950/30',
    type: 'desktop',
    windowTitle: 'CashDesk Enterprise Suite v4.5 — Institution Daily Dashboard & Revenue Reconciliation',
    title: 'Executive Bursary Dashboard & Live Revenue Flow',
    description: 'High-density WinForms administrative dashboard rendering real-time school fee collections, bank voucher clearance ratios, active term enrollment stats, and live revenue stream charts.',
    tags: ['C#', '.NET 4.5', 'LiveCharts', 'SQL Server', 'Thermal POS'],
    imagePath: './assets/screenshots/cashdesk/01-dashboard.png',
    svgType: 'cashdesk-dash'
  },
  {
    id: 'cashdesk-02',
    systemId: 'cashdesk',
    systemTitle: 'Cash Desk (CashDeskApp)',
    badge: 'Desktop Bursary & FinTech',
    badgeColor: 'border-brand-500/40 text-brand-300 bg-brand-950/30',
    type: 'desktop',
    windowTitle: 'CashDesk — GroundWorker Multi-Threaded Debt Auditor [sp_clear_debtors_and_regularpayments]',
    title: 'GroundWorker Asynchronous Debt Audit Matrix',
    description: 'Multi-threaded background financial reconciliation console. Evaluates First, Second, and Third term student liabilities concurrently via Task.Run() with zero UI freeze, deduplicating zero-payment accounts.',
    tags: ['C#', 'Multi-Threading', 'Task.Run', 'Stored Procs', 'ACID'],
    imagePath: './assets/screenshots/cashdesk/02-debtor-reconciliation.png',
    svgType: 'cashdesk-worker'
  },
  {
    id: 'cashdesk-03',
    systemId: 'cashdesk',
    systemTitle: 'Cash Desk (CashDeskApp)',
    badge: 'Desktop Bursary & FinTech',
    badgeColor: 'border-brand-500/40 text-brand-300 bg-brand-950/30',
    type: 'desktop',
    windowTitle: 'CashDesk POS Terminal — Barcode Checkout, Student Smart Card & Thermal Receipt',
    title: 'Cashless Campus POS Terminal & Smart Card Checkout',
    description: 'High-speed bookstore and cafeteria point-of-sale interface. Reads student digital wallets, scans 1D/2D Code128 barcodes via Zen Barcode engine, and dispatches raw ESC/POS thermal receipts.',
    tags: ['Zen Barcode', 'ESC/POS', 'IsolatedStorage', 'WMI Anti-Tamper'],
    imagePath: './assets/screenshots/cashdesk/03-pos-counter.png',
    svgType: 'cashdesk-pos'
  },

  // ==================== 2. CHUCKSMEDICAREAPP (HIMS) ====================
  {
    id: 'chucksmedicare-01',
    systemId: 'chucksmedicare',
    systemTitle: 'ChucksMedicareApp (HIMS)',
    badge: 'Healthcare HIMS & Diagnostics',
    badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/30',
    type: 'desktop',
    windowTitle: 'ChucksMedicare HIMS v4.5 — In-Patient Ward Matrix & Interactive Bed Allocation Grid',
    title: 'In-Patient Ward & Bed Management Grid',
    description: 'Interactive clinical bed board coordinating Male, Female, Maternity, and Pediatric surgical wards. Displays real-time bed occupancy flags, attending physicians, admission dates, and oxygen/IV statuses.',
    tags: ['C# .NET', 'Ward Management', 'SQL Helper', 'Clinical RBAC'],
    imagePath: './assets/screenshots/chucksmedicare/01-clinical-admission.png',
    svgType: 'chucks-wards'
  },
  {
    id: 'chucksmedicare-02',
    systemId: 'chucksmedicare',
    systemTitle: 'ChucksMedicareApp (HIMS)',
    badge: 'Healthcare HIMS & Diagnostics',
    badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/30',
    type: 'desktop',
    windowTitle: 'ChucksMedicare Pharmacy — 3-Tier Inventory Transfer (Store -> Dispensary -> Shelf)',
    title: '3-Tier Pharmaceutical Supply Chain & Expiry Monitor',
    description: 'Zero-leakage pharmaceutical management suite tracking medicine transfers across Main Store, Dispensary, and Pharmacy POS counter, featuring dynamic real-time toast alerts for medications expiring within 30 days.',
    tags: ['3-Tier Inventory', 'Expiry Watchdog', 'Batch Tracking', 'Crystal Reports'],
    imagePath: './assets/screenshots/chucksmedicare/02-pharmacy-dispensary.png',
    svgType: 'chucks-pharma'
  },
  {
    id: 'chucksmedicare-03',
    systemId: 'chucksmedicare',
    systemTitle: 'ChucksMedicareApp (HIMS)',
    badge: 'Healthcare HIMS & Diagnostics',
    badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/30',
    type: 'desktop',
    windowTitle: 'ChucksMedicare Diagnostic Center — Haematology, Chemical Pathology & Lab Certifications',
    title: 'Clinical Pathology & Haematology Diagnostic Suite',
    description: 'Laboratory investigation console for pathologists. Records Full Blood Count (FBC), Fasting Blood Sugar, Urinalysis, and blood film parameters with reference range validation and certified printable report exports.',
    tags: ['Laboratory HIMS', 'Pathology', 'Haematology', 'Diagnostic Charting'],
    imagePath: './assets/screenshots/chucksmedicare/03-diagnostic-lab.png',
    svgType: 'chucks-lab'
  },

  // ==================== 3. MM TRADERS ERP (.NET & Python) ====================
  {
    id: 'mmtraders-01',
    systemId: 'mmtraders',
    systemTitle: 'MM Traders Inventory ERP',
    badge: 'Wholesale ERP & POS',
    badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/30',
    type: 'desktop',
    windowTitle: 'MM Traders ERP v4.5.2 — Multi-Brand Wholesale Stock Ledger & POS Terminal',
    title: 'Multi-Brand Wholesale Stock Ledger & Billing',
    description: 'High-throughput commercial inventory console tracking wholesale product units, purchase orders, customer trade discounts, warehouse reorder levels, and automated daily sales registers.',
    tags: ['C# .NET 4.5.2', 'Wholesale POS', 'SQL Server', 'Ledgers'],
    imagePath: './assets/screenshots/mmtraders/01-erp-dashboard.png',
    svgType: 'mm-stock'
  },
  {
    id: 'mmtraders-02',
    systemId: 'mmtraders',
    systemTitle: 'MM Traders Inventory ERP',
    badge: 'Wholesale ERP & POS',
    badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/30',
    type: 'desktop',
    windowTitle: 'MM Traders Cheque Register — Commercial Clearing, Drawer Banks & Post-Dated Tracking',
    title: 'Commercial Cheque Clearance Register',
    description: 'Dedicated financial ledger for wholesale transactions tracking bank name, cheque serial numbers, account payee details, maturity dates, and clearance states (Pending / Cleared / Dishonored).',
    tags: ['Cheque Ledger', 'Receivables', 'Audit Trail', 'Crystal Reports'],
    imagePath: './assets/screenshots/mmtraders/02-cheque-register.png',
    svgType: 'mm-cheque'
  },
  {
    id: 'mmtraders-03',
    systemId: 'mmtraders',
    systemTitle: 'MM Traders Inventory ERP',
    badge: 'Wholesale ERP & POS',
    badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/30',
    type: 'desktop',
    windowTitle: 'PythonDrive Daemon — Automated SQL Server Snapshot & Google Drive v3 Encrypted Sync',
    title: 'PythonDrive Automated Google Drive Cloud Backup',
    description: 'Background automation utility utilizing PyODBC and Google Drive API v3 to generate encrypted SQL Server database dumps and securely upload backups to offsite cloud storage on automated schedules.',
    tags: ['Python', 'PyODBC', 'Google Drive API v3', 'Offsite Sync'],
    imagePath: './assets/screenshots/mmtraders/03-pythondrive-sync.png',
    svgType: 'mm-pythondrive'
  },

  // ==================== 4. GRUBBEX (Real-Time Logistics) ====================
  {
    id: 'grubbex-01',
    systemId: 'grubbex',
    systemTitle: 'Grubbex Logistics API',
    badge: 'Real-Time Logistics & Escrow',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30',
    type: 'web',
    windowTitle: 'https://admin.grubbex.com/dispatch/radar — Live Courier Geo-Radius Tracking',
    title: 'Haversine Real-Time Courier Dispatch Radar',
    description: 'Command center tracking couriers and merchant stores via Google Maps and WebSocket streams. Executes Haversine geo-fencing (getOrdersWithinRadius) to match orders with couriers within sub-250ms latency.',
    tags: ['Node.js v20', 'Socket.io', 'Google Maps API', 'Haversine Radar'],
    imagePath: './assets/screenshots/grubbex/01-geo-dispatch.png',
    svgType: 'grubbex-radar'
  },
  {
    id: 'grubbex-02',
    systemId: 'grubbex',
    systemTitle: 'Grubbex Logistics API',
    badge: 'Real-Time Logistics & Escrow',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30',
    type: 'web',
    windowTitle: 'https://rider.grubbex.com/orders/delivery-handover — Cryptographic QR & 6-Digit PIN',
    title: 'Cryptographic QR Delivery Handover & Escrow Unlock',
    description: 'Courier delivery settlement screen. Couriers scan shopper dynamic QR codes and enter fallback 6-digit PINs; the server cryptographically validates the token and atomically releases platform escrow funds.',
    tags: ['QR Tokenization', 'Escrow Engine', 'Paystack Transfer', 'Zod'],
    imagePath: './assets/screenshots/grubbex/02-qr-handover.png',
    svgType: 'grubbex-qr'
  },
  {
    id: 'grubbex-03',
    systemId: 'grubbex',
    systemTitle: 'Grubbex Logistics API',
    badge: 'Real-Time Logistics & Escrow',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30',
    type: 'web',
    windowTitle: 'https://rider.grubbex.com/wallet/ledger — Double-Entry Ledger & Instant Payouts',
    title: 'Courier Double-Entry Wallet & Ledger History',
    description: 'Financial ledger tracking rider credits, platform commission deductions, tips, and instant Paystack NIP bank withdrawals with full transactional debit/credit audit records in WalletHistory.',
    tags: ['Double-Entry Accounting', 'WalletHistory', 'Paystack NIP', 'Express'],
    imagePath: './assets/screenshots/grubbex/03-rider-wallet.png',
    svgType: 'grubbex-wallet'
  },

  // ==================== 5. BYHELB LMS BACKEND (Government FinTech) ====================
  {
    id: 'byhelb-admin-01',
    systemId: 'byhelb-admin',
    systemTitle: 'BYHELB LMS Backend v2',
    badge: 'Government FinTech & RBAC',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30',
    type: 'web',
    windowTitle: 'https://lms.byhelb.gov.ng/admin/memos — Internal Batch Memo Sequential Approval Pipeline',
    title: '8-Tier RBAC Batch Memo Review Pipeline',
    description: 'Administrative portal for state loan processing. Loans are bundled into tracked digital Memos progressing sequentially: Loan Officer -> Processing Head -> Auditor -> Executive Secretary sign-off.',
    tags: ['Node.js', 'MongoDB', '8-Tier RBAC', 'Batch Memos', 'Audit Logs'],
    imagePath: './assets/screenshots/byhelb-admin/01-loan-memos.png',
    svgType: 'byhelb-memos'
  },
  {
    id: 'byhelb-admin-02',
    systemId: 'byhelb-admin',
    systemTitle: 'BYHELB LMS Backend v2',
    badge: 'Government FinTech & RBAC',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30',
    type: 'web',
    windowTitle: 'https://lms.byhelb.gov.ng/admin/loans/view-lock — LoanProfileView Active Concurrency Lease',
    title: 'Active Concurrency Prevention (Review Lock)',
    description: 'Reviewer lock supervisor. Prevents simultaneous contradictory edits on high-stakes student loan files by maintaining active, expiring database leases (LoanProfileView) with real-time officer presence flags.',
    tags: ['Concurrency Locks', 'Session Leasing', 'Mongoose', 'Zero Collision'],
    imagePath: './assets/screenshots/byhelb-admin/02-concurrency-locks.png',
    svgType: 'byhelb-locks'
  },
  {
    id: 'byhelb-admin-03',
    systemId: 'byhelb-admin',
    systemTitle: 'BYHELB LMS Backend v2',
    badge: 'Government FinTech & RBAC',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30',
    type: 'web',
    windowTitle: 'https://lms.byhelb.gov.ng/admin/disbursements — Automated Bulk NIP Bank Transfer Schedule',
    title: 'Bulk NIP Bank Disbursement & Account Verification',
    description: 'Accountant disbursement console. Validates student bank account numbers with Nigeria Inter-Bank Settlement System (NIBSS) via NIP/Paystack APIs, executing verified bulk payments with audit receipt generation.',
    tags: ['NIP Transfers', 'BVN Verification', 'Flutterwave', 'Bank Clearing'],
    imagePath: './assets/screenshots/byhelb-admin/03-disbursement-table.png',
    svgType: 'byhelb-payout'
  },

  // ==================== 6. BYSHELB STUDENT LOAN PORTAL (Frontend) ====================
  {
    id: 'byshelb-portal-01',
    systemId: 'byshelb-portal',
    systemTitle: 'BYSHELB Student Loan Portal',
    badge: 'Citizen-Facing Web App',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/30',
    type: 'web',
    windowTitle: 'https://portal.byshelb.gov.ng/onboarding/prerequisites — 3-Tier Verification Checklist',
    title: '3-Tier Prerequisite Onboarding Gatekeeper',
    description: 'Mandatory verification milestone gating loan access. Students must complete and verify: 1. LGA & Hometown bio status -> 2. Next-of-Kin emergency contact -> 3. BVN-resolved bank details before application unlocks.',
    tags: ['React 18', 'Vite', 'MobX State', 'Identity KYC', 'Gatekeeper'],
    imagePath: './assets/screenshots/byshelb-portal/01-onboarding-gates.png',
    svgType: 'byshelb-gates'
  },
  {
    id: 'byshelb-portal-02',
    systemId: 'byshelb-portal',
    systemTitle: 'BYSHELB Student Loan Portal',
    badge: 'Citizen-Facing Web App',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/30',
    type: 'web',
    windowTitle: 'https://portal.byshelb.gov.ng/apply/undergraduate — 7-Stage Application Wizard',
    title: '7-Stage Undergraduate Loan Application Pipeline',
    description: 'Dynamic multi-step wizard managed via UndergraduateLoanStepProvider. Guides students through Institution Profile, Loan Amount Breakdown, Surety 1 & 2 Declarations, Document Uploads, and Final Audit Review.',
    tags: ['React 18', 'Multi-Step Wizard', 'MobX Observable', 'Draft Resume'],
    imagePath: './assets/screenshots/byshelb-portal/02-application-wizard.png',
    svgType: 'byshelb-wizard'
  },
  {
    id: 'byshelb-portal-03',
    systemId: 'byshelb-portal',
    systemTitle: 'BYSHELB Student Loan Portal',
    badge: 'Citizen-Facing Web App',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/30',
    type: 'web',
    windowTitle: 'https://portal.byshelb.gov.ng/settlement — Inline Processing Fee Checkout & Offer Letter',
    title: 'Inline Payment Settlement & Offer Letter Acceptance',
    description: 'Application processing fee checkout embedding Flutterwave Inline SDK, followed by dynamic PDF electronic promissory note preview and digital signature binding upon loan approval.',
    tags: ['Flutterwave Inline', 'Payment Webhooks', 'E-Signature', 'PDF Binding'],
    imagePath: './assets/screenshots/byshelb-portal/03-flutterwave-settlement.png',
    svgType: 'byshelb-settle'
  },

  // ==================== 7. SECURESYNC (Cloud Storage) ====================
  {
    id: 'securesync-01',
    systemId: 'securesync',
    systemTitle: 'SecureSync Cloud Storage',
    badge: 'Cloud Storage & Collaboration',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/30',
    type: 'web',
    windowTitle: 'https://app.securesync.cloud/drive/my-files — Encrypted File Vault & Real-Time Storage Bar',
    title: 'Encrypted Cloud File Explorer & Storage Quota',
    description: 'Modern cloud storage explorer with drag-and-drop uploads, breadcrumb directory navigation, real-time quota storage indicator, and granular file sharing permission dialogues (View / Download).',
    tags: ['React 18', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'AES-256'],
    imagePath: './assets/screenshots/securesync/01-cloud-workspace.png',
    svgType: 'securesync-vault'
  },
  {
    id: 'securesync-02',
    systemId: 'securesync',
    systemTitle: 'SecureSync Cloud Storage',
    badge: 'Cloud Storage & Collaboration',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/30',
    type: 'web',
    windowTitle: 'https://app.securesync.cloud/preview/doc-viewer — In-App Native Multi-Format Document Renderer',
    title: 'In-App Multi-Format Document Viewer (@cyntler)',
    description: 'Integrated in-browser document inspection engine rendering PDF, Word (DOCX), Excel (XLSX), and PowerPoint presentations directly inside SecureSync with zoom, search, pagination, and full-screen controls.',
    tags: ['@cyntler Doc Viewer', 'PDF/DOCX/XLSX', 'In-App Preview', 'No Download'],
    imagePath: './assets/screenshots/securesync/02-in-app-viewer.png',
    svgType: 'securesync-viewer'
  },
  {
    id: 'securesync-03',
    systemId: 'securesync',
    systemTitle: 'SecureSync Cloud Storage',
    badge: 'Cloud Storage & Collaboration',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/30',
    type: 'web',
    windowTitle: 'https://app.securesync.cloud/settings/security — Two-Factor Authentication (2FA) & Active Sessions',
    title: 'Two-Factor Authentication (2FA) & Session Rotation',
    description: 'Zero-trust account security console supporting Time-based One-Time Passwords (TOTP), backup recovery codes, and RTK Query silent token rotation on 401 Unauthorized responses to guarantee seamless security.',
    tags: ['Two-Factor Auth', 'TOTP Security', 'RTK Query Reauth', 'Token Rotation'],
    imagePath: './assets/screenshots/securesync/03-two-factor-auth.png',
    svgType: 'securesync-2fa'
  }
];

// ==================== HIGH-FIDELITY VECTOR MOCKUPS ====================
// These render automatically whenever the user hasn't dropped the physical PNG file yet!
function getSvgMockup(type, title) {
  const bg = '#060a14';
  const cardBg = '#0d1424';
  const border = '#1a243b';

  switch (type) {
    case 'cashdesk-dash':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <!-- WinForms Top Menu -->
          <rect width="800" height="28" fill="#0f172a"/>
          <text x="14" y="18" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">File  |  Edit  |  Debtors  |  Vouchers  |  POS Terminal  |  Reports  |  License (WMI Active)</text>
          
          <!-- Stat Cards -->
          <rect x="20" y="44" width="240" height="80" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="34" y="68" fill="#64748b" font-size="11" font-family="JetBrains Mono">TOTAL REVENUE (FIRST TERM)</text>
          <text x="34" y="102" fill="#38bdf8" font-size="24" font-weight="bold" font-family="JetBrains Mono">₦48,250,000</text>
          
          <rect x="280" y="44" width="240" height="80" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="294" y="68" fill="#64748b" font-size="11" font-family="JetBrains Mono">AUDITED DEBTORS RESOLVED</text>
          <text x="294" y="102" fill="#34d399" font-size="24" font-weight="bold" font-family="JetBrains Mono">450 Records</text>

          <rect x="540" y="44" width="240" height="80" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="554" y="68" fill="#64748b" font-size="11" font-family="JetBrains Mono">POS WALLET TRANSACTIONS</text>
          <text x="554" y="102" fill="#a78bfa" font-size="24" font-weight="bold" font-family="JetBrains Mono">1,280 Daily</text>

          <!-- Chart Area -->
          <rect x="20" y="140" width="460" height="315" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="36" y="170" fill="#f8fafc" font-size="13" font-weight="bold" font-family="Inter">LiveCharts: Term Fee Collection vs Projections</text>
          <!-- Grid lines -->
          <line x1="40" y1="200" x2="460" y2="200" stroke="#1e293b" stroke-dasharray="4"/>
          <line x1="40" y1="260" x2="460" y2="260" stroke="#1e293b" stroke-dasharray="4"/>
          <line x1="40" y1="320" x2="460" y2="320" stroke="#1e293b" stroke-dasharray="4"/>
          <line x1="40" y1="380" x2="460" y2="380" stroke="#1e293b"/>
          <!-- Trend Polyline -->
          <polyline fill="none" stroke="#38bdf8" stroke-width="3" points="50,360 120,310 190,330 260,250 330,220 400,180 450,195"/>
          <polyline fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="5" points="50,370 120,340 190,300 260,280 330,240 400,210 450,205"/>

          <!-- Data Grid Table -->
          <rect x="500" y="140" width="280" height="315" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="516" y="170" fill="#f8fafc" font-size="13" font-weight="bold" font-family="Inter">Recent Teller Reconciliations</text>
          <rect x="516" y="190" width="248" height="24" fill="#1e293b" rx="4"/>
          <text x="526" y="206" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">TELLER #   |  BANK  |  AMOUNT</text>
          <text x="526" y="235" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">#TL-9021   | Access | ₦185,000</text>
          <text x="526" y="260" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">#TL-9022   | Zenith | ₦240,000</text>
          <text x="526" y="285" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">#TL-9023   | GTBank | ₦95,000</text>
          <text x="526" y="310" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">#TL-9024   | UBA    | ₦320,000</text>
          <rect x="516" y="395" width="248" height="40" rx="6" fill="#0284c7"/>
          <text x="575" y="420" fill="#ffffff" font-size="11" font-weight="bold" font-family="Inter">Export Daily Audit (RPT)</text>
        </svg>
      `;

    case 'cashdesk-worker':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="28" fill="#0f172a"/>
          <text x="14" y="18" fill="#38bdf8" font-size="11" font-family="JetBrains Mono">CashDesk GroundWorker Multi-Threading Console — ThreadPool Status: 3 Active</text>
          
          <rect x="25" y="50" width="750" height="110" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="45" y="80" fill="#f8fafc" font-size="14" font-weight="bold" font-family="Inter">Task.Run() GroundWorker Asynchronous Execution</text>
          <text x="45" y="102" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">Executing: sp_clear_debtors_and_regularpayments -> Concurrent Term Calculations</text>
          
          <!-- 3 Thread Bars -->
          <rect x="45" y="120" width="210" height="22" rx="4" fill="#1e293b"/>
          <rect x="45" y="120" width="210" height="22" rx="4" fill="#0284c7"/>
          <text x="55" y="135" fill="#ffffff" font-size="10" font-family="JetBrains Mono">Task 1: FirstTermDebt (100%)</text>

          <rect x="290" y="120" width="210" height="22" rx="4" fill="#1e293b"/>
          <rect x="290" y="120" width="210" height="22" rx="4" fill="#059669"/>
          <text x="300" y="135" fill="#ffffff" font-size="10" font-family="JetBrains Mono">Task 2: SecondTermDebt (100%)</text>

          <rect x="535" y="120" width="210" height="22" rx="4" fill="#1e293b"/>
          <rect x="535" y="120" width="210" height="22" rx="4" fill="#06b6d4"/>
          <text x="545" y="135" fill="#ffffff" font-size="10" font-family="JetBrains Mono">Task 3: ThirdTermDebt (100%)</text>

          <!-- Console Terminal Window -->
          <rect x="25" y="180" width="750" height="275" rx="8" fill="#020617" stroke="#334155"/>
          <text x="40" y="210" fill="#38bdf8" font-size="11" font-family="JetBrains Mono">> [INIT]: Connecting to Microsoft SQL Server 2019...</text>
          <text x="40" y="235" fill="#34d399" font-size="11" font-family="JetBrains Mono">> [DB]: SqlHelper.ExecuteNonQuery("sp_clear_debtors_and_regularpayments") -> SUCCESS (0.04s)</text>
          <text x="40" y="260" fill="#e2e8f0" font-size="11" font-family="JetBrains Mono">> [WORKER]: Spawning 3 concurrent asynchronous Tasks via ThreadPool.</text>
          <text x="40" y="285" fill="#e2e8f0" font-size="11" font-family="JetBrains Mono">> [FIRST_TERM]: Auditing 148 student profiles. Unpaid fee balance total: ₦12,420,000</text>
          <text x="40" y="310" fill="#e2e8f0" font-size="11" font-family="JetBrains Mono">> [SECOND_TERM]: Auditing 92 student profiles. Unpaid fee balance total: ₦8,110,000</text>
          <text x="40" y="335" fill="#e2e8f0" font-size="11" font-family="JetBrains Mono">> [THIRD_TERM]: Auditing 210 student profiles. Unpaid fee balance total: ₦16,700,000</text>
          <text x="40" y="360" fill="#f59e0b" font-size="11" font-family="JetBrains Mono">> [DEDUP]: Invoking DeleteDoubleDebtor() -> 18 redundant zero-payment records purged.</text>
          <text x="40" y="385" fill="#34d399" font-size="11" font-family="JetBrains Mono font-bold">> [SUCCESS]: Total 450 accounts reconciled in 1.2s. Main UI loop stayed responsive at 60 FPS.</text>
          <text x="40" y="420" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">WMI Hash Check: SHA256(CPU_BFEBFBFF000906EA | BIOS_L1N982103) -> LICENSED</text>
        </svg>
      `;

    case 'chucks-wards':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="28" fill="#1e1b4b"/>
          <text x="14" y="18" fill="#f43f5e" font-size="11" font-family="JetBrains Mono">ChucksMedicare Hospital Management (HIMS) — In-Patient Clinical Board</text>
          
          <!-- Ward Selector Tabs -->
          <rect x="25" y="45" width="130" height="30" rx="6" fill="#f43f5e"/>
          <text x="35" y="65" fill="#ffffff" font-size="11" font-weight="bold" font-family="Inter">Female Surgical (6)</text>
          <rect x="165" y="45" width="120" height="30" rx="6" fill="#1e293b"/>
          <text x="175" y="65" fill="#94a3b8" font-size="11" font-family="Inter">Male Medical (8)</text>
          <rect x="295" y="45" width="110" height="30" rx="6" fill="#1e293b"/>
          <text x="305" y="65" fill="#94a3b8" font-size="11" font-family="Inter">Maternity (12)</text>
          <rect x="415" y="45" width="100" height="30" rx="6" fill="#1e293b"/>
          <text x="425" y="65" fill="#94a3b8" font-size="11" font-family="Inter">Pediatrics (10)</text>

          <!-- 6 Bed Cards in Ward -->
          <!-- Bed 1 Occupied -->
          <rect x="25" y="90" width="230" height="160" rx="8" fill="#0d1424" stroke="#e11d48" stroke-width="2"/>
          <rect x="35" y="100" width="60" height="20" rx="4" fill="#881337"/>
          <text x="42" y="114" fill="#fda4af" font-size="10" font-weight="bold" font-family="JetBrains Mono">BED #01</text>
          <text x="105" y="115" fill="#f43f5e" font-size="11" font-weight="bold">OCCUPIED</text>
          <text x="35" y="145" fill="#f8fafc" font-size="13" font-weight="bold">Patient: Stella Okon</text>
          <text x="35" y="165" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">ID: PT-8401 | Age: 34</text>
          <text x="35" y="185" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">Doctor: Dr. E. Charles</text>
          <text x="35" y="205" fill="#34d399" font-size="10" font-family="JetBrains Mono">Admitted: 3 Days ago</text>
          <rect x="35" y="218" width="210" height="22" rx="4" fill="#1e293b"/>
          <text x="80" y="233" fill="#38bdf8" font-size="10" font-weight="bold">View Clinical Chart</text>

          <!-- Bed 2 Available -->
          <rect x="285" y="90" width="230" height="160" rx="8" fill="#0d1424" stroke="#059669" stroke-width="2"/>
          <rect x="295" y="100" width="60" height="20" rx="4" fill="#064e3b"/>
          <text x="302" y="114" fill="#6ee7b7" font-size="10" font-weight="bold" font-family="JetBrains Mono">BED #02</text>
          <text x="365" y="115" fill="#34d399" font-size="11" font-weight="bold">AVAILABLE</text>
          <text x="295" y="160" fill="#64748b" font-size="12">Sanitized & Ready for Admission</text>
          <rect x="295" y="218" width="210" height="22" rx="4" fill="#059669"/>
          <text x="360" y="233" fill="#ffffff" font-size="10" font-weight="bold">+ Admit Patient</text>

          <!-- Bed 3 Occupied -->
          <rect x="545" y="90" width="230" height="160" rx="8" fill="#0d1424" stroke="#e11d48" stroke-width="2"/>
          <rect x="555" y="100" width="60" height="20" rx="4" fill="#881337"/>
          <text x="562" y="114" fill="#fda4af" font-size="10" font-weight="bold" font-family="JetBrains Mono">BED #03</text>
          <text x="625" y="115" fill="#f43f5e" font-size="11" font-weight="bold">OCCUPIED</text>
          <text x="555" y="145" fill="#f8fafc" font-size="13" font-weight="bold">Patient: Blessing John</text>
          <text x="555" y="165" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">ID: PT-8419 | Age: 28</text>
          <text x="555" y="185" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">Doctor: Dr. A. Bello</text>
          <text x="555" y="205" fill="#f59e0b" font-size="10" font-family="JetBrains Mono">Pending Lab Results</text>
          <rect x="555" y="218" width="210" height="22" rx="4" fill="#1e293b"/>
          <text x="600" y="233" fill="#38bdf8" font-size="10" font-weight="bold">View Clinical Chart</text>

          <!-- Bottom Action Console -->
          <rect x="25" y="270" width="750" height="190" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="45" y="300" fill="#f8fafc" font-size="13" font-weight="bold">Clinical Audit & Transaction History</text>
          <text x="45" y="330" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">08:45 AM — Bed #04 cleared and discharged by Accountant in BillPaymentFrm.</text>
          <text x="45" y="355" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">09:12 AM — Pathology Lab orders received for Patient #PT-8401 (Full Blood Count, Electrolytes).</text>
          <text x="45" y="380" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">10:30 AM — 3-Tier Pharmacy: Ciprofloxacin 500mg transferred Store -> Dispensary -> Bed #01.</text>
          <text x="45" y="405" fill="#34d399" font-size="11" font-family="JetBrains Mono">11:00 AM — Active Drug Watchdog: 0 expired medications in active hospital inventory.</text>
        </svg>
      `;

    case 'grubbex-radar':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <!-- Web Browser Mockup Bar -->
          <rect width="800" height="34" fill="#0f172a"/>
          <circle cx="20" cy="17" r="5" fill="#ef4444"/>
          <circle cx="36" cy="17" r="5" fill="#f59e0b"/>
          <circle cx="52" cy="17" r="5" fill="#10b981"/>
          <rect x="75" y="6" width="450" height="22" rx="4" fill="#1e293b"/>
          <text x="88" y="21" fill="#34d399" font-size="10" font-family="JetBrains Mono">🔒 https://admin.grubbex.com/dispatch/radar</text>
          
          <!-- Radar Visual Grid -->
          <rect x="25" y="50" width="500" height="400" rx="8" fill="#020617" stroke="#10b981" stroke-width="1.5"/>
          <!-- Concentric radar circles -->
          <circle cx="275" cy="250" r="160" fill="none" stroke="#064e3b" stroke-width="1.5"/>
          <circle cx="275" cy="250" r="110" fill="none" stroke="#064e3b" stroke-width="1.5"/>
          <circle cx="275" cy="250" r="60" fill="none" stroke="#064e3b" stroke-width="1.5"/>
          <circle cx="275" cy="250" r="6" fill="#10b981"/>
          
          <!-- Radar sweep line -->
          <line x1="275" y1="250" x2="410" y2="150" stroke="#34d399" stroke-width="2"/>
          
          <!-- Couriers on Map -->
          <circle cx="220" cy="190" r="8" fill="#38bdf8"/>
          <text x="235" y="195" fill="#38bdf8" font-size="10" font-family="JetBrains Mono">Rider #419 (1.2km)</text>

          <circle cx="350" cy="290" r="8" fill="#38bdf8"/>
          <text x="365" y="295" fill="#38bdf8" font-size="10" font-family="JetBrains Mono">Rider #208 (2.4km)</text>

          <circle cx="250" cy="330" r="8" fill="#f59e0b"/>
          <text x="265" y="335" fill="#f59e0b" font-size="10" font-family="JetBrains Mono">Store: Genesis Buka</text>

          <!-- Right Dispatch Queue -->
          <rect x="540" y="50" width="235" height="400" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="555" y="80" fill="#f8fafc" font-size="13" font-weight="bold">Live Socket.io Queue</text>
          <text x="555" y="100" fill="#64748b" font-size="10" font-family="JetBrains Mono">Latency: 142ms | Active: 38</text>
          
          <rect x="550" y="120" width="215" height="85" rx="6" fill="#1e293b"/>
          <text x="560" y="140" fill="#34d399" font-size="10" font-weight="bold">ORDER #GBX-9014</text>
          <text x="560" y="158" fill="#f8fafc" font-size="11">Jollof Fiesta Pack (x2)</text>
          <text x="560" y="176" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">₦9,400 held in Escrow</text>
          <text x="560" y="194" fill="#38bdf8" font-size="9" font-family="JetBrains Mono">Dispatched to Rider #419</text>

          <rect x="550" y="220" width="215" height="85" rx="6" fill="#1e293b"/>
          <text x="560" y="240" fill="#f59e0b" font-size="10" font-weight="bold">ORDER #GBX-9015</text>
          <text x="560" y="258" fill="#f8fafc" font-size="11">Grilled Fish Platter</text>
          <text x="560" y="276" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">₦14,200 held in Escrow</text>
          <text x="560" y="294" fill="#a78bfa" font-size="9" font-family="JetBrains Mono">Waiting Merchant Pack</text>
        </svg>
      `;

    case 'byhelb-memos':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="34" fill="#0f172a"/>
          <circle cx="20" cy="17" r="5" fill="#ef4444"/><circle cx="36" cy="17" r="5" fill="#f59e0b"/><circle cx="52" cy="17" r="5" fill="#10b981"/>
          <rect x="75" y="6" width="450" height="22" rx="4" fill="#1e293b"/>
          <text x="88" y="21" fill="#38bdf8" font-size="10" font-family="JetBrains Mono">🔒 https://lms.byhelb.gov.ng/admin/memos</text>
          
          <rect x="25" y="55" width="750" height="65" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="45" y="82" fill="#f8fafc" font-size="15" font-weight="bold">Internal Loan Memo #MEMO-2024-081 (Batch of 50 Students)</text>
          <text x="45" y="104" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">State: SIGNED BY EXECUTIVE SECRETARY -> PENDING ACCOUNTANT DISBURSEMENT</text>

          <!-- 5 Sequential Approval Nodes -->
          <line x1="100" y1="180" x2="700" y2="180" stroke="#334155" stroke-width="3"/>
          
          <circle cx="100" cy="180" r="22" fill="#059669"/><text x="93" y="185" fill="#fff" font-size="12" font-weight="bold">✓</text>
          <text x="65" y="220" fill="#34d399" font-size="10" font-family="JetBrains Mono font-bold">1. LO Vetting</text>

          <circle cx="250" cy="180" r="22" fill="#059669"/><text x="243" y="185" fill="#fff" font-size="12" font-weight="bold">✓</text>
          <text x="215" y="220" fill="#34d399" font-size="10" font-family="JetBrains Mono font-bold">2. LPH Batch</text>

          <circle cx="400" cy="180" r="22" fill="#059669"/><text x="393" y="185" fill="#fff" font-size="12" font-weight="bold">✓</text>
          <text x="365" y="220" fill="#34d399" font-size="10" font-family="JetBrains Mono font-bold">3. Auditor (LA)</text>

          <circle cx="550" cy="180" r="22" fill="#059669"/><text x="543" y="185" fill="#fff" font-size="12" font-weight="bold">✓</text>
          <text x="515" y="220" fill="#34d399" font-size="10" font-family="JetBrains Mono font-bold">4. ES Sign-off</text>

          <circle cx="700" cy="180" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/><text x="693" y="185" fill="#fff" font-size="12" font-weight="bold">5</text>
          <text x="660" y="220" fill="#38bdf8" font-size="10" font-family="JetBrains Mono font-bold">5. ACC Payout</text>

          <!-- Table of Students -->
          <rect x="25" y="250" width="750" height="205" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="40" y="278" fill="#f8fafc" font-size="12" font-weight="bold">Batch Student Allocation Schedule (Total: ₦42,500,000)</text>
          <rect x="40" y="295" width="720" height="24" fill="#1e293b" rx="4"/>
          <text x="50" y="311" fill="#94a3b8" font-size="10" font-family="JetBrains Mono">STUDENT ID  | NAME               | INSTITUTION               | AMOUNT     | NIP STATUS</text>
          <text x="50" y="340" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">BY-24-001   | Tariere Ebi        | Niger Delta University    | ₦850,000   | BVN Resolved (Zenith)</text>
          <text x="50" y="365" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">BY-24-002   | Ebipador Michael   | Federal University Otuoke | ₦750,000   | BVN Resolved (Access)</text>
          <text x="50" y="390" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">BY-24-003   | Preye Goodluck     | Bayelsa Medical University| ₦950,000   | BVN Resolved (FirstBank)</text>
          <text x="50" y="415" fill="#e2e8f0" font-size="10" font-family="JetBrains Mono">BY-24-004   | Ayebaemi Godspower | Federal Poly Ekowe        | ₦600,000   | BVN Resolved (GTBank)</text>
        </svg>
      `;

    case 'byshelb-wizard':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="34" fill="#0f172a"/>
          <circle cx="20" cy="17" r="5" fill="#ef4444"/><circle cx="36" cy="17" r="5" fill="#f59e0b"/><circle cx="52" cy="17" r="5" fill="#10b981"/>
          <rect x="75" y="6" width="450" height="22" rx="4" fill="#1e293b"/>
          <text x="88" y="21" fill="#38bdf8" font-size="10" font-family="JetBrains Mono">🔒 https://portal.byshelb.gov.ng/apply/undergraduate/step-4</text>
          
          <!-- Wizard Step Indicator -->
          <rect x="25" y="55" width="750" height="70" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="45" y="80" fill="#38bdf8" font-size="11" font-family="JetBrains Mono font-bold">STAGE 4 OF 7: DOCUMENT CREDENTIAL UPLOADS</text>
          
          <!-- Progress bar -->
          <rect x="45" y="95" width="710" height="12" rx="6" fill="#1e293b"/>
          <rect x="45" y="95" width="405" height="12" rx="6" fill="#0284c7"/>
          
          <!-- Form Layout -->
          <rect x="25" y="145" width="750" height="310" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="45" y="175" fill="#f8fafc" font-size="14" font-weight="bold">Required Regulatory Documents</text>
          <text x="45" y="195" fill="#94a3b8" font-size="11">Files must be certified PDF or high-resolution PNG (Max 5MB each)</text>
          
          <!-- Upload boxes -->
          <rect x="45" y="215" width="335" height="90" rx="6" fill="#020617" stroke="#0284c7" stroke-dasharray="4"/>
          <text x="95" y="255" fill="#38bdf8" font-size="12" font-weight="bold">Admission Letter (JAMB / School)</text>
          <text x="95" y="275" fill="#34d399" font-size="10" font-family="JetBrains Mono">✓ admission_NDU_2024.pdf (Uploaded)</text>

          <rect x="410" y="215" width="335" height="90" rx="6" fill="#020617" stroke="#0284c7" stroke-dasharray="4"/>
          <text x="460" y="255" fill="#38bdf8" font-size="12" font-weight="bold">Local Government (LGA) Identification</text>
          <text x="460" y="275" fill="#34d399" font-size="10" font-family="JetBrains Mono">✓ southern_ijaw_lga_cert.pdf (Uploaded)</text>

          <rect x="45" y="325" width="335" height="90" rx="6" fill="#020617" stroke="#334155" stroke-dasharray="4"/>
          <text x="95" y="365" fill="#f8fafc" font-size="12" font-weight="bold">Surety Declaration Form 1</text>
          <text x="95" y="385" fill="#94a3b8" font-size="10">Drag and drop file or click to browse</text>

          <rect x="410" y="325" width="335" height="90" rx="6" fill="#020617" stroke="#334155" stroke-dasharray="4"/>
          <text x="460" y="365" fill="#f8fafc" font-size="12" font-weight="bold">Surety Declaration Form 2</text>
          <text x="460" y="385" fill="#94a3b8" font-size="10">Drag and drop file or click to browse</text>

          <!-- Navigation buttons -->
          <rect x="45" y="425" width="120" height="20" rx="4" fill="#1e293b"/>
          <text x="75" y="438" fill="#94a3b8" font-size="10">← Previous Step</text>
          <rect x="625" y="425" width="120" height="20" rx="4" fill="#0284c7"/>
          <text x="650" y="438" fill="#ffffff" font-size="10" font-weight="bold">Next Step →</text>
        </svg>
      `;

    case 'securesync-vault':
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="34" fill="#0f172a"/>
          <circle cx="20" cy="17" r="5" fill="#ef4444"/><circle cx="36" cy="17" r="5" fill="#f59e0b"/><circle cx="52" cy="17" r="5" fill="#10b981"/>
          <rect x="75" y="6" width="450" height="22" rx="4" fill="#1e293b"/>
          <text x="88" y="21" fill="#c084fc" font-size="10" font-family="JetBrains Mono">🔒 https://app.securesync.cloud/drive/my-vault</text>

          <!-- Left Sidebar -->
          <rect x="20" y="50" width="180" height="400" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="35" y="80" fill="#f8fafc" font-size="14" font-weight="bold">SecureSync</text>
          <rect x="35" y="100" width="150" height="32" rx="6" fill="#9333ea"/>
          <text x="65" y="121" fill="#ffffff" font-size="11" font-weight="bold">+ Upload Files</text>
          
          <text x="35" y="165" fill="#c084fc" font-size="11" font-weight="bold">📁 My Files</text>
          <text x="35" y="195" fill="#94a3b8" font-size="11">👥 Shared with Me</text>
          <text x="35" y="225" fill="#94a3b8" font-size="11">⭐ Starred Vault</text>
          <text x="35" y="255" fill="#94a3b8" font-size="11">🗑️ Recycle Bin</text>

          <!-- Storage Meter -->
          <rect x="35" y="380" width="150" height="8" rx="4" fill="#1e293b"/>
          <rect x="35" y="380" width="95" height="8" rx="4" fill="#a855f7"/>
          <text x="35" y="410" fill="#94a3b8" font-size="9" font-family="JetBrains Mono">6.4 GB of 10 GB Used</text>

          <!-- Main File Grid -->
          <rect x="220" y="50" width="555" height="400" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="240" y="82" fill="#f8fafc" font-size="14" font-weight="bold">Engineering Specs & Architecture Blueprints</text>

          <!-- File Cards -->
          <rect x="240" y="110" width="160" height="130" rx="8" fill="#020617" stroke="#1e293b"/>
          <rect x="255" y="125" width="30" height="30" rx="4" fill="#dc2626"/>
          <text x="262" y="145" fill="#ffffff" font-size="10" font-weight="bold">PDF</text>
          <text x="255" y="180" fill="#f8fafc" font-size="11" font-weight="bold">CashDesk_v4.5.pdf</text>
          <text x="255" y="200" fill="#64748b" font-size="9" font-family="JetBrains Mono">3.2 MB • Encrypted</text>
          <text x="255" y="220" fill="#34d399" font-size="9 font-mono">Shared: View Only</text>

          <rect x="420" y="110" width="160" height="130" rx="8" fill="#020617" stroke="#1e293b"/>
          <rect x="435" y="125" width="30" height="30" rx="4" fill="#0284c7"/>
          <text x="440" y="145" fill="#ffffff" font-size="10" font-weight="bold">DOCX</text>
          <text x="435" y="180" fill="#f8fafc" font-size="11" font-weight="bold">HIMS_Wards_Spec.docx</text>
          <text x="435" y="200" fill="#64748b" font-size="9" font-family="JetBrains Mono">1.8 MB • Encrypted</text>
          <text x="435" y="220" fill="#38bdf8" font-size="9 font-mono">In-App Preview Ready</text>

          <rect x="600" y="110" width="160" height="130" rx="8" fill="#020617" stroke="#1e293b"/>
          <rect x="615" y="125" width="30" height="30" rx="4" fill="#16a34a"/>
          <text x="620" y="145" fill="#ffffff" font-size="10" font-weight="bold">XLSX</text>
          <text x="615" y="180" fill="#f8fafc" font-size="11" font-weight="bold">Ledger_Audit_2024.xlsx</text>
          <text x="615" y="200" fill="#64748b" font-size="9" font-family="JetBrains Mono">4.5 MB • Encrypted</text>
          <text x="615" y="220" fill="#38bdf8" font-size="9 font-mono">In-App Preview Ready</text>
        </svg>
      `;

    default:
      return `
        <svg viewBox="0 0 800 480" class="w-full h-full bg-[#060a14] select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="480" fill="#060a14"/>
          <rect x="40" y="40" width="720" height="400" rx="8" fill="#0d1424" stroke="#1e293b"/>
          <text x="400" y="220" fill="#38bdf8" font-size="16" font-family="Inter" text-anchor="middle" font-weight="bold">${title}</text>
          <text x="400" y="250" fill="#64748b" font-size="11" font-family="JetBrains Mono" text-anchor="middle">Place custom screenshot PNG at mapped path</text>
        </svg>
      `;
  }
}

// ==================== DOM INJECTION & GALLERY LOGIC ====================
let currentFilter = 'all';
let currentLightboxIndex = 0;
let currentVisibleItems = [];

document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
  initFilterTabs();
  initLightbox();
  initTheme();
  lucide.createIcons();
});

function renderGallery(filter = 'all') {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  currentFilter = filter;
  currentVisibleItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.systemId === filter);

  if (currentVisibleItems.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-16 text-center text-slate-500 font-mono text-sm border border-slate-800 rounded-3xl bg-slate-900/50">
        No screenshots found for filter '${filter}'.
      </div>
    `;
    return;
  }

  container.innerHTML = currentVisibleItems.map((item, idx) => {
    // Window or browser top bar
    const windowControls = item.type === 'desktop' ? `
      <div class="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span class="text-[11px] font-mono text-slate-400 ml-2 truncate max-w-xs sm:max-w-md">${item.windowTitle}</span>
        </div>
        <div class="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
          <span>—</span>
          <span>□</span>
          <span>✕</span>
        </div>
      </div>
    ` : `
      <div class="px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center gap-2">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <div class="flex-1 max-w-sm px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 truncate flex items-center gap-1">
          <i data-lucide="lock" class="w-2.5 h-2.5 text-emerald-400 shrink-0"></i>
          <span class="truncate">${item.windowTitle}</span>
        </div>
      </div>
    `;

    return `
      <div class="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 shadow-xl overflow-hidden flex flex-col group">
        
        <!-- Window / Browser Chrome -->
        ${windowControls}

        <!-- Screenshot Preview Container (Fallback to SVG Mockup) -->
        <div class="relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer" onclick="openLightbox('${item.id}')">
          
          <!-- Image Tag with Graceful SVG Fallback -->
          <img src="${item.imagePath}" 
               alt="${item.title}" 
               class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
          
          <!-- Vector Mockup Fallback -->
          <div class="w-full h-full hidden pointer-events-none">
            ${getSvgMockup(item.svgType, item.title)}
          </div>

          <!-- Hover Lightbox Action Overlay -->
          <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
            <div class="w-10 h-10 rounded-full bg-brand-500/90 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <i data-lucide="maximize-2" class="w-5 h-5"></i>
            </div>
            <span class="text-xs font-semibold tracking-wide">Click to Enlarge Lightbox</span>
            <span class="text-[10px] font-mono text-slate-300 uppercase px-2 py-0.5 rounded bg-slate-800/80">${item.type === 'desktop' ? 'Windows Desktop View' : 'Web Application View'}</span>
          </div>

        </div>

        <!-- Card Meta Info -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor} uppercase tracking-wider">${item.badge}</span>
              <span class="text-[10px] font-mono text-slate-500 uppercase">${item.systemId}</span>
            </div>

            <h3 class="text-base font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">${item.title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed mt-1.5">${item.description}</p>
          </div>

          <div class="pt-3 border-t border-slate-800/80 space-y-2.5">
            <!-- Tech chips -->
            <div class="flex flex-wrap gap-1.5">
              ${item.tags.map(t => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300">${t}</span>`).join('')}
            </div>

            <!-- Path helper -->
            <div class="flex items-center justify-between pt-1">
              <span class="text-[10px] font-mono text-slate-500 truncate max-w-[200px]" title="${item.imagePath}">${item.imagePath}</span>
              <button onclick="copyPath('${item.imagePath}')" class="text-[10px] font-mono text-brand-400 hover:text-brand-300 flex items-center gap-1" title="Copy Path">
                <i data-lucide="copy" class="w-3 h-3"></i> Copy Path
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function initFilterTabs() {
  const tabsContainer = document.getElementById('galleryFilterTabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.gal-tab');
    if (!btn) return;

    tabsContainer.querySelectorAll('.gal-tab').forEach(b => {
      b.classList.remove('active', 'bg-brand-500', 'text-slate-950');
      b.classList.add('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');
    });

    btn.classList.add('active', 'bg-brand-500', 'text-slate-950');
    btn.classList.remove('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');

    renderGallery(btn.dataset.gfilter);
  });
}

// ==================== LIGHTBOX DIALOG ====================
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('closeLightboxBtn');
  const prevBtn = document.getElementById('prevLightboxBtn');
  const nextBtn = document.getElementById('nextLightboxBtn');

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', prevLightbox);
  nextBtn?.addEventListener('click', nextLightbox);

  modal?.addEventListener('click', (e) => {
    if (e.target.id === 'lightboxModal') closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (modal?.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });
}

function openLightbox(itemId) {
  const idx = currentVisibleItems.findIndex(i => i.id === itemId);
  if (idx === -1) return;

  currentLightboxIndex = idx;
  renderLightboxContent();

  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

function prevLightbox() {
  if (currentVisibleItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentVisibleItems.length) % currentVisibleItems.length;
  renderLightboxContent();
}

function nextLightbox() {
  if (currentVisibleItems.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentVisibleItems.length;
  renderLightboxContent();
}

function renderLightboxContent() {
  const item = currentVisibleItems[currentLightboxIndex];
  if (!item) return;

  document.getElementById('lightboxTitle').textContent = item.title;
  document.getElementById('lightboxSystem').textContent = `${item.systemTitle} • ${item.badge}`;
  document.getElementById('lightboxDesc').textContent = item.description;
  document.getElementById('lightboxCounter').textContent = `${currentLightboxIndex + 1} / ${currentVisibleItems.length}`;
  document.getElementById('lightboxPathText').textContent = item.imagePath;

  const displayEl = document.getElementById('lightboxDisplay');
  if (displayEl) {
    displayEl.innerHTML = `
      <div class="relative w-full h-full max-h-[72vh] flex items-center justify-center">
        <img src="${item.imagePath}" 
             alt="${item.title}" 
             class="max-w-full max-h-[72vh] rounded-xl object-contain shadow-2xl"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div class="w-full max-w-4xl h-[60vh] hidden">
          ${getSvgMockup(item.svgType, item.title)}
        </div>
      </div>
    `;
  }

  lucide.createIcons();
}

function copyCurrentLightboxPath() {
  const item = currentVisibleItems[currentLightboxIndex];
  if (item) copyPath(item.imagePath);
}

function copyPath(path) {
  navigator.clipboard.writeText(path).then(() => {
    showToast(`Copied asset path: ${path}`);
  }).catch(() => {
    showToast('Failed to copy path');
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
  }, 2500);
}

// Theme switch
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
