const capabilityData = {
  'Creative & Video': {
    kicker: 'PRODUCTION',
    text: 'Four years of professional mobile-game creative production: video advertising, motion graphics, banners, app-store assets, 3D-rendered content and Unity-based creative work.',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop', 'Blender'],
    evidence: [
      ['Estoty', '2022—2026'],
      ['Commercial titles', 'Video + marketing creative'],
      ['Creative leadership', 'Review + production schedules']
    ]
  },
  'Playable Development': {
    kicker: 'DEVELOPMENT',
    text: 'Worked as a Playable Ads Developer at Estoty, creating interactive advertising experiences using Cocos Creator and TypeScript. ',
    tools: ['Cocos Creator', 'TypeScript'],
    evidence: [
      ['Estoty', 'Playable Ads Developer'],
      ['Cocos Creator', 'Gameplay systems + architecture'],
      ['Unity', 'Prototyping + production work']
    ]
  },
  'Game & Level Design': {
    kicker: 'DESIGN',
    text: 'With a background in Games Design and Development from the National Film and Television School (NFTS), my work focuses on gameplay mechanics, level design, player experience, and narrative-driven interactive systems. I\'ve worked on projects ranging from early prototypes to fully playable games.',
    tools: ['Game Design', 'Level Design', 'Prototyping', 'Player Experience', 'Unity', 'C#'],
    evidence: [
      ['NFTS', 'MA Games Design & Development'],
      ['Echoes', 'VR development + narrative'],
      ['Navi Tale', 'Development + screenwriting']
    ]
  },
  'Realtime & Unreal': {
    kicker: 'ENGINE',
    text: 'Experience with Unreal Engine, including Blueprint scripting, gameplay prototyping, environment design, lighting, and realtime cinematics.',
    tools: ['Unreal Engine', 'Blueprints', 'Sequencer'],
    evidence: [
      ['Unreal Cinematic', '2022 application exercise'],
      ['Blueprints', 'Gameplay prototyping'],
      ['Current work', 'Personal Unreal development']
    ]
  },
  'Film & Storytelling': {
    kicker: 'FILM',
    text: 'BFA in Directing and Editing with experience across 30+ short-film productions, including directing, assistant directing, production design, camera, lighting and editing.',
    tools: ['Directing', 'Editing', 'Screenwriting', 'Camera & Lighting'],
    evidence: [
      ['L1MB0', 'Director + screenwriter'],
      ['30+ productions', 'Multiple film departments'],
      ['EICAR', 'BFA Directing & Editing']
    ]
  },
  'Project Management & Production': {
    kicker: 'CREATIVE OPERATIONS · FILM PRODUCTION',
    text: 'Led creative production in the games industry and managed independent film projects, coordinating teams, schedules, feedback, and deliverables across different disciplines. Experience spans commercial creative pipelines, external development partners, and filmmaking, covering everything from pre-production planning to execution and final delivery.',
    tools: ['Project Management', 'Creative Direction', 'Team Coordination', 'Film Production', 'Scheduling', 'Outsourcing Management'],
    evidence: [
      ['Estoty', 'Creative team leadership and commercial production'],
      ['Film Productions', 'Directing, crew coordination and production workflows'],
      ['Outsourcing Management', 'External studio coordination, production reviews and delivery']
    ]
  }
};

const gameDesignProjects = [
  { id:'collapse', title:'Collapse', role:'Level Design · QA', description:"Following an incident in a mine, a lone survivor remains underground. He searches for an exit, uncovering various supernatural elements as he does. He is aided by the mine's foreman who guides him over the radio, but her intentions are more sinister than he knows.", video:{ provider:'youtube', id:'tmC0grlMU7Y', title:'Collapse - Hello World 2019' }, images:['collapse-gameplay-01.jpg', 'collapse-gameplay-02.jpg', 'collapse-gameplay-03.jpg', 'collapse-gameplay-04.jpg', 'collapse-gameplay-05.jpg', 'collapse-gameplay-06.jpg', 'collapse-gameplay-07.jpg', 'collapse-gameplay-08.jpg'] },
  { id:'echoes', title:'Echoes', role:'Developer · Environment Design · QA', description:'Short VR narrative experience that tells a story about memories and people that affect who you are and the world around you.', video:{ provider:'youtube', id:'1jTJ2nypG38', title:'Synthespians 2019 - Echoes by Alex Naumovich' }, images:['echoes-01.jpg', 'echoes-02.jpg', 'echoes-03.jpg', 'echoes-04.jpg', 'echoes-05.jpg'] },
  { id:'navi-tale', title:'Navi Tale', cover:'cover-gameplay.png', role:'Developer · Screenwriter', description:'A dark fantasy RPG, where you embark on a perilous journey in a brutal unforgiving world to survive a reawakened evil.', images:['navi-tale-01.jpg', 'navi-tale-02.jpg', 'navi-tale-03.jpg', 'navi-tale-04.jpg', 'navi-tale-05.jpg', 'navi-tale-06.jpg', 'navi-tale-07.jpg', 'navi-tale-08.jpg', 'navi-tale-09.jpg', 'navi-tale-10.jpg'] },
  { id:'extinction-crabellion', title:'Extinction Crabellion', cover:'cover-gameplay.png', role:'UI and menu Design', description:'Made for the Ukie Green Game Jam 2019, Extinction Crabellion is a 4 player, physics based, cooperative game where crabs have been forced to take matters into their own claws when it comes to pollution. Clean the beach of as much washed up rubbish and save stranded creatures to boost your score! Keep the sea as clean as you can for as long as you can.', video:{ provider:'youtube', id:'GpoIBpk0kJI', title:'Extinction Crabellion' }, images:['extinction-crabellion-01.jpg', 'extinction-crabellion-02.jpg', 'extinction-crabellion-03.jpg', 'extinction-crabellion-04.jpg', 'extinction-crabellion-05.jpg'] },
  { id:'giant-alien-ant-laser-attack', title:'Giant Alien Ant Laser Attack', role:'Developer · Level Designer', description:'Set in a B-film stylized environment, the player is invaded by giant alien ants that shoot lasers. In a last effort he is tasked with escaping the city and saving his friend.', video:{ provider:'youtube', id:'vCpIIGxoWns', title:'Moments of Consequence 2019 - GAALA by Alex Naumovich and JJ Fox' }, images:['giant-alien-ant-laser-attack-01.jpg', 'giant-alien-ant-laser-attack-02.jpg', 'giant-alien-ant-laser-attack-03.jpg', 'giant-alien-ant-laser-attack-04.jpg'] },
  { id:'story-quest', title:'Story Quest', role:'Developer', description:'A text based game with simple pixel graphics. Make your character and set on an adventure with different outcomes and ending depending on your build.', video:{ provider:'youtube', id:'4mY8Jr5bDSE', title:"'Story Quest' by Alex Naumovich - Code Camp 2019" }, images:['story-quest-01.png', 'story-quest-02.png', 'story-quest-03.png', 'story-quest-04.png', 'story-quest-05.png'] }
];

function projectImage(project, filename) {
  return `assets/projects/game-design/${project.id}/${filename}`;
}

function gameProjectMarkup() {
  return `<div class="capability-projects">
    <div class="capability-projects-head"><strong>Selected project work</strong><span>click a project to open</span></div>
    <div class="skill-project-grid">
      ${gameDesignProjects.map(project => `<button class="skill-project" type="button" data-project="${project.id}">
        <div class="skill-project-media"><img src="${projectImage(project, project.cover || project.images[0])}" alt="${project.title}" loading="lazy"></div>
        <strong>${project.title}</strong><span>${project.role}</span>
      </button>`).join('')}
    </div>
  </div>`;
}


function filmProjectMarkup() {
  return `<div class="capability-projects film-capability-projects">
    <div class="capability-projects-head"><strong>Selected productions</strong></div>
    <div class="film-selected-grid">
        <article class="film-work-card"><img src="assets/projects/film-revamp/lost-found.jpg" alt="Lost and Found film still" /><div><strong>Lost and Found</strong><span>Production Designer · 2018</span><p>Director: Surya Dev</p></div></article>
        <article class="film-work-card"><img src="assets/projects/film-revamp/les-lettres.jpg" alt="Les Lettres de Lola poster" /><div><strong>Les Lettres de Lola</strong><span>1st Assistant Director · 2018</span><p>Director: Rosa Ritzau-Møllehave</p><p class="film-accolade">Award-winning short · Independent Shorts Awards / Indie Short Fest / Oniros Film Awards</p></div></article>
        <article class="film-work-card"><img src="assets/projects/film-revamp/erase.png" alt="Erase poster" /><div><strong>Erase</strong><span>1st Assistant Director · 2018</span><p>Director: Sofia Dillenberger</p><p class="film-accolade">La Cinémathèque Française · festival accolade shown on original poster</p></div></article>
        <article class="film-work-card"><img src="assets/projects/film-revamp/perform.jpg" alt="Perform poster" /><div><strong>Perform</strong><span>2nd Assistant Director · 2018</span><p>Director: Fareed Kairon</p><p class="film-accolade">Audience Choice · DIFF 2020 · Best Actor / Best Cinematography festival wins</p></div></article>
      </div>
  </div>`;
}

const capabilityList = document.getElementById('capability-list');
const capabilityDetail = document.getElementById('capability-detail');
let activeCapability = 'Creative & Video';

function renderCapabilities() {
  capabilityList.innerHTML = Object.keys(capabilityData).map((name, index) => `
    <button class="capability-tab ${name === activeCapability ? 'active' : ''}" data-capability="${name}" role="tab" aria-selected="${name === activeCapability}">
      <span>0${index + 1}</span><strong>${name}</strong>
    </button>
  `).join('');

  const item = capabilityData[activeCapability];
  capabilityDetail.innerHTML = `
    <p class="eyebrow">${item.kicker}</p>
    <h3>${activeCapability}</h3>
    <p class="capability-copy">${item.text}</p>
    <div class="skill-list" aria-label="Relevant skills and tools">
      ${item.tools.map(tool => `<span class="skill-list-item">${tool}</span>`).join('')}
    </div>
    ${activeCapability === 'Game & Level Design' ? gameProjectMarkup() : ''}
    ${activeCapability === 'Film & Storytelling' ? filmProjectMarkup() : ''}
  `;

  capabilityList.querySelectorAll('.capability-tab').forEach(btn => btn.addEventListener('click', () => {
    activeCapability = btn.dataset.capability;
    renderCapabilities();
  }));

  capabilityDetail.querySelectorAll('[data-project]').forEach(btn => btn.addEventListener('click', () => openProject(btn.dataset.project)));
}
const projectModal = document.getElementById('project-modal');
const projectMain = projectModal.querySelector('[data-project-main]');
const projectVideo = projectModal.querySelector('[data-project-video]');
const projectThumbs = projectModal.querySelector('[data-project-thumbs]');
const projectTitle = projectModal.querySelector('[data-project-title]');
const projectRole = projectModal.querySelector('[data-project-role]');
const projectDescription = projectModal.querySelector('[data-project-description]');
const projectCount = projectModal.querySelector('[data-project-count]');

function setProjectImage(project, index) {
  projectMain.src = projectImage(project, project.images[index]);
  projectMain.alt = `${project.title} screenshot ${index + 1}`;
  projectCount.textContent = `${String(index + 1).padStart(2,'0')} / ${String(project.images.length).padStart(2,'0')} screenshots`;
  [...projectThumbs.children].forEach((el,i) => el.classList.toggle('active', i === index));
}

function openProject(id) {
  const project = gameDesignProjects.find(item => item.id === id);
  if (!project) return;
  projectTitle.textContent = project.title;
  projectRole.textContent = project.role;
  projectDescription.textContent = project.description;
  if (project.video) {
    projectVideo.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${project.video.id}?rel=0" title="${project.video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>`;
    projectVideo.hidden = false;
  } else {
    projectVideo.innerHTML = '';
    projectVideo.hidden = true;
  }
  projectThumbs.innerHTML = project.images.map((img,index) => `<button class="project-thumb ${index===0?'active':''}" type="button" data-image-index="${index}" aria-label="Show screenshot ${index+1}"><img src="${projectImage(project,img)}" alt="" loading="lazy"></button>`).join('');
  projectThumbs.querySelectorAll('[data-image-index]').forEach(btn => btn.addEventListener('click', () => setProjectImage(project, Number(btn.dataset.imageIndex))));
  setProjectImage(project,0);
  projectModal.showModal();
  syncVideoPlaybackState();
}

function stopProjectVideo() { projectVideo.innerHTML = ''; }
document.querySelector('[data-close-project]').addEventListener('click', () => { stopProjectVideo(); projectModal.close(); });
projectModal.addEventListener('click', event => { if (event.target === projectModal) { stopProjectVideo(); projectModal.close(); } });
projectModal.addEventListener('close', stopProjectVideo);

renderCapabilities();

// The page index lives beside the hero. Once the hero is mostly gone,
// the same destinations reappear as a compact fixed top navigation.
const topbar = document.getElementById('topbar');
const hero = document.getElementById('hero');
function updateNavigationState() {
  const threshold = hero.offsetTop + hero.offsetHeight - 110;
  topbar.classList.toggle('visible', window.scrollY >= threshold);
}
window.addEventListener('scroll', updateNavigationState, { passive: true });
window.addEventListener('resize', updateNavigationState);
updateNavigationState();

// Highlight the destination that currently occupies the viewport.
// Both the hero index and the fixed top navigation use the same state.
const sectionTargets = [
  { id: 'home', el: hero },
  { id: 'experience', el: document.getElementById('experience') },
  { id: 'work', el: document.getElementById('work') },
  { id: 'skills', el: document.getElementById('skills') },
  { id: 'film', el: document.getElementById('film') },
  { id: 'contact', el: document.getElementById('contact') }
].filter(item => item.el);

function updateCurrentSection() {
  const marker = window.scrollY + Math.min(window.innerHeight * 0.34, 260);
  let current = 'home';
  for (const item of sectionTargets) {
    if (item.el.offsetTop <= marker) current = item.id;
  }

  document.querySelectorAll('.topnav a, .hero-index a').forEach(link => {
    const target = (link.getAttribute('href') || '').replace('#', '');
    const isCurrent = target === current;
    link.classList.toggle('current', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateCurrentSection, { passive: true });
window.addEventListener('resize', updateCurrentSection);
updateCurrentSection();

document.querySelectorAll('.timeline-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.timeline-item');
    const isOpen = item.classList.toggle('open');
    header.setAttribute('aria-expanded', String(isOpen));
    header.querySelector('b').textContent = isOpen ? '−' : '+';
  });
});

const modal = document.getElementById('video-modal');
const showreelFrame = modal.querySelector('[data-showreel-frame]');
const showreelUrl = 'https://www.youtube-nocookie.com/embed/FY8512cfIw8?autoplay=1&rel=0';
document.querySelectorAll('[data-open-video]').forEach(el => el.addEventListener('click', () => {
  showreelFrame.src = showreelUrl;
  modal.showModal();
  syncVideoPlaybackState();
}));
function closeShowreel() {
  showreelFrame.src = '';
  if (modal.open) modal.close();
}
document.querySelector('[data-close-video]').addEventListener('click', closeShowreel);
modal.addEventListener('click', event => { if (event.target === modal) closeShowreel(); });
modal.addEventListener('close', () => { showreelFrame.src = ''; });

// L1MB0 Vimeo player: load only on demand and destroy the iframe when closed.
const limboModal = document.getElementById('limbo-modal');
const limboFrame = limboModal?.querySelector('[data-limbo-frame]');
document.querySelectorAll('[data-open-limbo]').forEach(el => el.addEventListener('click', () => {
  limboFrame.src = 'https://player.vimeo.com/video/305061992?autoplay=1&title=0&byline=0&portrait=0';
  limboModal.showModal();
  syncVideoPlaybackState();
}));
function closeLimbo(){ if(limboFrame) limboFrame.src=''; if(limboModal?.open) limboModal.close(); }
document.querySelector('[data-close-limbo]')?.addEventListener('click', closeLimbo);
limboModal?.addEventListener('click', e => { if(e.target === limboModal) closeLimbo(); });
limboModal?.addEventListener('close', () => { if(limboFrame) limboFrame.src=''; });

// v45: Suspend background animation while an embedded video is visible.
// The browser can then prioritize decoding and compositing the iframe video.
const videoModalSelector = '#video-modal, #limbo-modal, #project-modal';
function videoModalActive() {
  return [...document.querySelectorAll(videoModalSelector)].some(dialog => dialog.open);
}
function syncVideoPlaybackState() {
  const active = videoModalActive();
  document.documentElement.classList.toggle('video-playing', active);
  document.dispatchEvent(new Event('portfolio-video-state'));
}
for (const dialog of document.querySelectorAll(videoModalSelector)) {
  dialog.addEventListener('close', syncVideoPlaybackState);
  dialog.addEventListener('cancel', () => requestAnimationFrame(syncVideoPlaybackState));
}

// Selected work: true transform-based marquee + manual navigation.
// This deliberately does NOT use scrollLeft. The first implementation that visibly moved
// used the strip itself as the moving element; this version returns to that reliable approach.
const workCarousel = document.querySelector('[data-work-carousel]');
if (workCarousel) {
  const track = workCarousel.querySelector('.work-carousel-track');
  const prev = document.querySelector('[data-work-prev]');
  const next = document.querySelector('[data-work-next]');
  const progress = document.querySelector('[data-work-progress]');
  const count = document.querySelector('[data-work-count]');

  const originalCards = [...track.querySelectorAll('.work-card')];

  // Duplicate once: when one full set has moved off-screen, the duplicate is in the exact
  // same place, so an infinite animation can wrap with no visible jump.
  originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.tabIndex = -1;
    track.appendChild(clone);
  });

  const speed = 22; // pixels per second — deliberately slow, but plainly visible
  let marquee = null;
  let loopWidth = 0;
  let duration = 0;
  let resumeTimer = null;
  let statusFrame = null;
  let hoverPaused = false;
  let focusPaused = false;

  function cardStep() {
    if (originalCards.length < 2) return workCarousel.clientWidth * .8;
    return originalCards[1].offsetLeft - originalCards[0].offsetLeft;
  }

  function measureLoopWidth() {
    const cards = [...track.querySelectorAll('.work-card')];
    if (cards.length <= originalCards.length) return 0;
    return cards[originalCards.length].offsetLeft - cards[0].offsetLeft;
  }

  function currentCycleTime() {
    if (!marquee || !duration) return 0;
    const t = Number(marquee.currentTime || 0);
    return ((t % duration) + duration) % duration;
  }

  function updateWorkStatus() {
    if (!duration) return;
    const t = currentCycleTime();
    const ratio = t / duration;
    if (progress) progress.style.transform = `scaleX(${Math.max(.08, ratio)})`;
    if (count) {
      const idx = Math.min(originalCards.length - 1, Math.floor(ratio * originalCards.length));
      count.textContent = `${String(idx + 1).padStart(2,'0')} / ${String(originalCards.length).padStart(2,'0')}`;
    }
    if (!videoModalActive() && !document.hidden) statusFrame = requestAnimationFrame(updateWorkStatus);
  }

  function startMarquee(preserveRatio = 0) {
    loopWidth = measureLoopWidth();
    if (!loopWidth) return;
    duration = (loopWidth / speed) * 1000;

    if (marquee) marquee.cancel();
    marquee = track.animate(
      [
        { transform: 'translate3d(0,0,0)' },
        { transform: `translate3d(-${loopWidth}px,0,0)` }
      ],
      { duration, iterations: Infinity, easing: 'linear' }
    );
    marquee.currentTime = preserveRatio * duration;
    if (!videoModalActive() && !document.hidden) marquee.play();
  }

  function canResumeMarquee() {
    return !hoverPaused && !focusPaused && !videoModalActive() && !document.hidden;
  }

  function pauseThenResume(ms = 1500) {
    if (!marquee) return;
    marquee.pause();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      if (canResumeMarquee()) marquee?.play();
    }, ms);
  }

  function moveByCards(direction) {
    if (!marquee || !duration || !loopWidth) return;
    pauseThenResume(1400);
    const deltaPx = direction * cardStep() * 2;
    const deltaTime = (deltaPx / loopWidth) * duration;
    marquee.currentTime = currentCycleTime() + deltaTime;
  }

  prev?.addEventListener('click', () => moveByCards(-1));
  next?.addEventListener('click', () => moveByCards(1));

  // Pause while the pointer is directly over any artwork, including cloned cards.
  // Resume when the pointer leaves the artwork; keyboard focus still pauses too.
  workCarousel.addEventListener('pointerover', (event) => {
    const art = event.target.closest('.work-art');
    if (!art || !workCarousel.contains(art)) return;
    if (event.relatedTarget && art.contains(event.relatedTarget)) return;
    hoverPaused = true;
    clearTimeout(resumeTimer);
    marquee?.pause();
  });

  workCarousel.addEventListener('pointerout', (event) => {
    const art = event.target.closest('.work-art');
    if (!art || !workCarousel.contains(art)) return;
    if (event.relatedTarget && art.contains(event.relatedTarget)) return;
    hoverPaused = false;
    if (canResumeMarquee()) marquee?.play();
  });

  workCarousel.addEventListener('focusin', () => {
    focusPaused = true;
    marquee?.pause();
  });
  workCarousel.addEventListener('focusout', () => {
    focusPaused = false;
    if (canResumeMarquee()) marquee?.play();
  });

  function syncMarqueeActivity() {
    if (videoModalActive() || document.hidden) {
      marquee?.pause();
      if (statusFrame) cancelAnimationFrame(statusFrame);
      statusFrame = null;
    } else {
      if (canResumeMarquee()) marquee?.play();
      if (statusFrame) cancelAnimationFrame(statusFrame);
      statusFrame = null;
      updateWorkStatus();
    }
  }
  document.addEventListener('portfolio-video-state', syncMarqueeActivity);
  document.addEventListener('visibilitychange', syncMarqueeActivity);

  function attachArtworkFallbacks(root = workCarousel) {
    root.querySelectorAll('.work-art img').forEach(img => {
      if (img.dataset.fallbackBound) return;
      img.dataset.fallbackBound = 'true';
      img.addEventListener('error', () => {
        const art = img.closest('.work-art');
        const letters = art?.dataset.fallback || '—';
        img.remove();
        art?.classList.add('image-fallback');
        if (art) art.textContent = letters;
      }, { once: true });
    });
  }
  attachArtworkFallbacks();

  function rebuildMarquee() {
    const ratio = duration ? currentCycleTime() / duration : 0;
    startMarquee(ratio);
  }

  // Fonts/images can affect measured card positions. Measure once immediately, again after
  // the page is fully loaded, and whenever the viewport changes size.
  requestAnimationFrame(() => {
    startMarquee(0);
    if (statusFrame) cancelAnimationFrame(statusFrame);
    syncMarqueeActivity();
  });
  window.addEventListener('load', rebuildMarquee, { once: true });
  window.addEventListener('resize', rebuildMarquee);
}
