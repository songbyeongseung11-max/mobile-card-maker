/* 모바일 명함 템플릿 (index.html에서 자동 추출) */
(function(){
  function esc(s){ return String(s||'').replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function digits(s){ return String(s||'').replace(/[^0-9+]/g,''); }
  function vEsc(s){ return String(s||'').replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n'); }
  // 선 아이콘 (currentColor)
  function ic(p, extra){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"' + (extra||'') + '>' + p + '</svg>'; }
  var I = {
    phone: ic('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    office: ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h4v8H7zM14 9h3M14 12h3M14 15h3"/>'),
    fax: ic('<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="9" rx="2"/><path d="M7 14h10v7H7z"/>'),
    mail: ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    pin: ic('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    web: ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
    save: ic('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>'),
    link: ic('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    share: ic('<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/>'),
    chat: ic('<path d="M21 11.5a8.4 8.4 0 0 1-12.2 7.5L3 21l2-5.3A8.4 8.4 0 1 1 21 11.5z"/>'),
    ig: ic('<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r=".9" fill="currentColor"/>'),
    blog: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h3v6.2A4.5 4.5 0 1 1 6 14.5zm4.5 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>',
    yt: ic('<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.5v5l4.2-2.5z" fill="currentColor"/>')
  };

// SNS 앱 아이콘 (흰 글리프, 배경은 CSS에서 브랜드 색)
  var APP = {
    fb: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M13.6 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.2v3h2.5V21z"/></svg>',
    kch: '<svg viewBox="0 0 24 24"><path fill="#191919" d="M12 4C7 4 3 7.2 3 11.1c0 2.5 1.7 4.7 4.2 6l-.9 3.3c-.1.3.2.5.5.4l3.9-2.6c.4 0 .9.1 1.3.1 5 0 9-3.2 9-7.2S17 4 12 4z"/><text x="12" y="13.2" text-anchor="middle" font-family="Arial,sans-serif" font-size="4.6" font-weight="900" fill="#FEE500">TALK</text></svg>',
    map: '<svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2.8c-3.9 0-7 3-7 6.8 0 5 7 11.6 7 11.6s7-6.6 7-11.6c0-3.8-3.1-6.8-7-6.8z"/><path fill="#03C75A" d="M9.3 6.6h1.9l2 3v-3h1.9v6h-1.9l-2-3v3H9.3z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.7"/><circle cx="16.9" cy="7.1" r="1.1" fill="#fff" stroke="none"/></svg>',
    blog: '<svg viewBox="0 0 24 24"><text x="12" y="15.8" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="9.6" font-weight="900" fill="#fff">blog</text></svg>',
    yt: '<svg viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12.5" rx="4" fill="#fff"/><path d="M10.2 9.3v6l5.1-3z" fill="#FF0033"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5a13 13 0 0 1 0 17M12 3.5a13 13 0 0 0 0 17"/></svg>'
  };

  function buildHTML(d, src){
    var tel = digits(d.phone);
    var two = d.design === 'twotone';
    var shareImg = src.share || src.logo || src.photo || '';
    var ogImage = (d.site && shareImg && !/^data:/.test(shareImg)) ? d.site + '/' + shareImg.replace(/^\.\.\//,'') : '';
    var titleText = d.company + ' · ' + d.name + (d.title ? ' ' + d.title : '');
    var title = esc(titleText);
    var initials = esc((d.name || '?').trim().slice(0, 2));

    var topIcons = [
      d.kakao ? '<button class="ti" id="kakaoShare" type="button" aria-label="카카오톡으로 보내기">' + I.chat + '</button>' : '',
      '<a class="ti" href="' + (src.vcf || 'contact.vcf') + '" download="' + esc(d.name) + '.vcf" aria-label="연락처 저장">' + I.save + '</a>',
      '<button class="ti" id="shareBtn" type="button" aria-label="링크 공유">' + I.share + '</button>'
    ].filter(Boolean).join('');

    var rows = [];
    if (d.office) rows.push('<a class="row" href="tel:' + digits(d.office) + '">' + I.office + '<span>' + esc(d.office) + '</span></a>');
    if (d.fax) rows.push('<div class="row">' + I.fax + '<span>' + esc(d.fax) + ' (FAX)</span></div>');
    if (d.email) rows.push('<a class="row" href="mailto:' + esc(d.email) + '">' + I.mail + '<span>' + esc(d.email) + '</span></a>');
    if (d.address) rows.push('<a class="row" href="' + esc(d.mapurl || ('https://map.naver.com/p/search/' + encodeURIComponent(d.address))) + '" target="_blank" rel="noopener">' + I.pin + '<span>' + esc(d.address) + '</span></a>');
    if (d.homepage) rows.push('<a class="row" href="' + esc(d.homepage) + '" target="_blank" rel="noopener">' + I.web + '<span>' + esc(d.homepage.replace(/^https?:\/\//,'').replace(/\/$/,'')) + '</span></a>');

    var sns = d.sns.length ? '<div class="sns">' + d.sns.map(function(s){
      return '<a class="sn" href="' + esc(s.url) + '" target="_blank" rel="noopener" aria-label="' + s.label + '"><i class="' + s.kind + '">' + APP[s.kind] + '</i><b>' + s.label + '</b></a>';
    }).join('') + '</div>' : '';

    var linkBtns = d.links.map(function(l){ return '<a class="btn line" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>'; });

    var gallery = src.gallery || [];
    var galleryBlock = gallery.length ? [
      '      <p class="lbl">사진 · PROJECTS</p>',
      '      <div class="grid">',
      gallery.map(function(g, i){ return '        <button class="shot" type="button"><img src="' + g + '" alt="사진 ' + (i+1) + '" loading="lazy"></button>'; }).join('\n'),
      '      </div>'
    ].join('\n') : '';

    var js = [
      '<script>',
      '(function(){',
      '  var sb = document.getElementById("shareBtn");',
      '  sb.addEventListener("click", function(){',
      '    var u = location.href.split("#")[0];',
      '    if (navigator.share) { navigator.share({ title: document.title, url: u }).catch(function(){}); return; }',
      '    if (navigator.clipboard) navigator.clipboard.writeText(u).then(function(){ sb.classList.add("ok"); setTimeout(function(){ sb.classList.remove("ok"); }, 1500); });',
      '  });',
      gallery.length ? '  var lb = document.getElementById("lb"), im = document.getElementById("lbImg");\n  document.querySelectorAll(".shot").forEach(function(b){ b.addEventListener("click", function(){ im.src = b.querySelector("img").src; lb.hidden = false; }); });\n  lb.addEventListener("click", function(){ lb.hidden = true; im.src = ""; });' : '',
      '})();',
      '<\/script>'
    ].filter(Boolean).join('\n');

    var kakaoBlock = d.kakao ? [
      '<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" crossorigin="anonymous"><\/script>',
      '<script>',
      '(function(){',
      '  var SITE = ' + JSON.stringify(d.site || '') + ' || location.origin;',
      '  try { if (window.Kakao && !Kakao.isInitialized()) Kakao.init(' + JSON.stringify(d.kakao) + '); } catch (e) {}',
      '  document.getElementById("kakaoShare").addEventListener("click", function(){',
      '    if (!window.Kakao || !Kakao.isInitialized()) { alert("카카오톡 공유를 불러오지 못했어요. 주소를 직접 보내 주세요."); return; }',
      '    Kakao.Share.sendDefault({ objectType: "feed",',
      '      content: { title: ' + JSON.stringify(titleText) + ', description: "눌러서 연락처를 저장하세요.",',
      (ogImage ? '        imageUrl: ' + JSON.stringify(ogImage) + ',' : ''),
      '        link: { mobileWebUrl: SITE, webUrl: SITE } },',
      '      buttons: [ { title: "모바일 명함 보기", link: { mobileWebUrl: SITE, webUrl: SITE } },',
      '                 { title: "연락처 저장", link: { mobileWebUrl: SITE + "/contact.vcf", webUrl: SITE + "/contact.vcf" } } ] });',
      '  });',
      '})();',
      '<\/script>'
    ].filter(Boolean).join('\n') : '';

    return [
'<!doctype html>',
'<html lang="ko">',
'<head>',
'<meta charset="utf-8">',
'<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
'<title>' + title + '</title>',
'<meta name="description" content="' + esc(d.company) + ' ' + esc(d.name) + '의 모바일 명함입니다.">',
'<meta property="og:type" content="website">',
(d.site ? '<meta property="og:url" content="' + esc(d.site) + '/">' : ''),
'<meta property="og:title" content="' + title + '">',
'<meta property="og:description" content="눌러서 연락처를 저장하세요.">',
(ogImage ? '<meta property="og:image" content="' + esc(ogImage) + '">' : ''),
'<link rel="preconnect" href="https://fonts.googleapis.com">',
'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;800&display=swap">',
'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css">',
'<style>',
'  /* 에디토리얼(뉴욕) 명함: 크림 바탕, 검정 글씨, 포인트 색 하나. 투톤은 사진 아래 1/3부터 색 배경 */',
'  :root{--bg:' + d.bg + ';--accent:' + d.accent + ';--tone:' + d.tone + ';--ink:#111;--sub:#5d5a55;--hair:rgba(0,0,0,.16)}',
'  *{box-sizing:border-box;margin:0;padding:0}',
'  html,body{background:var(--bg)}',
'  body{font-family:Montserrat,Pretendard,"Malgun Gothic",-apple-system,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased;min-height:100vh}',
'  [hidden]{display:none!important}',
'  svg{width:20px;height:20px;flex:none}',
'  .wrap{max-width:440px;margin:0 auto;background:var(--bg);min-height:100vh;display:flex;flex-direction:column}',
'  .top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:22px 22px 6px}',
'  .brand img{display:block;max-height:40px;max-width:180px}',
'  .co{font-size:19px;font-weight:800;letter-spacing:.02em;line-height:1.1}',
'  .cosub{margin-top:4px;font-size:10px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--sub)}',
'  .ic{display:flex;gap:8px}',
'  .ti{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.07);color:var(--ink);border:0;cursor:pointer;text-decoration:none}',
'  .ti svg{width:18px;height:18px}',
'  .ti.ok{background:var(--accent);color:#fff}',
'  .hero{padding:26px 0 0;position:relative;z-index:2}',
'  .ph{position:relative;width:176px;height:176px;margin:0 auto}',
'  .ph::before{content:"";position:absolute;inset:12px -14px -14px 12px;border:2px solid var(--accent);border-radius:4px}',
'  .fr{position:relative;width:100%;height:100%;border-radius:22px;overflow:hidden;transform:rotate(-5deg);box-shadow:0 12px 28px rgba(0,0,0,.22);background:#d9d6d0}',
'  .fr img,.fr .ini{display:block;width:100%;height:100%;object-fit:cover;transform:rotate(5deg) scale(1.1)}',
'  .fr .ini{display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:800;color:#fff;background:#111}',
'  .lower{padding:34px 22px 34px;text-align:center;flex:1}',
(two ? '  .lower{background:var(--tone);color:#fff;margin-top:-60px;padding-top:96px;--ink:#fff;--sub:rgba(255,255,255,.75);--hair:rgba(255,255,255,.22)}' : ''),
'  .name{font-size:34px;font-weight:800;letter-spacing:.01em;line-height:1.1;text-transform:uppercase;color:var(--ink);word-break:keep-all}',
'  .role{margin-top:8px;font-size:13px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--ink)}',
'  .place{margin-top:4px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--sub)}',
'  .pill{display:inline-flex;align-items:center;gap:8px;margin-top:16px;padding:8px 18px;border-radius:999px;background:' + (two ? 'var(--accent)' : '#111') + ';color:#fff;font-size:15px;font-weight:600;text-decoration:none;letter-spacing:.02em}',
'  .pill svg{width:16px;height:16px}',
'  .greet{margin-top:14px;font-family:Pretendard,sans-serif;font-size:14px;line-height:1.7;color:var(--sub);word-break:keep-all}',
'  .list{margin-top:20px;border-top:1px solid var(--hair);text-align:left}',
'  .row{display:flex;align-items:center;gap:14px;padding:11px 2px;border-bottom:1px solid var(--hair);color:var(--ink);text-decoration:none;font-size:14px;font-weight:600;letter-spacing:.02em}',
'  .row svg{width:34px;height:34px;padding:8px;border-radius:50%;background:' + (two ? '#fff' : 'var(--accent)') + ';color:' + (two ? 'var(--tone)' : '#fff') + ';stroke-width:2}',
'  .row span{word-break:keep-all;overflow-wrap:anywhere}',
'  .sns{margin-top:22px;display:flex;justify-content:center;gap:20px;flex-wrap:wrap}',
'  .sn{display:grid;justify-items:center;gap:7px;text-decoration:none;color:var(--ink);font-family:Pretendard,sans-serif;font-size:11.5px;font-weight:600}',
'  .sn i{width:52px;height:52px;border-radius:15px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.14)}',
'  .sn i svg{width:30px;height:30px}',
'  .sn i.ig{background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285AEB 90%)}',
'  .sn i.blog{background:#03C75A}',
'  .sn i.map{background:#03C75A}',
'  .sn i.fb{background:#1877F2}',
'  .sn i.kch{background:#FEE500}',
'  .sn i.yt{background:#FF0033}',
'  .sn i.web{background:#111}',
'  .acts{margin-top:20px;display:grid;gap:10px}',
'  .btn{display:flex;align-items:center;justify-content:center;gap:8px;height:50px;border-radius:6px;font-size:14px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;border:0;font-family:inherit;cursor:pointer}',
'  .btn.solid{background:var(--accent);color:#fff}',
'  .btn.line{background:transparent;color:var(--ink);border:1.6px solid var(--ink);letter-spacing:.04em}',
'  .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}',
'  .lbl{margin-top:26px;text-align:left;font-size:12px;font-weight:600;letter-spacing:.2em;color:var(--ink)}',
'  .grid{margin-top:10px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}',
'  .shot{aspect-ratio:1;border:0;padding:0;border-radius:8px;overflow:hidden;background:#ccc;cursor:zoom-in}',
'  .shot img{width:100%;height:100%;object-fit:cover;display:block}',
'  .lb{position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:9;padding:16px}',
'  .lb img{max-width:100%;max-height:100%;border-radius:8px}',
'  .lb-x{position:absolute;top:12px;right:16px;background:none;border:0;color:#fff;font-size:36px;line-height:1;cursor:pointer}',
'  .foot{padding:4px 0 26px;text-align:center;font-size:11px;letter-spacing:.2em;color:var(--sub)}',
(two ? '  .foot{background:var(--tone);color:rgba(255,255,255,.6)}' : ''),
'</style>',
'</head>',
'<body>',
'<main class="wrap">',
'  <header class="top">',
'    <div class="brand">' + (src.logo ? '<img src="' + src.logo + '" alt="' + esc(d.company) + ' 로고">' : '<p class="co">' + esc(d.company) + '</p>' + (d.companyEn ? '<p class="cosub">' + esc(d.companyEn) + '</p>' : '')) + '</div>',
'    <nav class="ic">' + topIcons + '</nav>',
'  </header>',
'  <div class="hero"><div class="ph"><div class="fr">' + (src.photo ? '<img src="' + src.photo + '" alt="' + esc(d.name) + ' 사진">' : '<div class="ini">' + initials + '</div>') + '</div></div></div>',
'  <section class="lower">',
'    <h1 class="name">' + esc(d.name) + '</h1>',
(d.title ? '    <p class="role">' + esc(d.title) + '</p>' : ''),
(src.logo && d.companyEn ? '    <p class="place">' + esc(d.companyEn) + '</p>' : ''),
'    <a class="pill" href="tel:' + tel + '">' + I.phone + esc(d.phone) + '</a>',
(d.greeting ? '    <p class="greet">' + esc(d.greeting).replace(/\n/g,'<br>') + '</p>' : ''),
(rows.length ? '    <div class="list">\n      ' + rows.join('\n      ') + '\n    </div>' : ''),
(sns ? '    ' + sns : ''),
'    <div class="acts">',
'      <a class="btn solid" href="' + (src.vcf || 'contact.vcf') + '" download="' + esc(d.name) + '.vcf">연락처 저장</a>',
'      <div class="two"><a class="btn line" href="tel:' + tel + '">전화하기</a><a class="btn line" href="sms:' + tel + '">문자하기</a></div>',
(linkBtns.length ? '      ' + linkBtns.join('\n      ') : ''),
'    </div>',
galleryBlock,
'  </section>',
'  <p class="foot">' + esc(d.company) + '</p>',
'</main>',
(gallery.length ? '<div class="lb" id="lb" hidden><button class="lb-x" type="button" aria-label="닫기">×</button><img id="lbImg" alt=""></div>' : ''),
js,
kakaoBlock,
'</body>',
'</html>'
    ].filter(function(l){ return l !== ''; }).join('\n') + '\n';
  }

  function buildVCF(d){
    var lines = ['BEGIN:VCARD','VERSION:3.0',
      'N:' + vEsc(d.name) + ';;;;', 'FN:' + vEsc(d.name),
      'ORG:' + vEsc(d.company + (d.companyEn ? ' ' + d.companyEn : ''))];
    if (d.title) lines.push('TITLE:' + vEsc(d.title));
    lines.push('TEL;TYPE=CELL,VOICE:' + d.phone);
    if (d.office) lines.push('TEL;TYPE=WORK,VOICE:' + d.office);
    if (d.fax) lines.push('TEL;TYPE=WORK,FAX:' + d.fax);
    if (d.email) lines.push('EMAIL;TYPE=INTERNET:' + d.email);
    if (d.address) lines.push('ADR;TYPE=WORK:;;' + vEsc(d.address) + ';;;;');
    if (d.site) lines.push('URL:' + d.site);
    d.sns.forEach(function(s){ if (s.kind !== 'map' && s.kind !== 'kch') lines.push('URL:' + s.url); });
    lines.push('END:VCARD');
    return lines.join('\r\n') + '\r\n';
  }

  window.CardKit = { buildHTML: buildHTML, buildVCF: buildVCF };
})();
