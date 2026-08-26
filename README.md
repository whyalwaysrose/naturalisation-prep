# Examen civique — préparation à la naturalisation française

A mobile-first practice site for the **examen civique**, the civics test that has been
compulsory since **1 January 2026** for French naturalisation, reintegration, multi-year
residence cards and resident cards.

Static HTML/CSS/JS. No build step, no dependencies, no backend, no cookies.
Everything runs in the browser; progress is stored in `localStorage` on your own device.
Anonymous page-view analytics only — see [Privacy](#privacy).

---

## The real exam

| | |
|---|---|
| Questions | **40** — 28 knowledge questions + 12 situational scenarios |
| Format | Multiple choice, one correct answer out of four, in French |
| Duration | **45 minutes** maximum |
| Pass mark | **32/40** (80%) |
| Where | On computer or tablet, at an approved centre |
| Themes | 5 (see below) |

Naturalisation also requires French at **level B2** since 1 January 2026.

### Official composition of the paper

The real exam is **not** an even draw across themes. The
[arrêté of 10 October 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)
(Article 3) fixes it:

| Theme | Questions | of which *mises en situation* |
|---|---:|---:|
| Principes et valeurs de la République | 11 | 6 |
| Système institutionnel et politique | 6 | — |
| Droits et devoirs | 11 | 6 |
| Histoire, géographie et culture | 8 | — |
| Vivre dans la société française | 4 | — |
| **Total** | **40** | **12** |

Broken down further: 3 on the motto and symbols, 2 on laïcité, 3 on democracy and
voting, 2 on the organisation of the Republic, 1 on European institutions, 2 on
fundamental rights, 3 on the duties of residents, 3 on historical periods and
figures, 3 on territory and geography, 2 on French heritage.

**The mock exam in this app draws to exactly this quota.** Drawing uniformly from
the bank instead would over-weight history (76 of our 243 questions) and
under-weight values and duties — which together carry **22 of the 40 marks**.

### The situational questions in this app

Because 30% of the paper is situational and unpublished, the app includes **40
*mises en situation*** — 20 in values, 20 in rights and duties — as **its own
practice section**, and they fill the 12 situational slots in the mock exam so
the paper matches the official composition exactly.

> ⚠ **These are not official in any part.** Unlike the rest of the bank, even the
> *question wordings* are written by us. The Ministry publishes no situational
> questions, no examples and no programme for them. They are marked in the app
> with an orange **"Mise en situation · non officielle"** label and a dashed
> border, and they are excluded from "Tout mélanger" and "Ordre officiel", which
> stay strictly the 243 verbatim official questions.

They are modelled on the one decision pattern every source agrees on:

> **dialogue first → then the legal or institutional channel.**
> Violence, revenge, indifference and private work-arounds are always wrong.
> A useful filter: *what would an agent of the public service do?*

Institutions worth knowing by name, because they are often the answer:
Défenseur des droits, inspection du travail, conseil de prud'hommes, PHAROS,
CPAM, mairie, conciliateur de justice, and 15 / 17 / 18 / 112 / 119.

Sources consulted for situation types and reasoning patterns — all of which state
plainly that their examples are pedagogical, not real exam content:
[parcours-civique.fr](https://parcours-civique.fr/mises-en-situation-examen-civique-2026/),
[civiqio.fr](https://www.civiqio.fr/blog/mises-en-situation-examen-civique-2026),
[naturalisationfrancefacile.fr](https://naturalisationfrancefacile.fr/blog/questions-mise-en-situation-examen-civique-naturalisation.html),
[refugies.info](https://refugies.info/en/procedure/69947fe741807e63ce7a7030).
Reddit could not be consulted — it blocks automated access.

### Is the published list exhaustive? No.

Two reasons the questions you meet may not all be in this bank:

1. **12 of the 40 are *mises en situation*** — everyday-life scenarios where you
   choose the right reaction. The Ministry publishes only the *questions de
   connaissance*, so the situational ones are **not public and are absent here**.
   That is 30% of the paper, concentrated in values and rights and duties.
2. **The list can change.** Article 3 requires the knowledge questions to be
   published, but the arrêté sets no schedule and gives no guarantee of
   permanence. The copy archived in `docs/` was verified byte-identical to the
   live Ministry file on 26 August 2026 — re-check before your exam.

Separate published lists exist for the **carte de séjour pluriannuelle** and the
**carte de résident**. Those are different exams; this bank is the naturalisation
list only.

Sources: [Ministry of the Interior press release](https://www.interieur.gouv.fr/actualites/communiques-de-presse/a-partir-du-1er-janvier-2026-reussite-a-lexamen-civique-sera-necessaire-pour-obtenir-carte-de-sejour) ·
[exam procedures](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/) ·
[Arrêté of 10 October 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)

---

## Where the content comes from

This matters, so it is stated plainly.

| Layer | Source | Official? |
|---|---|---|
| **Question wordings** (243) | Transcribed verbatim from the Ministry of the Interior's published list, *"Examen civique — Naturalisation ou réintégration dans la nationalité française — Questions de connaissance à choix multiples"*, version **12 December 2025** | ✅ **Yes** |
| **Exam format** | formation-civique.interieur.gouv.fr | ✅ **Yes** |
| **Answer options, correct answers, explanations, English translations** | **Written for this project**, from the *Livret du citoyen* and public legal sources | ❌ **No** |

The Ministry publishes **the question wordings only** — never the four answer options,
never the correct answers. Any site claiming to give you "the official answers" is
giving you someone's reconstruction. So are we; we just say so.

The **12 situational scenarios** (*mises en situation*) in the real exam are not
published and are therefore **absent** from this bank. Expect them on the day.

Official question list:
<https://www.immigration.interieur.gouv.fr/documentation/examen-civique/questions-de-connaissance-pour-lexamen-civique-nationalite-francaise.html>

> **Verify before you sit the exam.** Answers and explanations here may contain errors.
> If something here contradicts an official source, the official source is right.

### Independent cross-check

This answer key has been compared, question by question, against a **separately produced
answer key** built from the same official Ministry question list by a different author.
Both cover the same 243 questions in the same order.

| Test | Result |
|---|---|
| Questions where this bank's answer also appears among the other key's four options | 141 → **141 agreed** |
| Questions where the other key's answer also appears among this bank's four options | 143 → **143 agreed** |
| Factual conflicts | **0** |

The remaining questions could not be compared: the two documents wrote **different
distractors**, so each key's answer is simply absent from the other's option set. In every
such case both answers are independently true — e.g. *"which country is an EU founder?"*
is answered **Italy** here and **France** there, because neither option set offers both.

Two independent reconstructions agreeing on every comparable item raises confidence, but
it does not make either one official. On genuinely open-ended wordings — *"which dish is a
French speciality?"*, *"which museum is in Paris?"* — only the real exam's option set
settles the answer, and the Ministry does not publish it.

---

## Features

- **Mock exam** — 40 random questions, 45-minute countdown, no feedback until the end,
  scored against the real 32/40 threshold.
- **Practice**, in three orders:
  - **Shuffle everything** — all 243 questions in random order
  - **A single theme** — pick one section and drill it
  - **Official order** — theme by theme, top to bottom, exactly as published
- **Review my mistakes** — every question you have got wrong, anywhere in the app,
  automatically collected and re-servable. Answering it correctly removes it.
- **Scorecard organised by section** — results and review are both grouped by the five
  official themes, with a per-section score, so you can see which theme is costing you.
- **Bilingual FR/EN** — every question, option and explanation in both languages.
  French is what you will face; English is there to make sure you actually understand.
- Answer options are **shuffled on every run**, so you learn the answer, not its position.
- Works offline once loaded. Dark mode. Keyboard shortcuts (1–4, arrows) on desktop.

### The five official themes

| | Theme | Questions |
|---|---|---|
| ⚖️ | Principes et valeurs de la République | 35 |
| 🏛️ | Système institutionnel et politique | 53 |
| 📜 | Droits et devoirs | 36 |
| 🗺️ | Histoire, géographie et culture | 76 |
| 🏠 | Vivre dans la société française | 43 |
| | **Total** | **243** |

---

## Running it locally

Because the question bank is loaded as separate `<script>` files, opening `index.html`
directly from the filesystem works in most browsers, but a tiny local server is safer:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

---

## Publishing on GitHub Pages

```bash
git remote add origin https://github.com/<your-username>/<repo>.git
git branch -M main
git push -u origin main
```

Then in the repository: **Settings → Pages → Source: Deploy from a branch →
`main` / `(root)` → Save**. The site appears at
`https://<your-username>.github.io/<repo>/` within a minute or two.

No build step and no GitHub Action is required — it is plain static files.

---

## Project structure

```
index.html                 screens and markup
assets/css/style.css       mobile-first stylesheet
assets/js/app.js           quiz engine, scoring, review, storage
data/questions.js          categories + empty QUESTIONS array
data/q-valeurs.js          35 questions   ┐
data/q-institutions.js     53 questions   │ one file per official theme,
data/q-droits.js           36 questions   │ each pushes into QUESTIONS
data/q-histoire.js         76 questions   │
data/q-societe.js          43 questions   ┘
```

### Question format

```js
{ id:'val01', cat:'valeurs', a:1,
  fr:{ q:'…', c:['…','…','…','…'], e:'explanation' },
  en:{ q:'…', c:['…','…','…','…'], e:'explanation' } }
```

`a` is the index of the correct option **in the original array**; the app shuffles the
display order at runtime and maps back. `fr.q` should stay verbatim from the official
list — if you improve anything, improve the options and explanations.

### Corrections welcome

If you find a wrong answer or a stale fact, open an issue or a PR against the relevant
`data/q-*.js` file. Please cite an official source (`service-public.fr`,
`legifrance.gouv.fr`, `interieur.gouv.fr`).

---

## Browser support

Built to work on the phones people actually own, not just current Chrome.

| Platform | Supported from |
|---|---|
| iOS Safari (iPhone, iPad) | **14+** |
| Chrome (Android) | **80+** |
| Samsung Internet (Galaxy) | **13+** |
| Firefox / Edge / Opera mobile | current |
| Xiaomi, OPPO, vivo, OnePlus, Huawei stock browsers | Chromium-based, covered by the above |
| In-app browsers (WhatsApp, Instagram, Messenger, Gmail) | yes, including when storage is blocked |

Verified at the real dimensions of iPhone SE, iPhone 13/14/15, iPhone 15 Pro Max,
Galaxy S21–S23, Galaxy A-series, Galaxy S8, Pixel 7/8, Redmi Note and Galaxy
Z Fold (folded and unfolded): no horizontal scrolling, no controls off the edge,
every tap target ≥ 40px, and the full start → answer → next → back flow working
on each.

Deliberate constraints that keep it working on older engines:

- **No `color-mix()`** — unsupported on Samsung Internet before v22, and an
  unsupported `color-mix` invalidates the whole declaration, so tints vanished
  silently. Colours are plain tokens, themed for light and dark.
- **`100dvh` always paired with a `100vh` fallback.**
- **No build step, no framework, no ES6+ syntax** beyond `const`/`let` — no arrow
  functions, template literals, optional chaining or `NodeList.forEach`.
- **Storage is never assumed.** Reading `localStorage` throws outright in Safari
  with "Block All Cookies" and in some in-app browsers; all access is wrapped and
  falls back to memory, and the footer says so when progress cannot be saved.
- `-webkit-sticky`, explicit `top/right/bottom/left` instead of `inset`, and
  `touch-action: manipulation` to remove the legacy 300ms tap delay.
- `format-detection: telephone=no`, so emergency numbers in the questions
  (15, 17, 18, 112) are not turned into phone links.

If something is broken on your device, the page shows a red banner naming the
error, and the footer shows the build — quote both when reporting it.

## Privacy

**Your answers, scores and mistakes never leave your device.** They are held in
`localStorage` in your own browser, are never uploaded, and are not synced between
devices. Clearing your browser data erases them.

The site uses [GoatCounter](https://www.goatcounter.com/) for anonymous page-view
analytics: no cookies, no personal data, no cross-site tracking, no advertising.
Because this is a single-page app, screen changes are counted manually — so the
statistics show *which screens* are opened (`/exam`, `/review`, `/quiz/practice`),
and nothing else.

Deliberately **never sent**: exam scores, individual answers, per-theme results,
which questions were failed, or anything else about how a user is performing.

Turn it off completely, in the browser console:

```js
localStorage.setItem('exc.noanalytics', '1')
```

Browsers sending `Do Not Track` are not counted, and GoatCounter's script ignores
`localhost`, so local development never registers.

To remove analytics from a fork entirely, delete the two `<script>` tags at the
bottom of `index.html`; the `track()` function then becomes a no-op on its own.

## Disclaimer

Unofficial study aid. Not affiliated with, endorsed by, or connected to the French
government or the Ministry of the Interior. It does not guarantee success at the
examen civique, and no part of it constitutes legal or immigration advice.

## Licence

MIT — see [LICENSE](LICENSE). The official question wordings are French public-sector
information reproduced from a Ministry of the Interior publication.
