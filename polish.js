/* Final UX, Arabic copy, contact and PDF integration polish */
(function(){
  const TITLE_OVERRIDES={
    'procurement-supply-chain-06':'استعادة مسار المشتريات وتسريع التوريد',
    'commercial-contracts-claims-management-01':'تقييم التدفق النقدي وتخطيطه وتحسينه',
    'commercial-contracts-claims-management-02':'تقييم الأداء التجاري ووضع خطة تحسينه',
    'value-engineering-cost-optimization-04':'خطة تحسين تكلفة المشروع القائم واستعادة السيطرة',
    'project-management-controls-04':'إعداد برنامج استعادة المسار أو تسريع التنفيذ',
    'project-management-controls-05':'تخطيط استعادة مسار المشروع',
    'project-management-controls-12':'إعداد هياكل العمل والتكلفة وربطها',
    'technical-office-engineering-coordination-08':'خطة معالجة تأخر المخرجات الهندسية والاعتمادات القائمة',
    'business-process-improvement-digital-transformation-capability-development-13':'ورش استشارية تفاعلية لحل مشكلات العمل الفعلية'
  };
  const SERVICE_COPY={
    'procurement-supply-chain-06':{
      pain_ar:'بدأت أوامر شراء حرجة تتأخر، لكن المتابعة ما زالت رسائل واجتماعات من دون خطة واضحة تعيد الحزم إلى المسار.',
      outcome_ar:'يتركز الجهد على الحزم المؤثرة، مع إجراءات ومسؤوليات ومواعيد استعادة قابلة للقياس.',
      scope_ar:'بناء خطة عملية لاستعادة الحزم الحرجة المتأخرة وتسريع توريدها.'
    },
    'commercial-contracts-claims-management-01':{scope_ar:'ربط التحصيلات والمدفوعات والالتزامات بمواعيدها الفعلية.'},
    'project-management-controls-04':{outcome_ar:'تضع مسارًا زمنيًا واقعيًا لاستعادة البرنامج أو تسريع التنفيذ، مبنيًا على الأولويات والاعتماديات.',scope_ar:'بناء تسلسل زمني واضح لاستعادة المسار أو التسريع.'},
    'project-management-controls-05':{pain_ar:'توجد إجراءات كثيرة لمعالجة التأخير، لكنها متفرقة ولا تتعامل مع القيود الرئيسية ضمن خطة واحدة.',outcome_ar:'تجمع القيادة والفِرق حول خطة متكاملة لاستعادة المسار يمكن إدارتها ومتابعتها.'},
    'business-process-improvement-digital-transformation-capability-development-13':{
      pain_ar:'الموظفون حضروا دورات من قبل، لكن عند المنافسة الحقيقية أو التفاوض أو التسعير أو مشكلة المشتريات يرجعون إلى الأسئلة والأخطاء نفسها.',
      outcome_ar:'يحل الفريق حالاته الفعلية، ويفهم طريقة التفكير والخطوات التي يستطيع تكرارها مباشرة في العمل.',
      scope_ar:'جلسات تفاعلية أونلاين أو داخل الشركة تبدأ من حالات ومشكلات حقيقية، وليست محاضرات أو منهجًا تدريبيًا ثابتًا.'
    }
  };

  function attach(){
    if(typeof DATA==='undefined'||!DATA||typeof allServices!=='function'){setTimeout(attach,80);return;}

    Object.assign(UI.ar,{
      heroTitle:'حدّد المشكلة الحقيقية.<br><span>واعرف من أين تبدأ.</span>',
      heroText:'اختر نوع جهتك والمشكلة التي تواجهها فعليًا. ستظهر لك أولًا الخدمات الأقرب للحالة، بدل أن تتوه في قائمة طويلة من كل ما يمكن تقديمه.',
      browse:'استعرض مكتبة الخدمات',
      happeningSub:'اختر الوصف الأقرب للوضع الحالي. ويمكنك تغييره في أي وقت.',
      struggle:'هل يحدث هذا عندك؟',
      change:'الفرق بعد التدخل',
      details:'نطاق الخدمة والتفاصيل',
      discuss:'ناقش هذا الاحتياج',
      libraryTitle:'تبحث عن خدمة أو مشكلة محددة؟',
      librarySub:'استخدم البحث أو اختر المجال. يظل التشخيص بالأعلى هو الطريق الأسرع للوصول لما يناسب حالتك.'
    });

    DATA.categories.forEach(c=>{
      if(c.id==='risk-management')c.category_ar='إدارة المخاطر والحد من المخاطر الحرجة';
      c.services.forEach(s=>{
        if(TITLE_OVERRIDES[s.id])s.title_ar=TITLE_OVERRIDES[s.id];
        Object.assign(s,SERVICE_COPY[s.id]||{});
        ['pain_ar','outcome_ar','scope_ar'].forEach(k=>{
          s[k]=(s[k]||'')
            .replace(/التعرضات الرئيسية/g,'المخاطر والالتزامات المحتملة الرئيسية')
            .replace(/التعرضات والمقايضات الرئيسية/g,'المخاطر والبدائل الرئيسية')
            .replace(/التعرضات/g,'المخاطر المحتملة');
        });
      });
    });

    const actions=document.querySelector('.actions');
    ['en','ar','both'].forEach(code=>{
      const b=actions.querySelector(`[data-lang="${code}"]`);
      if(b)actions.appendChild(b);
    });

    waLink=function(service){
      const phone=(DATA.profile.ksa_whatsapp||'').replace(/\D/g,'');
      const ar=lang==='ar';
      const title=ar?service.title_ar:service.title_en;
      const msg=ar
        ?`مرحبًا م. محمد، أود مناقشة خدمة: ${title}\nالمشكلة التي أواجهها باختصار: `
        :`Hello Mohamed, I would like to discuss: ${title}\nThe situation I am facing is: `;
      return`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    };

    function mailLink(service){
      const ar=lang==='ar';
      const title=ar?service.title_ar:service.title_en;
      const subject=ar?`استفسار عن خدمة - ${title}`:`Advisory enquiry - ${title}`;
      const body=ar
        ?`مرحبًا م. محمد،\n\nأود مناقشة الخدمة التالية: ${title}\n\nالمشكلة أو الاحتياج باختصار:\n\nاسم الشركة:\nالاسم والمسمى الوظيفي:\nرقم التواصل:\n`
        :`Hello Mohamed,\n\nI would like to discuss the following service: ${title}\n\nBriefly, the problem or need is:\n\nCompany:\nName and title:\nContact number:\n`;
      return`mailto:${DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    serviceCard=function(s){
      const signature=s.id==='business-process-improvement-digital-transformation-capability-development-13'
        ?`<div class="signature-mini"><strong>${lang==='ar'?'صيغة تفاعلية لحل المشكلة':'Live problem-solving format'}</strong><p>${txt('Not lectures. Bring the real case, solve it live and leave with a method the team can reuse.','ليست محاضرات. أحضر الحالة الفعلية، واعمل عليها مباشرة، واخرج بحل وطريقة يستطيع الفريق تكرارها.')}</p><div class="mini-flow"><span>${txt('Diagnose','تشخيص')}</span><span>${txt('Challenge','مناقشة')}</span><span>${txt('Solve','حل')}</span><span>${txt('Act','تنفيذ')}</span></div></div>`
        :'';
      return`<article class="service"><span class="tag">${txt(s.category_en,s.category_ar)}</span><h4>${txt(s.title_en,s.title_ar)}</h4><div class="pain"><b>${t('struggle')}</b>${txt(s.pain_en,s.pain_ar)}</div><div class="out"><b>${t('change')}</b>${txt(s.outcome_en,s.outcome_ar)}</div>${signature}<details><summary>${t('details')}</summary><p>${txt(s.scope_en,s.scope_ar)}</p></details><div class="contact"><a class="mini wa" href="${waLink(s)}" target="_blank" rel="noopener">${t('discuss')}</a><a class="mini" href="${mailLink(s)}">${lang==='ar'?'بريد إلكتروني':'Email'}</a></div></article>`;
    };

    const select=document.querySelector('#categoryFilter');
    select.classList.add('polish-hidden');
    let chips=document.querySelector('#categoryChips');
    if(!chips){
      chips=document.createElement('div');
      chips.id='categoryChips';
      chips.className='category-chips';
      select.closest('.library-controls').after(chips);
    }
    function renderChips(){
      const items=[{id:'',category_en:'All service areas',category_ar:'كل مجالات الخدمة'},...DATA.categories];
      chips.innerHTML=items.map(c=>`<button class="category-chip ${select.value===c.id?'active':''}" data-cat="${c.id}">${txt(c.category_en,c.category_ar)}</button>`).join('');
      chips.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{
        select.value=b.dataset.cat;
        select.dispatchEvent(new Event('change',{bubbles:true}));
        renderChips();
      });
    }

    function renderSignature(){
      let sec=document.querySelector('.signature-section');
      if(!sec){
        sec=document.createElement('section');
        sec.className='signature-section';
        document.querySelector('#library').before(sec);
      }
      const ar=lang==='ar';
      sec.innerHTML=`<div class="signature-wrap"><div><span class="signature-label">${ar?'خدمة مميزة':'SIGNATURE SERVICE'}</span><h2>${txt('Practical Advisory Workshops & Live Problem-Solving Labs','ورش استشارية تفاعلية لحل مشكلات العمل الفعلية')}</h2><p>${txt('Not lectures. Bring the real problem, work through it live, and leave with a solution and a method your team can reuse.','ليست محاضرات. أحضر المشكلة الفعلية، واعمل عليها مباشرة، واخرج بحل وطريقة يستطيع الفريق تكرارها.')}</p><a class="btn primary signature-wa" target="_blank" rel="noopener">${ar?'ناقش ورشة لفريقك':'Discuss a workshop for your team'}</a></div><div class="signature-flow"><div><b>01</b><span>${txt('Diagnose the case','تشخيص الحالة')}</span></div><div><b>02</b><span>${txt('Challenge assumptions','مناقشة الافتراضات')}</span></div><div><b>03</b><span>${txt('Build the solution','بناء الحل')}</span></div><div><b>04</b><span>${txt('Set the actions','إجراءات التنفيذ')}</span></div></div></div>`;
      const phone=(DATA.profile.ksa_whatsapp||'').replace(/\D/g,'');
      const msg=ar
        ?'مرحبًا م. محمد، أود مناقشة ورشة استشارية تفاعلية لفريقنا حول مشكلة فعلية في العمل.'
        :'Hello Mohamed, I would like to discuss a practical live problem-solving workshop for our team.';
      sec.querySelector('.signature-wa').href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }

    async function maybeAddPdf(){
      const url='downloads/Mohamed-Salaheldin-Advisory-Brochure-PROTECTED.pdf';
      try{
        const r=await fetch(url,{method:'HEAD',cache:'no-store'});
        if(!r.ok)return;
        const heroCta=document.querySelector('.hero .cta');
        if(heroCta&&!heroCta.querySelector('.profile-pdf-btn')){
          const a=document.createElement('a');
          a.className='btn profile-pdf-btn';
          a.href=url;
          a.target='_blank';
          a.rel='noopener';
          a.textContent=lang==='ar'?'افتح البروفايل المختصر':'Open short profile';
          heroCta.appendChild(a);
        }
        const footer=document.querySelector('.footer-links');
        if(footer&&!footer.querySelector('.profile-pdf-footer')){
          const a=document.createElement('a');
          a.className='profile-pdf-footer';
          a.href=url;
          a.target='_blank';
          a.rel='noopener';
          a.textContent='Profile PDF';
          footer.appendChild(a);
        }
      }catch(_){/* optional file */}
    }

    renderChips();
    renderSignature();
    renderRoles();
    if(role)renderChallenges();
    if(role&&challenge)renderResults();
    renderLibrary();
    maybeAddPdf();

    document.querySelectorAll('.pill[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(()=>{
      renderChips();
      renderSignature();
      const p=document.querySelector('.profile-pdf-btn');
      if(p)p.textContent=lang==='ar'?'افتح البروفايل المختصر':'Open short profile';
      if(role&&challenge)renderResults();
    },0)));
  }
  attach();
})();
