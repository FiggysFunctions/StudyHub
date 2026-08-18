/* ============================================================
   MECH3780 — Fluid Mechanics 2 and CFD   ·  SUBJECT DATA FILE
   ------------------------------------------------------------
   THIS is the file you edit most. Everything below feeds the
   navigation, search, equations page, glossary, assessments and
   dashboard automatically. Write maths as normal LaTeX inside the
   R`...` raw strings (single backslashes — no escaping needed).

   PARTIAL — built 18 Aug 2026 from the material released so far:
   Weeks 1, 2, 4, 5 and 7. Weeks 3, 6 and 8–12 have not been
   posted yet; add them the same way as the released material
   lands (copy _template.html, then register the page below).
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  meta:{
    code:"MECH3780",
    title:"Fluid Mechanics 2 and CFD",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 2, 2026",
    coordinator:"Dr Tuyen Nguyen",
    text:"White — Fluid Mechanics (chapters 6, 7, 9 and 11 are the ones this course follows)",
    weekOneMonday:"2026-08-17",  // Week 1 begins 17 Aug 2026
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
     WEEKLY CONTENT PAGES — only the released weeks are here.
     ========================================================= */
  pages:[
    {
      f:"week-01.html", week:1,
      t:"Turbomachinery 1 — Pumps",
      summary:"Classifying fluid machines into positive-displacement and dynamic pumps and comparing their performance envelopes; the centrifugal pump and how it converts velocity to pressure; net head, water power and the four efficiencies; elementary pump theory from the angular-momentum theorem, velocity triangles and the Euler head; the effect of blade angle; performance curves and the best efficiency point; cavitation and net positive-suction head; and the dimensionless similarity rules.",
      keywords:"turbomachinery pump positive displacement PDP reciprocating rotary gear lobe screw peristaltic dynamic pump centrifugal radial axial mixed flow impeller eye diffuser scroll volute net head water power brake horsepower efficiency volumetric hydraulic mechanical euler pump theory angular momentum velocity triangle blade angle backward curved forward curved shutoff head performance curve best efficiency point BEP cavitation vapour pressure NPSH net positive suction head similarity rules affinity laws dimensionless specific speed",
      related:[
        {type:"eq", label:"Net head & water power",     href:"equations.html#eq-pump-head"},
        {type:"eq", label:"Pump efficiencies",          href:"equations.html#eq-pump-eff"},
        {type:"eq", label:"Euler turbomachine eqn",     href:"equations.html#eq-euler-turbo"},
        {type:"eq", label:"Euler head",                 href:"equations.html#eq-euler-head"},
        {type:"eq", label:"Net positive-suction head",  href:"equations.html#eq-npsh"},
        {type:"eq", label:"Similarity rules",           href:"equations.html#eq-similarity"},
        {type:"def",label:"Centrifugal pump",           href:"glossary.html#g-centrifugal"},
        {type:"def",label:"Best efficiency point",      href:"glossary.html#g-bep"},
        {type:"def",label:"Cavitation",                 href:"glossary.html#g-cavitation"},
        {type:"flag",label:"Quiz 1: Fluids A (W3)",     href:"assessments.html#a-quiz1"}
      ]
    },
    {
      f:"week-02.html", week:2,
      t:"Turbomachinery 2 — Systems &amp; Turbines",
      summary:"Putting a pump into a circuit: the system curve, finding the operating point where pump and system heads match, and the two ways of controlling a pump — throttling the system or changing its speed. Pumps combined in series (heads add) and in parallel (flows add), and why the combination never simply doubles. Then turbines: reaction versus impulse machines, Francis and Kaplan runners, and the force exerted by a fluid jet on a plate or bucket.",
      keywords:"pump system matching system curve operating point duty point static head friction head loss darcy weisbach controlling pumps throttling valve speed control variable speed affinity pumps in series parallel head addition flow addition turbine reaction impulse francis kaplan pelton runner nozzle jet force on plate momentum hydropower reservoir penstock",
      related:[
        {type:"eq", label:"System curve",               href:"equations.html#eq-system-curve"},
        {type:"eq", label:"Pumps in series & parallel", href:"equations.html#eq-pumps-combined"},
        {type:"eq", label:"Jet force on a plate",       href:"equations.html#eq-jet-force"},
        {type:"def",label:"Operating point",            href:"glossary.html#g-operating-point"},
        {type:"def",label:"Reaction turbine",           href:"glossary.html#g-reaction-turbine"},
        {type:"def",label:"Impulse turbine",            href:"glossary.html#g-impulse-turbine"},
        {type:"flag",label:"Quiz 1: Fluids A (W3)",     href:"assessments.html#a-quiz1"}
      ]
    },
    {
      f:"week-04.html", week:4,
      t:"Compressible Flow",
      summary:"When density changes matter (roughly Ma > 0.3) the energy equation and equation of state join continuity and momentum, so four equations must be solved together. This week builds the thermodynamic toolkit — ideal gas, internal energy and enthalpy, entropy and the isentropic relations — then derives the speed of sound and the Mach number, stagnation and sonic reference states, isentropic flow through area changes with choking and the converging-diverging nozzle, the effects of friction (Fanno) and heat transfer (Rayleigh), and normal shock waves.",
      keywords:"compressible flow density change mach number speed of sound ideal gas equation of state internal energy first law enthalpy specific heat ratio entropy isentropic adiabatic reversible stagnation enthalpy stagnation temperature pressure density sonic critical properties asterisk area mach relation choking choked flow converging diverging nozzle laval throat back pressure fanno flow rayleigh flow friction heat transfer normal shock wave irreversible entropy increase supersonic subsonic",
      related:[
        {type:"eq", label:"Speed of sound",             href:"equations.html#eq-speed-sound"},
        {type:"eq", label:"Mach number",                href:"equations.html#eq-mach"},
        {type:"eq", label:"Stagnation relations",       href:"equations.html#eq-stagnation"},
        {type:"eq", label:"Isentropic relations",       href:"equations.html#eq-isentropic"},
        {type:"eq", label:"Area–Mach relation",         href:"equations.html#eq-area-mach"},
        {type:"eq", label:"Sonic (critical) values",    href:"equations.html#eq-critical"},
        {type:"def",label:"Mach number",                href:"glossary.html#g-mach"},
        {type:"def",label:"Stagnation state",           href:"glossary.html#g-stagnation"},
        {type:"def",label:"Choked flow",                href:"glossary.html#g-choked"},
        {type:"def",label:"Normal shock",               href:"glossary.html#g-shock"},
        {type:"flag",label:"Quiz 2: Fluids B (W6)",     href:"assessments.html#a-quiz2"}
      ]
    },
    {
      f:"week-05.html", week:5,
      t:"Turbulent &amp; Wall-Bounded Flows",
      summary:"Turbulence handled the engineering way: Reynolds' time-averaging splits every variable into a mean plus a fluctuation, which leaves the Reynolds stresses as the price of averaging and creates the closure problem. Wall-bounded flows then organise into layers — the viscous sublayer, the logarithmic overlap layer and the outer defect layer — giving the law of the wall that solves nearly every turbulent wall problem. Applied to turbulent pipe flow and to the flat-plate boundary layer, with momentum and displacement thickness, skin friction and drag.",
      keywords:"turbulence turbulent flow wall bounded pipe channel boundary layer reynolds time averaging mean fluctuation reynolds stress closure problem eddy viscosity mixing length prandtl wall shear stress friction velocity law of the wall viscous sublayer logarithmic overlap layer velocity defect law karman constant turbulent pipe flow friction factor moody blasius boundary layer thickness momentum thickness displacement thickness shape factor skin friction coefficient drag coefficient flat plate laminar turbulent transition",
      related:[
        {type:"eq", label:"Reynolds decomposition",     href:"equations.html#eq-reynolds-decomp"},
        {type:"eq", label:"Reynolds stress",            href:"equations.html#eq-reynolds-stress"},
        {type:"eq", label:"Friction velocity",          href:"equations.html#eq-friction-velocity"},
        {type:"eq", label:"Law of the wall",            href:"equations.html#eq-law-wall"},
        {type:"eq", label:"Boundary-layer thickness",   href:"equations.html#eq-bl-thickness"},
        {type:"eq", label:"Momentum integral",          href:"equations.html#eq-momentum-integral"},
        {type:"def",label:"Reynolds stress",            href:"glossary.html#g-reynolds-stress"},
        {type:"def",label:"Friction velocity",          href:"glossary.html#g-friction-velocity"},
        {type:"def",label:"Boundary layer",             href:"glossary.html#g-boundary-layer"},
        {type:"flag",label:"Quiz 2: Fluids B (W6)",     href:"assessments.html#a-quiz2"}
      ]
    },
    {
      f:"week-07.html", week:7,
      t:"Introduction to CFD with ANSYS Fluent",
      summary:"What a CFD solver actually does: discretise the domain into finite control volumes and solve the general transport equation — unsteady, convection, diffusion and generation terms — for mass, momentum, energy and species on every cell. Then the five-step methodology used in this course: set the goal, pre-process (geometry and mesh), set physics and solver settings, compute to convergence, post-process, and validate. Ends with the guided walkthrough of a first Fluent simulation — turbulent air flow in a pipe.",
      keywords:"computational fluid dynamics CFD ansys fluent workbench designmodeler mesh setup solution CFD-post finite volume method control volume discretisation transport equation unsteady convection diffusion generation continuity navier stokes energy species chemical reaction methodology pre-processing geometry simplification symmetry periodicity mesh resolution gradients tetrahedron hexahedron prism boundary conditions named selection initialisation iterations convergence residuals imbalance monitor point mesh independence sensitivity study validation verification contours vectors streamlines",
      related:[
        {type:"eq", label:"General transport equation", href:"equations.html#eq-transport"},
        {type:"eq", label:"Pipe Reynolds number",       href:"equations.html#eq-reynolds-pipe"},
        {type:"def",label:"Finite volume method",       href:"glossary.html#g-fvm"},
        {type:"def",label:"Convergence & residuals",    href:"glossary.html#g-convergence"},
        {type:"def",label:"Mesh independence",          href:"glossary.html#g-mesh-independence"},
        {type:"flag",label:"Quiz 3: Basic CFD (W9)",    href:"assessments.html#a-quiz3"}
      ]
    }
  ],

  /* =========================================================
     EQUATIONS
     ========================================================= */
  equations:[
    /* ---- Turbomachinery ---- */
    {id:"eq-pump-head", cat:"Turbomachinery", name:"Net head & water power",
     latex:R`H = \left(\frac{p}{\rho g} + \frac{V^2}{2g} + z\right)_2 - \left(\frac{p}{\rho g} + \frac{V^2}{2g} + z\right)_1 \qquad P_w = \rho g Q H`,
     desc:"The net head is the rise in Bernoulli head across the pump, and the power delivered to the fluid is specific weight × discharge × net head. If the inlet and outlet pipes are the same size and at the same level, the velocity and elevation terms cancel and H reduces to the pressure rise over ρg.",
     vars:[{sym:R`H`,mean:"net head (m)"},{sym:R`P_w`,mean:"water power (W)"},{sym:R`Q`,mean:"discharge (m³/s)"}],
     links:[{label:"Week 1",href:"week-01.html"}],
     keywords:"net head water power bernoulli pressure rise discharge specific weight"},

    {id:"eq-pump-eff", cat:"Turbomachinery", name:"Pump efficiencies",
     latex:R`\eta = \frac{P_w}{bhp} = \eta_v\,\eta_h\,\eta_m`,
     desc:"Total efficiency is water power over brake horsepower — always less than one. It factors into volumetric efficiency (leakage past the impeller), hydraulic efficiency (friction and shock losses in the flow) and mechanical efficiency (bearing and seal losses).",
     vars:[{sym:R`bhp`,mean:"brake horsepower — shaft power in"},{sym:R`\eta_v,\eta_h,\eta_m`,mean:"volumetric / hydraulic / mechanical efficiency"}],
     links:[{label:"Week 1",href:"week-01.html"}],
     keywords:"efficiency total volumetric hydraulic mechanical brake horsepower shaft power losses"},

    {id:"eq-euler-turbo", cat:"Turbomachinery", name:"Euler turbomachine equation",
     latex:R`T = \rho Q\,(r_2 V_{t2} - r_1 V_{t1}) \qquad P = \omega T = \rho Q\,(u_2 V_{t2} - u_1 V_{t1})`,
     desc:"Applying the angular-momentum theorem to a control volume around the impeller. The torque is set by the change in angular momentum of the flow between inlet and exit, where Vt is the absolute circumferential (tangential) velocity component.",
     vars:[{sym:R`T`,mean:"shaft torque (N·m)"},{sym:R`V_{t}`,mean:"tangential velocity component"},{sym:R`u = \omega r`,mean:"blade tip speed"},{sym:R`\omega`,mean:"shaft angular velocity"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Velocity triangle",href:"glossary.html#g-velocity-triangle"}],
     keywords:"euler turbomachine angular momentum torque tangential velocity tip speed impeller control volume"},

    {id:"eq-euler-head", cat:"Turbomachinery", name:"Euler head & the velocity triangle",
     latex:R`H = \frac{u_2V_{t2} - u_1V_{t1}}{g} \qquad Q = 2\pi r_1 b_1 V_{n1} = 2\pi r_2 b_2 V_{n2} \qquad V_{t2} = u_2 - V_{n2}\cot\beta_2`,
     desc:"The ideal head from the Euler equation, with the continuity relation through the impeller (b is blade width) and the tangential component read off the exit velocity triangle. At the design point the flow enters radially, so α₁ = 90° and Vt1 = 0, which simplifies everything.",
     vars:[{sym:R`b_1,b_2`,mean:"blade widths at inlet / exit"},{sym:R`V_n`,mean:"normal (radial) velocity component"},{sym:R`\beta_2`,mean:"exit blade angle"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Euler turbomachine eqn",href:"equations.html#eq-euler-turbo"}],
     keywords:"euler head velocity triangle blade width normal radial component design point blade angle cotangent"},

    {id:"eq-blade-angle", cat:"Turbomachinery", name:"Effect of blade angle on head",
     latex:R`H = \frac{u_2^2}{g} - \frac{u_2\cot\beta_2}{2\pi r_2 b_2\,g}\,Q`,
     desc:"Head falls linearly with discharge from a shutoff value of u₂²/g. The slope is negative for backward-curved blades (β₂ < 90°) and positive for forward-curved blades — accurate only at low flow rates, but it explains the shape of real pump curves.",
     vars:[{sym:R`u_2 = \omega r_2`,mean:"exit blade-tip speed"},{sym:R`\beta_2`,mean:"exit blade angle"},{sym:R`u_2^2/g`,mean:"shutoff head"}],
     links:[{label:"Week 1",href:"week-01.html"}],
     keywords:"blade angle head discharge linear shutoff backward curved forward curved slope pump curve"},

    {id:"eq-npsh", cat:"Turbomachinery", name:"Net positive-suction head",
     latex:R`NPSH = \frac{p_i}{\rho g} + \frac{V_i^2}{2g} - \frac{p_v}{\rho g} = \frac{p_a}{\rho g} - z_i - h_{f} - \frac{p_v}{\rho g}`,
     desc:"The head available at the pump inlet above the liquid's vapour pressure. The first form is what the pump sees; the second comes from Bernoulli back to the atmosphere and is what the installation delivers. Position the pump so the available NPSH exceeds the value the manufacturer requires, or it will cavitate.",
     vars:[{sym:R`p_v`,mean:"vapour pressure of the liquid"},{sym:R`z_i`,mean:"suction lift (height above the free surface)"},{sym:R`h_f`,mean:"friction head loss in the suction line"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Cavitation",href:"glossary.html#g-cavitation"}],
     keywords:"NPSH net positive suction head cavitation vapour pressure suction lift friction loss inlet available required"},

    {id:"eq-similarity", cat:"Turbomachinery", name:"Similarity (affinity) rules",
     latex:R`\frac{Q_2}{Q_1} = \frac{n_2}{n_1}\!\left(\frac{D_2}{D_1}\right)^{\!3} \qquad \frac{H_2}{H_1} = \left(\frac{n_2}{n_1}\right)^{\!2}\!\left(\frac{D_2}{D_1}\right)^{\!2} \qquad \frac{P_2}{P_1} = \frac{\rho_2}{\rho_1}\!\left(\frac{n_2}{n_1}\right)^{\!3}\!\left(\frac{D_2}{D_1}\right)^{\!5}`,
     desc:"For geometrically similar (homologous) pumps, dimensional analysis collapses performance onto these scaling laws. They let a tested pump's curve be rescaled to a different size or speed — the basis of manufacturers' pump families.",
     vars:[{sym:R`n`,mean:"rotational speed"},{sym:R`D`,mean:"impeller diameter"},{sym:R`\rho`,mean:"fluid density"}],
     links:[{label:"Week 1",href:"week-01.html"}],
     keywords:"similarity affinity laws homologous scaling dimensional analysis speed diameter density pump family"},

    {id:"eq-system-curve", cat:"Turbomachinery", name:"System curve & operating point",
     latex:R`H_{sys}(Q) = \Delta z + \left(f\frac{L}{D} + \sum K\right)\frac{V^2}{2g} \qquad H_{pump}(Q) = H_{sys}(Q)`,
     desc:"The head the circuit demands is a static lift plus friction and minor losses, which grow roughly as Q². The pump settles where its own curve crosses this system curve — the operating (duty) point, fixing Q, H, efficiency and power together.",
     vars:[{sym:R`\Delta z`,mean:"static lift"},{sym:R`f`,mean:"Darcy friction factor"},{sym:R`\sum K`,mean:"minor loss coefficients"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Operating point",href:"glossary.html#g-operating-point"}],
     keywords:"system curve operating duty point static lift friction minor losses darcy weisbach intersection matching"},

    {id:"eq-pumps-combined", cat:"Turbomachinery", name:"Pumps in series & parallel",
     latex:R`\text{Series: } Q = Q_1 = Q_2,\ \ H = H_1 + H_2 \qquad \text{Parallel: } H = H_1 = H_2,\ \ Q = Q_1 + Q_2`,
     desc:"Series pumping raises head at the same flow; parallel pumping raises flow at the same head. Because the system curve steepens with flow, the combined machine never delivers twice the duty — the gain is always less than the naive sum.",
     vars:[{sym:R`H_1,H_2`,mean:"individual pump heads"},{sym:R`Q_1,Q_2`,mean:"individual pump flows"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"pumps in series parallel head addition flow addition combined curve system interaction diminishing"},

    {id:"eq-jet-force", cat:"Turbomachinery", name:"Force of a jet on a moving blade",
     latex:R`F = \rho Q\,(V_j - u)(1 - \cos\theta) \qquad P = F\,u`,
     desc:"The momentum theorem applied to an impulse turbine bucket: the jet is turned through angle θ relative to a blade moving at speed u. Power is maximised when the bucket runs at about half the jet speed, and θ → 180° extracts the most momentum.",
     vars:[{sym:R`V_j`,mean:"jet velocity"},{sym:R`u`,mean:"blade speed"},{sym:R`\theta`,mean:"deflection angle"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Impulse turbine",href:"glossary.html#g-impulse-turbine"}],
     keywords:"jet force plate bucket momentum impulse turbine pelton deflection angle blade speed power maximum"},

    /* ---- Compressible flow: thermodynamics ---- */
    {id:"eq-ideal-gas", cat:"Compressible flow — thermodynamics", name:"Ideal gas & specific heats",
     latex:R`p = \rho R T \qquad c_p - c_v = R \qquad k = \frac{c_p}{c_v} \qquad c_p = \frac{kR}{k-1}`,
     desc:"The equation of state and the specific-heat relations underpinning everything in compressible flow. For air R = 287 J/kg·K and k = 1.4; k decreases slowly with temperature and lies between 1.0 and 1.7 for common gases.",
     vars:[{sym:R`R`,mean:"gas constant (J/kg·K)"},{sym:R`k`,mean:"specific-heat ratio"},{sym:R`c_p,c_v`,mean:"specific heats"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"ideal gas equation of state gas constant specific heat ratio air 287 1.4 mayer relation"},

    {id:"eq-first-law", cat:"Compressible flow — thermodynamics", name:"First law & enthalpy",
     latex:R`du = \delta q - \delta w \qquad h = u + \frac{p}{\rho} \qquad du = c_v\,dT \qquad dh = c_p\,dT`,
     desc:"Internal energy rises with heat added and falls with work done by the gas. Enthalpy bundles internal energy with the flow-work term; for a perfect gas both depend on temperature alone.",
     vars:[{sym:R`u`,mean:"specific internal energy"},{sym:R`h`,mean:"specific enthalpy"},{sym:R`q,w`,mean:"heat added / work done"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"first law internal energy enthalpy heat work flow work perfect gas temperature"},

    {id:"eq-entropy", cat:"Compressible flow — thermodynamics", name:"Entropy change",
     latex:R`T\,ds = dh - \frac{dp}{\rho} \qquad s_2 - s_1 = c_p\ln\frac{T_2}{T_1} - R\ln\frac{p_2}{p_1} = c_v\ln\frac{T_2}{T_1} - R\ln\frac{\rho_2}{\rho_1}`,
     desc:"The Gibbs relation and its integrated forms for a perfect gas. Entropy is what distinguishes an isentropic process from a merely adiabatic one — a normal shock is adiabatic but far from isentropic.",
     vars:[{sym:R`s`,mean:"specific entropy (J/kg·K)"},{sym:R`T,p,\rho`,mean:"temperature, pressure, density"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"entropy gibbs relation tds perfect gas logarithm adiabatic isentropic irreversible"},

    {id:"eq-isentropic", cat:"Compressible flow — thermodynamics", name:"Isentropic relations",
     latex:R`\frac{p}{\rho^k} = \text{const} \qquad \frac{p_2}{p_1} = \left(\frac{\rho_2}{\rho_1}\right)^{\!k} = \left(\frac{T_2}{T_1}\right)^{\!k/(k-1)}`,
     desc:"For an adiabatic and reversible (hence isentropic) process in a perfect gas, pressure, density and temperature are locked together by these power laws — the workhorse relations of nozzle analysis.",
     vars:[{sym:R`k`,mean:"specific-heat ratio"},{sym:R`p,\rho,T`,mean:"pressure, density, temperature"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"isentropic relations adiabatic reversible power law pressure density temperature perfect gas nozzle"},

    /* ---- Compressible flow: Mach & nozzles ---- */
    {id:"eq-speed-sound", cat:"Compressible flow — Mach & nozzles", name:"Speed of sound",
     latex:R`a = \sqrt{\left(\frac{\partial p}{\partial \rho}\right)_{\!s}} = \sqrt{kRT}`,
     desc:"The rate at which an infinitesimal pressure pulse propagates through a still fluid — a thermodynamic property. Derived from continuity and momentum across a weak wave; frictional effects stay confined inside the wave, so the process is isentropic. For air at 20 °C, a ≈ 343 m/s.",
     vars:[{sym:R`a`,mean:"speed of sound (m/s)"},{sym:R`k`,mean:"specific-heat ratio"},{sym:R`T`,mean:"absolute temperature (K)"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"speed of sound pressure pulse wave propagation isentropic thermodynamic property air temperature"},

    {id:"eq-mach", cat:"Compressible flow — Mach & nozzles", name:"Mach number & flow regimes",
     latex:R`Ma = \frac{V}{a}`,
     desc:"The ratio of flow speed to local sound speed, and the parameter that classifies the flow: Ma < 0.3 compressibility is negligible; 0.3 < Ma < 1 subsonic compressible; Ma ≈ 1 transonic; Ma > 1 supersonic; Ma > 5 hypersonic.",
     vars:[{sym:R`V`,mean:"flow velocity"},{sym:R`a`,mean:"local speed of sound"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Mach number",href:"glossary.html#g-mach"}],
     keywords:"mach number regime subsonic transonic supersonic hypersonic incompressible threshold 0.3"},

    {id:"eq-stagnation", cat:"Compressible flow — Mach & nozzles", name:"Stagnation (total) relations",
     latex:R`h_0 = h + \tfrac12 V^2 \qquad \frac{T_0}{T} = 1 + \frac{k-1}{2}Ma^2 \qquad \frac{p_0}{p} = \left(1 + \frac{k-1}{2}Ma^2\right)^{\!k/(k-1)}`,
     desc:"Stagnation properties are what the fluid would reach if brought to rest. The temperature ratio needs only adiabatic flow; the pressure and density ratios additionally require isentropic flow — which is exactly why stagnation pressure drops across a shock while stagnation temperature does not.",
     vars:[{sym:R`h_0`,mean:"stagnation enthalpy"},{sym:R`T_0,p_0`,mean:"stagnation temperature / pressure"},{sym:R`Ma`,mean:"Mach number"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Stagnation state",href:"glossary.html#g-stagnation"}],
     keywords:"stagnation total enthalpy temperature pressure density adiabatic isentropic brought to rest shock loss"},

    {id:"eq-critical", cat:"Compressible flow — Mach & nozzles", name:"Sonic (critical) values",
     latex:R`\frac{T^*}{T_0} = \frac{2}{k+1} \qquad \frac{p^*}{p_0} = \left(\frac{2}{k+1}\right)^{\!k/(k-1)} \qquad V^* = a^* = \left(\frac{2k}{k+1}RT_0\right)^{\!1/2}`,
     desc:"The reference conditions where Ma = 1, marked with an asterisk. For air (k = 1.4) the critical pressure ratio is about 0.528 — the back-pressure ratio at which a converging nozzle first chokes.",
     vars:[{sym:R`T^*,p^*,a^*`,mean:"sonic temperature, pressure, sound speed"},{sym:R`T_0,p_0`,mean:"stagnation values"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Choked flow",href:"glossary.html#g-choked"}],
     keywords:"critical sonic values asterisk throat mach one pressure ratio 0.528 choking reference"},

    {id:"eq-area-mach", cat:"Compressible flow — Mach & nozzles", name:"Area–Mach relation",
     latex:R`\frac{A}{A^*} = \frac{1}{Ma}\left[\frac{1 + \tfrac12(k-1)Ma^2}{\tfrac12(k+1)}\right]^{\frac{k+1}{2(k-1)}}`,
     desc:"How duct area must vary to change Mach number in isentropic flow. Subsonically a contraction accelerates the flow; supersonically an expansion does — so reaching supersonic speed requires a converging-diverging (de Laval) nozzle with sonic conditions at the throat.",
     vars:[{sym:R`A`,mean:"local duct area"},{sym:R`A^*`,mean:"sonic throat area"},{sym:R`Ma`,mean:"local Mach number"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"area mach relation duct throat converging diverging de laval nozzle accelerate supersonic isentropic"},

    {id:"eq-choked", cat:"Compressible flow — Mach & nozzles", name:"Choked mass flow",
     latex:R`\dot m_{max} = \rho^* A^* V^* = A^* p_0 \left(\frac{k}{RT_0}\right)^{1/2}\!\left(\frac{2}{k+1}\right)^{\frac{k+1}{2(k-1)}}`,
     desc:"Once the throat reaches Ma = 1 the duct is choked: lowering the back pressure further cannot increase the mass flow. The maximum flow depends only on the throat area and the upstream stagnation state.",
     vars:[{sym:R`\dot m`,mean:"mass flow rate (kg/s)"},{sym:R`A^*`,mean:"throat area"},{sym:R`p_0,T_0`,mean:"stagnation pressure / temperature"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Choked flow",href:"glossary.html#g-choked"}],
     keywords:"choked mass flow maximum throat back pressure limit stagnation nozzle metering"},

    {id:"eq-shock", cat:"Compressible flow — Mach & nozzles", name:"Normal shock relations",
     latex:R`Ma_2^2 = \frac{1 + \tfrac12(k-1)Ma_1^2}{k\,Ma_1^2 - \tfrac12(k-1)} \qquad \frac{p_2}{p_1} = \frac{1}{k+1}\big[2k\,Ma_1^2 - (k-1)\big]`,
     desc:"Across a normal shock — a region only micrometres thick — the flow jumps from supersonic to subsonic. Pressure, temperature and density rise, velocity and Mach number fall. The process is adiabatic but irreversible, so entropy rises and stagnation pressure is lost; Bernoulli cannot be applied across it.",
     vars:[{sym:R`Ma_1`,mean:"upstream (supersonic) Mach number"},{sym:R`Ma_2`,mean:"downstream (subsonic) Mach number"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Normal shock",href:"glossary.html#g-shock"}],
     keywords:"normal shock wave relations supersonic subsonic entropy increase irreversible stagnation pressure loss thin"},

    /* ---- Turbulence ---- */
    {id:"eq-reynolds-decomp", cat:"Turbulence & boundary layers", name:"Reynolds decomposition",
     latex:R`u = \bar u + u' \qquad \bar u = \frac{1}{T}\int_0^T u\,dt \qquad \overline{u'} = 0,\ \ \overline{u'^2} \neq 0`,
     desc:"Every instantaneous quantity is split into a time mean plus a fluctuation, averaged over a period longer than any significant fluctuation. The fluctuation averages to zero, but its mean square does not — that is the measure of turbulence intensity.",
     vars:[{sym:R`\bar u`,mean:"time-mean velocity"},{sym:R`u'`,mean:"fluctuating component"},{sym:R`T`,mean:"averaging period"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"reynolds decomposition time averaging mean fluctuation intensity mean square random turbulent"},

    {id:"eq-reynolds-stress", cat:"Turbulence & boundary layers", name:"Reynolds stress & total shear",
     latex:R`\tau = \mu\frac{d\bar u}{dy} - \rho\,\overline{u'v'} = (\mu + \mu_t)\frac{d\bar u}{dy}`,
     desc:"Time-averaging the momentum equation leaves extra terms that act like stresses — the Reynolds stresses. They are unknowns, which is the closure problem; modelling them with an eddy viscosity μt (or Prandtl's mixing length) is what turbulence modelling means.",
     vars:[{sym:R`-\rho\overline{u'v'}`,mean:"Reynolds shear stress"},{sym:R`\mu_t`,mean:"eddy viscosity"},{sym:R`\mu`,mean:"molecular viscosity"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Reynolds stress",href:"glossary.html#g-reynolds-stress"}],
     keywords:"reynolds stress closure problem eddy viscosity mixing length prandtl turbulence modelling shear"},

    {id:"eq-friction-velocity", cat:"Turbulence & boundary layers", name:"Friction velocity & wall units",
     latex:R`u^* = \sqrt{\frac{\tau_w}{\rho}} \qquad u^+ = \frac{u}{u^*} \qquad y^+ = \frac{y\,u^*}{\nu}`,
     desc:"The wall shear stress defines a velocity scale, and non-dimensionalising velocity and distance by it collapses turbulent wall data from every flow onto one curve. Wall units are the natural coordinates of near-wall turbulence — and what a CFD mesh must resolve.",
     vars:[{sym:R`u^*`,mean:"friction velocity (m/s)"},{sym:R`\tau_w`,mean:"wall shear stress (Pa)"},{sym:R`\nu`,mean:"kinematic viscosity"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Friction velocity",href:"glossary.html#g-friction-velocity"}],
     keywords:"friction velocity wall units y plus u plus shear stress non-dimensional collapse near wall mesh"},

    {id:"eq-law-wall", cat:"Turbulence & boundary layers", name:"Law of the wall & log overlap layer",
     latex:R`u^+ = y^+ \quad (y^+ < 5) \qquad u^+ = \frac{1}{\kappa}\ln y^+ + B \quad (y^+ \gtrsim 30)`,
     desc:"Near the wall viscosity dominates and the profile is linear — the viscous sublayer. Far enough out, the logarithmic overlap law takes over, with von Kármán constant κ ≈ 0.41 and B ≈ 5.0 for a smooth wall. Between y⁺ ≈ 5 and 30 is the buffer layer. This structure solves nearly every turbulent wall problem.",
     vars:[{sym:R`\kappa`,mean:"von Kármán constant ≈ 0.41"},{sym:R`B`,mean:"smooth-wall constant ≈ 5.0"},{sym:R`y^+`,mean:"wall distance in wall units"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"law of the wall viscous sublayer buffer logarithmic overlap layer von karman constant smooth wall defect"},

    {id:"eq-bl-thickness", cat:"Turbulence & boundary layers", name:"Flat-plate boundary-layer thickness",
     latex:R`\frac{\delta}{x} \approx \frac{5.0}{Re_x^{1/2}}\ \ (\text{laminar, Blasius}) \qquad \frac{\delta}{x} \approx \frac{0.16}{Re_x^{1/7}}\ \ (\text{turbulent})`,
     desc:"The boundary layer is where the velocity reaches 99% of the free stream. A laminar layer grows as √x, a turbulent one much faster as x^(6/7). Transition on a smooth flat plate occurs near Re_x ≈ 5×10⁵ — always check which regime applies before choosing a formula.",
     vars:[{sym:R`\delta`,mean:"boundary-layer thickness"},{sym:R`Re_x = Ux/\nu`,mean:"local Reynolds number"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Boundary layer",href:"glossary.html#g-boundary-layer"}],
     keywords:"boundary layer thickness flat plate blasius laminar turbulent transition reynolds number 99 percent"},

    {id:"eq-momentum-integral", cat:"Turbulence & boundary layers", name:"Momentum & displacement thickness",
     latex:R`\theta = \int_0^\delta \frac{u}{U}\!\left(1 - \frac{u}{U}\right)dy \qquad \delta^* = \int_0^\delta \left(1 - \frac{u}{U}\right)dy \qquad D = \rho b U^2 \theta`,
     desc:"Kármán's momentum integral: the drag on one side of a plate equals the momentum thickness times ρbU². The displacement thickness is how far the outer streamlines are pushed away by the retarded flow, and their ratio is the shape factor H = δ*/θ.",
     vars:[{sym:R`\theta`,mean:"momentum thickness"},{sym:R`\delta^*`,mean:"displacement thickness"},{sym:R`D`,mean:"drag force"},{sym:R`b`,mean:"plate width"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"momentum integral karman displacement thickness shape factor drag force streamline deflection"},

    {id:"eq-skin-friction", cat:"Turbulence & boundary layers", name:"Skin friction & drag coefficients",
     latex:R`c_f = \frac{\tau_w}{\tfrac12\rho U^2} \qquad C_D = \frac{D}{\tfrac12\rho U^2 b L} \qquad c_f \approx \frac{0.664}{Re_x^{1/2}}\ (\text{lam.}), \quad c_f \approx \frac{0.027}{Re_x^{1/7}}\ (\text{turb.})`,
     desc:"The local skin-friction coefficient non-dimensionalises the wall shear; the drag coefficient does the same for the integrated force over the plate. Turbulent layers carry far more skin friction than laminar ones at the same Reynolds number.",
     vars:[{sym:R`c_f`,mean:"local skin-friction coefficient"},{sym:R`C_D`,mean:"drag coefficient"},{sym:R`L`,mean:"plate length"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"skin friction coefficient drag coefficient wall shear laminar turbulent flat plate integrated"},

    {id:"eq-pipe-turbulent", cat:"Turbulence & boundary layers", name:"Turbulent pipe flow",
     latex:R`\tau_w = \frac{\Delta p\,R}{2L} \qquad h_f = f\,\frac{L}{D}\frac{V^2}{2g} \qquad \frac{V}{u_{max}} \approx \frac{1}{1 + 1.3\sqrt{f}}`,
     desc:"A force balance on a cylindrical plug relates wall shear to the pressure gradient. The Darcy friction factor (from the Moody chart or a correlation) gives the head loss, and the mean velocity sits close to the centreline value — much flatter than the laminar parabola.",
     vars:[{sym:R`\tau_w`,mean:"wall shear stress"},{sym:R`f`,mean:"Darcy friction factor"},{sym:R`u_{max}`,mean:"centreline velocity"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"turbulent pipe flow wall shear force balance darcy friction factor moody head loss mean centreline velocity"},

    /* ---- CFD ---- */
    {id:"eq-transport", cat:"Computational fluid dynamics", name:"General transport equation",
     latex:R`\underbrace{\frac{\partial(\rho\phi)}{\partial t}}_{\text{unsteady}} + \underbrace{\nabla\!\cdot\!(\rho \mathbf V \phi)}_{\text{convection}} = \underbrace{\nabla\!\cdot\!(\Gamma\nabla\phi)}_{\text{diffusion}} + \underbrace{S_\phi}_{\text{generation}}`,
     desc:"The single equation a finite-volume solver discretises for every conserved quantity: φ = 1 gives continuity, φ = u, v, w give the momentum equations, φ = h the energy equation, and so on. Fluent integrates it over each cell and solves the resulting algebraic system iteratively.",
     vars:[{sym:R`\phi`,mean:"transported variable"},{sym:R`\Gamma`,mean:"diffusion coefficient"},{sym:R`S_\phi`,mean:"source term"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Finite volume method",href:"glossary.html#g-fvm"}],
     keywords:"transport equation unsteady convection diffusion source generation finite volume discretisation continuity momentum energy species"},

    {id:"eq-reynolds-pipe", cat:"Computational fluid dynamics", name:"Pipe Reynolds number",
     latex:R`Re_D = \frac{\rho V D}{\mu} \qquad Re_D \gtrsim 2300 \ \Rightarrow\ \text{turbulent}`,
     desc:"The first check before any simulation: it decides whether a turbulence model is needed at all. In the Week 7 tutorial case (air at 1 m/s through a 0.1 m pipe) Re ≈ 6850, so the flow is turbulent and a model must be selected.",
     vars:[{sym:R`V`,mean:"mean velocity"},{sym:R`D`,mean:"pipe diameter"},{sym:R`\mu`,mean:"dynamic viscosity"}],
     links:[{label:"Week 7",href:"week-07.html"}],
     keywords:"reynolds number pipe transition turbulent laminar 2300 turbulence model selection simulation setup"}
  ],

  /* =========================================================
     GLOSSARY
     ========================================================= */
  glossary:[
    {id:"g-pdp", term:"Positive-displacement pump", sym:R`PDP`,
      def:R`A pump that traps and squeezes a closed volume of fluid — piston, gear, screw, vane, peristaltic. Delivers a pulsating but nearly constant flow at almost any pressure (up to ~300 atm), largely independent of viscosity, so it is widely used for metering.`,
      see:[{label:"Week 1",href:"week-01.html"}]},
    {id:"g-dynamic-pump", term:"Dynamic pump", sym:R`—`,
      def:R`A pump with no closed volume: fast-moving blades add momentum to the fluid, which is then converted to pressure in a diffuser. Gives very high flow rates at moderate pressure rise, but high viscosity degrades it sharply.`,
      see:[{label:"Centrifugal pump",href:"glossary.html#g-centrifugal"}]},
    {id:"g-centrifugal", term:"Centrifugal pump", sym:R`—`,
      def:R`The commonest dynamic pump. Fluid enters axially through the eye, is caught by the impeller blades and flung radially outward, gaining both velocity and pressure; the surrounding scroll or diffuser then decelerates the flow and converts the remaining velocity into further pressure rise.`,
      see:[{label:"Euler head",href:"equations.html#eq-euler-head"}]},
    {id:"g-net-head", term:"Net head", sym:R`H`,
      def:R`The rise in Bernoulli head across a pump — pressure, velocity and elevation heads combined. Multiplied by \(\rho g Q\) it gives the power actually delivered to the fluid.`,
      see:[{label:"Net head & water power",href:"equations.html#eq-pump-head"}]},
    {id:"g-velocity-triangle", term:"Velocity triangle", sym:R`—`,
      def:R`The vector sum at the impeller inlet or exit of the blade tip speed \(u = \omega r\) and the relative velocity \(w\) tangent to the blade, giving the absolute velocity \(V\). Resolving it supplies the tangential component \(V_t\) that the Euler equation needs.`,
      see:[{label:"Euler turbomachine eqn",href:"equations.html#eq-euler-turbo"}]},
    {id:"g-bep", term:"Best efficiency point", sym:R`BEP`,
      def:R`The flow rate at which pump efficiency peaks, typically around \(0.6\,Q_{max}\) with a maximum of 80–90%. Efficiency is zero at both shutoff and maximum flow. A flat efficiency curve near the BEP is desirable, giving a wide range of efficient operation.`,
      see:[{label:"Week 1",href:"week-01.html"}]},
    {id:"g-shutoff", term:"Shutoff head", sym:R`u_2^2/g`,
      def:R`The head a pump develops at zero flow. Everything to the right of it on the H–Q curve falls away (backward-curved blades) or rises (forward-curved), which is what gives real pump curves their characteristic shapes.`,
      see:[{label:"Effect of blade angle",href:"equations.html#eq-blade-angle"}]},
    {id:"g-cavitation", term:"Cavitation", sym:R`—`,
      def:R`Vapour bubbles forming where the local pressure falls below the liquid's vapour pressure. Carried into a higher-pressure region they collapse violently, eroding blade surfaces. Avoided by keeping the available NPSH above the pump's required value.`,
      see:[{label:"Net positive-suction head",href:"equations.html#eq-npsh"}]},
    {id:"g-npsh", term:"NPSH", sym:R`NPSH`,
      def:R`Net positive-suction head — the head available at the pump inlet above the vapour pressure. The <em>available</em> NPSH comes from the installation (atmospheric head minus suction lift, friction and vapour pressure); the <em>required</em> NPSH comes from the manufacturer. Available must exceed required.`,
      see:[{label:"Cavitation",href:"glossary.html#g-cavitation"}]},
    {id:"g-operating-point", term:"Operating point", sym:R`—`,
      def:R`Where the pump curve crosses the system curve — the only place both the pump and the circuit are satisfied, since head and flow must simultaneously match. Fixes Q, H, efficiency and power draw.`,
      see:[{label:"System curve",href:"equations.html#eq-system-curve"}]},
    {id:"g-reaction-turbine", term:"Reaction turbine", sym:R`—`,
      def:R`A turbine whose blade passages run full, with the pressure drop occurring inside the runner. Radial, mixed and axial-flow designs (Francis, Kaplan) are dynamic devices that admit high-energy fluid and extract its momentum.`,
      see:[{label:"Impulse turbine",href:"glossary.html#g-impulse-turbine"}]},
    {id:"g-impulse-turbine", term:"Impulse turbine", sym:R`—`,
      def:R`A turbine that first converts the head into a high-velocity jet through a nozzle, which then strikes the buckets one at a time at essentially constant pressure. Suits very high heads and low flows.`,
      see:[{label:"Force of a jet",href:"equations.html#eq-jet-force"}]},
    {id:"g-mach", term:"Mach number", sym:R`Ma`,
      def:R`The ratio of flow speed to local sound speed. Below about 0.3 density changes are negligible and the flow may be treated as incompressible; above it the energy equation and equation of state must be solved alongside continuity and momentum.`,
      see:[{label:"Mach number",href:"equations.html#eq-mach"}]},
    {id:"g-speed-sound", term:"Speed of sound", sym:R`a`,
      def:R`The propagation rate of an infinitesimal pressure pulse through a still fluid, \(a=\sqrt{kRT}\) for a perfect gas — a thermodynamic property depending only on temperature. Roughly 343 m/s in air at 20 °C.`,
      see:[{label:"Speed of sound",href:"equations.html#eq-speed-sound"}]},
    {id:"g-stagnation", term:"Stagnation state", sym:R`p_0,T_0`,
      def:R`The condition the fluid would reach if decelerated to rest. Stagnation temperature is conserved in any adiabatic flow; stagnation pressure additionally requires the flow to be isentropic, so it drops across a shock while \(T_0\) does not.`,
      see:[{label:"Stagnation relations",href:"equations.html#eq-stagnation"}]},
    {id:"g-isentropic", term:"Isentropic process", sym:R`s=\text{const}`,
      def:R`Adiabatic <em>and</em> reversible. All isentropic processes are adiabatic, but not all adiabatic processes are isentropic — a normal shock is the standard counterexample.`,
      see:[{label:"Isentropic relations",href:"equations.html#eq-isentropic"}]},
    {id:"g-choked", term:"Choked flow", sym:R`Ma^*=1`,
      def:R`The condition where the throat reaches Ma = 1 and the mass flow hits its ceiling. Lowering the back pressure further changes nothing upstream — the duct cannot pass more fluid, which makes choked nozzles excellent flow meters.`,
      see:[{label:"Choked mass flow",href:"equations.html#eq-choked"}]},
    {id:"g-nozzle", term:"Converging-diverging nozzle", sym:R`—`,
      def:R`Also the de Laval nozzle. Because subsonic flow accelerates in a contraction and supersonic flow accelerates in an expansion, reaching supersonic speed requires a throat at Ma = 1 followed by a diverging section. Back pressure decides whether the expansion is smooth or terminated by a shock.`,
      see:[{label:"Area–Mach relation",href:"equations.html#eq-area-mach"}]},
    {id:"g-shock", term:"Normal shock", sym:R`—`,
      def:R`An extremely thin (micrometre-scale) region across which supersonic flow abruptly becomes subsonic. Pressure, temperature and density jump up; velocity, Mach number and stagnation pressure drop. Adiabatic but irreversible, so entropy rises and Bernoulli cannot be used across it.`,
      see:[{label:"Normal shock relations",href:"equations.html#eq-shock"}]},
    {id:"g-fanno-rayleigh", term:"Fanno & Rayleigh flow", sym:R`—`,
      def:R`Fanno flow is adiabatic duct flow with wall friction; Rayleigh flow is frictionless duct flow with heat transfer. Friction drives subsonic flow toward Ma = 1 and supersonic flow back down toward it; in Rayleigh flow the stagnation temperature changes because the process is not adiabatic.`,
      see:[{label:"Week 4",href:"week-04.html"}]},
    {id:"g-reynolds-stress", term:"Reynolds stress", sym:R`-\rho\overline{u'v'}`,
      def:R`The extra apparent stress left over when the momentum equation is time-averaged. It is far larger than viscous stress across most of a turbulent flow, and it is unknown — creating the closure problem that turbulence models exist to solve.`,
      see:[{label:"Reynolds stress",href:"equations.html#eq-reynolds-stress"}]},
    {id:"g-closure", term:"Closure problem", sym:R`—`,
      def:R`Averaging the Navier-Stokes equations introduces more unknowns (the Reynolds stresses) than equations. Every turbulence model — eddy viscosity, mixing length, k-ε and the rest — is a proposal for closing that gap.`,
      see:[{label:"Reynolds stress",href:"glossary.html#g-reynolds-stress"}]},
    {id:"g-friction-velocity", term:"Friction velocity", sym:R`u^*`,
      def:R`\(u^*=\sqrt{\tau_w/\rho}\) — the velocity scale built from the wall shear stress. Used to non-dimensionalise near-wall velocity and distance into \(u^+\) and \(y^+\), the coordinates in which all turbulent wall data collapse onto one curve.`,
      see:[{label:"Friction velocity",href:"equations.html#eq-friction-velocity"}]},
    {id:"g-law-of-wall", term:"Law of the wall", sym:R`u^+(y^+)`,
      def:R`The universal near-wall velocity profile: linear in the viscous sublayer (\(y^+<5\)), logarithmic in the overlap layer (\(y^+\gtrsim30\)), with a buffer layer between. Independent of the outer flow, which is what makes it universal — and what wall functions in CFD exploit.`,
      see:[{label:"Law of the wall",href:"equations.html#eq-law-wall"}]},
    {id:"g-boundary-layer", term:"Boundary layer", sym:R`\delta`,
      def:R`The thin region near a surface where viscosity retards the flow, conventionally bounded where the velocity reaches 99% of the free stream. Outside it the flow is nearly inviscid — the assumption that makes external aerodynamics tractable.`,
      see:[{label:"Boundary-layer thickness",href:"equations.html#eq-bl-thickness"}]},
    {id:"g-displacement-thickness", term:"Displacement thickness", sym:R`\delta^*`,
      def:R`The distance the outer streamlines are displaced outward by the retarded flow near the wall, to satisfy conservation of mass. Because \(\delta^*\ll x\) at high Reynolds number, the wall-normal velocity is far smaller than the streamwise one — a key assumption of boundary-layer theory.`,
      see:[{label:"Momentum & displacement thickness",href:"equations.html#eq-momentum-integral"}]},
    {id:"g-fvm", term:"Finite volume method", sym:R`—`,
      def:R`The discretisation used by ANSYS Fluent: the domain is divided into a finite set of control volumes, the conservation equations are integrated over each, and the resulting algebraic system is solved numerically. Fluent's control volumes are cell-centred.`,
      see:[{label:"General transport equation",href:"equations.html#eq-transport"}]},
    {id:"g-convergence", term:"Convergence & residuals", sym:R`—`,
      def:R`A solution has converged when changes between iterations become negligible, global imbalances are small, and monitored quantities (drag, pressure drop) have levelled off. Residuals are the main diagnostic — but small residuals alone do not guarantee a correct answer.`,
      see:[{label:"Week 7",href:"week-07.html"}]},
    {id:"g-mesh-independence", term:"Mesh independence", sym:R`—`,
      def:R`A result that no longer changes when the mesh is refined. Demonstrating it (and time-step independence for unsteady runs) is part of the sensitivity study — without it, a converged solution may still be wrong.`,
      see:[{label:"Validation",href:"glossary.html#g-validation"}]},
    {id:"g-validation", term:"Validation", sym:R`—`,
      def:R`Judging CFD results against analytical, numerical or experimental data. The last step of the methodology and a stated learning outcome of the course: an unvalidated simulation, however colourful, is not an engineering result.`,
      see:[{label:"Mesh independence",href:"glossary.html#g-mesh-independence"}]}
  ],

  /* =========================================================
     ASSESSMENTS  — all four from the 2026 course outline.
     Weeks are given; exact dates come from Canvas.
     ========================================================= */
  assessments:[
    {id:"a-quiz1", name:"Quiz 1: Fluids A", type:"In-class quiz", weight:"20%",
      weekLabel:"Week 3 · in class · 90–100 min", dueWeek:3, dueOffsetDays:0,
      covers:"Fluid machinery — the turbomachinery material of Weeks 1–2.",
      desc:"Reinforces understanding of fluid mechanics through the application of fundamental principles to fluid machine problems. Held in class; details on Canvas. Assesses learning outcomes 1–4.",
      study:[
        "Pump classification and when a PDP beats a dynamic pump.",
        "Net head, water power, brake horsepower and the four efficiencies.",
        "Euler pump theory — draw the velocity triangles and get Vt from them.",
        "Read a performance curve: BEP, head, power and efficiency at a given Q.",
        "Cavitation and NPSH — compute the available NPSH for an installation.",
        "Similarity rules for a change of speed or impeller diameter.",
        "Match a pump to a system curve and find the operating point.",
        "Work the Week 1 and Week 2 tutorial problems — several are lifted straight from them."
      ],
      weeks:[1,2],
      related:[{label:"Euler head",href:"equations.html#eq-euler-head"},{label:"NPSH",href:"equations.html#eq-npsh"},{label:"Similarity rules",href:"equations.html#eq-similarity"},{label:"Week 1",href:"week-01.html"}]},

    {id:"a-quiz2", name:"Quiz 2: Fluids B", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 6 · in class · 90–100 min", dueWeek:6, dueOffsetDays:0,
      covers:"Compressible and turbulent flows — Weeks 4–5.",
      desc:"Reinforces understanding through the application of fundamental principles to compressible and turbulent flow problems. Held in class; details on Canvas. Assesses learning outcomes 1–3. A practice paper is provided — Part A compressible flow (45 marks), Part B turbulence (55 marks), with final answers entered in a table alongside worked solutions.",
      study:[
        "Part A: closed-tank heating — new temperature, heat transfer and entropy change.",
        "Part A: adiabatic duct flow — compute T₀, p₀, ρ₀, Ma, Vmax and V*, then p₀ downstream.",
        "Part B: flat-plate boundary-layer thickness — check laminar vs turbulent before choosing a formula.",
        "Part B: fit velocity data to the log law to get wall shear stress, then predict u at another y.",
        "Part B: friction velocity and wall shear in fully developed pipe flow from the centreline velocity.",
        "Practise solving the implicit log-law equation with Goal Seek or Solver in Excel."
      ],
      weeks:[4,5],
      related:[{label:"Stagnation relations",href:"equations.html#eq-stagnation"},{label:"Law of the wall",href:"equations.html#eq-law-wall"},{label:"Boundary-layer thickness",href:"equations.html#eq-bl-thickness"},{label:"Week 5",href:"week-05.html"}]},

    {id:"a-quiz3", name:"Quiz 3: Basic CFD Simulations", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 9 · in class · 90–100 min", dueWeek:9, dueOffsetDays:0,
      covers:"Basic CFD simulations using ANSYS Fluent — from Week 7 onward.",
      desc:"Reinforces understanding of fluid mechanics through basic CFD simulations in ANSYS Fluent. Held in class; details on Canvas. Assesses learning outcomes 2, 3, 4, 5 and 6.",
      study:[
        "Be fluent in the workflow: geometry → mesh → setup → solve → post-process → validate.",
        "Build the Week 7 pipe case from scratch until it is quick and automatic.",
        "Named selections for inlet, wall and outlet, and setting boundary conditions.",
        "Mesh sizing, face meshing and edge biasing to resolve near-wall gradients.",
        "Initialisation, iteration count, and reading residuals to judge convergence."
      ],
      weeks:[7],
      related:[{label:"General transport equation",href:"equations.html#eq-transport"},{label:"Finite volume method",href:"glossary.html#g-fvm"},{label:"Week 7",href:"week-07.html"}]},

    {id:"a-quiz4", name:"Quiz 4: Engineering CFD Simulation", type:"In-class quiz", weight:"30%",
      weekLabel:"Week 12 · in class · 90–100 min", dueWeek:12, dueOffsetDays:0,
      covers:"The whole course, applied through an engineering CFD simulation in ANSYS Fluent.",
      desc:"The largest assessment. Applies CFD simulation to an engineering problem, drawing on everything from the fluid machinery and compressible/turbulent flow theory through to modelling choices and validation. Assesses all six learning outcomes.",
      study:[
        "Choose and justify a turbulence model for the flow in question.",
        "Judge mesh resolution against the near-wall physics (y⁺ and the law of the wall).",
        "Demonstrate mesh and time-step independence.",
        "Validate against analytical or experimental data and discuss the limitations.",
        "Be ready to explain assumptions — awareness of them is an explicit learning outcome."
      ],
      weeks:[7],
      related:[{label:"Mesh independence",href:"glossary.html#g-mesh-independence"},{label:"Validation",href:"glossary.html#g-validation"},{label:"Reynolds stress",href:"equations.html#eq-reynolds-stress"}]}
  ]
};
