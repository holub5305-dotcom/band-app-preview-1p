/* BAND APP NÁHLED 1.2.0 – JEN v testovacím náhledu (repozitář band-app-preview-1p). NIKDY nenahrávat do band-app.
 * Náhled běží na stejné doméně holub5305-dotcom.github.io jako skutečná BAND APP, a prohlížeč proto obě stránky
 * nechává sdílet localStorage a IndexedDB. Tento soubor (načte se jako první) přesměruje VŠECHNA data náhledu
 * do vlastních jmen, takže náhled nevidí, nemění ani nemaže nahrávky, oblíbené kapely, lekce ani Kamarádky
 * ze skutečné BAND APP:
 *  - localStorage: klíč „x“ → „bandapp-nahled-x“ (klíče „bandapp-test-…“ testovací verze zůstávají, produkce je nikdy nepoužívá)
 *  - IndexedDB „bandapp-recordings“ → „bandapp-nahled-recordings“ */
(function () {
  var P = 'bandapp-nahled-';
  function nk(k) { k = String(k); return (k.indexOf('bandapp-test-') === 0 || k.indexOf(P) === 0) ? k : P + k; }
  try {
    var S = Storage.prototype, g = S.getItem, s = S.setItem, r = S.removeItem;
    S.getItem = function (k) { return g.call(this, this === window.localStorage ? nk(k) : k); };
    S.setItem = function (k, v) { return s.call(this, this === window.localStorage ? nk(k) : k, v); };
    S.removeItem = function (k) { return r.call(this, this === window.localStorage ? nk(k) : k); };
    S.clear = function () { if (this !== window.localStorage) return; for (var i = this.length - 1; i >= 0; i--) { var k = this.key(i); if (k && k.indexOf(P) === 0) r.call(this, k); } };
  } catch (e) { }
  try {
    var I = window.indexedDB, o = I.open.bind(I), d = I.deleteDatabase.bind(I);
    var map = function (n) { return n === 'bandapp-recordings' ? 'bandapp-nahled-recordings' : n; };
    I.open = function (n, v) { return v === undefined ? o(map(n)) : o(map(n), v); };
    I.deleteDatabase = function (n) { return d(map(n)); };
  } catch (e) { }
  function banner() {
    if (document.getElementById('nahledBanner')) return;
    var b = document.createElement('div'); b.id = 'nahledBanner';
    b.textContent = 'NÁHLED 1.2.0 – testovací verze (oddělená od BAND APP, data se nesdílí)';
    b.style.cssText = 'position:sticky;top:0;z-index:50;background:#7a0010;color:#fff;font:600 13px/1.3 system-ui,sans-serif;text-align:center;padding:6px 8px';
    document.body.insertBefore(b, document.body.firstChild);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', banner); else banner();
})();
