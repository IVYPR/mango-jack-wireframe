/* Mango Jack draft · shared header, footer, bag and product data */
{
  const PRODUCTS = [
    { id: 'crab-tee', name: 'Crab Tee', cat: 'tees', colours: ['Ocean', 'Navy', 'White'] },
    { id: 'fish-outline-tee', name: 'Fish Outline Tee', cat: 'tees', colours: ['Purple', 'Navy'] },
    { id: 'logo-tee', name: 'Logo Tee', cat: 'tees', colours: ['White', 'Navy', 'Sand'] },
    { id: 'long-sleeve-sun-tee', name: 'Long Sleeve Sun Tee', cat: 'tees', colours: ['White', 'Navy'], tag: 'UPF 50+' },
    { id: 'corduroy-short', name: 'The Corduroy Short', cat: 'shorts', colours: ['Sand'], img: 'assets/corduroy-short.jpg', tag: 'New' },
    { id: 'corduroy-short-navy', name: 'The Corduroy Short', cat: 'shorts', colours: ['Navy'] },
    { id: 'walk-short', name: 'Walk Short', cat: 'shorts', colours: ['Stone', 'Navy'] },
    { id: 'patch-trucker', name: 'Patch Trucker Cap', cat: 'headwear', colours: ['Blue / Red'] },
    { id: 'logo-cap', name: 'Logo Cap', cat: 'headwear', colours: ['Cream', 'Navy'] },
    { id: 'bucket-hat', name: 'Bucket Hat', cat: 'headwear', colours: ['Navy', 'Sand'] }
  ];
  const CATS = { tees: 'T-shirts', shorts: 'Shorts', headwear: 'Headwear' };
  const CAT_LONG = { tees: 'Unisex T-shirts', shorts: 'Shorts', headwear: 'Headwear' };
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tile = (p) => `
    <a class="ptile" href="product.html#${p.id}">
      <div class="pimg">${p.img ? `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy">` : '<span class="pimg-label">Flatlay</span>'}${p.tag ? `<span class="ptag">${esc(p.tag)}</span>` : ''}</div>
      <div class="pmeta"><span class="pname">${esc(p.name)}</span><span class="pprice">[$PRICE]</span></div>
      <div class="pcols">${esc(p.colours.join(' · '))}</div>
    </a>`;
  const count = (c) => PRODUCTS.filter((p) => p.cat === c).length;
  const indexList = (closeAttr) => ['tees', 'shorts', 'headwear'].map((c) =>
    `<a href="shop.html#${c}"${closeAttr}>${CAT_LONG[c]}<small>${count(c)}</small><span aria-hidden="true">↗</span></a>`).join('');
  window.MJ = { PRODUCTS, CATS, CAT_LONG, esc, tile, indexList };

  const header = `
  <header class="site" id="hdr">
    <div class="hdr">
      <div class="hdr-l">
        <button class="navlink" type="button" id="shopBtn" aria-expanded="false" aria-controls="mega">Shop <span aria-hidden="true">↓</span></button>
        <a class="navlink hide-sm" href="about.html">Our story</a>
      </div>
      <a href="index.html" class="logo" aria-label="Mango Jack home"><img class="lw" src="assets/logo-white.png" alt=""><img class="lc" src="assets/logo-colour.png" alt=""></a>
      <div class="hdr-r">
        <button class="navlink hide-sm" type="button" id="searchBtn" aria-expanded="false" aria-controls="search">Search</button>
        <button class="navlink" type="button" data-open="drawer">Bag (<span id="bagCount">0</span>)</button>
      </div>
    </div>
    <div class="mega" id="mega">
      <div class="mega-inner">
        <div>
          <span class="label">Summer 26 · The first collection</span>
          <nav class="index" aria-label="Shop categories">${indexList('')}<a href="shop.html">Shop all<small>${PRODUCTS.length}</small><span aria-hidden="true">↗</span></a></nav>
          <p class="only-sm" style="gap:22px;margin-top:18px"><a class="navlink" href="about.html">Our story</a><a class="navlink" href="contact.html">Contact</a><button class="navlink" type="button" id="searchBtn2">Search</button></p>
        </div>
        <a href="shop.html" class="media"><img class="bg" src="assets/kids-beach.jpg" alt="" loading="lazy"></a>
      </div>
    </div>
    <div class="search" id="search">
      <form role="search" id="searchForm">
        <label for="q" class="sr">Search products</label>
        <input id="q" type="search" placeholder="Search t-shirts, shorts, headwear" autocomplete="off">
      </form>
      <div class="search-results" id="searchResults"></div>
    </div>
  </header>`;

  const footer = `
  <footer>
    <div class="f1">
      <a href="#top" aria-label="Back to top"><img src="assets/logo-colour.png" alt="Mango Jack" loading="lazy"></a>
      <nav aria-label="Footer"><a href="shop.html">Shop</a><a href="about.html">Our story</a><a href="contact.html">Contact</a><a href="#top">Back to top ↑</a></nav>
    </div>
    <div class="f2">
      <span>1300 734 708 · <a href="#">Instagram @MangoJack_AU</a></span>
      <span><a href="#">Privacy policy</a> · <a href="#">Refund policy</a> · <a href="#">Terms of service</a></span>
      <small>© Mango Jack 2026</small>
    </div>
  </footer>
  <div class="scrim" id="scrim"></div>
  <aside class="panel drawer" id="drawer" aria-label="Shopping bag" aria-hidden="true">
    <div class="drawer-hd"><span class="label" style="margin:0">Bag (<span id="bagCount2">0</span>)</span><button class="navlink" type="button" data-close>Close ✕</button></div>
    <div class="drawer-bd">
      <p class="small">Complimentary standard delivery within Australia</p>
      <div id="bagItems"></div>
      <div><span class="label">Complete the look</span><div class="cl" id="bagCl"></div></div>
    </div>
    <div class="drawer-ft"><div class="row"><span class="label" style="margin:0">Subtotal</span><span id="subtotal">$0.00 AUD</span></div><button class="btn btn-wide" type="button">Checkout <span aria-hidden="true">→</span></button></div>
  </aside>
  <div class="draft" role="region" aria-label="Draft controls"><span>Wireframe draft</span><button type="button" id="toggleNotes" aria-pressed="false">Show notes</button></div>`;

  document.body.id = 'top';
  document.getElementById('site-header').outerHTML = header;
  document.getElementById('site-footer').outerHTML = footer;

  const body = document.body;
  const hdr = document.getElementById('hdr');
  const scrim = document.getElementById('scrim');
  const drawer = document.getElementById('drawer');
  const closeDrawer = () => { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); scrim.classList.remove('open'); };
  const openDrawer = () => { setMega(false); drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); scrim.classList.add('open'); };
  document.querySelectorAll('[data-open="drawer"]').forEach((b) => b.addEventListener('click', openDrawer));
  document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', closeDrawer));
  scrim.addEventListener('click', closeDrawer);

  // Header sits clear over a hero, turns to paper after scrolling
  const overHero = body.dataset.hero === '1';
  const onScroll = () => hdr.classList.toggle('solid', !overHero || window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (!overHero) body.classList.add('pad-top');

  // Shop menu
  const shopBtn = document.getElementById('shopBtn'); let t;
  function setMega(on) { hdr.classList.toggle('menu-open', on); shopBtn.setAttribute('aria-expanded', on); }
  shopBtn.addEventListener('click', () => setMega(!hdr.classList.contains('menu-open')));
  if (matchMedia('(hover:hover)').matches) {
    shopBtn.addEventListener('mouseenter', () => { clearTimeout(t); setMega(true); });
    hdr.addEventListener('mouseleave', () => { t = setTimeout(() => setMega(false), 150); });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDrawer(); setMega(false); setSearch(false); } });

  // Search
  const s = document.getElementById('search'), q = document.getElementById('q'), sr = document.getElementById('searchResults');
  const sBtns = [document.getElementById('searchBtn'), document.getElementById('searchBtn2')];
  function setSearch(on) { s.classList.toggle('open', on); hdr.classList.toggle('search-open', on); sBtns.forEach((b) => b.setAttribute('aria-expanded', on)); if (on) { setMega(false); q.focus(); } }
  sBtns.forEach((b) => b.addEventListener('click', () => setSearch(!s.classList.contains('open'))));
  q.addEventListener('input', () => {
    const v = q.value.trim().toLowerCase();
    const SYN = { tees: 'tee t-shirt tshirt shirt', shorts: 'short', headwear: 'cap hat' };
    const stem = v.replace(/s$/, '');
    const hits = v ? PRODUCTS.filter((p) => (p.name + ' ' + CATS[p.cat] + ' ' + SYN[p.cat] + ' ' + p.colours.join(' ')).toLowerCase().includes(stem)) : [];
    sr.innerHTML = v ? (hits.length ? hits.map((p) => `<a href="product.html#${p.id}"><span>${esc(p.name)}</span><span class="small">${esc(CATS[p.cat])} · ${esc(p.colours.join(', '))}</span></a>`).join('') : '<p class="small" style="padding:12px 0">No matches yet. Try tee, short or cap.</p>') : '';
  });
  document.getElementById('searchForm').addEventListener('submit', (e) => { e.preventDefault(); const first = sr.querySelector('a'); if (first) location.href = first.getAttribute('href'); });

  // Bag, remembered between pages in this browser
  const load = () => { try { return JSON.parse(localStorage.getItem('mj-bag') || '[]'); } catch (e) { return []; } };
  const save = (b) => { try { localStorage.setItem('mj-bag', JSON.stringify(b)); } catch (e) {} };
  let bag = load().filter((i) => PRODUCTS.some((p) => p.id === i.id));
  const renderBag = () => {
    const n = bag.reduce((a, i) => a + i.qty, 0);
    document.getElementById('bagCount').textContent = n;
    document.getElementById('bagCount2').textContent = n;
    document.getElementById('subtotal').textContent = n ? '[$PRICE] × ' + n : '$0.00 AUD';
    document.getElementById('bagItems').innerHTML = bag.length ? bag.map((i, ix) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      return `<div class="line-item"><a href="product.html#${p.id}" class="pimg">${p.img ? `<img src="${p.img}" alt="">` : ''}</a><div><div>${esc(p.name)}</div><div class="small" style="margin-top:4px">${esc(i.colour)} · ${esc(i.size)}</div><div class="qty"><button type="button" data-q="${ix}" data-d="-1" aria-label="Remove one">−</button><span>${i.qty}</span><button type="button" data-q="${ix}" data-d="1" aria-label="Add one">+</button></div></div></div>`;
    }).join('') : '<p style="color:var(--ink-2)">Your bag is empty.</p>';
    const inBag = new Set(bag.map((i) => PRODUCTS.find((p) => p.id === i.id).cat));
    const sugg = ['tees', 'shorts', 'headwear'].filter((c) => !inBag.has(c)).concat(['tees', 'shorts', 'headwear']).slice(0, 3).map((c) => PRODUCTS.find((p) => p.cat === c));
    document.getElementById('bagCl').innerHTML = sugg.map((p) => `<a href="product.html#${p.id}" class="pimg" aria-label="${esc(p.name)}">${p.img ? `<img src="${p.img}" alt="">` : `<span class="pimg-label" style="font-size:9px;padding:4px 6px">${esc(CATS[p.cat])}</span>`}</a>`).join('');
  };
  document.getElementById('bagItems').addEventListener('click', (e) => {
    const b = e.target.closest('[data-q]'); if (!b) return;
    const i = bag[+b.dataset.q]; i.qty += +b.dataset.d; if (i.qty < 1) bag.splice(+b.dataset.q, 1);
    save(bag); renderBag();
  });
  window.MJ.addToBag = (id, colour, size) => {
    const ex = bag.find((i) => i.id === id && i.colour === colour && i.size === size);
    if (ex) ex.qty++; else bag.push({ id, colour, size, qty: 1 });
    save(bag); renderBag(); openDrawer();
  };
  renderBag();

  // Shared size picker for any [data-buy] block: chips + add button
  window.MJ.sizePicker = (root, getId, getColour) => {
    const btn = root.querySelector('[data-add]');
    let size = (root.querySelector('[data-size][aria-pressed="true"]') || {}).textContent || '';
    root.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-size]');
      if (chip) {
        root.querySelectorAll('[data-size]').forEach((x) => x.setAttribute('aria-pressed', 'false'));
        chip.setAttribute('aria-pressed', 'true'); size = chip.textContent;
        btn.firstChild.textContent = chip.dataset.oos ? 'Notify me when back ' : 'Add to bag ';
        return;
      }
      if (e.target.closest('[data-add]')) {
        const label = btn.firstChild.textContent.trim();
        if (label.startsWith('Notify')) { btn.firstChild.textContent = 'We’ll email you '; return; }
        if (label !== 'Add to bag') return;
        window.MJ.addToBag(getId(), getColour(), size);
      }
    });
    return { reset: () => { size = (root.querySelector('[data-size][aria-pressed="true"]') || {}).textContent || ''; btn.firstChild.textContent = 'Add to bag '; } };
  };

  // Notes toggle
  const tn = document.getElementById('toggleNotes');
  tn.addEventListener('click', () => { const on = body.classList.toggle('notes'); tn.textContent = on ? 'Hide notes' : 'Show notes'; tn.setAttribute('aria-pressed', on); });
}
