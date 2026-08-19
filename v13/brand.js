(function(){
  const extra={
    en:{
      brandName:'Engineering Excellence Experts',brandRole:'Business · Project · Commercial · Supply Chain Advisory',eyebrow:'Senior-led integrated advisory',
      heroTitle:'Expert support where <span>business performance</span><br>and <span>project success</span> matter most.',
      heroText:'Engineering Excellence Experts combines senior leadership, cross-functional judgement and coordinated multidisciplinary delivery across tendering, procurement, commercial management, project delivery and business improvement.',
      networkModel:'Senior-Led · Integrated Multidisciplinary Delivery',startPriority:'Start with your priority',profilePdf:'View 2-page profile PDF',profilePdfShort:'2-Page Profile PDF',
      frameworkPromise:'Diagnose the gap. Structure the response. Deliver the action.',advisorName:'Mohamed Salaheldin',advisorRole:'Founder & Principal Advisor',advisorLine:'A hands-on team built around real project and business problems - quick to identify the real pressure point, clear on priorities, and focused on practical, to-the-point solutions.',
      priorityKicker:'Three High-Impact Solutions',priorityTitle:'Start with the business problem - not a long service list.',prioritySub:'These three areas cover a large share of the recurring problems and substantial advisory work across contractors, consultants, owners and industrial companies.',
      priority1Title:'Win Profitable Work',priority1Text:'Tender, pricing, scope, procurement inputs and contract readiness before commitments are locked in.',
      priority2Title:'Recover Troubled Projects',priority2Text:'Integrated recovery across delay, engineering, procurement, commercial, claims, resources and management control.',
      priority3Title:'Improve Business & Supply Chain Performance',priority3Text:'Procurement, supply chain, inventory, cash-flow, workflows, digital gaps and capability improvement.',
      exploreRelated:'Explore related solutions',footerBrand:'Engineering Excellence Experts',footerLine:'Senior-led integrated advisory for the critical points where businesses and projects lose time, cost, control and opportunity.'
    },
    ar:{
      brandName:'Engineering Excellence Experts',brandRole:'استشارات الأعمال والمشروعات والإدارة التجارية وسلسلة الإمداد',eyebrow:'استشارات بقيادة مباشرة وتنفيذ متكامل',
      heroTitle:'دعم خبير في النقاط الأكثر تأثيرًا على <span>أداء الأعمال</span><br>و<span>نجاح المشروعات</span>.',
      heroText:'يجمع Engineering Excellence Experts بين القيادة المباشرة والخبرة المتكاملة والتنفيذ المنسق متعدد التخصصات في المناقصات والمشتريات والإدارة التجارية وإدارة المشروعات وتطوير الأعمال.',
      networkModel:'قيادة مباشرة · تنفيذ متكامل متعدد التخصصات',startPriority:'ابدأ من أولويتك',profilePdf:'عرض البروفايل المختصر - صفحتان',profilePdfShort:'البروفايل - صفحتان',
      frameworkPromise:'نحدد الخلل، نبني الاستجابة المناسبة، ونحوّلها إلى خطوات تنفيذ.',advisorName:'محمد صلاح الدين',advisorRole:'المؤسس والمستشار الرئيسي',advisorLine:'فريق عملي يتعامل مع مشاكل الأعمال والمشروعات كما هي على أرض الواقع؛ يصل بسرعة إلى نقطة الضغط الحقيقية، يحدد الأولويات بوضوح، ويركز على حلول عملية مباشرة دون تعقيد.',
      priorityKicker:'ثلاثة حلول رئيسية عالية التأثير',priorityTitle:'ابدأ من المشكلة الفعلية - وليس من قائمة طويلة من الخدمات.',prioritySub:'هذه المجالات تمثل جانبًا كبيرًا من المشكلات المتكررة وحجم العمل الاستشاري لدى المقاولين والاستشاريين والملاك والمنشآت الصناعية.',
      priority1Title:'الفوز بأعمال مربحة',priority1Text:'المناقصة والتسعير والنطاق ومدخلات المشتريات والموقف التعاقدي قبل تثبيت الالتزامات.',
      priority2Title:'استعادة المشروعات المتعثرة',priority2Text:'معالجة متكاملة للتأخير والهندسة والمشتريات والجوانب التجارية والمطالبات والموارد والسيطرة الإدارية.',
      priority3Title:'تحسين أداء الأعمال وسلسلة الإمداد',priority3Text:'المشتريات وسلسلة الإمداد والمخزون والسيولة والإجراءات والفجوات الرقمية وبناء القدرات.',
      exploreRelated:'استعرض الحلول المرتبطة',footerBrand:'Engineering Excellence Experts',footerLine:'قيادة مباشرة وتنفيذ متكامل عند النقاط التي تخسر فيها الشركات والمشروعات الوقت أو التكلفة أو السيطرة أو الفرص.'
    }
  };
  Object.assign(UI.en,extra.en); Object.assign(UI.ar,extra.ar);
  const focusMap={tender:'tender',recovery:'recovery',procurement:'procurement'};
  function wirePriorities(){
    document.querySelectorAll('.priority-card').forEach(card=>{
      const go=()=>{
        const q=focusMap[card.dataset.query]||card.dataset.query||'';
        const input=document.querySelector('#search');
        if(input){input.value=q; activeCategory=''; shown=24; renderCategoryChips(); renderLibrary(true); document.querySelector('#library').scrollIntoView({behavior:'smooth',block:'start'});}
      };
      card.querySelector('.priority-action')?.addEventListener('click',e=>{e.stopPropagation();go()});
      card.addEventListener('dblclick',go);
    });
  }
  document.title='Engineering Excellence Experts | Mohamed Salaheldin';
  const meta=document.querySelector('meta[name="description"]');
  if(meta) meta.setAttribute('content','Engineering Excellence Experts - senior-led business, project, commercial and supply chain advisory led by Mohamed Salaheldin.');
  applyLang();
  wirePriorities();
})();