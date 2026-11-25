/* Mango Jack draft · shared header, footer, bag and product data */
{
  // Real launch range from "New Product shots" (front + back flatlay per colour)
  const PRODUCTS = [
    {
      "id": "offshore-fishing-club-tee",
      "name": "Offshore Fishing Club Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "Navy",
          "front": "assets/products/offshore-fishing-club-tee-navy-front.jpg",
          "back": "assets/products/offshore-fishing-club-tee-navy-back.jpg"
        }
      ],
      "tag": "New"
    },
    {
      "id": "outline-logo-oversized-tee",
      "name": "Outline Logo Oversized Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "White",
          "front": "assets/products/outline-logo-oversized-tee-white-front.jpg",
          "back": "assets/products/outline-logo-oversized-tee-white-back.jpg"
        },
        {
          "name": "Navy",
          "front": "assets/products/outline-logo-oversized-tee-navy-front.jpg",
          "back": "assets/products/outline-logo-oversized-tee-navy-back.jpg"
        }
      ]
    },
    {
      "id": "marlin-compass-oversize-tee",
      "name": "Marlin Compass Oversize Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "White",
          "front": "assets/products/marlin-compass-oversize-tee-white-front.jpg",
          "back": "assets/products/marlin-compass-oversize-tee-white-back.jpg"
        }
      ]
    },
    {
      "id": "bar-and-grill-tee",
      "name": "Bar and Grill Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "Blue",
          "front": "assets/products/bar-and-grill-tee-blue-front.jpg",
          "back": "assets/products/bar-and-grill-tee-blue-back.jpg"
        }
      ]
    },
    {
      "id": "outline-logo-regfit-tee",
      "name": "Outline Logo Regular Fit Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "White",
          "front": "assets/products/outline-logo-regfit-tee-white-front.jpg",
          "back": "assets/products/outline-logo-regfit-tee-white-back.jpg"
        },
        {
          "name": "Navy",
          "front": "assets/products/outline-logo-regfit-tee-navy-front.jpg",
          "back": "assets/products/outline-logo-regfit-tee-navy-back.jpg"
        }
      ]
    },
    {
      "id": "large-outline-regfit-tee",
      "name": "Large Outline Regular Fit Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "White",
          "front": "assets/products/large-outline-regfit-tee-white-front.jpg",
          "back": "assets/products/large-outline-regfit-tee-white-back.jpg"
        }
      ]
    },
    {
      "id": "murray-cod-fresh-tee",
      "name": "Murray Cod Fresh Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "Beige",
          "front": "assets/products/murray-cod-fresh-tee-beige-front.jpg",
          "back": "assets/products/murray-cod-fresh-tee-beige-back.jpg"
        }
      ]
    },
    {
      "id": "sand-whiting-tee",
      "name": "Sand Whiting Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "Beige",
          "front": "assets/products/sand-whiting-tee-beige-front.jpg",
          "back": "assets/products/sand-whiting-tee-beige-back.jpg"
        }
      ]
    },
    {
      "id": "noosa-north-reef-tee",
      "name": "Noosa North Reef Tee",
      "cat": "tees",
      "colours": [
        {
          "name": "White",
          "front": "assets/products/noosa-north-reef-tee-white-front.jpg",
          "back": "assets/products/noosa-north-reef-tee-white-back.jpg"
        }
      ]
    },
    {
      "id": "broadwater-cord-short",
      "name": "Broadwater Cord Short",
      "cat": "shorts",
      "colours": [
        {
          "name": "Beige",
          "front": "assets/products/broadwater-cord-short-beige-front.jpg",
          "back": "assets/products/broadwater-cord-short-beige-back.jpg"
        },
        {
          "name": "Navy",
          "front": "assets/products/broadwater-cord-short-navy-front.jpg",
          "back": "assets/products/broadwater-cord-short-navy-back.jpg"
        },
        {
          "name": "Salmon",
          "front": "assets/products/broadwater-cord-short-salmon-front.jpg",
          "back": "assets/products/broadwater-cord-short-salmon-back.jpg"
        }
      ],
      "tag": "New"
    },
    {
      "id": "seaway-swim-short-pelagic",
      "name": "Seaway Swim Short \u00b7 Pelagic Print",
      "cat": "shorts",
      "colours": [
        {
          "name": "Azure Blue",
          "front": "assets/products/seaway-swim-short-pelagic-azure-blue-front.jpg",
          "back": "assets/products/seaway-swim-short-pelagic-azure-blue-back.jpg"
        }
      ]
    },
    {
      "id": "seaway-swim-short",
      "name": "Seaway Swim Short",
      "cat": "shorts",
      "colours": [
        {
          "name": "Navy",
          "front": "assets/products/seaway-swim-short-navy-front.jpg",
          "back": "assets/products/seaway-swim-short-navy-back.jpg"
        }
      ]
    },
    {
      "id": "terry-towel-short",
      "name": "Terry Towel Short",
      "cat": "shorts",
      "colours": [
        {
          "name": "Navy",
          "front": "assets/products/terry-towel-short-navy-front.jpg",
          "back": "assets/products/terry-towel-short-navy-back.jpg"
        }
      ]
    },
    {
      "id": "dad-cap",
      "name": "Dad Cap",
      "cat": "headwear",
      "colours": [
        {
          "name": "Beige",
          "front": "assets/products/dad-cap-beige-front.jpg",
          "back": "assets/products/dad-cap-beige-back.jpg"
        },
        {
          "name": "Navy",
          "front": "assets/products/dad-cap-navy-front.jpg",
          "back": "assets/products/dad-cap-navy-back.jpg"
        },
        {
          "name": "Sky Blue",
          "front": "assets/products/dad-cap-sky-blue-front.jpg",
          "back": "assets/products/dad-cap-sky-blue-back.jpg"
        }
      ]
    },
    {
      "id": "ripstop-cap",
      "name": "Ripstop Cap",
      "cat": "headwear",
      "colours": [
        {
          "name": "Navy",
          "front": "assets/products/ripstop-cap-navy-front.jpg",
          "back": "assets/products/ripstop-cap-navy-back.jpg"
        },
        {
          "name": "White",
          "front": "assets/products/ripstop-cap-white-front.jpg",
          "back": "assets/products/ripstop-cap-white-back.jpg"
        }
      ]
    },
    {
      "id": "bucket-hat",
      "name": "Bucket Hat",
      "cat": "headwear",
      "colours": [
        {
          "name": "Blue",
          "front": "assets/products/bucket-hat-blue-front.jpg",
          "back": "assets/products/bucket-hat-blue-back.jpg"
        }
      ]
    }
  ];
  const CATS = { tees: 'T-shirts', shorts: 'Shorts', headwear: 'Headwear' };
  const CAT_LONG = { tees: 'Unisex T-shirts', shorts: 'Shorts', headwear: 'Headwear' };
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tile = (p) => {
    const c = p.colours[0];
    return `
    <a class="ptile" href="product.html#${p.id}">
      <div class="pimg"><img src="${c.front}" alt="${esc(p.name)} in ${esc(c.name)}" loading="lazy"><img class="alt" src="${c.back}" alt="" loading="lazy">${p.tag ? `<span class="ptag">${esc(p.tag)}</span>` : ''}</div>
      <div class="pmeta"><span class="pname">${esc(p.name)}</span><span class="pprice">[$PRICE]</span></div>
      <div class="pcols">${p.colours.length > 1 ? p.colours.length + ' colours · ' : ''}${esc(p.colours.map((x) => x.name).join(' · '))}</div>
    </a>`;
  };
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
    const hits = v ? PRODUCTS.filter((p) => (p.name + ' ' + CATS[p.cat] + ' ' + SYN[p.cat] + ' ' + p.colours.map((x) => x.name).join(' ')).toLowerCase().includes(stem)) : [];
    sr.innerHTML = v ? (hits.length ? hits.map((p) => `<a href="product.html#${p.id}"><span>${esc(p.name)}</span><span class="small">${esc(CATS[p.cat])} · ${esc(p.colours.map((x) => x.name).join(', '))}</span></a>`).join('') : '<p class="small" style="padding:12px 0">No matches yet. Try tee, short or cap.</p>') : '';
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
      const c = p.colours.find((x) => x.name === i.colour) || p.colours[0];
      return `<div class="line-item"><a href="product.html#${p.id}" class="pimg"><img src="${c.front}" alt=""></a><div><div>${esc(p.name)}</div><div class="small" style="margin-top:4px">${esc(i.colour)} · ${esc(i.size)}</div><div class="qty"><button type="button" data-q="${ix}" data-d="-1" aria-label="Remove one">−</button><span>${i.qty}</span><button type="button" data-q="${ix}" data-d="1" aria-label="Add one">+</button></div></div></div>`;
    }).join('') : '<p style="color:var(--ink-2)">Your bag is empty.</p>';
    const inBag = new Set(bag.map((i) => PRODUCTS.find((p) => p.id === i.id).cat));
    const inIds = new Set(bag.map((i) => i.id));
    const order = ['tees', 'shorts', 'headwear'].filter((c) => !inBag.has(c)).concat(['tees', 'shorts', 'headwear']);
    const sugg = [];
    for (const c of order) { const p = PRODUCTS.find((x) => x.cat === c && !inIds.has(x.id) && !sugg.includes(x)); if (p) sugg.push(p); if (sugg.length === 3) break; }
    document.getElementById('bagCl').innerHTML = sugg.map((p) => `<a href="product.html#${p.id}" class="pimg" aria-label="${esc(p.name)}"><img src="${p.colours[0].front}" alt=""></a>`).join('');
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
