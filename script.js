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
// title / excerpt take one string per language. image = thumbnail file in
// the project folder (shown cropped to a square; leave it out for no image).
const BLOG_POSTS = [
  {
    date: "2026.08.14",
    image: "news-1.jpg",
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
    image: "news-2.jpg",
    title: {
      ko: "전담어때 기기리뷰",
      en: "Jeondam-ottae Device Review",
      zh: "Jeondam-ottae 设备测评",
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
    image: "news-3.jpg",
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

// Opening hours, used for the live "영업중 / 영업종료" badge in the
// Location section. Checked in Seoul time, so visitors abroad see the
// store's real status. closedDays: 0 = Sunday, 1 = Monday … 6 = Saturday.
// If you change these, also update the hours text in index.html and the
// loc.hours / loc.closed translations below.
const STORE_HOURS = {
  open: "10:00",
  close: "21:00",
  closedDays: [0],
  timeZone: "Asia/Seoul",
};

// Naver Map review page, used by each card's "더보기" link and the
// "네이버에서 전체 리뷰 보기" button under the reviews.
const NAVER_REVIEWS_URL = "https://map.naver.com/p/entry/place/1257644330?c=15.00,0,0,0,dh&placePath=%2Freview";

// Customer reviews: real Naver Map visitor reviews (place 1257644330,
// review tab, newest first), copied word for word on 2026-10-15.
// name = the reviewer's nickname exactly as Naver shows it.
// quote.ko = the exact, FULL review text (line breaks kept). The card only
// shows the first 4 lines (CSS clamp); the full text stays here.
// quote.en = English translation, shown on the English page. Languages
// without a translation (e.g. Chinese) show the Korean original.
// date = the visit date Naver shows. rating = 1–5 stars.
// image = the photo the customer attached to that review on Naver (only set
// when the review has one; cards without it stay text-only).
// Add more objects to show more cards (3 per row on desktop).
const REVIEWS = [
  {
    rating: 5,
    name: "jisophie",
    date: "2026.09.29",
    image: "review-1.jpg",
    quote: {
      ko: "여기 몇 년째 다니고 있는 단골인데 요번엔 오랜만에 사러 들렀어요 🥰\n\n얼마 전에 급하게 액상이 떨어져서 어쩔 수 없이 다른 곳에서 그냥 저렴한 걸로 아무거나 사서 피웠는데… 진짜 이건 저도 알고 싶지 않았는데…ㅠㅠ 피고 나서 얼굴에 뭐가 막 올라오는 거예요… 처음에는 다른 이유인가 했는데, 액상 여기껄로 바꾸니 얼굴 뾰루지 싹 사라졌어요.\n\n여기 위베이프에서는 몇 년째 액상을 사면서 이런 식으로 피부에 문제가 생겼던 적이 한 번도 없었거든요.\n\n이번 일을 겪고 나서야 오래됐거나 출처가 확실하지 않은 액상, 혹은 품질이 떨어지는 제품 파는 곳이 진짜 많다는걸 더 확실하게 체감됐달까…\n\n그래서 앞으로는 절대 아무 데서나 사지 말고, 역시 믿고 살 수 있는 곳에서 제대로 사야겠다는 생각이 들었어용 🥲🥲",
      en: "I've been a regular here for years, and this time I stopped by to buy for the first time in a while 🥰\n\nNot long ago I suddenly ran out of e-liquid, so I had no choice but to grab some cheap one from somewhere else… honestly, I wish I'd never had to find this out… ugh, after vaping it, stuff started breaking out all over my face… At first I thought it was something else, but once I switched back to the liquid from here, the breakouts cleared right up.\n\nIn all my years of buying liquid here at WeVape, I've never once had a skin problem like that.\n\nOnly after going through this did it really hit me how many places sell old liquid, liquid of unclear origin, or low-quality products…\n\nSo from now on I'm never buying just anywhere — I'll buy properly from a place I can trust 🥲🥲",
    },
  },
  {
    rating: 5,
    name: "ZH91",
    date: "2026.09.11",
    image: "review-2.jpg",
    quote: {
      ko: "영등포구청역 전자담배 가게 중에 여기만한 곳 없네요\n방문할 때 마다 사장님이 좋은걸로 추천도 잘 해주시고\n친절하게 맞이 해주셔서 단골 될 수 밖에 없습니다",
      en: "No e-cigarette shop near Yeongdeungpo-gu Office Station comes close to this one\nEvery time I visit, the owner recommends great stuff\nand welcomes me so warmly that I couldn't help becoming a regular",
    },
  },
  {
    rating: 5,
    name: "쿠우쿵이",
    date: "2026.09.11",
    image: "review-3.jpg",
    quote: {
      ko: "항상 아버님꺼 구매하러 방문하는데\n이번엔 신상이 나왔다고 해서 사장님 추천받고 구매해봤습니다!!\n사장님 추천 이즈 뭔들~~~!!\n갈때마다 친절히 웃어주시고\n추천도 잘해주셔서 항상 감사합니당\n덕분에 이쁨받는 며느리에용ㅋㅋㅋ",
      en: "I always come here to buy for my father-in-law,\nand this time they said something new had come out, so I took the owner's recommendation and bought it!!\nThe owner's picks never miss~~~!!\nEvery time I go, they greet me with a warm smile\nand give great recommendations, so I'm always grateful\nThanks to them, I'm the favorite daughter-in-law lol",
    },
  },
];

// Page text translations. Korean is taken from index.html itself,
// so only English (en) and Chinese (zh) live here. Keys match the
// data-i18n / data-i18n-attr attributes in index.html.
const TRANSLATIONS = {
  en: {
    "meta.title": "WeVape x Jeondam-ottae Yeongdeungpo · E-Cigarette Shop · Free Nationwide Shipping",
    "meta.desc": "WeVape x Jeondam-ottae Yeongdeungpo: e-cigarette devices, e-liquids, coils and accessories. Free nationwide shipping, same-day dispatch, quick delivery.",

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

    "hero.title": "<span class=\"hero__line1\">Yeongdeungpo <span class=\"nowrap\">E-Cigarettes</span></span><br /><span class=\"hero__line2\">Free Nationwide Shipping</span>",
    "hero.subtitle": "We sell devices, e-liquids, coils and accessories in store and online.",
    "perk.ship.title": "Free Shipping",
    "perk.ship.desc": "Free anywhere in Korea",
    "perk.quick.title": "Quick Delivery",
    "perk.quick.desc": "Same-day near Yeongdeungpo",
    "perk.parking.title": "Parking",
    "perk.parking.desc": "For store visitors",
    "perk.sameday.title": "Same-Day Dispatch",
    "perk.sameday.desc": "Order before 3 PM",
    "hero.products": "See what we sell",
    "hero.age": "19+ only",
    "cta.naver": "Chat on Naver",

    "ticker.label": "Notices",
    "ticker.title": "Notice",
    "ticker.pause": "Pause notices",
    "theme.light": "Light mode",
    "brands.label": "Brands we carry",

    "about.title": "1F, 161 Dangsan-ro",
    "about.p1": "WeVape x Jeondam-ottae Yeongdeungpo sells e-cigarette devices, e-liquids, coils and accessories. Ask about any product in store or on Naver chat before you buy.",
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
    "status.open": "Open now",
    "status.closed": "Closed",

    "search.open": "Search",
    "search.label": "Search the site",
    "search.placeholder": "Search sections, FAQ, products…",
    "search.close": "Close",
    "search.results": "Results",
    "search.empty": "No results",
    "search.hint": "↑↓ to move · Enter to select · Esc to close",
    "search.group.sections": "Sections",
    "search.group.faq": "FAQ",
    "search.group.categories": "Products",
    "search.group.actions": "Actions",
    "search.call": "Call us",
    "loc.naver": "Naver Chat",
    "loc.map": "View on Naver Map",
    "loc.gmap": "View on Google Map",

    "footer.brand": "WeVape x Jeondam-ottae Yeongdeungpo",
    "footer.bizName": "Business name: WeVape x Jeondam-ottae Yeongdeungpo",
    "footer.rep": "Representative",
    "footer.phone": "Phone",
    "footer.regNo": "Mail-order business registration no.",
    "footer.hours": "Hours: Daily 10:00 – 21:00 (Closed on Sundays)",
    "footer.addr": "Address: WeVape x Jeondam-ottae Yeongdeungpo, 1F, 161 Dangsan-ro, Yeongdeungpo-gu, Seoul",
    "footer.notice": "This site is for adults aged 19 and over only. Under the Juvenile Protection Act, we do not sell to minors.",
    "footer.copy": "© 2026 WeVape x Jeondam-ottae Yeongdeungpo. All rights reserved.",

    "float.text": "Naver",

    "wechat.title": "Scan with WeChat to add us",
    "wechat.idLabel": "WeChat ID",
    "wechat.copy": "Copy WeChat ID",
    "wechat.copied": "Copied",
    "wechat.copyFail": "Please copy the ID manually",
    "wechat.close": "Close",

    "totop.label": "Back to top",

    "hint.label": "Scroll down",

    "stats.label": "WeVape in numbers",
    "stats.reviews": "Customer reviews",
    "stats.years.unit": " yrs",
    "stats.years": "In business",
    "stats.shipped": "Orders shipped",

    "reviews.title": "Customer Reviews",
    "reviews.stars": "Rated {n} out of 5",
    "reviews.photo": "Photo the customer posted with their review",
    "reviews.more": "Read more",
    "reviews.all": "See all reviews on Naver",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How long does delivery take?",
    "faq.a1": "Shipping is free nationwide, and orders placed before 3 PM ship the same day. Near Yeongdeungpo, quick delivery can get it to you the same day.",
    "faq.q2": "Can minors buy from you?",
    "faq.a2": "No. Only adults aged 19 and over can purchase. Under the Juvenile Protection Act, we do not sell to minors.",
    "faq.q3": "Can I exchange or return an item?",
    // ⚠ PLACEHOLDER: faq.a3 (refunds) and faq.a4 (payment) need the real policy, here and in index.html
    "faq.a3": "Unopened items can be exchanged or refunded within 7 days of delivery. Ask us on Naver chat for details.",
    "faq.q4": "How can I pay?",
    "faq.a4": "In store we accept card and cash. For online orders, we'll explain payment options on Naver chat.",
    "faq.q5": "Can I buy online without visiting the store?",
    "faq.a5": "Yes. Order through Naver chat and we'll ship it free anywhere in Korea.",
    "faq.q6": "What are your hours, and is there parking?",
    "faq.a6": "Open daily 10:00–21:00, closed on Sundays. Parking is available when you visit the store.",
  },

  zh: {
    "meta.title": "WeVape x Jeondam-ottae 永登浦店 · 永登浦电子烟 · 全国免费配送",
    "meta.desc": "WeVape x Jeondam-ottae 永登浦店：电子烟设备、烟油、雾化芯及配件。全国免费配送，当日发货，闪送服务。",

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

    "hero.title": "<span class=\"hero__line1\">永登浦电子烟</span><br /><span class=\"hero__line2\">全国免费配送</span>",
    "hero.subtitle": "门店与线上同步销售设备、烟油、雾化芯及配件。",
    "perk.ship.title": "免费配送",
    "perk.ship.desc": "全国各地免费送达",
    "perk.quick.title": "闪送服务",
    "perk.quick.desc": "永登浦附近当日收货",
    "perk.parking.title": "可停车",
    "perk.parking.desc": "到店顾客可用",
    "perk.sameday.title": "当日发货",
    "perk.sameday.desc": "下午3点前下单",
    "hero.products": "查看在售商品",
    "hero.age": "仅限年满19周岁者使用",
    "cta.naver": "微信咨询",

    "ticker.label": "公告",
    "ticker.title": "公告",
    "ticker.pause": "暂停公告滚动",
    "theme.light": "浅色模式",
    "brands.label": "在售品牌",

    "about.title": "堂山路161号 1层",
    "about.p1": "WeVape x Jeondam-ottae 永登浦店销售电子烟设备、烟油、雾化芯及配件。购买前可到店或通过微信咨询任何产品。",
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
    "status.open": "营业中",
    "status.closed": "休息中",

    "search.open": "搜索",
    "search.label": "站内搜索",
    "search.placeholder": "搜索版块、问题、商品…",
    "search.close": "关闭",
    "search.results": "搜索结果",
    "search.empty": "没有找到结果",
    "search.hint": "↑↓ 移动 · Enter 选择 · Esc 关闭",
    "search.group.sections": "版块",
    "search.group.faq": "常见问题",
    "search.group.categories": "商品",
    "search.group.actions": "快捷操作",
    "search.call": "拨打电话",
    "loc.naver": "微信咨询",
    "loc.map": "在 Naver 地图中查看",
    "loc.gmap": "在 Google 地图中查看",

    "footer.brand": "WeVape x Jeondam-ottae 永登浦店",
    "footer.bizName": "商号：WeVape x Jeondam-ottae 永登浦店",
    "footer.rep": "代表",
    "footer.phone": "电话",
    "footer.regNo": "通信销售业申报编号",
    "footer.hours": "营业时间：每天 10:00 – 21:00（周日休息）",
    "footer.addr": "地址：首尔特别市永登浦区堂山路161号 1层 WeVape x Jeondam-ottae 永登浦店",
    "footer.notice": "本网站仅限年满19周岁的成年人使用。根据韩国《青少年保护法》，我们不向未成年人出售商品。",
    "footer.copy": "© 2026 WeVape x Jeondam-ottae 永登浦店。保留所有权利。",

    "float.text": "微信咨询",

    "wechat.title": "微信扫码添加好友",
    "wechat.idLabel": "微信号",
    "wechat.copy": "复制微信号",
    "wechat.copied": "已复制",
    "wechat.copyFail": "请长按微信号手动复制",
    "wechat.close": "关闭",

    "totop.label": "返回顶部",

    "hint.label": "向下滚动",

    "stats.label": "数字看 WeVape",
    "stats.reviews": "顾客评价",
    "stats.years.unit": "年",
    "stats.years": "经营",
    "stats.shipped": "已发货订单",

    "reviews.title": "顾客评价",
    "reviews.stars": "{n} 星（满分 5 星）",
    "reviews.photo": "顾客随评价上传的照片",
    "reviews.more": "查看更多",
    "reviews.all": "在 Naver 查看全部评价",

    "faq.eyebrow": "FAQ",
    "faq.title": "常见问题",
    "faq.q1": "配送需要多久？",
    "faq.a1": "全国免费配送，下午3点前下单当天发货。永登浦附近可通过快递服务当天收货。",
    "faq.q2": "未成年人可以购买吗？",
    "faq.a2": "不可以。仅限年满19周岁的成年人购买。根据韩国《青少年保护法》，我们不向未成年人出售商品。",
    "faq.q3": "可以换货或退款吗？",
    "faq.a3": "未开封商品在收货后7天内可换货或退款。详情请通过微信咨询。",
    "faq.q4": "有哪些付款方式？",
    "faq.a4": "门店支持刷卡和现金。线上订单的付款方式请通过微信咨询。",
    "faq.q5": "不去门店，可以只在线上购买吗？",
    "faq.a5": "可以。通过微信咨询下单，我们免费配送到韩国全国各地。",
    "faq.q6": "营业时间和停车情况如何？",
    "faq.a6": "每天 10:00–21:00 营业，周日休息。到店可停车。",
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
      ${p.image ? `<img class="blog-card__img" src="${p.image}" alt="" width="800" height="800" loading="lazy" decoding="async" />` : ""}
      <div class="blog-card__body">
        <div class="blog-card__date">${p.date}</div>
        <h3 class="blog-card__title">${pick(p.title)}</h3>
        <p class="blog-card__excerpt">${pick(p.excerpt)}</p>
      </div>
    </a>`
  ).join("");
}

/* ---------- 4-r. Review cards ---------- */
function buildReviews(lang) {
  const track = document.getElementById("reviews-track");
  if (!track) return;

  const pick = (v) => (typeof v === "string" ? v : v[lang] || v.ko);
  // The card shows 4 lines, so blank lines between paragraphs are dropped
  // there (the stored text keeps them).
  const quoteLang = (v) => (typeof v !== "string" && v[lang] ? lang : "ko");
  const t = TRANSLATIONS[lang] || {};
  const readMore = t["reviews.more"] || "더보기";
  const photoAlt = (TRANSLATIONS[lang] || {})["reviews.photo"] || "고객이 리뷰에 올린 사진";
  const starsLabel = (n) =>
    ((TRANSLATIONS[lang] || {})["reviews.stars"] || "별점 5점 만점에 {n}점").replace("{n}", n);

  track.innerHTML = REVIEWS.map(
    (r) => `
    <figure class="review-card">
      ${r.image ? `<img class="review-card__img" src="${r.image}" alt="${photoAlt}" width="799" height="1000" loading="lazy" decoding="async" />` : ""}
      <div class="review-card__body">
        <div class="review-card__stars" role="img" aria-label="${starsLabel(r.rating)}">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
        <blockquote class="review-card__quote" lang="${quoteLang(r.quote)}">${pick(r.quote).replace(/\n{2,}/g, "\n")}</blockquote>
        <a class="review-card__more" href="${NAVER_REVIEWS_URL}" target="_blank" rel="noopener noreferrer">${readMore}<span class="visually-hidden"> (${pick(r.name)})</span></a>
        <figcaption class="review-card__meta"><span class="review-card__name">${pick(r.name)}</span>${r.date ? `<span class="review-card__date">${r.date}</span>` : ""}</figcaption>
      </div>
    </figure>`
  ).join("");

  const all = document.getElementById("reviews-all");
  if (all) all.href = NAVER_REVIEWS_URL;
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

/* ---------- 4-p. Command palette (search button / Cmd+K / Ctrl+K) ---------- */
// Searches sections, FAQ questions (and their answers), product categories
// and two quick actions (chat, call). Every item is matched against its text
// in all three languages, so "배송" also works on the English page; results
// are shown in the current language. Runs before the language switch (4b) so
// it can read the original Korean text from the page.
(function commandPalette() {
  const modal = document.getElementById("palette");
  const input = document.getElementById("palette-input");
  const list = document.getElementById("palette-list");
  const empty = document.getElementById("palette-empty");
  const openBtn = document.getElementById("search-open");
  const closeBtn = document.getElementById("palette-close");
  if (!modal || !openBtn) return;

  const root = document.documentElement;
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  const isMac = /Mac|iPhone|iPad|iPod/.test((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "");
  openBtn.querySelector(".search-trigger__kbd").textContent = isMac ? "⌘K" : "Ctrl K";

  // Korean text straight from the markup, plus labels that only exist here.
  const KO = {
    "search.group.sections": "바로가기",
    "search.group.faq": "자주 묻는 질문",
    "search.group.categories": "판매 품목",
    "search.group.actions": "바로 실행",
    "search.call": "전화하기",
  };
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    KO[el.dataset.i18n] = el.textContent.replace(/\s+/g, " ").trim();
  });

  const LANG = { ko: "ko", en: "en", "zh-CN": "zh" };
  const current = () => LANG[root.lang] || "ko";
  const strip = (html) => {
    const d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent.replace(/\s+/g, " ").trim();
  };
  const text = (key, lang = current()) => {
    const v = lang !== "ko" && (TRANSLATIONS[lang] || {})[key];
    return v ? strip(v) : KO[key] || "";
  };
  const everyLang = (key) => ["ko", "en", "zh"].map((l) => text(key, l));

  // Sections: [label key, target, more keys to search, extra keywords]
  const SECTIONS = [
    ["nav.about", "#about", ["about.title"], "소개 매장 about intro store 关于"],
    ["nav.categories", "#categories", ["cat.title"], "카테고리 품목 상품 category categories products 商品 分类"],
    ["reviews.title", "#reviews", [], "리뷰 후기 review reviews 评价 评论"],
    ["nav.blog", "#blog", ["blog.title"], "공지 소식 뉴스 블로그 notice notices news blog 公告 资讯"],
    ["faq.title", "#faq", ["faq.eyebrow"], "faq 질문 자주 묻는 questions help 问题"],
    ["nav.location", "#location", ["loc.title", "loc.addr"], "오시는길 위치 지도 주소 영업시간 location map address directions hours 地址 地图 营业时间"],
  ];

  function buildItems() {
    const items = [];
    SECTIONS.forEach(([key, sel, more, extra]) => {
      const el = document.querySelector(sel);
      if (!el) return;
      items.push({ group: "sections", icon: "i-hash", label: text(key), main: everyLang(key), more: [...more.flatMap(everyLang), extra], run: () => jumpTo(el) });
    });
    document.querySelectorAll(".faq__item").forEach((item) => {
      const q = item.querySelector("[data-i18n^='faq.q']").dataset.i18n;
      items.push({ group: "faq", icon: "i-help", label: text(q), main: everyLang(q), more: everyLang(q.replace(".q", ".a")), run: () => openFaq(item) });
    });
    const cats = document.getElementById("categories");
    document.querySelectorAll(".cat-item").forEach((el) => {
      const key = el.dataset.i18n;
      items.push({ group: "categories", icon: "i-tag", label: text(key), main: everyLang(key), more: [], run: () => jumpTo(cats) });
    });
    // Chat does whatever the site's chat button does (Naver; WeChat QR on the Chinese page).
    items.push({
      group: "actions", icon: "i-chat", label: text("cta.naver"), main: everyLang("cta.naver"),
      more: ["카카오톡 카톡 카카오 kakao kakaotalk 상담 채팅 문의 chat message contact 네이버 naver wechat 微信 咨询 聊天"],
      run: () => document.querySelector(".float-naver").click(),
    });
    items.push({
      group: "actions", icon: "i-phone", label: text("search.call"), meta: STORE_PHONE.display, main: everyLang("search.call"),
      more: [`전화 연락 번호 call phone tel number 电话 联系 ${STORE_PHONE.display} ${STORE_PHONE.tel}`],
      run: () => { window.location.href = `tel:${STORE_PHONE.tel}`; },
    });
    return items;
  }

  // Matching: each word of the query must hit the item. A substring hit in the
  // item's own text scores highest (more at the start), then a hit in its extra
  // text (answers, keywords). A loose in-order match (letters in the same order
  // with gaps, e.g. "배걸" → "배송은 얼마나 걸리나요?") counts only on the item's own text.
  const norm = (s) => s.toLowerCase().normalize("NFC").replace(/[\s·.,!?/&()\-–'"…]+/g, "");
  const inOrder = (q, s) => { let i = 0; for (const ch of s) { if (ch === q[i] && ++i === q.length) return true; } return false; };
  function wordScore(item, w) {
    let best = 0;
    for (const f of item.main) {
      const n = norm(f), i = n.indexOf(w);
      if (i === 0) best = Math.max(best, 40);
      else if (i > 0) best = Math.max(best, 30);
      else if (w.length > 1 && inOrder(w, n)) best = Math.max(best, 10);
    }
    if (!best) for (const f of item.more) if (norm(f).includes(w)) best = Math.max(best, 20);
    return best;
  }
  function search(items, query) {
    const words = query.toLowerCase().split(/\s+/).map(norm).filter(Boolean);
    return items
      .map((item, order) => {
        let total = 0;
        for (const w of words) { const s = wordScore(item, w); if (!s) return null; total += s; }
        return { item, total, order };
      })
      .filter(Boolean)
      .sort((a, b) => b.total - a.total || a.order - b.order)
      .slice(0, 12)
      .map((r) => r.item);
  }

  let items = [];
  let shown = [];
  let active = 0;
  let opener = null;

  function option(item, i, withGroup) {
    const li = document.createElement("li");
    li.className = "palette__opt";
    li.id = `palette-opt-${i}`;
    li.setAttribute("role", "option");
    li.dataset.index = i;
    li.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#${item.icon}"/></svg><span class="palette__label"></span>`;
    li.querySelector(".palette__label").textContent = item.label;
    const meta = item.meta || (withGroup ? text(`search.group.${item.group}`) : "");
    if (meta) {
      const m = document.createElement("span");
      m.className = "palette__meta";
      m.textContent = meta;
      li.append(m);
    }
    return li;
  }

  function render() {
    const query = input.value.trim();
    list.textContent = "";
    if (!query) {
      // Nothing typed yet: sections and quick actions, grouped.
      shown = items.filter((it) => it.group === "sections" || it.group === "actions");
      let group = null;
      shown.forEach((item, i) => {
        if (item.group !== group) {
          group = item.group;
          const h = document.createElement("li");
          h.className = "palette__group";
          h.setAttribute("role", "presentation");
          h.textContent = text(`search.group.${group}`);
          list.append(h);
        }
        list.append(option(item, i, false));
      });
    } else {
      shown = search(items, query);
      shown.forEach((item, i) => list.append(option(item, i, true)));
    }
    list.hidden = !shown.length;
    empty.hidden = !!shown.length;
    input.setAttribute("aria-expanded", String(!!shown.length));
    setActive(0);
  }

  function setActive(i) {
    if (!shown.length) { input.removeAttribute("aria-activedescendant"); return; }
    active = (i + shown.length) % shown.length;
    list.querySelectorAll(".palette__opt").forEach((li) => li.setAttribute("aria-selected", String(+li.dataset.index === active)));
    const li = document.getElementById(`palette-opt-${active}`);
    input.setAttribute("aria-activedescendant", li.id);
    li.scrollIntoView({ block: "nearest" });
  }

  function open() {
    if (!modal.hidden) return;
    opener = document.activeElement;
    items = buildItems();            // fresh labels in the current language
    input.value = "";
    render();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    input.focus();
  }

  function close(restoreFocus = true) {
    if (modal.hidden) return;
    // Never leave focus on the hidden input (e.g. opened by shortcut with nothing focused before).
    if (modal.contains(document.activeElement)) document.activeElement.blur();
    modal.hidden = true;
    document.body.style.overflow = "";
    if (restoreFocus && opener && opener !== document.body) opener.focus();
  }

  function choose(i) {
    const item = shown[i];
    if (!item) return;
    close(false);
    item.run();
  }

  function jumpTo(el) {
    el.scrollIntoView({ behavior: motionOK ? "smooth" : "auto", block: "start" });
    const target = el.querySelector("h2") || el;
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }

  function openFaq(item) {
    const btn = item.querySelector(".faq__q");
    if (!item.classList.contains("is-open")) btn.click();   // the accordion closes the others
    item.scrollIntoView({ behavior: motionOK ? "smooth" : "auto", block: "center" });
    btn.focus({ preventScroll: true });
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", () => close());
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  input.addEventListener("input", render);
  list.addEventListener("mousemove", (e) => {
    const li = e.target.closest(".palette__opt");
    if (li && +li.dataset.index !== active) setActive(+li.dataset.index);
  });
  list.addEventListener("click", (e) => {
    const li = e.target.closest(".palette__opt");
    if (li) choose(+li.dataset.index);
  });

  modal.addEventListener("keydown", (e) => {
    // Korean/Chinese IME still composing. keyCode 229 is deprecated but Safari
    // still needs it: there, the Enter that commits a syllable has isComposing false.
    if (e.isComposing || e.keyCode === 229) return;
    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "Tab") {                        // keep focus inside: input <-> close button
      e.preventDefault();
      (document.activeElement === input ? closeBtn : input).focus();
    } else if (e.target === input && e.key === "ArrowDown") { e.preventDefault(); setActive(active + 1); }
    else if (e.target === input && e.key === "ArrowUp") { e.preventDefault(); setActive(active - 1); }
    else if (e.target === input && e.key === "Enter") { e.preventDefault(); choose(active); }
  });

  document.addEventListener("keydown", (e) => {
    if (!(e.metaKey || e.ctrlKey) || e.altKey || e.shiftKey || e.key.toLowerCase() !== "k") return;
    if (!root.classList.contains("age-ok")) return;                    // age gate still up
    if (!document.getElementById("wechat-modal").hidden) return;       // another dialog is open
    e.preventDefault();
    if (modal.hidden) open(); else close();
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
    buildReviews(lang);

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

/* ---------- 4c. Light / dark theme toggle ---------- */
// The <head> script sets the theme before first paint: saved choice, else OS preference, else dark.
(function themeToggle() {
  const KEY = "wevape_theme";
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const root = document.documentElement;

  function apply(theme) {
    if (theme === "light") root.dataset.theme = "light";
    else delete root.dataset.theme;
    btn.setAttribute("aria-pressed", theme === "light");
  }

  apply(root.dataset.theme === "light" ? "light" : "dark");

  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    apply(next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* not saved */ }
  });
})();

/* ---------- 4d. Back-to-top button ---------- */
// Fades in once the visitor is past the hero, scrolls smoothly back up on click.
(function backToTop() {
  const btn = document.getElementById("to-top");
  if (!btn) return;
  const SHOW_AFTER = 500;   // px scrolled before it appears
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  let ticking = false;

  function update() {
    btn.classList.toggle("is-visible", window.scrollY > SHOW_AFTER);
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: motionOK ? "smooth" : "auto" });
    // The button hides at the top, so hand keyboard focus to the logo.
    document.querySelector(".logo")?.focus({ preventScroll: true });
  });
})();

/* ---------- 4e. Hero scroll hint ---------- */
// Scrolls to the stats row; fades out once half the hero is scrolled away.
(function scrollHint() {
  const hint = document.getElementById("scroll-hint");
  const hero = document.querySelector(".hero");
  const target = document.getElementById("stats");
  if (!hint || !hero || !target) return;
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  let ticking = false;

  function update() {
    hint.classList.toggle("is-hidden", window.scrollY > hero.offsetHeight / 2);
    ticking = false;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  hint.addEventListener("click", () => {
    target.scrollIntoView({ behavior: motionOK ? "smooth" : "auto" });
  });
})();

/* ---------- 4f. Live open / closed badge ---------- */
// Open from STORE_HOURS.open up to (not including) STORE_HOURS.close, Seoul
// time; closed all day on closedDays. Rechecked at the start of every minute
// and when the tab becomes visible again. Both labels are in the markup
// (translated by the language switch); CSS shows the one that applies.
(function hoursStatus() {
  const badge = document.getElementById("hours-status");
  if (!badge) return;

  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const OPEN = toMin(STORE_HOURS.open);
  const CLOSE = toMin(STORE_HOURS.close);
  const DAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: STORE_HOURS.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  });

  function isOpen(now) {
    const p = Object.fromEntries(fmt.formatToParts(now).map((x) => [x.type, x.value]));
    if (STORE_HOURS.closedDays.includes(DAYS[p.weekday])) return false;   // e.g. Sunday: closed every hour
    const mins = Number(p.hour) * 60 + Number(p.minute);
    return mins >= OPEN && mins < CLOSE;
  }

  function update() {
    badge.classList.toggle("is-open", isOpen(new Date()));
    badge.hidden = false;
  }

  update();
  // Line up with the next minute boundary, then check every minute.
  setTimeout(() => { update(); setInterval(update, 60000); }, 60000 - (Date.now() % 60000) + 50);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) update(); });
})();

/* ---------- 5. Tap-to-call phone link ---------- */
(function wirePhone() {
  const call = document.getElementById("call-link");
  if (!call) return;
  call.href = `tel:${STORE_PHONE.tel}`;
  call.querySelector("span").textContent = STORE_PHONE.display;
})();

/* ---------- 6. Fade-and-rise on entering view (about, stats, reviews, FAQ) ---------- */
(function revealAbout() {
  const els = document.querySelectorAll(".about__text, .about__media, .stats__list, .reviews__track, .faq__list");
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

/* ---------- 8. Stat counters: count up once when the row enters view ---------- */
// Numbers come from data-count in index.html. Without motion (or without
// IntersectionObserver) they simply show their final value.
(function statCounters() {
  const list = document.querySelector(".stats__list");
  const nums = [...document.querySelectorAll("[data-count]")];
  const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  if (!list || !nums.length || !motionOK || !("IntersectionObserver" in window)) return;

  const DURATION = 1800;
  const fmt = (n) => n.toLocaleString("en-US");
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function run() {
    const t0 = performance.now();
    function frame(now) {
      const t = Math.min((now - t0) / DURATION, 1);
      nums.forEach((el) => { el.textContent = fmt(Math.round(+el.dataset.count * easeOut(t))); });
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  nums.forEach((el) => { el.textContent = "0"; });
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();   // once per page load
    run();
  }, { threshold: 0.5, rootMargin: "0px 0px -15% 0px" });   // well on screen, not just peeking at the bottom

  // Don't count behind the age gate: wait until it's confirmed.
  const start = () => io.observe(list);
  if (document.documentElement.classList.contains("age-ok")) start();
  else document.getElementById("age-yes").addEventListener("click", start, { once: true });
})();

/* ---------- 9. FAQ accordion: one answer open at a time ---------- */
(function faqAccordion() {
  const items = [...document.querySelectorAll(".faq__item")];
  items.forEach((item) => {
    const btn = item.querySelector(".faq__q");
    btn.addEventListener("click", () => {
      const opening = !item.classList.contains("is-open");
      items.forEach((other) => {
        const open = other === item && opening;
        other.classList.toggle("is-open", open);
        other.querySelector(".faq__q").setAttribute("aria-expanded", open);
      });
    });
  });
})();
