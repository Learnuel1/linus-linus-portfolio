# LINUS LINUS
**Senior Full-Stack, Systems & Desktop Software Architect**

📍 West Africa (WAT) | Open to Worldwide Remote  
📞 [+234 812 048 4386](tel:+2348120484386) | [+234 811 366 4697](tel:+2348113664697)  
✉️ [linus.linus204@gmail.com](mailto:linus.linus204@gmail.com) | [linus.zoea@gmail.com](mailto:linus.zoea@gmail.com)  
🌐 [GitHub: @Learnuel1](https://www.github.com/Learnuel1) | [LinkedIn: linus-linus-i](https://www.linkedin.com/in/linus-linus-i)

---

## EXECUTIVE SUMMARY

Accomplished Senior Full-Stack & Systems Software Architect with over 7 production-grade enterprise systems spanning healthcare hospital management (HIMS), institutional bursary accounting, wholesale ERP supply chains, real-time on-demand logistics marketplaces, government loan processing engines, and encrypted cloud storage platforms. Expert in C#/.NET Framework, Node.js, Express, React 18, Microsoft SQL Server (90+ T-SQL Stored Procedures, Views, Triggers), MongoDB, Socket.io, Python automation (PyODBC/Google Drive), and double-entry financial ledgers. Deep background in asynchronous multi-threading, concurrency prevention locks, regulatory KYC (BVN, NIN, CAC), hardware-bound anti-tamper licensing (WMI SHA-256), and defensive API security.

---

## CORE TECHNICAL COMPETENCIES

- **Programming Languages:** C# (5.0/6.0), JavaScript (ES6+, ESNext, Node.js v18/v20), TypeScript, Python, T-SQL, HTML5, CSS3, Handlebars, EJS
- **Desktop & Systems Engineering (.NET):** .NET Framework 4.5 / 4.5.2, Windows Forms, ADO.NET (`SqlCommand`, `SqlDataAdapter`, `SqlHelper`), WMI Hardware Fingerprinting (SHA-256), Multi-Threaded Asynchronous Engines (`Task.Run()`), Windows Isolated Storage, Factory Pattern, LiveCharts (WinForms/WPF), Bunifu UI, MetroFramework
- **Healthcare & Enterprise ERP Systems:** Hospital Information & Management Systems (HIMS), In-Patient Admission & Ward/Bed tracking, 3-Tier Pharmacy Stock Hierarchy (Main Store -> Dispensary -> Pharmacy Counter), Clinical Laboratory Pathology, Haematology & Microbiology reports, Drug Expiry Background Timer Engine, Wholesale ERP Supply Chain & Cheque Registers
- **Reporting & Barcode Engines:** SAP Crystal Reports 13.x, Zen Barcode Rendering Framework (Code128 1D & QR Code 2D), `iTextSharp` PDF generation, `ExcelDataReader` (binary `.xlsx`/`.xls` parsing), Thermal POS receipt printing
- **Backend & Distributed Systems:** Node.js, Express.js 4.x, Socket.io (WebSocket real-time hub), Node.js `EventEmitter`, Dual-Route Gateway Architecture (`/api/v1` vs `/api/v1/m`), Layered Service Architecture, RESTful APIs, Swagger / OpenAPI 2.0, Zod Runtime Validation
- **Databases & Persistence:** Microsoft SQL Server (2012–2022 / Express), 90+ Stored Procedures, Triggers, Views, ACID Transactions, File-level database backup/restore (`.mdf`/`.ldf`), MongoDB & Mongoose 6.x (Aggregation pipelines, soft deletes, indexing)
- **Cloud Sync & Infrastructure:** PythonDrive (PyODBC + Google Drive API automation), AWS Secrets Manager, AWS S3, Cloudinary SDK, Multer streaming, Render Cloud Platform, Git/GitHub
- **FinTech & Financial Ledgers:** Double-entry wallet ledgers (`Wallet` & `WalletHistory` / `Transactions`), Platform escrow settlement, Commission calculation engines, Paystack API & Transfer API, Flutterwave SDK, Bloc API, BVN resolution, NIP commercial bank lookup, Bank teller slip reconciliation
- **Geospatial & Logistics:** Google Maps Platform (Geocoding & Distance Matrix API), Haversine geo-radius courier dispatching (`getOrdersWithinRadius`), Courier GPS & Geofencing, Cryptographic QR Code Handover
- **Security & Cryptography:** WMI hardware fingerprinting (SHA-256 machine ID), JWT symmetric claims obfuscation (Base64/Hex), Two-Factor Authentication (2FA), `bcryptjs`, AES/TripleDES connection string encryption, RBAC multi-tier guards
- **Frontend Frameworks & State:** React 18, Vite, Next.js (App Router), Redux Toolkit (`@reduxjs/toolkit`), RTK Query (auto 401 token refresh), `redux-persist`, MobX, React Router DOM v6, Tailwind CSS, `@cyntler/react-doc-viewer`, `react-file-viewer`

---

## PROFESSIONAL EXPERIENCE & FEATURED SYSTEMS

### Lead Desktop & Systems Architect — Cash Desk Application
**Enterprise .NET / C# Desktop Bursary, POS & Campus Commerce Accounting Suite**
- Architected an enterprise Windows desktop financial management suite for primary and secondary educational institutions.
- **Asynchronous Multi-Threaded Debt Engine (`GroundWorker`):** Designed non-blocking background workers using `Task.Run()` to execute concurrent term debt audits (`FirstTermDebtAsync`, `SecondTermDebtAsync`, `ThirdTermDebtAsync`), zero-payment scans, and duplicate debtor deduplication on application boot without UI freezing.
- **Student Digital Wallet ("Pocket Money"):** Engineered a cashless payment ecosystem tied 1:1 to student matriculation numbers, supporting individual deposits, bulk parent funding by class/arm (`BulkFund`), and automated Balance Brought Forward (`BF`) session rollover.
- **Point of Sale (POS) & Store Inventory Subsystem:** Built high-speed barcode checkout supporting Code128 1D and QR 2D scanning (`Zen.Barcode`), multi-tender settlements (Pocket Money, Cash, Bank, Issued, Credit), and closing stock term reconciliation.
- **Hardware-Bound Anti-Tamper Licensing:** Created a machine licensing engine querying WMI (`Win32_Processor.ProcessorId` and `Win32_BIOS.SerialNumber`) to compute a machine SHA-256 hash, verified against activation keys stored across two-factor storage (SQL database + Windows Isolated Storage) with a 120-record demo trial safeguard.
- **Database Architecture:** Developed 90+ compiled SQL Server stored procedures enforcing ACID transactional integrity and direct file-level `.mdf`/`.ldf` backup/restore scripts.

### Lead Healthcare Systems Architect — ChucksMedicareApp
**Enterprise Hospital Information & Management System (HIMS) & Pharmacy POS**
- Architected an enterprise-grade clinical management and healthcare dispensary suite coordinating medical staff, patients, laboratory investigations, and hospital accounting.
- **In-Patient Ward & Bed Management:** Engineered real-time patient admission tracking, room/bed assignment (`RoomsAndBedFrm`), diagnostic charting, treatment prescription logs, and discharge billing.
- **3-Tier Pharmaceutical Inventory Engine:** Structured drug stock movement from Main Warehouse Store -> Dispensary -> Pharmacy Retail Counter with batch tracking, cost/selling price margins, and supplier purchase orders.
- **Diagnostic Laboratory Suite:** Built dedicated clinical pathology, haematology (full blood count, genotype), and microbiology (culture, sensitivity, microscopy) reporting modules generating certified diagnostic printouts.
- **Active Drug Expiry Alert Engine:** Created background timer monitors scanning pharmaceutical inventories for near-expiry drugs ($<30$ days) and out-of-stock items, triggering real-time toast alerts.
- **Medical Role-Based Access Control:** Implemented a 7-tier role security matrix (Admin, Sales Manager, Accountant, Doctor/Nurse, Lab Scientist, Sales Rep, Receptionist) and hardware UUID licensing.

### Lead ERP & Systems Architect — MM Traders Inventory Management System
**Enterprise Desktop ERP, POS Billing, Supply Chain & Automated Cloud Sync**
- Designed an enterprise Windows desktop ERP solution handling multi-brand inventory, POS billing, customer CRM, and automated offsite backups.
- **POS Billing & Multi-Tender Checkout:** Built high-speed billing terminals supporting Cash, Credit sales with customer debt ledgers, and Cheque payment registers with clearance date tracking.
- **Automated Cloud Backup (PythonDrive):** Built Python automation scripts integrating PyODBC and Google Drive API to execute automated offsite backups of SQL Server databases directly to Google Drive.
- **Customer CRM & Route Clustering:** Grouped commercial buyers into geographic city clusters (`CityGroup`) to coordinate delivery logistics and territory sales.
- **Granular Feature Flag RBAC:** Enforced pipe-separated permission strings (`ADPRDCT|MKSL|RTRN|...`) to dynamically toggle UI controls and operational screen access.

### Lead Distributed Systems & Backend Architect — Grubbex Backend API
**Multi-Sided On-Demand Food & Grocery Logistics Marketplace**
- Engineered high-concurrency backend API and real-time WebSocket hub connecting Shoppers, Couriers (Riders), Merchant Stores, and Platform Administrators.
- **Dual-Route Platform Isolation:** Architected dual-entry routing separating Web clients (`/api/v1`) from Mobile clients (`/api/v1/m`), strictly enforced via `checkRouteUsed` to prevent unauthorized client impersonation.
- **Real-Time Geo-Radius Courier Dispatching:** Built proximity matching using Google Maps Geocoding and Haversine distance calculations (`getOrdersWithinRadius`) to broadcast pending store pickups to couriers within active geo-fences via Socket.io.
- **Cryptographic Delivery Handover:** Implemented fraud-proof delivery handovers pairing dynamic QR code generation (`qrcodeService`) with 6-digit cryptographic PINs verified by couriers on customer handover.
- **Double-Entry Financial Ledger & Escrow:** Developed an automated financial settlement engine where customer payments are held in platform escrow, courier commissions are programmatically deducted upon verified handover, and rider/merchant wallets are credited with full audit trails in `WalletHistory`.
- **Validation & Cloud Security:** Implemented centralized Zod runtime schema pipelines and secured production credentials via AWS Secrets Manager.

### Lead Backend Architect & API Engineer — Bayelsa State Higher Education Loans Board (BYSHELB LMS Backend v2)
**Distributed Government Loan Processing Engine & Administrative Governance Platform**
- Architected the core central backend powering tertiary student loans for Bayelsa State, managing student applications, KYC validation, civil service governance, and multi-million naira loan disbursements.
- **Multi-Tier Administrative Governance Pipeline:** Built an 8-role permission hierarchy (`super_admin`/`es`, `lph`, `la`, `lo`, `acc`, `fdo`, `blog`, `student`) enforcing strict state transitions.
- **Internal Approval Memo Routing:** Developed an internal bureaucratic memo system where verified student loans are bundled into cryptographically tracked memos flowing across audit, legal, and executive sign-off before accountant disbursement.
- **Active Concurrency Prevention Lock:** Implemented a database-level lock mechanism (`LoanProfileView`) preventing multiple loan officers from making conflicting assessments on the same application simultaneously.
- **KYC & Banking Automation:** Integrated live Bank Verification Number (BVN) resolution and NIP commercial bank account lookup to prevent identity fraud and ensure disbursement accuracy.
- **Security & Obfuscation:** Designed custom Base64/Hex symmetric claim encryption inside JWT payloads to prevent token inspection on client devices.

### Lead Frontend Engineer — BYSHELB Student Loan Portal Frontend (`lms-fe-v2`)
**Citizen-Facing Tertiary Loan Application Platform & Multi-Step Wizard Engine**
- Built an accessible, responsive student loan portal serving thousands of tertiary students across Bayelsa State.
- **3-Tier Onboarding Gatekeeper:** Enforces bio-data, verified emergency contact, and bank account resolution before unlocking loan applications.
- **7-Stage Progressive Application Wizard:** Architected an isolated step provider (`UndergraduateLoanStepProvider`) managing stage persistence, form state, and draft resumption across undergraduate, postgraduate, and professional loan tracks.
- **Payment & Document Workflows:** Integrated Flutterwave inline payment processing with automated server-side verification callbacks, official guarantor PDF download generation, and document attestation uploads.

### Full-Stack Web Application Engineer — SecureSync Cloud Storage Platform (`secure-sync-js`)
**Modern Encrypted Cloud Storage & Document Collaboration Platform**
- Architected a full-featured cloud document management web application with granular sharing and multi-factor authentication.
- **RTK Query Auto Token Rotation:** Engineered an API data-fetching layer with automatic JWT bearer attachment, silent token re-authentication on 401 Unauthorized responses, and optimistic state caching.
- **In-App Multi-Format Document Viewer:** Native in-browser rendering for PDF, Word (`.docx`), Excel (`.xlsx`), PowerPoint (`.pptx`), and imagery using `@cyntler/react-doc-viewer`.
- **Granular Sharing & Access Control:** Built sharing modals allowing users to grant View-only or Download permissions, generate public reference preview links, and revoke access instantly.
- **Security & Quota Engine:** 2FA challenge flow with OTP countdown timers, soft-deletion with trash restoration, and dynamic storage quota meter.

---

## EDUCATION & PROFESSIONAL DEVELOPMENT

- **Bachelor of Science (B.Sc.) in Computer Science / Software Engineering**
- **Continuous Technical Mastery:** Real-Time Distributed Systems, Healthcare HIMS Architecture, Financial Ledger Engineering, Cloud Security & Cryptography

---

## NOTABLE OPEN SOURCE & GITHUB REPOSITORIES

- **GitHub Profile:** [https://www.github.com/Learnuel1](https://www.github.com/Learnuel1)
- **Portfolio Repository:** [https://github.com/Learnuel1/linus-linus-portfolio](https://github.com/Learnuel1/linus-linus-portfolio)
- **Flagship Codebases:** Cash Desk Application, ChucksMedicareApp HIMS, MM Traders ERP, Grubbex Logistics API, BYSHELB LMS Backend v2, SecureSync Cloud Storage
