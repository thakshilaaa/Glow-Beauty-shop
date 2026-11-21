// ---------- Category filter ----------
const filterBtns = document.querySelectorAll('.filter-buttons button');
const cards      = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;
    let shown = 0;
    cards.forEach(card => {
      const visible = (cat === 'all' || card.dataset.cat === cat);
      card.style.display = visible ? '' : 'none';
      if (visible) shown++;
    });
    console.log(`Filter: ${cat} -> ${shown} products shown`);
  });
});

// ---------- Wishlist heart toggle ----------
document.querySelectorAll('.wishlist').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  });
});

// ---------- Console banner ----------
console.log('%c🌸 Glow Beauty Shop loaded', 'color:#c2185b;font-weight:bold;font-size:14px;');
