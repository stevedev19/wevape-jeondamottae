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
  tel: "0212345678",        // ← real number, digits only (no dashes)
  display: "02-1234-5678",  // ← how it appears on screen
};

// Notice ticker — add/remove lines freely. They rotate in the marquee.
const NOTICES = [
  "🚚 전 상품 전국 무료배송 진행 중!",
  "⚡ 영등포 인근 퀵서비스 가능 — 당일 수령",
  "📦 오후 3시 이전 주문 시 당일발송",
  "🎁 신규 회원 첫 구매 사은품 증정",
  "💬 제품 상담은 카카오톡으로 편하게 문의하세요",
];

// Blog / notice cards. Add objects to show more posts.
const BLOG_POSTS = [
  {
    date: "2026.09.20",
    title: "9월 신상 액상 입고 안내",
    excerpt: "인기 브랜드 신규 액상이 대량 입고되었습니다. 매장 및 온라인에서 만나보세요.",
    link: "#", // ← replace with the real post URL
  },
  {
    date: "2026.09.12",
    title: "추석 연휴 배송 일정 공지",
    excerpt: "추석 연휴 기간 주문 및 배송 일정을 안내드립니다. 주문 전 꼭 확인해 주세요.",
    link: "#",
  },
  {
    date: "2026.09.03",
    title: "코일 교체 주기, 이렇게 관리하세요",
    excerpt: "맛과 수명을 지키는 코일 관리 팁. 초보자도 쉽게 따라 할 수 있습니다.",
    link: "#",
  },
];

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
(function buildTicker() {
  const track = document.getElementById("ticker-track");
  if (!track) return;

  const makeItems = () =>
    NOTICES.map((t) => `<span class="ticker__item">${t}</span>`).join("");

  // Two copies so the -50% CSS loop is seamless.
  track.innerHTML = makeItems() + makeItems();
})();

/* ---------- 4. Blog cards ---------- */
(function buildBlog() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  grid.innerHTML = BLOG_POSTS.map(
    (p) => `
    <a class="blog-card reveal" href="${p.link}">
      <div class="blog-card__date">${p.date}</div>
      <h3 class="blog-card__title">${p.title}</h3>
      <p class="blog-card__excerpt">${p.excerpt}</p>
    </a>`
  ).join("");
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
