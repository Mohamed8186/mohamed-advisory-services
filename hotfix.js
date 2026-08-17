/* v1.1 progressive library + interaction hotfix */
(function(){
  const originalRenderLibrary = typeof renderLibrary === 'function' ? renderLibrary : null;
  let shown = 24;
  let lastKey = '';

  function countLabel(visible,total){
    const en = `Showing ${visible} of ${total} services`;
    const ar = `عرض ${visible} من أصل ${total} خدمة`;
    return lang === 'ar' ? ar : (lang === 'both' ? `${en} | ${ar}` : en);
  }

  function moreLabel(remaining){
    const en = `Show more (${remaining} remaining)`;
    const ar = `عرض المزيد (${remaining} متبقية)`;
    return lang === 'ar' ? ar : (lang === 'both' ? `${en} | ${ar}` : en);
  }

  function openLibraryService(id){
    const s = allServices().find(x => x.id === id);
    if(!s) return;
    const overlay = document.createElement('div');
    overlay.className = 'service-modal';
    overlay.innerHTML = `<div class="service-modal-card"><button class="service-modal-close" aria-label="Close">×</button>${serviceCard(s)}</div>`;
    overlay.addEventListener('click',e=>{if(e.target===overlay || e.target.closest('.service-modal-close')) overlay.remove()});
    document.body.appendChild(overlay);
    overlay.querySelector('.service-modal-close').focus();
  }

  function renderLibraryProgressive(reset=false){
    if(typeof DATA === 'undefined' || !DATA) return;
    const q = ($('#search').value || '').toLowerCase().trim();
    const cat = $('#categoryFilter').value;
    const key = `${q}|${cat}|${lang}`;
    if(reset || key !== lastKey){shown = 24; lastKey = key;}
    let list = allServices();
    if(cat) list = list.filter(s=>s.category_id===cat);
    if(q) list = list.filter(s=>[s.title_en,s.title_ar,s.scope_en,s.scope_ar,s.pain_en,s.pain_ar,s.outcome_en,s.outcome_ar].join(' ').toLowerCase().includes(q));
    const visible = list.slice(0,shown);
    $('#libraryGrid').innerHTML = visible.map(s=>`<article class="lib" role="button" tabindex="0" data-service-id="${s.id}"><small>${txt(s.category_en,s.category_ar)}</small><b>${txt(s.title_en,s.title_ar)}</b><span>${txt(s.pain_en,s.pain_ar)}</span></article>`).join('') || `<p>${lang==='ar'?'لا توجد نتائج مطابقة.':'No matching services found.'}</p>`;
    let count = document.querySelector('.library-count');
    if(!count){count=document.createElement('div');count.className='library-count';document.querySelector('.library-controls').after(count);}
    count.textContent = countLabel(visible.length,list.length);
    let more = document.querySelector('#libraryMore');
    if(!more){more=document.createElement('button');more.id='libraryMore';more.className='btn library-more';more.addEventListener('click',()=>{shown+=24;renderLibraryProgressive(false)});document.querySelector('#libraryGrid').after(more);}
    const remaining = Math.max(0,list.length-visible.length);
    more.hidden = remaining===0;
    if(remaining) more.textContent = moreLabel(remaining);
  }

  function attach(){
    if(typeof DATA === 'undefined' || !DATA){setTimeout(attach,80);return;}
    const search = $('#search');
    const select = $('#categoryFilter');
    if(originalRenderLibrary){
      search.removeEventListener('input',originalRenderLibrary);
      select.removeEventListener('change',originalRenderLibrary);
    }
    renderLibrary = function(){renderLibraryProgressive(true)};
    search.addEventListener('input',()=>renderLibraryProgressive(true));
    select.addEventListener('change',()=>renderLibraryProgressive(true));
    $('#libraryGrid').addEventListener('click',e=>{const card=e.target.closest('[data-service-id]');if(card)openLibraryService(card.dataset.serviceId)});
    $('#libraryGrid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-service-id]')){e.preventDefault();openLibraryService(e.target.dataset.serviceId)}});
    document.querySelectorAll('.pill[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(()=>renderLibraryProgressive(true),0)));
    const version=document.createElement('div');version.className='site-version';version.textContent='Interactive Service Explorer · v1.1';document.querySelector('.footer .inner > div')?.appendChild(version);
    renderLibraryProgressive(true);
  }
  attach();
})();
