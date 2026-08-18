(function(){
  const extra={
    en:{
      brandName:'Triple E',brandRole:'Engineering Excellence Experts',eyebrow:'Principal-led specialist advisory',
      heroTitle:'Expert support where <span>business performance</span><br>and <span>project success</span> matter most.',
      heroText:'Triple E combines direct senior leadership with a specialist expertise network across tendering, procurement, commercial management, project delivery and business improvement.',
      networkModel:'Principal-Led · Specialist-Enabled',startPriority:'Start with your priority',profilePdf:'View 2-page profile PDF',profilePdfShort:'2-Page Profile PDF',
      frameworkPromise:'Diagnose the gap. Structure the response. Deliver the action.',advisorName:'Mohamed Salaheldin',advisorRole:'Founder & Principal Advisor · Assignment Lead',advisorLine:'Every assignment is led directly by Mohamed and delivered through the Triple E specialist expertise network.',
      priorityKicker:'Three High-Impact Engagements',priorityTitle:'Start with the business problem - not a long service list.',prioritySub:'These three areas cover a large share of the recurring problems and substantial advisory work across contractors, consultants, owners and industrial companies.',
      priority1Title:'Win Profitable Work',priority1Text:'Tender, pricing, scope, procurement inputs and contract readiness before commitments are locked in.',
      priority2Title:'Recover Troubled Projects',priority2Text:'Integrated recovery across delay, engineering, procurement, commercial, claims, resources and management control.',
      priority3Title:'Improve Business & Supply Chain Performance',priority3Text:'Procurement, supply chain, inventory, cash-flow, workflows, digital gaps and capability improvement.',
      exploreRelated:'Explore related interventions',footerBrand:'Triple E · Engineering Excellence Experts',footerLine:'Principal-led specialist advisory for the critical points where businesses and projects lose time, cost, control and opportunity.'
    },
    ar:{
      brandName:'Triple E',brandRole:'Engineering Excellence Experts',eyebrow:'استشارات بقيادة مباشرة وخبرات متخصصة',
      heroTitle:'دعم خبير في النقاط الأكثر تأثيرًا على <span>أداء الأعمال</span><br>و<span>نجاح المشروعات</span>.',
      heroText:'يجمع Triple E بين القيادة المباشرة للتكليف وشبكة من الخبرات المتخصصة في المناقصات والمشتريات والإدارة التجارية وتنفيذ المشروعات وتطوير الأعمال.',
      networkModel:'قيادة مباشرة · بخبرات متخصصة',startPriority:'ابدأ من أولويتك',profilePdf:'عرض البروفايل المختصر - صفحتان',profilePdfShort:'البروفايل - صفحتان',
      frameworkPromise:'نحدد الخلل، نبني الاستجابة المناسبة، ونحوّلها إلى خطوات تنفيذ.',advisorName:'محمد صلاح الدين',advisorRole:'المؤسس والمستشار الرئيسي · قائد التكليف',advisorLine:'يقود محمد كل تكليف مباشرة، ويتم التنفيذ من خلال شبكة Triple E من الخبرات المتخصصة.',
      priorityKicker:'ثلاثة مجالات عالية التأثير',priorityTitle:'ابدأ من المشكلة الفعلية - وليس من قائمة طويلة من الخدمات.',prioritySub:'هذه المجالات تمثل جانبًا كبيرًا من المشكلات المتكررة وحجم العمل الاستشاري لدى المقاولين والاستشاريين والملاك والمنشآت الصناعية.',
      priority1Title:'الفوز بأعمال مربحة',priority1Text:'المناقصة والتسعير والنطاق ومدخلات المشتريات والموقف التعاقدي قبل تثبيت الالتزامات.',
      priority2Title:'استعادة المشروعات المتعثرة',priority2Text:'معالجة متكاملة للتأخير والهندسة والمشتريات والجوانب التجارية والمطالبات والموارد والسيطرة الإدارية.',
      priority3Title:'تحسين أداء الأعمال وسلسلة الإمداد',priority3Text:'المشتريات وسلسلة الإمداد والمخزون والسيولة والإجراءات والفجوات الرقمية وبناء القدرات.',
      exploreRelated:'استعرض التدخلات المرتبطة',footerBrand:'Triple E · Engineering Excellence Experts',footerLine:'خبرة قيادية ومتخصصة عند النقاط التي تخسر فيها الشركات والمشروعات الوقت أو التكلفة أو السيطرة أو الفرص.'
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
  applyLang();
  wirePriorities();
})();
