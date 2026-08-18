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
                                to SUBJECT.pages
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  meta:{
    code:"ENGG2440",
    title:"Modelling and Control",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 2, 2026",
    coordinator:"A/Pr Yuen Yong · Dr Alejandro Donaire",
    text:"Perez — Engineering System Dynamics (modelling) · Dorf & Bishop — Modern Control Systems (control)",
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
     WEEKLY CONTENT PAGES  (Weeks 1–5 modelling, 6–12 control)
     ========================================================= */
  pages:[
    {
      f:"week-01.html", week:1,
      t:"Modelling & State-Space Models",
      summary:"What a mathematical model is and why validation matters; inputs, outputs and states; the state-space form and why it is the target representation; the course's bullet-proof modelling procedure (inputs → outputs → states → CCRs → SSRs → state equations → output equations); and the translational mechanical domain — point masses, springs and dampers, degrees of freedom and state counting.",
      keywords:"mathematical model modelling validation black box empirical theoretical inputs outputs states state vector state-space model first order coupled ODE modelling procedure component constitutive relation CCR system structural relation SSR free body diagram translational mechanical point mass spring damper degrees of freedom kinetic energy momentum newton second law mass spring damper",
      related:[
        {type:"eq", label:"State-space form",           href:"equations.html#eq-state-space"},
        {type:"eq", label:"Newton's second law",        href:"equations.html#eq-newton"},
        {type:"eq", label:"Point-mass CCRs",            href:"equations.html#eq-mass-ccr"},
        {type:"eq", label:"Spring & damper CCRs",       href:"equations.html#eq-spring-damper"},
        {type:"eq", label:"State count (mechanical)",   href:"equations.html#eq-state-count"},
        {type:"def",label:"State",                      href:"glossary.html#g-state"},
        {type:"def",label:"CCR",                        href:"glossary.html#g-ccr"},
        {type:"def",label:"SSR",                        href:"glossary.html#g-ssr"},
        {type:"flag",label:"Quiz — Week 2",             href:"assessments.html#a-quiz-w2"}
      ]
    },
    {
      f:"week-02.html", week:2,
      t:"Model Representations & the Generalised Framework",
      summary:"Moving between the three model representations (block diagrams, ODEs and state-space) and the order of a model; then the unifying idea of the course — power ports, generalised effort and flow, and generalised momentum and displacement as the energy variables we always choose as states. Applied to the rotational mechanical domain, and abstracted into the generalised elements: resistors, inertias, capacitors, sources, transformers and gyrators.",
      keywords:"block diagram ODE state-space conversion order of a model power port power variables generalised effort flow energy variables generalised momentum displacement rotational mechanical inertia moment of inertia angular momentum torsional spring rotational damper equivalence force energy generalised resistor inertia capacitor source transformer gyrator lever gearbox rack and pinion",
      related:[
        {type:"eq", label:"Power = effort × flow",      href:"equations.html#eq-power"},
        {type:"eq", label:"Energy variables",           href:"equations.html#eq-energy-vars"},
        {type:"eq", label:"Rotational CCRs",            href:"equations.html#eq-rotational-ccr"},
        {type:"eq", label:"Generalised elements",       href:"equations.html#eq-generalised"},
        {type:"eq", label:"Ideal transformer",          href:"equations.html#eq-transformer"},
        {type:"def",label:"Effort & flow",              href:"glossary.html#g-effort-flow"},
        {type:"def",label:"Power port",                 href:"glossary.html#g-power-port"},
        {type:"def",label:"Energy variable",            href:"glossary.html#g-energy-variable"},
        {type:"flag",label:"Quiz — Week 3",             href:"assessments.html#a-quiz-w3"}
      ]
    },
    {
      f:"week-03.html", week:3,
      t:"Electrical & Electromechanical Systems",
      summary:"The electrical domain in the same framework: charge and linked flux as the energy variables, voltage and current as effort and flow, and the CCRs for inductors, capacitors and resistors. Kirchhoff's laws supply the structural relations, and state counting follows the independent energy-storing elements. Then electromechanical coupling — the permanent-magnet DC motor as a gyrator between the electrical and rotational domains.",
      keywords:"electrical domain charge linked flux magnetic voltage current effort flow inductor capacitor resistor CCR kirchhoff current law KCL voltage law KVL node loop independent energy storing elements state counting electromechanical permanent magnet DC motor generator armature back EMF motor constant torque constant gyrator sign convention",
      related:[
        {type:"eq", label:"Electrical CCRs",            href:"equations.html#eq-electrical-ccr"},
        {type:"eq", label:"Kirchhoff's laws",           href:"equations.html#eq-kirchhoff"},
        {type:"eq", label:"DC motor CCRs",              href:"equations.html#eq-dc-motor"},
        {type:"def",label:"Linked flux",                href:"glossary.html#g-linked-flux"},
        {type:"def",label:"Back EMF",                   href:"glossary.html#g-back-emf"},
        {type:"def",label:"Gyrator",                    href:"glossary.html#g-gyrator"},
        {type:"flag",label:"Quiz — Week 4",             href:"assessments.html#a-quiz-w4"}
      ]
    },
    {
      f:"week-04.html", week:4,
      t:"Fluid Power Systems",
      summary:"The last physical domain: incompressible hydraulic systems, with pressure momentum and volume as the energy variables and pressure and volumetric flow rate as effort and flow. Fluid inertia in long thin pipes, fluid capacitance in tanks and accumulators, resistance in valves and orifices, optional compressibility, and the piston-cylinder transformers (single-acting, symmetric and asymmetric) that couple fluid power to the mechanical domains.",
      keywords:"fluid power hydraulic incompressible pressure momentum volume energy variables pressure volumetric flow rate effort flow fluid inertia long pipe fluid capacitance tank accumulator fluid resistance valve orifice compressibility bulk modulus piston cylinder single acting symmetric asymmetric plunger transformer area ratio",
      related:[
        {type:"eq", label:"Fluid inertia",              href:"equations.html#eq-fluid-inertia"},
        {type:"eq", label:"Fluid capacitance",          href:"equations.html#eq-fluid-cap"},
        {type:"eq", label:"Piston-cylinder CCRs",       href:"equations.html#eq-piston"},
        {type:"def",label:"Pressure momentum",          href:"glossary.html#g-pressure-momentum"},
        {type:"def",label:"Transformer",                href:"glossary.html#g-transformer"},
        {type:"flag",label:"Quiz — Week 5",             href:"assessments.html#a-quiz-w5"}
      ]
    },
    {
      f:"week-05.html", week:5,
      t:"Linearisation & Transfer Functions",
      summary:"Bridging modelling and control. Why linear models matter, equilibrium points, and linearising a nonlinear state-space model with the Taylor series — scalar, multivariable and vector-valued, giving the Jacobian matrices A, B, C, D. Then the Laplace transform, transfer functions, and the conversions between transfer functions, ODEs and state-space models in both directions.",
      keywords:"linear system superposition homogeneity nonlinearity linearisation taylor series expansion scalar multivariable vector valued jacobian equilibrium point operating point deviation variables state trajectory phase portrait laplace transform transfer function poles zeros state-space to transfer function resolvent sI-A conversion ODE",
      related:[
        {type:"eq", label:"Taylor linearisation",       href:"equations.html#eq-taylor"},
        {type:"eq", label:"Jacobian linearisation",     href:"equations.html#eq-jacobian"},
        {type:"eq", label:"Equilibrium condition",      href:"equations.html#eq-equilibrium"},
        {type:"eq", label:"State-space → TF",           href:"equations.html#eq-ss-to-tf"},
        {type:"def",label:"Equilibrium point",          href:"glossary.html#g-equilibrium"},
        {type:"def",label:"Transfer function",          href:"glossary.html#g-transfer-function"},
        {type:"flag",label:"Mid-semester Quiz",         href:"assessments.html#a-midsem"}
      ]
    },
    {
      f:"week-06.html", week:6,
      t:"Introduction to Control Systems",
      summary:"The control half begins: the key elements of a control system (plant, sensors, actuators, control objectives and algorithms), open- versus closed-loop structure, and the three design objectives — transient response, steady-state error and stability. The design process from requirements to schematic to block diagram, control block-diagram algebra and reduction, standard test signals, and the vocabulary of transfer functions: poles, zeros, properness and order.",
      keywords:"control system plant process sensor actuator control objective algorithm open loop closed loop feedback design objectives transient response steady state error stability design process schematic block diagram algebra reduction summing junction series parallel unity feedback test signal step ramp impulse transfer function rational proper strictly proper biproper poles zeros order natural forced response",
      related:[
        {type:"eq", label:"Closed-loop transfer fn",    href:"equations.html#eq-closed-loop"},
        {type:"eq", label:"Rational transfer function", href:"equations.html#eq-rational-tf"},
        {type:"def",label:"Plant",                      href:"glossary.html#g-plant"},
        {type:"def",label:"Feedback",                   href:"glossary.html#g-feedback"},
        {type:"def",label:"Pole & zero",                href:"glossary.html#g-pole-zero"},
        {type:"flag",label:"Quiz — Week 7",             href:"assessments.html#a-quiz-w7"}
      ]
    },
    {
      f:"week-07.html", week:7,
      t:"Time-Domain Response & Specifications",
      summary:"How a system answers a step: DC gain and steady-state error from the final value theorem, first-order response and its time constant, and the second-order standard form with its natural frequency and damping ratio. The under-, critically- and over-damped cases, and the five time-domain specifications — rise time, settling time, peak time, overshoot and steady-state error — plus the design compromise between them, and the effects of zeros (including non-minimum-phase) and a third pole.",
      keywords:"step response DC gain steady state gain final value theorem steady state error first order time constant second order standard form natural frequency damping ratio underdamped critically damped overdamped damped natural frequency complex conjugate poles s-plane rise time settling time peak time percent overshoot design compromise effect of zeros non-minimum phase NMP undershoot third pole dominant poles",
      related:[
        {type:"eq", label:"Final value theorem",        href:"equations.html#eq-fvt"},
        {type:"eq", label:"Second-order standard form", href:"equations.html#eq-second-order"},
        {type:"eq", label:"Second-order poles",         href:"equations.html#eq-so-poles"},
        {type:"eq", label:"Percent overshoot",          href:"equations.html#eq-overshoot"},
        {type:"eq", label:"Settling & peak time",       href:"equations.html#eq-settling"},
        {type:"def",label:"Damping ratio",              href:"glossary.html#g-damping-ratio"},
        {type:"def",label:"Natural frequency",          href:"glossary.html#g-natural-frequency"},
        {type:"def",label:"Non-minimum phase",          href:"glossary.html#g-nmp"},
        {type:"flag",label:"Quiz — Week 8",             href:"assessments.html#a-quiz-w8"}
      ]
    },
    {
      f:"week-08.html", week:8,
      t:"Stability: Root Locus & Routh–Hurwitz",
      summary:"Stability is the precondition for everything else. BIBO stability and its equivalence to having all closed-loop poles in the left half-plane; the characteristic equation 1 + C(s)G(s) = 0; the Routh–Hurwitz criterion for counting right-half-plane roots without solving for them (and for finding the gain range that keeps a loop stable); and the root locus — how the closed-loop poles migrate through the s-plane as a single gain is varied.",
      keywords:"stability BIBO bounded input bounded output left half plane right half plane characteristic equation closed loop poles routh hurwitz criterion routh array first column sign changes marginal stability critical gain range of K root locus branches asymptotes breakaway departure angle open loop poles zeros matlab rlocus design",
      related:[
        {type:"eq", label:"Characteristic equation",    href:"equations.html#eq-char-eq"},
        {type:"eq", label:"BIBO stability",             href:"equations.html#eq-bibo"},
        {type:"eq", label:"Routh array",                href:"equations.html#eq-routh"},
        {type:"def",label:"BIBO stability",             href:"glossary.html#g-bibo"},
        {type:"def",label:"Characteristic equation",    href:"glossary.html#g-char-eq"},
        {type:"def",label:"Root locus",                 href:"glossary.html#g-root-locus"},
        {type:"flag",label:"Quiz — Week 9",             href:"assessments.html#a-quiz-w9"}
      ]
    },
    {
      f:"week-09.html", week:9,
      t:"Steady-State Error & Pole Placement",
      summary:"Accuracy in the steady state: error for unity-feedback systems from both T(s) and the open-loop C(s)G(s), the three static error constants (position, velocity and acceleration) and how system type — the number of pure integrators in the forward path — determines which inputs a loop can track with zero error. Then pole placement: choosing a controller so the closed-loop characteristic polynomial matches a desired one, via the polynomial (Diophantine) approach, and its use in designing PI and PID controllers.",
      keywords:"steady state error unity feedback final value theorem static error constant position constant Kp velocity constant Kv acceleration constant Ka system type number of integrators type 0 1 2 step ramp parabola input tracking pole placement desired characteristic polynomial polynomial approach diophantine equation controller order PI PID design",
      related:[
        {type:"eq", label:"Steady-state error",         href:"equations.html#eq-ess"},
        {type:"eq", label:"Static error constants",     href:"equations.html#eq-error-constants"},
        {type:"eq", label:"Pole placement",             href:"equations.html#eq-pole-placement"},
        {type:"def",label:"System type",                href:"glossary.html#g-system-type"},
        {type:"def",label:"Pole placement",             href:"glossary.html#g-pole-placement"},
        {type:"flag",label:"Quiz — Week 10",            href:"assessments.html#a-quiz-w10"}
      ]
    },
    {
      f:"week-10.html", week:10,
      t:"PID Control & the Value of Feedback",
      summary:"The industry workhorse and the case for feedback itself. Each PID term and what it does to error, speed and stability; realisable (filtered) parallel structures; Ziegler–Nichols tuning; and integrator windup with anti-windup protection. Then the systematic comparison of open- and closed-loop control across the four properties that matter — stability, tracking, disturbance rejection and sensitivity to plant variation.",
      keywords:"PID controller proportional integral derivative term steady state error stability overshoot anticipative practical PID filter pole parallel form reset time derivative time ziegler nichols oscillation reaction curve tuning ultimate gain period integrator windup anti-windup saturation actuator open loop closed loop comparison tracking disturbance rejection sensitivity function parameter variation",
      related:[
        {type:"eq", label:"PID controller",             href:"equations.html#eq-pid"},
        {type:"eq", label:"Practical PID",              href:"equations.html#eq-pid-practical"},
        {type:"eq", label:"Sensitivity function",       href:"equations.html#eq-sensitivity"},
        {type:"def",label:"PID controller",             href:"glossary.html#g-pid"},
        {type:"def",label:"Integrator windup",          href:"glossary.html#g-windup"},
        {type:"def",label:"Sensitivity",                href:"glossary.html#g-sensitivity"},
        {type:"flag",label:"Quiz — Week 11",            href:"assessments.html#a-quiz-w11"}
      ]
    },
    {
      f:"week-11.html", week:11,
      t:"Frequency Response & Bode Plots",
      summary:"What a linear system does to a sine: the same frequency out, scaled by |G(jω)| and shifted by ∠G(jω). Building the frequency response function, reading and sketching Bode magnitude and phase plots from the factors of a transfer function, and using the open-loop frequency response to judge closed-loop stability through the critical point −1 — giving the gain margin and phase margin as measures of relative stability.",
      keywords:"frequency response sinusoidal input steady state response magnitude phase transfer function s=jw bode plot decibel logarithmic semilogx asymptote corner break frequency slope decade pole zero integrator sketching stability critical point -1 magnitude phase condition gain margin phase margin crossover frequency relative stability nyquist",
      related:[
        {type:"eq", label:"Frequency response",         href:"equations.html#eq-freq-response"},
        {type:"eq", label:"Magnitude in decibels",      href:"equations.html#eq-decibels"},
        {type:"eq", label:"Gain & phase margin",        href:"equations.html#eq-margins"},
        {type:"def",label:"Frequency response",         href:"glossary.html#g-frequency-response"},
        {type:"def",label:"Bode plot",                  href:"glossary.html#g-bode"},
        {type:"def",label:"Phase margin",               href:"glossary.html#g-phase-margin"},
        {type:"flag",label:"Final Quiz",                href:"assessments.html#a-final"}
      ]
    },
    {
      f:"week-12.html", week:12,
      t:"Frequency-Domain Design",
      summary:"Closing the loop between the two domains. The relationship between closed-loop transient behaviour and frequency response: phase margin as a proxy for damping ratio (with the handy ζ ≈ PM/100 rule), the resonance peak and its link to damping, and bandwidth as a measure of speed — the tools that let a controller be designed to time-domain specifications using frequency-domain measurements.",
      keywords:"frequency domain design closed loop transient response relation phase margin damping ratio approximation resonance peak resonant frequency bandwidth speed of response compensator design lead lag specification translation loop shaping crossover frequency settling time rise time",
      related:[
        {type:"eq", label:"Phase margin vs damping",    href:"equations.html#eq-pm-zeta"},
        {type:"eq", label:"Resonance peak",             href:"equations.html#eq-resonance"},
        {type:"def",label:"Bandwidth",                  href:"glossary.html#g-bandwidth"},
        {type:"def",label:"Phase margin",               href:"glossary.html#g-phase-margin"},
        {type:"flag",label:"Final Quiz",                href:"assessments.html#a-final"}
      ]
    }
  ],

  /* =========================================================
     EQUATIONS
     ========================================================= */
  equations:[
    /* ---- Modelling framework ---- */
    {id:"eq-state-space", cat:"Modelling framework", name:"State-space model",
     latex:R`\dot{\mathbf z}(t) = f(\mathbf z(t),\mathbf u(t),t) \qquad \mathbf y(t) = g(\mathbf z(t),\mathbf u(t),t)`,
     desc:"The target representation of the whole modelling half: a set of coupled first-order ODEs writing each state derivative purely in terms of the states, the inputs, functions of time and constants — plus output equations doing the same for the outputs.",
     vars:[{sym:R`\mathbf z`,mean:"state vector"},{sym:R`\mathbf u`,mean:"input vector"},{sym:R`\mathbf y`,mean:"output vector"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"State",href:"glossary.html#g-state"}],
     keywords:"state space model first order ODE state derivative inputs outputs vector equation"},

    {id:"eq-state-space-linear", cat:"Modelling framework", name:"Linear state-space model",
     latex:R`\dot{\mathbf z} = A\mathbf z + B\mathbf u \qquad \mathbf y = C\mathbf z + D\mathbf u`,
     desc:"When the model is linear (or has been linearised) the functions become matrices. A is the system matrix, B the input matrix, C the output matrix and D the feedthrough matrix.",
     vars:[{sym:R`A`,mean:"system matrix (n×n)"},{sym:R`B`,mean:"input matrix"},{sym:R`C`,mean:"output matrix"},{sym:R`D`,mean:"feedthrough matrix"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Week 5",href:"week-05.html"}],
     keywords:"linear state space matrices A B C D system input output feedthrough"},

    {id:"eq-power", cat:"Modelling framework", name:"Power = effort × flow",
     latex:R`P_W(t) = e(t)\,f(t)`,
     desc:"The unifying idea of the course. At every power port, two variables multiply to give power — a generalised effort and a generalised flow. Identifying them in a new domain lets every earlier result carry over.",
     vars:[{sym:R`e(t)`,mean:"generalised effort (force, torque, voltage, pressure)"},{sym:R`f(t)`,mean:"generalised flow (velocity, angular velocity, current, flow rate)"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Effort & flow",href:"glossary.html#g-effort-flow"}],
     keywords:"power port effort flow generalised variables analogy domains watts"},

    {id:"eq-energy-vars", cat:"Modelling framework", name:"Energy variables (the states)",
     latex:R`p(t) = \int e(t)\,dt \qquad q(t) = \int f(t)\,dt`,
     desc:"Generalised momentum is the time integral of effort and generalised displacement the time integral of flow. In every domain we choose these energy variables as the states — so the state derivatives are power variables and we are tracking the system's energy.",
     vars:[{sym:R`p`,mean:"generalised momentum (P, L, λ, P_p)"},{sym:R`q`,mean:"generalised displacement (x, θ, q, V)"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Energy variable",href:"glossary.html#g-energy-variable"}],
     keywords:"energy variables generalised momentum displacement integral effort flow state selection"},

    {id:"eq-state-count", cat:"Modelling framework", name:"How many states?",
     latex:R`N_{states} = 2 \times N_{DOF}\ \ (\text{mechanical}) \qquad N_{states} = \#\{\text{independent storage elements}\}`,
     desc:"Mechanical systems need two states per degree of freedom (a momentum and a displacement). Electrical and fluid systems need one per independent energy-storing element — capacitors and inductors, tanks and long pipes.",
     vars:[{sym:R`N_{DOF}`,mean:"degrees of freedom"},{sym:R`N_{states}`,mean:"number of states"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Week 3",href:"week-03.html"}],
     keywords:"state count degrees of freedom independent energy storage elements capacitors inductors tanks"},

    {id:"eq-generalised", cat:"Modelling framework", name:"The generalised elements",
     latex:R`\text{Resistor: } e = R(f) \qquad \text{Inertia: } e = \dot{\mathcal I}(f) \qquad \text{Capacitor: } e = \mathcal C(q)`,
     desc:"Every component in every domain is one of a handful of archetypes: resistors dissipate energy, inertias and capacitors store it, sources supply it, and transformers and gyrators move it between ports or domains.",
     vars:[{sym:R`R(\cdot)`,mean:"resistive relation (often linear)"},{sym:R`\mathcal I(\cdot)`,mean:"inertial relation"},{sym:R`\mathcal C(\cdot)`,mean:"capacitive relation"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"generalised elements resistor inertia capacitor source transformer gyrator archetypes analogy"},

    {id:"eq-transformer", cat:"Modelling framework", name:"Ideal transformer & gyrator",
     latex:R`\text{Transformer: } e_1 f_1 = e_2 f_2 \quad (e_1 \to e_2,\ f_1 \to f_2) \qquad \text{Gyrator: } e_1 \to f_2,\ f_1 \to e_2`,
     desc:"A transformer (lever, gearbox, piston) maps effort to effort and flow to flow; a gyrator (DC motor) swaps them, mapping effort to flow. Both are ideal when they conserve power.",
     vars:[{sym:R`e_1,f_1`,mean:"port 1 effort and flow"},{sym:R`e_2,f_2`,mean:"port 2 effort and flow"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Gyrator",href:"glossary.html#g-gyrator"}],
     keywords:"transformer gyrator ideal lossless power conserving lever gearbox rack pinion motor"},

    /* ---- Mechanical ---- */
    {id:"eq-newton", cat:"Mechanical systems", name:"Newton's second law",
     latex:R`\sum F_x(t) = m\,a_x(t) = m\,\ddot x(t)`,
     desc:"The structural relation (SSR) for a translating mass, applied by drawing a free-body diagram. Forces along the chosen positive direction of motion count positive, those against it negative.",
     vars:[{sym:R`\sum F_x`,mean:"net force (N)"},{sym:R`m`,mean:"mass (kg)"},{sym:R`a_x`,mean:"acceleration (m/s²)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"SSR",href:"glossary.html#g-ssr"}],
     keywords:"newton second law net force free body diagram sign convention SSR translating mass"},

    {id:"eq-mass-ccr", cat:"Mechanical systems", name:"Point-mass CCRs",
     latex:R`P = m\,v \qquad \dot P = F \qquad E_k = \tfrac12 m v^2`,
     desc:"Linear momentum is mass times velocity, and its derivative is the net force. Momentum is the energy variable, so it is the state we track. Take care that momentum and net force are positive in the same direction.",
     vars:[{sym:R`P`,mean:"linear momentum (kg·m/s)"},{sym:R`v`,mean:"velocity (m/s)"},{sym:R`E_k`,mean:"kinetic energy (J)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"CCR",href:"glossary.html#g-ccr"}],
     keywords:"point mass momentum CCR kinetic energy velocity newton state variable"},

    {id:"eq-spring-damper", cat:"Mechanical systems", name:"Spring & damper CCRs",
     latex:R`F = k\,\Delta = \frac{\Delta}{c} \qquad F = b\,v \qquad E_p = \tfrac12 k \Delta^2`,
     desc:"An ideal spring is a generalised capacitor storing potential energy in its deformation; an ideal damper is a generalised resistor dissipating energy. Writing these CCRs down declares the assumptions — linear, unbounded, never breaking.",
     vars:[{sym:R`k`,mean:"stiffness (N/m), c = 1/k compliance"},{sym:R`\Delta`,mean:"deformation (m)"},{sym:R`b`,mean:"damping coefficient (N·s/m)"}],
     links:[{label:"Week 1",href:"week-01.html"}],
     keywords:"spring damper CCR stiffness compliance deformation damping coefficient potential energy dissipation"},

    {id:"eq-rotational-ccr", cat:"Mechanical systems", name:"Rotational CCRs",
     latex:R`L = J\omega \qquad \dot L = T \qquad T = k\theta \qquad T = b\,\omega \qquad J = \int_Q r^2\,dm`,
     desc:"The rotational domain mirrors the translational one exactly: angular momentum replaces linear momentum, torque replaces force, moment of inertia replaces mass, and angular displacement replaces position.",
     vars:[{sym:R`L`,mean:"angular momentum (kg·m²/s)"},{sym:R`J`,mean:"moment of inertia (kg·m²)"},{sym:R`\omega`,mean:"angular velocity (rad/s)"},{sym:R`T`,mean:"torque (N·m)"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"rotational angular momentum moment of inertia torque torsional spring rotational damper analogy"},

    /* ---- Electrical ---- */
    {id:"eq-electrical-ccr", cat:"Electrical & electromechanical", name:"Electrical CCRs",
     latex:R`\lambda = L I,\ \ V = \dot\lambda \qquad q = C V,\ \ I = \dot q \qquad V = R I`,
     desc:"Inductors are the generalised inertias (linked flux is the momentum), capacitors the generalised capacitors (charge is the displacement), and resistors dissipate. Linked flux and charge are the states.",
     vars:[{sym:R`\lambda`,mean:"magnetic linked flux (Wb)"},{sym:R`L`,mean:"inductance (H)"},{sym:R`q`,mean:"charge (C)"},{sym:R`C`,mean:"capacitance (F)"},{sym:R`R`,mean:"resistance (Ω)"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Linked flux",href:"glossary.html#g-linked-flux"}],
     keywords:"inductor capacitor resistor CCR linked flux charge inductance capacitance resistance ohm law"},

    {id:"eq-kirchhoff", cat:"Electrical & electromechanical", name:"Kirchhoff's laws (the SSRs)",
     latex:R`\sum_{\text{node}} I = 0 \qquad \sum_{\text{loop}} V = 0`,
     desc:"Current into a node sums to zero (KCL) and voltage around a closed loop sums to zero (KVL). These are the structural relations for electrical systems — the electrical equivalent of the free-body diagram.",
     vars:[{sym:R`I`,mean:"current (A)"},{sym:R`V`,mean:"voltage (V)"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"SSR",href:"glossary.html#g-ssr"}],
     keywords:"kirchhoff current law KCL voltage law KVL node loop structural relation circuit"},

    {id:"eq-dc-motor", cat:"Electrical & electromechanical", name:"Permanent-magnet DC motor",
     latex:R`T(t) = K_T\,I_a(t) \qquad e(t) = K_\omega\,\omega(t)`,
     desc:"The motor is a gyrator: armature current produces torque, and shaft speed produces a back-EMF voltage. In SI units the two motor constants have the same magnitude and are often written as a single Km. A generator is the same device run in reverse.",
     vars:[{sym:R`K_T`,mean:"torque constant (N·m/A)"},{sym:R`K_\omega`,mean:"back-EMF constant (V·s/rad)"},{sym:R`I_a`,mean:"armature current"},{sym:R`e`,mean:"back-EMF voltage"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Back EMF",href:"glossary.html#g-back-emf"}],
     keywords:"DC motor generator armature torque constant back EMF gyrator electromechanical coupling"},

    /* ---- Fluid power ---- */
    {id:"eq-fluid-inertia", cat:"Fluid power", name:"Fluid inertia",
     latex:R`\mathcal I = \frac{\rho\,l}{A} \qquad \mathcal I\,\dot Q(t) = \Delta P(t)`,
     desc:"The mass of fluid in a long thin pipe resists acceleration, giving the fluid analogue of inertia. Only appreciable for large length and small cross-section; usually neglected in high-pressure, low-flow circuits.",
     vars:[{sym:R`\rho`,mean:"fluid density (kg/m³)"},{sym:R`l`,mean:"pipe length (m)"},{sym:R`A`,mean:"cross-sectional area (m²)"},{sym:R`Q`,mean:"volumetric flow rate (m³/s)"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Pressure momentum",href:"glossary.html#g-pressure-momentum"}],
     keywords:"fluid inertia pressure momentum long pipe density length area flow rate"},

    {id:"eq-fluid-cap", cat:"Fluid power", name:"Fluid capacitance & flow",
     latex:R`\dot{V} = Q \qquad P = \frac{V}{C}`,
     desc:"Volume is the generalised displacement, so its derivative is the volumetric flow rate. A tank or accumulator stores energy as stored volume, with pressure rising as it fills.",
     vars:[{sym:R`V`,mean:"stored volume (m³)"},{sym:R`Q`,mean:"volumetric flow rate (m³/s)"},{sym:R`C`,mean:"fluid capacitance"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"fluid capacitance tank accumulator volume flow rate pressure storage"},

    {id:"eq-piston", cat:"Fluid power", name:"Piston-cylinder CCRs",
     latex:R`F = P A_p,\quad Q = v A_p \qquad\text{(symmetric: } F = (P_1-P_2)A_p)`,
     desc:"A piston-cylinder is a transformer coupling fluid power to translational mechanics: pressure becomes force and velocity becomes flow, both scaled by the plunger area. Asymmetric cylinders have different areas on each face.",
     vars:[{sym:R`A_p`,mean:"plunger area (m²)"},{sym:R`P_1,P_2`,mean:"pressures either side"},{sym:R`v`,mean:"plunger velocity"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Transformer",href:"glossary.html#g-transformer"}],
     keywords:"piston cylinder single acting symmetric asymmetric plunger area transformer force flow"},

    /* ---- Linearisation & transfer functions ---- */
    {id:"eq-equilibrium", cat:"Linearisation & transfer functions", name:"Equilibrium point",
     latex:R`f(\mathbf z^*, \mathbf u^*) = \mathbf 0`,
     desc:"An equilibrium is a state at which, for a constant input, nothing changes — every state derivative is zero. Linearisation is always performed about such an operating point.",
     vars:[{sym:R`\mathbf z^*`,mean:"equilibrium state"},{sym:R`\mathbf u^*`,mean:"equilibrium input"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Equilibrium point",href:"glossary.html#g-equilibrium"}],
     keywords:"equilibrium point operating point steady state zero derivative linearisation about"},

    {id:"eq-taylor", cat:"Linearisation & transfer functions", name:"Taylor linearisation (scalar)",
     latex:R`\tilde f(x) = f(x_0) + \frac{df(x_0)}{dx}\,(x - x_0)`,
     desc:"A first-order truncation of the Taylor series. Exact at the expansion point and increasingly wrong as you move away from it — so a linear model is only valid near the operating point it was built around.",
     vars:[{sym:R`x_0`,mean:"expansion (operating) point"},{sym:R`\tilde f`,mean:"linear approximation"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"taylor series linearisation first order truncation error expansion point approximation validity"},

    {id:"eq-jacobian", cat:"Linearisation & transfer functions", name:"Jacobian linearisation",
     latex:R`A = \left.\frac{\partial f}{\partial \mathbf z}\right|_{*} \quad B = \left.\frac{\partial f}{\partial \mathbf u}\right|_{*} \quad C = \left.\frac{\partial g}{\partial \mathbf z}\right|_{*} \quad D = \left.\frac{\partial g}{\partial \mathbf u}\right|_{*}`,
     desc:"Applying the Taylor expansion to each component of a vector-valued function gives the four Jacobian matrices, evaluated at the equilibrium. The result is a linear model in deviation variables measured from the operating point.",
     vars:[{sym:R`\partial f/\partial \mathbf z`,mean:"Jacobian of the state equations"},{sym:R`*`,mean:"evaluated at the equilibrium"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"jacobian matrix partial derivative linearisation deviation variables perturbation state space matrices"},

    {id:"eq-ss-to-tf", cat:"Linearisation & transfer functions", name:"State-space → transfer function",
     latex:R`H(s) = C\,(sI - A)^{-1}B + D`,
     desc:"Laplace-transforming the linear state equations and eliminating the state vector gives the transfer function directly from the matrices. The poles are the eigenvalues of A.",
     vars:[{sym:R`s`,mean:"Laplace variable"},{sym:R`I`,mean:"identity matrix"},{sym:R`H(s)`,mean:"transfer function"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Transfer function",href:"glossary.html#g-transfer-function"}],
     keywords:"state space to transfer function resolvent matrix inverse eigenvalues poles laplace"},

    {id:"eq-rational-tf", cat:"Linearisation & transfer functions", name:"Rational transfer function",
     latex:R`G(s) = \frac{B(s)}{A(s)} = \frac{b_m s^m + \dots + b_1 s + b_0}{s^n + a_{n-1}s^{n-1} + \dots + a_0}`,
     desc:"Roots of the numerator are the zeros, roots of the denominator the poles, and the order of the system is the degree n of the denominator. Proper means m ≤ n, strictly proper m < n, biproper m = n.",
     vars:[{sym:R`B(s)`,mean:"numerator (zeros)"},{sym:R`A(s)`,mean:"denominator (poles)"},{sym:R`n`,mean:"system order"}],
     links:[{label:"Week 6",href:"week-06.html"},{label:"Pole & zero",href:"glossary.html#g-pole-zero"}],
     keywords:"rational transfer function numerator denominator poles zeros proper strictly biproper order degree"},

    /* ---- Control fundamentals ---- */
    {id:"eq-closed-loop", cat:"Control fundamentals", name:"Closed-loop transfer function",
     latex:R`\frac{Y(s)}{R(s)} = \frac{G(s)C(s)}{1 + G(s)C(s)H(s)} \quad\xrightarrow{\ H=1\ }\quad T(s) = \frac{GC}{1+GC}`,
     desc:"The core of block-diagram algebra: forward path over one plus the loop gain. With unity feedback (H = 1) this is the form used throughout the course.",
     vars:[{sym:R`G(s)`,mean:"plant"},{sym:R`C(s)`,mean:"controller"},{sym:R`H(s)`,mean:"feedback/sensor path"}],
     links:[{label:"Week 6",href:"week-06.html"},{label:"Feedback",href:"glossary.html#g-feedback"}],
     keywords:"closed loop transfer function block diagram algebra forward path loop gain unity feedback reduction"},

    {id:"eq-fvt", cat:"Control fundamentals", name:"Final value theorem",
     latex:R`y_\infty = \lim_{t\to\infty} y(t) = \lim_{s\to 0} sY(s) \qquad \text{DC gain} = G(0)`,
     desc:"Gets the steady-state value without inverting the Laplace transform. Applied to a unit step it gives the DC gain G(0); applied to the error signal it gives the steady-state error. Only valid for a stable system.",
     vars:[{sym:R`Y(s)`,mean:"Laplace transform of the output"},{sym:R`G(0)`,mean:"DC / steady-state gain"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Week 9",href:"week-09.html"}],
     keywords:"final value theorem steady state DC gain limit laplace stable system requirement"},

    /* ---- Time-domain response ---- */
    {id:"eq-second-order", cat:"Time-domain response", name:"Second-order standard form",
     latex:R`G(s) = \frac{K\,\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}`,
     desc:"The reference model for transient response. Every time-domain specification in the course is expressed through its two parameters: the natural frequency (speed) and the damping ratio (shape).",
     vars:[{sym:R`K`,mean:"steady-state gain"},{sym:R`\omega_n`,mean:"natural frequency (rad/s)"},{sym:R`\zeta`,mean:"damping ratio"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Damping ratio",href:"glossary.html#g-damping-ratio"}],
     keywords:"second order standard form natural frequency damping ratio steady state gain transient"},

    {id:"eq-so-poles", cat:"Time-domain response", name:"Second-order poles & damping cases",
     latex:R`p_{1,2} = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2 - 1} \qquad \omega_d = \omega_n\sqrt{1-\zeta^2}`,
     desc:"ζ < 1 gives complex poles and an under-damped oscillatory response; ζ = 1 repeated real poles (critically damped); ζ > 1 distinct real poles (over-damped). Under-damped poles sit at radius ωn and angle sin⁻¹ζ in the s-plane.",
     vars:[{sym:R`\omega_d`,mean:"damped natural frequency"},{sym:R`\zeta`,mean:"damping ratio"},{sym:R`p_{1,2}`,mean:"pole pair"}],
     links:[{label:"Week 7",href:"week-07.html"}],
     keywords:"poles underdamped critically damped overdamped complex conjugate damped natural frequency s-plane radius angle"},

    {id:"eq-overshoot", cat:"Time-domain response", name:"Percent overshoot",
     latex:R`P.O. = 100\,e^{-\pi\zeta/\sqrt{1-\zeta^2}} \qquad \zeta = \frac{-\ln(P.O./100)}{\sqrt{\pi^2 + \ln^2(P.O./100)}}`,
     desc:"Overshoot depends only on the damping ratio — not on the natural frequency. The inverse relation converts an overshoot specification straight into a required ζ, which is usually the first step of a design.",
     vars:[{sym:R`P.O.`,mean:"percent overshoot"},{sym:R`\zeta`,mean:"damping ratio"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Week 12",href:"week-12.html"}],
     keywords:"percent overshoot damping ratio inverse specification design independent of natural frequency"},

    {id:"eq-settling", cat:"Time-domain response", name:"Rise, settling & peak time",
     latex:R`T_r \approx \frac{2.16\zeta + 0.6}{\omega_n} \qquad T_s \approx \frac{4}{\zeta\omega_n} \qquad T_p = \frac{\pi}{\omega_n\sqrt{1-\zeta^2}}`,
     desc:"The three speed specifications for an under-damped second-order system: 10–90% rise time, 2%-band settling time, and the time to the first peak. All improve with larger ωn — which is the design lever once ζ is fixed by overshoot.",
     vars:[{sym:R`T_r`,mean:"rise time (s)"},{sym:R`T_s`,mean:"settling time (s)"},{sym:R`T_p`,mean:"peak time (s)"}],
     links:[{label:"Week 7",href:"week-07.html"}],
     keywords:"rise time settling time peak time two percent band specification speed design compromise"},

    /* ---- Stability ---- */
    {id:"eq-bibo", cat:"Stability", name:"BIBO stability",
     latex:R`|u(t)| \le K_u < \infty \ \Rightarrow\ |y(t)| \le K_y < \infty \quad\Longleftrightarrow\quad \Re\{p_i\} < 0\ \ \forall i`,
     desc:"A system is bounded-input bounded-output stable exactly when every pole of its transfer function lies strictly in the left half-plane. Poles on the imaginary axis are marginally stable; any pole in the right half-plane is unstable.",
     vars:[{sym:R`p_i`,mean:"closed-loop poles"},{sym:R`K_u,K_y`,mean:"input / output bounds"}],
     links:[{label:"Week 8",href:"week-08.html"},{label:"BIBO stability",href:"glossary.html#g-bibo"}],
     keywords:"BIBO bounded input output stability left half plane poles real part negative marginal unstable"},

    {id:"eq-char-eq", cat:"Stability", name:"Characteristic equation",
     latex:R`1 + C(s)G(s) = 0 \qquad\Longleftrightarrow\qquad A(s)L(s) + B(s)P(s) = 0`,
     desc:"The closed-loop poles are the roots of one plus the loop gain. Writing the plant as B/A and the controller as P/L shows why feedback grants so much freedom: the designer shapes the closed-loop polynomial through P and L.",
     vars:[{sym:R`C(s)=P/L`,mean:"controller"},{sym:R`G(s)=B/A`,mean:"plant"}],
     links:[{label:"Week 8",href:"week-08.html"},{label:"Week 9",href:"week-09.html"},{label:"Characteristic equation",href:"glossary.html#g-char-eq"}],
     keywords:"characteristic equation closed loop poles loop gain polynomial plant controller numerator denominator"},

    {id:"eq-routh", cat:"Stability", name:"Routh–Hurwitz criterion",
     latex:R`a_n s^n + a_{n-1}s^{n-1} + \dots + a_0 = 0 \ \longrightarrow\ \text{Routh array}`,
     desc:"Builds a triangular array from the characteristic polynomial's coefficients. The system is stable if and only if every entry in the first column is positive; the number of sign changes equals the number of right-half-plane roots. Ideal for finding the range of a gain that keeps a loop stable.",
     vars:[{sym:R`a_i`,mean:"characteristic polynomial coefficients"},{sym:R`n`,mean:"system order"}],
     links:[{label:"Week 8",href:"week-08.html"}],
     keywords:"routh hurwitz array first column sign changes right half plane roots gain range symbolic stability"},

    /* ---- Steady-state error ---- */
    {id:"eq-ess", cat:"Steady-state error", name:"Steady-state error (unity feedback)",
     latex:R`e_\infty = \lim_{s\to0} sR(s)\,[1 - T(s)] = \lim_{s\to0} \frac{sR(s)}{1 + C(s)G(s)}`,
     desc:"Two equivalent routes to the same number — via the closed-loop transfer function, or via the open-loop C(s)G(s). The second form shows that large loop gain at low frequency is what makes error small.",
     vars:[{sym:R`R(s)`,mean:"reference input"},{sym:R`T(s)`,mean:"closed-loop transfer function"},{sym:R`e_\infty`,mean:"steady-state error"}],
     links:[{label:"Week 9",href:"week-09.html"}],
     keywords:"steady state error unity feedback final value theorem closed loop open loop transfer function loop gain"},

    {id:"eq-error-constants", cat:"Steady-state error", name:"Static error constants",
     latex:R`K_p = \lim_{s\to0} CG \qquad K_v = \lim_{s\to0} sCG \qquad K_a = \lim_{s\to0} s^2 CG`,
     desc:"The position, velocity and acceleration constants give the steady-state error directly: e∞ = 1/(1+Kp) for a step, 1/Kv for a ramp and 1/Ka for a parabola. Each is infinite (zero error) once the forward path has enough pure integrators.",
     vars:[{sym:R`K_p`,mean:"position constant (step)"},{sym:R`K_v`,mean:"velocity constant (ramp)"},{sym:R`K_a`,mean:"acceleration constant (parabola)"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"System type",href:"glossary.html#g-system-type"}],
     keywords:"static error constants position velocity acceleration step ramp parabola system type integrators zero error"},

    {id:"eq-pole-placement", cat:"Steady-state error", name:"Pole placement",
     latex:R`A(s)L(s) + B(s)P(s) = A_{cl}(s)`,
     desc:"Choose the controller polynomials P and L so the closed-loop characteristic polynomial equals a desired Acl chosen from the transient specifications. Matching coefficients gives a linear system of equations for the controller parameters.",
     vars:[{sym:R`A_{cl}(s)`,mean:"desired closed-loop polynomial"},{sym:R`P,L`,mean:"controller numerator / denominator"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Pole placement",href:"glossary.html#g-pole-placement"}],
     keywords:"pole placement diophantine polynomial approach desired characteristic coefficient matching controller design PI PID"},

    /* ---- PID & feedback ---- */
    {id:"eq-pid", cat:"PID & feedback", name:"Ideal PID controller",
     latex:R`u(t) = K_P e(t) + K_I\!\int_0^t\! e(\tau)d\tau + K_D \frac{de(t)}{dt} \qquad C(s) = K_P + \frac{K_I}{s} + K_D s`,
     desc:"Proportional action responds to present error, integral action removes steady-state error by accumulating past error, and derivative action anticipates future error, adding damping. As a transfer function it has one pole at the origin and two zeros.",
     vars:[{sym:R`K_P`,mean:"proportional gain"},{sym:R`K_I`,mean:"integral gain"},{sym:R`K_D`,mean:"derivative gain"},{sym:R`e(t)`,mean:"error signal"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"PID controller",href:"glossary.html#g-pid"}],
     keywords:"PID proportional integral derivative controller error time domain transfer function pole origin zeros"},

    {id:"eq-pid-practical", cat:"PID & feedback", name:"Practical (realisable) PID",
     latex:R`C(s) = K_P + \frac{K_I}{s} + \frac{K_D s}{\tau_D s + 1} \qquad C(s) = K_P\!\left(1 + \frac{1}{T_i s} + \frac{T_d s}{\tau_D s + 1}\right)`,
     desc:"A pure derivative is improper and cannot be built, so a filter pole is added. The second (parallel form 2) writes the same controller with reset time Ti and derivative time Td, with the filter chosen as Td/10 ≤ τD ≤ Td/2.",
     vars:[{sym:R`\tau_D`,mean:"derivative filter time constant"},{sym:R`T_i`,mean:"reset time"},{sym:R`T_d`,mean:"derivative time"}],
     links:[{label:"Week 10",href:"week-10.html"}],
     keywords:"practical PID filter pole realisable proper parallel form reset time derivative time noise amplification"},

    {id:"eq-sensitivity", cat:"PID & feedback", name:"Sensitivity function",
     latex:R`S_G^T = \frac{\partial T/T}{\partial G/G} \qquad S_{ol} = 1 \qquad S_{cl} = \frac{1}{1 + C(s)G(s)}`,
     desc:"Sensitivity measures how a fractional change in the plant feeds through to the closed loop. Open loop it is exactly 1 — a 10% plant error gives 10% output error. Closed loop it is divided by the loop gain, which is the central quantitative argument for feedback.",
     vars:[{sym:R`T`,mean:"closed-loop transfer function"},{sym:R`G`,mean:"plant transfer function"},{sym:R`S`,mean:"sensitivity"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"Sensitivity",href:"glossary.html#g-sensitivity"}],
     keywords:"sensitivity function parameter variation open loop closed loop loop gain robustness benefit of feedback"},

    /* ---- Frequency response ---- */
    {id:"eq-freq-response", cat:"Frequency response", name:"Frequency response",
     latex:R`u(t) = A\sin(\omega t + \phi) \ \Rightarrow\ y_{ss}(t) = |G(j\omega)|A\,\sin\!\big(\omega t + \phi + \angle G(j\omega)\big)`,
     desc:"A stable linear system driven by a sine settles to a sine at the same frequency, scaled in amplitude and shifted in phase. Both depend on frequency; negative phase means the output lags the input. Obtained by substituting s = jω.",
     vars:[{sym:R`|G(j\omega)|`,mean:"magnitude response"},{sym:R`\angle G(j\omega)`,mean:"phase response"},{sym:R`\omega`,mean:"excitation frequency"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Frequency response",href:"glossary.html#g-frequency-response"}],
     keywords:"frequency response sinusoidal steady state magnitude phase lag lead s=jomega substitution"},

    {id:"eq-decibels", cat:"Frequency response", name:"Magnitude in decibels",
     latex:R`|G(j\omega)|_{dB} = 20\log_{10}|G(j\omega)|`,
     desc:"Bode plots use a logarithmic magnitude and a logarithmic frequency axis so that cascaded systems add rather than multiply — which is what makes Bode plots sketchable by hand from a transfer function's factors.",
     vars:[{sym:R`dB`,mean:"decibels"},{sym:R`\omega`,mean:"frequency (log axis)"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Bode plot",href:"glossary.html#g-bode"}],
     keywords:"decibel logarithmic magnitude bode plot semilogx addition cascade sketching asymptote"},

    {id:"eq-margins", cat:"Frequency response", name:"Gain margin & phase margin",
     latex:R`\phi_M = 180^\circ + \angle C(j\omega_{pm})G(j\omega_{pm}) \qquad |CG(j\omega_{gm})| = 1,\ \angle CG = \pm180^\circ`,
     desc:"Stability is judged from the open-loop response against the critical point −1. The phase margin is the extra phase lag tolerable at the gain-crossover frequency (where |CG| = 1); the gain margin is the extra gain tolerable at the phase-crossover frequency (where the phase is −180°).",
     vars:[{sym:R`\phi_M`,mean:"phase margin (degrees)"},{sym:R`\omega_{pm}`,mean:"gain-crossover frequency"},{sym:R`\omega_{gm}`,mean:"phase-crossover frequency"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Phase margin",href:"glossary.html#g-phase-margin"}],
     keywords:"gain margin phase margin crossover frequency critical point relative stability bode robustness"},

    {id:"eq-pm-zeta", cat:"Frequency response", name:"Phase margin vs damping ratio",
     latex:R`\phi_M = \tan^{-1}\!\frac{2\zeta}{\sqrt{\sqrt{4\zeta^4+1}-2\zeta^2}} \qquad \zeta \approx \frac{\phi_M}{100}`,
     desc:"For the standard second-order loop, phase margin and damping ratio are in one-to-one correspondence — and the relation is near-linear up to about 60°, giving the rule of thumb ζ ≈ PM/100. This is what lets time-domain specs be met using frequency-domain measurements.",
     vars:[{sym:R`\phi_M`,mean:"phase margin (degrees)"},{sym:R`\zeta`,mean:"damping ratio"}],
     links:[{label:"Week 12",href:"week-12.html"}],
     keywords:"phase margin damping ratio relationship rule of thumb approximation linear design translation"},

    {id:"eq-resonance", cat:"Frequency response", name:"Closed-loop magnitude & resonance",
     latex:R`|T_{cl}(j\omega)| = \frac{\omega_n^2}{\sqrt{(\omega_n^2-\omega^2)^2 + 4\zeta^2\omega_n^2\omega^2}}`,
     desc:"The closed-loop magnitude response of the standard second-order system. Its peak value — the resonance peak — grows as damping falls, giving another frequency-domain read on ζ, alongside bandwidth as a measure of response speed.",
     vars:[{sym:R`\omega_n`,mean:"natural frequency"},{sym:R`\zeta`,mean:"damping ratio"},{sym:R`\omega`,mean:"frequency"}],
     links:[{label:"Week 12",href:"week-12.html"},{label:"Bandwidth",href:"glossary.html#g-bandwidth"}],
     keywords:"resonance peak closed loop magnitude damping ratio bandwidth speed frequency domain specification"}
  ],

  /* =========================================================
     GLOSSARY
     ========================================================= */
  glossary:[
    {id:"g-state", term:"State", sym:R`\mathbf z(t)`,
      def:R`A set of variables that, at any instant, are sufficient to determine every other dependent variable in the system. Collected into the state vector \(\mathbf z(t)\); solving for it is the whole goal of state-space modelling.`,
      see:[{label:"State-space form",href:"equations.html#eq-state-space"}]},
    {id:"g-ccr", term:"Component Constitutive Relation (CCR)", sym:R`—`,
      def:R`The governing equation of an individual component — a 'mini-model' such as \(F = k\Delta\) for a spring. CCRs do not depend on how the system is wired together, and writing them down declares the modelling assumptions you have made.`,
      see:[{label:"Spring & damper CCRs",href:"equations.html#eq-spring-damper"}]},
    {id:"g-ssr", term:"System Structural Relation (SSR)", sym:R`—`,
      def:R`The relations describing how components are interconnected — Newton's laws via a free-body diagram, or Kirchhoff's laws around a loop. This is where the physics thinking happens, and where most of the marks are.`,
      see:[{label:"Kirchhoff's laws",href:"equations.html#eq-kirchhoff"}]},
    {id:"g-power-port", term:"Power port", sym:R`—`,
      def:R`A point at which two components exchange energy. At every port there are two variables whose product is power — an effort and a flow. Some components have one port; a motor has two (electrical and mechanical).`,
      see:[{label:"Power = effort × flow",href:"equations.html#eq-power"}]},
    {id:"g-effort-flow", term:"Effort & flow", sym:R`e(t),\,f(t)`,
      def:R`The two generalised power variables. Effort is force, torque, voltage or pressure; flow is linear velocity, angular velocity, current or volumetric flow rate. Their product is always power, which is what makes the cross-domain analogy work.`,
      see:[{label:"Generalised elements",href:"equations.html#eq-generalised"}]},
    {id:"g-energy-variable", term:"Energy variable", sym:R`p,\,q`,
      def:R`The time integrals of effort and flow — generalised momentum and generalised displacement. We always choose these as the states, so that the state derivatives are the power variables and the model tracks the system's stored energy.`,
      see:[{label:"Energy variables",href:"equations.html#eq-energy-vars"}]},
    {id:"g-dof", term:"Degree of freedom", sym:R`N_{DOF}`,
      def:R`An independent way a mass can move. Masses rigidly linked are not independent and count once. Mechanical systems need two states per degree of freedom — one momentum and one displacement.`,
      see:[{label:"How many states?",href:"equations.html#eq-state-count"}]},
    {id:"g-linked-flux", term:"Linked flux", sym:R`\lambda`,
      def:R`The electrical generalised momentum, a measure of magnetic field presence in an inductor, with \(\lambda = LI\) and \(V = \dot\lambda\). Along with charge it is the state variable of an electrical system.`,
      see:[{label:"Electrical CCRs",href:"equations.html#eq-electrical-ccr"}]},
    {id:"g-back-emf", term:"Back EMF", sym:R`e = K_\omega\omega`,
      def:R`The voltage a spinning motor generates opposing the applied voltage, proportional to shaft speed. It is what couples the mechanical side of a motor back into the electrical circuit, making the motor a two-port element.`,
      see:[{label:"DC motor CCRs",href:"equations.html#eq-dc-motor"}]},
    {id:"g-transformer", term:"Transformer", sym:R`—`,
      def:R`A two-port element mapping effort to effort and flow to flow — a lever, gearbox, or piston-cylinder. Ideal transformers conserve power, \(e_1f_1 = e_2f_2\).`,
      see:[{label:"Ideal transformer",href:"equations.html#eq-transformer"}]},
    {id:"g-gyrator", term:"Gyrator", sym:R`—`,
      def:R`A two-port element that swaps the roles of the power variables — effort at one port produces flow at the other. The permanent-magnet DC motor is the course's example, converting current to torque and speed to voltage.`,
      see:[{label:"DC motor CCRs",href:"equations.html#eq-dc-motor"}]},
    {id:"g-pressure-momentum", term:"Pressure momentum", sym:R`P_p`,
      def:R`The fluid-power generalised momentum — the momentum of fluid moving along a pipe. Only appreciable in long, thin pipes, where the fluid's mass resists changes in flow rate.`,
      see:[{label:"Fluid inertia",href:"equations.html#eq-fluid-inertia"}]},
    {id:"g-equilibrium", term:"Equilibrium point", sym:R`\mathbf z^*`,
      def:R`A state at which all derivatives vanish for a constant input, so the system stays put. Linear models are built by expanding about an equilibrium, and are only trustworthy near it.`,
      see:[{label:"Equilibrium condition",href:"equations.html#eq-equilibrium"}]},
    {id:"g-transfer-function", term:"Transfer function", sym:R`G(s)`,
      def:R`The ratio of the Laplace transform of the output to that of the input, with zero initial conditions. It strips out the internal structure of a model, keeping only the input–output behaviour — the natural language of classical control.`,
      see:[{label:"State-space → TF",href:"equations.html#eq-ss-to-tf"}]},
    {id:"g-pole-zero", term:"Pole & zero", sym:R`p_i,\,z_i`,
      def:R`Poles are the roots of the transfer function's denominator and set the shape and speed of the natural response; zeros are the roots of the numerator and modify the size of each response term. Pole locations decide stability.`,
      see:[{label:"Rational transfer function",href:"equations.html#eq-rational-tf"}]},
    {id:"g-plant", term:"Plant", sym:R`G(s)`,
      def:R`The physical object being controlled — the thing the first five weeks of modelling produce a description of. A control system surrounds it with sensors, actuators and a control algorithm.`,
      see:[{label:"Closed-loop transfer fn",href:"equations.html#eq-closed-loop"}]},
    {id:"g-feedback", term:"Feedback", sym:R`—`,
      def:R`Measuring a system's output and using it to compute the control action. Feedback buys stabilisation of unstable plants, accurate tracking, disturbance rejection and reduced sensitivity — none of which open-loop control can deliver.`,
      see:[{label:"Sensitivity function",href:"equations.html#eq-sensitivity"}]},
    {id:"g-dc-gain", term:"DC gain", sym:R`G(0)`,
      def:R`The steady-state gain — the factor by which a constant input is multiplied once transients have decayed. Obtained from the final value theorem by evaluating the transfer function at \(s=0\).`,
      see:[{label:"Final value theorem",href:"equations.html#eq-fvt"}]},
    {id:"g-damping-ratio", term:"Damping ratio", sym:R`\zeta`,
      def:R`Sets the shape of a second-order response: \(\zeta<1\) oscillatory (under-damped), \(\zeta=1\) critically damped, \(\zeta>1\) over-damped. Percent overshoot depends on \(\zeta\) alone.`,
      see:[{label:"Percent overshoot",href:"equations.html#eq-overshoot"}]},
    {id:"g-natural-frequency", term:"Natural frequency", sym:R`\omega_n`,
      def:R`Sets the speed of a second-order response — the radius of the pole pair in the s-plane. With \(\zeta\) fixed by the overshoot requirement, \(\omega_n\) is the lever for meeting rise and settling time specs.`,
      see:[{label:"Second-order standard form",href:"equations.html#eq-second-order"}]},
    {id:"g-nmp", term:"Non-minimum phase", sym:R`—`,
      def:R`A system with a zero in the right half-plane. Its step response initially moves the wrong way (undershoot) before recovering, which fundamentally limits how fast the loop can be made without instability.`,
      see:[{label:"Week 7",href:"week-07.html"}]},
    {id:"g-bibo", term:"BIBO stability", sym:R`—`,
      def:R`Bounded-input bounded-output stability: every bounded input produces a bounded output. Equivalent to all transfer-function poles having strictly negative real parts.`,
      see:[{label:"BIBO stability",href:"equations.html#eq-bibo"}]},
    {id:"g-char-eq", term:"Characteristic equation", sym:R`1+CG=0`,
      def:R`The equation whose roots are the closed-loop poles. Everything about closed-loop stability and transient behaviour is decided by it, which is why so much of control design is about shaping this polynomial.`,
      see:[{label:"Characteristic equation",href:"equations.html#eq-char-eq"}]},
    {id:"g-root-locus", term:"Root locus", sym:R`—`,
      def:R`A plot of how the closed-loop poles travel through the s-plane as one parameter (usually a gain) is varied from zero to infinity. It shows at a glance the gain range that keeps a system stable and the damping achievable.`,
      see:[{label:"Characteristic equation",href:"equations.html#eq-char-eq"}]},
    {id:"g-system-type", term:"System type", sym:R`n`,
      def:R`The number of pure integrators in the forward path. Type 0 tracks a step with finite error; type 1 tracks a step exactly and a ramp with finite error; type 2 tracks a ramp exactly. It determines which static error constants are finite.`,
      see:[{label:"Static error constants",href:"equations.html#eq-error-constants"}]},
    {id:"g-pole-placement", term:"Pole placement", sym:R`—`,
      def:R`Designing a controller so the closed-loop characteristic polynomial equals one chosen in advance from the transient specifications. Solved by matching coefficients — the polynomial (Diophantine) approach.`,
      see:[{label:"Pole placement",href:"equations.html#eq-pole-placement"}]},
    {id:"g-pid", term:"PID controller", sym:R`C(s)`,
      def:R`The three-term controller acting on present (P), past (I) and predicted future (D) error. Integral action drives steady-state error to zero; derivative action adds damping. Most industrial controllers are PID or a variant.`,
      see:[{label:"Ideal PID controller",href:"equations.html#eq-pid"}]},
    {id:"g-windup", term:"Integrator windup", sym:R`—`,
      def:R`When an actuator saturates, the integral term keeps accumulating error even though the control action cannot grow — so the controller "winds up" and overshoots badly on recovery. Anti-windup protection stops the integrator while saturated.`,
      see:[{label:"Practical PID",href:"equations.html#eq-pid-practical"}]},
    {id:"g-sensitivity", term:"Sensitivity", sym:R`S_G^T`,
      def:R`The ratio of the fractional change in the closed-loop transfer function to the fractional change in the plant. Open loop it equals 1; closed loop it is \(1/(1+CG)\) — the quantitative case for feedback.`,
      see:[{label:"Sensitivity function",href:"equations.html#eq-sensitivity"}]},
    {id:"g-frequency-response", term:"Frequency response", sym:R`G(j\omega)`,
      def:R`The steady-state response of a stable linear system to a sinusoid: same frequency, amplitude scaled by \(|G(j\omega)|\), phase shifted by \(\angle G(j\omega)\). Found by substituting \(s = j\omega\).`,
      see:[{label:"Frequency response",href:"equations.html#eq-freq-response"}]},
    {id:"g-bode", term:"Bode plot", sym:R`—`,
      def:R`A pair of semi-log plots — magnitude in decibels and phase in degrees, both against log frequency. The logarithmic magnitude turns cascaded products into sums, so plots can be sketched by adding the contribution of each factor.`,
      see:[{label:"Magnitude in decibels",href:"equations.html#eq-decibels"}]},
    {id:"g-phase-margin", term:"Phase margin", sym:R`\phi_M`,
      def:R`The additional phase lag that would drive the closed loop unstable, measured at the frequency where the open-loop gain is 1. A measure of relative stability, and closely tied to damping ratio via \(\zeta \approx \phi_M/100\).`,
      see:[{label:"Gain & phase margin",href:"equations.html#eq-margins"}]},
    {id:"g-gain-margin", term:"Gain margin", sym:R`GM`,
      def:R`The factor (in dB) by which the open-loop gain could be raised before the closed loop becomes unstable, measured where the open-loop phase is −180°. Larger margins mean more tolerance to modelling error.`,
      see:[{label:"Gain & phase margin",href:"equations.html#eq-margins"}]},
    {id:"g-bandwidth", term:"Bandwidth", sym:R`\omega_B`,
      def:R`The frequency range over which the closed loop tracks its reference well — usually where the closed-loop magnitude first falls 3 dB below its DC value. Higher bandwidth means a faster response.`,
      see:[{label:"Closed-loop magnitude & resonance",href:"equations.html#eq-resonance"}]}
  ],

  /* =========================================================
     ASSESSMENTS
     ------------------------------------------------------------
     Dates for the weekly quizzes and labs come from the Canvas
     calendar feed (exported 17 Aug 2026) and are pinned with `due`.

     WEIGHTS: the Week 1 summary gives the per-item breakdown used
     below (4 modelling quizzes at 5%, mid-sem 15%, 5 control
     quizzes at 4%, final 15%, 6 labs at 5% = 100%). The official
     2026 course outline instead groups the same assessments as
     "Weekly Quizzes 20% / Laboratory Assignments 30% / Mid-term
     and Final Quizzes 50%". Both total 100% and the lab weighting
     agrees; confirm the split on Canvas.
     ========================================================= */
  assessments:[
    /* ---- modelling quizzes (Fridays, 5% each) ---- */
    {id:"a-quiz-w2", name:"Quiz — Week 2", type:"Online quiz", weight:"5%",
      weekLabel:"Week 2 · Fri 28 Aug · modelling", due:"2026-08-28",
      covers:"Week 1–2: modelling procedure, state-space models, translational mechanical systems.",
      desc:"First of four weekly quizzes on the modelling half of the course (5% each).",
      study:["The modelling procedure: inputs, outputs, states, CCRs, SSRs, state and output equations.","Translational mechanical CCRs and free-body diagrams."],
      weeks:[1,2], related:[{label:"State-space form",href:"equations.html#eq-state-space"},{label:"Week 1",href:"week-01.html"}]},
    {id:"a-quiz-w3", name:"Quiz — Week 3", type:"Online quiz", weight:"5%",
      weekLabel:"Week 3 · Fri 4 Sep · modelling", due:"2026-09-04",
      covers:"Week 3: rotational mechanical and the generalised effort/flow framework.",
      desc:"Second weekly modelling quiz (5%).",
      study:["Power ports, effort and flow, and the energy variables.","Rotational CCRs and the generalised elements."],
      weeks:[2,3], related:[{label:"Power = effort × flow",href:"equations.html#eq-power"},{label:"Week 2",href:"week-02.html"}]},
    {id:"a-quiz-w4", name:"Quiz — Week 4", type:"Online quiz", weight:"5%",
      weekLabel:"Week 4 · Fri 11 Sep · modelling", due:"2026-09-11",
      covers:"Week 4: electrical and electromechanical systems.",
      desc:"Third weekly modelling quiz (5%).",
      study:["Electrical CCRs, Kirchhoff's laws and state counting.","DC motor coupling and back EMF."],
      weeks:[3], related:[{label:"Electrical CCRs",href:"equations.html#eq-electrical-ccr"},{label:"Week 3",href:"week-03.html"}]},
    {id:"a-quiz-w5", name:"Quiz — Week 5", type:"Online quiz", weight:"5%",
      weekLabel:"Week 5 · Fri 18 Sep · modelling", due:"2026-09-18",
      covers:"Week 5: fluid power systems and linearisation.",
      desc:"Fourth and final weekly modelling quiz (5%).",
      study:["Fluid power energy and power variables; piston-cylinders.","Linearisation about an equilibrium and the Jacobian matrices."],
      weeks:[4,5], related:[{label:"Piston-cylinder CCRs",href:"equations.html#eq-piston"},{label:"Week 4",href:"week-04.html"}]},

    /* ---- mid-semester quiz ---- */
    {id:"a-midsem", name:"Mid-semester Quiz", type:"Major quiz", weight:"15%",
      weekLabel:"Week 6 · date TBC — see Canvas", dueWeek:6, dueOffsetDays:0,
      covers:"The whole modelling half: Weeks 1–5.",
      desc:"Assesses your knowledge of modelling. The Week 1 summary places this in Week 6 at 15%; the exact date was not in the Canvas calendar feed, so confirm it on Canvas. The second half of the course builds directly on this material.",
      study:[
        "Run the full modelling procedure end-to-end on an unfamiliar system.",
        "Be fluent in all four domains: translational, rotational, electrical, fluid power.",
        "Know the generalised effort/flow analogy so a new component can be classified quickly.",
        "Linearise a nonlinear state-space model about an equilibrium.",
        "Convert between state-space, ODE and transfer-function representations."
      ],
      weeks:[1,2,3,4,5],
      related:[{label:"State-space form",href:"equations.html#eq-state-space"},{label:"Jacobian linearisation",href:"equations.html#eq-jacobian"},{label:"Week 5",href:"week-05.html"}]},

    /* ---- control quizzes (Fridays, 4% each) ---- */
    {id:"a-quiz-w7", name:"Quiz — Week 7", type:"Online quiz", weight:"4%",
      weekLabel:"Week 7 · Fri 9 Oct · control", due:"2026-10-09",
      covers:"Week 6–7: control fundamentals and time-domain response.",
      desc:"First of five weekly quizzes on the control half (4% each).",
      study:["Block-diagram algebra and the closed-loop transfer function.","Second-order specifications: overshoot, rise, settling and peak time."],
      weeks:[6,7], related:[{label:"Closed-loop transfer fn",href:"equations.html#eq-closed-loop"},{label:"Week 6",href:"week-06.html"}]},
    {id:"a-quiz-w8", name:"Quiz — Week 8", type:"Online quiz", weight:"4%",
      weekLabel:"Week 8 · Fri 16 Oct · control", due:"2026-10-16",
      covers:"Week 8: stability, Routh–Hurwitz and root locus.",
      desc:"Second weekly control quiz (4%).",
      study:["Build a Routh array and find the gain range for stability.","Read a root locus for damping and stability."],
      weeks:[8], related:[{label:"Routh array",href:"equations.html#eq-routh"},{label:"Week 8",href:"week-08.html"}]},
    {id:"a-quiz-w9", name:"Quiz — Week 9", type:"Online quiz", weight:"4%",
      weekLabel:"Week 9 · Fri 23 Oct · control", due:"2026-10-23",
      covers:"Week 9: steady-state error and pole placement.",
      desc:"Third weekly control quiz (4%).",
      study:["Static error constants and system type.","Design a controller by pole placement."],
      weeks:[9], related:[{label:"Static error constants",href:"equations.html#eq-error-constants"},{label:"Week 9",href:"week-09.html"}]},
    {id:"a-quiz-w10", name:"Quiz — Week 10", type:"Online quiz", weight:"4%",
      weekLabel:"Week 10 · Fri 30 Oct · control", due:"2026-10-30",
      covers:"Week 10: PID control and the benefits of feedback.",
      desc:"Fourth weekly control quiz (4%).",
      study:["What each PID term does, and practical (filtered) structures.","Open- vs closed-loop stability, tracking, disturbance rejection and sensitivity."],
      weeks:[10], related:[{label:"Ideal PID controller",href:"equations.html#eq-pid"},{label:"Week 10",href:"week-10.html"}]},
    {id:"a-quiz-w11", name:"Quiz — Week 11", type:"Online quiz", weight:"4%",
      weekLabel:"Week 11 · Fri 6 Nov · control", due:"2026-11-06",
      covers:"Week 11: frequency response, Bode plots and stability margins.",
      desc:"Fifth and final weekly control quiz (4%).",
      study:["Sketch a Bode plot from a transfer function's factors.","Read gain and phase margins off the plot."],
      weeks:[11], related:[{label:"Gain & phase margin",href:"equations.html#eq-margins"},{label:"Week 11",href:"week-11.html"}]},

    /* ---- labs (Sundays, 5% each) ---- */
    {id:"a-lab1", name:"Lab 1", type:"MATLAB lab", weight:"5%",
      weekLabel:"Sun 6 Sep · Problems 1 & 2", due:"2026-09-06",
      covers:"Modelling and simulation of a basic system.",
      desc:"Take-home MATLAB assignment with a pre-lab instructional followed by an assessed task. TWO separate submissions are due on this date — Problem 1 and Problem 2. Mostly submitted via MATLAB Grader and Canvas.",
      study:["Work through the pre-lab (video or live script) first.","Submit Problem 1.","Submit Problem 2."],
      weeks:[1,2], related:[{label:"Week 1",href:"week-01.html"}]},
    {id:"a-lab2", name:"Lab 2", type:"MATLAB lab", weight:"5%",
      weekLabel:"Sun 20 Sep", due:"2026-09-20",
      covers:"Modelling across physical domains.",
      desc:"Take-home MATLAB assignment (pre-lab then assessed task), submitted via MATLAB Grader and Canvas.",
      study:["Complete the pre-lab before attempting the assessed task."],
      weeks:[3,4], related:[{label:"Week 3",href:"week-03.html"}]},
    {id:"a-lab3", name:"Lab 3", type:"MATLAB lab", weight:"5%",
      weekLabel:"Sun 11 Oct · + hand-written notes", due:"2026-10-11",
      covers:"Simulation and analysis of linear systems.",
      desc:"Take-home MATLAB assignment. TWO separate submissions are due on this date — the lab itself and a hand-written notes submission.",
      study:["Complete the pre-lab.","Submit the lab.","Submit the hand-written notes."],
      weeks:[5,6], related:[{label:"Week 5",href:"week-05.html"}]},
    {id:"a-lab4", name:"Lab 4", type:"MATLAB lab", weight:"5%",
      weekLabel:"Sun 1 Nov", due:"2026-11-01",
      covers:"Pole placement and controller design.",
      desc:"Take-home MATLAB assignment. The pole-placement live script doubles as the pre-lab for this one.",
      study:["Work through the pole-placement live script from the Week 9 lectures."],
      weeks:[9], related:[{label:"Pole placement",href:"equations.html#eq-pole-placement"},{label:"Week 9",href:"week-09.html"}]},
    {id:"a-lab5", name:"Lab 5", type:"MATLAB lab", weight:"5%",
      weekLabel:"Sun 8 Nov · Problems 1 & 2", due:"2026-11-08",
      covers:"Control design and simulation.",
      desc:"Take-home MATLAB assignment. TWO separate submissions are due on this date — Problem 1 and Problem 2.",
      study:["Complete the pre-lab.","Submit Problem 1.","Submit Problem 2."],
      weeks:[10], related:[{label:"Ideal PID controller",href:"equations.html#eq-pid"},{label:"Week 10",href:"week-10.html"}]},
    {id:"a-lab6", name:"Lab 6", type:"MATLAB lab", weight:"5%",
      weekLabel:"Sun 22 Nov", due:"2026-11-22",
      covers:"The capstone lab — modelling and controlling a 1-link robotic manipulator.",
      desc:"Final take-home MATLAB assignment. The labs build on each other toward being able to model and control a 1-link robotic manipulator.",
      study:["Pull together the modelling and control workflow from the whole semester."],
      weeks:[11,12], related:[{label:"Week 12",href:"week-12.html"}]},

    /* ---- final quiz ---- */
    {id:"a-final", name:"Final Quiz", type:"Major quiz", weight:"15%",
      weekLabel:"Week 13 · date TBC — see Canvas", dueWeek:13, dueOffsetDays:0,
      covers:"The entire course — modelling and control combined.",
      desc:"Assesses modelling and control together. The Week 1 summary places this in Week 13 at 15%; the exact date was not in the Canvas calendar feed, so confirm it on Canvas.",
      study:[
        "Model an unfamiliar multi-domain system and linearise it.",
        "Convert to a transfer function and analyse stability (Routh–Hurwitz, root locus).",
        "Meet transient and steady-state specifications by pole placement or PID design.",
        "Use Bode plots and stability margins to check the design in the frequency domain.",
        "Revisit the problem booklet — it is organised by topic and mostly has worked solutions."
      ],
      weeks:[6,7,8,9,10,11,12],
      related:[{label:"Characteristic equation",href:"equations.html#eq-char-eq"},{label:"Ideal PID controller",href:"equations.html#eq-pid"},{label:"Gain & phase margin",href:"equations.html#eq-margins"}]}
  ]
};
