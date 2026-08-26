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

  const LS = { lang:'exc.lang', hist:'exc.hist', stats:'exc.stats', wrong:'exc.wrong' };

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
      introNote:"L'examen réel comporte 28 questions de connaissance et 12 mises en situation. Les mises en situation n'étant pas publiques, cet examen blanc tire 40 questions de connaissance.",
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
      timeUp:'Temps écoulé', quitConfirm:"Quitter l'examen ? Votre progression sera perdue.",
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
      introNote:'The real exam has 28 knowledge questions and 12 situational scenarios. The scenarios are not published, so this mock exam draws 40 knowledge questions.',
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
      timeUp:'Time is up', quitConfirm:'Leave the exam? Your progress will be lost.',
      srcT:'Where do these questions come from?',
      srcP1:'<strong>The wording of the questions</strong> is taken verbatim from the official list published by the French Ministry of the Interior (Directorate-General for Foreign Nationals), version of 12 December 2025.',
      srcP2:'<strong>The answer options, correct answers and explanations</strong> were written for this site. The Ministry publishes question wordings only, never the options — so these are not official. The 12 situational scenarios used in the real exam are not public and do not appear here.',
      srcP3:'Always check the official sources before sitting your exam.',
      footDis:'Unofficial practice site. The correct answers and explanations are not produced by the Ministry of the Interior.'
    }
  };

  /* ---------------- State ---------------- */
  let lang  = localStorage.getItem(LS.lang) || 'fr';
  let mode  = null;            // 'exam' | 'practice' | 'mistakes'
  let deck  = [];              // [{q, order:[...], picked:null}]
  let idx   = 0;
  let timer = null, endsAt = 0;
  let reviewFilter = 'all';
  let lastRun = null;          // {mode, order, theme} — for "retry"

  const $  = function (s, r) { return (r || document).querySelector(s); };
  const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------------- Storage ---------------- */
  function load(key, fb) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v === null ? fb : v; }
    catch (e) { return fb; }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* private mode */ }
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
  function inCat(id) { return QUESTIONS.filter(function (q) { return q.cat === id; }); }

  /* ---------------- Language ---------------- */
  function applyLang() {
    document.documentElement.lang = lang;
    const t = T[lang];
    $$('[data-t]').forEach(function (el) {
      const k = el.getAttribute('data-t');
      if (t[k] && typeof t[k] === 'string') el.innerHTML = t[k];
    });
    $$('.lang-toggle button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang); });
    save(LS.lang, lang);
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
      if (localStorage.getItem('exc.noanalytics')) return;
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
    setup:   function () { return T[lang].pickMode; },
    themes:  function () { return T[lang].pickTheme; },
    intro:   function () { return T[lang].introT; },
    quiz:    function () { return mode === 'exam' ? T[lang].introT : T[lang].modePracT; },
    results: function () { return T[lang].byTheme; },
    review:  function () { return T[lang].reviewAll; }
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
    const t = T[lang];
    const stats = load(LS.stats, {});
    const hist  = load(LS.hist, []);
    const wrong = load(LS.wrong, []);

    const best = hist.reduce(function (m, h) { return Math.max(m, h.score); }, 0);
    $('#statStrip').innerHTML =
      '<div class="stat"><b>' + QUESTIONS.length + '</b><span>' + esc(t.statQ) + '</span></div>' +
      '<div class="stat"><b>' + hist.length + '</b><span>' + esc(t.statExams) + '</span></div>' +
      '<div class="stat"><b>' + (hist.length ? best + '/40' : '—') + '</b><span>' + esc(t.statBest) + '</span></div>';

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
    const t = T[lang];
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
      const sub = n + ' ' + T[lang].statQ + (s.seen ? ' · ' + Math.round(s.ok / s.seen * 100) + '%' : '');
      return '<button class="card" data-theme="' + c.id + '">' +
        '<span class="card-ico">' + c.icon + '</span>' +
        '<span class="card-body"><span class="card-t">' + esc(catName(c)) + '</span>' +
        '<span class="card-d">' + esc(sub) + '</span></span>' +
        '<span class="card-arrow">›</span></button>';
    }).join('');
  }

  /* ---------------- Deck building ---------------- */
  function makeItem(q) {
    return { q:q, order:shuffle(q.fr.c.map(function (_, i) { return i; })), picked:null };
  }

  /* order: 'random' | 'seq' | 'theme' ; theme: category id when order==='theme' */
  function startPractice(order, theme) {
    mode = 'practice';
    lastRun = { mode:'practice', order:order, theme:theme };
    let list;
    if (order === 'seq') {
      // official order: categories top to bottom, questions in published order
      list = [];
      CATEGORIES.forEach(function (c) { list = list.concat(inCat(c.id)); });
    } else if (order === 'theme') {
      list = inCat(theme);                    // one section, its own published order
    } else {
      list = shuffle(QUESTIONS);              // everything, fully shuffled
    }
    deck = list.map(makeItem);
    idx = 0;
    stopTimer();
    go('quiz');
    renderQuestion();
  }

  function startExam() {
    mode = 'exam';
    lastRun = { mode:'exam' };
    deck = shuffle(QUESTIONS).slice(0, EXAM_LEN).map(makeItem);
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
    lastRun = { mode:'mistakes' };
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
    $('#qTheme').textContent = catName(c);
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
        esc(right ? T[lang].correct : T[lang].incorrect) + '</div>' +
        '<div class="fb-body">' + esc(loc.e) + '</div>';
    } else { fb.hidden = true; }

    $('#btnPrev').style.visibility = idx === 0 ? 'hidden' : 'visible';
    const last = idx === deck.length - 1;
    const nx = $('#btnNext');
    nx.textContent = last ? (mode === 'exam' ? T[lang].seeResults : T[lang].finish) : T[lang].next;
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
  }

  function next() { if (idx < deck.length - 1) { idx++; renderQuestion(); } else finish(false); }
  function prev() { if (idx > 0) { idx--; renderQuestion(); } }

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
    stopTimer();
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
    const t = T[lang];
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
    const t = T[lang];
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
      lang = langBtn.dataset.lang;
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
      else if (d === 'mistakes') startMistakes();
      return;
    }

    const ordBtn = e.target.closest('[data-order]');
    if (ordBtn) {
      const o = ordBtn.dataset.order;
      if (o === 'theme') { renderThemes(); go('themes'); }
      else startPractice(o);
      return;
    }

    const themeBtn = e.target.closest('[data-theme]');
    if (themeBtn) { startPractice('theme', themeBtn.dataset.theme); return; }

    if (e.target.closest('#btnStartExam')) { startExam(); return; }

    const choice = e.target.closest('.choice');
    if (choice && !choice.disabled) { pick(Number(choice.dataset.orig)); return; }

    if (e.target.closest('#btnNext')) { next(); return; }
    if (e.target.closest('#btnPrev')) { prev(); return; }

    if (e.target.closest('#btnReview')) { reviewFilter = 'all'; syncFilter(); renderReview(); go('review'); return; }

    if (e.target.closest('#btnRetry')) {
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
      if (mode === 'exam' && !confirm(T[lang].quitConfirm)) return;
      goHome();
    } else if (scr === 'review') { go('results'); }
    else if (scr === 'themes')   { renderSetup(); go('setup'); }
    else { goHome(); }
  }

  // Keyboard shortcuts — helpful on desktop, harmless on mobile
  document.addEventListener('keydown', function (e) {
    if (document.body.dataset.screen !== 'quiz') return;
    if (e.key >= '1' && e.key <= '4') {
      const b = $$('#qChoices .choice')[Number(e.key) - 1];
      if (b && !b.disabled) b.click();
    } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
      if (!$('#btnNext').disabled) next();
    } else if (e.key === 'ArrowLeft') { prev(); }
  });

  /* ---------------- Boot ---------------- */
  applyLang();
  renderHome();
  go('home');
})();
