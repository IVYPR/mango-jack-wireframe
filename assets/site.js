/* Mango Jack wireframe draft · shared header, footer, bag, product data */
{
  const PRODUCTS = [
    { id: 'crab-tee', name: 'Crab Tee', cat: 'tees', colours: ['Ocean', 'Navy', 'White'] },
    { id: 'fish-outline-tee', name: 'Fish Outline Tee', cat: 'tees', colours: ['Purple', 'Navy'] },
    { id: 'logo-tee', name: 'Logo Tee', cat: 'tees', colours: ['White', 'Navy', 'Sand'] },
    { id: 'long-sleeve-sun-tee', name: 'Long Sleeve Sun Tee', cat: 'tees', colours: ['White', 'Navy'], tag: 'UPF 50+' },
    { id: 'corduroy-short', name: 'The Corduroy Short', cat: 'shorts', colours: ['Sand'], img: 'assets/corduroy-short.jpg', tag: 'New arrival' },
    { id: 'corduroy-short-navy', name: 'The Corduroy Short', cat: 'shorts', colours: ['Navy'] },
    { id: 'walk-short', name: 'Walk Short', cat: 'shorts', colours: ['Stone', 'Navy'] },
    { id: 'patch-trucker', name: 'Patch Trucker Cap', cat: 'headwear', colours: ['Blue / Red'] },
    { id: 'logo-cap', name: 'Logo Cap', cat: 'headwear', colours: ['Cream', 'Navy'] },
    { id: 'bucket-hat', name: 'Bucket Hat', cat: 'headwear', colours: ['Navy', 'Sand'] }
  ];
  const CATS = { tees: 'Tees', shorts: 'Shorts', headwear: 'Headwear' };
  window.MJ = { PRODUCTS, CATS };

  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tile = (p) => `
    <a class="ptile" href="product.html#${p.id}">
      <div class="pimg">${p.img ? `<img src="${p.img}" alt="${esc(p.name)}">` : '<span class="pimg-label">Flatlay</span>'}${p.tag ? `<span class="ptag">${esc(p.tag)}</span>` : ''}</div>
      <div class="pmeta"><span class="pname">${esc(p.name)}</span><span class="pprice">[$PRICE]</span></div>
      <div class="pcols">${p.colours.length} colour${p.colours.length > 1 ? 's' : ''} · ${esc(p.colours.join(', '))}</div>
    </a>`;
  window.MJ.tile = tile;
  window.MJ.esc = esc;

  const ICON = {
    burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  const header = `
  <header class="site" id="hdr">
    <div class="wrap hdr">
      <div style="display:flex;align-items:center">
        <button class="icon-btn burger" type="button" aria-label="Open menu" data-open="mnav">${ICON.burger}</button>
        <nav class="nav" aria-label="Primary">
          <button type="button" id="shopBtn" aria-expanded="false" aria-controls="mega">Shop</button>
          <a href="shop.html#tees">Tees</a>
          <a href="shop.html#shorts">Shorts</a>
          <a href="shop.html#headwear">Headwear</a>
        </nav>
      </div>
      <a href="index.html" class="logo" aria-label="Mango Jack home"><img class="lw" src="assets/logo-white.png" alt=""><img class="lc" src="assets/logo-colour.png" alt=""></a>
      <div class="icons">
        <button class="icon-btn" type="button" aria-label="Search" id="searchBtn" aria-expanded="false" aria-controls="search">${ICON.search}</button>
        <button class="icon-btn" type="button" aria-label="Open bag" data-open="drawer">${ICON.bag}<span class="count" id="bagCount">0</span></button>
      </div>
    </div>
    <div class="mega" id="mega">
      <div class="mega-inner">
        <div><h3><a href="shop.html#tees">Tees</a></h3><ul>${PRODUCTS.filter(p => p.cat === 'tees').map(p => `<li><a href="product.html#${p.id}">${esc(p.name)}</a></li>`).join('')}</ul></div>
        <div><h3><a href="shop.html#shorts">Shorts</a></h3><ul>${PRODUCTS.filter(p => p.cat === 'shorts').map(p => `<li><a href="product.html#${p.id}">${esc(p.name)}${p.id.endsWith('navy') ? ' · Navy' : ''}</a></li>`).join('')}</ul></div>
        <div><h3><a href="shop.html#headwear">Headwear</a></h3><ul>${PRODUCTS.filter(p => p.cat === 'headwear').map(p => `<li><a href="product.html#${p.id}">${esc(p.name)}</a></li>`).join('')}</ul></div>
        <a href="shop.html" class="media" style="position:relative"><span class="ph-name">Shop all image</span></a>
      </div>
    </div>
    <div class="search wrap" id="search">
      <form role="search" id="searchForm">
        <label for="q" class="sr">Search products</label>
        <input id="q" type="search" placeholder="Search tees, shorts, headwear" autocomplete="off">
      </form>
      <div class="search-results" id="searchResults"></div>
    </div>
  </header>`;

  const footer = `
  <footer style="position:relative">
    <div class="wrap">
      <p class="small" style="margin:0 0 40px;text-align:center">Secure payment · Fast delivery · Customer service · Easy returns</p>
      <div class="fcols">
        <div><h3>Shop</h3><ul><li><a href="shop.html#tees">Tees</a></li><li><a href="shop.html#shorts">Shorts</a></li><li><a href="shop.html#headwear">Headwear</a></li><li><a href="shop.html">Shop all</a></li></ul></div>
        <div><h3>Help</h3><ul><li><a href="contact.html">Contact</a></li><li><a href="contact.html#faq">Size guide</a></li><li><a href="contact.html#faq">Delivery</a></li><li>1300 734 708</li></ul></div>
        <div><h3>Mango Jack</h3><ul><li><a href="about.html">Our story</a></li><li><a href="#">Privacy policy</a></li><li><a href="#">Refund policy</a></li><li><a href="#">Terms of service</a></li></ul></div>
        <div><h3>Follow us</h3><ul><li><a href="#">Instagram · @MangoJack_AU</a></li></ul></div>
      </div>
      <div class="fbase" style="align-items:center"><img src="assets/logo-colour.png" alt="Mango Jack" style="height:56px;width:auto"><span>Australia / $AUD</span><span>Mango Jack © 2026</span></div>
    </div>
  </footer>
  <div class="scrim" id="scrim"></div>
  <aside class="panel drawer" id="drawer" aria-label="Shopping bag" aria-hidden="true">
    <div class="drawer-hd"><h2>Bag (<span id="bagCount2">0</span>)</h2><button class="icon-btn" type="button" aria-label="Close bag" data-close>${ICON.close}</button></div>
    <div class="drawer-bd">
      <p class="small" style="margin:0">Complimentary standard delivery within Australia</p>
      <div id="bagItems"></div>
      <div><div class="small" style="margin-bottom:8px">Complete the look</div><div class="cl" id="bagCl"></div></div>
    </div>
    <div class="drawer-ft"><div class="row"><span>Subtotal</span><span id="subtotal">$0.00 AUD</span></div><button class="btn" type="button">Secure checkout</button></div>
  </aside>
  <nav class="panel mnav" id="mnav" aria-label="Mobile" aria-hidden="true">
    <div style="display:flex;justify-content:flex-end"><button class="icon-btn" type="button" aria-label="Close menu" data-close>${ICON.close}</button></div>
    <a href="shop.html" data-close>Shop all</a>
    <a href="shop.html#tees" data-close>Tees</a>
    <a href="shop.html#shorts" data-close>Shorts</a>
    <a href="shop.html#headwear" data-close>Headwear</a>
    <a href="about.html" data-close>Our story</a>
    <a href="contact.html" data-close>Contact</a>
  </nav>
  <div class="draft" role="region" aria-label="Draft controls"><span>Wireframe draft</span><button type="button" id="toggleNotes" aria-pressed="false">Show notes</button></div>`;

  document.getElementById('site-header').outerHTML = header;
  document.getElementById('site-footer').outerHTML = footer;

  const body = document.body;
  const hdr = document.getElementById('hdr');
  const scrim = document.getElementById('scrim');
  const panels = { drawer: document.getElementById('drawer'), mnav: document.getElementById('mnav') };
  const closeAll = () => { for (const k in panels) { panels[k].classList.remove('open'); panels[k].setAttribute('aria-hidden', 'true'); } scrim.classList.remove('open'); };
  const openPanel = (k) => { closeAll(); panels[k].classList.add('open'); panels[k].setAttribute('aria-hidden', 'false'); scrim.classList.add('open'); };
  document.querySelectorAll('[data-open]').forEach((b) => b.addEventListener('click', () => openPanel(b.dataset.open)));
  document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', closeAll));
  scrim.addEventListener('click', closeAll);

  // Header: transparent over a hero only on pages that have one
  const overHero = body.dataset.hero === '1';
  const onScroll = () => hdr.classList.toggle('solid', !overHero || window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (!overHero) body.classList.add('pad-top');

  // Mega menu
  const shopBtn = document.getElementById('shopBtn'); let t;
  const setMega = (on) => { hdr.classList.toggle('menu-open', on); shopBtn.setAttribute('aria-expanded', on); };
  shopBtn.addEventListener('click', () => setMega(!hdr.classList.contains('menu-open')));
  shopBtn.addEventListener('mouseenter', () => { clearTimeout(t); setMega(true); });
  hdr.addEventListener('mouseleave', () => { t = setTimeout(() => setMega(false), 150); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAll(); setMega(false); } });

  // Search (live, over the product list)
  const sBtn = document.getElementById('searchBtn'), s = document.getElementById('search'), q = document.getElementById('q'), sr = document.getElementById('searchResults');
  sBtn.addEventListener('click', () => { const on = !s.classList.contains('open'); s.classList.toggle('open', on); hdr.classList.toggle('search-open', on); sBtn.setAttribute('aria-expanded', on); if (on) q.focus(); });
  const runSearch = () => {
    const v = q.value.trim().toLowerCase();
    const hits = v ? PRODUCTS.filter((p) => (p.name + ' ' + CATS[p.cat] + ' ' + p.colours.join(' ')).toLowerCase().includes(v)) : [];
    sr.innerHTML = v ? (hits.length ? hits.map((p) => `<a href="product.html#${p.id}">${esc(p.name)} <span class="small">${esc(CATS[p.cat])} · ${esc(p.colours.join(', '))}</span></a>`).join('') : '<p class="small" style="margin:0">No matches yet. Try tee, short or cap.</p>') : '';
  };
  q.addEventListener('input', runSearch);
  document.getElementById('searchForm').addEventListener('submit', (e) => { e.preventDefault(); const first = sr.querySelector('a'); if (first) location.href = first.getAttribute('href'); });

  // Bag, remembered between pages in this browser
  const load = () => { try { return JSON.parse(localStorage.getItem('mj-bag') || '[]'); } catch (e) { return []; } };
  const save = (b) => { try { localStorage.setItem('mj-bag', JSON.stringify(b)); } catch (e) {} };
  let bag = load();
  const renderBag = () => {
    const n = bag.reduce((a, i) => a + i.qty, 0);
    document.getElementById('bagCount').textContent = n;
    document.getElementById('bagCount2').textContent = n;
    document.getElementById('subtotal').textContent = n ? '[$PRICE] × ' + n : '$0.00 AUD';
    document.getElementById('bagItems').innerHTML = bag.length ? bag.map((i, ix) => {
      const p = PRODUCTS.find((x) => x.id === i.id) || { name: i.id };
      return `<div class="line-item"><div class="pimg" style="height:104px">${p.img ? `<img src="${p.img}" alt="">` : ''}</div><div><div style="font-weight:600">${esc(p.name)}</div><div class="small">${esc(i.colour)} · ${esc(i.size)}</div><div class="qty"><button type="button" data-q="${ix}" data-d="-1" aria-label="Decrease quantity">−</button><span>${i.qty}</span><button type="button" data-q="${ix}" data-d="1" aria-label="Increase quantity">+</button></div></div></div>`;
    }).join('') : '<p style="margin:0;color:var(--ink-2)">Your bag is empty.</p>';
    const inBag = new Set(bag.map((i) => (PRODUCTS.find((p) => p.id === i.id) || {}).cat));
    const sugg = ['tees', 'shorts', 'headwear'].filter((c) => !inBag.has(c)).concat(['tees', 'shorts', 'headwear']).slice(0, 3).map((c) => PRODUCTS.find((p) => p.cat === c));
    document.getElementById('bagCl').innerHTML = sugg.map((p) => `<a href="product.html#${p.id}" class="pimg" style="height:104px" aria-label="${esc(p.name)}">${p.img ? `<img src="${p.img}" alt="">` : `<span class="pimg-label" style="font-size:10px">${esc(CATS[p.cat])}</span>`}</a>`).join('');
  };
  document.getElementById('bagItems').addEventListener('click', (e) => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    const i = bag[+b.dataset.q]; i.qty += +b.dataset.d; if (i.qty < 1) bag.splice(+b.dataset.q, 1);
    save(bag); renderBag();
  });
  window.MJ.addToBag = (id, colour, size) => {
    const ex = bag.find((i) => i.id === id && i.colour === colour && i.size === size);
    if (ex) ex.qty++; else bag.push({ id, colour, size, qty: 1 });
    save(bag); renderBag(); openPanel('drawer');
  };
  renderBag();

  // Newsletter (any page)
  const nl = document.getElementById('nlForm');
  if (nl) nl.addEventListener('submit', (e) => { e.preventDefault(); const v = document.getElementById('nlEmail').value; document.getElementById('nlMsg').textContent = /.+@.+\..+/.test(v) ? 'Thanks, you’re on the list.' : 'Please enter a valid email address.'; });

  // Notes toggle
  const tn = document.getElementById('toggleNotes');
  tn.addEventListener('click', () => { const on = body.classList.toggle('notes'); tn.textContent = on ? 'Hide notes' : 'Show notes'; tn.setAttribute('aria-pressed', on); });
}
