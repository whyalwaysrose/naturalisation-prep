/* ============================================================
   Banque de questions — examen civique de naturalisation
   Question bank — French naturalisation civic exam

   SOURCES
   -------
   • Question wordings (`fr.q`) are transcribed VERBATIM from the official
     list published by the Ministère de l'Intérieur / Direction générale
     des étrangers en France:
     "Examen civique — Naturalisation ou réintégration dans la nationalité
      française — Questions de connaissance à choix multiples"
     version 2025-12-12.
     https://www.immigration.interieur.gouv.fr/documentation/examen-civique/
       questions-de-connaissance-pour-lexamen-civique-nationalite-francaise.html

   • Answer options (`c`), correct answers (`a`), English translations and
     explanations (`e`) are NOT official. The Ministry publishes the question
     wordings only. They were written for this project from the Livret du
     citoyen and public legal sources, and may contain errors.

   • The 12 "mises en situation" (situational scenarios) of the real exam are
     not published and are therefore absent from this bank.

   The five categories below are the five official exam themes.

   SHAPE
   -----
   { id, cat, a, fr:{q, c:[4], e}, en:{q, c:[4], e} }
   `a` is the index (0-3) of the correct option in the ORIGINAL order;
   the app shuffles the presentation order at runtime.
   ============================================================ */

const CATEGORIES = [
  { id:'valeurs',      icon:'⚖️', fr:'Principes et valeurs de la République', en:'Principles & values of the Republic' },
  { id:'institutions', icon:'🏛️', fr:'Système institutionnel et politique',   en:'Institutional & political system' },
  { id:'droits',       icon:'📜', fr:'Droits et devoirs',                     en:'Rights & duties' },
  { id:'histoire',     icon:'🗺️', fr:'Histoire, géographie et culture',       en:'History, geography & culture' },
  { id:'societe',      icon:'🏠', fr:'Vivre dans la société française',       en:'Living in French society' }
];

const QUESTIONS = [];
