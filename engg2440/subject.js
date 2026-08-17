/* ============================================================
   ENGG2440 — Modelling and Control   ·  SUBJECT DATA FILE
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
    code:"ENGG2440",
    title:"Modelling and Control",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 2, 2026",
    coordinator:"TBC",
    text:"TBC",
    weekOneMonday:"2026-08-17",  // Week 1 begins 17 Aug 2026
    /* non-teaching weeks — week numbers after these skip over them */
    breaks:["2026-09-28"]        // mid-semester recess
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
     ASSESSMENTS
     ------------------------------------------------------------
     Dates imported from the Canvas calendar feed (exported 17 Aug
     2026) and pinned with `due`, so they stay put regardless of the
     week anchor. WEIGHTS ARE NOT in the Canvas feed — add them from
     the course outline when you have it (they're marked TBC).
     ========================================================= */
  assessments:[
    /* ---- weekly online quizzes (Fridays) ---- */
    {id:"a-quiz-w2", name:"Quiz — Week 2", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 2 · Fri 28 Aug", due:"2026-08-28",
      covers:"Week 2 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[2], related:[]},
    {id:"a-quiz-w3", name:"Quiz — Week 3", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 3 · Fri 4 Sep", due:"2026-09-04",
      covers:"Week 3 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[3], related:[]},
    {id:"a-quiz-w4", name:"Quiz — Week 4", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 4 · Fri 11 Sep", due:"2026-09-11",
      covers:"Week 4 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[4], related:[]},
    {id:"a-quiz-w5", name:"Quiz — Week 5", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 5 · Fri 18 Sep", due:"2026-09-18",
      covers:"Week 5 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[5], related:[]},
    {id:"a-quiz-w7", name:"Quiz — Week 7", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 7 · Fri 9 Oct", due:"2026-10-09",
      covers:"Week 7 lecture material.", desc:"Weekly online quiz. No quiz was set for Week 6. Weight to be confirmed from the course outline.",
      study:[], weeks:[7], related:[]},
    {id:"a-quiz-w8", name:"Quiz — Week 8", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 8 · Fri 16 Oct", due:"2026-10-16",
      covers:"Week 8 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[8], related:[]},
    {id:"a-quiz-w9", name:"Quiz — Week 9", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 9 · Fri 23 Oct", due:"2026-10-23",
      covers:"Week 9 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[9], related:[]},
    {id:"a-quiz-w10", name:"Quiz — Week 10", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 10 · Fri 30 Oct", due:"2026-10-30",
      covers:"Week 10 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[10], related:[]},
    {id:"a-quiz-w11", name:"Quiz — Week 11", type:"Online quiz", weight:"TBC",
      weekLabel:"Week 11 · Fri 6 Nov", due:"2026-11-06",
      covers:"Week 11 lecture material.", desc:"Weekly online quiz. Weight to be confirmed from the course outline.",
      study:[], weeks:[11], related:[]},

    /* ---- labs (due Sundays) ---- */
    {id:"a-lab1", name:"Lab 1", type:"Lab submission", weight:"TBC",
      weekLabel:"Sun 6 Sep · Problems 1 & 2", due:"2026-09-06",
      covers:"Lab 1.",
      desc:"Two separate Canvas submissions are due on this date — Problem 1 and Problem 2. Make sure both are handed in.",
      study:["Submit Problem 1.","Submit Problem 2."], weeks:[], related:[]},
    {id:"a-lab2", name:"Lab 2", type:"Lab submission", weight:"TBC",
      weekLabel:"Sun 20 Sep", due:"2026-09-20",
      covers:"Lab 2.", desc:"Lab 2 submission.",
      study:[], weeks:[], related:[]},
    {id:"a-lab3", name:"Lab 3", type:"Lab submission", weight:"TBC",
      weekLabel:"Sun 11 Oct · + hand-written notes", due:"2026-10-11",
      covers:"Lab 3.",
      desc:"Two separate Canvas submissions are due on this date — the Lab 3 report and a hand-written notes submission.",
      study:["Submit the Lab 3 report.","Submit the hand-written notes."], weeks:[], related:[]},
    {id:"a-lab4", name:"Lab 4", type:"Lab submission", weight:"TBC",
      weekLabel:"Sun 1 Nov", due:"2026-11-01",
      covers:"Lab 4.", desc:"Lab 4 submission.",
      study:[], weeks:[], related:[]},
    {id:"a-lab5", name:"Lab 5", type:"Lab submission", weight:"TBC",
      weekLabel:"Sun 8 Nov · Problems 1 & 2", due:"2026-11-08",
      covers:"Lab 5.",
      desc:"Two separate Canvas submissions are due on this date — Problem 1 and Problem 2. Make sure both are handed in.",
      study:["Submit Problem 1.","Submit Problem 2."], weeks:[], related:[]},
    {id:"a-lab6", name:"Lab 6", type:"Lab submission", weight:"TBC",
      weekLabel:"Sun 22 Nov", due:"2026-11-22",
      covers:"Lab 6.", desc:"Lab 6 submission.",
      study:[], weeks:[], related:[]}
  ]
};
