export interface ProjectItem {
  id: string;
  slug: string;
  category: "saas" | "logistics" | "edtech" | "foodtech" | "export" | "healthcare";
  title: { ar: string; en: string };
  summary: { ar: string; en: string };
  description: { ar: string; en: string };
  metrics: { label: { ar: string; en: string }; value: string }[];
  tags: string[];
  techStack: string[];
  features: { ar: string[]; en: string[] };
  github?: string;
  demoUrl?: string;
  featured: boolean;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "doha-exam-platform",
    slug: "doha-exam-platform",
    category: "edtech",
    title: {
      ar: "منصة الأستاذة ضحى مصطفى التعليمية",
      en: "Doha Mostafa Arabic Examination Platform",
    },
    summary: {
      ar: "منصة تعليمية متطورة لامتحانات اللغة العربية بالتشكيل وتصحيح ذكي فوري وإشعارات واتساب لأولياء الأمور.",
      en: "Advanced Arabic examination platform with automated Tashkeel-aware grading and instant WhatsApp parent alerts.",
    },
    description: {
      ar: "نظام تعليمي متكامل لمعلمي ومراكز اللغة العربية في مصر والخليج، يدعم لوحة مفاتيح التشكيل الافتراضية، تصحيح التعبير والنحو بمحرك لغوي ذكي، وحماية كاملة للامتحانات مع توليد كروت النتائج وباركود الطالب.",
      en: "Complete educational ecosystem featuring virtual Tashkeel keyboard, NLP Arabic text matching, strict exam anti-cheat barriers, and instant WhatsApp scorecards.",
    },
    metrics: [
      { label: { ar: "دقة التصحيح اللغوي", en: "Grading Accuracy" }, value: "100%" },
      { label: { ar: "زمن تسليم النتيجة", en: "Result Delivery" }, value: "< 1s" },
      { label: { ar: "توفير وقت المعلم", en: "Teacher Time Saved" }, value: "85%" },
    ],
    tags: ["EdTech", "Arabic NLP", "Next.js", "PostgreSQL", "WhatsApp API"],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Lucide"],
    features: {
      ar: [
        "لوحة مفاتيح تشكيل وتصحيح ذكي للأخطاء الإملائية الشائعة (ة/هـ، أ/إ/ا)",
        "إرسال تقارير الدرجات تلقائياً لأرقام أولياء الأمور على واتساب",
        "لوحة تحكم تفاعلية للمعلم مع إحصائيات الأداء ومعدلات الإتقان",
        "نظام حماية واختبارات مؤقتة ومضادة للغش",
      ],
      en: [
        "Virtual Arabic Tashkeel keyboard and intelligent spelling distance grading",
        "Instant automated WhatsApp scorecard dispatch to parent numbers",
        "Teacher analytics dashboard with mastery rates and question diagnostics",
        "Timed, protected student examination environment with anti-cheat",
      ],
    },
    github: "https://github.com/Momen0819/doha-exam-platform",
    demoUrl: "https://doha-mostafa.vercel.app",
    featured: true,
  },
  {
    id: "vegfresh-egypt-demo",
    slug: "vegfresh-egypt-demo",
    category: "export",
    title: {
      ar: "منصة فيج فريش للحاصلات الزراعية والتصدير الدولي",
      en: "VegFresh Egypt Agricultural Export Platform",
    },
    summary: {
      ar: "بوابة تصدير دولية فائقة السرعة بـ 4 لغات (عربي، إنجليزي، روسي، صيني) مع حاسبة حمولة الحاويات.",
      en: "High-speed 4-language international export portal with smart reefer container load calculator.",
    },
    description: {
      ar: "موقع مؤسسي وتجاري موجه للأسواق الأوروبية والآسيوية لاستيراد الموالح والخضروات المصرية الطازجة، مزود بكتالوج منتجات زراعية تفاعلي، مواسم الحصاد، وطلب عروض أسعار فوري.",
      en: "Enterprise export portal for European and Asian buyers to source premium Egyptian citrus and vegetables, complete with seasonal calendar and WhatsApp RFQ integration.",
    },
    metrics: [
      { label: { ar: "اللغات المدعومة", en: "Locales Supported" }, value: "4 (AR/EN/RU/ZH)" },
      { label: { ar: "سرعة التحميل", en: "PageSpeed Score" }, value: "99/100" },
      { label: { ar: "زمن استجابة الطلب", en: "Inquiry Response" }, value: "Instant" },
    ],
    tags: ["Export & Trade", "Static Edge", "Multi-lingual", "Tailwind CSS"],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Lucide"],
    features: {
      ar: [
        "دعم كامل لـ 4 لغات مع محاذاة تلقائية للاتجاه RTL/LTR",
        "حاسبة لوجستية تفاعلية لتقدير حمولة الحاويات المبردة والتكلفة",
        "كتالوج منتجات تفاعلي مع مواصفات التعبئة وشهادات الجودة الدولية",
      ],
      en: [
        "Full 4-language support with bidirectional RTL/LTR layout handling",
        "Interactive reefer container load and freight estimator",
        "Dynamic product catalog with export packing specs and ISO certificates",
      ],
    },
    github: "https://github.com/Momen0819/vegfresh-egypt-demo",
    demoUrl: "https://github.com/Momen0819/vegfresh-egypt-demo",
    featured: true,
  },
  {
    id: "retail-pos-saas",
    slug: "retail-pos-saas",
    category: "saas",
    title: {
      ar: "منظومة إدارة المبيعات ونقاط البيع السحابية (POS SaaS)",
      en: "Cloud Retail POS & Inventory SaaS Platform",
    },
    summary: {
      ar: "نظام كاشير ومخازن سحابي متعدد الفروع مع إدارة فورية للمخزون والفواتير الإلكترونية.",
      en: "Multi-branch cloud POS & inventory system with real-time stock sync and e-invoicing.",
    },
    description: {
      ar: "نظام إدارة مبيعات متكامل للمحلات وسلاسل التجزئة يدعم نقاط البيع، طباعة الباركود والفواتير الحرارية، جرد المخازن الفوري، وتقارير الأرباح والخسائر.",
      en: "Cloud-native ERP & POS software for retail chains featuring barcode scanner integration, offline sales cache, thermal receipts, and real-time P&L analytics.",
    },
    metrics: [
      { label: { ar: "معالجة العمليات", en: "Transaction Speed" }, value: "0.2s" },
      { label: { ar: "دقة المخزون", en: "Inventory Accuracy" }, value: "99.9%" },
      { label: { ar: "جاهزية النظام", en: "Uptime SLA" }, value: "99.95%" },
    ],
    tags: ["SaaS", "POS & ERP", "Inventory", "PostgreSQL", "Next.js"],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: {
      ar: [
        "واجهة كاشير سريعة تدعم شاشات اللمس وقارئ الباركود",
        "إدارة المخزون متعدد الفروع وتنبيهات نواقص البضائع",
        "تقارير محاسبية تفصيلية وإيرادات يومية وشهرية",
      ],
      en: [
        "Touchscreen-optimized cashier UI with barcode scanner hotkeys",
        "Multi-branch inventory synchronization and low-stock alerts",
        "Real-time accounting, profit analysis, and cashier shift reports",
      ],
    },
    github: "https://github.com/Momen0819/retail-pos-saas",
    demoUrl: "https://github.com/Momen0819/retail-pos-saas",
    featured: true,
  },
  {
    id: "iser-restaurant-os",
    slug: "iser-restaurant-os",
    category: "foodtech",
    title: {
      ar: "نظام إدارة المطاعم وشاشات المطبخ الذكية (RestaurantOS)",
      en: "Iser RestaurantOS — KDS, POS & QR Ordering",
    },
    summary: {
      ar: "نظام تشغيل وإدارة مطاعم متكامل مع شاشات المطبخ الفورية والطلب عبر الطاولات بالـ QR Code.",
      en: "Comprehensive restaurant OS with Kitchen Display System (KDS), table QR ordering, and live inventory sync.",
    },
    description: {
      ar: "حل تقني متقدم لسلاسل المطاعم والكافيهات يربط الكاشير بشاشات الطهاة في المطبخ في أجزاء من الثانية، مع إمكانية تصفح المنيو والطلب والدفع الذاتي عبر هواتف الزبائن.",
      en: "End-to-end hospitality platform synchronizing cashier stations, kitchen displays, and guest QR table orders with zero latency.",
    },
    metrics: [
      { label: { ar: "سرعة تجهيز الطلب", en: "Order Prep Speed" }, value: "+35%" },
      { label: { ar: "انعدام أخطاء المطبخ", en: "Order Error Drop" }, value: "98%" },
      { label: { ar: "زيادة المبيعات", en: "Average Ticket Lift" }, value: "+22%" },
    ],
    tags: ["FoodTech", "KDS", "QR Ordering", "Realtime WebSockets"],
    techStack: ["Angular / Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: {
      ar: [
        "شاشات مطبخ تفاعلية (KDS) لتنظيم سير تحضير الوجبات لحظياً",
        "منيو إلكتروني تفاعلي عبر QR Code بدون الحاجة لتثبيت أي تطبيق",
        "إدارة الطاولات، الحجوزات، وخدمات التوصيل والتيك أواي",
      ],
      en: [
        "Interactive Kitchen Display System (KDS) for real-time line orchestration",
        "Instant contactless QR digital menu & table-ordering (no app install)",
        "Comprehensive table mapping, reservations, and delivery integration",
      ],
    },
    github: "https://github.com/Momen0819/Iser-RestaurantOS",
    demoUrl: "https://github.com/Momen0819/Iser-RestaurantOS",
    featured: true,
  },
  {
    id: "safecaravan-logistics",
    slug: "safecaravan-logistics",
    category: "logistics",
    title: {
      ar: "تطبيق ومنصة سيف كارافان للخدمات اللوجستية والنقل",
      en: "SafeCaravan Logistics & Fleet Management",
    },
    summary: {
      ar: "منصة وتطبيقات لإدارة أساطيل الشحن وتتبع الشحنات بالـ GPS في الوقت الفعلي.",
      en: "Fleet operations and real-time GPS freight dispatch and customer tracking platform.",
    },
    description: {
      ar: "نظام لوجستي ذكي يربط شركات النقل، السائقين، والعملاء، مع حساب مسارات النقل الذكية، تتبع الشحنات المباشر، وتأكيد الاستلام الرقمي.",
      en: "Enterprise freight software connecting fleet operators, dispatchers, and shippers with live route optimization, real-time telemetry, and digital Proof-of-Delivery.",
    },
    metrics: [
      { label: { ar: "دقة التتبع المباشر", en: "GPS Telemetry SLA" }, value: "100%" },
      { label: { ar: "توفير تكاليف النقل", en: "Fuel Cost Savings" }, value: "28%" },
      { label: { ar: "الشحنات المنجزة", en: "Dispatched Loads" }, value: "+10k" },
    ],
    tags: ["Logistics", "Mobile App", "GPS Tracking", "Fleet Management"],
    techStack: ["Flutter / React Native", "Node.js", "PostgreSQL", "Google Maps API"],
    features: {
      ar: [
        "تتبع حي لشاحنات الأسطول على الخريطة لحظة بلحظة",
        "توزيع وتوجيه تلقائي للطلبات لأقرب سائق متاح",
        "إشعارات وصول الشحنة وتوقيع إلكتروني لإثبات الاستلام",
      ],
      en: [
        "Live satellite map telemetry and fleet location monitoring",
        "Automated load matching and route optimization engine",
        "Customer ETA SMS/WhatsApp updates and digital Proof of Delivery",
      ],
    },
    github: "https://github.com/Momen0819/SafeCaravanCompanyV2",
    demoUrl: "https://github.com/Momen0819/SafeCaravanCompanyV2",
    featured: false,
  },
  {
    id: "sudanet-platform",
    slug: "sudanet-platform",
    category: "saas",
    title: {
      ar: "منصة سودانيت للاتصالات والخدمات الرقمية",
      en: "Sudanet Telecom & Enterprise Portal",
    },
    summary: {
      ar: "منظومة مؤسسية للاتصالات وإدارة العملاء والفوترة الإلكترونية وتطبيق الهاتف المحمول.",
      en: "Enterprise telecom management, subscriber billing system, and cross-platform MAUI app.",
    },
    description: {
      ar: "بنية تحتية سحابية عالية التحمل لمعالجة آلاف المشتركين، تشمل لوحة تحكم إدارية حديثة، واجهات برمجية .NET سريعة، وتطبيق جوال للمستخدمين.",
      en: "High-throughput telecom backend handling enterprise subscribers, integrated billing gateway, modern administrative portal, and multi-platform mobile application.",
    },
    metrics: [
      { label: { ar: "سرعة معالجة الطلبات", en: "Throughput" }, value: "50k req/s" },
      { label: { ar: "استقرار البنية", en: "Reliability" }, value: "99.99%" },
      { label: { ar: "الأداء", en: "API Latency" }, value: "< 15ms" },
    ],
    tags: ["Telecom", ".NET 10", "MAUI", "Enterprise Architecture"],
    techStack: [".NET 10 Web API", "MVC Admin", "MAUI App", "SQL Server", "Tailwind"],
    features: {
      ar: [
        "لوحة إدارة متقدمة لإدارة الاشتراكات والفوترة الشهرية",
        "بنية تحتية مشددة الأمان لمنع الاختراقات وتأمين بيانات المشتركين",
        "تطبيق هاتف هجين سريع ومتوافق مع Android و iOS",
      ],
      en: [
        "Advanced subscription and recurring billing automation engine",
        "Military-grade security and role-based data access controls",
        "High-performance cross-platform Android & iOS client application",
      ],
    },
    github: "https://github.com/Momen0819/SudanetPlatform",
    demoUrl: "https://github.com/Momen0819/SudanetPlatform",
    featured: false,
  },
];
