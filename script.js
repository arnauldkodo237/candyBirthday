// Configuration centralisée pour personnaliser la page sans toucher au reste.
const CONFIG = {
  prenom: 'Candy',
  motSecret: 'sarbacane',
  occasion: 'anniversaire',
  type: 'romantique et sincère',
  whatsappNumero: '+237692802089',
  playlist: {
    intro: 'Il y a des choses que je ne sais pas dire avec mes mots. Alors j’ai laissé ces chansons le faire pour moi.',
    chapters: [
      { numero: 'I', titre: 'Le début', legende: 'Tout a commencé par un petit mot, une petite mélodie, et un cœur qui a voulu rester.' },
      { numero: 'II', titre: 'Nous', legende: 'Le reste de la vie a pris une autre couleur, douce et vraie, dès que tu es entrée dedans.' },
      { numero: 'III', titre: 'L\'orage', legende: 'Même les jours plus lourds ont appris à se calmer quand ton nom se retrouvait dans le mien.' },
      { numero: 'IV', titre: 'La promesse', legende: 'Et maintenant, chaque refrain me rappelle que je veux te tenir encore plus fort, toujours.' }
    ],
    finalPhrase: 'Chacune de ces chansons, c\'est un peu de toi.',
    spotifyUrl: 'https://open.spotify.com/playlist/2TvKDe9fZjxtfjP3jHphyo'
  },
  audio: {
    muted: false,
    screens: [
      {
        id: 'invite',
        fichier: 'audio/ecran1.mp3',
        debut: 0,
        fin: 42,
        volume: 0.5,
        boucle: false,
        label: 'Invitation'
      },
      {
        id: 'timeline',
        fichier: 'audio/ecran2.mp3',
        debut: 0,
        fin: 46,
        volume: 0.5,
        boucle: false,
        label: 'Souvenirs'
      },
      {
        id: 'traits',
        fichier: 'audio/ecran3.mp3',
        debut: 0,
        fin: 40,
        volume: 0.5,
        boucle: false,
        label: 'Traits'
      },
      {
        id: 'destination',
        fichier: 'audio/ecran4.mp3',
        debut: 0,
        fin: 38,
        volume: 0.5,
        boucle: false,
        label: 'Destination'
      },
      {
        id: 'final',
        fichier: 'audio/ecran5.mp3',
        debut: 0,
        fin: 72,
        volume: 0.7,
        boucle: false,
        label: 'Final',
        lyrics: [
          { time: 0, texte: 'Tu es la douceur dans chaque instant.' },
          { time: 6, texte: 'Tu rends ma vie plus lumineuse.' },
          { time: 12, texte: 'Je suis heureux juste à t’avoir près.' },
          { time: 18, texte: 'Tu es mon plus beau cadeau.' },
          { time: 24, texte: 'Joyeux anniversaire, mon amour.' }
        ]
      }
    ]
  },
  moments: [
    { date: '20 mars 2025', lieu: 'Souvenir doux', media: 'photos/IMG-20250320-WA0157 (1).jpg', type: 'image' },
    { date: '20 mars 2025', lieu: 'Instant tendre', media: 'photos/IMG-20250320-WA0169.jpg', type: 'image' },
    { date: '20 mars 2025', lieu: 'Lueur du moment', media: 'photos/IMG-20250320-WA0170.jpg', type: 'image' },
    { date: '20 mars 2025', lieu: 'Petit détail', media: 'photos/IMG-20250320-WA0173.jpg', type: 'image' },
    { date: '1 avril 2025', lieu: 'Vidéo spéciale', media: 'photos/VID-20250501-WA0009.mp4', type: 'video' },
    { date: '1 avril 2025', lieu: 'Portrait discret', media: 'photos/IMG-20250401-WA0261.jpg', type: 'image' },
    { date: '1 avril 2025', lieu: 'Rires et lumière', media: 'photos/IMG-20250401-WA0262.jpg', type: 'image' },
    { date: '1 avril 2025', lieu: 'Rayon de bonheur', media: 'photos/IMG-20250401-WA0265.jpg', type: 'image' },
    { date: '6 juin 2025', lieu: 'Mélodie du soir', media: 'photos/IMG-20260506-WA0181.jpg', type: 'image' },
    { date: '19 juin 2025', lieu: 'Vue à l’ombre', media: 'photos/IMG-20260519-WA0129.jpg', type: 'image' },
    { date: '19 juin 2025', lieu: 'Brillance de toi', media: 'photos/IMG-20260519-WA0136.jpg', type: 'image' },
    { date: '2 juin 2026', lieu: 'Un cadre simple', media: 'photos/IMG-20260602-WA0104.jpg', type: 'image' },
    { date: '10 octobre 2025', lieu: 'Moment en motion', media: 'photos/VID-20251010-WA0223.mp4', type: 'video' },
    { date: '8 janvier 2026', lieu: 'Fête du souvenir', media: 'photos/VID-20260108-WA0319.mp4', type: 'video' },
    { date: '26 avril 2026', lieu: 'Petite scène', media: 'photos/VID-20260426-WA0144.mp4', type: 'video' },
    { date: '2 juin 2026', lieu: 'Encore un souvenir', media: 'photos/VID-20260602-WA0105.mp4', type: 'video' }
  ],
  phrases: [
    'Comment tu ris, c’est mon moment préféré.',
    'Tu as cette façon de me faire me sentir moi.',
    'Ta folie est contagieuse et j’adore ça.',
    'BREF, TOUT !!'
  ],
  destinations: [
    'Un Ciné dans une salle ou improvisé',
    'Un picnic en amoureux',
    'Un parc d’attractions pour s’amuser',
    'Un resto cosy pour un dîner romantique',
  ]
};

const AUDIO_STORAGE_KEY = 'romanticAudioMuted';
const screenIdToAudioId = {
  'invite-screen': 'invite',
  'timeline-screen': 'timeline',
  'traits-screen': 'traits',
  'destination-screen': 'destination',
  'final-screen': 'final'
};

// Sélection des éléments du DOM.
const secretForm = document.getElementById('secretForm');
const secretInput = document.getElementById('secretInput');
const secretMessage = document.getElementById('secretMessage');
const timeline = document.getElementById('timeline');
const traitList = document.getElementById('traitList');
const destinationChoices = document.getElementById('destinationChoices');
const destinationMessage = document.getElementById('destinationMessage');
const floatingHearts = document.getElementById('floatingHearts');
const customMessageBox = document.getElementById('customMessageBox');
const customText = document.getElementById('customText');
const sendCustomMessage = document.getElementById('sendCustomMessage');
const audioToggle = document.getElementById('audioToggle');
const lyricsToggle = document.getElementById('lyricsToggle');
const lyricsBox = document.getElementById('lyricsBox');
const playlistIntro = document.getElementById('playlistIntro');
const playlistFinalPhrase = document.getElementById('playlistFinalPhrase');
const chapterGrid = document.getElementById('chapterGrid');

// État de validation pour garder la suite cachée tant que le mot secret n'est pas bon.
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const audioManager = {
  screens: CONFIG.audio.screens,
  muted: (() => {
    const stored = localStorage.getItem(AUDIO_STORAGE_KEY);
    return stored === null ? CONFIG.audio.muted : stored === 'true';
  })(),
  activeScreenId: null,
  activeAudio: null,
  audioMap: new Map(),
  lyricIndex: -1,
  init() {
    this.screens.forEach((screen) => {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.loop = Boolean(screen.boucle);
      audio.muted = this.muted;
      audio.volume = 0;
      audio.src = screen.fichier || '';
      audio.load();

      audio.addEventListener('error', () => {
        audio.src = '';
        audio.removeAttribute('src');
      });

      if (screen.id === 'final') {
        audio.addEventListener('timeupdate', () => {
          this.updateLyrics();
        });
      }

      this.audioMap.set(screen.id, audio);
    });

    this.syncMuteButton();
  },
  getScreen(screenId) {
    return this.screens.find((screen) => screen.id === screenId) || null;
  },
  getAudio(screenId) {
    return this.audioMap.get(screenId) || null;
  },
  setMuted(muted) {
    this.muted = Boolean(muted);
    localStorage.setItem(AUDIO_STORAGE_KEY, String(this.muted));

    this.audioMap.forEach((audio) => {
      if (audio) {
        audio.muted = this.muted;
      }
    });

    this.syncMuteButton();
  },
  syncMuteButton() {
    if (!audioToggle) {
      return;
    }

    audioToggle.textContent = this.muted ? '🔇' : '🔊';
    audioToggle.setAttribute('aria-label', this.muted ? 'Réactiver le son' : 'Couper le son');
    audioToggle.title = this.muted ? 'Réactiver le son' : 'Couper le son';
  },
  fadeVolume(audio, targetVolume, duration = 1500) {
    if (!audio) {
      return;
    }

    const start = audio.volume ?? 0;
    const startTime = performance.now();

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = start + (targetVolume - start) * progress;

      audio.volume = eased;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  },
  playScreen(screenId) {
    const screen = this.getScreen(screenId);
    const audio = this.getAudio(screenId);

    if (!screen || !audio) {
      return;
    }

    if (this.activeAudio && this.activeAudio !== audio) {
      this.fadeVolume(this.activeAudio, 0, 1500);
      this.activeAudio.pause();
    }

    if (this.activeAudio === audio && !audio.paused) {
      return;
    }

    this.activeScreenId = screenId;
    this.activeAudio = audio;
    audio.muted = this.muted;

    const startAt = Number.isFinite(screen.debut) ? screen.debut : 0;
    if (audio.currentTime < startAt || audio.currentTime > (screen.fin || audio.duration || startAt)) {
      audio.currentTime = startAt;
    }

    audio.volume = 0;
    audio.play().catch(() => {});
    this.fadeVolume(audio, screen.volume || 0.5, 1500);

    audio.addEventListener('timeupdate', () => {
      if (screen.boucle) {
        if (audio.currentTime >= screen.fin) {
          audio.currentTime = screen.debut;
        }
        return;
      }

      if (screen.fin && audio.currentTime >= screen.fin) {
        audio.pause();
      }
    }, { once: false });

    if (screen.id === 'final') {
      this.updateLyrics();
    }
  },
  updateLyrics() {
    if (!lyricsBox || !this.activeAudio || this.activeScreenId !== 'final') {
      return;
    }

    const screen = this.getScreen('final');
    if (!screen || !screen.lyrics || !screen.lyrics.length) {
      return;
    }

    const currentTime = this.activeAudio.currentTime || 0;
    let activeIndex = -1;

    for (let index = 0; index < screen.lyrics.length; index += 1) {
      if (currentTime >= screen.lyrics[index].time) {
        activeIndex = index;
      }
    }

    if (activeIndex === -1) {
      return;
    }

    if (this.lyricIndex !== activeIndex) {
      this.lyricIndex = activeIndex;
      lyricsBox.innerHTML = `<p>${screen.lyrics[activeIndex].texte}</p>`;
    }
  }
};

function normalizeText(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function setSecretMessage(text, type = '') {
  secretMessage.textContent = text;
  secretMessage.className = `form-message ${type}`.trim();
}

function unlockSurprise() {
  document.body.classList.add('unlocked');
  localStorage.setItem('surpriseUnlocked', 'true');
  audioManager.playScreen('invite');

  setTimeout(() => {
    document.getElementById('timeline-screen').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 350);
}

function validateSecret() {
  return normalizeText(secretInput.value) === normalizeText(CONFIG.motSecret);
}

function handleSecretSubmit(event) {
  event.preventDefault();

  if (validateSecret()) {
    setSecretMessage('Bonne réponse… la surprise s’ouvre', 'success');
    secretInput.classList.remove('shake');
    void secretInput.offsetWidth;
    secretInput.classList.add('shake');

    setTimeout(() => {
      unlockSurprise();
    }, 250);
    return;
  }

  secretInput.classList.remove('shake');
  void secretInput.offsetWidth;
  secretInput.classList.add('shake');
  setSecretMessage('Pas tout à fait… essaie encore', 'error');
}

function generateTimeline() {
  timeline.innerHTML = '';

  CONFIG.moments.forEach((moment, index) => {
    const item = document.createElement('article');
    item.className = 'timeline-item reveal';

    const mediaMarkup = moment.type === 'video'
      ? `
        <div class="moment-photo video-card">
          <video autoplay muted loop playsinline preload="metadata" aria-label="Vidéo de ${moment.lieu}">
            <source src="${encodeURI(moment.media)}" type="video/mp4" />
          </video>
        </div>
      `
      : `
        <div class="moment-photo image-card">
          <img src="${encodeURI(moment.media)}" alt="Photo de ${moment.lieu}" loading="lazy" onerror="this.onerror=null;this.src='photos/placeholder-1.svg';" />
        </div>
      `;

    item.innerHTML = `
      ${mediaMarkup}
    `;
    timeline.appendChild(item);
  });
}

function typeWriterSequence() {
  const items = Array.from(traitList.querySelectorAll('li'));

  items.forEach((item, index) => {
    const text = item.dataset.text || item.textContent;
    item.textContent = '';

    let characterIndex = 0;
    const type = () => {
      item.textContent = text.slice(0, characterIndex + 1);
      characterIndex += 1;

      if (characterIndex < text.length) {
        setTimeout(type, 70);
      }
    };

    setTimeout(type, index * 400 + 250);
  });
}

function renderTraits() {
  traitList.innerHTML = '';

  CONFIG.phrases.forEach((phrase) => {
    const item = document.createElement('li');
    item.dataset.text = phrase;
    item.textContent = phrase;
    traitList.appendChild(item);
  });

  typeWriterSequence();
}

function renderDestinations() {
  destinationChoices.innerHTML = '';

  CONFIG.destinations.forEach((destination) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'destination-choice';
    button.textContent = destination;
    button.setAttribute('aria-pressed', 'false');

    button.addEventListener('click', () => {
      document.querySelectorAll('.destination-choice').forEach((node) => {
        node.classList.remove('is-selected');
        node.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('is-selected');
      button.setAttribute('aria-pressed', 'true');
      launchConfetti();
      destinationMessage.textContent = 'Alors c\'est promis, on y va ensemble 💛';
    });

    destinationChoices.appendChild(button);
  });
}

function renderPlaylistSection() {
  if (!playlistIntro || !playlistFinalPhrase || !chapterGrid) {
    return;
  }

  const { intro, chapters, finalPhrase } = CONFIG.playlist;

  playlistIntro.textContent = intro;
  playlistFinalPhrase.textContent = finalPhrase;

  chapterGrid.innerHTML = chapters
    .map(
      (chapter, index) => `
        <article class="chapter-card reveal" style="transition-delay:${index * 120}ms">
          <span class="chapter-number">${chapter.numero}</span>
          <h3>${chapter.titre}</h3>
          <p>« ${chapter.legende} »</p>
        </article>
      `
    )
    .join('');

  const spotifyLink = document.querySelector('.spotify-link');
  if (spotifyLink) {
    spotifyLink.href = CONFIG.playlist.spotifyUrl;
  }
}

function typeTextOnReveal(target, text, delay = 30) {
  if (!target) {
    return;
  }

  target.textContent = '';
  let index = 0;

  const type = () => {
    target.textContent = text.slice(0, index + 1);
    index += 1;

    if (index < text.length) {
      setTimeout(type, delay);
    }
  };

  type();
}

function launchConfetti() {
  if (isReducedMotion) {
    return;
  }

  const pieces = Array.from({ length: 26 }, (_, index) => {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ['#f5ead8', '#d9b76f', '#f2d6de', '#d99aa8'][index % 4];
    piece.style.setProperty('--x', `${(Math.random() - 0.5) * 220}px`);
    piece.style.setProperty('--y', `${-120 - Math.random() * 120}px`);
    piece.style.setProperty('--rot', `${Math.random() * 360}deg`);
    piece.style.animation = `confettiFall ${1.2 + Math.random() * 0.6}s ease-out forwards`;
    document.body.appendChild(piece);
    return piece;
  });

  setTimeout(() => {
    pieces.forEach((piece) => piece.remove());
  }, 1600);
}

function createFloatingHearts() {
  if (isReducedMotion) {
    return;
  }

  const heartSymbols = ['❤', '♡', '♥'];

  for (let index = 0; index < 16; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'float-heart';
    heart.textContent = heartSymbols[index % heartSymbols.length];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${9 + Math.random() * 12}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 150}px`);
    floatingHearts.appendChild(heart);
  }
}

function openWhatsApp(messageText) {
  const cleanNumber = CONFIG.whatsappNumero.replace(/\D/g, '');
  const text = encodeURIComponent(messageText);
  const url = `https://wa.me/${cleanNumber}?text=${text}`;
  window.open(url, '_blank', 'noopener');
}

function bindResponses() {
  document.querySelectorAll('.response-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const message = button.dataset.message;

      if (message === 'petit-mot') {
        customMessageBox.classList.remove('hidden');
        customText.focus();
        return;
      }

      openWhatsApp(message);
    });
  });

  sendCustomMessage.addEventListener('click', () => {
    const value = customText.value.trim();
    const message = value || 'Je t’aime ❤️';
    openWhatsApp(message);
  });

  audioToggle.addEventListener('click', () => {
    audioManager.setMuted(!audioManager.muted);
  });

  lyricsToggle.addEventListener('click', () => {
    const isHidden = lyricsBox.classList.toggle('hidden');
    lyricsToggle.setAttribute('aria-expanded', String(!isHidden));
    lyricsToggle.textContent = isHidden ? 'Afficher les paroles' : 'Masquer les paroles';
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          if (entry.target.id === 'playlist-screen') {
            const activeAudio = audioManager.activeAudio;
            if (activeAudio && audioManager.activeScreenId) {
              const currentVolume = audioManager.getScreen(audioManager.activeScreenId)?.volume ?? 0.5;
              audioManager.fadeVolume(activeAudio, 0.08, 1500);
              activeAudio.dataset.previousVolume = String(currentVolume);
            }
          }

          if (entry.target.id === 'final-screen') {
            const activeAudio = audioManager.activeAudio;
            if (activeAudio && activeAudio.dataset.previousVolume) {
              audioManager.fadeVolume(activeAudio, Number(activeAudio.dataset.previousVolume), 1500);
            }
          }

          const screenId = screenIdToAudioId[entry.target.id];
          if (screenId && document.body.classList.contains('unlocked')) {
            audioManager.playScreen(screenId);
          }

          if (entry.target.id === 'playlist-screen') {
            typeTextOnReveal(playlistIntro, CONFIG.playlist.intro, 24);
            typeTextOnReveal(playlistFinalPhrase, CONFIG.playlist.finalPhrase, 28);
          }
        } else if (entry.target.id === 'playlist-screen') {
          const activeAudio = audioManager.activeAudio;
          if (activeAudio && activeAudio.dataset.previousVolume) {
            audioManager.fadeVolume(activeAudio, Number(activeAudio.dataset.previousVolume), 1500);
          }
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function hydrateCustomTexts() {
  const display = document.getElementById('prenomDisplay');
  if (display) {
    display.textContent = CONFIG.prenom;
  }

  document.title = `Joyeux anniversaire ${CONFIG.prenom}`;
}

function init() {
  hydrateCustomTexts();
  generateTimeline();
  renderTraits();
  renderDestinations();
  renderPlaylistSection();
  revealOnScroll();
  createFloatingHearts();
  bindResponses();
  audioManager.init();

  secretInput.addEventListener('focus', () => {
    audioManager.playScreen('invite');
  });

  secretForm.addEventListener('submit', handleSecretSubmit);

  if (localStorage.getItem('surpriseUnlocked') === 'true') {
    unlockSurprise();
  }
}

init();

// CSS for confetti animation (ajout dynamique pour éviter la complexité du CSS global).
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
  .confetti-piece {
    position: fixed;
    top: 0;
    width: 10px;
    height: 16px;
    border-radius: 3px;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.9;
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  @keyframes confettiFall {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate3d(var(--x), var(--y), 0) rotate(var(--rot)) scale(0.8);
      opacity: 0;
    }
  }
`;
document.head.appendChild(confettiStyle);
