/* =================================================================
   위베이프 영등포점 · script.js
   ================================================================= */

/* =================================================================
   EDIT YOUR CONTENT HERE
   Everything you'll want to change regularly lives in this block.
   You should not need to touch the layout code below it.
   ================================================================= */

// Store phone number, used for the tap-to-call button.
// Use digits only for the tel: link; DISPLAY is what users see.
const STORE_PHONE = {
  tel: "050713762074",        // ← real number, digits only (no dashes)
  display: "0507-1376-2074",  // ← how it appears on screen
};

// Notice ticker: add/remove lines freely. They rotate in the marquee.
// One list per language: ko = 한국어, en = English, zh = 中文.
const NOTICES = {
  ko: [
    "신규 회원 첫 구매 사은품 증정",
    "제품 상담은 네이버로 편하게 문의하세요",
  ],
  en: [
    "Free gift with new members' first purchase",
    "Questions about products? Ask us on Naver",
  ],
  zh: [
    "新会员首次购物赠送礼品",
    "产品咨询请通过微信联系我们（微信号：e_cig_kr）",
  ],
};

// Blog / notice cards. Add objects to show more posts.
// title / excerpt take one string per language.
const BLOG_POSTS = [
  {
    date: "2026.08.14",
    title: {
      ko: "9월 신상 액상 입고 안내",
      en: "September New E-Liquid Arrivals",
      zh: "9月新品烟油到货通知",
    },
    excerpt: {
      ko: "영등포 전자담배｜해외여행 비행기 전자담배 기내반입, 중국·일본도 가능할까?",
      en: "Yeongdeungpo E-Cigarettes | Can you take an e-cigarette on a flight abroad, even to China or Japan?",
      zh: "永登浦电子烟｜出国旅行能带电子烟上飞机吗？中国、日本也可以吗？",
    },
    link: "https://m.blog.naver.com/PostView.naver?blogId=mypage_5&logNo=224378329587&navType=by", // ← replace with the real post URL
  },
  {
    date: "2026.08.13",
    title: {
      ko: "전담어때 기기리뷰",
      en: "Jeondam-eottae Device Review",
      zh: "Jeondam-eottae 设备测评",
    },
    excerpt: {
      ko: "영등포구청역 전자담배｜기계 사기 전 꼭 보세요, 7만원대 4종 비교",
      en: "Yeongdeungpo-gu Office Station E-Cigarettes | Read this before you buy: 4 devices around ₩70,000 compared",
      zh: "永登浦区厅站电子烟｜购机前必看，7万韩元价位4款对比",
    },
    link: "https://m.blog.naver.com/PostView.naver?blogId=mypage_5&logNo=224377547394&navType=by",
  },
  {
    date: "2026.07.03",
    title: {
      ko: "공지",
      en: "Notice",
      zh: "公告",
    },
    excerpt: {
      ko: "RELX 쿠반리프·ACE 클래식타바코 단종? 대체품 찾는다면 클릭메이트 타바코 추천!",
      en: "RELX Cuban Leaf & ACE Classic Tobacco discontinued? Looking for an alternative? We recommend Clickmate Tobacco!",
      zh: "RELX 古巴烟叶·ACE 经典烟草停产？想找替代品，推荐 Clickmate 烟草口味！",
    },
    link: "https://m.blog.naver.com/PostView.naver?blogId=mypage_5&logNo=224335197784&navType=by",
  },
];

// Page text translations. Korean is taken from index.html itself,
// so only English (en) and Chinese (zh) live here. Keys match the
// data-i18n / data-i18n-attr attributes in index.html.
const TRANSLATIONS = {
  en: {
    "meta.title": "WeVape x Jeondam-eottae Yeongdeungpo · E-Cigarette Shop · Free Nationwide Shipping",
    "meta.desc": "WeVape x Jeondam-eottae Yeongdeungpo: e-cigarette devices, e-liquids, coils and accessories. Free nationwide shipping, same-day dispatch, quick delivery.",

    "age.title": "Are you 19 or older?",
    "age.desc": "This site sells e-cigarette products and is for adults only.<br />Minors may not use this site.",
    "age.yes": "Yes, I am 19 or older",
    "age.no": "No",
    "age.deniedTitle": "You can't use this site",
    "age.deniedDesc": "Visitors under 19 can't view this site or buy in our store.",
    "age.leave": "Go to Naver",
    "age.legal": "Under the Juvenile Protection Act, we do not sell to anyone under 19.",

    "logo.mark": "WeVape",
    "logo.sub": "Yeongdeungpo",
    "nav.categories": "What we sell",
    "nav.about": "About",
    "nav.blog": "News",
    "nav.location": "Location",
    "header.cta": "Chat",

    "hero.title": "<span class=\"hero__line1\">Yeongdeungpo <span class=\"nowrap\">E-Cigarettes</span></span><br /><span class=\"text-shimmer\">Free Nationwide Shipping</span>",
    "hero.subtitle": "We sell devices, e-liquids, coils and accessories in store and online.",
    "svc.ship.label": "Shipping",
    "svc.ship": "Free nationwide shipping · orders before 3 PM ship the same day",
    "svc.quick.label": "Quick",
    "svc.quick": "Quick delivery near Yeongdeungpo, same-day",
    "svc.parking.label": "Parking",
    "svc.parking": "Parking available when you visit",
    "hero.products": "See what we sell",
    "hero.age": "19+ only",
    "cta.naver": "Chat on Naver",

    "ticker.label": "Notices",
    "ticker.title": "Notice",
    "ticker.pause": "Pause notices",
    "brands.label": "Brands we carry",

    "about.title": "1F, 161 Dangsan-ro",
    "about.p1": "WeVape x Jeondam-eottae Yeongdeungpo sells e-cigarette devices, e-liquids, coils and accessories. Ask about any product in store or on Naver chat before you buy.",
    "about.btn": "View Store Location",
    "about.alt": "Store photo",

    "cat.title": "What we sell",
    "cat.devices": "Devices",
    "cat.liquids": "E-Liquids",
    "cat.coils": "Coils",
    "cat.accessories": "Accessories",

    "blog.title": "Notices &amp; News",
    "blog.more": "More",

    "loc.title": "Directions &amp; Contact",
    "loc.addr": "WeVape Yeongdeungpo, 1F, 161 Dangsan-ro, Yeongdeungpo-gu, Seoul",
    "loc.hours": "<span>Hours</span> Daily 10:00 – 21:00",
    "loc.closed": "<span>Closed</span> Sunday",
    "loc.naver": "Naver Chat",
    "loc.map": "View on Naver Map",

    "footer.brand": "WeVape x Jeondam-eottae Yeongdeungpo",
    "footer.bizName": "Business name: WeVape x Jeondam-eottae Yeongdeungpo",
    "footer.rep": "Representative",
    "footer.phone": "Phone",
    "footer.regNo": "Mail-order business registration no.",
    "footer.hours": "Hours: Daily 10:00 – 21:00",
    "footer.addr": "Address: WeVape x Jeondam-eottae Yeongdeungpo, 1F, 161 Dangsan-ro, Yeongdeungpo-gu, Seoul",
    "footer.notice": "This site is for adults aged 19 and over only. Under the Juvenile Protection Act, we do not sell to minors.",
    "footer.copy": "© 2026 WeVape x Jeondam-eottae Yeongdeungpo. All rights reserved.",

    "float.text": "Naver",

    "wechat.title": "Scan with WeChat to add us",
    "wechat.idLabel": "WeChat ID",
    "wechat.copy": "Copy WeChat ID",
    "wechat.copied": "Copied",
    "wechat.copyFail": "Please copy the ID manually",
    "wechat.close": "Close",
  },

  zh: {
    "meta.title": "WeVape x Jeondam-eottae 永登浦店 · 永登浦电子烟 · 全国免费配送",
    "meta.desc": "WeVape x Jeondam-eottae 永登浦店：电子烟设备、烟油、雾化芯及配件。全国免费配送，当日发货，闪送服务。",

    "age.title": "您是否已满19周岁？",
    "age.desc": "本网站销售电子烟相关产品，仅限成年人访问。<br />未成年人禁止使用。",
    "age.yes": "是，我已满19周岁",
    "age.no": "否",
    "age.deniedTitle": "您无法访问本网站",
    "age.deniedDesc": "未满19周岁者不能浏览本网站，也不能在本店购买商品。",
    "age.leave": "前往 Naver",
    "age.legal": "根据韩国《青少年保护法》，我们不向未满19周岁的青少年出售商品。",

    "logo.mark": "WeVape",
    "logo.sub": "永登浦店",
    "nav.categories": "在售商品",
    "nav.about": "关于我们",
    "nav.blog": "公告",
    "nav.location": "交通指南",
    "header.cta": "咨询",

    "hero.title": "<span class=\"hero__line1\">永登浦电子烟</span><br /><span class=\"text-shimmer\">全国免费配送</span>",
    "hero.subtitle": "门店与线上同步销售设备、烟油、雾化芯及配件。",
    "svc.ship.label": "配送",
    "svc.ship": "全国免费配送 · 下午3点前下单当日发货",
    "svc.quick.label": "闪送",
    "svc.quick": "永登浦附近可闪送，当日收货",
    "svc.parking.label": "停车",
    "svc.parking": "到店可停车",
    "hero.products": "查看在售商品",
    "hero.age": "仅限年满19周岁者使用",
    "cta.naver": "微信咨询",

    "ticker.label": "公告",
    "ticker.title": "公告",
    "ticker.pause": "暂停公告滚动",
    "brands.label": "在售品牌",

    "about.title": "堂山路161号 1层",
    "about.p1": "WeVape x Jeondam-eottae 永登浦店销售电子烟设备、烟油、雾化芯及配件。购买前可到店或通过微信咨询任何产品。",
    "about.btn": "查看门店位置",
    "about.alt": "门店照片",

    "cat.title": "在售商品",
    "cat.devices": "设备",
    "cat.liquids": "烟油",
    "cat.coils": "雾化芯",
    "cat.accessories": "配件",

    "blog.title": "公告与资讯",
    "blog.more": "查看更多",

    "loc.title": "交通指南与咨询",
    "loc.addr": "首尔特别市永登浦区堂山路161号 1层 WeVape 永登浦店",
    "loc.hours": "<span>营业时间</span> 每天 10:00 – 21:00",
    "loc.closed": "<span>休息日</span> 周日",
    "loc.naver": "微信咨询",
    "loc.map": "在 Naver 地图中查看",

    "footer.brand": "WeVape x Jeondam-eottae 永登浦店",
    "footer.bizName": "商号：WeVape x Jeondam-eottae 永登浦店",
    "footer.rep": "代表",
    "footer.phone": "电话",
    "footer.regNo": "通信销售业申报编号",
    "footer.hours": "营业时间：每天 10:00 – 21:00",
    "footer.addr": "地址：首尔特别市永登浦区堂山路161号 1层 WeVape x Jeondam-eottae 永登浦店",
    "footer.notice": "本网站仅限年满19周岁的成年人使用。根据韩国《青少年保护法》，我们不向未成年人出售商品。",
    "footer.copy": "© 2026 WeVape x Jeondam-eottae 永登浦店。保留所有权利。",

    "float.text": "微信咨询",

    "wechat.title": "微信扫码添加好友",
    "wechat.idLabel": "微信号",
    "wechat.copy": "复制微信号",
    "wechat.copied": "已复制",
    "wechat.copyFail": "请长按微信号手动复制",
    "wechat.close": "关闭",
  },
};

/* =================================================================
   LAYOUT / BEHAVIOR CODE: usually no need to edit below
   ================================================================= */

/* ---------- 0. Shared: keep Tab focus inside an open dialog ---------- */
function trapTab(container, e) {
  if (e.key !== "Tab") return;
  const items = [...container.querySelectorAll("a[href], button:not([disabled])")]
    .filter((el) => el.offsetParent !== null);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

/* ---------- 1. Age verification ---------- */
// The gate is visible in the markup; the <head> script adds .age-ok to
// <html> for visitors who already confirmed, which hides it.
(function ageGate() {
  const root = document.documentElement;
  const gate = document.getElementById("age-gate");
  if (root.classList.contains("age-ok")) return;

  const box = gate.querySelector(".age-gate__box");
  const ask = document.getElementById("age-gate-ask");
  const denied = document.getElementById("age-gate-denied");
  const KEY = "wevape_age_verified";

  // Everything behind the gate is unreachable by keyboard and screen readers.
  const behind = [...document.body.children].filter((el) => el !== gate);
  behind.forEach((el) => { el.inert = true; });
  document.getElementById("age-gate-title").focus();

  document.getElementById("age-yes").addEventListener("click", () => {
    try { localStorage.setItem(KEY, "true"); } catch (e) { /* private mode: ask again next visit */ }
    root.classList.add("age-ok");
    behind.forEach((el) => { el.inert = false; });
    gate.removeEventListener("keydown", onKey);
    document.activeElement.blur();
  });

  document.getElementById("age-no").addEventListener("click", () => {
    ask.hidden = true;
    denied.hidden = false;
    box.setAttribute("aria-labelledby", "age-gate-denied-title");
    box.removeAttribute("aria-describedby");
    document.getElementById("age-gate-denied-title").focus();
  });

  // Esc can't dismiss the gate (that would skip the age check); it
  // returns focus to the question so keyboard users aren't stranded.
  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      (denied.hidden ? ask : denied).querySelector(".age-gate__title").focus();
      return;
    }
    trapTab(box, e);
  }
  gate.addEventListener("keydown", onKey);
})();

/* ---------- 2. Sticky header background on scroll ---------- */
(function stickyHeader() {
  const header = document.getElementById("site-header");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- 3. Notice ticker ---------- */
function buildTicker(lang) {
  const track = document.getElementById("ticker-track");
  if (!track) return;

  const notices = NOTICES[lang] || NOTICES.ko;
  const makeItems = () =>
    notices.map((t) => `<span class="ticker__item">${t}</span>`).join("");

  // Two copies so the -50% CSS loop is seamless.
  track.innerHTML = makeItems() + makeItems();
}

(function tickerToggle() {
  const ticker = document.querySelector(".ticker");
  const btn = document.getElementById("ticker-toggle");
  if (!ticker || !btn) return;
  btn.addEventListener("click", () => {
    const paused = ticker.classList.toggle("is-paused");
    btn.setAttribute("aria-pressed", paused);
  });
})();

/* ---------- 4. Blog cards ---------- */
function buildBlog(lang) {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  const pick = (v) => (typeof v === "string" ? v : v[lang] || v.ko);

  grid.innerHTML = BLOG_POSTS.map(
    (p) => `
    <a class="blog-card" href="${p.link}">
      <div class="blog-card__date">${p.date}</div>
      <h3 class="blog-card__title">${pick(p.title)}</h3>
      <p class="blog-card__excerpt">${pick(p.excerpt)}</p>
    </a>`
  ).join("");
}

/* ---------- 4a. WeChat QR popup (Chinese chat buttons) ---------- */
(function wechatPopup() {
  const modal = document.getElementById("wechat-modal");
  const closeBtn = document.getElementById("wechat-close");
  const copyBtn = document.getElementById("wechat-copy");
  const WECHAT_ID = "e_cig_kr";
  let opener = null;

  // Current-language text for labels the script sets itself.
  const t = (key) => {
    const lang = { en: "en", "zh-CN": "zh" }[document.documentElement.lang];
    return (TRANSLATIONS[lang] || {})[key];
  };

  function open(trigger) {
    opener = trigger;
    copyBtn.textContent = t("wechat.copy") ?? "위챗 ID 복사";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function close() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }

  document.querySelectorAll("[data-chat-link]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.getAttribute("href") !== "#wechat") return;
      e.preventDefault();
      open(el);
    });
  });

  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    else trapTab(modal, e);
  });

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);
      copyBtn.textContent = t("wechat.copied") ?? "복사됨";
    } catch {
      copyBtn.textContent = t("wechat.copyFail") ?? "위챗 ID를 직접 복사해 주세요";
    }
  });
})();

/* ---------- 4b. Language switch (ENG / KOR / 中文) ---------- */
(function languageSwitch() {
  const KEY = "wevape_lang";
  const HTML_LANG = { ko: "ko", en: "en", zh: "zh-CN" };

  // Remember the original Korean markup so we can switch back to it.
  const koText = new WeakMap();
  const koAttr = new WeakMap();

  function apply(lang) {
    if (!HTML_LANG[lang]) lang = "ko";
    const dict = TRANSLATIONS[lang] || {};
    document.documentElement.lang = HTML_LANG[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!koText.has(el)) koText.set(el, el.innerHTML);
      el.innerHTML = dict[el.dataset.i18n] ?? koText.get(el);
    });

    // data-i18n-attr="alt:key" or "aria-label:key;title:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      if (!koAttr.has(el)) koAttr.set(el, {});
      const saved = koAttr.get(el);
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
        el.setAttribute(attr, dict[key] ?? saved[attr]);
      });
    });

    // Chat buttons: Naver link, except on the Chinese page where they
    // open the WeChat QR popup (see 4a).
    document.querySelectorAll("[data-chat-link]").forEach((el) => {
      if (!el.dataset.naverHref) el.dataset.naverHref = el.getAttribute("href");
      el.setAttribute("href", lang === "zh" ? "#wechat" : el.dataset.naverHref);
    });

    buildTicker(lang);
    buildBlog(lang);

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active);
    });

    try { localStorage.setItem(KEY, lang); } catch (e) { /* not saved */ }
  }

  // Saved choice → browser language → Korean.
  const browser = (navigator.language || "").toLowerCase();
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* ignore */ }
  const initial =
    saved ||
    (browser.startsWith("zh") ? "zh" : browser.startsWith("en") ? "en" : "ko");

  document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => apply(btn.dataset.lang));
  });

  apply(initial);
})();

/* ---------- 5. Tap-to-call phone link ---------- */
(function wirePhone() {
  const call = document.getElementById("call-link");
  if (!call) return;
  call.href = `tel:${STORE_PHONE.tel}`;
  call.querySelector("span").textContent = STORE_PHONE.display;
})();

/* ---------- 6. Store photo section: fade-and-rise on entering view ---------- */
(function revealAbout() {
  const els = document.querySelectorAll(".about__text, .about__media");
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  if (!motionOK || !("IntersectionObserver" in window) || !els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => {
    el.classList.add("will-reveal");
    io.observe(el);
  });
})();

/* ---------- 7. Hero first line: one-time light-to-bold letter stagger ---------- */
// Runs once, on load (or right after the age gate is confirmed, so it isn't
// hidden behind the gate). Touch and desktop alike; skipped for reduced motion.
// A language switch re-renders the headline as plain text, without animation.
(function headlineWeight() {
  const line = document.querySelector(".hero__line1");
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  if (!line || !motionOK) return;

  const LETTER_MS = 360;   // one letter's light -> bold -> normal
  const TOTAL_MS = 600;    // whole line

  function build() {
    const text = line.textContent.trim();
    const letters = [...text.replace(/\s+/g, "")];
    // ~40ms per letter, tightened for long lines so the total stays ~600ms
    const step = Math.min(40, (TOTAL_MS - LETTER_MS) / Math.max(letters.length - 1, 1));

    // Screen readers get the whole text once; the letter cells are hidden from them.
    const label = document.createElement("span");
    label.className = "visually-hidden";
    label.textContent = text;
    const visual = document.createElement("span");
    visual.setAttribute("aria-hidden", "true");

    let i = 0;
    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { visual.append(" "); return; }
      const word = document.createElement("span");
      word.className = "wght-word";      // letters of a word never split across lines
      [...part].forEach((ch) => {
        const cell = document.createElement("span");
        cell.className = "wght-char";
        cell.style.setProperty("--i", i++);
        cell.style.setProperty("--step", `${step}ms`);
        cell.innerHTML = '<span class="wght-char__reserve"></span><span class="wght-char__glyph"></span>';
        cell.firstChild.textContent = ch;
        cell.lastChild.textContent = ch;
        word.append(cell);
      });
      visual.append(word);
    });

    line.replaceChildren(label, visual);
    line.style.opacity = "";
  }

  // Wait (briefly) for the variable font so the first frames aren't in the fallback.
  function start() {
    line.style.opacity = "0";   // avoid a bold -> light flash while the font loads
    const family = document.documentElement.lang === "zh-CN" ? "Noto Sans SC" : "Noto Sans KR";
    const ready = document.fonts ? document.fonts.load(`700 1em "${family}"`, line.textContent) : Promise.resolve();
    Promise.race([ready, new Promise((r) => setTimeout(r, 800))]).then(build, build);
  }

  if (document.documentElement.classList.contains("age-ok")) start();
  else document.getElementById("age-yes").addEventListener("click", start, { once: true });
})();
