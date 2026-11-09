// Linus Linus Portfolio — Core Interactive Application Logic
// Verified Data Models from CASH DESK, CHUCKSMEDICARE, MM TRADERS, GRUBBEX, BYHELB LMS, and SECURESYNC

// ==================== 1. VERIFIED SKILLS INVENTORY ====================
const skillsData = [
  // Desktop & Systems (.NET)
  { name: 'C# (5.0 / 6.0)', category: 'desktop', level: 'Expert', icon: 'file-code-2', desc: 'Object-oriented systems programming, async Task patterns' },
  { name: '.NET Framework 4.5/4.5.2', category: 'desktop', level: 'Architect', icon: 'layers', desc: 'Windows Forms, ADO.NET, Service & Factory layers' },
  { name: 'ADO.NET & SqlHelper', category: 'desktop', level: 'Advanced', icon: 'database', desc: 'Direct parameterization, SqlDataAdapter, ACID transactions' },
  { name: 'Multi-Threading (Async)', category: 'desktop', level: 'Architect', icon: 'cpu', desc: 'GroundWorker non-blocking reconciliation, Task.Run()' },
  { name: 'WMI Hardware Security', category: 'desktop', level: 'Advanced', icon: 'shield-alert', desc: 'Win32_Processor & BIOS hashing to SHA-256 for machine licenses' },
  { name: 'SAP Crystal Reports 13', category: 'desktop', level: 'Advanced', icon: 'file-text', desc: '15+ enterprise audit reports, thermal POS slip generation' },
  { name: 'Zen Barcode Engine', category: 'desktop', level: 'Advanced', icon: 'scan', desc: 'Code128 1D & QR Code 2D generation & parsing' },
  { name: 'ExcelDataReader', category: 'desktop', level: 'Advanced', icon: 'table', desc: 'High-throughput binary .xlsx/.xls parsing & roster cleaning' },
  { name: 'Healthcare HIMS & Wards', category: 'desktop', level: 'Architect', icon: 'activity', desc: 'In-patient admissions, room/bed allocations & patient charting' },
  { name: '3-Tier Pharmacy Hierarchy', category: 'desktop', level: 'Architect', icon: 'package', desc: 'Store to dispensary to pharmacy shelf inventory movement' },

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
  { name: 'PythonDrive (PyODBC)', category: 'frontend', level: 'Advanced', icon: 'cloud-rain', desc: 'Python automation syncing SQL Server backups to Google Drive' },
  { name: 'Tailwind CSS & PostCSS', category: 'frontend', level: 'Expert', icon: 'palette', desc: 'Utility-first modern design, dark/light theme switching' },
  { name: '@cyntler Doc Viewer', category: 'frontend', level: 'Advanced', icon: 'eye', desc: 'In-app native rendering for PDF, Word, Excel, PowerPoint' },
  { name: 'Google Maps Platform', category: 'frontend', level: 'Advanced', icon: 'map-pin', desc: 'Geocoding, Distance Matrix API, Haversine geo-fencing' },
  { name: 'AWS Secrets & S3', category: 'frontend', level: 'Advanced', icon: 'cloud', desc: 'Cloud credentials management, asset storage pipelines' },
  { name: 'Two-Factor Auth (2FA)', category: 'frontend', level: 'Advanced', icon: 'key', desc: 'Timed OTP challenges, challenge verification, fallback recovery' }
];

// ==================== 2. SEVEN FLAGSHIP SYSTEMS DATA ====================
const projectsData = [
  {
    id: 'cashdesk',
    category: 'desktop',
    title: 'Cash Desk (CashDeskApp)',
    badge: 'Desktop Bursary & FinTech',
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
    `,
    codeSnippet: `// CashDeskApp/GroundWorker.cs — Asynchronous Financial Debt Reconciliation
public async Task RunBackgroundAuditsAsync()
{
    await Task.Run(() =>
    {
        using (var conn = new SqlConnection(DbConfig.ConnectionString))
        {
            conn.Open();
            // Clear temporary debtor staging tables
            SqlHelper.ExecuteNonQuery(conn, CommandType.StoredProcedure, "sp_clear_debtors_and_regularpayments");

            // Execute concurrent multi-term debt evaluation without UI blocking
            var t1 = Task.Run(() => FirstTermDebtAsync(conn));
            var t2 = Task.Run(() => SecondTermDebtAsync(conn));
            var t3 = Task.Run(() => ThirdTermDebtAsync(conn));
            Task.WaitAll(t1, t2, t3);

            // Deduplicate zero balance accounts and finalize ledger
            GroundworkerFulPay(conn);
            DeleteDoubleDebtor(conn);
        }
    });
}

// Hardware-bound anti-tamper machine fingerprinting
public static string GenerateMachineLicenseHash()
{
    string cpuId = GetWmiProperty("Win32_Processor", "ProcessorId");
    string biosSerial = GetWmiProperty("Win32_BIOS", "SerialNumber");
    using (SHA256 sha = SHA256.Create())
    {
        byte[] hash = sha.ComputeHash(Encoding.UTF8.GetBytes(cpuId + "|" + biosSerial));
        return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
    }
}`
  },
  {
    id: 'chucksmedicare',
    category: 'desktop',
    title: 'ChucksMedicareApp',
    badge: 'Healthcare HIMS & Clinical Diagnostics',
    badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/30',
    subtitle: 'Hospital Information & Management System, 3-Tier Pharmacy & Diagnostic Labs',
    stack: ['C#', '.NET Framework 4.5', 'Microsoft SQL Server', 'ADO.NET (SqlHelper)', 'Crystal Reports 13.0', 'IsolatedStorage', 'Thermal POS'],
    metrics: [
      { label: 'Clinical Roles', val: '7 RBAC Tiers' },
      { label: 'Pharmacy Tiers', val: '3 Stages' },
      { label: 'Lab Disciplines', val: 'Pathology & Haematology' },
      { label: 'Expiry Alerts', val: 'Real-Time Toast' }
    ],
    overview: 'An enterprise-grade Hospital Information and Management System (HIMS) and Pharmacy POS desktop application. Coordinates healthcare clinical workflows, in-patient ward/bed allocations, 3-tier pharmaceutical inventory, point-of-sale billing, clinical laboratory investigations, hospital accounting, and hardware licensing.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="activity" class="w-4 h-4 text-rose-400"></i>
          In-Patient Admission & Ward Management Lifecycle:
        </h4>
        <p>Seamless orchestration between Receptionist, Doctor, Lab Scientist, and Accountant: Patient registration -> Bed/Room allocation -> Clinical diagnosis & prescription -> Pathology/Haematology lab testing -> Itemized settlement & bed release.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="package" class="w-4 h-4 text-amber-400"></i>
          Three-Tier Pharmaceutical Inventory Movement:
        </h4>
        <p>Ensures zero leakage across medical supply chains: <strong>Main Store</strong> (bulk warehouse receiving from suppliers) -> <strong>Dispensary</strong> (intermediate stock holding) -> <strong>Pharmacy Counter</strong> (dispensing point for out-patients with POS barcode scanning).</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="bell-ring" class="w-4 h-4 text-cyan-400"></i>
          Active Drug Expiry Timer Engine:
        </h4>
        <p>Dynamic background monitors actively evaluate drug shelf-life (&lt; 30 days) and inventory stockouts, popping automated toast notifications in <code>NotificationFrm.cs</code> to prevent dispensing expired medications.</p>
      </div>
    `,
    codeSnippet: `// ChucksMedicareApp/ClinicalManager.cs — Hospital Ward Admission & Bed Locking
public bool AdmitInPatient(string patientId, int wardId, int bedId, string doctorId)
{
    using (var scope = new TransactionScope())
    {
        // 1. Assign Bed and update occupancy flag in SQL
        SqlHelper.ExecuteNonQuery(conn, "sp_assign_patient_bed", patientId, wardId, bedId);
        
        // 2. Create InPatient Clinical Chart & assign primary physician
        SqlHelper.ExecuteNonQuery(conn, "sp_create_admission_file", patientId, doctorId, DateTime.Now);
        
        // 3. Log Audit Trail in DailyActivity table
        AuditLogger.Log(UserSession.UserId, $"Patient {patientId} admitted to Bed #{bedId}");
        
        scope.Complete();
        return true;
    }
}

// 3-Tier Pharmacy: Store to Dispensary to Pharmacy Counter Transfer
public void TransferMedicationStock(int drugId, int qty, StockTier fromTier, StockTier toTier)
{
    SqlParameter[] p = {
        new SqlParameter("@DrugId", drugId),
        new SqlParameter("@Quantity", qty),
        new SqlParameter("@FromTier", (int)fromTier),
        new SqlParameter("@ToTier", (int)toTier)
    };
    SqlHelper.ExecuteNonQuery(conn, CommandType.StoredProcedure, "sp_transfer_pharmacy_inventory", p);
}`
  },
  {
    id: 'mmtraders',
    category: 'desktop',
    title: 'MM Traders Inventory ERP',
    badge: 'Enterprise ERP & Cloud Backup',
    badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/30',
    subtitle: 'Wholesale Inventory ERP, Point of Sale, Cheque Registers & Google Drive Sync',
    stack: ['C#', '.NET Framework 4.5.2', 'Microsoft SQL Server', 'Python (PythonDrive)', 'PyODBC', 'Google Drive API', 'Crystal Reports 13.x'],
    metrics: [
      { label: 'Cloud Sync', val: 'Google Drive API' },
      { label: 'Payment Types', val: 'Cash, Credit, Cheques' },
      { label: 'Permission Matrix', val: 'Pipe-Separated Flags' },
      { label: 'CRM Logistics', val: 'City Cluster Routing' }
    ],
    overview: 'Enterprise Windows desktop ERP and inventory management solution. Coordinates point-of-sale billing, multi-brand wholesale inventory tracking, customer/supplier ledgers, cheque clearance registers, Crystal Reports analytics, and automated cloud backups to Google Drive.',
    architecture: `
      <div class="space-y-4 text-sm text-slate-300">
        <h4 class="font-bold text-white text-base flex items-center gap-2">
          <i data-lucide="cloud-rain" class="w-4 h-4 text-indigo-400"></i>
          Automated Cloud Sync via PythonDrive:
        </h4>
        <p>Engineered Python automation scripts (<code>PythonDrive</code>) integrating PyODBC and Google Drive API to execute scheduled, encrypted offsite backups of SQL Server databases directly to cloud storage without human intervention.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="credit-card" class="w-4 h-4 text-emerald-400"></i>
          Multi-Tender POS & Cheque Payment Register:
        </h4>
        <p>Supports cash counter billing, credit receivables, and commercial bank cheque tracking (<code>dbo.chequesale</code>) recording bank names, cheque serial numbers, due dates, and clearance states.</p>

        <h4 class="font-bold text-white text-base flex items-center gap-2 pt-2">
          <i data-lucide="map" class="w-4 h-4 text-amber-400"></i>
          Geographic Client Routing (CityGroups):
        </h4>
        <p>Clusters wholesale distributors and retail customers by territory clusters (<code>CityGroup</code> & <code>GroupedCities</code>) to optimize delivery dispatching and regional sales tracking.</p>
      </div>
    `,
    codeSnippet: `# PythonDrive/sync.py — Automated SQL Server Backup & Google Drive Cloud Sync
import pyodbc, os, datetime
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google.oauth2 import service_account

def execute_offsite_sync():
    conn_str = "DRIVER={SQL Server};SERVER=localhost\\\\SQLEXPRESS;DATABASE=MMTraders;Trusted_Connection=yes;"
    backup_file = f"C:\\\\Backups\\\\MMTraders_{datetime.date.today()}.bak"
    
    # 1. Execute SQL Server Native Backup via PyODBC
    conn = pyodbc.connect(conn_str, autocommit=True)
    cursor = conn.cursor()
    cursor.execute(f"BACKUP DATABASE MMTraders TO DISK = '{backup_file}' WITH INIT, COMPRESSION")
    cursor.close()
    
    # 2. Upload Encrypted Archive to Google Drive API v3
    creds = service_account.Credentials.from_service_account_file("credentials.json")
    service = build("drive", "v3", credentials=creds)
    media = MediaFileUpload(backup_file, mimetype="application/octet-stream", resumable=True)
    file_metadata = {
        "name": os.path.basename(backup_file),
        "parents": ["1o1C48lP8keqf3cCCuF4N0q7RDl4bNPz6"]
    }
    service.files().create(body=file_metadata, media_body=media, fields="id").execute()`
  },
  {
    id: 'grubbex',
    category: 'backend',
    title: 'Grubbex Backend API',
    badge: 'Real-Time Logistics Marketplace',
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
    `,
    codeSnippet: `// grubbex/src/middleware/dual.route.js — Strict Client Gateway Isolation
export const checkRouteUsed = (allowedClient) => {
  return (req, res, next) => {
    const isMobileRoute = req.baseUrl.startsWith('/api/v1/m');
    if (allowedClient === 'mobile' && !isMobileRoute) {
      return res.status(403).json({ success: false, message: 'Forbidden: Mobile client required.' });
    }
    if (allowedClient === 'web' && isMobileRoute) {
      return res.status(403).json({ success: false, message: 'Forbidden: Web portal client required.' });
    }
    next();
  };
};

// grubbex/src/services/escrow.service.js — Atomic QR Handover & Double-Entry Release
export const completeDeliveryHandover = async (orderId, riderId, qrToken, pin) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const order = await Order.findById(orderId).session(session);
    if (!verifyCryptographicPin(order.handoverToken, qrToken, pin)) {
      throw new Error('Invalid delivery handover verification credentials');
    }
    // Release platform escrow to Courier double-entry ledger
    const commission = order.deliveryFee * 0.15;
    const riderNetPayout = order.deliveryFee - commission;
    
    await Wallet.updateOne({ userId: riderId }, { $inc: { balance: riderNetPayout } }, { session });
    await WalletHistory.create([{
      userId: riderId, amount: riderNetPayout, type: 'CREDIT', description: \`Delivery fee for order #\${orderId}\`
    }], { session });

    order.status = 'DELIVERED';
    await order.save({ session });
    await session.commitTransaction();
    io.to(order.shopperId).emit('ORDER_COMPLETED', { orderId });
  } catch (err) {
    await session.abortTransaction();
    throw err;
  }
};`
  },
  {
    id: 'byhelb-be',
    category: 'backend',
    title: 'BYHELB LMS Backend v2',
    badge: 'Government FinTech & Governance',
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
    `,
    codeSnippet: `// byhelb-be/src/controllers/loanLock.controller.js — Active Concurrency View Lock
export const acquireLoanViewLock = async (req, res) => {
  const { loanId } = req.params;
  const officerId = req.user._id;

  // Check if loan application is currently leased by another reviewing officer
  const activeLock = await LoanProfileView.findOne({ loanId, expiresAt: { $gt: new Date() } });
  if (activeLock && activeLock.officerId.toString() !== officerId.toString()) {
    return res.status(423).json({
      success: false,
      message: \`Locked by Officer \${activeLock.officerName}. Concurrency modification denied.\`
    });
  }

  // Set 15-minute review lease
  await LoanProfileView.findOneAndUpdate(
    { loanId },
    { officerId, officerName: req.user.name, expiresAt: new Date(Date.now() + 15 * 60 * 1000) },
    { upsert: true, new: true }
  );

  res.json({ success: true, message: 'Reviewer concurrency lease acquired.' });
};`
  },
  {
    id: 'byhelb-fe',
    category: 'web',
    title: 'BYSHELB Student Loan Portal Frontend',
    badge: 'Citizen-Facing Web App & Wizard',
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
    `,
    codeSnippet: `// byshelb-fe/src/stores/UndergraduateLoanStepProvider.js — MobX 7-Stage State Machine
import { makeAutoObservable } from 'mobx';

class LoanStepStore {
  currentStep = 0;
  formData = {
    step0_institution: {},
    step1_loanAmounts: {},
    step2_suretyOne: {},
    step3_suretyTwo: {},
    step4_documents: [],
    step5_reviewConfirmed: false,
    step6_flutterwaveReference: null
  };

  constructor() {
    makeAutoObservable(this);
    this.hydrateFromStorage();
  }

  setStep(step) {
    if (this.canAdvanceTo(step)) {
      this.currentStep = step;
      this.persistState();
    }
  }

  canAdvanceTo(step) {
    // Enforce 3-Tier Gatekeeper before unlocking application wizard
    if (!this.onboardingChecklist.bvnVerified || !this.onboardingChecklist.lgaVerified) {
      return false;
    }
    return true;
  }
}`
  },
  {
    id: 'securesync',
    category: 'web',
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
    `,
    codeSnippet: `// securesync/src/api/baseQueryWithReauth.js — RTK Query Silent 401 Token Refresh
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api/v1',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) headers.set('Authorization', \`Bearer \${token}\`);
    return headers;
  }
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // Silent token rotation via refresh endpoint
    const refreshResult = await baseQuery('/auth/refresh-token', api, extraOptions);
    if (refreshResult.data) {
      api.dispatch(setCredentials(refreshResult.data));
      result = await baseQuery(args, api, extraOptions); // Re-execute original query
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};`
  }
];

// ==================== 3. DOM INJECTION & EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', () => {
  renderSkills('all');
  renderProjects('all');
  initProjectFilterTabs();
  initSimulator('groundworker');
  initTheme();
  initMobileMenu();
  initContactForm();
  initCommandPalette();
  initTerminal();
  initModalTabs();
  
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

// Render 7 Projects with Category Filtering
function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center text-slate-500 font-mono text-sm border border-slate-800 rounded-3xl">
        No systems found under filter '${filter}'.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p, idx) => `
    <div class="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10 hover:border-slate-700 transition-all shadow-xl">
      <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        
        <div class="space-y-3 max-w-3xl">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-xs font-mono px-3 py-1 rounded-full border ${p.badgeColor} uppercase tracking-wider">${p.badge}</span>
            <span class="text-xs font-mono text-slate-400">Flagship System 0${idx + 1}</span>
            <span class="text-[11px] font-mono text-slate-500 uppercase px-2 py-0.5 bg-slate-950 rounded border border-slate-800">${p.category}</span>
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
            <span>Architecture & Code</span>
          </button>
        </div>

      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function initProjectFilterTabs() {
  const tabsContainer = document.getElementById('projectFilterTabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.proj-tab');
    if (!btn) return;

    tabsContainer.querySelectorAll('.proj-tab').forEach(b => {
      b.classList.remove('active', 'bg-brand-500', 'text-slate-950');
      b.classList.add('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');
    });

    btn.classList.add('active', 'bg-brand-500', 'text-slate-950');
    btn.classList.remove('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');

    renderProjects(btn.dataset.pfilter);
  });
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
  } else if (simType === 'chucksmedicare-flow') {
    display.innerHTML = `
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h4 class="text-lg font-bold text-white flex items-center gap-2">
              <i data-lucide="activity" class="w-5 h-5 text-rose-400"></i>
              ChucksMedicareApp: In-Patient Clinical Workflow & 3-Tier Pharmacy
            </h4>
            <p class="text-xs text-slate-400 font-mono">Step through clinical admission, bed allocation, lab diagnostics and dispensary checkout</p>
          </div>
          <button id="advanceClinicBtn" class="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-400 text-slate-950 transition-all flex items-center gap-1.5">
            <i data-lucide="heart-pulse" class="w-4 h-4"></i> Step Clinical Event
          </button>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center" id="clinicSteps">
          <div class="c-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-cstep="0">
            <span class="text-xs font-mono text-slate-400 block">Step 1</span>
            <span class="text-sm font-bold text-white">Admit & Bed Assign</span>
          </div>
          <div class="c-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-cstep="1">
            <span class="text-xs font-mono text-slate-400 block">Step 2</span>
            <span class="text-sm font-bold text-white">Lab Investigation</span>
          </div>
          <div class="c-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-cstep="2">
            <span class="text-xs font-mono text-slate-400 block">Step 3</span>
            <span class="text-sm font-bold text-white">3-Tier Pharmacy Dispense</span>
          </div>
          <div class="c-step p-3 rounded-xl border border-slate-800 bg-slate-950" data-cstep="3">
            <span class="text-xs font-mono text-slate-400 block">Step 4</span>
            <span class="text-sm font-bold text-white">Itemized Settlement</span>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 h-28 overflow-y-auto space-y-1" id="clinicLog">
          <div class="text-slate-500">// Patient arrives at Reception. Click 'Step Clinical Event' to admit.</div>
        </div>
      </div>
    `;

    document.getElementById('advanceClinicBtn')?.addEventListener('click', advanceClinicSimulation);
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

// ChucksMedicare Simulation Logic
let currentClinicStep = 0;
function advanceClinicSimulation() {
  const log = document.getElementById('clinicLog');
  const steps = document.querySelectorAll('.c-step');
  if (!log || steps.length === 0) return;

  steps.forEach(s => s.classList.remove('border-rose-400', 'bg-rose-950/40', 'text-rose-300'));

  currentClinicStep = (currentClinicStep + 1) % steps.length;
  const activeStep = steps[currentClinicStep];
  activeStep.classList.add('border-rose-400', 'bg-rose-950/40', 'text-rose-300');

  const messages = [
    `<div class="text-slate-300">> [Admission]: Patient registered. Assigned to Female Surgical Ward -> Bed #04 (Occupied set to True in SQL).</div>`,
    `<div class="text-cyan-400">> [Laboratory]: Doctor orders Full Blood Count & Fasting Blood Sugar. Lab scientist enters pathology findings. Certified printout generated.</div>`,
    `<div class="text-amber-300">> [3-Tier Pharmacy]: Antibiotic stock moved from Main Store -> Dispensary -> Pharmacy Counter. Expiry checked (> 180 days valid).</div>`,
    `<div class="text-emerald-400 font-bold">> [Settlement]: Patient cleared by Accountant in BillPaymentFrm. Bed #04 status reset to 'Available'. Transaction written to DailyActivity.</div>`
  ];

  log.innerHTML += messages[currentClinicStep];
  log.scrollTop = log.scrollHeight;
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

// ==================== 5. MODAL DIALOGS WITH ARCH & CODE TABS ====================
let activeModalProject = null;
let currentModalView = 'arch'; // 'arch' or 'code'

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  activeModalProject = project;
  currentModalView = 'arch';

  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalTag').textContent = `${project.badge} • ${project.category.toUpperCase()}`;

  updateModalTabButtons();
  renderModalBody();

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function initModalTabs() {
  const archTab = document.getElementById('modalTabArch');
  const codeTab = document.getElementById('modalTabCode');

  archTab?.addEventListener('click', () => {
    currentModalView = 'arch';
    updateModalTabButtons();
    renderModalBody();
  });

  codeTab?.addEventListener('click', () => {
    currentModalView = 'code';
    updateModalTabButtons();
    renderModalBody();
  });
}

function updateModalTabButtons() {
  const archTab = document.getElementById('modalTabArch');
  const codeTab = document.getElementById('modalTabCode');
  if (!archTab || !codeTab) return;

  if (currentModalView === 'arch') {
    archTab.className = 'pb-3 text-xs font-mono font-semibold border-b-2 border-brand-400 text-white flex items-center gap-2';
    codeTab.className = 'pb-3 text-xs font-mono font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center gap-2';
  } else {
    codeTab.className = 'pb-3 text-xs font-mono font-semibold border-b-2 border-cyan-400 text-white flex items-center gap-2';
    archTab.className = 'pb-3 text-xs font-mono font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 flex items-center gap-2';
  }
}

function renderModalBody() {
  const contentEl = document.getElementById('modalContent');
  if (!contentEl || !activeModalProject) return;

  if (currentModalView === 'arch') {
    contentEl.innerHTML = activeModalProject.architecture;
  } else {
    // Render Code Snippet view
    contentEl.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <i data-lucide="terminal" class="w-4 h-4"></i>
            <span>Verified Implementation Snippet</span>
          </div>
          <button onclick="copySnippetCode()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-all">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            <span id="copySnippetText">Copy Code</span>
          </button>
        </div>

        <div class="rounded-2xl bg-slate-950 border border-slate-800 p-5 overflow-x-auto shadow-inner">
          <pre class="text-xs sm:text-sm font-mono text-slate-200 leading-relaxed"><code id="modalRawCode">${escapeHtml(activeModalProject.codeSnippet || '// Code snippet available in production repository')}</code></pre>
        </div>
      </div>
    `;
  }
  lucide.createIcons();
}

function copySnippetCode() {
  if (!activeModalProject || !activeModalProject.codeSnippet) return;
  navigator.clipboard.writeText(activeModalProject.codeSnippet).then(() => {
    const textEl = document.getElementById('copySnippetText');
    if (textEl) textEl.textContent = 'Copied!';
    showToast('Code snippet copied to clipboard!');
    setTimeout(() => {
      if (textEl) textEl.textContent = 'Copy Code';
    }, 2000);
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
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
  activeModalProject = null;
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

// ==================== 9. INTERACTIVE CLI TERMINAL ====================
function initTerminal() {
  const input = document.getElementById('terminalInput');
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitTerminalInput();
    }
  });
}

function submitTerminalInput() {
  const input = document.getElementById('terminalInput');
  if (!input) return;
  const cmd = input.value.trim();
  if (cmd) {
    runCliCmd(cmd);
    input.value = '';
  }
}

function runCliCmd(cmd) {
  const terminal = document.getElementById('terminalOutput');
  if (!terminal) return;

  const normalized = cmd.trim().toLowerCase();

  // Print user command line
  const cmdEntry = document.createElement('div');
  cmdEntry.className = 'text-emerald-400';
  cmdEntry.innerHTML = `<span class="text-cyan-400">linus@architect:~$</span> ${escapeHtml(cmd)}`;
  terminal.appendChild(cmdEntry);

  const response = document.createElement('div');
  response.className = 'text-slate-300 pl-4 border-l-2 border-brand-500/40 space-y-1';

  if (normalized === 'clear' || normalized === 'cls') {
    terminal.innerHTML = '<div class="text-slate-500">// Terminal cleared. Type <span class="text-brand-300 font-bold">help</span> for commands.</div>';
    return;
  } else if (normalized === 'help') {
    response.innerHTML = `
      <div class="text-white font-bold">Available Linus CLI Commands:</div>
      <div><span class="text-brand-300 font-mono">linus --overview</span> : Summary bio, architectural philosophy & focus</div>
      <div><span class="text-brand-300 font-mono">linus --systems</span>  : Catalog of all 7 verified enterprise production systems</div>
      <div><span class="text-brand-300 font-mono">linus --skills</span>   : Complete technology and protocol breakdown</div>
      <div><span class="text-brand-300 font-mono">linus --contact</span>  : Direct channels (Phone, WhatsApp, Email, LinkedIn)</div>
      <div><span class="text-brand-300 font-mono">linus --cv</span>       : Direct download of Linus Linus CV (PDF)</div>
      <div><span class="text-brand-300 font-mono">whatsapp</span>         : Launch WhatsApp direct chat in new tab</div>
      <div><span class="text-brand-300 font-mono">clear</span>            : Clear terminal scrollback</div>
    `;
  } else if (normalized === 'linus --overview' || normalized === 'overview' || normalized === 'whoami') {
    response.innerHTML = `
      <div>🚀 <strong class="text-white">Linus Linus</strong> — Senior Full-Stack, Systems & Desktop Software Architect</div>
      <div>🎓 B.Sc. in Computer Science | 7 Production Flagship Systems</div>
      <div>⚡ Core Specialization: Bridging high-performance C# / .NET Windows architectures with scalable Node.js & React cloud systems.</div>
      <div>🛡️ Proven in: Double-entry accounting ledgers, WMI hardware security, clinical hospital workflows, and multi-actor geo-dispatching.</div>
    `;
  } else if (normalized === 'linus --systems' || normalized === 'systems' || normalized === 'projects') {
    response.innerHTML = `
      <div class="text-white font-bold mb-1">Catalog of 7 Verified Enterprise Systems:</div>
      <div>1. <span class="text-cyan-300 font-semibold">Cash Desk</span> (.NET 4.5/C#): School financial suite, 90+ SQL stored procs, GroundWorker async debts.</div>
      <div>2. <span class="text-rose-300 font-semibold">ChucksMedicare</span> (.NET 4.5/C#): Hospital HIMS, ward bed locking, 3-tier pharmacy hierarchy, pathology labs.</div>
      <div>3. <span class="text-indigo-300 font-semibold">MM Traders ERP</span> (.NET 4.5.2/C#): Wholesale supply chain, cheque registers, PythonDrive Google Drive sync.</div>
      <div>4. <span class="text-emerald-300 font-semibold">Grubbex</span> (Node.js/Socket.io): Real-time food logistics, dual-route isolation, QR crypto handover escrow.</div>
      <div>5. <span class="text-cyan-300 font-semibold">BYHELB LMS Backend</span> (Node.js/MongoDB): Student loan engine, 8-tier RBAC, LoanProfileView concurrency lock.</div>
      <div>6. <span class="text-blue-300 font-semibold">BYSHELB Portal</span> (React 18/MobX): 7-stage loan wizard, 3-tier onboarding KYC prerequisite gatekeeper.</div>
      <div>7. <span class="text-purple-300 font-semibold">SecureSync Platform</span> (React 18/RTK Query): Encrypted cloud doc storage, in-app viewer, 401 token rotation.</div>
    `;
  } else if (normalized === 'linus --skills' || normalized === 'skills') {
    response.innerHTML = `
      <div class="text-white font-bold mb-1">Technical Stack & Protocol Matrix:</div>
      <div>• <span class="text-brand-300">Desktop & Systems:</span> C#, .NET Framework 4.5/4.5.2, ADO.NET, SqlHelper, GroundWorker (Task.Run), WMI SHA-256, Crystal Reports 13.</div>
      <div>• <span class="text-emerald-300">Backend & Real-Time:</span> Node.js v20, Express, Socket.io, Zod, EventEmitter, RESTful APIs, Swagger, Winston.</div>
      <div>• <span class="text-cyan-300">Databases & FinTech:</span> Microsoft SQL Server, MongoDB/Mongoose, Double-Entry Ledgers, Paystack, Flutterwave, BVN/NIP KYC.</div>
      <div>• <span class="text-purple-300">Frontend & Cloud:</span> React 18, Vite, Next.js, Redux Toolkit, MobX, PythonDrive (PyODBC/GDrive API), Tailwind CSS.</div>
    `;
  } else if (normalized === 'linus --contact' || normalized === 'contact') {
    response.innerHTML = `
      <div class="text-white font-bold mb-1">Direct Contact Channels:</div>
      <div>• WhatsApp: <a href="https://wa.me/2348120484386" target="_blank" class="text-emerald-400 underline">+234 812 048 4386</a></div>
      <div>• Voice Phones: <a href="tel:+2348120484386" class="text-cyan-300">+234 812 048 4386</a> | <a href="tel:+2348113664697" class="text-cyan-300">+234 811 366 4697</a></div>
      <div>• Emails: <a href="mailto:linus.linus204@gmail.com" class="text-brand-300">linus.linus204@gmail.com</a> | <a href="mailto:linus.zoea@gmail.com" class="text-brand-300">linus.zoea@gmail.com</a></div>
      <div>• GitHub: <a href="https://www.github.com/Learnuel1" target="_blank" class="text-purple-300">github.com/Learnuel1</a></div>
      <div>• LinkedIn: <a href="https://www.linkedin.com/in/linus-linus-i" target="_blank" class="text-blue-300">linkedin.com/in/linus-linus-i</a></div>
    `;
  } else if (normalized === 'linus --cv' || normalized === 'cv' || normalized === 'resume') {
    response.innerHTML = `
      <div class="text-emerald-400">> Initiating download: Linus_Linus_CV.pdf...</div>
      <div>If download doesn't trigger automatically, <a href="./LINUS_LINUS_CV.pdf" download="Linus_Linus_CV.pdf" class="underline text-brand-300">click here</a>.</div>
    `;
    const link = document.createElement('a');
    link.href = './LINUS_LINUS_CV.pdf';
    link.download = 'Linus_Linus_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (normalized === 'whatsapp') {
    response.innerHTML = `<div class="text-emerald-400">> Opening WhatsApp chat (+234 812 048 4386)...</div>`;
    window.open('https://wa.me/2348120484386?text=Hello%20Linus,%20I%20viewed%20your%20software%20architect%20portfolio%20and%20would%20like%20to%20connect.', '_blank');
  } else if (normalized === 'sudo' || normalized.startsWith('sudo ')) {
    response.innerHTML = `<div class="text-rose-400">bash: permission denied: Linus Linus is the root administrator of this domain.</div>`;
  } else {
    response.innerHTML = `<div class="text-rose-400">command not found: '${escapeHtml(cmd)}'. Type <span class="text-brand-300 font-bold">help</span> for available commands.</div>`;
  }

  terminal.appendChild(response);
  terminal.scrollTop = terminal.scrollHeight;
}

// ==================== 10. COMMAND PALETTE (CTRL+K / CMD+K) ====================
const commandPaletteItems = [
  // Actions & Jumps
  { id: 'jump-projects', title: '7 Flagship Enterprise Systems', subtitle: 'Explore case studies, metrics, and architecture diagrams', icon: 'folder-git-2', type: 'section', target: '#projects' },
  { id: 'jump-skills', title: 'Skills & Protocol Matrix', subtitle: 'Browse 35+ verified technologies and proficiency ratings', icon: 'cpu', type: 'section', target: '#skills' },
  { id: 'jump-arch', title: 'Interactive System Simulator', subtitle: 'Run GroundWorker, hospital workflow, and loan state machines', icon: 'activity', type: 'section', target: '#architecture' },
  { id: 'jump-about', title: 'About & Architectural Philosophy', subtitle: 'Engineering background, B.Sc. CS, and design tenets', icon: 'user', type: 'section', target: '#about' },
  { id: 'jump-contact', title: 'Contact & Collaboration', subtitle: 'Direct channels, WhatsApp, phone numbers, and message form', icon: 'send', type: 'section', target: '#contact' },

  // Direct Communication & Links
  { id: 'action-whatsapp', title: 'Chat on WhatsApp (+234 812 048 4386)', subtitle: 'Instant direct messaging with Linus Linus', icon: 'message-circle', type: 'link', url: 'https://wa.me/2348120484386?text=Hello%20Linus,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect.' },
  { id: 'action-download-cv', title: 'Download Linus Linus CV (PDF)', subtitle: 'Comprehensive 7-systems resume document', icon: 'download', type: 'download', url: './LINUS_LINUS_CV.pdf' },
  { id: 'action-gdocs-cv', title: 'View Live CV on Google Docs', subtitle: 'Real-time synchronized Google Workspace document', icon: 'file-text', type: 'link', url: 'https://docs.google.com/document/d/1uOnFfa2ZRpZ_U-90RfCxj0ReTtMGGUOoNQq_LFtVNmc/edit?usp=drivesdk' },
  { id: 'action-github', title: 'Visit GitHub Profile (@Learnuel1)', subtitle: 'https://www.github.com/Learnuel1', icon: 'github', type: 'link', url: 'https://www.github.com/Learnuel1' },
  { id: 'action-linkedin', title: 'Connect on LinkedIn', subtitle: 'https://www.linkedin.com/in/linus-linus-i', icon: 'linkedin', type: 'link', url: 'https://www.linkedin.com/in/linus-linus-i' },
  { id: 'action-copy-email', title: 'Copy Primary Email (linus.linus204@gmail.com)', subtitle: 'Copy email address to clipboard', icon: 'mail', type: 'copy', text: 'linus.linus204@gmail.com' },

  // Direct Project Inspection Modals
  { id: 'proj-cashdesk', title: 'Inspect: Cash Desk App', subtitle: 'C#, .NET 4.5, 90+ SQL Stored Procs, GroundWorker async debt', icon: 'layers', type: 'project', projectId: 'cashdesk' },
  { id: 'proj-chucksmedicare', title: 'Inspect: ChucksMedicareApp (HIMS)', subtitle: 'Hospital clinical management, ward beds, 3-tier pharmacy', icon: 'activity', type: 'project', projectId: 'chucksmedicare' },
  { id: 'proj-mmtraders', title: 'Inspect: MM Traders ERP', subtitle: 'Inventory ERP, cheque clearing, PythonDrive cloud sync', icon: 'database', type: 'project', projectId: 'mmtraders' },
  { id: 'proj-grubbex', title: 'Inspect: Grubbex Backend API', subtitle: 'Real-time logistics, Socket.io, double-entry escrow, QR', icon: 'radio', type: 'project', projectId: 'grubbex' },
  { id: 'proj-byhelb-be', title: 'Inspect: BYHELB LMS Backend v2', subtitle: '8-tier RBAC, loan memo batches, LoanProfileView locks', icon: 'lock', type: 'project', projectId: 'byhelb-be' },
  { id: 'proj-byhelb-fe', title: 'Inspect: BYSHELB Student Loan Portal', subtitle: 'React 18, MobX 7-stage wizard, 3-tier gatekeeper', icon: 'layout', type: 'project', projectId: 'byhelb-fe' },
  { id: 'proj-securesync', title: 'Inspect: SecureSync Cloud Platform', subtitle: 'React 18, RTK Query token rotation, doc viewer, 2FA', icon: 'cloud', type: 'project', projectId: 'securesync' }
];

let selectedCmdIndex = 0;
let currentCmdMatches = [];

function initCommandPalette() {
  const modal = document.getElementById('cmdPalette');
  const input = document.getElementById('cmdInput');
  const triggerBtn = document.getElementById('cmdPaletteBtn');

  // Global Ctrl+K / Cmd+K shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleCommandPalette();
    } else if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeCommandPalette();
    }
  });

  triggerBtn?.addEventListener('click', openCommandPalette);

  modal?.addEventListener('click', (e) => {
    if (e.target.id === 'cmdPalette') closeCommandPalette();
  });

  input?.addEventListener('input', () => {
    selectedCmdIndex = 0;
    renderCommandResults(input.value);
  });

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentCmdMatches.length > 0) {
        selectedCmdIndex = (selectedCmdIndex + 1) % currentCmdMatches.length;
        renderCommandResults(input.value);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentCmdMatches.length > 0) {
        selectedCmdIndex = (selectedCmdIndex - 1 + currentCmdMatches.length) % currentCmdMatches.length;
        renderCommandResults(input.value);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentCmdMatches[selectedCmdIndex]) {
        executeCommandItem(currentCmdMatches[selectedCmdIndex]);
      }
    }
  });
}

function openCommandPalette() {
  const modal = document.getElementById('cmdPalette');
  const input = document.getElementById('cmdInput');
  if (!modal || !input) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  input.value = '';
  selectedCmdIndex = 0;
  renderCommandResults('');
  setTimeout(() => input.focus(), 50);
}

function closeCommandPalette() {
  const modal = document.getElementById('cmdPalette');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function toggleCommandPalette() {
  const modal = document.getElementById('cmdPalette');
  if (modal?.classList.contains('hidden')) {
    openCommandPalette();
  } else {
    closeCommandPalette();
  }
}

function renderCommandResults(query) {
  const resultsContainer = document.getElementById('cmdResults');
  if (!resultsContainer) return;

  const q = query.trim().toLowerCase();
  currentCmdMatches = commandPaletteItems.filter(item => {
    if (!q) return true;
    return item.title.toLowerCase().includes(q) || 
           item.subtitle.toLowerCase().includes(q) ||
           (item.projectId && item.projectId.toLowerCase().includes(q));
  });

  if (currentCmdMatches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="p-6 text-center text-slate-500 font-mono text-xs">
        No actions or systems matching "${escapeHtml(query)}"
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = currentCmdMatches.map((item, idx) => {
    const isSelected = idx === selectedCmdIndex;
    const activeClasses = isSelected 
      ? 'bg-brand-500/10 border-brand-500/50 text-white' 
      : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-800/50 hover:text-white';
    
    return `
      <div onclick="executeCommandByIndex(${idx})" class="flex items-center justify-between p-3 rounded-xl border ${activeClasses} cursor-pointer transition-all">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-400 shrink-0">
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
          </div>
          <div>
            <div class="text-sm font-semibold tracking-tight">${item.title}</div>
            <div class="text-[11px] text-slate-400 leading-tight">${item.subtitle}</div>
          </div>
        </div>
        <div class="shrink-0 pl-2">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 uppercase">${item.type}</span>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function executeCommandByIndex(index) {
  if (currentCmdMatches[index]) {
    executeCommandItem(currentCmdMatches[index]);
  }
}

function executeCommandItem(item) {
  closeCommandPalette();
  if (item.type === 'section') {
    const el = document.querySelector(item.target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (item.type === 'link') {
    window.open(item.url, '_blank');
  } else if (item.type === 'download') {
    const link = document.createElement('a');
    link.href = item.url;
    link.download = 'Linus_Linus_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (item.type === 'copy') {
    copyToClipboard(item.text);
  } else if (item.type === 'project') {
    openProjectModal(item.projectId);
  }
}