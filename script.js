/* =================================================================
   위베이프 영등포점 — script.js
   ================================================================= */

/* =================================================================
   ✏️  EDIT YOUR CONTENT HERE
   Everything you'll want to change regularly lives in this block.
   You should not need to touch the layout code below it.
   ================================================================= */

// Store phone number — used for the tap-to-call button.
// Use digits only for the tel: link; DISPLAY is what users see.
const STORE_PHONE = {
  tel: "050713762074",        // ← real number, digits only (no dashes)
  display: "0507-1376-2074",  // ← how it appears on screen
};

// Notice ticker — add/remove lines freely. They rotate in the marquee.
// One list per language: ko = 한국어, en = English, zh = 中文.
const NOTICES = {
  ko: [
    "🚚 전 상품 전국 무료배송 진행 중!",
    "⚡ 영등포 인근 퀵서비스 가능 — 당일 수령",
    "📦 오후 3시 이전 주문 시 당일발송",
    "🎁 신규 회원 첫 구매 사은품 증정",
    "💬 제품 상담은 카카오톡으로 편하게 문의하세요",
  ],
  en: [
    "🚚 Free nationwide shipping on all products!",
    "⚡ Quick delivery near Yeongdeungpo — get it today",
    "📦 Order before 3 PM for same-day dispatch",
    "🎁 Free gift with new members' first purchase",
    "💬 Questions about products? Ask us on KakaoTalk",
  ],
  zh: [
    "🚚 全场商品全国免费配送！",
    "⚡ 永登浦附近可闪送 — 当日收货",
    "📦 下午3点前下单，当日发货",
    "🎁 新会员首次购物赠送礼品",
    "💬 产品咨询请通过 KakaoTalk 联系我们",
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
      en: "Yeongdeungpo E-Cigarettes | Can you take an e-cigarette on a flight abroad — even to China or Japan?",
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
    "meta.desc": "WeVape x Jeondam-eottae Yeongdeungpo — e-cigarette devices, e-liquids, coils and accessories. Free nationwide shipping, same-day dispatch, quick delivery.",

    "age.title": "Are you 19 or older?",
    "age.desc": "This site sells e-cigarette products and is for adults only.<br />Minors may not use this site.",
    "age.yes": "Yes (19 or older)",
    "age.no": "No",
    "age.legal": "Under the Juvenile Protection Act, we do not sell to anyone under 19.",

    "logo.mark": "WeVape",
    "logo.sub": "Yeongdeungpo",
    "nav.categories": "Categories",
    "nav.about": "About",
    "nav.blog": "News",
    "nav.location": "Location",
    "header.cta": "Chat",

    "hero.eyebrow": "WeVape · Yeongdeungpo",
    "hero.title": "Yeongdeungpo E-Cigarettes<br /><span class=\"grad-text\">Free Nationwide Shipping</span>",
    "hero.subtitle": "Devices, e-liquids, coils and accessories.<br />Genuine products only, shipped the same day.",
    "cta.kakao": "Chat on KakaoTalk",

    "ticker.label": "Notices",

    "perk.ship.title": "Free Shipping",
    "perk.ship.desc": "Free anywhere in Korea",
    "perk.quick.title": "Quick Delivery",
    "perk.quick.desc": "When you need it fast",
    "perk.parking.title": "Parking",
    "perk.parking.desc": "Free parking for store visits",
    "perk.sameday.title": "Same-Day Dispatch",
    "perk.sameday.desc": "Even afternoon orders ship today",

    "about.title": "Yeongdeungpo's E-Cigarette Specialist",
    "about.p1": "WeVape x Jeondam-eottae Yeongdeungpo is a specialty store offering genuine e-cigarette devices, e-liquids, coils and accessories at fair prices. Whether you're a beginner or an enthusiast, our in-store experts will help you find the right product.",
    "about.p2": "Online orders come with free nationwide shipping and same-day dispatch, and customers near Yeongdeungpo can get even faster delivery by quick service.",
    "about.btn": "View Store Location",
    "about.alt": "Store photo",

    "cat.title": "Categories",
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
    "loc.kakao": "💬 KakaoTalk Chat",
    "loc.map": "View on Naver Map",

    "footer.brand": "WeVape x Jeondam-eottae Yeongdeungpo",
    "footer.bizName": "Business name: WeVape x Jeondam-eottae Yeongdeungpo",
    "footer.rep": "Representative",
    "footer.phone": "Phone",
    "footer.regNo": "Mail-order business registration no.",
    "footer.hours": "Hours: Daily 10:00 – 21:00",
    "footer.addr": "Address: WeVape x Jeondam-eottae Yeongdeungpo, 1F, 161 Dangsan-ro, Yeongdeungpo-gu, Seoul",
    "footer.notice": "This site is for adults aged 19 and over only. Under the Juvenile Protection Act, we do not sell to minors.",
    "footer.copy": "© 2026 WEVAPE x Jeondam-eottae Yeongdeungpo. All rights reserved.",

    "float.text": "KakaoTalk",
  },

  zh: {
    "meta.title": "WeVape x Jeondam-eottae 永登浦店 · 永登浦电子烟 · 全国免费配送",
    "meta.desc": "WeVape x Jeondam-eottae 永登浦店 — 电子烟设备、烟油、雾化芯及配件。全国免费配送，当日发货，闪送服务。",

    "age.title": "您是否已满19周岁？",
    "age.desc": "本网站销售电子烟相关产品，仅限成年人访问。<br />未成年人禁止使用。",
    "age.yes": "是（已满19周岁）",
    "age.no": "否",
    "age.legal": "根据韩国《青少年保护法》，我们不向未满19周岁的青少年出售商品。",

    "logo.mark": "WeVape",
    "logo.sub": "永登浦店",
    "nav.categories": "商品分类",
    "nav.about": "关于我们",
    "nav.blog": "公告",
    "nav.location": "交通指南",
    "header.cta": "咨询",

    "hero.eyebrow": "WeVape · 永登浦店",
    "hero.title": "永登浦电子烟<br /><span class=\"grad-text\">全国免费配送</span>",
    "hero.subtitle": "从设备到烟油、雾化芯和配件，一应俱全。<br />只售正品，当日发货，快速送达。",
    "cta.kakao": "KakaoTalk 咨询",

    "ticker.label": "公告",

    "perk.ship.title": "免费配送",
    "perk.ship.desc": "全国各地免费送达",
    "perk.quick.title": "闪送服务",
    "perk.quick.desc": "急用可选闪送",
    "perk.parking.title": "可停车",
    "perk.parking.desc": "到店可免费停车",
    "perk.sameday.title": "当日发货",
    "perk.sameday.desc": "下午下单也当日发出",

    "about.title": "永登浦电子烟专卖店",
    "about.p1": "WeVape x Jeondam-eottae 永登浦店是一家以合理价格提供正品电子烟设备、烟油、雾化芯及配件的专卖店。无论您是新手还是资深玩家，店内专业顾问都能帮您找到合适的产品。",
    "about.p2": "线上订单支持全国免费配送和当日发货，永登浦附近的顾客还可通过闪送更快收货。",
    "about.btn": "查看门店位置",
    "about.alt": "门店照片",

    "cat.title": "商品分类",
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
    "loc.kakao": "💬 KakaoTalk 咨询",
    "loc.map": "在 Naver 地图中查看",

    "footer.brand": "WeVape x Jeondam-eottae 永登浦店",
    "footer.bizName": "商号：WeVape x Jeondam-eottae 永登浦店",
    "footer.rep": "代表",
    "footer.phone": "电话",
    "footer.regNo": "通信销售业申报编号",
    "footer.hours": "营业时间：每天 10:00 – 21:00",
    "footer.addr": "地址：首尔特别市永登浦区堂山路161号 1层 WeVape x Jeondam-eottae 永登浦店",
    "footer.notice": "本网站仅限年满19周岁的成年人使用。根据韩国《青少年保护法》，我们不向未成年人出售商品。",
    "footer.copy": "© 2026 WEVAPE x Jeondam-eottae 永登浦店。保留所有权利。",

    "float.text": "KakaoTalk 咨询",
  },
};

/* =================================================================
   ⬇️  LAYOUT / BEHAVIOR CODE — usually no need to edit below
   ================================================================= */

/* ---------- 1. Age verification modal ---------- */
(function ageGate() {
  const gate = document.getElementById("age-gate");
  const yes = document.getElementById("age-yes");
  const no = document.getElementById("age-no");
  const KEY = "wevape_age_verified";

  // Show only if not already confirmed this session.
  // (localStorage persists; swap to sessionStorage for per-tab reset.)
  if (!localStorage.getItem(KEY)) {
    gate.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  yes.addEventListener("click", () => {
    localStorage.setItem(KEY, "true");
    gate.classList.remove("is-open");
    document.body.style.overflow = "";
  });

  no.addEventListener("click", () => {
    // Under-19 → leave the site.
    window.location.href = "https://www.google.com";
  });
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

/* ---------- 4. Blog cards ---------- */
function buildBlog(lang) {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  const pick = (v) => (typeof v === "string" ? v : v[lang] || v.ko);
  // On a language switch the cards are rebuilt after scroll reveal has
  // already run, so show them straight away instead of leaving them hidden.
  const revealClass = grid.dataset.built ? "reveal is-visible" : "reveal";
  grid.dataset.built = "true";

  grid.innerHTML = BLOG_POSTS.map(
    (p) => `
    <a class="blog-card ${revealClass}" href="${p.link}">
      <div class="blog-card__date">${p.date}</div>
      <h3 class="blog-card__title">${pick(p.title)}</h3>
      <p class="blog-card__excerpt">${pick(p.excerpt)}</p>
    </a>`
  ).join("");
}

/* ---------- 4b. Language switch (KO / EN / 中文) ---------- */
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

    buildTicker(lang);
    buildBlog(lang);

    document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active);
    });

    localStorage.setItem(KEY, lang);
  }

  // Saved choice → browser language → Korean.
  const browser = (navigator.language || "").toLowerCase();
  const initial =
    localStorage.getItem(KEY) ||
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
  call.textContent = `📞 ${STORE_PHONE.display}`;
})();

/* ---------- 6. Scroll reveal (Intersection Observer) ---------- */
(function scrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Note: blog cards are injected above, so observe after that runs.
  els.forEach((el) => io.observe(el));
})();
