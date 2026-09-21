// TRANSLATION STATUS: fr/ar/zh reviewed and approved by professional reviewers on the live
// preview, 2026-09-13. Cleared for production.
export type Lang = 'en' | 'ar' | 'fr' | 'zh';

export const t = {
  // ── BANNER ── // reviewed
  banner: {
    en: 'Phase I — Foundation Stage · Not yet operationally active.',
    ar: 'المرحلة الأولى — مرحلة التأسيس · غير نشطة تشغيلياً بعد.',
    fr: 'Phase I — Étape Fondatrice · Pas encore opérationnellement active.',
    zh: '第一阶段 — 基础建设期 · 尚未正式投入运营。',
  },

  // ── NAV ── // reviewed
  nav: {
    // "Why SWAQAR" transcreated, not literal — matches the institutional-register intent, not a
    // word-for-word render.
    mission: { en: 'Why SWAQAR', ar: 'لماذا سواقر', fr: 'Pourquoi SWAQAR', zh: '为何选择 SWAQAR' },
    identity: { en: 'Identity', ar: 'الهوية', fr: 'Identité', zh: '身份' },
    corridors: { en: 'Corridors', ar: 'الممرات', fr: 'Corridors', zh: '通道' },
    model: { en: 'The Model', ar: 'النموذج', fr: 'Le Modèle', zh: '协调模型' },
    arms: { en: 'Strategic Arms', ar: 'الأذرع الاستراتيجية', fr: 'Bras Stratégiques', zh: '战略板块' },
    governance: { en: 'Governance', ar: 'الحوكمة', fr: 'Gouvernance', zh: '治理' },
    engage: { en: 'Engage', ar: 'تواصل', fr: 'Engager', zh: '联系我们' },
    // "Corridors of Trust" is brand material (see rules) — kept verbatim in all locales rather
    // than translated, since this whole line is the logo's tagline, not a descriptive sentence.
    lockupSub: { en: 'Trade · Corridors of Trust', ar: 'Trade · Corridors of Trust', fr: 'Trade · Corridors of Trust', zh: 'Trade · Corridors of Trust' },
  },

  // ── ACCESSIBILITY LABELS (NEW — QA stage 7) ──
  // Screen-reader-only aria-label text, previously hardcoded English in HomeClient.tsx
  // regardless of locale. New, unreviewed micro-copy — not yet through the same reviewer
  // pass as the rest of the site; flagging for eventual translator sign-off.
  a11y: {
    langSelection: { en: 'Language selection', ar: 'اختيار اللغة', fr: 'Sélection de la langue', zh: '语言选择' },
    switchToEnglish: { en: 'Switch to English', ar: 'التبديل إلى الإنجليزية', fr: 'Passer à l\'anglais', zh: '切换到英语' },
    switchToArabic: { en: 'Switch to Arabic', ar: 'التبديل إلى العربية', fr: 'Passer à l\'arabe', zh: '切换到阿拉伯语' },
    switchToFrench: { en: 'Switch to French', ar: 'التبديل إلى الفرنسية', fr: 'Passer au français', zh: '切换到法语' },
    switchToChinese: { en: 'Switch to Chinese', ar: 'التبديل إلى الصينية', fr: 'Passer au chinois', zh: '切换到中文' },
    openMenu: { en: 'Open menu', ar: 'فتح القائمة', fr: 'Ouvrir le menu', zh: '打开菜单' },
  },


  // ── HERO ── // reviewed
  hero: {
    eyebrow: {
      en: 'Trade Coordination · Africa · Middle East · Asia',
      ar: 'تنسيق التجارة · أفريقيا · الشرق الأوسط · آسيا',
      fr: 'Coordination Commerciale · Afrique · Moyen-Orient · Asie',
      zh: '贸易协调 · 非洲 · 中东 · 亚洲',
    },
    // RESOLVED (was REVIEW): "Corridors of Trust" is the flagship brand name — kept verbatim in
    // English across every locale, matching the English headline exactly. No JSX change was
    // needed: HomeClient.tsx already renders whatever value sits in each key via tx(), so setting
    // ar/fr/zh equal to the English words is sufficient for the name to render identically in
    // every locale. No transcreated subtitle was added near it — none was supplied as locked
    // copy, and inventing one would violate the no-invented-copy rule.
    h1line1: { en: 'Corridors', ar: 'Corridors', fr: 'Corridors', zh: 'Corridors' },
    h1line2: { en: 'of', ar: 'of', fr: 'of', zh: 'of' },
    h1em: { en: 'Trust', ar: 'Trust', fr: 'Trust', zh: 'Trust' },
    // Stage 4 batch 1 — translator-approved subtitle line beneath the brand mark. The mark
    // itself (h1line1/h1line2/h1em above) stays English in every locale by design; this is the
    // one localized line under it. en deliberately empty (English mark already reads in
    // English — no subtitle needed); render nothing when a locale's value is empty, never
    // invent or machine-translate a filler.
    subtitle: { en: '', ar: 'ممرات الثقة', fr: 'Corridors de confiance', zh: '信任通道' },
    desc: {
      en: 'A governance-led Trade Coordination Layer for Africa, the Middle East and Asia. Coordinates verified corridor readiness — without trading, brokering or holding funds.',
      ar: 'طبقة تنسيق تجاري رائدة بالحوكمة لأفريقيا والشرق الأوسط وآسيا. تنسق جاهزية الممرات الموثقة — دون تداول أو وساطة أو حيازة أموال.',
      fr: 'Une Couche de Coordination Commerciale à gouvernance structurée pour l\'Afrique, le Moyen-Orient et l\'Asie. Coordonne la préparation vérifiée des corridors — sans négocier, sans courtage et sans détenir de fonds.',
      zh: '一个以治理为主导的贸易协调层，服务于非洲、中东与亚洲。协调经核验的通道就绪状态——不从事交易、不进行经纪、不持有资金。',
    },
    btnExplore: {
      en: 'Understand the model',
      ar: 'فهم النموذج',
      fr: 'Comprendre le modèle',
      zh: '了解协调模型',
    },
    btnInquiry: {
      en: 'Submit institutional inquiry',
      ar: 'تقديم استفسار مؤسسي',
      fr: 'Soumettre une demande institutionnelle',
      zh: '提交机构咨询',
    },
    scroll: { en: 'Scroll', ar: 'مرر', fr: 'Défiler', zh: '向下滚动' },
    // NEW key — hero tag rendered beneath the sub-paragraph, above the CTA buttons (Placement A).
    // reviewed (ar/fr/zh drafted fresh; reuses this site's
    // established terms for "Non-custodial" and "by design" from elsewhere, e.g. footer.badges
    // and the old stats.nonCustodialByDesign wording, for consistency)
    tag: { en: 'Non-custodial by design', ar: 'غير وصائي بالتصميم', fr: 'Non-dépositaire par conception', zh: '非托管 · 设计使然' },
    // City/region labels for the hero globe (HeroGlobe.tsx, Three.js). Region names reuse
    // corridors.map.africa/middleEast/asia verbatim (same real-world concept, same key already
    // localized for the Corridor Architecture diagram) rather than duplicating that copy here —
    // only "Europe" is new, since the corridor diagram doesn't carry that region. City names are
    // standard, current Arabic/French/Chinese renderings (not machine-transliterated):
    // ar — official/common-usage Arabic place names (e.g. القاهرة for Cairo, not a phonetic
    //   transliteration of the English); fr — accented French spellings where a distinct French
    //   form exists (Le Caire, Téhéran, Dubaï, Singapour), English spelling otherwise; zh —
    //   standard Chinese place names (Shanghai renders in its own name, not a transliteration).
    // FLAG for founder/brand review: Shanghai's Arabic has two names in real-world use —
    // شنغهاي (used here; the more common current spelling, e.g. Al Jazeera/Wikipedia Arabic)
    // and شانغهاي (an alternate transliteration also seen). Not guessed — flagging the choice
    // per the standing instruction to surface ambiguous transliterations rather than pick
    // silently. Every other name below is unambiguous in current usage.
    globe: {
      istanbul: { en: 'Istanbul', ar: 'إسطنبول', fr: 'Istanbul', zh: '伊斯坦布尔' },
      cairo: { en: 'Cairo', ar: 'القاهرة', fr: 'Le Caire', zh: '开罗' },
      tehran: { en: 'Tehran', ar: 'طهران', fr: 'Téhéran', zh: '德黑兰' },
      dubai: { en: 'Dubai', ar: 'دبي', fr: 'Dubaï', zh: '迪拜' },
      mumbai: { en: 'Mumbai', ar: 'مومباي', fr: 'Mumbai', zh: '孟买' },
      nairobi: { en: 'Nairobi', ar: 'نيروبي', fr: 'Nairobi', zh: '内罗毕' },
      shanghai: { en: 'Shanghai', ar: 'شنغهاي', fr: 'Shanghai', zh: '上海' },
      singapore: { en: 'Singapore', ar: 'سنغافورة', fr: 'Singapour', zh: '新加坡' },
      europe: { en: 'Europe', ar: 'أوروبا', fr: 'Europe', zh: '欧洲' },
      // Added for the static-map node set. Jeddah's ar/fr/zh reuse corridors.map.middleEastSub
      // verbatim (same real place, already localized elsewhere) with fr normalized from
      // uppercase "DJEDDAH" to title case to match this list's convention.
      jeddah: { en: 'Jeddah', ar: 'جدة', fr: 'Djeddah', zh: '吉达' },
      abuja: { en: 'Abuja', ar: 'أبوجا', fr: 'Abuja', zh: '阿布贾' },
      // Douala: no distinct French exonym — Cameroon is Francophone and "Douala" is already
      // the name used in French.
      douala: { en: 'Douala', ar: 'دوالا', fr: 'Douala', zh: '杜阿拉' },
      // FLAG for founder/brand review, same pattern as the earlier Shanghai flag: French has
      // two forms in current use for Johannesburg — "Johannesburg" (unchanged, the more common
      // current usage, e.g. Le Monde/France24) and the older adapted "Johannesbourg". Used the
      // former; surfacing rather than guessing since the two aren't interchangeable-obviously.
      johannesburg: { en: 'Johannesburg', ar: 'جوهانسبرغ', fr: 'Johannesburg', zh: '约翰内斯堡' },
    },
  },

  // ── STATS ── // reviewed
  stats: {
    corridorRegions: { en: 'Regions', ar: 'مناطق', fr: 'Régions', zh: '区域' },
    institutionalGates: { en: 'Governance Gates', ar: 'بوابات الحوكمة', fr: 'Portes de Gouvernance', zh: '治理关口' },
    // Renamed from `nonCustodial` — old key held "Non-Custodial Structure" paired with a "100%"
    // stat tile, which V2.0 removes. This key now pairs with stat-n "Phase I" to read "Phase I Foundation".
    phaseFoundation: { en: 'Foundation', ar: 'التأسيس', fr: 'Fondation', zh: '基础建设期' },
    // Renamed from `strategicArms` — old key held "Strategic Arms" paired with a "7" stat tile,
    // which V2.0 removes. This key now pairs with stat-n "Non-custodial" to read "Non-custodial
    // structure" (was "by design" — changed on main so the exact phrase "Non-custodial by design"
    // isn't repeated verbatim now that the hero also carries it as a tag).
    // reviewed (en changed on main to "structure", was "by
    // design" — ar/fr/zh below redrafted to match; fr "structure" is the correct French word
    // itself, an identical cognate, not left untranslated)
    nonCustodialByDesign: { en: 'structure', ar: 'بنية', fr: 'structure', zh: '结构' },
  },

  // ── MISSION ── // reviewed
  mission: {
    sectionTag: { en: 'Mission · Vision · Purpose', ar: 'الرسالة · الرؤية · الغاية', fr: 'Mission · Vision · Objectif', zh: '使命 · 愿景 · 宗旨' },
    heading: { en: 'Why SWAQAR Exists.', ar: 'لماذا توجد سواقر.', fr: 'Pourquoi SWAQAR Existe.', zh: 'SWAQAR 存在的意义。' },
    headingEm: { en: 'Where It Is Going.', ar: 'إلى أين تتجه.', fr: 'Où Elle Va.', zh: '前进的方向。' },
    missionTag: { en: 'Mission', ar: 'الرسالة', fr: 'Mission', zh: '使命' },
    missionH: { en: 'The Trusted Trade Coordination Layer', ar: 'طبقة تنسيق التجارة الموثوقة', fr: 'La Couche de Coordination Commerciale de Confiance', zh: '值得信赖的贸易协调层' },
    missionP: {
      en: 'To serve as the trusted Trade Coordination Layer through which verified cross-regional trade is coordinated between Africa, the Middle East, and Asia — with institutional governance, verified counterparties, and disciplined corridor execution.',
      ar: 'أن نكون طبقة تنسيق التجارة الموثوقة التي من خلالها يُنسَّق التبادل التجاري الموثق عبر الأقاليم بين أفريقيا والشرق الأوسط وآسيا — بحوكمة مؤسسية وأطراف مقابلة موثقة وتنفيذ منضبط للممرات.',
      fr: 'Servir de Couche de Coordination Commerciale de confiance à travers laquelle le commerce interrégional vérifié est coordonné entre l\'Afrique, le Moyen-Orient et l\'Asie — avec une gouvernance institutionnelle, des contreparties vérifiées et une exécution disciplinée des corridors.',
      zh: '作为值得信赖的贸易协调层，协调非洲、中东与亚洲之间经核验的跨区域贸易——依托机构治理、经核验的交易对手，以及严谨自律的通道执行。',
    },
    visionTag: { en: 'Vision', ar: 'الرؤية', fr: 'Vision', zh: '愿景' },
    visionH: { en: 'Corridors Where Trust Is a Standing Condition', ar: 'ممرات تكون فيها الثقة شرطاً دائماً', fr: 'Des Corridors où la Confiance est une Condition Permanente', zh: '信任成为常态条件的通道' },
    visionP: {
      en: 'That cross-regional trade between Africa, the Middle East, and Asia is conducted through coordinated corridors in which verification, institutional trust, and governance are standing conditions — and that SWAQAR Trade is the institution through which those corridors are coordinated.',
      ar: 'أن يُجرى التبادل التجاري العابر للأقاليم بين أفريقيا والشرق الأوسط وآسيا عبر ممرات منسقة تكون فيها التحقق والثقة المؤسسية والحوكمة شروطاً دائمة — وأن تكون SWAQAR Trade المؤسسة التي من خلالها تُنسَّق تلك الممرات.',
      fr: 'Que le commerce interrégional entre l\'Afrique, le Moyen-Orient et l\'Asie soit conduit à travers des corridors coordonnés dans lesquels la vérification, la confiance institutionnelle et la gouvernance sont des conditions permanentes — et que SWAQAR Trade soit l\'institution à travers laquelle ces corridors sont coordonnés.',
      zh: '非洲、中东与亚洲之间的跨区域贸易，通过协调一致的通道进行，在这些通道中，核验、机构信任与治理始终是常态条件——而 SWAQAR Trade 正是协调这些通道的机构。',
    },
    values: {
      governance: {
        name: { en: 'Governance', ar: 'الحوكمة', fr: 'Gouvernance', zh: '治理' },
        desc: {
          en: 'The operating substrate, not a compliance overlay. Every material decision moves through constitutional procedure.',
          ar: 'الركيزة التشغيلية، وليست طبقة امتثال إضافية. كل قرار جوهري يمر عبر إجراءات دستورية.',
          fr: 'Le substrat opérationnel, non une couche de conformité ajoutée. Chaque décision matérielle suit une procédure constitutionnelle.',
          zh: '治理是运营的基础，而非合规的附加层。每一项重大决策都遵循章程程序。',
        },
      },
      trust: {
        name: { en: 'Trust', ar: 'الثقة', fr: 'Confiance', zh: '信任' },
        desc: {
          en: 'Institutional infrastructure, not transactional outcome. Built through consistency, verification, and reciprocity.',
          ar: 'بنية تحتية مؤسسية، وليست نتيجة معاملات. تُبنى بالاتساق والتحقق والتبادلية.',
          fr: 'Une infrastructure institutionnelle, non un résultat transactionnel. Construite par la constance, la vérification et la réciprocité.',
          zh: '信任是一种机构性的基础设施，而非交易的结果，它建立在一致性、核验与互惠之上。',
        },
      },
      verification: {
        name: { en: 'Verification', ar: 'التحقق', fr: 'Vérification', zh: '核验' },
        desc: {
          en: 'Verification precedes execution, always. No corridor operates on unverified trust at any stage.',
          ar: 'التحقق يسبق التنفيذ دائماً. لا يعمل أي ممر على ثقة غير موثقة في أي مرحلة.',
          fr: 'La vérification précède toujours l\'exécution. Aucun corridor ne fonctionne sur une confiance non vérifiée, à quelque stade que ce soit.',
          zh: '核验始终先于执行。任何通道在任何阶段都不会基于未经核验的信任运作。',
        },
      },
      continuity: {
        name: { en: 'Institutional Continuity', ar: 'الاستمرارية المؤسسية', fr: 'Continuité Institutionnelle', zh: '机构连续性' },
        desc: {
          en: 'The institution must outlast every leadership generation that serves it. Identity is constitutional — not personal.',
          ar: 'يجب أن تدوم المؤسسة أطول من كل جيل قيادي يخدمها. الهوية دستورية — وليست شخصية.',
          fr: 'L\'institution doit survivre à chaque génération de dirigeants qui la sert. L\'identité est constitutionnelle, non personnelle.',
          zh: '机构的存续必须超越每一代为其服务的领导层。身份由章程界定，而非取决于个人。',
        },
      },
    },
    intentLabel: { en: 'Strategic Intent:', ar: 'النية الاستراتيجية:', fr: 'Intention Stratégique :', zh: '战略意图：' },
    // reviewed (en shortened by main's v2.1 trim; ar/fr/zh below
    // redrafted to match, dropping the "infrastructure layer..." clause the English also dropped)
    intentTxt: {
      en: 'SWAQAR intends to become the institutional reference point for corridor coordination governance across Africa, the Middle East, and Asia — a multi-decade intention, subject to governance discipline and counsel-validated milestones.',
      ar: 'تعتزم سواقر أن تصبح المرجع المؤسسي لحوكمة تنسيق الممرات عبر أفريقيا والشرق الأوسط وآسيا — نية تمتد لعقود، خاضعة لانضباط الحوكمة وللمعالم المعتمدة من المستشارين.',
      fr: 'SWAQAR a pour intention de devenir le point de référence institutionnel pour la gouvernance de la coordination des corridors à travers l\'Afrique, le Moyen-Orient et l\'Asie — une intention pluridécennale, soumise à la discipline de gouvernance et à des jalons validés par des conseillers.',
      zh: 'SWAQAR 志在成为非洲、中东与亚洲通道协调治理的机构性基准——这是一项跨越数十年的意图，须以治理纪律及经顾问核验的里程碑为准绳。',
    },
  },

  // ── IDENTITY ── // reviewed
  identity: {
    sectionTag: { en: 'Institutional Identity', ar: 'الهوية المؤسسية', fr: 'Identité Institutionnelle', zh: '机构身份' },
    heading: { en: 'A coordination layer,', ar: 'طبقة تنسيق،', fr: 'Une couche de coordination,', zh: '一个协调层，' },
    headingEm: { en: 'not a counterparty.', ar: 'وليست طرفاً مقابلاً.', fr: 'pas une contrepartie.', zh: '而非交易对手。' },
    desc: {
      en: 'SWAQAR Trade coordinates the institutions that perform cross-regional trade. Licensed parties retain their own regulated and commercial roles.',
      ar: 'تنسق SWAQAR Trade بين المؤسسات التي تنفذ التجارة العابرة للأقاليم. تحتفظ الأطراف المرخصة بأدوارها التنظيمية والتجارية الخاصة بها.',
      fr: 'SWAQAR Trade coordonne les institutions qui réalisent le commerce interrégional. Les parties agréées conservent leurs propres rôles réglementés et commerciaux.',
      zh: 'SWAQAR Trade 协调执行跨区域贸易的各机构。持牌方保留其各自受监管的商业角色。',
    },
    quote: {
      en: '"SWAQAR coordinates without owning. Verifies without brokering. Connects without custodying."',
      ar: '"سواقر تنسق دون امتلاك. تتحقق دون وساطة. تربط دون وصاية."',
      fr: '"SWAQAR coordonne sans posséder. Vérifie sans courtage. Connecte sans garde."',
      zh: '"SWAQAR 协调而不持有。核验而不经纪。连接而不托管。"',
    },
    // Stage 4 batch 2 — new labels for the "coordination layer, not a counterparty" diagram.
    // Verb distinction is deliberate and must not drift: actors on the corridor PERFORM/EXECUTE
    // (corridorLabel); SWAQAR, on its separate rail, COORDINATES (railLabel). User-supplied,
    // translator-approved.
    actor: {
      verification: { en: 'Licensed Verification', ar: 'جهات التحقق المرخّصة', fr: 'Organismes de vérification agréés', zh: '持牌验证机构' },
      banks: { en: 'Banks & Financial Institutions', ar: 'البنوك والمؤسسات المالية', fr: 'Banques et institutions financières', zh: '银行和金融机构' },
      logistics: { en: 'Logistics Operators', ar: 'مشغلو الخدمات اللوجستية', fr: 'Opérateurs logistiques', zh: '物流运营商' },
      counterparties: { en: 'Commercial Counterparties', ar: 'الأطراف التجارية', fr: 'Contreparties commerciales', zh: '商业交易对手' },
    },
    corridorLabel: { en: 'Licensed institutions perform.', ar: 'المؤسسات المرخّصة تنفّذ.', fr: 'Les institutions agréées exécutent.', zh: '持牌机构执行。' },
    railLabel: { en: 'SWAQAR coordinates.', ar: 'SWAQAR تنسّق.', fr: 'SWAQAR coordonne.', zh: 'SWAQAR 协调。' },
    badgeName: { en: 'SWAQAR Trade', ar: 'SWAQAR Trade', fr: 'SWAQAR Trade', zh: 'SWAQAR Trade' },
    badgeRole: { en: 'Founding Governance Doctrine', ar: 'عقيدة الحوكمة التأسيسية', fr: 'Doctrine de Gouvernance Fondatrice', zh: '创始治理理念' },
    medallionT: { en: 'Foundation', ar: 'التأسيس', fr: 'Fondation', zh: '基础' },
    isHead: { en: '✦ — SWAQAR IS', ar: '✦ — سواقر هي', fr: '✦ — SWAQAR EST', zh: '✦ — SWAQAR 是' },
    isNotHead: { en: '✕ — SWAQAR IS NOT', ar: '✕ — سواقر ليست', fr: '✕ — SWAQAR N\'EST PAS', zh: '✕ — SWAQAR 不是' },
    // Regenerated to match the current locked 4-item English list (old ar/fr still had the
    // pre-V2.0 8-item lists).
    isItems: {
      en: [
        'Trade Coordination Layer',
        'Governance-led',
        'Verification-first',
        'Asset-light & non-custodial',
      ],
      ar: [
        'طبقة تنسيق تجاري',
        'بقيادة الحوكمة',
        'التحقق أولاً',
        'خفيفة الأصول وغير وصائية',
      ],
      fr: [
        'Couche de Coordination Commerciale',
        'Pilotée par la gouvernance',
        'Vérification prioritaire',
        'À actifs légers et non-dépositaire',
      ],
      zh: [
        '贸易协调层',
        '治理主导',
        '核验优先',
        '轻资产且非托管',
      ],
    },
    isNotItems: {
      en: [
        'Trader or broker',
        'Bank or custodian',
        'Logistics operator',
        'Marketplace',
      ],
      ar: [
        'تاجر أو وسيط',
        'بنك أو جهة وصاية',
        'مشغل لوجستي',
        'سوق أو منصة تداول',
      ],
      fr: [
        'Négociant ou courtier',
        'Banque ou dépositaire',
        'Opérateur logistique',
        'Place de marché',
      ],
      zh: [
        '交易商或经纪商',
        '银行或托管方',
        '物流运营方',
        '交易市场',
      ],
    },
    revenueTag: { en: 'Revenue Model', ar: 'نموذج الإيرادات', fr: 'Modèle de Revenus', zh: '收入模式' },
    revenueTxt: {
      en: 'SWAQAR earns disclosed, fixed-scope governance coordination fees upon engagement mandate confirmation — structured as institutional fixed fees paid by corridor participants, not percentage-based commissions. SWAQAR holds no position in, and earns no fees from, the transactions it coordinates.',
      ar: 'تحصل سواقر على رسوم تنسيق حوكمة معلَنة ومحددة النطاق عند تأكيد تفويض الانخراط — مهيكلة كرسوم ثابتة مؤسسية يدفعها المشاركون في الممر، وليست عمولات مئوية. لا تحتفظ سواقر بأي مركز في المعاملات التي تنسقها ولا تكسب أي رسوم منها.',
      fr: 'SWAQAR perçoit des frais de coordination de gouvernance divulgués et à portée fixe lors de la confirmation du mandat d\'engagement — structurés comme des frais institutionnels fixes payés par les participants au corridor, et non comme des commissions basées sur un pourcentage. SWAQAR ne détient aucune position dans les transactions qu\'elle coordonne et n\'en perçoit aucune commission.',
      zh: 'SWAQAR 在参与授权确认后收取公开披露、范围固定的治理协调费——其结构为通道参与方支付的机构固定费用，而非按比例抽成的佣金。SWAQAR 在其协调的交易中不持有任何头寸，也不从中收取任何费用。',
    },
  },

  // ── GOVERNANCE ── // reviewed
  governance: {
    sectionTag: { en: 'Governance Structure', ar: 'هيكل الحوكمة', fr: 'Structure de Gouvernance', zh: '治理架构' },
    heading: { en: 'Three layers of institutional', ar: 'ثلاث طبقات من', fr: 'Trois couches de', zh: '三层机构' },
    headingEm: { en: 'governance oversight.', ar: 'الرقابة على الحوكمة المؤسسية.', fr: 'supervision institutionnelle.', zh: '治理监督。' },
    leadLine: {
      en: 'SWAQAR Trade operates under SWAQAR Group governance',
      ar: 'تعمل SWAQAR Trade تحت حوكمة SWAQAR Group',
      fr: 'SWAQAR Trade opère sous la gouvernance de SWAQAR Group',
      zh: 'SWAQAR Trade 在 SWAQAR Group 的治理框架下运营',
    },
    supremeCouncil: {
      name: { en: 'Supreme Council', ar: 'المجلس الأعلى', fr: 'Conseil Suprême', zh: '最高理事会' },
      desc: {
        en: 'The highest governance authority. Oversees constitutional mandate, reserved matters, and institutional continuity. Supermajority required on all mission-critical decisions.',
        ar: 'أعلى سلطة حوكمة. يشرف على التفويض الدستوري والمسائل المحفوظة والاستمرارية المؤسسية. يُشترط أغلبية ساحقة في جميع القرارات الحاسمة للمهمة.',
        fr: 'La plus haute autorité de gouvernance. Supervise le mandat constitutionnel, les questions réservées et la continuité institutionnelle. Une majorité qualifiée est requise pour toutes les décisions critiques.',
        zh: '最高治理权力机构，负责监督章程授权、保留事项与机构连续性。所有关乎核心使命的决策均须经绝对多数表决通过。',
      },
    },
    ethicsCouncil: {
      name: { en: 'Ethics & Oversight Council', ar: 'مجلس الأخلاقيات والرقابة', fr: 'Conseil d\'Éthique et de Supervision', zh: '道德与监督理事会' },
      desc: {
        // REVIEW: French "GAFI" is the correct local name for FATF and "CCG" for GCC — translator
        // may localize these; left verbatim pending their call.
        en: 'Independent institutional review body responsible for ethical governance, mission alignment, and counterparty conduct standards across all corridor engagements. KYC/AML discipline aligned with FATF guidance per jurisdiction.',
        ar: 'هيئة مراجعة مؤسسية مستقلة مسؤولة عن الحوكمة الأخلاقية ومواءمة المهمة ومعايير سلوك الأطراف المقابلة عبر جميع انخراطات الممرات. تلتزم انضباطية KYC/AML بإرشادات FATF وفق كل ولاية قضائية.',
        fr: 'Organe de révision institutionnelle indépendant responsable de la gouvernance éthique, de l\'alignement de la mission et des normes de conduite des contreparties dans tous les engagements de corridor. La discipline KYC/AML est alignée sur les lignes directrices du FATF, selon chaque juridiction.',
        zh: '独立的机构审查机构，负责各通道参与中的道德治理、使命一致性及交易对手行为准则。KYC/AML 合规纪律依据 FATF 指引，按各司法管辖区执行。',
      },
    },
    trustePanel: {
      name: { en: 'External Trustee Panel', ar: 'هيئة الأمناء الخارجية', fr: 'Panel de Fiduciaires Externes', zh: '外部受托委员会' },
      desc: {
        en: 'Senior external advisors providing independent institutional oversight. Ensures non-substitution discipline and multi-jurisdictional governance accountability.',
        ar: 'مستشارون خارجيون كبار يوفرون رقابة مؤسسية مستقلة. يضمنون انضباط عدم الإحلال والمساءلة في الحوكمة متعددة الولايات القضائية.',
        fr: 'Conseillers externes seniors assurant une supervision institutionnelle indépendante. Garantit la discipline de non-substitution et la redevabilité de gouvernance multi-juridictionnelle.',
        zh: '由资深外部顾问组成，提供独立的机构监督，确保不可替代原则的纪律性，并保障跨司法管辖区治理问责制。',
      },
    },
    noteTag: { en: 'Governance Position', ar: 'موقف الحوكمة', fr: 'Position de Gouvernance', zh: '治理立场' },
    noteTxt: {
      en: 'SWAQAR Trade operates under the governance of SWAQAR Group\'s Supreme Council, Ethics & Oversight Council, and External Trustee Panel. All corridor activation is subject to Supreme Council mandate and counsel-validated legal review. SWAQAR Trade is currently in Phase I — Foundation Stage and is not yet operationally active. Nothing on this site constitutes a financial solicitation, investment advice, or offer of any regulated service.',
      ar: 'تعمل SWAQAR Trade تحت حوكمة المجلس الأعلى ومجلس الأخلاقيات والرقابة وهيئة الأمناء الخارجية التابعة لـ SWAQAR Group. يخضع تفعيل جميع الممرات لتفويض المجلس الأعلى ومراجعة قانونية معتمدة من المستشارين. SWAQAR Trade حالياً في المرحلة الأولى — مرحلة التأسيس، ولم تكن نشطة تشغيلياً بعد. لا يُشكّل أي شيء على هذا الموقع طلباً مالياً أو مشورة استثمارية أو عرضاً لأي خدمة منظمة.',
      fr: 'SWAQAR Trade opère sous la gouvernance du Conseil Suprême, du Conseil d\'Éthique et de Supervision, et du Panel de Fiduciaires Externes de SWAQAR Group. Toute activation de corridor est soumise au mandat du Conseil Suprême et à un examen juridique validé par des conseillers. SWAQAR Trade est actuellement en Phase I — Étape Fondatrice et n\'est pas encore opérationnellement active. Rien sur ce site ne constitue une sollicitation financière, un conseil en investissement ou une offre de service réglementé.',
      zh: 'SWAQAR Trade 在 SWAQAR Group 最高理事会、道德与监督理事会及外部受托委员会的治理下运营。所有通道启动均须经最高理事会授权及顾问核验的法律审查。SWAQAR Trade 目前处于第一阶段——基础建设期，尚未正式投入运营。本网站上的任何内容均不构成任何形式的金融招揽、投资建议或受监管服务的要约。',
    },
  },

  // ── CONTACT ── // reviewed
  contact: {
    sectionTag: { en: 'Institutional Inquiry', ar: 'استفسار مؤسسي', fr: 'Demande Institutionnelle', zh: '机构咨询' },
    heading: { en: 'Submit a governed', ar: 'قدّم', fr: 'Soumettre une', zh: '提交受治理规范的' },
    headingEm: { en: 'institutional inquiry.', ar: 'استفساراً مؤسسياً منظماً.', fr: 'demande institutionnelle régie.', zh: '机构咨询。' },
    subDesc: {
      en: 'All inquiries reviewed against counterparty eligibility criteria. Submission does not initiate an engagement or create any obligation.',
      ar: 'تُراجع جميع الاستفسارات وفق معايير أهلية الأطراف المقابلة. لا يُنشئ تقديم الطلب انخراطاً أو أي التزام.',
      fr: 'Toutes les demandes sont examinées selon les critères d\'éligibilité des contreparties. La soumission n\'initie pas d\'engagement et ne crée aucune obligation.',
      zh: '所有咨询均依据交易对手资格标准进行审核。提交本表单不构成参与关系的开始，亦不产生任何义务。',
    },
    orgLabel: { en: 'Organisation / Institution', ar: 'المنظمة / المؤسسة', fr: 'Organisation / Institution', zh: '机构名称' },
    orgPlaceholder: { en: 'Full registered legal entity name', ar: 'الاسم القانوني الكامل للكيان المسجل', fr: 'Nom complet de l\'entité juridique enregistrée', zh: '注册法律实体全称' },
    repLabel: { en: 'Authorised Representative Name', ar: 'اسم الممثل المفوض', fr: 'Nom du Représentant Autorisé', zh: '授权代表姓名' },
    repPlaceholder: { en: 'Full name of authorised representative', ar: 'الاسم الكامل للممثل المفوض', fr: 'Nom complet du représentant autorisé', zh: '授权代表全名' },
    emailLabel: {
      en: 'Institutional Email Address',
      ar: 'عنوان البريد الإلكتروني المؤسسي',
      fr: 'Adresse E-mail Institutionnelle',
      zh: '机构电子邮箱地址',
    },
    emailPlaceholder: {
      en: 'Authorised institutional email address',
      ar: 'عنوان البريد الإلكتروني المؤسسي المفوض',
      fr: 'Adresse e-mail institutionnelle autorisée',
      zh: '经授权的机构电子邮箱地址',
    },
    categoryLabel: { en: 'Engagement Category', ar: 'فئة الانخراط', fr: 'Catégorie d\'Engagement', zh: '参与类别' },
    categoryDefault: { en: 'Select inquiry category', ar: 'اختر فئة الاستفسار', fr: 'Sélectionner la catégorie', zh: '请选择咨询类别' },
    categories: {
      en: ['Government / Ministerial Engagement','Banking / Trade-Finance Coordination','Verified Exporter — Corridor Participation','Verified Buyer — Corridor Participation','Verification / Compliance Partnership','Logistics / Infrastructure Partnership','Institutional Capital Partner Engagement','Other Institutional Inquiry','Phase II Interest — Building Materials & Industrial Goods','Phase II Interest — Agricultural Inputs & Commodity Processing'],
      ar: ['انخراط حكومي / وزاري','تنسيق مصرفي / تمويل تجاري','مُصدِّر موثق — مشاركة في الممر','مشترٍ موثق — مشاركة في الممر','شراكة تحقق / امتثال','شراكة لوجستية / بنية تحتية','انخراط شريك رأس مال مؤسسي','استفسار مؤسسي آخر','اهتمام بالمرحلة الثانية — مواد البناء والسلع الصناعية','اهتمام بالمرحلة الثانية — المدخلات الزراعية ومعالجة السلع'],
      fr: ['Engagement Gouvernemental / Ministériel','Coordination Bancaire / Financement Commercial','Exportateur Vérifié — Participation au Corridor','Acheteur Vérifié — Participation au Corridor','Partenariat Vérification / Conformité','Partenariat Logistique / Infrastructure','Engagement Partenaire Capital Institutionnel','Autre Demande Institutionnelle','Intérêt Phase II — Matériaux de Construction & Biens Industriels','Intérêt Phase II — Intrants Agricoles & Transformation des Matières Premières'],
      zh: ['政府 / 部委合作','银行业 / 贸易融资协调','经核验出口商——通道参与','经核验买方——通道参与','核验 / 合规合作伙伴关系','物流 / 基础设施合作伙伴关系','机构资本合作方参与','其他机构咨询','第二阶段意向——建筑材料与工业品','第二阶段意向——农业投入品与大宗商品加工'],
    },
    inquiryLabel: { en: 'Nature of Inquiry', ar: 'طبيعة الاستفسار', fr: 'Nature de la Demande', zh: '咨询性质' },
    inquiryPlaceholder: {
      en: 'Describe the institutional engagement purpose. Be specific.',
      ar: 'صف غرض الانخراط المؤسسي. كن محدداً.',
      fr: 'Décrivez l\'objectif de l\'engagement institutionnel. Soyez précis.',
      zh: '请描述机构参与的具体目的，内容应尽量详实明确。',
    },
    processTag: { en: 'What Happens After You Submit', ar: 'ماذا يحدث بعد تقديم الطلب', fr: 'Ce qui se Passe Après la Soumission', zh: '提交后的流程' },
    // reviewed (en tightened by main's v2.1 trim — both the
    // strong labels and rest text shortened; ar/fr/zh below redrafted to match)
    processSteps: {
      en: [
        { strong: 'Inquiry received', rest: ' — enters SWAQAR\'s institutional review queue.' },
        { strong: 'Eligibility review', rest: ' — assessed against counterparty criteria.' },
        { strong: 'Qualification gate', rest: ' — eligible counterparties begin the Partner Qualification process.' },
        { strong: 'Confirmed or declined', rest: ' — all outcomes communicated in writing.' },
      ],
      ar: [
        { strong: 'استلام الاستفسار', rest: ' — يدخل ضمن قائمة المراجعة المؤسسية لدى سواقر.' },
        { strong: 'مراجعة الأهلية', rest: ' — يُقيَّم وفق معايير أهلية الأطراف المقابلة.' },
        { strong: 'بوابة التأهل', rest: ' — تبدأ الأطراف المؤهلة عملية تأهل الشركاء.' },
        { strong: 'التأكيد أو الرفض', rest: ' — تُبلَّغ جميع النتائج كتابياً.' },
      ],
      fr: [
        { strong: 'Demande reçue', rest: ' — entre dans la file d\'examen institutionnel de SWAQAR.' },
        { strong: 'Examen d\'éligibilité', rest: ' — évaluée selon les critères d\'éligibilité des contreparties.' },
        { strong: 'Porte de qualification', rest: ' — les contreparties éligibles entament le processus de Qualification des Partenaires.' },
        { strong: 'Confirmé ou refusé', rest: ' — tous les résultats sont communiqués par écrit.' },
      ],
      zh: [
        { strong: '咨询接收', rest: '——进入 SWAQAR 的机构审查队列。' },
        { strong: '资格审查', rest: '——依据交易对手资格标准进行评估。' },
        { strong: '资格认证关口', rest: '——符合条件的交易对手启动合作伙伴资格认证流程。' },
        { strong: '确认或婉拒', rest: '——所有结果均以书面形式告知。' },
      ],
    },
    disclaimer: {
      en: 'All inquiries are reviewed against SWAQAR\'s counterparty eligibility criteria before any response is issued. Submission does not initiate an engagement, create contractual obligation, or constitute regulated advice of any kind.',
      ar: 'تُراجع جميع الاستفسارات وفق معايير أهلية الأطراف المقابلة لدى سواقر قبل إصدار أي رد. لا يُنشئ التقديم انخراطاً أو التزاماً تعاقدياً، ولا يُشكّل مشورة منظمة من أي نوع.',
      fr: 'Toutes les demandes sont examinées selon les critères d\'éligibilité des contreparties de SWAQAR avant qu\'une réponse ne soit émise. La soumission n\'initie pas d\'engagement, ne crée aucune obligation contractuelle et ne constitue en aucun cas un conseil réglementé.',
      zh: '所有咨询在给出任何回复前，均依据 SWAQAR 的交易对手资格标准进行审核。提交本表单不构成参与关系的开始，不产生任何合同义务，亦不构成任何形式的受监管建议。',
    },
    submitBtn: {
      en: 'Submit institutional inquiry',
      ar: 'تقديم استفسار مؤسسي',
      fr: 'Soumettre une demande institutionnelle',
      zh: '提交机构咨询',
    },
    submitBtnSending: { en: 'Submitting...', ar: 'جارٍ الإرسال...', fr: 'Envoi en cours...', zh: '正在提交...' },
    submitBtnSuccess: { en: 'Inquiry Submitted ✓', ar: 'تم إرسال الاستفسار ✓', fr: 'Demande Soumise ✓', zh: '咨询已提交 ✓' },
    successMsg: {
      en: 'Your inquiry has been received. An acknowledgement has been sent. SWAQAR will review your submission against counterparty eligibility criteria before any response is issued.',
      ar: 'تم استلام استفسارك. تم إرسال إشعار بالاستلام. ستراجع سواقر طلبك وفق معايير أهلية الأطراف المقابلة قبل إصدار أي رد.',
      fr: 'Votre demande a été reçue. Un accusé de réception vous a été envoyé. SWAQAR examinera votre soumission selon les critères d\'éligibilité des contreparties avant qu\'une réponse ne soit émise.',
      zh: '您的咨询已收到，确认回执已发送。SWAQAR 将依据交易对手资格标准审核您的提交内容，随后再作回复。',
    },
    errorMsg: {
      en: 'Please complete all fields before submitting. If the issue persists, contact support@swaqar.com directly.',
      ar: 'يرجى استكمال جميع الحقول قبل الإرسال. إذا استمرت المشكلة، يرجى التواصل مباشرة عبر support@swaqar.com.',
      fr: 'Veuillez renseigner tous les champs avant de soumettre. Si le problème persiste, contactez directement support@swaqar.com.',
      zh: '请填写所有字段后再提交。如问题仍然存在，请直接联系 support@swaqar.com。',
    },
    infoH: {
      en: 'Engage SWAQAR at institutional standard.',
      ar: 'تواصل مع سواقر بمعيار مؤسسي.',
      fr: 'Engagez SWAQAR selon un standard institutionnel.',
      zh: '以机构标准与 SWAQAR 展开合作。',
    },
    infoP: {
      en: 'SWAQAR Trade operates under strict counterparty verification and engagement protocols. Institutional engagement begins with verification, proceeds through the Four-Gate Model, and is governed at every stage by the Supreme Council mandate.',
      ar: 'تعمل SWAQAR Trade وفق بروتوكولات صارمة للتحقق من الأطراف المقابلة والانخراط. يبدأ الانخراط المؤسسي بالتحقق، ثم يتقدم عبر نموذج البوابات الأربع، ويخضع في كل مرحلة لتفويض المجلس الأعلى.',
      fr: 'SWAQAR Trade opère selon des protocoles stricts de vérification des contreparties et d\'engagement. L\'engagement institutionnel commence par la vérification, progresse à travers le Modèle à Quatre Portes, et est régi à chaque étape par le mandat du Conseil Suprême.',
      zh: 'SWAQAR Trade 依据严格的交易对手核验与参与协议运作。机构参与始于核验，经由四关协调模型推进，并在每一阶段均受最高理事会授权的治理。',
    },
    details: {
      hq: {
        label: { en: 'Location', ar: 'الموقع', fr: 'Localisation', zh: '所在地' },
        val: { en: 'Buea, Cameroon', ar: 'بويا، الكاميرون', fr: 'Buea, Cameroun', zh: '喀麦隆布埃亚' },
      },
      engType: {
        label: { en: 'Engagement Type', ar: 'نوع الانخراط', fr: 'Type d\'Engagement', zh: '参与类型' },
        val: {
          en: 'Institutional counterparts only. No retail engagement accepted.',
          ar: 'أطراف مؤسسية فقط. لا يُقبل أي انخراط تجزئي.',
          fr: 'Contreparties institutionnelles uniquement. Aucun engagement de détail n\'est accepté.',
          zh: '仅限机构交易对手，不接受零售层面的参与。',
        },
      },
      stage: {
        label: { en: 'Current Stage', ar: 'المرحلة الحالية', fr: 'Étape Actuelle', zh: '当前阶段' },
        val: {
          en: 'Phase I — Foundation. Not yet operationally active.',
          ar: 'المرحلة الأولى — التأسيس. غير نشطة تشغيلياً بعد.',
          fr: 'Phase I — Fondation. Pas encore opérationnellement active.',
          zh: '第一阶段——基础建设期。尚未正式投入运营。',
        },
      },
      contact: {
        label: { en: 'Institutional Contact', ar: 'جهة الاتصال المؤسسية', fr: 'Contact Institutionnel', zh: '机构联系方式' },
        val: { en: 'support@swaqar.com', ar: 'support@swaqar.com', fr: 'support@swaqar.com', zh: 'support@swaqar.com' },
      },
      legal: {
        label: { en: 'Legal Standing', ar: 'الوضع القانوني', fr: 'Statut Juridique', zh: '法律地位' },
        val: {
          en: 'SWAQAR Trade is the principal trade-coordination arm of SWAQAR Group, operating under counsel-validated governance frameworks across applicable jurisdictions.',
          ar: 'SWAQAR Trade هي الذراع الرئيسي لتنسيق التجارة التابع لـ SWAQAR Group، وتعمل في إطار حوكمة معتمد من المستشارين عبر الولايات القضائية المعمول بها.',
          fr: 'SWAQAR Trade est le bras principal de coordination commerciale de SWAQAR Group, opérant sous des cadres de gouvernance validés par des conseillers dans les juridictions applicables.',
          zh: 'SWAQAR Trade 是 SWAQAR Group 主要的贸易协调分支机构，在适用司法管辖区依据经顾问核验的治理框架运营。',
        },
      },
      legalPos: {
        label: { en: 'Legal Position', ar: 'الموقف القانوني', fr: 'Position Juridique', zh: '法律立场' },
        val: {
          en: 'Subject to counsel-validated legal and regulatory review in all applicable jurisdictions.',
          ar: 'يخضع لمراجعة قانونية وتنظيمية معتمدة من المستشارين في جميع الولايات القضائية المعمول بها.',
          fr: 'Soumis à un examen juridique et réglementaire validé par des conseillers dans toutes les juridictions applicables.',
          zh: '须在所有适用司法管辖区接受经顾问核验的法律与监管审查。',
        },
      },
    },
  },

  // ── FOOTER ── // reviewed
  footer: {
    desc: {
      en: 'A governance-led, non-custodial Trade Coordination Layer governing verification, institutional trust, corridor execution, and intelligence across Africa, the Middle East, and Asia.',
      ar: 'طبقة تنسيق تجاري رائدة بالحوكمة وغير وصائية، تحكم التحقق والثقة المؤسسية وتنفيذ الممرات والاستخبارات عبر أفريقيا والشرق الأوسط وآسيا.',
      fr: 'Une Couche de Coordination Commerciale à gouvernance structurée et non-dépositaire, régissant la vérification, la confiance institutionnelle, l\'exécution des corridors et le renseignement à travers l\'Afrique, le Moyen-Orient et l\'Asie.',
      zh: '一个以治理为主导、非托管的贸易协调层，负责协调非洲、中东与亚洲之间的核验、机构信任、通道执行与情报工作。',
    },
    model: { en: 'The Model', ar: 'النموذج', fr: 'Le Modèle', zh: '协调模型' },
    engage: { en: 'Engage', ar: 'تواصل', fr: 'Engager', zh: '联系我们' },
    corridorRegions: { en: 'Corridor Regions', ar: 'مناطق الممرات', fr: 'Régions de Corridors', zh: '通道区域' },
    legal: {
      en: 'SWAQAR Trade is a governance-led, non-custodial Trade Coordination Layer. This website is for institutional information only and does not constitute an offer, solicitation, recommendation, or investment advice of any kind. SWAQAR Trade does not custody funds, hold title to goods, own cargo, operate logistics assets, act as a broker, trader, or commercial agent, or replace regulated financial, banking, customs, or logistics operators. Engagement with SWAQAR Trade is subject to jurisdictional legal review, counsel-validated due diligence per jurisdiction, and institutional governance approval. For institutional audiences only.',
      ar: 'SWAQAR Trade هي طبقة تنسيق تجاري رائدة بالحوكمة وغير وصائية. هذا الموقع لأغراض المعلومات المؤسسية فقط، ولا يُشكّل عرضاً أو طلباً أو توصية أو مشورة استثمارية من أي نوع. لا تحتفظ SWAQAR Trade بأموال، ولا تمتلك حق ملكية على بضائع، ولا تمتلك شحنات، ولا تشغّل أصولاً لوجستية، ولا تتصرف كوسيط أو تاجر أو وكيل تجاري، ولا تحل محل المشغلين الماليين أو المصرفيين أو الجمركيين أو اللوجستيين المنظمين. يخضع الانخراط مع SWAQAR Trade لمراجعة قانونية حسب الولاية القضائية، وعناية واجبة معتمدة من المستشارين لكل ولاية قضائية، وموافقة الحوكمة المؤسسية. للجماهير المؤسسية فقط.',
      fr: 'SWAQAR Trade est une Couche de Coordination Commerciale à gouvernance structurée et non-dépositaire. Ce site est uniquement destiné à l\'information institutionnelle et ne constitue en aucun cas une offre, une sollicitation, une recommandation ou un conseil en investissement. SWAQAR Trade ne détient pas de fonds, ne détient pas de titre de propriété sur des marchandises, ne possède pas de fret, n\'exploite pas d\'actifs logistiques, n\'agit pas en tant que courtier, négociant ou agent commercial, et ne se substitue pas aux opérateurs financiers, bancaires, douaniers ou logistiques réglementés. L\'engagement avec SWAQAR Trade est soumis à un examen juridique selon la juridiction, à une diligence raisonnable validée par des conseillers pour chaque juridiction, et à l\'approbation de la gouvernance institutionnelle. Réservé aux publics institutionnels.',
      zh: 'SWAQAR Trade 是一个以治理为主导、非托管的贸易协调层。本网站仅用于机构信息用途，不构成任何形式的要约、招揽、推荐或投资建议。SWAQAR Trade 不托管资金、不持有货物所有权、不拥有货载、不运营物流资产、不担任经纪商、交易商或商业代理，也不替代受监管的金融、银行、海关或物流运营方。与 SWAQAR Trade 的任何参与均须接受相应司法管辖区的法律审查、经顾问核验的尽职调查，以及机构治理批准。仅面向机构受众。',
    },
    copyright: { en: 'SWAQAR Group · All rights reserved', ar: 'SWAQAR Group · جميع الحقوق محفوظة', fr: 'SWAQAR Group · Tous droits réservés', zh: 'SWAQAR Group · 版权所有' },
    parentLink: { en: 'Part of SWAQAR Group', ar: 'جزء من SWAQAR Group', fr: 'Filiale de SWAQAR Group', zh: 'SWAQAR Group 旗下机构' },
    footerLinks: {
      corridorArch: { en: 'Corridor Architecture', ar: 'هيكل الممرات', fr: 'Architecture des Corridors', zh: '通道架构' },
      gateModel: { en: '4-Gate Model', ar: 'نموذج البوابات الأربع', fr: 'Modèle à 4 Portes', zh: '四关模型' },
      govArch: { en: 'Governance Architecture', ar: 'هيكل الحوكمة', fr: 'Architecture de Gouvernance', zh: '治理架构' },
      strategicArms: { en: 'Strategic Arms', ar: 'الأذرع الاستراتيجية', fr: 'Bras Stratégiques', zh: '战略板块' },
      instInquiry: { en: 'Institutional Inquiry', ar: 'استفسار مؤسسي', fr: 'Demande Institutionnelle', zh: '机构咨询' },
      identity: { en: 'Identity', ar: 'الهوية', fr: 'Identité', zh: '身份' },
      reviewGov: { en: 'Review Governance', ar: 'مراجعة الحوكمة', fr: 'Consulter la Gouvernance', zh: '查看治理架构' },
      jeddah: { en: 'Buea · Cameroon', ar: 'بويا، الكاميرون', fr: 'Buea, Cameroun', zh: '喀麦隆布埃亚' },
      africaME: { en: 'Africa ↔ Middle East', ar: 'أفريقيا ↔ الشرق الأوسط', fr: 'Afrique ↔ Moyen-Orient', zh: '非洲 ↔ 中东' },
      meAsia: { en: 'Middle East ↔ Asia', ar: 'الشرق الأوسط ↔ آسيا', fr: 'Moyen-Orient ↔ Asie', zh: '中东 ↔ 亚洲' },
      africaAsia: { en: 'Africa ↔ Asia', ar: 'أفريقيا ↔ آسيا', fr: 'Afrique ↔ Asie', zh: '非洲 ↔ 亚洲' },
      gateProcess: { en: '4-Gate Process', ar: 'عملية البوابات الأربع', fr: 'Processus à 4 Portes', zh: '四关流程' },
    },
    privacyPolicy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية', fr: 'Politique de Confidentialité', zh: '隐私政策' },
    secondaryLine: { en: 'Counsel-Cleared · Governance-Led · Non-Custodial', ar: 'معتمد من المستشارين · بقيادة الحوكمة · غير وصائي', fr: 'Validé par des Conseillers · Piloté par la Gouvernance · Non-Dépositaire', zh: '经顾问核验 · 治理主导 · 非托管' },
    badges: {
      en: ['Asset-Light', 'Non-Custodial', 'Verification-Governed'],
      ar: ['خفيف الأصول', 'غير وصائي', 'تحت حوكمة التحقق'],
      fr: ['Actifs Légers', 'Non-Dépositaire', 'Gouverné par la Vérification'],
      zh: ['轻资产', '非托管', '核验治理'],
    },
  },

  // ── IDENTITY PILLARS ── // reviewed
  identityPillars: {
    // V2.0: replaced the old four-pillars set (Governance-Led / Verification-First / Asset-Light /
    // Non-Custodial) with the locked "four functions". No locked descriptions were supplied for
    // these four function names — desc left blank in every locale (not invented), matching .en.
    items: {
      en: [
        { name: 'Verification', desc: '' },
        { name: 'Documentation', desc: '' },
        { name: 'Synchronization', desc: '' },
        { name: 'Governance', desc: '' },
      ],
      ar: [
        { name: 'التحقق', desc: '' },
        { name: 'التوثيق', desc: '' },
        { name: 'التزامن', desc: '' },
        { name: 'الحوكمة', desc: '' },
      ],
      fr: [
        { name: 'Vérification', desc: '' },
        { name: 'Documentation', desc: '' },
        { name: 'Synchronisation', desc: '' },
        { name: 'Gouvernance', desc: '' },
      ],
      zh: [
        { name: '核验', desc: '' },
        { name: '单证', desc: '' },
        { name: '同步', desc: '' },
        { name: '治理', desc: '' },
      ],
    },
  },

  // ── MARQUEE ── // reviewed
  marquee: {
    items: {
      en: ['Governance-Led','Verification-First','Asset-Light','Non-Custodial','Africa ⇄ Middle East ⇄ Asia','Four-Gate Model','Phase I — Foundation Stage','Counsel-Validated','Supreme Council Governed'],
      ar: ['بقيادة الحوكمة','التحقق أولاً','خفيف الأصول','غير وصائي','أفريقيا ⇄ الشرق الأوسط ⇄ آسيا','نموذج البوابات الأربع','المرحلة الأولى — مرحلة التأسيس','معتمد من المستشارين','تحت حوكمة المجلس الأعلى'],
      fr: ['Piloté par la Gouvernance','Vérification Prioritaire','Actifs Légers','Non-Dépositaire','Afrique ⇄ Moyen-Orient ⇄ Asie','Modèle à Quatre Portes','Phase I — Étape Fondatrice','Validé par des Conseillers','Régi par le Conseil Suprême'],
      zh: ['治理主导','核验优先','轻资产','非托管','非洲 ⇄ 中东 ⇄ 亚洲','四关协调模型','第一阶段 — 基础建设期','经顾问核验','最高理事会治理'],
    },
  },

  // ── CORRIDORS ── // reviewed
  corridors: {
    sectionTag: { en: 'Corridor Architecture', ar: 'هيكل الممرات', fr: 'Architecture des Corridors', zh: '通道架构' },
    // Regenerated to match the current locked English (old ar/fr still translated the pre-V2.0
    // "Three Regions." / "One Coordination Layer.").
    heading: { en: 'Three interconnected corridor regions.', ar: 'ثلاث مناطق ممرات مترابطة.', fr: 'Trois régions de corridors interconnectées.', zh: '三大互联通道区域。' },
    headingEm: { en: 'One coordination layer.', ar: 'طبقة تنسيق واحدة.', fr: 'Une seule couche de coordination.', zh: '一个协调层。' },
    subDesc: {
      en: 'SWAQAR coordinates institutional trust, verification, and execution readiness across the Africa ↔ Middle East ↔ Asia corridor system. Each region plays a defined role. SWAQAR\'s coordination layer operates above licensed operators across all three — not within them.',
      ar: 'تنسق سواقر الثقة المؤسسية والتحقق وجاهزية التنفيذ عبر نظام ممرات أفريقيا ↔ الشرق الأوسط ↔ آسيا. تؤدي كل منطقة دوراً محدداً. تعمل طبقة تنسيق سواقر فوق المشغلين المرخصين في المناطق الثلاث — وليس ضمنهم.',
      fr: 'SWAQAR coordonne la confiance institutionnelle, la vérification et la préparation à l\'exécution à travers le système de corridors Afrique ↔ Moyen-Orient ↔ Asie. Chaque région joue un rôle défini. La couche de coordination de SWAQAR opère au-dessus des opérateurs agréés dans les trois régions — non en leur sein.',
      zh: 'SWAQAR 在非洲 ↔ 中东 ↔ 亚洲通道体系中协调机构信任、核验与执行就绪状态。每个区域承担明确的角色。SWAQAR 的协调层运作于三地持牌运营方之上，而非其内部。',
    },
    map: {
      africa: { en: 'AFRICA', ar: 'أفريقيا', fr: 'AFRIQUE', zh: '非洲' },
      africaSub: { en: '', ar: '', fr: '', zh: '' },
      middleEast: { en: 'MIDDLE EAST', ar: 'الشرق الأوسط', fr: 'MOYEN-ORIENT', zh: '中东' },
      middleEastSub: { en: 'JEDDAH', ar: 'جدة', fr: 'DJEDDAH', zh: '吉达' },
      asia: { en: 'ASIA', ar: 'آسيا', fr: 'ASIE', zh: '亚洲' },
      asiaSub: { en: '', ar: '', fr: '', zh: '' },
    },
    tierOneTitle: { en: 'Current Strategic Focus — Phase I Active Pilot Corridor', ar: 'التركيز الاستراتيجي الحالي — الممر التجريبي النشط في المرحلة الأولى', fr: 'Focus Stratégique Actuel — Corridor Pilote Actif de Phase I', zh: '当前战略重点——第一阶段活跃试点通道' },
    tierOneBadge: { en: 'Active', ar: 'نشط', fr: 'Actif', zh: '进行中' },
    govNoteTag: { en: 'Governance Note — Phase I Candidate Corridor', ar: 'ملاحظة الحوكمة — ممر مرشح للمرحلة الأولى', fr: 'Note de Gouvernance — Corridor Candidat de Phase I', zh: '治理说明——第一阶段候选通道' },
    govNoteTxt: {
      en: 'This corridor is SWAQAR Trade\'s designated Phase I pilot corridor, currently in preparation. No corridor is operationally active. Activation is subject to completion of the Four-Gate Model, counterparty qualification through the Partner Qualification Gate, banking and TIC panel readiness, and Supreme Council mandate. This is a governance-architecture illustration only — subject to counsel-validated legal, regulatory, and governance review before any activation proceeds.',
      ar: 'هذا الممر هو الممر التجريبي المخصص للمرحلة الأولى لدى SWAQAR Trade، وهو حالياً قيد الإعداد. لا يوجد ممر نشط تشغيلياً. يخضع التفعيل لاستكمال نموذج البوابات الأربع، وتأهيل الأطراف المقابلة عبر بوابة تأهل الشركاء، وجاهزية لجنة البنوك ولجنة TIC، وتفويض المجلس الأعلى. هذا توضيح لهيكل الحوكمة فقط — يخضع لمراجعة قانونية وتنظيمية ومراجعة حوكمة معتمدة من المستشارين قبل المضي في أي تفعيل.',
      fr: 'Ce corridor est le corridor pilote désigné de Phase I de SWAQAR Trade, actuellement en préparation. Aucun corridor n\'est opérationnellement actif. L\'activation est soumise à l\'achèvement du Modèle à Quatre Portes, à la qualification des contreparties via la Porte de Qualification des Partenaires, à la préparation du panel bancaire et TIC, ainsi qu\'au mandat du Conseil Suprême. Il s\'agit uniquement d\'une illustration d\'architecture de gouvernance — soumise à un examen juridique, réglementaire et de gouvernance validé par des conseillers avant toute activation.',
      zh: '该通道是 SWAQAR Trade 指定的第一阶段试点通道，目前正在筹备中。目前尚无任何通道处于实际运营状态。启动须完成四关协调模型、通过合作伙伴资格认证关口完成交易对手资格认定、银行及 TIC 小组就绪，以及最高理事会授权。此处仅为治理架构示意——在任何启动推进之前，须经顾问核验的法律、监管与治理审查。',
    },
    phaseLabel: { en: 'Agriculture & Food Security · Africa ↔ Middle East ↔ Asia', ar: 'الزراعة والأمن الغذائي · أفريقيا ↔ الشرق الأوسط ↔ آسيا', fr: 'Agriculture & Sécurité Alimentaire · Afrique ↔ Moyen-Orient ↔ Asie', zh: '农业与粮食安全 · 非洲 ↔ 中东 ↔ 亚洲' },
    activeDesc: {
      en: 'Coordinating agricultural commodity flows between verified African exporters and institutional buyers in the Middle East and Asia. SWAQAR coordinates the institutional conditions — it does not trade, broker, hold title, or act as logistics operator at any stage.',
      ar: 'تنسيق تدفقات السلع الزراعية بين المصدرين الأفارقة الموثقين والمشترين المؤسسيين في الشرق الأوسط وآسيا. تنسق سواقر الشروط المؤسسية — ولا تتاجر أو تتوسط أو تحمل الملكية أو تعمل كمشغل لوجستي في أي مرحلة.',
      fr: 'Coordination des flux de matières premières agricoles entre des exportateurs africains vérifiés et des acheteurs institutionnels au Moyen-Orient et en Asie. SWAQAR coordonne les conditions institutionnelles — elle ne négocie pas, n\'agit pas comme courtier, ne détient aucun titre de propriété et n\'agit comme opérateur logistique à aucun stade.',
      zh: '协调经核验的非洲出口商与中东、亚洲机构买家之间的农产品流动。SWAQAR 协调的是机构层面的条件——在任何阶段均不从事交易、不担任经纪方、不持有所有权，也不充当物流运营方。',
    },
    // MERGE NOTE: corridors.roles and corridors.coordinates were deleted here, following main —
    // main removed both keys (and their JSX) in the v2.1 trim; this branch's fully-translated
    // ar/fr/zh for them are discarded along with the English, since the content no longer renders
    // anywhere.
    activeFooterTxt: {
      en: 'SWAQAR holds no title, cargo, funds, or physical assets in this corridor at any stage. Licensed parties execute; counterparties contract directly with each other. SWAQAR coordinates the institutional conditions under which they engage.',
      ar: 'لا تحتفظ سواقر بأي حق ملكية أو شحنات أو أموال أو أصول مادية في هذا الممر في أي مرحلة. تنفذ الأطراف المرخصة؛ وتتعاقد الأطراف المقابلة مباشرة فيما بينها. تنسق سواقر الشروط المؤسسية التي بموجبها تتعامل.',
      fr: 'SWAQAR ne détient aucun titre de propriété, fret, fonds ou actif physique dans ce corridor, à aucun stade. Les parties agréées exécutent ; les contreparties contractent directement entre elles. SWAQAR coordonne les conditions institutionnelles dans lesquelles elles s\'engagent.',
      zh: 'SWAQAR 在该通道的任何阶段均不持有所有权、货载、资金或实物资产。持牌方负责执行；交易对手之间直接订立合同。SWAQAR 协调的是双方据以参与的机构层面条件。',
    },
    activeFooterTags: {
      en: ['Agriculture & Food Security', 'Verification-Governed', 'Non-Custodial', 'Governance Gates'],
      ar: ['الزراعة والأمن الغذائي', 'تحت حوكمة التحقق', 'غير وصائي', 'بوابات الحوكمة'],
      fr: ['Agriculture & Sécurité Alimentaire', 'Gouverné par la Vérification', 'Non-Dépositaire', 'Portes de Gouvernance'],
      zh: ['农业与粮食安全', '核验治理', '非托管', '治理关口'],
    },
  },

  // ── GATES ── // reviewed
  gates: {
    sectionTag: { en: 'Corridor Entry Protocol', ar: 'بروتوكول دخول الممر', fr: 'Protocole d\'Entrée du Corridor', zh: '通道准入协议' },
    heading: { en: 'Every coordinated corridor moves through', ar: 'كل ممر منسق يمر عبر', fr: 'Chaque corridor coordonné passe par', zh: '每一条经协调的通道均须经历' },
    headingEm: { en: 'four governance gates.', ar: 'أربع بوابات حوكمة.', fr: 'quatre portes de gouvernance.', zh: '四道治理关口。' },
    // Regenerated to match the current locked English (the old ar/fr still translated the
    // pre-V2.0 subDesc — "no engagement proceeds until all four gates are passed").
    subDesc: {
      en: 'SWAQAR coordinates the conditions for disciplined corridor execution; it does not guarantee commercial, financial or operational outcomes.',
      ar: 'تنسق سواقر الشروط اللازمة لتنفيذ منضبط للممرات؛ ولا تضمن أي نتائج تجارية أو مالية أو تشغيلية.',
      fr: 'SWAQAR coordonne les conditions d\'une exécution disciplinée des corridors ; elle ne garantit aucun résultat commercial, financier ou opérationnel.',
      zh: 'SWAQAR 协调实现通道纪律性执行所需的各项条件；但不对任何商业、财务或运营结果作出保证。',
    },
    // RESOLVED (was REVIEW): gate stage names are descriptive, not brand names — now translated
    // in ar/fr (zh still has the English stage names from the prior pass; not touched here since
    // only ar/fr were named in this decision — flagging in the report for your call on zh too).
    gatesList: {
      en: [
        { tag: '01', name: 'Pre-Activation', desc: 'Qualify readiness.', chips: ['Counterparties', 'Verification', 'Framework'] },
        { tag: '02', name: 'Activation', desc: 'Governance authorises coordination.', chips: ['Approval', 'Defined Scope'] },
        { tag: '03', name: 'Live Coordination', desc: 'Coordinate the corridor.', chips: ['Verification', 'Documentation', 'Synchronisation', 'Oversight'] },
        { tag: '04', name: 'Renewal or Disengagement', desc: 'Review what happens next.', chips: ['Renew', 'Reset', 'Disengage'] },
      ],
      ar: [
        { tag: '01', name: 'ما قبل التفعيل', desc: 'تأهيل الجاهزية.' },
        { tag: '02', name: 'التفعيل', desc: 'تأذن الحوكمة بالتنسيق.' },
        // REVIEW: "Live Coordination" rendered as "التنسيق المباشر" (direct/ongoing coordination)
        // — a reasonable reading of "live" here as "active/ongoing" rather than broadcast-live;
        // translator may prefer an alternative such as "التنسيق الجاري".
        { tag: '03', name: 'التنسيق المباشر', desc: 'تنسيق الممر.' },
        { tag: '04', name: 'التجديد أو الانسحاب', desc: 'مراجعة الخطوة التالية.' },
      ],
      fr: [
        { tag: '01', name: 'Pré-Activation', desc: 'Qualifier la préparation.' },
        { tag: '02', name: 'Activation', desc: 'La gouvernance autorise la coordination.' },
        // REVIEW: "Live Coordination" rendered as "Coordination Active" (ongoing/active
        // coordination) rather than a literal "en direct" (which reads as broadcast-live in
        // French) — translator may prefer "Coordination en Cours" instead.
        { tag: '03', name: 'Coordination Active', desc: 'Coordonner le corridor.' },
        { tag: '04', name: 'Renouvellement ou Désengagement', desc: 'Examiner la suite à donner.' },
      ],
      zh: [
        { tag: '01', name: '预激活', desc: '资格就绪评估。', chips: ['交易对手', '核验', '框架'] },
        { tag: '02', name: '激活', desc: '治理机构授权协调。', chips: ['批准', '界定范围'] },
        // REVIEW: "Live Coordination" rendered as "持续协调" (ongoing/continuous coordination),
        // matching the "active/ongoing" reading chosen for ar/fr rather than a literal "实时协调"
        // (real-time), which reads closer to broadcast/streaming — translator may prefer the latter.
        { tag: '03', name: '持续协调', desc: '协调通道运行。', chips: ['核验', '单证', '同步', '监督'] },
        { tag: '04', name: '续期或退出', desc: '审议后续走向。', chips: ['续期', '重置', '退出'] },
      ],
    },
  },

  // ── ARMS ── // reviewed
  arms: {
    sectionTag: { en: 'Institutional Architecture', ar: 'الهيكل المؤسسي', fr: 'Architecture Institutionnelle', zh: '机构架构' },
    heading: { en: 'Seven', ar: 'سبعة', fr: 'Sept', zh: '七大' },
    headingEm: { en: 'Strategic Arms.', ar: 'الأذرع الاستراتيجية.', fr: 'Bras Stratégiques.', zh: '战略板块。' },
    headingLine2: { en: 'One Architecture.', ar: 'هيكل واحد.', fr: 'Une Architecture.', zh: '一体化架构。' },
    abxTag: { en: 'Institutional Foundation', ar: 'الأساس المؤسسي', fr: 'Fondation Institutionnelle', zh: '机构基础' },
    abxH: { en: 'Built for a multi-decade institutional horizon.', ar: 'مبنية لأفق مؤسسي متعدد العقود.', fr: 'Construite pour un horizon institutionnel pluridécennal.', zh: '为跨越数十年的机构远景而构建。' },
    abxP: {
      en: 'SWAQAR is not a startup seeking scale. It is a coordination institution being built to last — verification-governed, governance-anchored, designed to compound institutional credibility over time, not transaction volume.',
      ar: 'سواقر ليست شركة ناشئة تسعى للنمو. إنها مؤسسة تنسيق مبنية لتدوم — محكومة بالتحقق، وراسخة في الحوكمة، ومصممة لتراكم المصداقية المؤسسية بمرور الوقت، لا لتضخيم حجم المعاملات.',
      fr: 'SWAQAR n\'est pas une start-up en quête de croissance rapide. C\'est une institution de coordination construite pour durer — gouvernée par la vérification, ancrée dans la gouvernance, conçue pour accumuler la crédibilité institutionnelle au fil du temps, et non le volume transactionnel.',
      zh: 'SWAQAR 并非追求规模扩张的初创公司，而是一家为长久存续而构建的协调机构——以核验为治理准绳，以治理为立身之本，旨在随时间积累机构信誉，而非交易量。',
    },
    // Aligned to mirror the main stat strip exactly (t.stats) — same four tiles, same order,
    // dropping the old "100%" / "IV Gates" wording per V2.0.
    abxMetrics: {
      en: [['3','Regions'],['4','Governance Gates'],['Phase I','Foundation'],['Non-custodial','by design']],
      ar: [['3','مناطق'],['4','بوابات الحوكمة'],['المرحلة الأولى','التأسيس'],['غير وصائي','بالتصميم']],
      fr: [['3','Régions'],['4','Portes de Gouvernance'],['Phase I','Fondation'],['Non-custodial','par conception']],
      zh: [['3','区域'],['4','治理关口'],['第一阶段','基础建设期'],['非托管','设计使然']],
    },
    armsList: {
      en: [
        ['01','SWAQAR Corridors of Trust','Core corridor governance across Africa, the Middle East, and Asia — verification-governed and non-custodial.'],
        ['02','SWAQAR Intelligence','Corridor intelligence, market signals, and counterparty risk data — lawfully gathered, ethically sourced.'],
        ['03','SWAQAR Capital & Trade Finance Coordination','Coordinating access to licensed trade-finance institutions. Never custodial. Never a financial principal.'],
        ['04','SWAQAR Infrastructure & Logistics Coordination','Documentation alignment and stakeholder synchronization with licensed logistics and infrastructure operators. No asset ownership, no operational logistics.'],
        ['05','SWAQAR Digital Systems','Governance-supporting digital systems for corridor coordination. No platform, no marketplace, no autonomous execution.'],
        ['06','SWAQAR Institutional Advisory','Counsel-validated advisory on corridor architecture, governance design, and institutional positioning. Governance-level engagement, not transaction-level.'],
        ['07','SWAQAR Industrial & Trade Development','Coordination support for industrial and trade-development ecosystems across corridor regions. Partnership-led; no asset ownership.'],
      ],
      // RESOLVED (was REVIEW): arm titles are brand names for each business line, same category
      // as "Corridors of Trust" — the full "SWAQAR ___" name is kept verbatim in English across
      // every locale; only the description (3rd element) is localized.
      ar: [
        ['٠١','SWAQAR Corridors of Trust','حوكمة أساسية للممرات عبر أفريقيا والشرق الأوسط وآسيا — تحت حوكمة التحقق وغير وصائية.'],
        ['٠٢','SWAQAR Intelligence','استخبارات الممرات وإشارات السوق وبيانات مخاطر الأطراف المقابلة — مجمَعة بشكل قانوني ومصدرها أخلاقي.'],
        ['٠٣','SWAQAR Capital & Trade Finance Coordination','تنسيق الوصول إلى مؤسسات التمويل التجاري المرخصة. لا وصاية أبداً، ولا صفة مدير مالي أبداً.'],
        ['٠٤','SWAQAR Infrastructure & Logistics Coordination','مواءمة التوثيق وتزامن أصحاب المصلحة مع مشغلي اللوجستيات والبنية التحتية المرخصين. لا ملكية للأصول، ولا لوجستيات تشغيلية.'],
        ['٠٥','SWAQAR Digital Systems','أنظمة رقمية داعمة للحوكمة لتنسيق الممرات. لا منصة، ولا سوق، ولا تنفيذ ذاتي.'],
        ['٠٦','SWAQAR Institutional Advisory','استشارات معتمدة من المستشارين حول هيكل الممرات وتصميم الحوكمة والتموضع المؤسسي. انخراط على مستوى الحوكمة، لا على مستوى المعاملات.'],
        ['٠٧','SWAQAR Industrial & Trade Development','دعم تنسيقي لمنظومات التنمية الصناعية والتجارية عبر مناطق الممرات. بقيادة الشراكة؛ دون ملكية للأصول.'],
      ],
      fr: [
        ['01','SWAQAR Corridors of Trust','Gouvernance centrale des corridors à travers l\'Afrique, le Moyen-Orient et l\'Asie — gouvernée par la vérification et non-dépositaire.'],
        ['02','SWAQAR Intelligence','Renseignement sur les corridors, signaux de marché et données de risque des contreparties — collectés légalement et sourcés de manière éthique.'],
        ['03','SWAQAR Capital & Trade Finance Coordination','Coordination de l\'accès aux institutions de financement commercial agréées. Jamais dépositaire. Jamais principal financier.'],
        ['04','SWAQAR Infrastructure & Logistics Coordination','Alignement de la documentation et synchronisation des parties prenantes avec des opérateurs logistiques et d\'infrastructure agréés. Aucune propriété d\'actifs, aucune logistique opérationnelle.'],
        ['05','SWAQAR Digital Systems','Systèmes numériques au service de la gouvernance pour la coordination des corridors. Aucune plateforme, aucune place de marché, aucune exécution autonome.'],
        ['06','SWAQAR Institutional Advisory','Conseil validé par des conseillers sur l\'architecture des corridors, la conception de la gouvernance et le positionnement institutionnel. Engagement au niveau de la gouvernance, non au niveau transactionnel.'],
        ['07','SWAQAR Industrial & Trade Development','Soutien à la coordination des écosystèmes de développement industriel et commercial à travers les régions de corridors. Piloté par le partenariat ; aucune propriété d\'actifs.'],
      ],
      zh: [
        ['01','SWAQAR Corridors of Trust','覆盖非洲、中东与亚洲的核心通道治理——以核验为治理基础，非托管。'],
        ['02','SWAQAR Intelligence', '通道情报、市场信号及交易对手风险数据——合法采集，来源合乎道德规范。'],
        ['03','SWAQAR Capital & Trade Finance Coordination','协调机构获取持牌贸易融资机构的渠道。绝不托管，绝不充当金融主体。'],
        ['04','SWAQAR Infrastructure & Logistics Coordination','与持牌物流及基础设施运营方进行单证对接与相关方同步。不持有资产所有权，不从事实际物流运营。'],
        ['05','SWAQAR Digital Systems','为通道协调提供支持治理的数字系统。没有平台，没有交易市场，没有自主执行。'],
        ['06','SWAQAR Institutional Advisory','就通道架构、治理设计与机构定位提供经顾问核验的咨询意见。属于治理层面的参与，而非交易层面的参与。'],
        ['07','SWAQAR Industrial & Trade Development','为通道各区域的工业与贸易发展生态体系提供协调支持。以合作伙伴关系为主导；不持有资产所有权。'],
      ],
    },
  },

  // ── THE COORDINATION GAP (V2.0 copy lock) ── // reviewed
  gap: {
    sectionTag: { en: 'The Coordination Gap', ar: 'فجوة التنسيق', fr: 'La Faille de Coordination', zh: '协调缺口' },
    heading: { en: 'The Coordination', ar: 'فجوة', fr: 'La Faille de', zh: '协调' },
    headingEm: { en: 'Gap.', ar: 'التنسيق.', fr: 'Coordination.', zh: '缺口。' },
    items: {
      en: [
        { name: 'Verification', state: 'Repeated', desc: 'Counterparties may be verified separately by multiple institutions.' },
        { name: 'Documentation', state: 'Misaligned', desc: 'Records can diverge across parties and jurisdictions.' },
        { name: 'Stakeholders', state: 'Disconnected', desc: 'Banks, operators and counterparties often work through separate processes.' },
        { name: 'Trust', state: 'Harder to sustain', desc: 'Cross-regional corridors require discipline beyond bilateral relationships.' },
      ],
      ar: [
        { name: 'التحقق', state: 'متكرر', desc: 'قد يُتحقق من الأطراف المقابلة بشكل منفصل من قِبل عدة مؤسسات.' },
        { name: 'التوثيق', state: 'غير متسق', desc: 'يمكن أن تتباين السجلات بين الأطراف والولايات القضائية.' },
        { name: 'أصحاب المصلحة', state: 'غير مترابطين', desc: 'غالباً ما تعمل البنوك والمشغلون والأطراف المقابلة عبر مسارات منفصلة.' },
        { name: 'الثقة', state: 'أصعب في الاستمرار', desc: 'تتطلب الممرات العابرة للأقاليم انضباطاً يتجاوز العلاقات الثنائية.' },
      ],
      fr: [
        { name: 'Vérification', state: 'Répétée', desc: 'Les contreparties peuvent être vérifiées séparément par plusieurs institutions.' },
        { name: 'Documentation', state: 'Désalignée', desc: 'Les dossiers peuvent diverger entre les parties et les juridictions.' },
        { name: 'Parties prenantes', state: 'Déconnectées', desc: 'Banques, opérateurs et contreparties travaillent souvent selon des processus distincts.' },
        { name: 'Confiance', state: 'Plus difficile à maintenir', desc: 'Les corridors interrégionaux exigent une discipline allant au-delà des relations bilatérales.' },
      ],
      zh: [
        { name: '核验', state: '重复进行', desc: '交易对手可能被多家机构分别单独核验。' },
        { name: '单证', state: '不一致', desc: '各方及各司法管辖区之间的记录可能存在差异。' },
        { name: '相关方', state: '相互脱节', desc: '银行、运营方与交易对手往往各自遵循独立的流程。' },
        { name: '信任', state: '更难维系', desc: '跨区域通道所需的纪律，超出了双边关系所能提供的范畴。' },
      ],
    },
    closing: {
      en: 'SWAQAR coordinates the institutional layer between them.',
      ar: 'تنسق سواقر الطبقة المؤسسية التي تربط بينها.',
      fr: 'SWAQAR coordonne la couche institutionnelle qui les relie.',
      zh: 'SWAQAR 协调连接这些环节的机构层。',
    },
  },

  // ── REALITY / READINESS (V2.0 copy lock) ── // reviewed
  // sectionTag/heading were not part of the original locked copy (only the 4 readiness states +
  // the closing disclaimer were) — framing text reuses wording already established elsewhere on
  // this site rather than inventing new copy; translated consistently with that same framing.
  reality: {
    sectionTag: { en: 'Phase I — Foundation Stage', ar: 'المرحلة الأولى — مرحلة التأسيس', fr: 'Phase I — Étape Fondatrice', zh: '第一阶段 — 基础建设期' },
    heading: { en: 'Current', ar: 'الجاهزية', fr: 'État de', zh: '当前' },
    headingEm: { en: 'Readiness.', ar: 'الحالية.', fr: 'Préparation Actuelle.', zh: '就绪状态。' },
    items: {
      en: [
        { name: 'Counterparties' },
        { name: 'Documentation' },
        { name: 'Banking & Verification' },
        { name: 'Governance' },
      ],
      ar: [
        { name: 'الأطراف المقابلة' },
        { name: 'التوثيق' },
        { name: 'الأعمال المصرفية والتحقق' },
        { name: 'الحوكمة' },
      ],
      fr: [
        { name: 'Contreparties' },
        { name: 'Documentation' },
        { name: 'Bancaire & Vérification' },
        { name: 'Gouvernance' },
      ],
      zh: [
        { name: '交易对手' },
        { name: '单证' },
        { name: '银行业务与核验' },
        { name: '治理' },
      ],
    },
    closing: {
      en: 'Candidate only. No operational activation is claimed.',
      ar: 'مرشح فقط. لا يُدَّعى أي تفعيل تشغيلي.',
      fr: 'Candidat uniquement. Aucune activation opérationnelle n\'est revendiquée.',
      zh: '仅为候选阶段。不作任何运营层面已启动的声明。',
    },
  },
} as const;

export function tx(key: any, lang: Lang): string {
  if (typeof key === 'object' && key !== null && lang in key) return key[lang];
  if (typeof key === 'object' && key !== null && 'en' in key) return key['en'];
  return '';
}
