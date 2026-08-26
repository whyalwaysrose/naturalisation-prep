# Examen civique — préparation à la naturalisation française

A mobile-first practice site for the **examen civique**, the civics test that has been
compulsory since **1 January 2026** for French naturalisation, reintegration, multi-year
residence cards and resident cards.

Static HTML/CSS/JS. No build step, no dependencies, no tracking, no backend.
Everything runs in the browser; progress is stored in `localStorage` on your own device.

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

## Disclaimer

Unofficial study aid. Not affiliated with, endorsed by, or connected to the French
government or the Ministry of the Interior. It does not guarantee success at the
examen civique, and no part of it constitutes legal or immigration advice.

## Licence

MIT — see [LICENSE](LICENSE). The official question wordings are French public-sector
information reproduced from a Ministry of the Interior publication.
