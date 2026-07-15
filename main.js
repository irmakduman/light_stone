/* =============================================
   main.js — Ana Menü Yönetimi
   ============================================= */

// --- Ekran geçişi ---
function showScreen(targetId) {
  const current = document.querySelector('.screen.active');
  const target  = document.getElementById(targetId);
  if (!target || current === target) return;

  current.classList.remove('active');
  current.classList.add('fade-out');
  setTimeout(() => current.classList.remove('fade-out'), 400);

  target.classList.add('active', 'fade-in');
  setTimeout(() => target.classList.remove('fade-in'), 500);
}

// --- Menü butonları ---
document.getElementById('btn-start').addEventListener('click', () => {
  if (typeof startStory === 'function') {
    startStory();
  } else {
    alert('Hikaye modülleri henüz yüklenmedi.');
  }
});

document.getElementById('btn-how-to-play').addEventListener('click', () => {
  showScreen('screen-howto');
});

document.getElementById('btn-credits').addEventListener('click', () => {
  showScreen('screen-credits');
});

document.getElementById('btn-howto-back').addEventListener('click', () => {
  showScreen('screen-menu');
});

document.getElementById('btn-credits-back').addEventListener('click', () => {
  showScreen('screen-menu');
});

// --- Partikül efekti ---
(function spawnParticles() {
  const container = document.getElementById('particles-container');
  const count = 38;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');

    const size    = Math.random() * 3 + 1;          // 1–4px
    const left    = Math.random() * 100;             // % pozisyon
    const delay   = Math.random() * 12;              // saniye gecikme
    const dur     = Math.random() * 10 + 8;          // 8–18s süre
    const drift   = (Math.random() - 0.5) * 80 + 'px';

    // Altın, kırmızı veya mor renk
    const colors = [
      'rgba(201,162,39,0.7)',
      'rgba(240,208,96,0.5)',
      'rgba(139,0,0,0.6)',
      'rgba(160,80,200,0.45)',
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      bottom:-10px;
      background:${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      animation-duration:${dur}s;
      animation-delay:-${delay}s;
      --drift:${drift};
    `;

    container.appendChild(p);
  }
})();
