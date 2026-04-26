// ===== TRANSLATIONS =====
const translations = {
  en: {
    // Navbar
    'nav.hiw': 'How It Works',
    'nav.packages': 'Packages',
    'nav.results': 'Results',
    'nav.portfolio': 'Portfolio',
    'nav.cta': 'Book a Call',
    // Hero
    'hero.badge': '🎯 #1 Video Marketing Agency for Dental Clinics',
    'hero.h1': 'Turn Your Dental Practice Into a<br /><span class="gradient-text">Patient-Attracting Machine</span>',
    'hero.sub': 'Professional video marketing that builds trust, fills your chair, and grows your revenue — without you lifting a finger.',
    'hero.cta1': '🗓 Book Free Strategy Call',
    'hero.cta2': 'View Packages →',
    'hero.stat1': 'Clinics Served',
    'hero.stat2': 'Views Generated',
    'hero.stat3': 'Avg. ROI in 90 days',
    'hero.videoLabel': 'See a sample reel',
    // Logos
    'logos.label': 'Trusted by practices across the USA',
    // How It Works
    'hiw.tag': 'The Process',
    'hiw.h2': 'From Zero to Full Calendar in 5 Simple Steps',
    'hiw.sub': 'We handle everything — strategy, filming, editing, and distribution. You just show up.',
    'hiw.s1.title': 'Discovery Call',
    'hiw.s1.body': 'We analyze your practice, competitors, and target patients to craft a tailored video strategy that resonates in your local market.',
    'hiw.s2.title': 'Custom Strategy',
    'hiw.s2.body': 'Our team builds a full content calendar — video scripts, posting schedule, and platform targeting — designed to attract your ideal patient.',
    'hiw.s3.title': 'Professional Production',
    'hiw.s3.body': 'Cinematic-quality filming at your clinic (or remote production for digital content), edited with motion graphics, captions, and hooks that stop the scroll.',
    'hiw.s4.title': 'Multi-Platform Launch',
    'hiw.s4.body': 'We publish and optimize your videos across Instagram, Facebook, YouTube, TikTok, and Google — maximizing reach without you touching a single app.',
    'hiw.s5.title': 'Track & Scale',
    'hiw.s5.body': 'Monthly performance reports with real metrics — views, leads, booked appointments — and ongoing optimization to keep growth compounding.',
    // Packages
    'pkg.tag': 'Pricing',
    'pkg.h2': 'Choose the Plan That Fills Your Chairs',
    'pkg.sub': 'Transparent pricing. No hidden fees. Cancel anytime after 90 days.',
    'pkg.popularBadge': '⭐ Most Common',
    'pkg.getStarted': 'Get Started',
    // Starter
    'pkg.starter.tier': 'Starter',
    'pkg.starter.price': '300–500',
    'pkg.starter.tagline': 'Perfect for practices taking their first steps on social media',
    'pkg.starter.f1': '✅ 4 posts/month',
    'pkg.starter.f2': '✅ Basic community management',
    'pkg.starter.f3': '✅ 1 monthly report',
    'pkg.starter.f4': '✅ Email support',
    'pkg.starter.f5': '❌ Video reels editing',
    'pkg.starter.f6': '❌ Paid ad management',
    // Professional
    'pkg.pro.tier': 'Professional',
    'pkg.pro.price': '600–1,000',
    'pkg.pro.tagline': 'For growing practices ready to build a real social presence',
    'pkg.pro.f1': '✅ 8 posts/month (2 per week)',
    'pkg.pro.f2': '✅ Full community management',
    'pkg.pro.f3': '✅ Comment & DM replies',
    'pkg.pro.f4': '✅ 2 monthly reports',
    'pkg.pro.f5': '✅ Engagement analysis',
    'pkg.pro.f6': '✅ Email + chat support',
    'pkg.pro.f7': '❌ Video reels editing',
    'pkg.pro.f8': '❌ Paid ad management',
    // Elite
    'pkg.premium.tier': 'Elite',
    'pkg.premium.price': '1,200–2,000',
    'pkg.premium.tagline': 'Full content creation + 24/7 community management',
    'pkg.premium.f1': '✅ 12–16 posts/month (3–4/week)',
    'pkg.premium.f2': '✅ Professional content creation',
    'pkg.premium.f3': '✅ Video reels editing (2–4/month)',
    'pkg.premium.f4': '✅ 24/7 community management',
    'pkg.premium.f5': '✅ Influencer outreach',
    'pkg.premium.f6': '✅ 4 detailed monthly reports',
    'pkg.premium.f7': '✅ Strategy consultation (1×/month)',
    'pkg.premium.f8': '❌ Paid ad management',
    // VIP
    'pkg.vip.badge': '⭐⭐⭐ Full Management',
    'pkg.vip.tier': 'VIP',
    'pkg.vip.price': '2,000–4,000',
    'pkg.vip.tagline': 'White-glove full management for ambitious multi-location practices',
    'pkg.vip.f1': '✅ 20+ posts/month',
    'pkg.vip.f2': '✅ Unlimited reels',
    'pkg.vip.f3': '✅ Paid ads management ⭐',
    'pkg.vip.f4': '✅ Full community management',
    'pkg.vip.f5': '✅ Brand strategy',
    'pkg.vip.f6': '✅ Monthly consultation',
    'pkg.vip.f7': '✅ Competitive analysis',
    'pkg.note': '💡 Not sure which plan fits? <a href="#contact">Let\'s chat</a> — we\'ll recommend the right fit for your practice size and goals.',
    // Testimonials
    'testi.tag': 'Social Proof',
    'testi.h2': 'Real Dentists. Real Results.',
    'testi.sub': 'Don\'t take our word for it — hear from practices just like yours.',
    'testi.t1.quote': '"We went from 12 new patients a month to 47 in just 90 days. The videos DentalVid created made us look like a top-tier practice — patients told us they chose us specifically because of our Instagram videos."',
    'testi.t1.result': '📈 +292% new patients in 90 days',
    'testi.t2.quote': '"I was skeptical at first — I thought video marketing was only for big brands. But within 6 weeks we had 18K views on a single Invisalign video and our bookings for clear aligners tripled. Best investment I\'ve made."',
    'testi.t2.result': '📈 3× Invisalign bookings in 6 weeks',
    'testi.t3.quote': '"I run 3 locations and DentalVid handles everything across all of them. One team, consistent brand, incredible results. Our Google reviews went from 3.8 to 4.9 stars because video helped build patient trust before they even walked in."',
    'testi.t3.result': '📈 3.8 → 4.9 Google rating | 3 locations',
    // Portfolio
    'port.tag': 'Portfolio',
    'port.h2': 'Before & After: Our Work in Action',
    'port.sub': 'See the transformation we create — from bland to brand.',
    'port.before': 'BEFORE',
    'port.after': 'AFTER',
    'port.p1.before': 'Zero social presence, only stock photos, 89 followers',
    'port.p1.after': 'Cinematic reels, authentic team videos, 4.2K followers',
    'port.p2.before': 'Outdated website video, no TikTok, low Invisalign bookings',
    'port.p2.after': 'Viral before/after reels, 18K views, trending locally',
    'port.p3.before': '3.8-star rating, inconsistent branding across 3 locations',
    'port.p3.badMetric': 'Low trust score',
    'port.p3.after': 'Unified brand story, patient video testimonials, top-3 local SEO',
    // FAQ
    'faq.h2': 'Got Questions? We\'ve Got Answers.',
    'faq.q1': 'Do you film at my clinic or can we do it remotely?',
    'faq.a1': 'Both! For local clients, we can send a professional videographer to your clinic. For remote clients, we create high-quality content using screen recordings, supplied footage, animation, and AI-enhanced production. We\'ve worked with practices in all 50 states without ever needing to visit in person.',
    'faq.q2': 'How long before I see results?',
    'faq.a2': 'Most clients start seeing increased profile visits and DMs within 2–3 weeks. Measurable new patient bookings from video typically appear in weeks 4–8. By month 3, the majority of our clients see a 2–4× return on their investment. Results vary by market and starting point.',
    'faq.q3': 'I\'m not tech-savvy at all. Will I need to manage anything?',
    'faq.a3': 'Absolutely not. We handle 100% of the production, editing, scheduling, and posting. You simply review videos before they go live (or approve with auto-publishing enabled). Most of our clients spend less than 15 minutes per month on their video marketing once we\'re set up.',
    'faq.q4': 'What makes dental video marketing different from regular social media management?',
    'faq.a4': 'Generic social media agencies post photos and write captions. We specialize exclusively in dental video — we know which procedures convert (implants, Invisalign, whitening), what patients are searching for, and how to build the trust that turns a viewer into a booked appointment. Our team has dental-specific scriptwriters, editors who understand HIPAA compliance, and strategists who know your market.',
    'faq.q5': 'Is there a contract? Can I cancel?',
    'faq.a5': 'We require a 90-day initial commitment so we can properly execute the strategy and show real results. After that, it\'s month-to-month with 30-day cancellation notice. We\'re confident you\'ll want to stay — but we never lock you in beyond that first quarter.',
    // Contact
    'contact.tag': 'Let\'s Talk',
    'contact.h2': 'Ready to Fill Your Chairs with Video?',
    'contact.sub': 'Book a free 30-minute strategy call and we\'ll show you exactly what we\'d do for your practice — no pressure, no obligation.',
    'contact.calendlyCta': '🗓 Schedule Free Strategy Call',
    'contact.hours': 'Mon–Fri, 9am–6pm EST',
    'contact.formTitle': 'Send Us a Message',
    'contact.labelName': 'Your Name *',
    'contact.phName': 'Dr. Jane Smith',
    'contact.labelEmail': 'Email Address *',
    'contact.labelPhone': 'Phone Number',
    'contact.labelPlan': 'Interested In',
    'contact.planDefault': 'Select a plan...',
    'contact.planUnsure': 'Not sure yet',
    'contact.labelMsg': 'Tell Us About Your Practice',
    'contact.phMsg': 'Location, number of dentists, biggest challenge attracting patients...',
    'contact.submit': 'Send Message →',
    'contact.formNote': 'We respond within 24 business hours. Your info is never shared.',
    'contact.successTitle': 'Message Received!',
    'contact.successSub': 'We\'ll be in touch within 24 hours. In the meantime, book your free strategy call below.',
    'contact.successCta': 'Book Strategy Call',
    // Footer
    'footer.brand': 'The only video marketing agency built exclusively for dental practices. We know your patients, your procedures, and what makes them book.',
    'footer.services': 'Services',
    'footer.starter': 'Starter Plan',
    'footer.pro': 'Pro Plan',
    'footer.premium': 'Premium Plan',
    'footer.vip': 'VIP Plan',
    'footer.company': 'Company',
    'footer.cases': 'Case Studies',
    'footer.contact': 'Contact',
    'footer.copy': '© 2025 DentalVid. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>',
    'footer.disclaimer': 'Results may vary. Metrics shown are based on actual client performance and are not guaranteed.',
  },

  es: {
    // Navbar
    'nav.hiw': 'Cómo Funciona',
    'nav.packages': 'Paquetes',
    'nav.results': 'Resultados',
    'nav.portfolio': 'Portafolio',
    'nav.cta': 'Agendar Llamada',
    // Hero
    'hero.badge': '🎯 Agencia #1 de Video Marketing para Clínicas Dentales',
    'hero.h1': 'Convierte Tu Clínica Dental en una<br /><span class="gradient-text">Máquina de Atraer Pacientes</span>',
    'hero.sub': 'Video marketing profesional que genera confianza, llena tu agenda y hace crecer tus ingresos — sin que muevas un dedo.',
    'hero.cta1': '🗓 Agendar Llamada Gratis',
    'hero.cta2': 'Ver Paquetes →',
    'hero.stat1': 'Clínicas Atendidas',
    'hero.stat2': 'Vistas Generadas',
    'hero.stat3': 'ROI Promedio en 90 días',
    'hero.videoLabel': 'Ver una muestra de reel',
    // Logos
    'logos.label': 'Con la confianza de clínicas en todo EE. UU.',
    // How It Works
    'hiw.tag': 'El Proceso',
    'hiw.h2': 'De Cero a Agenda Llena en 5 Pasos Simples',
    'hiw.sub': 'Nosotros manejamos todo — estrategia, filmación, edición y distribución. Tú solo apareces.',
    'hiw.s1.title': 'Llamada de Descubrimiento',
    'hiw.s1.body': 'Analizamos tu práctica, competidores y pacientes objetivo para crear una estrategia de video personalizada que resuene en tu mercado local.',
    'hiw.s2.title': 'Estrategia Personalizada',
    'hiw.s2.body': 'Nuestro equipo construye un calendario de contenido completo — guiones de video, programa de publicación y segmentación por plataforma — diseñado para atraer a tu paciente ideal.',
    'hiw.s3.title': 'Producción Profesional',
    'hiw.s3.body': 'Filmación de calidad cinematográfica en tu clínica (o producción remota para contenido digital), editada con gráficos animados, subtítulos y hooks que detienen el scroll.',
    'hiw.s4.title': 'Lanzamiento Multiplataforma',
    'hiw.s4.body': 'Publicamos y optimizamos tus videos en Instagram, Facebook, YouTube, TikTok y Google — maximizando el alcance sin que toques ninguna aplicación.',
    'hiw.s5.title': 'Seguimiento y Escalado',
    'hiw.s5.body': 'Informes de rendimiento mensuales con métricas reales — vistas, leads, citas reservadas — y optimización continua para que el crecimiento siga acumulándose.',
    // Packages
    'pkg.tag': 'Precios',
    'pkg.h2': 'Elige el Plan que Llenará Tu Clínica',
    'pkg.sub': 'Precios transparentes. Sin tarifas ocultas. Cancela en cualquier momento después de 90 días.',
    'pkg.popularBadge': '⭐ Más Común',
    'pkg.getStarted': 'Comenzar Ahora',
    // Starter
    'pkg.starter.tier': 'Básico',
    'pkg.starter.price': '300–500',
    'pkg.starter.tagline': 'Perfecto para clínicas que dan sus primeros pasos en redes sociales',
    'pkg.starter.f1': '✅ 4 posts/mes',
    'pkg.starter.f2': '✅ Community management básico',
    'pkg.starter.f3': '✅ 1 reporte mensual',
    'pkg.starter.f4': '✅ Soporte por email',
    'pkg.starter.f5': '❌ Edición de video reels',
    'pkg.starter.f6': '❌ Gestión de anuncios pagados',
    // Professional
    'pkg.pro.tier': 'Estándar',
    'pkg.pro.price': '600–1,000',
    'pkg.pro.tagline': 'Para clínicas en crecimiento listas para construir presencia real',
    'pkg.pro.f1': '✅ 8 posts/mes (2 por semana)',
    'pkg.pro.f2': '✅ Community management completo',
    'pkg.pro.f3': '✅ Responder comentarios y DMs',
    'pkg.pro.f4': '✅ 2 reportes mensuales',
    'pkg.pro.f5': '✅ Análisis de engagement',
    'pkg.pro.f6': '✅ Soporte por email + chat',
    'pkg.pro.f7': '❌ Edición de video reels',
    'pkg.pro.f8': '❌ Gestión de anuncios pagados',
    // Elite
    'pkg.premium.tier': 'Premium',
    'pkg.premium.price': '1.200–2.000',
    'pkg.premium.tagline': 'Creación de contenido profesional + community management 24/7',
    'pkg.premium.f1': '✅ 12–16 posts/mes (3–4/semana)',
    'pkg.premium.f2': '✅ Creación de contenido profesional',
    'pkg.premium.f3': '✅ Edición de video reels (2–4/mes)',
    'pkg.premium.f4': '✅ Community management 24/7',
    'pkg.premium.f5': '✅ Influencer outreach',
    'pkg.premium.f6': '✅ 4 reportes mensuales detallados',
    'pkg.premium.f7': '✅ Consultoría de estrategia (1×/mes)',
    'pkg.premium.f8': '❌ Gestión de anuncios pagados',
    // VIP
    'pkg.vip.badge': '⭐⭐⭐ Full Management',
    'pkg.vip.tier': 'VIP',
    'pkg.vip.price': '2.000–4.000',
    'pkg.vip.tagline': 'Gestión completa de primer nivel para clínicas con múltiples sedes',
    'pkg.vip.f1': '✅ 20+ posts/mes',
    'pkg.vip.f2': '✅ Reels ilimitados',
    'pkg.vip.f3': '✅ Gestión de anuncios pagados ⭐',
    'pkg.vip.f4': '✅ Community management completo',
    'pkg.vip.f5': '✅ Estrategia de marca',
    'pkg.vip.f6': '✅ Consultoría mensual',
    'pkg.vip.f7': '✅ Análisis de competencia',
    'pkg.note': '💡 ¿No sabes cuál plan elegir? <a href="#contact">Hablemos</a> — te recomendaremos el que mejor se adapte al tamaño y objetivos de tu clínica.',
    // Testimonials
    'testi.tag': 'Prueba Social',
    'testi.h2': 'Dentistas Reales. Resultados Reales.',
    'testi.sub': 'No te quedes con nuestra palabra — escucha a clínicas como la tuya.',
    'testi.t1.quote': '"Pasamos de 12 pacientes nuevos al mes a 47 en solo 90 días. Los videos que creó DentalVid nos hicieron ver como una clínica de primer nivel — los pacientes nos dijeron que nos eligieron específicamente por nuestros videos de Instagram."',
    'testi.t1.result': '📈 +292% pacientes nuevos en 90 días',
    'testi.t2.quote': '"Al principio era escéptico — pensaba que el video marketing era solo para grandes marcas. Pero en 6 semanas tuvimos 18K vistas en un solo video de Invisalign y nuestras reservas de alineadores transparentes se triplicaron. La mejor inversión que he hecho."',
    'testi.t2.result': '📈 3× reservas de Invisalign en 6 semanas',
    'testi.t3.quote': '"Tengo 3 sedes y DentalVid lo maneja todo en todas ellas. Un equipo, marca consistente, resultados increíbles. Nuestras reseñas de Google pasaron de 3.8 a 4.9 estrellas porque el video ayudó a generar confianza en los pacientes antes de que entraran."',
    'testi.t3.result': '📈 3.8 → 4.9 en Google | 3 sedes',
    // Portfolio
    'port.tag': 'Portafolio',
    'port.h2': 'Antes y Después: Nuestro Trabajo en Acción',
    'port.sub': 'Mira la transformación que creamos — de aburrido a una marca poderosa.',
    'port.before': 'ANTES',
    'port.after': 'DESPUÉS',
    'port.p1.before': 'Sin presencia en redes, solo fotos de stock, 89 seguidores',
    'port.p1.after': 'Reels cinematográficos, videos auténticos del equipo, 4.2K seguidores',
    'port.p2.before': 'Video web desactualizado, sin TikTok, pocas reservas de Invisalign',
    'port.p2.after': 'Reels virales de antes/después, 18K vistas, trending localmente',
    'port.p3.before': 'Calificación de 3.8 estrellas, marca inconsistente en 3 sedes',
    'port.p3.badMetric': 'Puntaje de confianza bajo',
    'port.p3.after': 'Historia de marca unificada, testimoniales en video, top-3 SEO local',
    // FAQ
    'faq.h2': '¿Tienes Preguntas? Tenemos Respuestas.',
    'faq.q1': '¿Filman en mi clínica o pueden hacerlo de forma remota?',
    'faq.a1': '¡Ambas opciones! Para clientes locales podemos enviar un videógrafo profesional a tu clínica. Para clientes remotos creamos contenido de alta calidad usando grabaciones de pantalla, material suministrado, animación y producción mejorada con IA. Hemos trabajado con clínicas en los 50 estados sin necesidad de visitar en persona.',
    'faq.q2': '¿Cuánto tiempo tarda en ver resultados?',
    'faq.a2': 'La mayoría de los clientes comienza a ver un aumento en las visitas al perfil y mensajes directos en 2-3 semanas. Las reservas de nuevos pacientes medibles desde video suelen aparecer en las semanas 4-8. En el mes 3, la mayoría de nuestros clientes ve un retorno de 2-4× su inversión. Los resultados varían según el mercado y punto de partida.',
    'faq.q3': 'No sé nada de tecnología. ¿Tendré que gestionar algo?',
    'faq.a3': 'Para nada. Nos encargamos del 100% de la producción, edición, programación y publicación. Solo revisas los videos antes de que se publiquen (o activas la publicación automática). La mayoría de nuestros clientes dedica menos de 15 minutos al mes a su video marketing una vez que estamos configurados.',
    'faq.q4': '¿En qué se diferencia el video marketing dental del manejo común de redes sociales?',
    'faq.a4': 'Las agencias genéricas publican fotos y escriben subtítulos. Nosotros nos especializamos exclusivamente en video dental — sabemos qué procedimientos convierten (implantes, Invisalign, blanqueamiento), qué buscan los pacientes y cómo generar la confianza que convierte a un espectador en una cita reservada. Nuestro equipo tiene redactores especializados en odontología, editores que entienden el cumplimiento HIPAA y estrategas que conocen tu mercado.',
    'faq.q5': '¿Hay contrato? ¿Puedo cancelar?',
    'faq.a5': 'Requerimos un compromiso inicial de 90 días para ejecutar correctamente la estrategia y mostrar resultados reales. Después de eso, es mes a mes con 30 días de aviso para cancelar. Estamos seguros de que querrás quedarte — pero nunca te encerramos más allá de ese primer trimestre.',
    // Contact
    'contact.tag': 'Hablemos',
    'contact.h2': '¿Listo para Llenar Tu Clínica con Video?',
    'contact.sub': 'Agenda una llamada de estrategia gratuita de 30 minutos y te mostraremos exactamente qué haríamos por tu clínica — sin presión ni compromiso.',
    'contact.calendlyCta': '🗓 Agendar Llamada de Estrategia Gratis',
    'contact.hours': 'Lun–Vie, 9am–6pm EST',
    'contact.formTitle': 'Envíanos un Mensaje',
    'contact.labelName': 'Tu Nombre *',
    'contact.phName': 'Dr. Juan Pérez',
    'contact.labelEmail': 'Correo Electrónico *',
    'contact.labelPhone': 'Número de Teléfono',
    'contact.labelPlan': 'Te Interesa',
    'contact.planDefault': 'Selecciona un plan...',
    'contact.planUnsure': 'Aún no estoy seguro',
    'contact.labelMsg': 'Cuéntanos Sobre Tu Clínica',
    'contact.phMsg': 'Ubicación, número de dentistas, mayor desafío para atraer pacientes...',
    'contact.submit': 'Enviar Mensaje →',
    'contact.formNote': 'Respondemos dentro de 24 horas hábiles. Tu información nunca se comparte.',
    'contact.successTitle': '¡Mensaje Recibido!',
    'contact.successSub': 'Nos pondremos en contacto en menos de 24 horas. Mientras tanto, agenda tu llamada de estrategia gratis.',
    'contact.successCta': 'Agendar Llamada de Estrategia',
    // Footer
    'footer.brand': 'La única agencia de video marketing construida exclusivamente para clínicas dentales. Conocemos a tus pacientes, tus procedimientos y qué los hace reservar.',
    'footer.services': 'Servicios',
    'footer.starter': 'Plan Starter',
    'footer.pro': 'Plan Pro',
    'footer.premium': 'Plan Premium',
    'footer.vip': 'Plan VIP',
    'footer.company': 'Empresa',
    'footer.cases': 'Casos de Éxito',
    'footer.contact': 'Contacto',
    'footer.copy': '© 2025 DentalVid. Todos los derechos reservados. | <a href="#">Política de Privacidad</a> | <a href="#">Términos de Servicio</a>',
    'footer.disclaimer': 'Los resultados pueden variar. Las métricas mostradas se basan en el rendimiento real de clientes y no están garantizadas.',
  }
};

// ===== APPLY LANGUAGE =====
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('dv-lang', lang);

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = translations[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  // Update toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ===== LANGUAGE MODAL =====
const langModal = document.getElementById('langModal');

function closeModal(lang) {
  applyLanguage(lang);
  langModal.classList.add('hiding');
  setTimeout(() => langModal.style.display = 'none', 400);
}

// Open modal on page load (always, so user can choose each visit)
langModal.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.lang));
});

// Navbar lang toggle (switch without modal)
document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Apply saved lang silently if user has a preference (skip modal)
const savedLang = localStorage.getItem('dv-lang');
if (savedLang) {
  closeModal(savedLang);
}

// ===== NAVBAR SCROLL + MOBILE MENU =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('menu-open'));
});

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ===== CONTACT FORM =====
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
