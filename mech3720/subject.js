/* ============================================================
   MECH3720 — Thermodynamics   ·  SUBJECT DATA FILE
   ------------------------------------------------------------
   THIS is the file you edit most. Everything below feeds the
   navigation, search, equations page, glossary, assessments and
   dashboard automatically. Write maths as normal LaTeX inside the
   R`...` raw strings (single backslashes — no escaping needed).

   • Add an equation  -> push an object into  SUBJECT.equations
   • Add a glossary term -> push into  SUBJECT.glossary
   • Add an assessment -> push into  SUBJECT.assessments
   • Add a weekly topic page -> create the .html, then add an entry
                                to SUBJECT.pages  (see mech2430/week-01)
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  /* ---- course meta. Set weekOneMonday to YOUR real Week-1 Monday;
          all weekly/assessment dates are computed from it. ---- */
  meta:{
    code:"MECH3720",
    title:"Thermodynamics",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 2, 2026",
    coordinator:"TBC",
    text:"TBC",
    weekOneMonday:"2026-07-27"   // <-- EDIT to your real Week 1 Monday
  },

  /* ---- fixed sidebar entries (weekly pages are added automatically) ---- */
  nav:[
    {label:"Subject", links:[
      {t:"Dashboard",   f:"index.html",       icon:"home"},
      {t:"Equations",   f:"equations.html",   icon:"eq"},
      {t:"Glossary",    f:"glossary.html",    icon:"book"},
      {t:"Assessments", f:"assessments.html", icon:"flag"},
      {t:"Search",      f:"search.html",      icon:"search"}
    ]}
  ],

  /* =========================================================
     WEEKLY CONTENT PAGES — none yet. Copy _template.html to
     week-01.html, then register it here (see mech2430 for a
     fully worked example).
     ========================================================= */
  pages:[],

  /* =========================================================
     EQUATIONS — none yet. cat groups them on the Equations page.
     ========================================================= */
  equations:[],

  /* =========================================================
     GLOSSARY — none yet. (def may contain inline LaTeX via \( ... \))
     ========================================================= */
  glossary:[],

  /* =========================================================
     ASSESSMENTS — none yet. (dueWeek + dueOffsetDays compute the
     date from the semester anchor; override per-item in the UI)
     ========================================================= */
  assessments:[]
};
