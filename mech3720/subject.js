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
                                to SUBJECT.pages
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  meta:{
    code:"MECH3720",
    title:"Thermodynamics",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 2, 2026",
    coordinator:"A/Pr Thomas Fiedler",
    text:"Moran, Shapiro, Boettner & Bailey — Principles of Engineering Thermodynamics, SI Version (8th ed., Wiley)",
    weekOneMonday:"2026-08-17",  // <-- Week 1 begins 17 Aug 2026 (course schedule)
    /* non-teaching weeks — week numbers after these skip over them */
    breaks:["2026-09-28"]        // mid-semester recess
  },

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
     TOPIC PAGES  (8 topics following the Moran chapter flow)
     ========================================================= */
  pages:[
    {
      f:"week-01.html", week:1,
      t:"Energy, Work & Heat — the First Law for Closed Systems",
      summary:"The building blocks: systems and properties, the forms of energy (internal, kinetic, potential), work as ∫p dV including polytropic processes, heat and its three transfer modes, the sign convention, and the closed-system energy balance in both amount and rate form — plus what a thermodynamic cycle is and the definitions of thermal efficiency and coefficient of performance.",
      keywords:"system closed system control volume boundary surroundings property state process cycle intensive extensive specific volume density pressure energy internal energy kinetic potential work expansion compression pdv polytropic process power heat sign convention fourier newton cooling radiation first law energy balance rate form thermal efficiency coefficient of performance refrigeration heat pump",
      related:[
        {type:"eq", label:"pdV work",                   href:"equations.html#eq-pdv-work"},
        {type:"eq", label:"Polytropic work",            href:"equations.html#eq-polytropic-work"},
        {type:"eq", label:"Energy balance (closed)",    href:"equations.html#eq-energy-closed"},
        {type:"eq", label:"Rate form",                  href:"equations.html#eq-energy-rate"},
        {type:"eq", label:"Thermal efficiency",         href:"equations.html#eq-thermal-efficiency"},
        {type:"def",label:"System",                     href:"glossary.html#g-system"},
        {type:"def",label:"Work",                       href:"glossary.html#g-work"},
        {type:"def",label:"Heat",                       href:"glossary.html#g-heat"},
        {type:"flag",label:"Mid-semester Quiz (W7)",    href:"assessments.html#a-quiz"}
      ]
    },
    {
      f:"week-02.html", week:2,
      t:"Properties of Pure Substances",
      summary:"Fixing the state of a simple compressible substance: phases and the p–v–T surface, the saturation tables (A-2/A-3), quality x for liquid–vapour mixtures and how it weights v, u, h and s, superheated-vapour and compressed-liquid data with interpolation, and the ideal-gas model — the equation of state, the gas constant, specific heats cp and cv, and the incompressible-substance approximation.",
      keywords:"pure substance phase saturated liquid vapor p-v-T surface saturation temperature pressure tables quality wet mixture interpolation superheated vapor compressed liquid subcooled enthalpy internal energy specific heat cp cv ideal gas equation of state gas constant universal molar mass incompressible substance two independent properties state principle",
      related:[
        {type:"eq", label:"Quality relations",          href:"equations.html#eq-quality-props"},
        {type:"eq", label:"Enthalpy",                   href:"equations.html#eq-enthalpy"},
        {type:"eq", label:"Ideal-gas equation",         href:"equations.html#eq-ideal-gas"},
        {type:"eq", label:"Gas constant",               href:"equations.html#eq-gas-constant"},
        {type:"eq", label:"Specific heats",             href:"equations.html#eq-specific-heats"},
        {type:"def",label:"Quality",                    href:"glossary.html#g-quality"},
        {type:"def",label:"Enthalpy",                   href:"glossary.html#g-enthalpy"},
        {type:"def",label:"Ideal gas",                  href:"glossary.html#g-ideal-gas"},
        {type:"flag",label:"Mid-semester Quiz (W7)",    href:"assessments.html#a-quiz"}
      ]
    },
    {
      f:"week-03.html", week:3,
      t:"The First Law for Control Volumes",
      summary:"Opening the system up to flow: conservation of mass and the 1-D mass-flow rate, flow work and why it combines with internal energy into enthalpy, and the general and steady-state energy rate balances. Then the four workhorse steady-flow devices — nozzles and diffusers, turbines, compressors and pumps, heat exchangers and throttling valves — plus transient (filling/emptying) analysis.",
      keywords:"control volume open system conservation of mass continuity mass flow rate flow work enthalpy energy rate balance steady state SFEE nozzle diffuser turbine compressor pump heat exchanger throttling valve isenthalpic Joule-Thomson transient filling emptying tank charging inlet exit",
      related:[
        {type:"eq", label:"Mass conservation",          href:"equations.html#eq-mass-conservation"},
        {type:"eq", label:"Mass-flow rate",             href:"equations.html#eq-mass-flow"},
        {type:"eq", label:"Energy rate balance (CV)",   href:"equations.html#eq-energy-cv"},
        {type:"eq", label:"Steady-flow energy eqn",     href:"equations.html#eq-sfee"},
        {type:"def",label:"Control volume",             href:"glossary.html#g-control-volume"},
        {type:"def",label:"Enthalpy",                   href:"glossary.html#g-enthalpy"},
        {type:"flag",label:"Cooling Tower Lab (W5)",    href:"assessments.html#a-labs"},
        {type:"flag",label:"Mid-semester Quiz (W7)",    href:"assessments.html#a-quiz"}
      ]
    },
    {
      f:"week-04.html", week:4,
      t:"The Second Law of Thermodynamics",
      summary:"Why energy balance alone isn't enough: the Kelvin–Planck and Clausius statements and their equivalence, thermal reservoirs, reversible versus irreversible processes and the sources of irreversibility, the Carnot corollaries, the absolute (Kelvin) temperature scale, and the ceiling the second law places on performance — the Carnot thermal efficiency and the maximum coefficients of performance.",
      keywords:"second law kelvin planck statement clausius statement equivalence thermal reservoir reversible irreversible process irreversibility internal external friction unrestrained expansion heat transfer finite temperature difference carnot corollaries carnot cycle kelvin scale absolute temperature triple point maximum thermal efficiency maximum coefficient of performance",
      related:[
        {type:"eq", label:"Kelvin–Planck",              href:"equations.html#eq-kelvin-planck"},
        {type:"eq", label:"Carnot efficiency",          href:"equations.html#eq-carnot-efficiency"},
        {type:"eq", label:"Max COP (refrigeration)",    href:"equations.html#eq-carnot-cop-ref"},
        {type:"eq", label:"Max COP (heat pump)",        href:"equations.html#eq-carnot-cop-hp"},
        {type:"def",label:"Thermal reservoir",          href:"glossary.html#g-thermal-reservoir"},
        {type:"def",label:"Reversible process",         href:"glossary.html#g-reversible"},
        {type:"def",label:"Carnot cycle",               href:"glossary.html#g-carnot-cycle"},
        {type:"flag",label:"Mid-semester Quiz (W7)",    href:"assessments.html#a-quiz"}
      ]
    },
    {
      f:"week-05.html", week:5,
      t:"Entropy",
      summary:"The analytical face of the second law: the Clausius inequality that defines entropy, evaluating entropy from tables via quality, the two TdS equations, entropy change for incompressible substances and ideal gases (including the s° tables and constant-specific-heat forms), the entropy balance for closed systems and control volumes with entropy production, and the isentropic-efficiency measures for turbines, nozzles, compressors and pumps.",
      keywords:"entropy clausius inequality definition of entropy entropy production generation TdS equations entropy change incompressible ideal gas s naught reference tabulated entropy balance closed system control volume rate balance isentropic process isentropic efficiency turbine nozzle compressor pump reduced pressure vr pr second law isentropic",
      related:[
        {type:"eq", label:"Clausius inequality",        href:"equations.html#eq-clausius"},
        {type:"eq", label:"Entropy definition",         href:"equations.html#eq-entropy-def"},
        {type:"eq", label:"TdS equations",              href:"equations.html#eq-tds"},
        {type:"eq", label:"Entropy balance (closed)",   href:"equations.html#eq-entropy-closed"},
        {type:"eq", label:"Isentropic turbine eff.",    href:"equations.html#eq-turbine-eff"},
        {type:"def",label:"Entropy",                    href:"glossary.html#g-entropy"},
        {type:"def",label:"Isentropic process",         href:"glossary.html#g-isentropic"},
        {type:"def",label:"Isentropic efficiency",      href:"glossary.html#g-isentropic-efficiency"},
        {type:"flag",label:"Mid-semester Quiz (W7)",    href:"assessments.html#a-quiz"}
      ]
    },
    {
      f:"week-06.html", week:7,
      t:"Vapour Power Systems (Rankine Cycle)",
      summary:"Turning heat into shaft power with a phase-changing working fluid: the four components of the Rankine cycle (boiler, turbine, condenser, pump) analysed one at a time by the first law, the ideal Rankine cycle and its thermal efficiency and back-work ratio, the pump-work shortcut for an incompressible liquid, the effect of boiler and condenser pressure, superheating and reheat, and the real-cycle imperfections captured by isentropic efficiencies.",
      keywords:"vapour power system rankine cycle boiler turbine condenser pump feedwater working fluid steam water first law analysis ideal rankine thermal efficiency back work ratio pump work incompressible superheat reheat boiler pressure condenser pressure isentropic efficiency imperfections quality wet steam power plant electricity generation",
      related:[
        {type:"eq", label:"Thermal efficiency",         href:"equations.html#eq-thermal-efficiency"},
        {type:"eq", label:"Back-work ratio",            href:"equations.html#eq-bwr"},
        {type:"eq", label:"Pump work (incompressible)", href:"equations.html#eq-pump-work"},
        {type:"eq", label:"Isentropic turbine eff.",    href:"equations.html#eq-turbine-eff"},
        {type:"def",label:"Rankine cycle",              href:"glossary.html#g-rankine"},
        {type:"def",label:"Back-work ratio",            href:"glossary.html#g-bwr"},
        {type:"def",label:"Superheat",                  href:"glossary.html#g-superheat"},
        {type:"flag",label:"Applications Exam",         href:"assessments.html#a-exam"}
      ]
    },
    {
      f:"week-07.html", week:8,
      t:"Gas Power Systems",
      summary:"Power from a gas that never changes phase: the air-standard and cold-air-standard idealisations, reciprocating-engine terminology (bore, stroke, TDC/BDC, compression ratio, mean effective pressure), the Otto, Diesel and Dual cycles with their efficiencies, the compression- and cut-off-ratio results, and gas-turbine (Brayton) plants extended to aircraft propulsion — turbojets and thrust from the momentum equation.",
      keywords:"gas power system internal combustion engine reciprocating spark ignition compression ignition bore stroke top dead centre bottom dead centre clearance displacement volume compression ratio mean effective pressure air standard cold air standard otto cycle diesel cycle dual cycle cut-off ratio isentropic isochoric isobaric brayton cycle gas turbine aircraft propulsion turbojet thrust momentum equation backwork ratio",
      related:[
        {type:"eq", label:"Otto efficiency",            href:"equations.html#eq-otto"},
        {type:"eq", label:"Diesel efficiency",          href:"equations.html#eq-diesel"},
        {type:"eq", label:"Compression ratio",          href:"equations.html#eq-compression-ratio"},
        {type:"eq", label:"Mean effective pressure",    href:"equations.html#eq-mep"},
        {type:"def",label:"Air-standard analysis",      href:"glossary.html#g-air-standard"},
        {type:"def",label:"Otto cycle",                 href:"glossary.html#g-otto"},
        {type:"def",label:"Diesel cycle",               href:"glossary.html#g-diesel"},
        {type:"flag",label:"Jet Engine Lab (W7–9)",     href:"assessments.html#a-labs"},
        {type:"flag",label:"Applications Exam",         href:"assessments.html#a-exam"}
      ]
    },
    {
      f:"week-08.html", week:9,
      t:"Refrigeration & Heat Pump Systems",
      summary:"Running a cycle backwards to move heat up a temperature gradient: the Carnot refrigeration and heat-pump limits, the coefficients of performance, the vapour-compression cycle and its components and non-idealities, common heat sources for heat pumps, and gas (reverse-Brayton) refrigeration — when its lower attainable temperatures win out over vapour compression's higher COP.",
      keywords:"refrigeration heat pump cycle carnot refrigeration coefficient of performance COP vapour compression cycle evaporator compressor condenser expansion valve throttling refrigerant heat source outside air ground water solar waste heat gas refrigeration reverse brayton comparison air conditioning",
      related:[
        {type:"eq", label:"COP (refrigeration)",        href:"equations.html#eq-cop-ref"},
        {type:"eq", label:"COP (heat pump)",            href:"equations.html#eq-cop-hp"},
        {type:"eq", label:"Max COP (refrigeration)",    href:"equations.html#eq-carnot-cop-ref"},
        {type:"eq", label:"Max COP (heat pump)",        href:"equations.html#eq-carnot-cop-hp"},
        {type:"def",label:"Refrigeration cycle",        href:"glossary.html#g-refrigeration"},
        {type:"def",label:"Coefficient of performance", href:"glossary.html#g-cop"},
        {type:"flag",label:"Air Conditioning Lab (W6)", href:"assessments.html#a-labs"},
        {type:"flag",label:"Applications Exam",         href:"assessments.html#a-exam"}
      ]
    }
  ],

  /* =========================================================
     EQUATIONS
     ========================================================= */
  equations:[
    /* ---- Concepts, work & heat ---- */
    {id:"eq-specific-volume", cat:"Concepts, work & heat", name:"Specific volume & density",
     latex:R`v = \frac{V}{m} = \frac{1}{\rho} \qquad p = \frac{F}{A}`,
     desc:"Specific volume is volume per unit mass (the reciprocal of density); pressure is normal force per unit area. 1 Pa = 1 N/m²; 1 bar = 10⁵ Pa.",
     vars:[{sym:R`v`,mean:"specific volume (m³/kg)"},{sym:R`\rho`,mean:"density (kg/m³)"},{sym:R`p`,mean:"pressure (Pa)"},{sym:R`A`,mean:"area (m²)"}],
     links:[{label:"Topic 1",href:"week-01.html"}],
     keywords:"specific volume density pressure pascal bar intensive property"},

    {id:"eq-ke-pe", cat:"Concepts, work & heat", name:"Kinetic & potential energy change",
     latex:R`\Delta KE = \tfrac{1}{2}m\,(\mathrm{v}_2^2 - \mathrm{v}_1^2) \qquad \Delta PE = mg\,(z_2 - z_1)`,
     desc:"The macroscopic mechanical energies of a system. Here v is velocity (distinct from specific volume). In many closed-system problems both changes are negligible next to ΔU.",
     vars:[{sym:R`m`,mean:"mass (kg)"},{sym:R`\mathrm{v}`,mean:"velocity (m/s)"},{sym:R`z`,mean:"elevation (m)"},{sym:R`g`,mean:"gravitational acceleration (m/s²)"}],
     links:[{label:"Topic 1",href:"week-01.html"}],
     keywords:"kinetic energy potential energy velocity elevation mechanical energy"},

    {id:"eq-pdv-work", cat:"Concepts, work & heat", name:"Expansion / compression work",
     latex:R`W = \int_{s_1}^{s_2} F\,ds = \int_{V_1}^{V_2} p\,dV`,
     desc:"The work of a quasi-equilibrium boundary displacement is the area under the process path on a p–V diagram. Sign convention in this course: work done BY the system is positive.",
     vars:[{sym:R`W`,mean:"boundary work (J)"},{sym:R`p`,mean:"pressure (Pa)"},{sym:R`dV`,mean:"volume change (m³)"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Work",href:"glossary.html#g-work"}],
     keywords:"boundary work pdv area under curve p-v diagram quasi-equilibrium sign convention"},

    {id:"eq-polytropic-work", cat:"Concepts, work & heat", name:"Polytropic process & its work",
     latex:R`pV^{\,n} = \text{const} \qquad \int_1^2 p\,dV = \begin{cases}\dfrac{p_2V_2 - p_1V_1}{1-n}, & n \neq 1\\[6pt] p_1V_1 \ln\dfrac{V_2}{V_1}, & n = 1\end{cases}`,
     desc:"A polytropic process holds pVⁿ constant. n = 1 is isothermal (for an ideal gas), n = k is isentropic, n = 0 is isobaric and n → ∞ is isochoric. The two cases give the boundary work.",
     vars:[{sym:R`n`,mean:"polytropic exponent"},{sym:R`p_1,p_2`,mean:"end pressures"},{sym:R`V_1,V_2`,mean:"end volumes"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Ideal-gas polytropic",href:"equations.html#eq-polytropic-ideal"}],
     keywords:"polytropic process exponent isothermal isobaric isochoric isentropic boundary work"},

    {id:"eq-heat-modes", cat:"Concepts, work & heat", name:"Heat transfer rate laws",
     latex:R`\frac{\dot Q}{A} = -k\,\frac{dT}{dx} \qquad \frac{\dot Q}{A} = h\,(T_b - T_f) \qquad \frac{\dot Q}{A} = e\,\sigma\,(T_b^4 - T_s^4)`,
     desc:"The three modes of heat transfer: Fourier's law (conduction), Newton's law of cooling (convection) and thermal radiation from a surface of emissivity e. Heat rate is the flux integrated over area.",
     vars:[{sym:R`k`,mean:"thermal conductivity (W/m·K)"},{sym:R`h`,mean:"convection coefficient (W/m²·K)"},{sym:R`e`,mean:"emissivity"},{sym:R`\sigma`,mean:"Stefan–Boltzmann constant"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Heat",href:"glossary.html#g-heat"}],
     keywords:"conduction convection radiation fourier newton cooling stefan boltzmann heat flux modes"},

    /* ---- First law (closed systems) ---- */
    {id:"eq-total-energy", cat:"First law — closed systems", name:"Total energy of a system",
     latex:R`E = U + KE + PE \qquad \Delta E = \Delta U + \Delta KE + \Delta PE`,
     desc:"A system's stored energy is its internal energy plus its macroscopic kinetic and potential energies. Internal energy is the microscopic store; U is an extensive property found from tables or models.",
     vars:[{sym:R`E`,mean:"total energy (J)"},{sym:R`U`,mean:"internal energy (J)"},{sym:R`KE,PE`,mean:"kinetic / potential energy (J)"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Internal energy",href:"glossary.html#g-internal-energy"}],
     keywords:"total energy internal energy kinetic potential stored energy extensive"},

    {id:"eq-energy-closed", cat:"First law — closed systems", name:"Energy balance (closed system)",
     latex:R`\Delta U + \Delta KE + \Delta PE = Q - W`,
     desc:"The first law for a closed system: the change in stored energy equals net heat added minus net work done by the system. Q is positive into the system, W is positive out of it (this course's convention).",
     vars:[{sym:R`Q`,mean:"net heat transfer in (J)"},{sym:R`W`,mean:"net work out (J)"},{sym:R`\Delta U`,mean:"internal-energy change"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Heat",href:"glossary.html#g-heat"},{label:"Work",href:"glossary.html#g-work"}],
     keywords:"first law energy balance closed system conservation of energy sign convention heat work"},

    {id:"eq-energy-rate", cat:"First law — closed systems", name:"Rate form of the energy balance",
     latex:R`\frac{dE}{dt} = \dot Q - \dot W`,
     desc:"The instantaneous version: the rate of change of the system's energy equals the net rate of heat transfer in minus the net rate of work out.",
     vars:[{sym:R`\dot Q`,mean:"heat transfer rate (W)"},{sym:R`\dot W`,mean:"power (W)"},{sym:R`dE/dt`,mean:"rate of energy change (W)"}],
     links:[{label:"Topic 1",href:"week-01.html"}],
     keywords:"rate form energy balance power heat rate instantaneous first law"},

    {id:"eq-cycle", cat:"First law — closed systems", name:"Energy balance for a cycle",
     latex:R`Q_{cycle} = W_{cycle}`,
     desc:"Over a complete cycle the system returns to its initial state, so ΔE = 0 and the net heat transfer equals the net work. This underlies every power, refrigeration and heat-pump cycle.",
     vars:[{sym:R`Q_{cycle}`,mean:"net heat over the cycle"},{sym:R`W_{cycle}`,mean:"net work over the cycle"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Cycle",href:"glossary.html#g-cycle"}],
     keywords:"cycle net heat net work returns to initial state power cycle"},

    {id:"eq-thermal-efficiency", cat:"First law — closed systems", name:"Thermal efficiency",
     latex:R`\eta = \frac{W_{cycle}}{Q_{in}} = \frac{Q_{in} - Q_{out}}{Q_{in}} = 1 - \frac{Q_{out}}{Q_{in}}`,
     desc:"For a power cycle, the fraction of the heat supplied that is converted to net work. Always less than one — the second law forbids η = 1.",
     vars:[{sym:R`\eta`,mean:"thermal efficiency"},{sym:R`Q_{in}`,mean:"heat added (from hot reservoir)"},{sym:R`Q_{out}`,mean:"heat rejected (to cold reservoir)"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Topic 6",href:"week-06.html"},{label:"Carnot efficiency",href:"equations.html#eq-carnot-efficiency"}],
     keywords:"thermal efficiency power cycle work heat added rejected"},

    {id:"eq-cop-ref", cat:"First law — closed systems", name:"Coefficient of performance (refrigeration)",
     latex:R`\beta = \frac{Q_C}{W_{cycle}} = \frac{Q_C}{Q_H - Q_C}`,
     desc:"For a refrigeration cycle, the benefit (heat removed from the cold space) per unit of work input. Usually greater than one.",
     vars:[{sym:R`\beta`,mean:"COP, refrigeration"},{sym:R`Q_C`,mean:"heat removed from cold body"},{sym:R`W_{cycle}`,mean:"work input"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Topic 8",href:"week-08.html"},{label:"COP",href:"glossary.html#g-cop"}],
     keywords:"coefficient of performance refrigeration cold cop beta work input"},

    {id:"eq-cop-hp", cat:"First law — closed systems", name:"Coefficient of performance (heat pump)",
     latex:R`\gamma = \frac{Q_H}{W_{cycle}} = \frac{Q_H}{Q_H - Q_C} = \beta + 1`,
     desc:"For a heat pump, the benefit (heat delivered to the warm space) per unit of work input. It exceeds the refrigeration COP for the same cycle by exactly one.",
     vars:[{sym:R`\gamma`,mean:"COP, heat pump"},{sym:R`Q_H`,mean:"heat delivered to hot body"},{sym:R`W_{cycle}`,mean:"work input"}],
     links:[{label:"Topic 1",href:"week-01.html"},{label:"Topic 8",href:"week-08.html"},{label:"COP",href:"glossary.html#g-cop"}],
     keywords:"coefficient of performance heat pump warm cop gamma work input"},

    /* ---- Properties of substances ---- */
    {id:"eq-quality-props", cat:"Properties of substances", name:"Quality & mixture properties",
     latex:R`x = \frac{m_{vap}}{m_{liq} + m_{vap}} \qquad v = (1-x)\,v_f + x\,v_g = v_f + x\,(v_g - v_f)`,
     desc:"Inside the vapour dome, quality x is the vapour mass fraction. Every specific property of a wet mixture is the quality-weighted average of its saturated-liquid (f) and saturated-vapour (g) values — the same form holds for u, h and s.",
     vars:[{sym:R`x`,mean:"quality (0–1)"},{sym:R`v_f`,mean:"sat. liquid specific volume"},{sym:R`v_g`,mean:"sat. vapour specific volume"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Quality",href:"glossary.html#g-quality"}],
     keywords:"quality vapor mass fraction wet mixture saturated liquid vapor specific volume enthalpy entropy"},

    {id:"eq-enthalpy", cat:"Properties of substances", name:"Enthalpy",
     latex:R`H = U + pV \qquad h = u + pv`,
     desc:"Enthalpy bundles internal energy with the flow-work group pv. It appears naturally in control-volume analysis and in constant-pressure processes.",
     vars:[{sym:R`H`,mean:"enthalpy (J)"},{sym:R`h`,mean:"specific enthalpy (J/kg)"},{sym:R`pv`,mean:"flow-work term"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Topic 3",href:"week-03.html"},{label:"Enthalpy",href:"glossary.html#g-enthalpy"}],
     keywords:"enthalpy internal energy flow work pv constant pressure"},

    {id:"eq-specific-heats", cat:"Properties of substances", name:"Specific heats",
     latex:R`c_p = \left(\frac{\partial h}{\partial T}\right)_p \qquad c_v = \left(\frac{\partial u}{\partial T}\right)_v \qquad k = \frac{c_p}{c_v}`,
     desc:"The specific heats measure how much a substance's enthalpy (at constant p) or internal energy (at constant v) rises per degree. Their ratio k is the specific-heat ratio, central to isentropic relations.",
     vars:[{sym:R`c_p`,mean:"specific heat at constant p (J/kg·K)"},{sym:R`c_v`,mean:"specific heat at constant v"},{sym:R`k`,mean:"specific-heat ratio"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Specific heat",href:"glossary.html#g-specific-heat"}],
     keywords:"specific heat cp cv ratio k enthalpy internal energy temperature"},

    {id:"eq-incompressible", cat:"Properties of substances", name:"Incompressible-substance model",
     latex:R`c_p = c_v = c \qquad u_2 - u_1 = c\,(T_2 - T_1) \qquad h_2 - h_1 = c\,(T_2 - T_1) + v\,(p_2 - p_1)`,
     desc:"For a solid or liquid modelled as incompressible, the two specific heats coincide and internal energy depends only on temperature. Enthalpy carries an extra pressure term — used for pump work.",
     vars:[{sym:R`c`,mean:"specific heat (J/kg·K)"},{sym:R`v`,mean:"(constant) specific volume"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Pump work",href:"equations.html#eq-pump-work"}],
     keywords:"incompressible substance liquid solid specific heat internal energy enthalpy pump"},

    {id:"eq-ideal-gas", cat:"Properties of substances", name:"Ideal-gas equation of state",
     latex:R`pV = mRT \qquad pv = RT`,
     desc:"The ideal-gas model relates p, v and T through the gas constant R. Valid at low density (high T, low p relative to the critical point). For an ideal gas, u and h depend on temperature alone.",
     vars:[{sym:R`p`,mean:"pressure"},{sym:R`v`,mean:"specific volume"},{sym:R`R`,mean:"gas constant"},{sym:R`T`,mean:"absolute temperature (K)"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Ideal gas",href:"glossary.html#g-ideal-gas"}],
     keywords:"ideal gas equation of state pv rt low density absolute temperature"},

    {id:"eq-gas-constant", cat:"Properties of substances", name:"Gas constant",
     latex:R`R = \frac{\bar R}{M} \qquad \bar R = 8.314\ \tfrac{\text{kJ}}{\text{kmol}\cdot\text{K}} \qquad M_{air} = 28.97\ \tfrac{\text{kg}}{\text{kmol}}`,
     desc:"The specific gas constant is the universal gas constant divided by the molar mass. For air R ≈ 0.287 kJ/kg·K.",
     vars:[{sym:R`\bar R`,mean:"universal gas constant"},{sym:R`M`,mean:"molar mass (kg/kmol)"}],
     links:[{label:"Topic 2",href:"week-02.html"}],
     keywords:"gas constant universal molar mass air 8.314 specific"},

    {id:"eq-ideal-gas-uh", cat:"Properties of substances", name:"Ideal-gas Δu, Δh and Mayer's relation",
     latex:R`u_2 - u_1 = c_v\,(T_2 - T_1) \qquad h_2 - h_1 = c_p\,(T_2 - T_1) \qquad c_p - c_v = R`,
     desc:"With constant specific heats, ideal-gas internal-energy and enthalpy changes are linear in temperature. Mayer's relation links the two specific heats through R. Use tabulated u(T), h(T) when cp varies.",
     vars:[{sym:R`c_v,c_p`,mean:"specific heats"},{sym:R`R`,mean:"gas constant"},{sym:R`T_1,T_2`,mean:"end temperatures"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Ideal gas",href:"glossary.html#g-ideal-gas"}],
     keywords:"ideal gas internal energy enthalpy constant specific heat mayer relation temperature"},

    {id:"eq-polytropic-ideal", cat:"Properties of substances", name:"Ideal-gas polytropic relations",
     latex:R`\frac{T_2}{T_1} = \left(\frac{p_2}{p_1}\right)^{\!\frac{n-1}{n}} = \left(\frac{V_1}{V_2}\right)^{\!n-1} \qquad \int_1^2 p\,dV = \frac{mR\,(T_2 - T_1)}{1-n}`,
     desc:"For an ideal gas on a polytropic path pVⁿ = const, temperature, pressure and volume are linked by these power laws, and the boundary work takes a compact form (n ≠ 1).",
     vars:[{sym:R`n`,mean:"polytropic exponent"},{sym:R`m`,mean:"mass"},{sym:R`R`,mean:"gas constant"}],
     links:[{label:"Topic 2",href:"week-02.html"},{label:"Polytropic work",href:"equations.html#eq-polytropic-work"}],
     keywords:"ideal gas polytropic relation temperature pressure volume power law work"},

    /* ---- Control volumes ---- */
    {id:"eq-mass-conservation", cat:"Mass & energy in control volumes", name:"Conservation of mass",
     latex:R`\frac{dm_{cv}}{dt} = \sum_i \dot m_i - \sum_e \dot m_e`,
     desc:"The rate of accumulation of mass in a control volume equals the total mass-flow rate in at the inlets minus that out at the exits. At steady state the two sums are equal.",
     vars:[{sym:R`m_{cv}`,mean:"mass in the control volume"},{sym:R`\dot m_i,\dot m_e`,mean:"inlet / exit mass-flow rates"}],
     links:[{label:"Topic 3",href:"week-03.html"},{label:"Control volume",href:"glossary.html#g-control-volume"}],
     keywords:"conservation of mass continuity control volume accumulation inlet exit steady"},

    {id:"eq-mass-flow", cat:"Mass & energy in control volumes", name:"1-D mass-flow rate",
     latex:R`\dot m = \rho A\mathrm{v} = \frac{A\mathrm{v}}{v}`,
     desc:"For one-dimensional flow through an area A, the mass-flow rate is density times area times velocity. Note v (roman) is velocity and v (italic) is specific volume.",
     vars:[{sym:R`A`,mean:"cross-sectional area (m²)"},{sym:R`\mathrm{v}`,mean:"velocity (m/s)"},{sym:R`v`,mean:"specific volume (m³/kg)"}],
     links:[{label:"Topic 3",href:"week-03.html"}],
     keywords:"mass flow rate one dimensional density area velocity specific volume continuity"},

    {id:"eq-energy-cv", cat:"Mass & energy in control volumes", name:"Energy rate balance (control volume)",
     latex:R`\frac{dE_{cv}}{dt} = \dot Q_{cv} - \dot W_{cv} + \sum_i \dot m_i\!\left(h_i + \tfrac{\mathrm{v}_i^2}{2} + gz_i\right) - \sum_e \dot m_e\!\left(h_e + \tfrac{\mathrm{v}_e^2}{2} + gz_e\right)`,
     desc:"The first law for a control volume. Flow work has been absorbed into enthalpy, so each stream carries h + ½v² + gz. Ẇcv excludes flow work (it is the shaft/other work).",
     vars:[{sym:R`\dot Q_{cv}`,mean:"heat-transfer rate"},{sym:R`\dot W_{cv}`,mean:"shaft/other power"},{sym:R`h+\tfrac{\mathrm{v}^2}{2}+gz`,mean:"stream energy per unit mass"}],
     links:[{label:"Topic 3",href:"week-03.html"},{label:"Enthalpy",href:"glossary.html#g-enthalpy"}],
     keywords:"energy rate balance control volume first law flow work enthalpy stream shaft work"},

    {id:"eq-sfee", cat:"Mass & energy in control volumes", name:"Steady-flow energy equation (one inlet/exit)",
     latex:R`0 = \dot Q_{cv} - \dot W_{cv} + \dot m\!\left[(h_i - h_e) + \frac{\mathrm{v}_i^2 - \mathrm{v}_e^2}{2} + g(z_i - z_e)\right]`,
     desc:"The workhorse of Topic 3: at steady state with a single inlet and exit, this reduces further for each device (drop Ẇ for nozzles and heat exchangers, drop Q̇ for adiabatic turbines/compressors, drop KE and PE where negligible).",
     vars:[{sym:R`\dot m`,mean:"mass-flow rate"},{sym:R`h_i,h_e`,mean:"inlet / exit enthalpy"},{sym:R`\mathrm{v}_i,\mathrm{v}_e`,mean:"inlet / exit velocity"}],
     links:[{label:"Topic 3",href:"week-03.html"}],
     keywords:"steady flow energy equation sfee one inlet exit nozzle turbine compressor heat exchanger throttle"},

    {id:"eq-transient-cv", cat:"Mass & energy in control volumes", name:"Transient control-volume balances",
     latex:R`m_{cv}(t) - m_{cv}(0) = \sum_i m_i - \sum_e m_e \qquad U_{cv}(t) - U_{cv}(0) = Q_{cv} - W_{cv} + \sum_i m_i h_i - \sum_e m_e h_e`,
     desc:"Integrated over a filling or emptying process with uniform inlet/exit states, the mass and energy balances give these algebraic forms — used for charging and discharging tanks.",
     vars:[{sym:R`m_{cv}`,mean:"control-volume mass"},{sym:R`U_{cv}`,mean:"control-volume internal energy"},{sym:R`m_i,m_e`,mean:"total mass in / out"}],
     links:[{label:"Topic 3",href:"week-03.html"}],
     keywords:"transient control volume filling emptying charging discharging tank uniform state integrated"},

    /* ---- Second law ---- */
    {id:"eq-kelvin-planck", cat:"Second law", name:"Kelvin–Planck statement (analytical)",
     latex:R`W_{cycle} \le 0 \quad (\text{single reservoir})`,
     desc:"No system operating in a cycle can deliver net work while exchanging heat with a single thermal reservoir. Equality holds only for an internally reversible cycle; a real (irreversible) one has Wcycle < 0.",
     vars:[{sym:R`W_{cycle}`,mean:"net cycle work"}],
     links:[{label:"Topic 4",href:"week-04.html"},{label:"Thermal reservoir",href:"glossary.html#g-thermal-reservoir"}],
     keywords:"kelvin planck statement single reservoir cycle net work second law irreversible"},

    {id:"eq-carnot-efficiency", cat:"Second law", name:"Carnot (maximum) thermal efficiency",
     latex:R`\eta_{max} = 1 - \frac{T_C}{T_H}`,
     desc:"The greatest efficiency any power cycle can reach between two reservoirs, achieved only by a reversible (Carnot) cycle. Temperatures are absolute (K). Raising T_H or lowering T_C raises the ceiling.",
     vars:[{sym:R`T_H`,mean:"hot-reservoir temperature (K)"},{sym:R`T_C`,mean:"cold-reservoir temperature (K)"}],
     links:[{label:"Topic 4",href:"week-04.html"},{label:"Carnot cycle",href:"glossary.html#g-carnot-cycle"}],
     keywords:"carnot efficiency maximum reversible power cycle two reservoirs absolute temperature kelvin"},

    {id:"eq-carnot-cop-ref", cat:"Second law", name:"Maximum COP — refrigeration",
     latex:R`\beta_{max} = \frac{T_C}{T_H - T_C}`,
     desc:"The largest refrigeration COP between two reservoirs, from a reversible cycle. It grows without bound as the two temperatures approach each other.",
     vars:[{sym:R`T_C`,mean:"cold-space temperature (K)"},{sym:R`T_H`,mean:"warm-surroundings temperature (K)"}],
     links:[{label:"Topic 4",href:"week-04.html"},{label:"Topic 8",href:"week-08.html"}],
     keywords:"maximum coefficient of performance refrigeration reversible carnot temperature limit"},

    {id:"eq-carnot-cop-hp", cat:"Second law", name:"Maximum COP — heat pump",
     latex:R`\gamma_{max} = \frac{T_H}{T_H - T_C}`,
     desc:"The largest heat-pump COP between two reservoirs, from a reversible cycle — always the refrigeration limit plus one.",
     vars:[{sym:R`T_H`,mean:"delivered-heat temperature (K)"},{sym:R`T_C`,mean:"source temperature (K)"}],
     links:[{label:"Topic 4",href:"week-04.html"},{label:"Topic 8",href:"week-08.html"}],
     keywords:"maximum coefficient of performance heat pump reversible carnot temperature limit"},

    /* ---- Entropy ---- */
    {id:"eq-clausius", cat:"Entropy", name:"Clausius inequality",
     latex:R`\oint \left(\frac{\delta Q}{T}\right)_{\!b} = -\,\sigma_{cycle} \le 0`,
     desc:"For any cycle, the cyclic integral of δQ/T over the boundary is negative or zero; the deficit σ_cycle measures the irreversibility (= 0 for a reversible cycle, > 0 for a real one, impossible if < 0).",
     vars:[{sym:R`\delta Q`,mean:"differential heat transfer"},{sym:R`T`,mean:"boundary temperature"},{sym:R`\sigma_{cycle}`,mean:"entropy produced per cycle"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Entropy",href:"glossary.html#g-entropy"}],
     keywords:"clausius inequality cyclic integral boundary temperature entropy production irreversibility"},

    {id:"eq-entropy-def", cat:"Entropy", name:"Definition of entropy",
     latex:R`dS = \left(\frac{\delta Q}{T}\right)_{\!int,rev} \qquad s = s_f + x\,(s_g - s_f)`,
     desc:"Entropy change is defined by the heat transfer along an internally reversible path divided by absolute temperature. It is a property, so the change is path-independent; wet-mixture entropy follows the quality rule.",
     vars:[{sym:R`dS`,mean:"entropy change (J/K)"},{sym:R`s_f,s_g`,mean:"sat. liquid / vapour entropy"},{sym:R`x`,mean:"quality"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Entropy",href:"glossary.html#g-entropy"}],
     keywords:"definition of entropy internally reversible heat temperature property quality tabulated"},

    {id:"eq-tds", cat:"Entropy", name:"The TdS equations",
     latex:R`T\,dS = dU + p\,dV \qquad T\,dS = dH - V\,dp`,
     desc:"Two relations among properties (derived from the first law for an internally reversible process) that let entropy be evaluated for any substance, since they contain only properties.",
     vars:[{sym:R`T`,mean:"absolute temperature"},{sym:R`dU,dH`,mean:"internal-energy / enthalpy change"},{sym:R`dV,dp`,mean:"volume / pressure change"}],
     links:[{label:"Topic 5",href:"week-05.html"}],
     keywords:"tds equations first second gibbs property relations entropy internal energy enthalpy"},

    {id:"eq-entropy-incompressible", cat:"Entropy", name:"Entropy change — incompressible substance",
     latex:R`s_2 - s_1 = c\,\ln\frac{T_2}{T_1} \quad (\text{constant } c)`,
     desc:"For an incompressible solid or liquid, entropy change depends only on the temperature ratio through the specific heat.",
     vars:[{sym:R`c`,mean:"specific heat"},{sym:R`T_1,T_2`,mean:"end temperatures (K)"}],
     links:[{label:"Topic 5",href:"week-05.html"}],
     keywords:"entropy change incompressible substance specific heat temperature ratio logarithm"},

    {id:"eq-entropy-ideal", cat:"Entropy", name:"Entropy change — ideal gas (constant cp, cv)",
     latex:R`s_2 - s_1 = c_v \ln\frac{T_2}{T_1} + R\ln\frac{v_2}{v_1} = c_p \ln\frac{T_2}{T_1} - R\ln\frac{p_2}{p_1}`,
     desc:"With constant specific heats, ideal-gas entropy change splits into a temperature term and a volume (or pressure) term. When cp varies, use the tabulated s°(T) instead of the cp ln(T₂/T₁) piece.",
     vars:[{sym:R`c_v,c_p`,mean:"specific heats"},{sym:R`R`,mean:"gas constant"},{sym:R`v,p,T`,mean:"specific volume, pressure, temperature"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Ideal gas",href:"glossary.html#g-ideal-gas"}],
     keywords:"entropy change ideal gas constant specific heat temperature pressure volume logarithm"},

    {id:"eq-entropy-tables", cat:"Entropy", name:"Entropy of an ideal gas using s° tables",
     latex:R`s(T_2,p_2) - s(T_1,p_1) = s^{\circ}(T_2) - s^{\circ}(T_1) - R\ln\frac{p_2}{p_1}`,
     desc:"When cp depends on temperature, the temperature part of the entropy change is read from the air tables as s°(T); the pressure part stays analytic.",
     vars:[{sym:R`s^{\circ}(T)`,mean:"tabulated temperature-dependent entropy"},{sym:R`R`,mean:"gas constant"},{sym:R`p_1,p_2`,mean:"end pressures"}],
     links:[{label:"Topic 5",href:"week-05.html"}],
     keywords:"entropy ideal gas s naught air tables temperature dependent specific heat pressure"},

    {id:"eq-entropy-closed", cat:"Entropy", name:"Entropy balance (closed system)",
     latex:R`S_2 - S_1 = \int_1^2 \left(\frac{\delta Q}{T}\right)_{\!b} + \sigma`,
     desc:"The change in a system's entropy equals the entropy transferred with heat plus the entropy produced by irreversibility. σ ≥ 0 always: zero for a reversible process, positive otherwise, never negative.",
     vars:[{sym:R`S_2 - S_1`,mean:"entropy change"},{sym:R`\int \delta Q/T`,mean:"entropy transfer with heat"},{sym:R`\sigma`,mean:"entropy production (≥ 0)"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Irreversibility",href:"glossary.html#g-irreversibility"}],
     keywords:"entropy balance closed system transfer production sigma irreversibility second law"},

    {id:"eq-entropy-cv", cat:"Entropy", name:"Entropy rate balance (control volume)",
     latex:R`\frac{dS_{cv}}{dt} = \sum_j \frac{\dot Q_j}{T_j} + \sum_i \dot m_i s_i - \sum_e \dot m_e s_e + \dot\sigma_{cv}`,
     desc:"For a control volume, entropy also enters and leaves with the flowing streams. At steady state with one inlet and exit: 0 = Σ Q̇j/Tj + ṁ(s₁ − s₂) + σ̇cv.",
     vars:[{sym:R`\dot Q_j/T_j`,mean:"entropy transfer with heat at boundary j"},{sym:R`\dot m s`,mean:"entropy carried by a stream"},{sym:R`\dot\sigma_{cv}`,mean:"entropy production rate"}],
     links:[{label:"Topic 5",href:"week-05.html"}],
     keywords:"entropy rate balance control volume streams production steady state inlet exit"},

    {id:"eq-isentropic-const", cat:"Entropy", name:"Isentropic ideal-gas relations (constant k)",
     latex:R`\frac{T_2}{T_1} = \left(\frac{p_2}{p_1}\right)^{\!\frac{k-1}{k}} = \left(\frac{v_1}{v_2}\right)^{\!k-1} \qquad \frac{p_2}{p_1} = \left(\frac{v_1}{v_2}\right)^{\!k}`,
     desc:"An isentropic (reversible, adiabatic) ideal-gas process with constant specific heats is polytropic with n = k. When k varies, use the relative-pressure and relative-volume table data (pr, vr) instead.",
     vars:[{sym:R`k`,mean:"specific-heat ratio"},{sym:R`T,p,v`,mean:"temperature, pressure, specific volume"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Isentropic process",href:"glossary.html#g-isentropic"}],
     keywords:"isentropic ideal gas constant specific heat ratio k relative pressure volume pr vr adiabatic reversible"},

    {id:"eq-turbine-eff", cat:"Entropy", name:"Isentropic turbine & nozzle efficiency",
     latex:R`\eta_t = \frac{\dot W_{cv}/\dot m}{(\dot W_{cv}/\dot m)_s} = \frac{h_1 - h_2}{h_1 - h_{2s}} \qquad \eta_{nozzle} = \frac{\mathrm{v}_2^2/2}{(\mathrm{v}_2^2/2)_s}`,
     desc:"The isentropic efficiency compares the actual output to that of an ideal (isentropic) device operating between the same inlet state and exit pressure — the '2s' state. For turbines and nozzles the real output falls short.",
     vars:[{sym:R`h_2`,mean:"actual exit enthalpy"},{sym:R`h_{2s}`,mean:"isentropic exit enthalpy"},{sym:R`\eta_t`,mean:"turbine isentropic efficiency"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Topic 6",href:"week-06.html"},{label:"Isentropic efficiency",href:"glossary.html#g-isentropic-efficiency"}],
     keywords:"isentropic efficiency turbine nozzle actual ideal exit pressure 2s enthalpy velocity"},

    {id:"eq-compressor-eff", cat:"Entropy", name:"Isentropic compressor & pump efficiency",
     latex:R`\eta_c = \frac{(\dot W_{cv}/\dot m)_s}{\dot W_{cv}/\dot m} = \frac{h_{2s} - h_1}{h_2 - h_1}`,
     desc:"For work-absorbing devices the isentropic case needs the least work, so the ideal work sits on top of the fraction: real compressors and pumps demand more than the isentropic minimum.",
     vars:[{sym:R`h_{2s}`,mean:"isentropic exit enthalpy"},{sym:R`h_2`,mean:"actual exit enthalpy"},{sym:R`\eta_c`,mean:"compressor isentropic efficiency"}],
     links:[{label:"Topic 5",href:"week-05.html"},{label:"Isentropic efficiency",href:"glossary.html#g-isentropic-efficiency"}],
     keywords:"isentropic efficiency compressor pump work absorbing ideal minimum enthalpy"},

    /* ---- Vapour power (Rankine) ---- */
    {id:"eq-pump-work", cat:"Vapour power (Rankine)", name:"Pump work for an incompressible liquid",
     latex:R`\frac{\dot W_{pump}}{\dot m} = h_4 - h_3 \approx v_3\,(p_4 - p_3)`,
     desc:"Because liquid water is nearly incompressible, the ideal (isentropic) pump work is well approximated by v·Δp — far smaller than the turbine work, which is why vapour power plants have a low back-work ratio.",
     vars:[{sym:R`v_3`,mean:"sat.-liquid specific volume at pump inlet"},{sym:R`p_3,p_4`,mean:"condenser / boiler pressure"}],
     links:[{label:"Topic 6",href:"week-06.html"},{label:"Incompressible model",href:"equations.html#eq-incompressible"}],
     keywords:"pump work incompressible liquid specific volume pressure rise rankine back work ratio"},

    {id:"eq-bwr", cat:"Vapour power (Rankine)", name:"Back-work ratio",
     latex:R`bwr = \frac{\dot W_{pump}/\dot m}{\dot W_{turbine}/\dot m} = \frac{h_4 - h_3}{h_1 - h_2}`,
     desc:"The fraction of the turbine's gross output consumed by the pump. It is small for vapour power plants (the pump compresses a liquid) but large for gas cycles (the compressor works on a gas).",
     vars:[{sym:R`\dot W_{pump}`,mean:"pump power"},{sym:R`\dot W_{turbine}`,mean:"turbine power"}],
     links:[{label:"Topic 6",href:"week-06.html"},{label:"Back-work ratio",href:"glossary.html#g-bwr"}],
     keywords:"back work ratio pump turbine gross output vapor gas power cycle"},

    /* ---- Gas power ---- */
    {id:"eq-compression-ratio", cat:"Gas power cycles", name:"Compression ratio & displacement",
     latex:R`r = \frac{V_{BDC}}{V_{TDC}} \qquad V_{disp} = V_{BDC} - V_{TDC}`,
     desc:"Reciprocating-engine geometry: the compression ratio is the cylinder-volume ratio between bottom and top dead centre, and the displacement is the swept volume between them.",
     vars:[{sym:R`V_{BDC}`,mean:"volume at bottom dead centre"},{sym:R`V_{TDC}`,mean:"clearance volume (top dead centre)"},{sym:R`r`,mean:"compression ratio"}],
     links:[{label:"Topic 7",href:"week-07.html"},{label:"Compression ratio",href:"glossary.html#g-compression-ratio"}],
     keywords:"compression ratio displacement volume bore stroke top bottom dead centre clearance reciprocating engine"},

    {id:"eq-mep", cat:"Gas power cycles", name:"Mean effective pressure",
     latex:R`mep = \frac{W_{net}}{V_{max} - V_{min}}`,
     desc:"The constant pressure that, acting over the displacement, would produce the same net work as the actual cycle — a size-independent measure of an engine's output.",
     vars:[{sym:R`W_{net}`,mean:"net cycle work"},{sym:R`V_{max}-V_{min}`,mean:"displacement volume"}],
     links:[{label:"Topic 7",href:"week-07.html"},{label:"Mean effective pressure",href:"glossary.html#g-mep"}],
     keywords:"mean effective pressure mep net work displacement volume engine output"},

    {id:"eq-otto", cat:"Gas power cycles", name:"Otto-cycle thermal efficiency (cold air-standard)",
     latex:R`\eta_{Otto} = 1 - \frac{1}{r^{\,k-1}}`,
     desc:"For the cold-air-standard Otto cycle (constant-volume heat addition), efficiency depends only on the compression ratio and the specific-heat ratio (k = 1.4 for air). Higher r means higher η — limited in practice by knock.",
     vars:[{sym:R`r`,mean:"compression ratio"},{sym:R`k`,mean:"specific-heat ratio"}],
     links:[{label:"Topic 7",href:"week-07.html"},{label:"Otto cycle",href:"glossary.html#g-otto"}],
     keywords:"otto cycle thermal efficiency compression ratio specific heat ratio spark ignition knock constant volume"},

    {id:"eq-diesel", cat:"Gas power cycles", name:"Diesel-cycle thermal efficiency (cold air-standard)",
     latex:R`\eta_{Diesel} = 1 - \frac{1}{r^{\,k-1}}\left[\frac{r_c^{\,k} - 1}{k\,(r_c - 1)}\right]`,
     desc:"The Diesel cycle adds heat at constant pressure. The bracketed cut-off-ratio term is always > 1, so for the same compression ratio a Diesel cycle is slightly less efficient than an Otto cycle — but Diesels run at much higher r.",
     vars:[{sym:R`r`,mean:"compression ratio"},{sym:R`r_c`,mean:"cut-off ratio V₃/V₂"},{sym:R`k`,mean:"specific-heat ratio"}],
     links:[{label:"Topic 7",href:"week-07.html"},{label:"Diesel cycle",href:"glossary.html#g-diesel"}],
     keywords:"diesel cycle thermal efficiency compression ratio cut-off ratio constant pressure compression ignition"},

    /* ---- Reference constants ---- */
    {id:"eq-constants", cat:"Reference values", name:"Handy constants",
     latex:R`\bar R = 8.314\ \tfrac{\text{kJ}}{\text{kmol}\cdot\text{K}} \qquad R_{air} = 0.287\ \tfrac{\text{kJ}}{\text{kg}\cdot\text{K}} \qquad k_{air} = 1.4 \qquad T[\text{K}] = T[^{\circ}\text{C}] + 273.15`,
     desc:"Values that recur throughout the course. Always convert temperatures to kelvin before using them in efficiency, COP or ideal-gas relations.",
     vars:[{sym:R`\bar R`,mean:"universal gas constant"},{sym:R`R_{air}`,mean:"gas constant of air"},{sym:R`k_{air}`,mean:"specific-heat ratio of air"}],
     links:[{label:"Topic 2",href:"week-02.html"}],
     keywords:"constants universal gas constant air specific heat ratio kelvin celsius conversion"}
  ],

  /* =========================================================
     GLOSSARY
     ========================================================= */
  glossary:[
    {id:"g-system", term:"System", sym:R`—`,
      def:R`Whatever is chosen for study, separated from its surroundings by a boundary. A \(\textit{closed system}\) (control mass) contains a fixed mass and no matter crosses its boundary; a \(\textit{control volume}\) (open system) allows mass to flow through.`,
      see:[{label:"Control volume",href:"glossary.html#g-control-volume"}]},
    {id:"g-control-volume", term:"Control volume", sym:R`cv`,
      def:R`A region of space with a permeable boundary (control surface) through which mass and energy flow — turbines, nozzles and heat exchangers are all analysed this way. Contrast with a closed system, which holds a fixed mass.`,
      see:[{label:"Mass conservation",href:"equations.html#eq-mass-conservation"},{label:"SFEE",href:"equations.html#eq-sfee"}]},
    {id:"g-property", term:"Property & state", sym:R`—`,
      def:R`A property is a macroscopic characteristic (p, T, v, u, h, s …) whose value depends only on the current \(\textit{state}\), not on how the system got there. Two independent intensive properties fix the state of a simple compressible substance.`,
      see:[{label:"Enthalpy",href:"glossary.html#g-enthalpy"}]},
    {id:"g-cycle", term:"Cycle", sym:R`—`,
      def:R`A sequence of processes that returns a system to its initial state, so every property change over the cycle is zero and \(Q_{cycle} = W_{cycle}\). Power, refrigeration and heat-pump cycles are the course's main objects of study.`,
      see:[{label:"Energy balance for a cycle",href:"equations.html#eq-cycle"}]},
    {id:"g-work", term:"Work", sym:R`W`,
      def:R`Energy transfer across a boundary that could (in principle) have raised a weight — for a simple system, boundary (pdV) work. This course takes work done \(\textit{by}\) the system as positive.`,
      see:[{label:"pdV work",href:"equations.html#eq-pdv-work"}]},
    {id:"g-heat", term:"Heat", sym:R`Q`,
      def:R`Energy transfer across a boundary driven by a temperature difference. Taken as positive \(\textit{into}\) the system. It moves by conduction, convection and radiation, and — like work — is a path function, not a property.`,
      see:[{label:"Heat transfer rate laws",href:"equations.html#eq-heat-modes"}]},
    {id:"g-internal-energy", term:"Internal energy", sym:R`U`,
      def:R`The microscopic energy stored in a substance (molecular translation, rotation, vibration and intermolecular forces). An extensive property; for an ideal gas it depends on temperature alone.`,
      see:[{label:"Total energy",href:"equations.html#eq-total-energy"}]},
    {id:"g-enthalpy", term:"Enthalpy", sym:R`h`,
      def:R`The property \(h = u + pv\). Bundling internal energy with the flow-work group pv makes it the natural energy carried by a flowing stream, so it dominates control-volume analysis and constant-pressure processes.`,
      see:[{label:"Enthalpy",href:"equations.html#eq-enthalpy"}]},
    {id:"g-specific-heat", term:"Specific heat", sym:R`c_p,\,c_v`,
      def:R`The energy needed to raise unit mass by one degree — at constant pressure (\(c_p\)) or constant volume (\(c_v\)). Their ratio \(k = c_p/c_v\) governs isentropic processes; for air \(k \approx 1.4\).`,
      see:[{label:"Specific heats",href:"equations.html#eq-specific-heats"}]},
    {id:"g-quality", term:"Quality", sym:R`x`,
      def:R`In a liquid–vapour mixture, the fraction of the mass that is vapour, \(x = m_{vap}/m_{total}\) (0 to 1). Every specific property is the quality-weighted average of the saturated-liquid (f) and saturated-vapour (g) values.`,
      see:[{label:"Quality relations",href:"equations.html#eq-quality-props"}]},
    {id:"g-ideal-gas", term:"Ideal gas", sym:R`pv=RT`,
      def:R`A model gas obeying \(pv = RT\), valid at low density. Its internal energy and enthalpy depend only on temperature, which makes \(\Delta u = c_v\Delta T\) and \(\Delta h = c_p\Delta T\) exact for the model.`,
      see:[{label:"Ideal-gas equation",href:"equations.html#eq-ideal-gas"}]},
    {id:"g-thermal-reservoir", term:"Thermal reservoir", sym:R`—`,
      def:R`An idealised body so large that it exchanges heat without any change in temperature — the atmosphere, the ocean, a boiling/condensing fluid. Power and refrigeration cycles are analysed between a hot and a cold reservoir.`,
      see:[{label:"Kelvin–Planck",href:"equations.html#eq-kelvin-planck"}]},
    {id:"g-reversible", term:"Reversible process", sym:R`—`,
      def:R`An idealised process after which both system and surroundings could be returned to their initial states with no net change. Real processes are \(\textit{irreversible}\); a reversible cycle gives the maximum possible efficiency or COP.`,
      see:[{label:"Irreversibility",href:"glossary.html#g-irreversibility"}]},
    {id:"g-irreversibility", term:"Irreversibility", sym:R`\sigma`,
      def:R`Any feature that prevents a process being undone without leaving a trace — friction, heat transfer across a finite temperature difference, unrestrained expansion, mixing. Every irreversibility produces entropy (\(\sigma > 0\)).`,
      see:[{label:"Entropy balance",href:"equations.html#eq-entropy-closed"}]},
    {id:"g-carnot-cycle", term:"Carnot cycle", sym:R`—`,
      def:R`The reversible cycle of two isothermal and two adiabatic processes between two reservoirs. It sets the efficiency ceiling \(\eta_{max} = 1 - T_C/T_H\); run in reverse it is the Carnot refrigeration / heat-pump cycle.`,
      see:[{label:"Carnot efficiency",href:"equations.html#eq-carnot-efficiency"}]},
    {id:"g-entropy", term:"Entropy", sym:R`S`,
      def:R`The extensive property whose change is \((\delta Q/T)_{int,rev}\); the analytical statement of the second law. It can be transferred with heat and mass and \(\textit{produced}\) by irreversibility, but never destroyed. Units J/K (specific: J/kg·K).`,
      see:[{label:"Entropy definition",href:"equations.html#eq-entropy-def"}]},
    {id:"g-isentropic", term:"Isentropic process", sym:R`s=\text{const}`,
      def:R`A constant-entropy process — i.e. adiabatic and internally reversible. The ideal benchmark for turbines, compressors, pumps and nozzles, and the reference (state '2s') for isentropic efficiencies.`,
      see:[{label:"Isentropic relations",href:"equations.html#eq-isentropic-const"}]},
    {id:"g-isentropic-efficiency", term:"Isentropic efficiency", sym:R`\eta_t,\eta_c`,
      def:R`How close a real adiabatic device comes to the isentropic ideal between the same inlet state and exit pressure. Work-producing devices fall short of the ideal; work-absorbing devices exceed the ideal minimum.`,
      see:[{label:"Turbine efficiency",href:"equations.html#eq-turbine-eff"}]},
    {id:"g-rankine", term:"Rankine cycle", sym:R`—`,
      def:R`The vapour power cycle behind most electricity generation: boiler, turbine, condenser and pump, with water changing phase. The ideal version uses isentropic turbine and pump and isobaric boiler and condenser.`,
      see:[{label:"Back-work ratio",href:"equations.html#eq-bwr"}]},
    {id:"g-bwr", term:"Back-work ratio", sym:R`bwr`,
      def:R`The share of a cycle's gross work output that is fed back to drive its compression device. Low for vapour power plants (pumping a liquid), high for gas-turbine plants (compressing a gas).`,
      see:[{label:"Back-work ratio",href:"equations.html#eq-bwr"}]},
    {id:"g-superheat", term:"Superheat & reheat", sym:R`—`,
      def:R`Superheating raises steam above its saturation temperature before the turbine, lifting efficiency and keeping turbine-exit quality high; reheat returns partly expanded steam to the boiler and expands it again, for the same reasons.`,
      see:[{label:"Rankine cycle",href:"glossary.html#g-rankine"}]},
    {id:"g-air-standard", term:"Air-standard analysis", sym:R`—`,
      def:R`A simplification of combustion engines: a fixed mass of air as an ideal gas, combustion replaced by external heat transfer, all processes internally reversible. \(\textit{Cold}\) air-standard adds constant specific heats at ambient temperature.`,
      see:[{label:"Otto cycle",href:"glossary.html#g-otto"}]},
    {id:"g-otto", term:"Otto cycle", sym:R`—`,
      def:R`The air-standard model of the spark-ignition engine: isentropic compression, constant-volume heat addition, isentropic expansion, constant-volume heat rejection. Efficiency rises with compression ratio.`,
      see:[{label:"Otto efficiency",href:"equations.html#eq-otto"}]},
    {id:"g-diesel", term:"Diesel cycle", sym:R`—`,
      def:R`The air-standard model of the compression-ignition engine, differing from Otto only in that heat is added at constant \(\textit{pressure}\). The cut-off ratio \(r_c\) sets how long that heat addition lasts.`,
      see:[{label:"Diesel efficiency",href:"equations.html#eq-diesel"}]},
    {id:"g-compression-ratio", term:"Compression ratio", sym:R`r`,
      def:R`The ratio of cylinder volume at bottom dead centre to that at top dead centre. Raising it raises Otto and Diesel efficiency; in spark-ignition engines it is limited by knock (auto-ignition), roughly \(r \lesssim 11.5\).`,
      see:[{label:"Compression ratio",href:"equations.html#eq-compression-ratio"}]},
    {id:"g-mep", term:"Mean effective pressure", sym:R`mep`,
      def:R`The hypothetical constant pressure that, acting through the displacement volume, would give the same net work as the real cycle. Lets engines of different size be compared on output.`,
      see:[{label:"Mean effective pressure",href:"equations.html#eq-mep"}]},
    {id:"g-refrigeration", term:"Refrigeration cycle", sym:R`—`,
      def:R`A cycle run in reverse to pump heat from a cold space to warm surroundings, driven by work input. The common vapour-compression version has a compressor, condenser, expansion valve and evaporator.`,
      see:[{label:"COP (refrigeration)",href:"equations.html#eq-cop-ref"}]},
    {id:"g-cop", term:"Coefficient of performance", sym:R`\beta,\gamma`,
      def:R`The benefit-to-cost ratio of a reverse cycle: heat removed (refrigeration, \(\beta\)) or heat delivered (heat pump, \(\gamma\)) per unit work input. Usually greater than one, and \(\gamma = \beta + 1\) for the same cycle.`,
      see:[{label:"COP (heat pump)",href:"equations.html#eq-cop-hp"}]},
    {id:"g-polytropic", term:"Polytropic process", sym:R`pV^n`,
      def:R`A process following \(pV^{\,n} = \text{const}\). Special cases: \(n=0\) isobaric, \(n=1\) isothermal (ideal gas), \(n=k\) isentropic, \(n\to\infty\) isochoric. A convenient model for real compression and expansion.`,
      see:[{label:"Polytropic work",href:"equations.html#eq-polytropic-work"}]}
  ],

  /* =========================================================
     ASSESSMENTS
     ========================================================= */
  assessments:[
    {id:"a-labs", name:"Laboratory Reports", type:"Group report", weight:"20%",
      weekLabel:"Labs across W5–W9 · post-lab due 7 days after each", dueWeek:6, dueOffsetDays:0,
      covers:"Three labs — Cooling Tower, Air Conditioning and Jet Engine — each with a pre-lab and a post-lab component.",
      desc:"Lab reports reinforce the theory by exposure to real thermodynamic systems. Split into a pre-lab (submitted to the instructor at the start of each lab session) and a post-lab (submitted on Canvas 7 calendar days after the lab). Each of the three labs is worth 6.66%. Assesses learning outcomes 1–4.",
      study:[
        "Prepare the pre-lab before attending — it must be handed in at the start of the session.",
        "Cooling Tower: steady-flow energy and mass balances on moist air and water.",
        "Air Conditioning: refrigeration / psychrometric behaviour of the vapour-compression cycle.",
        "Jet Engine: gas-power (Brayton / turbojet) energy analysis and thrust.",
        "Record data carefully with units and uncertainty; present a clear, correct report."
      ],
      weeks:[3,8],
      related:[{label:"Control volumes (Topic 3)",href:"week-03.html"},{label:"Refrigeration (Topic 8)",href:"week-08.html"},{label:"Gas power (Topic 7)",href:"week-07.html"}]},

    {id:"a-quiz", name:"Mid-semester Quiz", type:"Individual quiz", weight:"40%",
      weekLabel:"Thu 8 Oct · Week 7 · 12:00 · BAG01", due:"2026-10-08", dueWeek:7, dueOffsetDays:3,
      covers:"Basic thermodynamics: the 1st and 2nd laws and simple applications (Topics 1–5).",
      desc:"Thursday 8 October, starting 12:00 (arrive 5 min early) in BAG01 — 110 minutes, in the Lectorial slot. Restricted open book: you may bring a study-aid of 4 double-sided A4 pages. Formula sheets are NOT provided (put them in your study-aid); thermodynamic tables ARE provided. Structure: Q1 short answers on the entire course, Q2 closed system, Q3 open system, Q4 analysis. Marked on correct numerical answers and units, correct identification and modification of formulas, and correct use of the tables. Assesses learning outcomes 1–2. (Note: the Canvas calendar entry is dated 28 Sep, but the assignment's own description gives 8 Oct — which matches the Week 7 lectorial and the course outline.)",
      study:[
        "Build your 4-page study-aid early — the formula sheet is not supplied, so copy it in.",
        "Energy, work, heat and the closed-system energy balance (Topic 1) — this is Q2.",
        "Control-volume mass and energy balances for the steady-flow devices (Topic 3) — this is Q3.",
        "Reading and interpolating the property tables; quality and the ideal-gas model (Topic 2).",
        "Kelvin–Planck / Clausius statements, Carnot limits on efficiency and COP (Topic 4).",
        "Entropy: TdS relations, entropy balance and isentropic efficiencies (Topic 5).",
        "Work the practice quiz and only check the solutions after attempting it."
      ],
      weeks:[1,2,3,4,5],
      related:[{label:"Energy balance (closed)",href:"equations.html#eq-energy-closed"},{label:"SFEE",href:"equations.html#eq-sfee"},{label:"Carnot efficiency",href:"equations.html#eq-carnot-efficiency"},{label:"Entropy (Topic 5)",href:"week-05.html"}]},

    {id:"a-exam", name:"Thermodynamic Applications Exam", type:"Final exam", weight:"40%",
      weekLabel:"Formal exam period", dueWeek:14, dueOffsetDays:0,
      covers:"The entire course, focusing on the applied cycles (Topics 6–8) built on the fundamentals.",
      desc:"A comprehensive exam held during the formal exam period, covering all course content with emphasis on the power, refrigeration and heat-pump applications. Assesses learning outcomes 1–2.",
      study:[
        "Vapour power: analyse each Rankine component, find thermal efficiency and back-work ratio, and the effect of superheat/reheat and boiler/condenser pressure (Topic 6).",
        "Gas power: air-standard Otto, Diesel and Dual cycles; compression and cut-off ratios; Brayton and jet propulsion (Topic 7).",
        "Refrigeration and heat pumps: vapour-compression and gas cycles, COP (Topic 8).",
        "Be fluent with the tables, isentropic efficiencies and the second-law limits from the first half."
      ],
      weeks:[7,8,9],
      related:[{label:"Rankine (Topic 6)",href:"week-06.html"},{label:"Gas power (Topic 7)",href:"week-07.html"},{label:"Refrigeration (Topic 8)",href:"week-08.html"},{label:"Isentropic efficiency",href:"equations.html#eq-turbine-eff"}]}
  ]
};
