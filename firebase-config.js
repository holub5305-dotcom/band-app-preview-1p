/* NÁHLED 1.2.0: TESTOVACÍ projekt Firebase band-app-test-9fc3e (žádná produkční data). NIKDY nenahrávat do band-app. */
/* Platí: TEST_BUILD = true + projekt band-app-test-9fc3e. Pojistka ve friends.js pustí tuto stránku jen k projektu s „test“ v ID;
 * veřejná BAND APP by tento soubor odmítla. Údaje webové aplikace nejsou tajné (chrání je pravidla Firestore). */
export const FIREBASE_CONFIGURED = true;

/* Veřejná BAND APP = false. Neměň. (Testovací balíček má true; aplikace odmítne běžet, když se soubory spletou.) */
export const TEST_BUILD = true;

export const firebaseConfig = {
  apiKey: "AIzaSyAyjDKn7Fn4v9pzw3hu5IVt8dXKpLy3jS0",
  authDomain: "band-app-test-9fc3e.firebaseapp.com",
  projectId: "band-app-test-9fc3e",
  storageBucket: "band-app-test-9fc3e.firebasestorage.app",
  messagingSenderId: "606696541917",
  appId: "1:606696541917:web:873c4b4b76002698ea9534"
};

/* App Check (ochrana proti zneužití cizími skripty). Volitelné.
 * siteKey: veřejný klíč webu z reCAPTCHA (v3) nebo reCAPTCHA Enterprise. Prázdné = vypnuto.
 * provider: 'v3' nebo 'enterprise'. Tajný klíč reCAPTCHA se vkládá jen do Firebase konzole, NIKDY sem.
 * 1p: VYPNUTO. App Check zatím nebyl vyzkoušen ani na testovacím projektu; reCAPTCHA posílá údaje Googlu
 * (cookie), což by se muselo doplnit do soukromi.html. Postup: nejdřív test, pak jen sledovat, až potom vynutit. */
export const APP_CHECK = {
  siteKey: "",
  provider: "v3"
};

/* Obnovovací kód – technicky přihlášení Email/Password s vymyšlenou adresou účtu
 * (náhodné ID + doména níže). Na adresu se nikdy nic neposílá.
 *
 * RECOVERY_DOMAIN_VERIFIED – pojistka. S false aplikace kód nevytvoří, neobnoví ani nezmění
 * („Připravuje se – zatím neověřeno“); chat a pozvánky fungují dál (anonymní účet).
 * Na testovacím projektu je adresa ověřená (18. 10. 2026). Na produkčním projektu band-app-7c9ca zatím NE:
 * nastavení projektu (ochrana výčtu účtů, povolené vytváření účtů) se mohou lišit. Proto 1p = false.
 * Na true se přepne až po krátkém skriptovaném testu na band-app-7c9ca (1 účet, hned smazaný – jen s výslovným
 * souhlasem), nebo dřív, pokud se tak výslovně rozhodneš (DEPLOY.md, krok 4).
 *
 * RECOVERY_EMAIL_DOMAIN: "obnova.band-app.invalid" (.invalid je celosvětově vyhrazená, nikomu nepatří).
 * Doménu měň JEN PŘED vytvořením prvního skutečného kódu – po změně by dřív vytvořené kódy přestaly fungovat. */
export const RECOVERY_EMAIL_DOMAIN = "obnova.band-app.invalid";
export const RECOVERY_DOMAIN_VERIFIED = false;
