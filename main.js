/* ===== TRANSLATIONS ===== */
const translations = {
  fr: {
    nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences",
    nav_projects: "Projets", nav_services: "Services", nav_contact: "Contact",
    hero_badge: "DISPONIBLE EN FREELANCE",
    hero_title1: "Je transforme vos idées", hero_title2: " en solutions web.",
    hero_sub: "Développeur full-stack basé au Burundi. Je conçois des sites, boutiques en ligne et applications sur mesure — livrés dans les délais, avec un code propre.",
    hero_btn1: "Voir mes projets", hero_btn2: "Télécharger CV", hero_btn3: "Me contacter",
    stat1_label: "Projets livrés", stat2_label: "Technologies", stat3_label: "Disponibilité",
    stat3_val: "Maintenant",
    // About
    about_tag: "QUI SUIS-JE", about_title1: "À propos", about_title2: " de moi",
    about_p1: "Je suis Dieudo Tshibangu, développeur web full-stack passionné par la création de solutions digitales qui résolvent de vrais problèmes. Étudiant en informatique de gestion, j'ai construit 6 projets complets — de la boutique e-commerce à l'application de gestion universitaire — en travaillant seul, de A à Z.",
    about_p2: "Je travaille avec PHP, Django/Python, Java et JavaScript. Je communique couramment en français et en anglais. Disponible immédiatement sur Upwork et Fiverr. Ce que vous obtenez : un développeur réactif, un code propre et documenté, une livraison dans les délais, et une communication claire à chaque étape.",
    about_age: "21 ans", about_loc: "Bujumbura, Burundi", about_edu: "Informatique de gestion",
    about_avail: "Disponible immédiatement",
    about_btn1: "Télécharger CV", about_btn2: "GitHub", about_btn3: "LinkedIn",
    // Skills
    skills_tag: "MES COMPÉTENCES", skills_title1: "Stack", skills_title2: " technique",
    skills_desc: "Les technologies que j'utilise pour livrer des solutions web fiables et évolutives.",
    // Projects
    proj_tag: "MES RÉALISATIONS", proj_title1: "Mes", proj_title2: " Projets",
    proj_desc: "6 projets complets, construits de A à Z — chacun résout un vrai problème client.",
    proj1_type: "E-Commerce · PHP/MySQL",
    proj1_hook: "Vous avez des produits à vendre ? Voici une boutique en ligne complète.",
    proj1_desc: "TechShop est une plateforme e-commerce développée de zéro en PHP et MySQL. Elle couvre tout le cycle de vente : de l'inscription client jusqu'à la gestion des commandes par l'administrateur.",
    proj1_f1: "Connexion et inscription sécurisées avec sessions PHP",
    proj1_f2: "Panier dynamique et suivi des commandes en temps réel",
    proj1_f3: "Panel admin complet : produits, catégories, utilisateurs",
    proj1_f4: "Base de données SQL structurée et optimisée",
    proj2_type: "Tourisme · PHP/MySQL/JS",
    proj2_hook: "Mettre une région sur la carte — littéralement.",
    proj2_desc: "Lomami Horizon est un site de tourisme complet pour la région Lomami. Les visiteurs découvrent des destinations, consultent des itinéraires et laissent des avis — les admins gèrent tout depuis un panel dédié.",
    proj2_f1: "Galerie photos et carte interactive des destinations",
    proj2_f2: "Itinéraires, favoris et commentaires modérés",
    proj2_f3: "Panel admin avec gestion complète du contenu",
    proj2_f4: "Mode sombre intégré et interface multilingue",
    proj3_type: "Application Desktop · Java",
    proj3_hook: "Fini les tableurs Excel — une vraie application pour gérer votre stock.",
    proj3_desc: "Application desktop Java conçue pour les PME. Elle centralise la gestion des produits, des mouvements de stock, et génère des rapports clairs pour une meilleure prise de décision.",
    proj3_f1: "Gestion complète des produits et catégories",
    proj3_f2: "Suivi précis des entrées et sorties de stock",
    proj3_f3: "Rapports et statistiques exportables",
    proj4_type: "Application Desktop · Java",
    proj4_hook: "Gérer un établissement scolaire ne devrait pas être compliqué.",
    proj4_desc: "Application desktop complète pour la gestion administrative d'un établissement universitaire. Elle centralise étudiants, cours, inscriptions et notes dans une interface claire et efficace.",
    proj4_f1: "Gestion des étudiants, enseignants et cours",
    proj4_f2: "Système d'inscriptions et de suivi des notes",
    proj4_f3: "Tableau de bord administratif avec vue d'ensemble",
    proj5_type: "Portfolio · HTML/CSS/JS",
    proj5_hook: "Un portfolio qui se vend tout seul.",
    proj5_desc: "Mon portfolio personnel conçu pour convertir les visiteurs en clients. Design sombre moderne, animations fluides, sliders de projets, switch FR/EN — tout pensé pour la crédibilité professionnelle.",
    proj5_f1: "Design dark theme moderne avec animations CSS",
    proj5_f2: "Sliders de screenshots pour chaque projet",
    proj5_f3: "Switch bilingue Français / Anglais instantané",
    proj6_type: "Site Vitrine · Django/Python",
    proj6_hook: "Un site vitrine qui donne envie — et qui gère votre activité.",
    proj6_desc: "Site vitrine professionnel développé avec Django et Python pour un bar à jus. Il présente le menu, gère les comptes clients et offre une interface d'administration complète pour le propriétaire.",
    proj6_f1: "Menu des boissons dynamique et attrayant",
    proj6_f2: "Système de comptes et authentification utilisateurs",
    proj6_f3: "Interface d'administration Django intégrée",
    proj6_f4: "Architecture Django solide et évolutive",
    btn_github: "GitHub", btn_demo: "Voir la démo",
    // Services
    serv_tag: "CE QUE JE PROPOSE", serv_title1: "Mes", serv_title2: " Services",
    serv_desc: "Des solutions web professionnelles, livrées dans les délais, avec un code propre et documenté.",
    serv1_title: "Création de site web",
    serv1_desc: "Votre présence en ligne, enfin professionnelle. Sites vitrines, portfolios et landing pages qui reflètent votre image et convainquent vos visiteurs.",
    serv1_f1: "Design personnalisé selon votre identité", serv1_f2: "Responsive mobile, tablette et desktop", serv1_f3: "Optimisation SEO de base incluse", serv1_f4: "Livraison rapide avec révisions incluses",
    serv2_title: "Développement e-commerce",
    serv2_desc: "Vendez en ligne. Gérez facilement. Du code sur mesure, fiable et évolutif — sans plugin, sans template.",
    serv2_f1: "Catalogue produits avec catégories et filtres", serv2_f2: "Panier, commandes et historique client", serv2_f3: "Panel admin complet pour tout gérer", serv2_f4: "Base de données SQL sécurisée et structurée",
    serv3_title: "Application de gestion",
    serv3_desc: "Automatisez ce qui vous fait perdre du temps. Applications web ou desktop pour gérer stock, personnel, facturation ou école.",
    serv3_f1: "Gestion de stock, RH, facturation ou scolaire", serv3_f2: "Tableaux de bord avec statistiques en temps réel", serv3_f3: "Rapports exportables (PDF, tableaux)", serv3_f4: "Application desktop Java ou web Django/PHP",
    serv4_title: "Base de données",
    serv4_desc: "Des données bien organisées, c'est un business qui tourne. Conception, optimisation et administration de vos bases relationnelles.",
    serv4_f1: "Modélisation MCD/MLD complète", serv4_f2: "Requêtes SQL optimisées pour la performance", serv4_f3: "MySQL et SQL Server", serv4_f4: "Migration et nettoyage de données existantes",
    // Contact
    contact_tag: "TRAVAILLONS ENSEMBLE", contact_title1: "Me", contact_title2: " Contacter",
    contact_desc: "Vous avez un projet en tête ? Je réponds sous 24h, en français ou en anglais. Prêt à démarrer immédiatement.",
    contact_email_label: "Email", contact_loc_label: "Localisation", contact_avail_label: "Disponibilité",
    contact_avail_val: "Freelance · Fiverr · Upwork",
    form_name: "Votre nom", form_email: "Votre email", form_subject: "Sujet",
    form_message: "Décrivez votre projet...", form_send: "Envoyer le message",
    footer_text: "© 2026 Dieudo Tshibangu · Développeur Freelance",
    footer_made: "Fait avec ❤️ au Burundi"
  },
  en: {
    nav_home: "Home", nav_about: "About", nav_skills: "Skills",
    nav_projects: "Projects", nav_services: "Services", nav_contact: "Contact",
    hero_badge: "AVAILABLE FOR FREELANCE",
    hero_title1: "Dieudo", hero_title2: "Tshibangu",
    hero_sub: "Full-stack developer based in Burundi. I build websites, online stores and custom applications — delivered on time, with clean code.",
    hero_btn1: "View my projects", hero_btn2: "Download CV", hero_btn3: "Contact me",
    stat1_label: "Projects delivered", stat2_label: "Technologies", stat3_label: "Availability",
    stat3_val: "Now",
    about_tag: "WHO AM I", about_title1: "About", about_title2: " me",
    about_p1: "I'm Dieudo Tshibangu, a full-stack web developer who builds digital solutions that solve real problems. As a management IT student, I've independently built 6 complete projects — from e-commerce stores to university management systems — handling everything from database design to frontend delivery.",
    about_p2: "I work with PHP, Django/Python, Java and JavaScript. I'm fluent in both French and English. Available immediately on Upwork and Fiverr. What you get: a responsive developer, clean and documented code, on-time delivery, and clear communication at every step.",
    about_age: "21 years old", about_loc: "Bujumbura, Burundi", about_edu: "Management IT",
    about_avail: "Available immediately",
    about_btn1: "Download CV", about_btn2: "GitHub", about_btn3: "LinkedIn",
    skills_tag: "MY SKILLS", skills_title1: "Tech", skills_title2: " Stack",
    skills_desc: "The technologies I use to deliver reliable and scalable web solutions.",
    proj_tag: "MY WORK", proj_title1: "My", proj_title2: " Projects",
    proj_desc: "6 complete projects, built from scratch — each one solves a real client problem.",
    proj1_type: "E-Commerce · PHP/MySQL",
    proj1_hook: "Have products to sell? Here's a complete, ready-to-use online store.",
    proj1_desc: "TechShop is a full e-commerce platform built from scratch in PHP and MySQL. It covers the entire sales cycle — from customer registration to order management by the admin.",
    proj1_f1: "Secure login and registration with PHP sessions",
    proj1_f2: "Dynamic cart and real-time order tracking",
    proj1_f3: "Full admin panel: products, categories, users",
    proj1_f4: "Structured and optimized SQL database",
    proj2_type: "Tourism · PHP/MySQL/JS",
    proj2_hook: "Putting a region on the map — literally.",
    proj2_desc: "Lomami Horizon is a full tourism website for the Lomami region. Visitors explore destinations, browse itineraries and leave reviews — admins manage everything from a dedicated panel.",
    proj2_f1: "Photo gallery and interactive destination map",
    proj2_f2: "Itineraries, favorites and moderated comments",
    proj2_f3: "Admin panel with full content management",
    proj2_f4: "Built-in dark mode and multilingual interface",
    proj3_type: "Desktop Application · Java",
    proj3_hook: "No more Excel spreadsheets — a real app to manage your inventory.",
    proj3_desc: "A Java desktop application designed for small and medium businesses. It centralizes product management, stock movements, and generates clear reports for better decision-making.",
    proj3_f1: "Full product and category management",
    proj3_f2: "Precise tracking of stock entries and exits",
    proj3_f3: "Exportable reports and statistics",
    proj4_type: "Desktop Application · Java",
    proj4_hook: "Managing a school shouldn't be complicated.",
    proj4_desc: "A complete desktop application for university administrative management. It centralizes students, courses, enrollments and grades in a clear, efficient interface.",
    proj4_f1: "Student, teacher and course management",
    proj4_f2: "Enrollment and grade tracking system",
    proj4_f3: "Administrative dashboard with full overview",
    proj5_type: "Portfolio · HTML/CSS/JS",
    proj5_hook: "A portfolio that sells itself.",
    proj5_desc: "My personal portfolio designed to convert visitors into clients. Modern dark design, smooth animations, project sliders, FR/EN switch — everything built for professional credibility.",
    proj5_f1: "Modern dark theme design with CSS animations",
    proj5_f2: "Screenshot sliders for each project",
    proj5_f3: "Instant French / English bilingual switch",
    proj6_type: "Showcase Site · Django/Python",
    proj6_hook: "A showcase site that looks great — and runs your business.",
    proj6_desc: "A professional showcase website built with Django and Python for a juice bar. It displays the menu, manages customer accounts, and provides a full admin interface for the owner.",
    proj6_f1: "Dynamic and attractive drinks menu",
    proj6_f2: "User account system and authentication",
    proj6_f3: "Built-in Django administration interface",
    proj6_f4: "Solid and scalable Django architecture",
    btn_github: "GitHub", btn_demo: "Live Demo",
    serv_tag: "WHAT I OFFER", serv_title1: "My", serv_title2: " Services",
    serv_desc: "Professional web solutions, delivered on time, with clean and documented code.",
    serv1_title: "Website Creation",
    serv1_desc: "Your online presence, finally professional. Showcase sites, portfolios and landing pages that reflect your brand and convert visitors.",
    serv1_f1: "Custom design matching your identity", serv1_f2: "Mobile, tablet and desktop responsive", serv1_f3: "Basic SEO optimization included", serv1_f4: "Fast delivery with revisions included",
    serv2_title: "E-Commerce Development",
    serv2_desc: "Sell online. Manage easily. Custom, reliable and scalable code — no plugins, no templates.",
    serv2_f1: "Product catalog with categories and filters", serv2_f2: "Cart, orders and customer history", serv2_f3: "Full admin panel to manage everything", serv2_f4: "Secure and structured SQL database",
    serv3_title: "Management Application",
    serv3_desc: "Automate what's wasting your time. Web or desktop apps to manage inventory, staff, billing or school data.",
    serv3_f1: "Stock, HR, billing or school management", serv3_f2: "Dashboards with real-time statistics", serv3_f3: "Exportable reports (PDF, tables)", serv3_f4: "Java desktop or Django/PHP web application",
    serv4_title: "Database",
    serv4_desc: "Well-organized data means a business that runs smoothly. Design, optimization and management of your relational databases.",
    serv4_f1: "Full data modeling (ERD/relational)", serv4_f2: "SQL queries optimized for performance", serv4_f3: "MySQL and SQL Server", serv4_f4: "Migration and cleanup of existing data",
    contact_tag: "LET'S WORK TOGETHER", contact_title1: "Contact", contact_title2: " Me",
    contact_desc: "Got a project in mind? I reply within 24 hours, in French or English. Ready to start immediately.",
    contact_email_label: "Email", contact_loc_label: "Location", contact_avail_label: "Availability",
    contact_avail_val: "Freelance · Fiverr · Upwork",
    form_name: "Your name", form_email: "Your email", form_subject: "Subject",
    form_message: "Describe your project...", form_send: "Send message",
    footer_text: "© 2026 Dieudo Tshibangu · Freelance Developer",
    footer_made: "Made with ❤️ in Burundi"
  }
};

/* ===== LANG MANAGER ===== */
let currentLang = localStorage.getItem('lang') || 'fr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'fr' ? '🌐 EN' : '🌐 FR';
  });
  document.documentElement.lang = lang;
}

function toggleLang() {
  applyLang(currentLang === 'fr' ? 'en' : 'fr');
}

/* ===== NAVBAR SCROLL ===== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
}

/* ===== FADE IN OBSERVER ===== */
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ===== SKILL BARS ===== */
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const bar = e.target.querySelector('.skill-bar');
        if (bar) bar.style.width = bar.getAttribute('data-width');
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-bar-wrap').forEach(el => observer.observe(el));
}

/* ===== INIT (see bottom of file) ===== */

/* ===== PROJECT SLIDERS ===== */
function initSliders() {
  document.querySelectorAll('.proj-slider').forEach(slider => {
    const track = slider.querySelector('.proj-slider-track');
    const slides = slider.querySelectorAll('.proj-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const counter = slider.querySelector('.slider-counter');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    if (!track || slides.length === 0) return;

    let current = 0;
    const total = slides.length;

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, total - 1));
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      if (counter) counter.textContent = `${current + 1} / ${total}`;
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current === total - 1;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    // Touch/swipe support
    let startX = 0;
    slider.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });

    goTo(0);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initFadeIn();
  initSkillBars();
  initSliders();
  applyLang(currentLang);
});
