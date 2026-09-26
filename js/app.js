const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const icons = {
  support: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-2v-6h4M4 19a2 2 0 0 1-2-2v-4h4v6H4Zm8-15v2M9 20h6"/></svg>',
  security: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
  tools: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6 4-4 4 4-4 4"/><path d="m18 6-8.5 8.5"/><path d="M5 11 2 14l8 8 3-3"/><path d="m4 18 3-3"/></svg>',
  customer: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="m16 12 2 2 4-4"/></svg>',
  network: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2h14v2M12 12H5M12 12h7"/></svg>',
  server: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 9.5 4.5 4.5 0 0 0 7 18Z"/><path d="M12 10v6m-3-3 3 3 3-3"/></svg>',
  software: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 13h3M8 16h6"/></svg>',
  access: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="9" r="2"/><path d="M9 16c.8-1.8 5.2-1.8 6 0M8 6h1"/></svg>',
  hardware: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 8h10"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16V8h16v8"/><path d="M2 18h20M7 12h3l1-2 2 4 1-2h3"/></svg>',
  backup: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12M6 12h12M6 17h7"/><path d="M4 4h16v16H4z"/><path d="m17 15 3 3-3 3"/></svg>',
  automation: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M4 12h16M4 17h10"/><circle cx="18" cy="7" r="2"/><circle cx="7" cy="17" r="2"/></svg>',
  corporate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5h10v16M14 9h6v12M7 8h3M7 12h3M7 16h3M17 13h1M17 17h1"/></svg>',
  manufacturing: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V10l6 3V8l6 3V5l6 3v13H3Z"/><path d="M7 17h2M12 17h2M17 17h2"/></svg>',
  education: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M6 11v5c3 2 9 2 12 0v-5M21 9v7"/></svg>',
  retail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h16l-1-5H5L4 9Z"/><path d="M5 9v11h14V9M9 20v-6h6v6M3 9h18"/></svg>',
  healthcare: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14v18H5z"/><path d="M9 8h6M12 5v6M9 14h6M12 12v6"/></svg>',
  residential: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>'
};

function icon(name) { return icons[name] || icons.tools; }

async function loadData() {
  const response = await fetch("data.json");
  if (!response.ok) throw new Error("Could not load data.json");
  return response.json();
}

function cardTemplate(item, type, index = 0) {
  if (type === "service") return `
    <article class="service-card reveal">
      <div class="service-card-top">
        <div class="service-icon">${icon(item.icon)}</div>
        <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="service-focus">${item.focus}</div>
      <ul class="service-list">${item.capabilities.map(x => `<li>${x}</li>`).join("")}</ul>
      <a class="service-link" href="#contact" data-open-quote data-service="${item.title}">Discuss this service <span>→</span></a>
    </article>`;
  if (type === "managed") return `<article class="managed-card reveal"><div class="service-icon">${icon(item.icon)}</div><h3>${item.title}</h3><p>${item.text}</p><a class="managed-link" href="#contact" data-open-quote data-service="${item.title}">Discuss support →</a></article>`;
  if (type === "solution") return `<article class="solution-card reveal"><div class="solution-icon">${icon(item.icon)}</div><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`;
  if (type === "why") return `<article class="why-card reveal"><h3>${item.title}</h3><p>${item.text}</p></article>`;
  if (type === "project") return `<article class="project-card reveal"><div class="project-art"><span>${item.category}</span></div><div class="project-body"><span class="project-cat">${item.category}</span><h3>${item.title}</h3><p>${item.text}</p><span class="project-status">${item.status}</span></div></article>`;
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  $$(".reveal").forEach(el => observer.observe(el));
}

function setupFAQ(items) {
  const list = $("#faqList");
  list.innerHTML = items.map((item, i) => `
    <div class="faq-item ${i === 0 ? "open" : ""}">
      <button class="faq-q" type="button" aria-expanded="${i === 0}">${item.q}<span>＋</span></button>
      <div class="faq-a">${item.a}</div>
    </div>`).join("");
  $$(".faq-q").forEach(btn => btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const open = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  }));
}

function setupNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  const closeMenu = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  $$("#mainNav a").forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => $("#siteHeader").classList.toggle("scrolled", window.scrollY > 20), {passive:true});
}

function setupQuoteFlow(data) {
  const modal = $("#quoteModal");
  const form = $("#quoteForm");
  const serviceSelect = $("#quoteService");
  const title = $("#quoteModalTitle");
  if (!modal || !form) return;

  data.services.forEach(item => {
    const option = document.createElement("option");
    option.value = item.title;
    option.textContent = item.title;
    serviceSelect.appendChild(option);
  });

  let lastTrigger = null;
  const open = (service = "") => {
    lastTrigger = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    title.textContent = service ? `Discuss ${service}` : "Tell us what you need";
    serviceSelect.value = service || "";
    window.setTimeout(() => form.querySelector("input")?.focus(), 60);
  };
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastTrigger?.focus?.();
  };

  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-open-quote]");
    if (trigger) {
      event.preventDefault();
      open(trigger.dataset.service || "");
      return;
    }
    if (event.target.closest("[data-modal-close]")) close();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) close();
  });

  const getMessage = () => {
    const fd = new FormData(form);
    const name = fd.get("name")?.toString().trim();
    const company = fd.get("company")?.toString().trim();
    const phone = fd.get("phone")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const service = fd.get("service")?.toString().trim();
    const details = fd.get("details")?.toString().trim();
    if (!name || !phone || !service) {
      form.reportValidity();
      return null;
    }
    return [
      "Hello MKBIM SOLUTIONS, I would like to make an enquiry.",
      `Name: ${name}`,
      company ? `Company: ${company}` : "",
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Service: ${service}`,
      details ? `Requirement: ${details}` : ""
    ].filter(Boolean).join("\n");
  };

  $("#sendWhatsApp")?.addEventListener("click", () => {
    const message = getMessage();
    if (!message) return;
    window.open(`https://wa.me/${data.company.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });

  $("#sendEmail")?.addEventListener("click", () => {
    const message = getMessage();
    if (!message) return;
    const fd = new FormData(form);
    const service = fd.get("service");
    const subject = `MKBIM Enquiry - ${service}`;
    window.location.href = `mailto:${data.company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
}

function setupServiceInteractions() {
  document.addEventListener("click", event => {
    const card = event.target.closest(".service-card, .managed-card");
    if (!card || event.target.closest("a,button")) return;
    card.classList.add("is-selected");
    window.setTimeout(() => card.classList.remove("is-selected"), 650);
  });
}

loadData().then(data => {
  $("#heroEyebrow").textContent = data.hero.eyebrow;
  if (data.hero.highlight && data.hero.title.includes(data.hero.highlight)) {
    const before = data.hero.title.split(data.hero.highlight)[0].trim();
    $("#heroTitle").innerHTML = `${before} <span class="hero-highlight">${data.hero.highlight}</span>`;
  } else {
    $("#heroTitle").textContent = data.hero.title;
  }
  $("#heroDescription").textContent = data.hero.description;
  $("#heroPrimary").insertAdjacentText("beforeend", data.hero.primaryButton);
  $("#heroSecondary").insertAdjacentText("afterbegin", data.hero.secondaryButton);

  $("#trustGrid").innerHTML = data.trust.map(x => `<div class="trust-item"><div class="trust-icon">${icon(x.icon)}</div><div><strong>${x.title}</strong><span>${x.text}</span></div></div>`).join("");
  $("#servicesGrid").innerHTML = data.services.map((x, i) => cardTemplate(x, "service", i)).join("");
  $("#managedGrid").innerHTML = data.managedServices.map(x => cardTemplate(x, "managed")).join("");
  $("#solutionsGrid").innerHTML = data.solutions.map(x => cardTemplate(x, "solution")).join("");
  $("#industriesGrid").innerHTML = data.industries.map(x => `<article class="industry-card reveal"><div class="industry-icon">${icon(x.icon)}</div><strong>${x.title}</strong><p>${x.text}</p></article>`).join("");
  $("#whyGrid").innerHTML = data.why.map(x => cardTemplate(x, "why")).join("");
  $("#techCloud").innerHTML = data.technologies.map(x => `<span class="tech-pill reveal">${x}</span>`).join("");
  $("#projectsGrid").innerHTML = data.projects.map(x => cardTemplate(x, "project")).join("");
  setupFAQ(data.faqs);

  $$('[data-phone]').forEach(el => el.textContent = data.company.phone);
  $$('[data-email]').forEach(el => el.textContent = data.company.email);
  $$('[data-address]').forEach(el => el.textContent = data.company.address);
  $$('[data-phone-link]').forEach(el => el.href = `tel:${data.company.phone.replace(/[^+\d]/g, "")}`);
  $$('[data-email-link]').forEach(el => el.href = `mailto:${data.company.email}`);
  $$('[data-whatsapp]').forEach(el => el.href = `https://wa.me/${data.company.whatsapp}?text=${encodeURIComponent("Hello MKBIM SOLUTIONS, I would like to request IT support.")}`);
  $("#year").textContent = new Date().getFullYear();

  setupNavigation();
  setupReveal();
  setupQuoteFlow(data);
  setupServiceInteractions();
}).catch(error => {
  console.error(error);
  document.body.insertAdjacentHTML("afterbegin", `<div style="padding:15px;background:#fee2e2;color:#991b1b;text-align:center;font:14px Inter">Development data could not be loaded. Run this project through a local web server rather than opening index.html directly.</div>`);
});
