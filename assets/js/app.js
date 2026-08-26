/* ============================================================
   Examen civique — application logic
   Vanilla JS, no build step, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Official exam constants ----------------
     Source: formation-civique.interieur.gouv.fr
     40 questions / 45 minutes / 32 correct to pass (80%).      */
  const EXAM_LEN  = 40;
  const EXAM_MIN  = 45;
  const EXAM_PASS = 32;

  /* Official composition of the exam, from the arrêté of 10 October 2025
     (Article 3). The real paper is NOT an even draw across themes:

       Principes et valeurs de la République  11   (3 symbols, 2 laïcité, 6 situational)
       Système institutionnel et politique     6   (3 democracy/voting, 2 organisation, 1 EU)
       Droits et devoirs                      11   (2 fundamental rights, 3 duties, 6 situational)
       Histoire, géographie et culture         8   (3 history, 3 geography, 2 heritage)
       Vivre dans la société française         4
                                              --
                                              40   of which 12 are mises en situation

     The 12 situational questions are not published by the Ministry, so this mock
     fills those slots with knowledge questions from the same two themes. Drawing
     uniformly from the bank instead would badly over-weight history (76 of our
     243 questions) and under-weight values and duties, which together carry 22
     of the 40 marks. */
  const EXAM_BLUEPRINT = [
    { cat:'valeurs',      n:5, sit:false },   // 3 symbols + 2 laïcité
    { cat:'valeurs',      n:6, sit:true  },   // the 6 situational slots
    { cat:'institutions', n:6, sit:false },
    { cat:'droits',       n:5, sit:false },   // 2 fundamental rights + 3 duties
    { cat:'droits',       n:6, sit:true  },   // the 6 situational slots
    { cat:'histoire',     n:8, sit:false },
    { cat:'societe',      n:4, sit:false }
  ];                                          // 28 knowledge + 12 situational = 40

  const LS = { lang:'exc.lang', hist:'exc.hist', stats:'exc.stats', wrong:'exc.wrong',
               session:'exc.session' };

  /* Bumped on every deploy. Shown in the footer so it is possible to tell, from
     a phone, whether the page being looked at is the current build or a cached
     one — the usual cause of "the buttons stopped working". */
  const BUILD = '2026.08.26-15';

  /* ---------------- i18n ---------------- */
  const T = {
    fr: {
      heroSub:"Préparez la naturalisation française avec les questions de connaissance publiées par le ministère de l'Intérieur.",
      secStart:'Commencer', secProgress:'Progression par thème',
      modeExamT:'Examen blanc', modeExamD:'40 questions · 45 minutes · 32/40 pour réussir',
      modePracT:'Entraînement', modePracD:'Correction immédiate et explication après chaque question',
      modeMistT:'Réviser mes erreurs', modeMistD:'Aucune erreur enregistrée pour le moment',
      pickMode:"Comment voulez-vous travailler ?",
      ordRandT:'Tout mélanger', ordRandD:'Les 243 questions dans un ordre aléatoire',
      ordThemeT:'Un seul thème', ordThemeD:'Choisir un thème et le travailler en profondeur',
      ordSeqT:'Ordre officiel', ordSeqD:'Thème par thème, de haut en bas, sans mélange',
      pickTheme:'Choisissez un thème',
      introT:'Examen blanc', introQ:'questions à choix multiple', introM:'minutes maximum',
      introP:'bonnes réponses pour réussir (80 %)', introN:"Aucune correction avant la fin, comme le jour J",
      introNote:"Cet examen blanc suit la répartition officielle de l'arrêté du 10 octobre 2025 : 11 questions sur les principes et valeurs, 6 sur les institutions, 11 sur les droits et devoirs, 8 sur l'histoire-géographie-culture et 4 sur la vie en société. Sur les 40 questions, l'examen réel en compte 12 sous forme de « mises en situation » (6 en valeurs, 6 en droits) que le ministère ne publie pas : ces places sont ici occupées par des questions de connaissance des mêmes thèmes.",
      startExam:"Commencer l'examen",
      prev:'Précédent', next:'Suivant', finish:'Terminer', seeResults:'Voir mes résultats',
      byTheme:'Résultat par thème', reviewAll:'Revoir mes réponses', retry:'Recommencer', backHome:'Accueil',
      fAll:'Toutes', fWrong:'Erreurs', fRight:'Justes',
      correct:'Bonne réponse', incorrect:'Mauvaise réponse',
      yourAns:'Votre réponse', goodAns:'Bonne réponse', noAns:'Sans réponse',
      passed:'Réussi', failed:'Échoué',
      passedSub:"Vous atteignez le seuil de 32/40 exigé à l'examen.",
      failedSub:'Il faut 32/40 pour réussir. Concentrez-vous sur vos erreurs.',
      practiceDone:'Entraînement terminé',
      statQ:'questions', statExams:'examens blancs', statBest:'meilleur score',
      histT:'Vos derniers examens',
      allQ:'Toutes les questions',
      mistakesN:function(n){return n+' question'+(n>1?'s':'')+' à revoir';},
      noMistakes:'Aucune erreur enregistrée pour le moment',
      timeUp:'Temps écoulé',
      resumeCardT:'Reprendre où vous en étiez',
      sheetT:'Session en cours', sheetResume:'Reprendre', sheetRestart:'Recommencer à zéro',
      sheetCancel:'Annuler',
      sheetDesc:function(what,cur,tot){return 'Vous avez une session en cours : '+what+', question '+cur+' sur '+tot+'. Voulez-vous la reprendre ou repartir de zéro ?';},
      resumeSub:function(what,cur,tot){return what+' · question '+cur+'/'+tot;},
      noStore:"Stockage du navigateur indisponible : votre progression sera perdue en fermant l'onglet. Désactivez le blocage des cookies ou la navigation privée pour la conserver.",
      mExam:'Examen blanc', mPractice:'Entraînement', mMistakes:'Révision des erreurs',
      oRandom:'toutes les questions mélangées', oSeq:'ordre officiel',
      sitT:'Mises en situation', sitBadge:'Mise en situation · non officielle',
      sitD:function(n){return n+" scénarios rédigés pour ce site — le ministère n'en publie aucun";},
      diffT:"En quoi ce site diffère de l'examen réel",
      diffBody:"<p>Ce site prépare l'examen, il ne le reproduit pas. Les écarts qui comptent :</p><ul class='diff-list'><li><b>Les propositions de réponse ne seront pas les mêmes.</b> Le ministère publie les intitulés des questions, jamais les quatre options. Le jour J, une question que vous trouvez facile ici peut devenir difficile, et l'inverse.</li><li><b>Les 12 mises en situation sont inventées.</b> Aucune n'est publiée. Les nôtres reproduisent le format et le raisonnement attendu, pas le contenu réel.</li><li><b>Ce site est un peu trop indulgent.</b> Dans notre banque, la bonne réponse est en moyenne un peu plus longue que les mauvaises : on peut parfois la deviner sans savoir. Votre score ici est probablement supérieur à celui que vous obtiendriez à l'examen.</li><li><b>L'examen se passe uniquement en français</b>, sur ordinateur ou tablette, dans un centre agréé et sous surveillance. La version anglaise de ce site est une aide à la révision, pas une option le jour J.</li><li><b>Nos réponses peuvent être fausses.</b> Elles ont été rédigées à partir du Livret du citoyen et de sources juridiques publiques, puis comparées à une autre reconstitution — mais elles ne sont pas officielles. En cas de contradiction, la source officielle a raison.</li><li><b>La liste officielle peut changer</b> sans préavis. Notre copie a été vérifiée identique au fichier du ministère le 26 août 2026 : revérifiez avant votre examen.</li><li><b>Rien ne remplace les conditions réelles.</b> Ici, personne ne vous surveille, vous pouvez quitter une session et la reprendre, et le stress n'est pas le même.</li><li><b>L'examen civique n'est qu'une étape.</b> La naturalisation exige aussi le niveau B2 en français et un entretien en préfecture, que ce site ne prépare pas.</li><li><b>Ce site n'a aucune valeur officielle.</b> Réussir un examen blanc ici ne préjuge en rien du résultat réel.</li></ul>",
      srcT:"D'où viennent ces questions ?",
      srcP1:"<strong>Les intitulés des questions</strong> sont repris mot pour mot de la liste officielle publiée par le ministère de l'Intérieur (Direction générale des étrangers en France), version du 12 décembre 2025.",
      srcP2:"<strong>Les propositions de réponse, les bonnes réponses et les explications</strong> ont été rédigées pour ce site. Le ministère ne publie pas les options de réponse : elles ne sont donc pas officielles. Les 12 « mises en situation » de l'examen réel ne sont pas publiques et ne figurent pas ici.",
      srcP3:'Vérifiez toujours auprès des sources officielles avant votre examen.',
      footDis:"Site d'entraînement non officiel. Les bonnes réponses et explications ne sont pas produites par le ministère de l'Intérieur."
    },
    en: {
      heroSub:'Prepare for French naturalisation with the official knowledge questions published by the Ministry of the Interior.',
      secStart:'Start', secProgress:'Progress by theme',
      modeExamT:'Mock exam', modeExamD:'40 questions · 45 minutes · 32/40 to pass',
      modePracT:'Practice', modePracD:'Immediate correction and explanation after each question',
      modeMistT:'Review my mistakes', modeMistD:'No mistakes recorded yet',
      pickMode:'How do you want to work?',
      ordRandT:'Shuffle everything', ordRandD:'All 243 questions in random order',
      ordThemeT:'A single theme', ordThemeD:'Pick one theme and work through it in depth',
      ordSeqT:'Official order', ordSeqD:'Theme by theme, top to bottom, no shuffling',
      pickTheme:'Choose a theme',
      introT:'Mock exam', introQ:'multiple-choice questions', introM:'minutes maximum',
      introP:'correct answers to pass (80%)', introN:'No feedback until the end, just like the real thing',
      introNote:'This mock follows the official distribution set out in the arrêté of 10 October 2025: 11 questions on principles and values, 6 on institutions, 11 on rights and duties, 8 on history, geography and culture, and 4 on living in French society. Of the 40, the real exam has 12 as "mises en situation" (6 in values, 6 in rights) which the Ministry does not publish; those slots are filled here with knowledge questions from the same themes.',
      startExam:'Start the exam',
      prev:'Previous', next:'Next', finish:'Finish', seeResults:'See my results',
      byTheme:'Results by theme', reviewAll:'Review my answers', retry:'Try again', backHome:'Home',
      fAll:'All', fWrong:'Wrong', fRight:'Correct',
      correct:'Correct', incorrect:'Incorrect',
      yourAns:'Your answer', goodAns:'Correct answer', noAns:'Not answered',
      passed:'Passed', failed:'Not passed',
      passedSub:'You reached the 32/40 threshold required at the exam.',
      failedSub:'You need 32/40 to pass. Focus on your mistakes.',
      practiceDone:'Practice complete',
      statQ:'questions', statExams:'mock exams', statBest:'best score',
      histT:'Your recent exams',
      allQ:'All questions',
      mistakesN:function(n){return n+' question'+(n>1?'s':'')+' to review';},
      noMistakes:'No mistakes recorded yet',
      timeUp:'Time is up',
      resumeCardT:'Pick up where you left off',
      sheetT:'Session in progress', sheetResume:'Resume', sheetRestart:'Start over',
      sheetCancel:'Cancel',
      sheetDesc:function(what,cur,tot){return 'You have a session in progress: '+what+', question '+cur+' of '+tot+'. Resume it, or start again from scratch?';},
      resumeSub:function(what,cur,tot){return what+' · question '+cur+'/'+tot;},
      noStore:'Browser storage is unavailable, so your progress will be lost when you close the tab. Turn off cookie blocking or private browsing to keep it.',
      mExam:'Mock exam', mPractice:'Practice', mMistakes:'Mistake review',
      oRandom:'all questions shuffled', oSeq:'official order',
      sitT:'Situational questions', sitBadge:'Situational · not official',
      sitD:function(n){return n+' scenarios written for this site — the Ministry publishes none';},
      diffT:"How this site differs from the real exam",
      diffBody:"<p>This site prepares you for the exam; it does not reproduce it. The differences that matter:</p><ul class='diff-list'><li><b>The answer options will not be the same.</b> The Ministry publishes the question wordings, never the four options. On the day, a question you find easy here may be hard — and the other way round.</li><li><b>The 12 situational questions are invented.</b> None are published. Ours reproduce the format and the expected reasoning, not the real content.</li><li><b>This site is a little too generous.</b> In our bank the correct answer is on average slightly longer than the wrong ones, so it can sometimes be guessed without knowing. Your score here is probably higher than what you would get in the exam.</li><li><b>The real exam is in French only</b>, on a computer or tablet, at an approved centre, under supervision. The English on this site is a study aid, not an option on the day.</li><li><b>Our answers may be wrong.</b> They were written from the Livret du citoyen and public legal sources, then compared against a separate reconstruction — but they are not official. Where they conflict with an official source, the official source is right.</li><li><b>The official list can change</b> without notice. Our copy was verified identical to the Ministry file on 26 August 2026 — check again before your exam.</li><li><b>Nothing here reproduces exam conditions.</b> Nobody is invigilating, you can leave a session and resume it, and the pressure is not the same.</li><li><b>The civic exam is only one step.</b> Naturalisation also requires French at B2 and an interview at the prefecture, neither of which this site prepares you for.</li><li><b>This site has no official standing.</b> Passing a mock exam here says nothing about the real result.</li></ul>",
      srcT:'Where do these questions come from?',
      srcP1:'<strong>The wording of the questions</strong> is taken verbatim from the official list published by the French Ministry of the Interior (Directorate-General for Foreign Nationals), version of 12 December 2025.',
      srcP2:'<strong>The answer options, correct answers and explanations</strong> were written for this site. The Ministry publishes question wordings only, never the options — so these are not official. The 12 situational scenarios used in the real exam are not public and do not appear here.',
      srcP3:'Always check the official sources before sitting your exam.',
      footDis:'Unofficial practice site. The correct answers and explanations are not produced by the Ministry of the Interior.'
    }
  };

  /* ---------------- Storage ----------------
     localStorage is not always available. Safari with "Block All Cookies", some
     private-browsing modes and embedded webviews make *even reading* it throw a
     SecurityError. Every access goes through here, and falls back to an
     in-memory store so the app keeps working for the session instead of dying
     on the first line that touches it.                                        */
  const memStore = {};
  const store = {
    get: function (k) {
      try { return localStorage.getItem(k); }
      catch (e) { return Object.prototype.hasOwnProperty.call(memStore, k) ? memStore[k] : null; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, v); } catch (e) { memStore[k] = String(v); }
    },
    del: function (k) {
      try { localStorage.removeItem(k); } catch (e) { delete memStore[k]; }
    },
    /* True when writes actually persist; used to warn the user that progress
       will not survive closing the tab. */
    persists: (function () {
      try { localStorage.setItem('exc.probe', '1'); localStorage.removeItem('exc.probe'); return true; }
      catch (e) { return false; }
    })()
  };

  /* ---------------- State ---------------- */
  /* Language.
     Builds up to v5 wrote this through save(), i.e. JSON.stringify, so the
     stored value was '"fr"' *with quotes*, while it is read back raw. Any
     unrecognised value made TT() undefined, and the first lookup threw
     during initialisation — before a single event listener was attached, so
     the page rendered but nothing on it responded. Validate on read, repair
     the stored value, and never trust it again. */
  const LANGS = ['fr', 'en'];
  function readLang() {
    let v = store.get(LS.lang);
    if (v === null || v === undefined) return 'fr';
    v = String(v).replace(/^["']+|["']+$/g, '').trim().toLowerCase();
    return LANGS.indexOf(v) !== -1 ? v : 'fr';
  }
  let lang = readLang();
  let mode  = null;            // 'exam' | 'practice' | 'mistakes'
  let deck  = [];              // [{q, order:[...], picked:null}]
  let idx   = 0;
  let timer = null, endsAt = 0;
  let reviewFilter = 'all';
  let lastRun = null;          // {mode, order, theme} — for "retry"
  let quizOrigin = 'home';     // screen to return to when leaving a quiz
  let navAt = 0;               // timestamp of the last question navigation
  let finishing = false;       // guards against finishing a run more than once

  /* Touch devices routinely deliver a second click for one tap — an impatient
     double tap, a shaky finger, or a browser that fires both a touch-derived
     and a compatibility mouse click. Without this, one tap could advance two
     questions (silently skipping one, in a timed exam) or submit a run several
     times over. */
  const NAV_GAP = 350;
  function navThrottled() {
    const t = Date.now();
    if (t - navAt < NAV_GAP) return true;
    navAt = t;
    return false;
  }

  /* Always returns a valid string table, whatever `lang` holds. */
  function TT() { return T[lang] || T.fr; }

  const $  = function (s, r) { return (r || document).querySelector(s); };
  const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- Storage ---------------- */
  function load(key, fb) {
    try { const v = JSON.parse(store.get(key)); return v === null ? fb : v; }
    catch (e) { return fb; }
  }
  function save(key, val) {
    try { store.set(key, JSON.stringify(val)); } catch (e) { /* nothing else to do */ }
  }

  /* ---------------- Utilities ---------------- */
  function shuffle(a) {
    const arr = a.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function cat(id) {
    for (let i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
    return { id:id, fr:id, en:id, icon:'•' };
  }
  function L(q) { return q[lang] || q.fr; }
  function catName(c) { return c[lang] || c.fr; }
  /* The official bank (verbatim Ministry wordings) and our own situational
     practice set are kept apart everywhere except the mock exam, which needs
     both to reproduce the real paper. */
  function isSit(q) { return q.sit === true; }
  function knowledgeBank() { return QUESTIONS.filter(function (q) { return !isSit(q); }); }
  function situationBank() { return QUESTIONS.filter(isSit); }
  function inCat(id) {
    return QUESTIONS.filter(function (q) { return q.cat === id && !isSit(q); });
  }
  function inCatSit(id) {
    return QUESTIONS.filter(function (q) { return q.cat === id && isSit(q); });
  }

  /* ---------------- Language ---------------- */
  function applyLang() {
    document.documentElement.lang = lang;
    const t = TT();
    $$('[data-t]').forEach(function (el) {
      const k = el.getAttribute('data-t');
      if (t[k] && typeof t[k] === 'string') el.innerHTML = t[k];
    });
    $$('.lang-toggle button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang); });
    const warn = $('#storageWarn');
    if (warn && !store.persists) { warn.textContent = TT().noStore; warn.hidden = false; }
    if (LANGS.indexOf(lang) === -1) lang = 'fr';
    store.set(LS.lang, lang);
  }

  /* ---------------- Session persistence ----------------
     A run in progress is written to localStorage after every answer and every
     move between questions, so closing the tab, locking the phone or backing
     out never costs the user their place. Only the question ids, the shuffled
     option order and the picks are stored — small, and enough to rebuild the
     deck exactly as it was.                                                  */
  const SESSION_V = 1;

  function saveSession() {
    if (!mode || !deck.length) return;
    const s = {
      v: SESSION_V, mode: mode, idx: idx,
      order: lastRun && lastRun.order ? lastRun.order : null,
      theme: lastRun && lastRun.theme ? lastRun.theme : null,
      origin: quizOrigin,
      left: (mode === 'exam' && endsAt) ? Math.max(0, Math.round((endsAt - Date.now()) / 1000)) : null,
      items: deck.map(function (it) { return { i: it.q.id, o: it.order, p: it.picked }; })
    };
    save(LS.session, s);
  }

  function clearSession() {
    store.del(LS.session);
  }

  /* Returns a usable session, or null. Anything stale or inconsistent — an old
     schema, a question id that no longer exists, a finished run — is discarded
     rather than half-restored. */
  function loadSession() {
    const s = load(LS.session, null);
    if (!s || s.v !== SESSION_V || !s.items || !s.items.length) return null;
    const byId = {};
    QUESTIONS.forEach(function (q) { byId[q.id] = q; });
    const items = [];
    for (let i = 0; i < s.items.length; i++) {
      const q = byId[s.items[i].i];
      if (!q) return null;                       // bank changed under it
      const o = s.items[i].o;
      if (!Array.isArray(o) || o.length !== 4) return null;
      items.push({ q: q, order: o, picked: (s.items[i].p === undefined ? null : s.items[i].p) });
    }
    if (s.idx < 0 || s.idx >= items.length) return null;
    s._items = items;
    return s;
  }

  /* Human-readable label: "Entraînement — Histoire, géographie et culture" */
  function sessionLabel(s) {
    const t = TT();
    if (s.mode === 'exam')     return t.mExam;
    if (s.mode === 'mistakes') return t.mMistakes;
    if (s.theme)               return t.mPractice + ' — ' + catName(cat(s.theme));
    if (s.order === 'seq')     return t.mPractice + ' — ' + t.oSeq;
    return t.mPractice + ' — ' + t.oRandom;
  }

  function resumeSession(s) {
    finishing = false; navAt = 0;
    mode = s.mode;
    deck = s._items;
    idx  = s.idx;
    quizOrigin = s.origin || 'home';
    lastRun = { mode: s.mode, order: s.order, theme: s.theme };
    stopTimer();
    if (s.mode === 'exam' && s.left > 0) startTimer(s.left);
    go('quiz');
    renderQuestion();
  }

  /* ---------------- "Resume or start over?" sheet ----------------
     An in-app sheet rather than confirm(): a native dialog blocks the page,
     looks wrong on a phone, and its Cancel button previously left the user
     apparently trapped inside a quiz.                                        */
  let pendingStart = null;

  function askResumeOrRestart(startFresh) {
    const s = loadSession();
    if (!s) { startFresh(); return; }             // nothing saved — just go
    pendingStart = startFresh;
    const t = TT();
    $('#sheetTitle').textContent   = t.sheetT;
    $('#sheetDesc').textContent    = t.sheetDesc(sessionLabel(s), s.idx + 1, s._items.length);
    $('#sheetResume').textContent  = t.sheetResume;
    $('#sheetRestart').textContent = t.sheetRestart;
    $('#sheetCancel').textContent  = t.sheetCancel;
    $('#sheet').hidden = false;
    document.body.classList.add('sheet-open');
  }

  function closeSheet() {
    $('#sheet').hidden = true;
    document.body.classList.remove('sheet-open');
    pendingStart = null;
  }

  /* ---------------- Analytics ----------------
     GoatCounter, cookieless. Screen views only — never a score, an answer,
     a theme result, or anything else about how the user is doing. Honours
     Do Not Track, and can be switched off entirely with:
         localStorage.setItem('exc.noanalytics', '1')
     count.js already refuses to count on localhost.                        */
  const BASE = location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  const SCREEN_TITLES = {
    home:'Home', setup:'Practice — pick mode', themes:'Practice — pick theme',
    intro:'Mock exam — intro', results:'Results', review:'Review',
    'quiz/exam':'Quiz — mock exam', 'quiz/practice':'Quiz — practice',
    'quiz/mistakes':'Quiz — mistakes'
  };

  function track(name) {
    try {
      if (store.get('exc.noanalytics')) return;
      const dnt = navigator.doNotTrack || window.doNotTrack;
      if (dnt === '1' || dnt === 'yes') return;
      if (!window.goatcounter || typeof window.goatcounter.count !== 'function') return;
      window.goatcounter.count({
        path:  name === 'home' ? BASE + '/' : BASE + '/' + name,
        title: SCREEN_TITLES[name] || name
      });
    } catch (e) { /* analytics must never break the app */ }
  }

  /* ---------------- Routing ---------------- */
  const TITLES = {
    home:    function () { return 'Examen civique'; },
    setup:   function () { return TT().pickMode; },
    themes:  function () { return TT().pickTheme; },
    intro:   function () { return TT().introT; },
    quiz:    function () { return mode === 'exam' ? TT().introT : TT().modePracT; },
    results: function () { return TT().byTheme; },
    review:  function () { return TT().reviewAll; }
  };

  function go(name) {
    $$('.screen').forEach(function (s) { s.classList.remove('on'); });
    const el = $('#screen-' + name);
    if (el) el.classList.add('on');
    $('#btnBack').hidden = (name === 'home');
    $('#hdrTitle').textContent = TITLES[name] ? TITLES[name]() : 'Examen civique';
    window.scrollTo(0, 0);
    document.body.dataset.screen = name;
    track(name === 'quiz' && mode ? 'quiz/' + mode : name);
  }

  function goHome() { stopTimer(); mode = null; renderHome(); go('home'); }

  /* ---------------- Home ---------------- */
  function renderHome() {
    const t = TT();
    const stats = load(LS.stats, {});
    const hist  = load(LS.hist, []);
    const wrong = load(LS.wrong, []);

    const best = hist.reduce(function (m, h) { return Math.max(m, h.score); }, 0);
    $('#statStrip').innerHTML =
      '<div class="stat"><b>' + knowledgeBank().length + '</b><span>' + esc(t.statQ) + '</span></div>' +
      '<div class="stat"><b>' + hist.length + '</b><span>' + esc(t.statExams) + '</span></div>' +
      '<div class="stat"><b>' + (hist.length ? best + '/40' : '—') + '</b><span>' + esc(t.statBest) + '</span></div>';

    // Resume card, shown above everything else when a run is unfinished
    const sess = loadSession();
    if (sess) {
      $('#resumeBox').innerHTML =
        '<button class="card card-resume" id="btnResume">' +
          '<span class="card-ico">↩️</span>' +
          '<span class="card-body"><span class="card-t">' + esc(t.resumeCardT) + '</span>' +
          '<span class="card-d">' + esc(t.resumeSub(sessionLabel(sess), sess.idx + 1, sess._items.length)) + '</span></span>' +
          '<span class="card-arrow">›</span></button>';
    } else {
      $('#resumeBox').innerHTML = '';
    }

    const mc = $('#mistakeCount');
    if (wrong.length) { mc.textContent = t.mistakesN(wrong.length); $('#cardMistakes').disabled = false; }
    else { mc.textContent = t.noMistakes; $('#cardMistakes').disabled = true; }

    $('#themeProgress').innerHTML = CATEGORIES.map(function (c) {
      const s = stats[c.id] || { seen:0, ok:0 };
      const pct = s.seen ? Math.round(s.ok / s.seen * 100) : 0;
      return '<div class="tp-row">' +
        '<span class="tp-ico">' + c.icon + '</span>' +
        '<div class="tp-main"><div class="tp-name">' + esc(catName(c)) + '</div>' +
        '<div class="tp-bar"><div class="tp-fill" style="width:' + pct + '%"></div></div></div>' +
        '<span class="tp-pct">' + (s.seen ? pct + '%' : '—') + '</span></div>';
    }).join('');

    if (hist.length) {
      $('#histBox').innerHTML = '<h2 class="sec-h">' + esc(t.histT) + '</h2><div class="hist">' +
        hist.slice(0, 5).map(function (h) {
          const ok = h.score >= EXAM_PASS;
          return '<div class="hist-row"><span class="hist-date">' + esc(h.date) + '</span>' +
            '<span class="hist-score">' + h.score + '/' + h.total + '</span>' +
            '<span class="pill ' + (ok ? 'pill-ok' : 'pill-bad') + '">' + esc(ok ? t.passed : t.failed) + '</span></div>';
        }).join('') + '</div>';
    } else { $('#histBox').innerHTML = ''; }
  }

  /* ---------------- Practice setup ---------------- */
  function renderSetup() {
    const t = TT();
    const opts = [
      { k:'random', ico:'🔀', ti:t.ordRandT, de:t.ordRandD },
      { k:'theme',  ico:'🎯', ti:t.ordThemeT, de:t.ordThemeD },
      { k:'seq',    ico:'📖', ti:t.ordSeqT,  de:t.ordSeqD }
    ];
    $('#setupList').innerHTML = opts.map(function (o) {
      return '<button class="card" data-order="' + o.k + '">' +
        '<span class="card-ico">' + o.ico + '</span>' +
        '<span class="card-body"><span class="card-t">' + esc(o.ti) + '</span>' +
        '<span class="card-d">' + esc(o.de) + '</span></span>' +
        '<span class="card-arrow">›</span></button>';
    }).join('');
  }

  function renderThemes() {
    const stats = load(LS.stats, {});
    $('#themeList').innerHTML = CATEGORIES.map(function (c) {
      const n = inCat(c.id).length;
      const s = stats[c.id] || { seen:0, ok:0 };
      const sub = n + ' ' + TT().statQ + (s.seen ? ' · ' + Math.round(s.ok / s.seen * 100) + '%' : '');
      return '<button class="card" data-theme="' + c.id + '">' +
        '<span class="card-ico">' + c.icon + '</span>' +
        '<span class="card-body"><span class="card-t">' + esc(catName(c)) + '</span>' +
        '<span class="card-d">' + esc(sub) + '</span></span>' +
        '<span class="card-arrow">›</span></button>';
    }).join('') +
    '<button class="card card-sit" data-theme="__sit">' +
      '<span class="card-ico">🎭</span>' +
      '<span class="card-body"><span class="card-t">' + esc(TT().sitT) + '</span>' +
      '<span class="card-d">' + esc(TT().sitD(situationBank().length)) + '</span></span>' +
      '<span class="card-arrow">›</span></button>';
  }

  /* ---------------- Deck building ---------------- */
  function makeItem(q) {
    return { q:q, order:shuffle(q.fr.c.map(function (_, i) { return i; })), picked:null };
  }

  /* order: 'random' | 'seq' | 'theme' ; theme: category id when order==='theme' */
  function startPractice(order, theme) {
    mode = 'practice';
    clearSession();
    finishing = false; navAt = 0;
    lastRun = { mode:'practice', order:order, theme:theme };
    quizOrigin = (order === 'theme') ? 'themes' : 'setup';
    let list;
    if (order === 'seq') {
      // official order: categories top to bottom, questions in published order
      list = [];
      CATEGORIES.forEach(function (c) { list = list.concat(inCat(c.id)); });   // official only
    } else if (order === 'theme') {
      list = (theme === '__sit') ? shuffle(situationBank())   // our practice scenarios
                                 : inCat(theme);              // official, published order
    } else {
      list = shuffle(knowledgeBank());        // the 243 official questions
    }
    deck = list.map(makeItem);
    idx = 0;
    stopTimer();
    go('quiz');
    renderQuestion();
  }

  function startExam() {
    mode = 'exam';
    clearSession();
    finishing = false; navAt = 0;
    lastRun = { mode:'exam' };
    quizOrigin = 'intro';
    // Draw to the official per-theme quota, then shuffle the order of the paper.
    let picked = [];
    EXAM_BLUEPRINT.forEach(function (b) {
      const pool = b.sit ? inCatSit(b.cat) : inCat(b.cat);
      picked = picked.concat(shuffle(pool).slice(0, b.n));
    });
    // If the bank ever lacks enough in a theme, top up so the paper is still 40.
    if (picked.length < EXAM_LEN) {
      const used = {};
      picked.forEach(function (q) { used[q.id] = 1; });
      picked = picked.concat(
        shuffle(QUESTIONS.filter(function (q) { return !used[q.id]; }))
          .slice(0, EXAM_LEN - picked.length));
    }
    deck = shuffle(picked).slice(0, EXAM_LEN).map(makeItem);
    idx = 0;
    startTimer(EXAM_MIN * 60);
    go('quiz');
    renderQuestion();
  }

  function startMistakes() {
    const ids = load(LS.wrong, []);
    const list = QUESTIONS.filter(function (q) { return ids.indexOf(q.id) !== -1; });
    if (!list.length) return;
    mode = 'mistakes';
    clearSession();
    finishing = false; navAt = 0;
    lastRun = { mode:'mistakes' };
    quizOrigin = 'home';
    deck = shuffle(list).map(makeItem);
    idx = 0;
    stopTimer();
    go('quiz');
    renderQuestion();
  }

  /* ---------------- Timer ---------------- */
  function startTimer(seconds) {
    stopTimer();
    endsAt = Date.now() + seconds * 1000;
    $('#qTimer').hidden = false;
    tick();
    timer = setInterval(tick, 250);
  }
  function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
    const el = $('#qTimer');
    if (el) { el.hidden = true; el.classList.remove('warn'); }
  }
  function tick() {
    const left = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
    const el = $('#qTimer');
    const m = Math.floor(left / 60), s = left % 60;
    el.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    el.classList.toggle('warn', left <= 300);
    if (left <= 0) { stopTimer(); finish(true); }
  }

  /* ---------------- Question rendering ---------------- */
  function renderQuestion() {
    const item = deck[idx], q = item.q, loc = L(q), c = cat(q.cat);
    const answered = item.picked !== null;
    const showFeedback = (mode !== 'exam') && answered;

    $('#qCount').textContent = (idx + 1) + ' / ' + deck.length;
    $('#qTheme').textContent = isSit(q) ? TT().sitBadge : catName(c);
    $('#qTheme').classList.toggle('is-sit', isSit(q));
    $('#qProgress').style.width = (idx / deck.length * 100) + '%';
    $('#qText').textContent = loc.q;

    const keys = ['A','B','C','D'];
    $('#qChoices').innerHTML = item.order.map(function (orig, pos) {
      let cls = 'choice';
      if (showFeedback) {
        if (orig === q.a) cls += ' ok';
        else if (orig === item.picked) cls += ' bad';
      } else if (item.picked === orig) { cls += ' sel'; }
      return '<button class="' + cls + '" data-orig="' + orig + '" role="radio" ' +
        'aria-checked="' + (item.picked === orig) + '"' + (showFeedback ? ' disabled' : '') + '>' +
        '<span class="choice-key">' + keys[pos] + '</span>' +
        '<span class="choice-txt">' + esc(loc.c[orig]) + '</span></button>';
    }).join('');

    const fb = $('#qFeedback');
    if (showFeedback) {
      const right = item.picked === q.a;
      fb.hidden = false;
      fb.className = 'feedback ' + (right ? 'ok' : 'bad');
      fb.innerHTML = '<div class="fb-head">' + (right ? '✓ ' : '✕ ') +
        esc(right ? TT().correct : TT().incorrect) + '</div>' +
        '<div class="fb-body">' + esc(loc.e) + '</div>';
    } else { fb.hidden = true; }

    $('#btnPrev').style.visibility = idx === 0 ? 'hidden' : 'visible';
    const last = idx === deck.length - 1;
    const nx = $('#btnNext');
    nx.textContent = last ? (mode === 'exam' ? TT().seeResults : TT().finish) : TT().next;
    nx.disabled = (mode !== 'exam') && !answered;
  }

  function pick(orig) {
    const item = deck[idx];
    if (mode !== 'exam' && item.picked !== null) return;   // locked once answered in practice
    item.picked = orig;
    if (mode !== 'exam') {
      recordStat(item.q, orig === item.q.a);
      recordWrong(item.q, orig === item.q.a);
    }
    renderQuestion();
    saveSession();
  }

  function next() {
    if (navThrottled()) return;
    if (idx < deck.length - 1) { idx++; renderQuestion(); saveSession(); }
    else finish(false);
  }
  function prev() {
    if (navThrottled()) return;
    if (idx > 0) { idx--; renderQuestion(); saveSession(); }
  }

  /* ---------------- Stats ---------------- */
  function recordStat(q, ok) {
    const stats = load(LS.stats, {});
    const s = stats[q.cat] || { seen:0, ok:0 };
    s.seen++; if (ok) s.ok++;
    stats[q.cat] = s;
    save(LS.stats, stats);
  }
  function recordWrong(q, ok) {
    const list = load(LS.wrong, []);
    const at = list.indexOf(q.id);
    if (!ok && at === -1) list.push(q.id);
    if (ok && at !== -1) list.splice(at, 1);
    save(LS.wrong, list);
  }

  /* ---------------- Finish & results ---------------- */
  function finish(timedOut) {
    if (finishing) return;        // a second tap must not submit the run again
    finishing = true;
    stopTimer();
    clearSession();               // the run is over; nothing left to resume
    if (mode === 'exam') {
      deck.forEach(function (it) {
        const ok = it.picked === it.q.a;
        recordStat(it.q, ok);
        recordWrong(it.q, ok);
      });
    }
    const score = deck.filter(function (it) { return it.picked === it.q.a; }).length;
    const total = deck.length;

    if (mode === 'exam') {
      const hist = load(LS.hist, []);
      hist.unshift({
        date: new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB',
              { day:'2-digit', month:'short', year:'numeric' }),
        score: score, total: total
      });
      save(LS.hist, hist.slice(0, 20));
    }
    renderResults(score, total, timedOut);
    go('results');
  }

  /* Per-section tally for the current deck */
  function tallyByCat() {
    const by = {};
    deck.forEach(function (it) {
      const k = it.q.cat;
      by[k] = by[k] || { n:0, ok:0, wrong:0, skipped:0 };
      by[k].n++;
      if (it.picked === it.q.a) by[k].ok++;
      else if (it.picked === null) { by[k].wrong++; by[k].skipped++; }
      else by[k].wrong++;
    });
    return by;
  }

  function renderResults(score, total, timedOut) {
    const t = TT();
    const isExam = mode === 'exam';
    const pct = total ? score / total : 0;
    const passed = isExam ? score >= EXAM_PASS : pct >= 0.8;

    $('#scoreVal').textContent = score;
    $('#scoreOf').textContent = '/' + total;

    const ring = $('#ringFg');
    const circ = 2 * Math.PI * 52;
    ring.style.strokeDasharray = circ;
    ring.classList.toggle('fail', !passed);
    ring.style.strokeDashoffset = circ;
    void ring.getBoundingClientRect();            // reflow so the animation replays
    ring.style.strokeDashoffset = circ * (1 - pct);

    const v = $('#verdict');
    v.className = 'verdict ' + (passed ? 'ok' : 'bad');
    v.textContent = isExam ? (passed ? t.passed : t.failed) : t.practiceDone;
    $('#verdictSub').textContent = timedOut ? t.timeUp
      : (isExam ? (passed ? t.passedSub : t.failedSub) : Math.round(pct * 100) + '%');

    // ---- scorecard, organised by section ----
    const by = tallyByCat();
    $('#resultThemes').innerHTML = '<div class="theme-progress">' +
      CATEGORIES.filter(function (c) { return by[c.id]; }).map(function (c) {
        const b = by[c.id];
        const p = Math.round(b.ok / b.n * 100);
        return '<div class="tp-row">' +
          '<span class="tp-ico">' + c.icon + '</span>' +
          '<div class="tp-main"><div class="tp-name">' + esc(catName(c)) + '</div>' +
          '<div class="tp-bar"><div class="tp-fill" style="width:' + p + '%"></div></div></div>' +
          '<span class="tp-pct">' + b.ok + '/' + b.n + '</span></div>';
      }).join('') + '</div>';
  }

  /* ---------------- Review — grouped by section ---------------- */
  function renderReview() {
    const t = TT();
    const keep = function (it) {
      const ok = it.picked === it.q.a;
      if (reviewFilter === 'wrong') return !ok;
      if (reviewFilter === 'right') return ok;
      return true;
    };

    let html = '';
    CATEGORIES.forEach(function (c) {
      const items = deck.filter(function (it) { return it.q.cat === c.id && keep(it); });
      if (!items.length) return;
      const all = deck.filter(function (it) { return it.q.cat === c.id; });
      const ok  = all.filter(function (it) { return it.picked === it.q.a; }).length;

      html += '<div class="rv-section">' +
        '<span class="rv-sec-ico">' + c.icon + '</span>' +
        '<span class="rv-sec-name">' + esc(catName(c)) + '</span>' +
        '<span class="rv-sec-score">' + ok + '/' + all.length + '</span></div>';

      html += items.map(function (it) {
        const q = it.q, loc = L(q);
        const right = it.picked === q.a;
        const skipped = it.picked === null;
        const cls  = skipped ? 'skip' : (right ? 'ok' : 'bad');
        const mark = skipped ? '−' : (right ? '✓' : '✕');

        let detail = '';
        if (!right) {
          detail += '<div class="rv-ans yours-bad"><span class="rv-lbl">' + esc(t.yourAns) + '</span>' +
            esc(skipped ? t.noAns : loc.c[it.picked]) + '</div>';
        }
        detail += '<div class="rv-ans correct"><span class="rv-lbl">' + esc(t.goodAns) + '</span>' +
          esc(loc.c[q.a]) + '</div>' +
          '<div class="rv-exp">' + esc(loc.e) + '</div>';

        return '<div class="rv-item ' + cls + (right ? '' : ' open') + '">' +
          '<div class="rv-head"><span class="rv-mark">' + mark + '</span>' +
          '<span class="rv-q">' + esc(loc.q) + '</span><span class="rv-chev">▾</span></div>' +
          '<div class="rv-detail">' + detail + '</div></div>';
      }).join('');
    });

    $('#reviewList').innerHTML = html || '<p class="empty">—</p>';
  }

  /* ---------------- Events ---------------- */
  document.addEventListener('click', function (e) {
    const langBtn = e.target.closest('.lang-toggle button');
    if (langBtn) {
      const want = langBtn.dataset.lang;
      lang = (LANGS.indexOf(want) !== -1) ? want : 'fr';
      applyLang();
      renderHome();
      const scr = document.body.dataset.screen;
      if (scr === 'quiz')   renderQuestion();
      if (scr === 'setup')  renderSetup();
      if (scr === 'themes') renderThemes();
      if (scr === 'review') renderReview();
      return;
    }

    const goBtn = e.target.closest('[data-go]');
    if (goBtn) {
      const d = goBtn.dataset.go;
      if (d === 'home')          goHome();
      else if (d === 'exam')     go('intro');
      else if (d === 'practice') { renderSetup(); go('setup'); }
      else if (d === 'mistakes') askResumeOrRestart(startMistakes);
      return;
    }

    const ordBtn = e.target.closest('[data-order]');
    if (ordBtn) {
      const o = ordBtn.dataset.order;
      if (o === 'theme') { renderThemes(); go('themes'); }
      else askResumeOrRestart(function () { startPractice(o); });
      return;
    }

    const themeBtn = e.target.closest('[data-theme]');
    if (themeBtn) {
      const th = themeBtn.dataset.theme;
      askResumeOrRestart(function () { startPractice('theme', th); });
      return;
    }

    if (e.target.closest('#btnStartExam')) { askResumeOrRestart(startExam); return; }

    // --- resume sheet ---
    if (e.target.closest('#btnResume')) {
      const s = loadSession();
      if (s) resumeSession(s); else { renderHome(); }
      return;
    }
    if (e.target.closest('#sheetResume')) {
      const s = loadSession();
      closeSheet();
      if (s) resumeSession(s);
      return;
    }
    if (e.target.closest('#sheetRestart')) {
      const go2 = pendingStart;
      closeSheet();
      clearSession();
      if (go2) go2();
      return;
    }
    if (e.target.closest('[data-sheet-close]')) { closeSheet(); return; }

    const choice = e.target.closest('.choice');
    if (choice && !choice.disabled) { pick(Number(choice.dataset.orig)); return; }

    if (e.target.closest('#btnNext')) { if (!$('#btnNext').disabled) next(); return; }
    if (e.target.closest('#btnPrev')) { prev(); return; }

    if (e.target.closest('#btnReview')) { reviewFilter = 'all'; syncFilter(); renderReview(); go('review'); return; }

    if (e.target.closest('#btnRetry')) {
      clearSession();
      if (!lastRun) { goHome(); return; }
      if (lastRun.mode === 'exam')          startExam();
      else if (lastRun.mode === 'mistakes') startMistakes();
      else                                  startPractice(lastRun.order, lastRun.theme);
      return;
    }

    const fBtn = e.target.closest('.review-filter button');
    if (fBtn) { reviewFilter = fBtn.dataset.f; syncFilter(); renderReview(); return; }

    const rvHead = e.target.closest('.rv-head');
    if (rvHead) { rvHead.parentNode.classList.toggle('open'); return; }

    if (e.target.closest('#btnBack')) { back(); return; }
  });

  function syncFilter() {
    $$('.review-filter button').forEach(function (b) { b.classList.toggle('on', b.dataset.f === reviewFilter); });
  }

  function back() {
    const scr = document.body.dataset.screen;
    if (scr === 'quiz') {
      // Nothing is lost by leaving: the run is saved and can be resumed from
      // the Home screen or by starting the same mode again.
      saveSession();
      stopTimer();
      mode = null;
      // Return to the screen the quiz was started from, so switching to a
      // different exam type is one tap rather than a trip back through Home.
      if (quizOrigin === 'setup')       { renderSetup();  go('setup');  }
      else if (quizOrigin === 'themes') { renderThemes(); go('themes'); }
      else if (quizOrigin === 'intro')  { go('intro'); }
      else                              { goHome(); }
    } else if (scr === 'review') { go('results'); }
    else if (scr === 'themes')   { renderSetup(); go('setup'); }
    else { goHome(); }
  }

  // Keyboard shortcuts — helpful on desktop, harmless on mobile
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('#sheet').hidden) { closeSheet(); return; }
    if (!$('#sheet').hidden) return;                 // sheet swallows quiz keys
    if (document.body.dataset.screen !== 'quiz') return;
    if (e.key >= '1' && e.key <= '4') {
      const b = $$('#qChoices .choice')[Number(e.key) - 1];
      if (b && !b.disabled) b.click();
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (!$('#btnNext').disabled) next();
    } else if (e.key === 'ArrowLeft') { prev(); }
  });

  /* ---------------- Layout ----------------
     The header grows or shrinks with the safe-area inset and the text size, so
     sticky elements below it must position against its real height rather than
     a guessed constant. Keep --hdr in sync with what is actually on screen.   */
  function syncHeaderHeight() {
    const h = document.querySelector('.app-header');
    if (!h) return;
    const px = Math.round(h.getBoundingClientRect().height);
    if (px > 0) document.documentElement.style.setProperty('--hdr', px + 'px');
  }
  // A phone can suspend or kill the tab at any moment; persist before it does.
  window.addEventListener('pagehide', saveSession);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') saveSession();
  });

  window.addEventListener('resize', syncHeaderHeight);
  window.addEventListener('orientationchange', function () { setTimeout(syncHeaderHeight, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);

  /* ---------------- Boot ---------------- */
  const tag = $('#buildTag');
  if (tag) tag.textContent = knowledgeBank().length + ' + ' + situationBank().length + ' questions · build ' + BUILD;
  syncHeaderHeight();
  applyLang();
  renderHome();
  go('home');
})();
