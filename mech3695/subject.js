/* ============================================================
   MECH3695 — Heat Transfer   ·  SUBJECT DATA FILE
   ------------------------------------------------------------
   THIS is the file you edit most. Everything below feeds the
   navigation, search, equations page, glossary, assessments and
   dashboard automatically. Write maths as normal LaTeX inside the
   R`...` raw strings (single backslashes — no escaping needed).

   This subject is marked completed and lives in the hub's Archived
   subjects section (see the `archived` flag on its entry in the
   top-level index.html). Archiving only changes where it's listed —
   the pages, search index and cross-links all work exactly the same,
   so other subjects can still link into this one when relevant
   (e.g. Thermodynamics referencing a Heat Transfer equation).

   • Add an equation  -> push an object into  SUBJECT.equations
   • Add a glossary term -> push into  SUBJECT.glossary
   • Add an assessment -> push into  SUBJECT.assessments
   • Add a weekly topic page -> create the .html, then add an entry
                                to SUBJECT.pages  (see mech2430/week-01)
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  /* ---- course meta. Set weekOneMonday to when YOU took this subject
          if you want assessment dates to resolve to real dates. ---- */
  meta:{
    code:"MECH3695",
    title:"Heat Transfer",
    inst:"University of Newcastle · Callaghan",
    term:"Completed",
    coordinator:"TBC",
    text:"TBC",
    weekOneMonday:"2024-07-29"   // <-- EDIT to the real Week 1 Monday if it matters to you
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
