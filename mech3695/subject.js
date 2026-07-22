/* ============================================================
   MECH3695 — Heat Transfer   ·  SUBJECT DATA FILE
   ------------------------------------------------------------
   Everything below feeds the navigation, search, equations page,
   glossary, assessments and dashboard automatically. Maths is
   written as normal LaTeX inside the R`...` raw strings (single
   backslashes — no escaping needed).

   Content transcribed from the 2026 Semester-1 lecture set
   (Dr Tuyen Nguyen) and Incropera/Bergman "Fundamentals of Heat
   and Mass Transfer". This subject is completed and lives in the
   hub's Archived subjects section, but every page, the search
   index and all cross-links work exactly as for an active subject.

   • Add an equation  -> push an object into  SUBJECT.equations
   • Add a glossary term -> push into  SUBJECT.glossary
   • Add an assessment -> push into  SUBJECT.assessments
   • Add a weekly topic page -> create the .html, then add an entry
                                to SUBJECT.pages
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  meta:{
    code:"MECH3695",
    title:"Heat Transfer",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 1, 2026",
    coordinator:"Dr Tuyen Nguyen",
    text:"Bergman, Lavine, Incropera & DeWitt — Fundamentals of Heat and Mass Transfer (8th ed., Wiley, 2017)",
    weekOneMonday:"2026-02-23"   // <-- EDIT to the real Week 1 Monday if dates matter to you
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
     WEEKLY CONTENT PAGES
     ========================================================= */
  pages:[
    {
      f:"week-01.html", week:1,
      t:"The Three Modes & the Heat Equation",
      summary:"What heat transfer is and how it links to thermodynamics; the three modes (conduction, convection, radiation) with their rate laws — Fourier's law, Newton's law of cooling and the Stefan–Boltzmann law; thermal conductivity and diffusivity; deriving the heat diffusion equation; and boundary/initial conditions.",
      keywords:"heat transfer conduction convection radiation fourier law newton law of cooling stefan boltzmann thermal conductivity thermal diffusivity emissivity absorptivity irradiation heat flux heat rate temperature gradient thermal energy first law thermodynamics energy balance conservation of energy heat diffusion equation heat equation cartesian cylindrical spherical boundary conditions dirichlet neumann convection boundary condition adiabatic insulated thermal time scale characteristic time",
      related:[
        {type:"eq", label:"Fourier's law",              href:"equations.html#eq-fourier"},
        {type:"eq", label:"Newton's law of cooling",    href:"equations.html#eq-newton-cooling"},
        {type:"eq", label:"Stefan–Boltzmann law",       href:"equations.html#eq-stefan-boltzmann"},
        {type:"eq", label:"Net radiation exchange",     href:"equations.html#eq-net-radiation"},
        {type:"eq", label:"Heat diffusion equation",    href:"equations.html#eq-heat-equation"},
        {type:"eq", label:"Thermal diffusivity",        href:"equations.html#eq-thermal-diffusivity"},
        {type:"def",label:"Thermal conductivity",       href:"glossary.html#g-thermal-conductivity"},
        {type:"def",label:"Heat flux",                  href:"glossary.html#g-heat-flux"},
        {type:"def",label:"Thermal diffusivity",        href:"glossary.html#g-thermal-diffusivity"},
        {type:"flag",label:"Assignment 1 (W1–3)",       href:"assessments.html#a-assign1"}
      ]
    },
    {
      f:"week-02.html", week:2,
      t:"1-D Steady Conduction & Thermal Resistance",
      summary:"One-dimensional steady conduction through plane and cylindrical walls: temperature distributions and heat rates from the heat equation, the thermal-resistance analogy (conduction, convection and radiation resistances), resistance networks in series and parallel, composite walls and the overall heat transfer coefficient U, thermal contact resistance, and conduction with internal energy generation.",
      keywords:"one dimensional steady state conduction plane wall cylindrical wall temperature distribution heat rate thermal resistance conduction resistance convection resistance radiation resistance resistance circuit series parallel composite wall overall heat transfer coefficient U contact resistance interfacial thermal energy generation volumetric generation q dot maximum temperature basement insulation car window defogger steam pipe log profile",
      related:[
        {type:"eq", label:"Plane-wall heat rate",       href:"equations.html#eq-plane-rate"},
        {type:"eq", label:"Conduction resistance",      href:"equations.html#eq-r-cond"},
        {type:"eq", label:"Convection resistance",      href:"equations.html#eq-r-conv"},
        {type:"eq", label:"Cylindrical heat rate",      href:"equations.html#eq-cyl-rate"},
        {type:"eq", label:"Overall coefficient U",      href:"equations.html#eq-overall-U"},
        {type:"eq", label:"Contact resistance",         href:"equations.html#eq-contact"},
        {type:"eq", label:"Conduction w/ generation",   href:"equations.html#eq-generation"},
        {type:"def",label:"Thermal resistance",         href:"glossary.html#g-thermal-resistance"},
        {type:"def",label:"Overall heat transfer coeff.",href:"glossary.html#g-overall-u"},
        {type:"def",label:"Contact resistance",         href:"glossary.html#g-contact-resistance"},
        {type:"flag",label:"Assignment 1 (W1–3)",       href:"assessments.html#a-assign1"}
      ]
    },
    {
      f:"week-03.html", week:3,
      t:"Extended Surfaces (Fins)",
      summary:"Enhancing convection by adding surface area with fins: deriving the fin equation from an energy balance, the fin parameter m, general solution for a uniform cross-section and the four tip boundary conditions (convecting, adiabatic, prescribed temperature, infinite), fin heat rate, and the three performance measures — fin efficiency (with the corrected length), fin effectiveness and fin thermal resistance — extended to fin arrays via the overall surface efficiency.",
      keywords:"fin extended surface heat sink fin equation energy balance fin parameter m uniform cross section boundary conditions convective tip adiabatic tip prescribed temperature infinite fin hyperbolic functions cosh sinh tanh fin heat rate fin efficiency corrected length fin effectiveness fin resistance rectangular triangular parabolic pin fin annular fin array of fins overall surface efficiency bessel functions aluminium rod",
      related:[
        {type:"eq", label:"Fin equation",               href:"equations.html#eq-fin-equation"},
        {type:"eq", label:"Fin parameter m",            href:"equations.html#eq-fin-m"},
        {type:"eq", label:"Adiabatic-tip fin heat rate",href:"equations.html#eq-fin-heat"},
        {type:"eq", label:"Fin efficiency",             href:"equations.html#eq-fin-efficiency"},
        {type:"eq", label:"Fin effectiveness",          href:"equations.html#eq-fin-effectiveness"},
        {type:"eq", label:"Overall surface efficiency", href:"equations.html#eq-fin-array"},
        {type:"def",label:"Fin",                        href:"glossary.html#g-fin"},
        {type:"def",label:"Fin efficiency",             href:"glossary.html#g-fin-efficiency"},
        {type:"def",label:"Fin effectiveness",          href:"glossary.html#g-fin-effectiveness"},
        {type:"flag",label:"Assignment 1 (W1–3)",       href:"assessments.html#a-assign1"}
      ]
    },
    {
      f:"week-04.html", week:4,
      t:"Introduction to Convection",
      summary:"The physical origin of convection: the velocity and thermal boundary layers, why the surface heat flux is set by the temperature gradient in the fluid at the wall, local versus average convection coefficients, and the dimensionless groups that organise all convection correlations — the Reynolds, Prandtl and Nusselt numbers — obtained by non-dimensionalising the boundary-layer equations.",
      keywords:"convection boundary layer velocity boundary layer thermal boundary layer no slip condition friction coefficient wall shear stress local convection coefficient average convection coefficient reynolds number prandtl number nusselt number similarity nondimensional boundary layer equations laminar turbulent transition critical reynolds number film temperature dynamic viscosity kinematic viscosity",
      related:[
        {type:"eq", label:"Reynolds number",            href:"equations.html#eq-reynolds"},
        {type:"eq", label:"Prandtl number",             href:"equations.html#eq-prandtl"},
        {type:"eq", label:"Nusselt number",             href:"equations.html#eq-nusselt"},
        {type:"eq", label:"Average convection coeff.",  href:"equations.html#eq-avg-h"},
        {type:"eq", label:"Friction coefficient",       href:"equations.html#eq-friction"},
        {type:"def",label:"Boundary layer",             href:"glossary.html#g-boundary-layer"},
        {type:"def",label:"Reynolds number",            href:"glossary.html#g-reynolds"},
        {type:"def",label:"Prandtl number",             href:"glossary.html#g-prandtl"},
        {type:"def",label:"Nusselt number",             href:"glossary.html#g-nusselt"},
        {type:"flag",label:"Assignment 2 (W4–6)",       href:"assessments.html#a-assign2"}
      ]
    },
    {
      f:"week-05.html", week:5,
      t:"External Convection",
      summary:"Empirical correlations for forced convection over external surfaces: the flat plate in parallel flow (laminar, turbulent and mixed boundary conditions, isothermal and constant-flux), the cylinder in cross-flow (Churchill–Bernstein / Zukauskas), the sphere (Whitaker, Ranz–Marshall) and banks of tubes. Properties are evaluated at the film temperature, and a five-step methodology guides the choice of correlation.",
      keywords:"external convection forced convection empirical correlation flat plate parallel flow laminar turbulent mixed boundary layer isothermal constant heat flux isoflux critical reynolds number cylinder cross flow churchill bernstein zukauskas hilpert sphere whitaker ranz marshall banks of tubes tube bank aligned staggered maximum reynolds number film temperature nusselt correlation drag separation",
      related:[
        {type:"eq", label:"Flat plate — laminar (avg)", href:"equations.html#eq-flatplate-lam"},
        {type:"eq", label:"Flat plate — turbulent",     href:"equations.html#eq-flatplate-turb"},
        {type:"eq", label:"Flat plate — mixed",         href:"equations.html#eq-flatplate-mixed"},
        {type:"eq", label:"Cylinder (Churchill–Bernstein)",href:"equations.html#eq-cylinder"},
        {type:"eq", label:"Sphere (Whitaker)",          href:"equations.html#eq-sphere"},
        {type:"def",label:"Film temperature",           href:"glossary.html#g-film-temperature"},
        {type:"def",label:"Nusselt number",             href:"glossary.html#g-nusselt"},
        {type:"flag",label:"Assignment 2 (W4–6)",       href:"assessments.html#a-assign2"}
      ]
    },
    {
      f:"week-06.html", week:6,
      t:"Internal Convection",
      summary:"Convection in pipe and duct flow: mean velocity and mean temperature, hydrodynamic and thermal entry lengths and fully developed conditions, the friction factor, and the energy balance for the two canonical thermal boundary conditions — constant surface heat flux (linear mean-temperature rise) and constant surface temperature (exponential decay, log-mean temperature difference). Laminar Nusselt numbers (4.36 / 3.66), the Dittus–Boelter turbulent correlation, hydraulic diameter for non-circular ducts, and enhancement.",
      keywords:"internal convection pipe flow duct flow mean velocity mean temperature bulk temperature reynolds number entrance length hydrodynamic entry thermal entry fully developed friction factor darcy moody constant heat flux constant surface temperature log mean temperature difference lmtd energy balance laminar nusselt 4.36 3.66 dittus boelter colburn turbulent hydraulic diameter non circular tube annulus enhancement twisted tape",
      related:[
        {type:"eq", label:"Reynolds number (pipe)",     href:"equations.html#eq-reynolds-d"},
        {type:"eq", label:"Hydraulic diameter",         href:"equations.html#eq-hydraulic-d"},
        {type:"eq", label:"Constant-flux mean temp.",   href:"equations.html#eq-int-flux"},
        {type:"eq", label:"Constant-Ts exponential",    href:"equations.html#eq-int-ts"},
        {type:"eq", label:"Dittus–Boelter",             href:"equations.html#eq-dittus-boelter"},
        {type:"def",label:"Entrance length",            href:"glossary.html#g-entrance-length"},
        {type:"def",label:"Mean temperature",           href:"glossary.html#g-mean-temperature"},
        {type:"def",label:"Log-mean temp. difference",  href:"glossary.html#g-lmtd"},
        {type:"flag",label:"Assignment 2 (W4–6)",       href:"assessments.html#a-assign2"}
      ]
    },
    {
      f:"week-07.html", week:7,
      t:"Heat Exchangers",
      summary:"Analysing and sizing heat exchangers: configurations (parallel-flow, counterflow, cross-flow mixed/unmixed, shell-and-tube, compact), the overall heat transfer coefficient with fouling factors, the log-mean-temperature-difference (LMTD) method with the correction factor F for multipass and cross-flow units, and the effectiveness–NTU method for rating an exchanger of known size — with the heat-capacity rate, Cₘᵢₙ, qₘₐₓ, effectiveness and NTU.",
      keywords:"heat exchanger parallel flow counterflow cross flow mixed unmixed shell and tube compact concentric tube overall heat transfer coefficient U fouling factor fouling resistance log mean temperature difference lmtd correction factor F multipass effectiveness ntu number of transfer units heat capacity rate cmin cmax cr qmax rating design method condenser evaporator",
      related:[
        {type:"eq", label:"Heat capacity rate & q",     href:"equations.html#eq-hx-q"},
        {type:"eq", label:"LMTD",                       href:"equations.html#eq-lmtd"},
        {type:"eq", label:"Correction factor F",        href:"equations.html#eq-hx-f"},
        {type:"eq", label:"Effectiveness ε",            href:"equations.html#eq-effectiveness"},
        {type:"eq", label:"NTU",                        href:"equations.html#eq-ntu"},
        {type:"def",label:"Log-mean temp. difference",  href:"glossary.html#g-lmtd"},
        {type:"def",label:"Effectiveness (ε–NTU)",      href:"glossary.html#g-effectiveness"},
        {type:"def",label:"Heat capacity rate",         href:"glossary.html#g-capacity-rate"},
        {type:"flag",label:"Mid-semester quiz (W8)",    href:"assessments.html#a-midquiz"}
      ]
    },
    {
      f:"week-09.html", week:9,
      t:"Radiation: Processes & Properties",
      summary:"Thermal radiation as electromagnetic emission from all matter above absolute zero: the blackbody as the ideal emitter/absorber, the Planck distribution and Wien's displacement law, emissive power, irradiation and radiosity, the radiation surface properties (emissivity, absorptivity, reflectivity, transmissivity) with the opaque-surface relation, Kirchhoff's law and the gray/diffuse idealisation, plus solar and atmospheric radiation and the greenhouse effect.",
      keywords:"radiation electromagnetic wave photon planck constant wavelength frequency thermal radiation blackbody planck distribution wien displacement law emissive power irradiation radiosity emissivity absorptivity reflectivity transmissivity opaque semitransparent kirchhoff law gray surface diffuse surface stefan boltzmann greenhouse effect solar radiation atmospheric radiation sky temperature spectral total hemispherical",
      related:[
        {type:"eq", label:"Blackbody emissive power",   href:"equations.html#eq-blackbody"},
        {type:"eq", label:"Planck distribution",        href:"equations.html#eq-planck"},
        {type:"eq", label:"Wien's displacement law",    href:"equations.html#eq-wien"},
        {type:"eq", label:"Radiosity",                  href:"equations.html#eq-radiosity"},
        {type:"eq", label:"Kirchhoff's law",            href:"equations.html#eq-kirchhoff"},
        {type:"def",label:"Blackbody",                  href:"glossary.html#g-blackbody"},
        {type:"def",label:"Emissivity",                 href:"glossary.html#g-emissivity"},
        {type:"def",label:"Radiosity",                  href:"glossary.html#g-radiosity"},
        {type:"def",label:"Gray surface",               href:"glossary.html#g-gray-surface"},
        {type:"flag",label:"End-semester quiz (W12)",   href:"assessments.html#a-endquiz"}
      ]
    },
    {
      f:"week-10.html", week:10,
      t:"Radiation Exchange Between Surfaces",
      summary:"Radiative exchange within an enclosure: the view factor and its integral definition, the reciprocity, summation, superposition and symmetry rules, blackbody exchange, and the radiation-network method for opaque, diffuse, gray surfaces — surface resistance (1−ε)/εA and space resistance 1/AᵢFᵢⱼ — reduced to the compact two-surface-enclosure result, with special cases (large surroundings, parallel plates, concentric cylinders/spheres, radiation shields).",
      keywords:"radiation exchange surfaces enclosure view factor shape factor configuration factor reciprocity rule summation rule superposition rule symmetry rule blackbody exchange radiosity network surface resistance space resistance opaque diffuse gray two surface enclosure radiation shield large surroundings parallel plates concentric cylinders spheres reradiating surface drying oven",
      related:[
        {type:"eq", label:"View factor integral",       href:"equations.html#eq-viewfactor"},
        {type:"eq", label:"Reciprocity rule",           href:"equations.html#eq-reciprocity"},
        {type:"eq", label:"Summation rule",             href:"equations.html#eq-summation"},
        {type:"eq", label:"Blackbody exchange",         href:"equations.html#eq-blackbody-exchange"},
        {type:"eq", label:"Two-surface enclosure",      href:"equations.html#eq-two-surface"},
        {type:"def",label:"View factor",                href:"glossary.html#g-view-factor"},
        {type:"def",label:"Surface resistance",         href:"glossary.html#g-surface-resistance"},
        {type:"def",label:"Space resistance",           href:"glossary.html#g-space-resistance"},
        {type:"flag",label:"End-semester quiz (W12)",   href:"assessments.html#a-endquiz"}
      ]
    },
    {
      f:"week-11.html", week:11,
      t:"2-D & Numerical Conduction",
      summary:"Multidimensional and unsteady conduction: the 2-D steady heat (Laplace) equation solved analytically by separation of variables and numerically by finite differences — interior and boundary nodal equations from the energy-balance method, iterative (Jacobi/Gauss–Seidel) solution in MATLAB/Python — the 2-D transient equation with explicit and implicit schemes, the Fourier number and the explicit stability limit, and the zero-D lumped-capacitance model.",
      keywords:"two dimensional conduction laplace equation separation of variables analytical numerical finite difference method fdm nodal network mesh grid nodal equation energy balance method interior node boundary node insulated convection node jacobi gauss seidel iterative matlab python transient explicit implicit method fourier number stability lumped capacitance lumped parameter zero dimensional biot number ode45",
      related:[
        {type:"eq", label:"2-D heat (Laplace) equation",href:"equations.html#eq-laplace"},
        {type:"eq", label:"Interior nodal equation",    href:"equations.html#eq-fdm-node"},
        {type:"eq", label:"Fourier number",             href:"equations.html#eq-fourier-number"},
        {type:"eq", label:"Explicit stability limit",   href:"equations.html#eq-stability"},
        {type:"eq", label:"Lumped-capacitance model",   href:"equations.html#eq-lumped"},
        {type:"def",label:"Finite-difference method",   href:"glossary.html#g-fdm"},
        {type:"def",label:"Fourier number",             href:"glossary.html#g-fourier-number"},
        {type:"def",label:"Lumped capacitance",         href:"glossary.html#g-lumped"},
        {type:"flag",label:"End-semester quiz (W12)",   href:"assessments.html#a-endquiz"}
      ]
    }
  ],

  /* =========================================================
     EQUATIONS
     ========================================================= */
  equations:[
    /* ---- Fundamentals & the three modes ---- */
    {id:"eq-fourier", cat:"Fundamentals & the three modes", name:"Fourier's law (conduction)",
     latex:R`q''_x = -k\,\frac{dT}{dx} \qquad q_x = -kA\,\frac{dT}{dx}`,
     desc:"Conduction heat flux is proportional to the temperature gradient and flows down it (hence the minus sign). For a linear profile the gradient is just ΔT/L.",
     vars:[{sym:R`q''_x`,mean:"heat flux (W/m²)"},{sym:R`k`,mean:"thermal conductivity (W/m·K)"},{sym:R`dT/dx`,mean:"temperature gradient (K/m)"},{sym:R`A`,mean:"area normal to flow (m²)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Thermal conductivity",href:"glossary.html#g-thermal-conductivity"}],
     keywords:"conduction gradient minus sign linear profile heat flux"},

    {id:"eq-newton-cooling", cat:"Fundamentals & the three modes", name:"Newton's law of cooling (convection)",
     latex:R`q'' = h\,(T_s - T_\infty)`,
     desc:"Convection flux between a surface and a moving fluid; the convection coefficient h depends on the flow, not just the fluids, and is the whole problem of convection.",
     vars:[{sym:R`h`,mean:"convection coefficient (W/m²·K)"},{sym:R`T_s`,mean:"surface temperature"},{sym:R`T_\infty`,mean:"free-stream fluid temperature"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Week 4",href:"week-04.html"},{label:"Convection coefficient",href:"glossary.html#g-convection-coefficient"}],
     keywords:"convection surface fluid coefficient h forced free"},

    {id:"eq-stefan-boltzmann", cat:"Fundamentals & the three modes", name:"Stefan–Boltzmann law (emission)",
     latex:R`E_b = \sigma T_s^4 \qquad E = \varepsilon\,\sigma T_s^4`,
     desc:"Emissive power of a blackbody, and of a real surface via its emissivity ε. Temperature must be absolute (K). σ = 5.67×10⁻⁸ W/m²·K⁴.",
     vars:[{sym:R`E_b`,mean:"blackbody emissive power (W/m²)"},{sym:R`\varepsilon`,mean:"emissivity (0–1)"},{sym:R`\sigma`,mean:"Stefan–Boltzmann constant"},{sym:R`T_s`,mean:"absolute surface temp (K)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Week 9",href:"week-09.html"},{label:"Emissivity",href:"glossary.html#g-emissivity"}],
     keywords:"radiation emission blackbody emissive power emissivity kelvin sigma"},

    {id:"eq-net-radiation", cat:"Fundamentals & the three modes", name:"Net radiation to large surroundings",
     latex:R`q''_{rad} = \varepsilon\,\sigma\,(T_s^4 - T_{sur}^4)`,
     desc:"Net radiative flux from a small surface exchanging with isothermal surroundings that behave as a blackbody at T_sur. Often written with a radiation coefficient h_r so it can be added to convection.",
     vars:[{sym:R`T_{sur}`,mean:"surroundings temperature (K)"},{sym:R`\varepsilon`,mean:"surface emissivity"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Radiation resistance",href:"equations.html#eq-r-rad"}],
     keywords:"net radiation surroundings small surface exchange linearised radiation coefficient"},

    {id:"eq-energy-balance", cat:"Fundamentals & the three modes", name:"Conservation of energy",
     latex:R`\dot E_{in} - \dot E_{out} + \dot E_{g} = \dot E_{st}`,
     desc:"The first law applied to a control volume: net energy in by heat/work/mass, plus generation, equals the rate of energy storage. At steady state the right-hand side is zero.",
     vars:[{sym:R`\dot E_{g}`,mean:"internal generation rate (W)"},{sym:R`\dot E_{st}`,mean:"storage rate (W)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Week 6",href:"week-06.html"}],
     keywords:"first law thermodynamics conservation energy control volume storage generation steady state balance"},

    {id:"eq-heat-equation", cat:"Fundamentals & the three modes", name:"Heat diffusion equation",
     latex:R`\frac{\partial^2 T}{\partial x^2}+\frac{\partial^2 T}{\partial y^2}+\frac{\partial^2 T}{\partial z^2}+\frac{\dot q}{k}=\frac{1}{\alpha}\frac{\partial T}{\partial t}`,
     desc:"The governing PDE for the temperature field, from an energy balance on a differential element (constant k). Reduces to the special cases used all semester: 1-D, steady, no generation, etc.",
     vars:[{sym:R`\dot q`,mean:"volumetric generation (W/m³)"},{sym:R`\alpha`,mean:"thermal diffusivity (m²/s)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Week 11",href:"week-11.html"},{label:"2-D Laplace form",href:"equations.html#eq-laplace"}],
     keywords:"heat equation diffusion pde temperature field differential element cartesian generation transient"},

    {id:"eq-thermal-diffusivity", cat:"Fundamentals & the three modes", name:"Thermal diffusivity",
     latex:R`\alpha = \frac{k}{\rho\,c_p}`,
     desc:"How quickly a material responds thermally — the ratio of its ability to conduct heat to its ability to store it. Sets the thermal time scale t ~ L²/α.",
     vars:[{sym:R`\rho`,mean:"density (kg/m³)"},{sym:R`c_p`,mean:"specific heat (J/kg·K)"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Thermal diffusivity",href:"glossary.html#g-thermal-diffusivity"}],
     keywords:"thermal diffusivity response time scale conduct store transient characteristic time"},

    /* ---- Conduction ---- */
    {id:"eq-plane-temp", cat:"Conduction", name:"Plane-wall temperature distribution",
     latex:R`T(x) = T_{s,1} + (T_{s,2}-T_{s,1})\,\frac{x}{L}`,
     desc:"For 1-D steady conduction with no generation the temperature profile through a plane wall is linear.",
     vars:[{sym:R`T_{s,1},T_{s,2}`,mean:"surface temperatures"},{sym:R`L`,mean:"wall thickness"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"plane wall linear temperature distribution steady conduction"},

    {id:"eq-plane-rate", cat:"Conduction", name:"Plane-wall heat rate",
     latex:R`q_x = \frac{kA}{L}\,(T_{s,1}-T_{s,2})`,
     desc:"Steady conduction rate through a plane wall — the driving temperature difference divided by the conduction resistance L/kA.",
     vars:[{sym:R`L`,mean:"thickness"},{sym:R`A`,mean:"wall area"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Conduction resistance",href:"equations.html#eq-r-cond"}],
     keywords:"plane wall heat rate conduction driving difference"},

    {id:"eq-r-cond", cat:"Conduction", name:"Conduction resistance (plane wall)",
     latex:R`R_{t,cond} = \frac{L}{kA}`,
     desc:"Thermal resistance of a plane wall — the electrical-circuit analogue that lets conduction, convection and radiation be combined in series and parallel.",
     vars:[{sym:R`R_{t,cond}`,mean:"resistance (K/W)"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Thermal resistance",href:"glossary.html#g-thermal-resistance"}],
     keywords:"conduction resistance plane wall circuit analogy K/W"},

    {id:"eq-r-conv", cat:"Conduction", name:"Convection resistance",
     latex:R`R_{t,conv} = \frac{1}{hA}`,
     desc:"Thermal resistance of a convecting surface, placed in series with the wall conduction resistances in a network.",
     vars:[{sym:R`h`,mean:"convection coefficient"},{sym:R`A`,mean:"surface area"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"convection resistance surface circuit series"},

    {id:"eq-r-rad", cat:"Conduction", name:"Radiation resistance",
     latex:R`R_{t,rad} = \frac{1}{h_r A}, \qquad h_r = \varepsilon\sigma\,(T_s+T_{sur})(T_s^2+T_{sur}^2)`,
     desc:"Linearising the fourth-power radiation law gives a radiation coefficient h_r and a resistance that can be added in parallel with convection at a surface.",
     vars:[{sym:R`h_r`,mean:"radiation coefficient (W/m²·K)"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"radiation resistance linearised coefficient parallel convection"},

    {id:"eq-cyl-temp", cat:"Conduction", name:"Cylindrical-wall temperature",
     latex:R`T(r) = \frac{T_{s,1}-T_{s,2}}{\ln(r_1/r_2)}\,\ln\!\frac{r}{r_2} + T_{s,2}`,
     desc:"Radial conduction through a cylindrical shell gives a logarithmic (not linear) temperature profile.",
     vars:[{sym:R`r_1,r_2`,mean:"inner / outer radius"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"cylindrical wall logarithmic temperature radial pipe"},

    {id:"eq-cyl-rate", cat:"Conduction", name:"Cylindrical-wall heat rate",
     latex:R`q_r = \frac{2\pi Lk\,(T_{s,1}-T_{s,2})}{\ln(r_2/r_1)}`,
     desc:"Radial conduction rate through a cylindrical shell of length L; the conduction resistance is ln(r₂/r₁)/2πLk.",
     vars:[{sym:R`L`,mean:"cylinder length"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"cylindrical heat rate radial resistance pipe insulation steam"},

    {id:"eq-overall-U", cat:"Conduction", name:"Overall heat transfer coefficient",
     latex:R`q = UA\,\Delta T, \qquad \frac{1}{UA} = \sum R_t`,
     desc:"A composite wall (several resistances in series/parallel) is collapsed into a single UA product. U must always be quoted with the area it is based on.",
     vars:[{sym:R`U`,mean:"overall coefficient (W/m²·K)"},{sym:R`\sum R_t`,mean:"total resistance"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Week 7",href:"week-07.html"},{label:"Overall coefficient",href:"glossary.html#g-overall-u"}],
     keywords:"overall heat transfer coefficient composite wall UA total resistance area"},

    {id:"eq-contact", cat:"Conduction", name:"Thermal contact resistance",
     latex:R`R''_{t,c} = \frac{T_A - T_B}{q''}`,
     desc:"Real interfaces are rough: only asperities touch, so a temperature jump appears across a joint. The per-unit-area contact resistance adds in series with the wall resistances.",
     vars:[{sym:R`R''_{t,c}`,mean:"contact resistance (m²·K/W)"},{sym:R`T_A,T_B`,mean:"interface temps either side"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Contact resistance",href:"glossary.html#g-contact-resistance"}],
     keywords:"contact resistance interface roughness asperity temperature jump joint filler grease"},

    {id:"eq-generation", cat:"Conduction", name:"Conduction with generation (plane wall)",
     latex:R`T(x) = \frac{\dot q L^2}{2k}\left(1-\frac{x^2}{L^2}\right) + T_s`,
     desc:"Symmetric plane wall with uniform volumetric generation and both faces at T_s: a parabolic profile with the maximum at the mid-plane, T_max = q̇L²/2k + T_s.",
     vars:[{sym:R`\dot q`,mean:"volumetric generation (W/m³)"},{sym:R`L`,mean:"half-thickness"}],
     links:[{label:"Week 2",href:"week-02.html"}],
     keywords:"generation volumetric parabolic maximum temperature plane wall nuclear resistive heating"},

    /* ---- Extended surfaces (fins) ---- */
    {id:"eq-fin-equation", cat:"Extended surfaces (fins)", name:"Fin equation (uniform Aᶜ)",
     latex:R`\frac{d^2\theta}{dx^2} - m^2\theta = 0, \qquad \theta = T - T_\infty`,
     desc:"Energy balance on a differential slice of a constant-cross-section fin gives this linear ODE in the temperature excess θ; its solution is a combination of hyperbolic functions.",
     vars:[{sym:R`\theta`,mean:"temperature excess T − T∞"},{sym:R`m`,mean:"fin parameter (1/m)"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Fin parameter",href:"equations.html#eq-fin-m"}],
     keywords:"fin equation ode temperature excess hyperbolic uniform cross section derivation energy balance"},

    {id:"eq-fin-m", cat:"Extended surfaces (fins)", name:"Fin parameter",
     latex:R`m = \sqrt{\frac{hP}{kA_c}}`,
     desc:"Sets how fast the temperature excess decays along the fin — large m (high h, thin fin) means the fin cools to the fluid quickly over a short length.",
     vars:[{sym:R`P`,mean:"fin perimeter"},{sym:R`A_c`,mean:"cross-sectional area"}],
     links:[{label:"Week 3",href:"week-03.html"}],
     keywords:"fin parameter m perimeter cross section decay length"},

    {id:"eq-fin-temp-adiabatic", cat:"Extended surfaces (fins)", name:"Fin temperature — adiabatic tip",
     latex:R`\frac{\theta}{\theta_b} = \frac{\cosh m(L-x)}{\cosh mL}`,
     desc:"Temperature distribution for the common adiabatic-tip case (Case B). A convecting tip is handled by using the corrected length L_c.",
     vars:[{sym:R`\theta_b`,mean:"base excess T_b − T∞"},{sym:R`L`,mean:"fin length"}],
     links:[{label:"Week 3",href:"week-03.html"}],
     keywords:"fin temperature distribution adiabatic tip case B cosh corrected length"},

    {id:"eq-fin-heat", cat:"Extended surfaces (fins)", name:"Fin heat rate (adiabatic tip)",
     latex:R`q_f = M\tanh mL, \qquad M = \sqrt{hPkA_c}\;\theta_b`,
     desc:"Heat dissipated by an adiabatic-tip fin. For an infinitely long fin q_f = M; the four tip conditions differ only in the trailing factor.",
     vars:[{sym:R`M`,mean:"√(hPkAᶜ)·θ_b"}],
     links:[{label:"Week 3",href:"week-03.html"}],
     keywords:"fin heat rate adiabatic infinite tanh M dissipation"},

    {id:"eq-fin-efficiency", cat:"Extended surfaces (fins)", name:"Fin efficiency",
     latex:R`\eta_f = \frac{q_f}{h A_f\,\theta_b} = \frac{\tanh(mL_c)}{mL_c}`,
     desc:"Actual fin heat rate as a fraction of the heat that would flow if the whole fin were at the base temperature. The corrected length L_c = L + t/2 (rectangular) or L + D/4 (pin) folds in tip convection.",
     vars:[{sym:R`A_f`,mean:"fin surface area"},{sym:R`L_c`,mean:"corrected length"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Fin efficiency",href:"glossary.html#g-fin-efficiency"}],
     keywords:"fin efficiency corrected length tanh performance rectangular pin"},

    {id:"eq-fin-effectiveness", cat:"Extended surfaces (fins)", name:"Fin effectiveness",
     latex:R`\varepsilon_f = \frac{q_f}{h A_{c,b}\,\theta_b}, \qquad \varepsilon_{f,\infty}=\sqrt{\frac{kP}{hA_c}}`,
     desc:"Ratio of the fin heat rate to what the bare base area would dissipate. Adding a fin is only justified if ε_f ≳ 2 — favoured by high k, high P/Aᶜ (thin fins) and low h (gas / free convection).",
     vars:[{sym:R`A_{c,b}`,mean:"base cross-section area"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Fin effectiveness",href:"glossary.html#g-fin-effectiveness"}],
     keywords:"fin effectiveness justification bare base high conductivity thin low h gas"},

    {id:"eq-fin-array", cat:"Extended surfaces (fins)", name:"Overall surface efficiency (fin array)",
     latex:R`\eta_o = 1 - \frac{NA_f}{A_t}\,(1-\eta_f), \qquad q_t = \eta_o\,hA_t\,\theta_b`,
     desc:"For an array of N fins on a base, the overall surface efficiency combines the finned and exposed-base area into one factor and one thermal resistance R_t,o = 1/(η_o h A_t).",
     vars:[{sym:R`N`,mean:"number of fins"},{sym:R`A_t`,mean:"total area (fins + base)"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Week 7",href:"week-07.html"}],
     keywords:"fin array overall surface efficiency total area base resistance heat sink"},

    /* ---- Convection fundamentals ---- */
    {id:"eq-reynolds", cat:"Convection fundamentals", name:"Reynolds number",
     latex:R`Re_L = \frac{\rho\,u_\infty L}{\mu} = \frac{u_\infty L}{\nu}`,
     desc:"Ratio of inertial to viscous forces; decides whether a boundary layer is laminar or turbulent (transition on a flat plate near Re ≈ 5×10⁵).",
     vars:[{sym:R`u_\infty`,mean:"free-stream velocity"},{sym:R`\mu,\nu`,mean:"dynamic / kinematic viscosity"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Reynolds number",href:"glossary.html#g-reynolds"}],
     keywords:"reynolds number inertial viscous laminar turbulent transition critical"},

    {id:"eq-prandtl", cat:"Convection fundamentals", name:"Prandtl number",
     latex:R`Pr = \frac{\nu}{\alpha} = \frac{\mu c_p}{k}`,
     desc:"A fluid property comparing momentum and thermal diffusion — it sets the relative thickness of the velocity and thermal boundary layers. Pr ≈ 0.7 for air, ≫1 for oils, ≪1 for liquid metals.",
     vars:[{sym:R`\nu`,mean:"kinematic viscosity"},{sym:R`\alpha`,mean:"thermal diffusivity"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Prandtl number",href:"glossary.html#g-prandtl"}],
     keywords:"prandtl number fluid property momentum thermal diffusion boundary layer air oil liquid metal"},

    {id:"eq-nusselt", cat:"Convection fundamentals", name:"Nusselt number",
     latex:R`Nu = \frac{hL}{k} = f(Re, Pr)`,
     desc:"Dimensionless convection coefficient — the ratio of convection to pure conduction across the fluid layer. Every convection correlation gives Nu as a function of Re and Pr, from which h is recovered.",
     vars:[{sym:R`k`,mean:"fluid thermal conductivity"},{sym:R`L`,mean:"characteristic length"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Nusselt number",href:"glossary.html#g-nusselt"}],
     keywords:"nusselt number dimensionless convection coefficient correlation ratio conduction"},

    {id:"eq-avg-h", cat:"Convection fundamentals", name:"Average convection coefficient",
     latex:R`\bar h = \frac{1}{L}\int_0^L h(x)\,dx, \qquad q = \bar h A\,(T_s - T_\infty)`,
     desc:"The local coefficient varies along a surface (the boundary layer thickens); the average over the surface is what sets the total heat rate.",
     vars:[{sym:R`h(x)`,mean:"local coefficient"},{sym:R`\bar h`,mean:"average coefficient"}],
     links:[{label:"Week 4",href:"week-04.html"},{label:"Week 5",href:"week-05.html"}],
     keywords:"average local convection coefficient integral surface total heat rate"},

    {id:"eq-friction", cat:"Convection fundamentals", name:"Friction coefficient",
     latex:R`C_f = \frac{\tau_s}{\rho u_\infty^2/2}`,
     desc:"Dimensionless wall shear stress. Momentum and heat transfer are analogous, so C_f and Nu are closely related through the boundary-layer equations.",
     vars:[{sym:R`\tau_s`,mean:"wall shear stress (Pa)"}],
     links:[{label:"Week 4",href:"week-04.html"}],
     keywords:"friction coefficient wall shear stress analogy momentum drag"},

    /* ---- External convection ---- */
    {id:"eq-flatplate-lam", cat:"External convection", name:"Flat plate — laminar (average)",
     latex:R`\overline{Nu}_L = 0.664\,Re_L^{1/2}\,Pr^{1/3} \quad (Pr\gtrsim 0.6)`,
     desc:"Average Nusselt number for laminar parallel flow over an isothermal flat plate. The local value uses 0.332 in place of 0.664.",
     vars:[{sym:R`Re_L`,mean:"Reynolds number at length L"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"flat plate laminar average nusselt isothermal parallel flow 0.664 0.332"},

    {id:"eq-flatplate-turb", cat:"External convection", name:"Flat plate — turbulent (local)",
     latex:R`Nu_x = 0.0296\,Re_x^{4/5}\,Pr^{1/3} \quad (0.6\le Pr\le 60)`,
     desc:"Local Nusselt number for a turbulent boundary layer on a flat plate, valid for 5×10⁵ ≤ Re ≤ 10⁸.",
     vars:[{sym:R`Re_x`,mean:"local Reynolds number"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"flat plate turbulent local nusselt 0.0296 boundary layer"},

    {id:"eq-flatplate-mixed", cat:"External convection", name:"Flat plate — mixed (average)",
     latex:R`\overline{Nu}_L = (0.037\,Re_L^{4/5} - 871)\,Pr^{1/3}`,
     desc:"Average Nusselt number when the plate carries a laminar leading section then turbulent flow (transition at Re = 5×10⁵). The 871 term subtracts the over-counted laminar contribution.",
     vars:[{sym:R`Re_L`,mean:"Reynolds number at trailing edge"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"flat plate mixed boundary layer average nusselt transition 871 laminar turbulent"},

    {id:"eq-cylinder", cat:"External convection", name:"Cylinder in cross-flow (Churchill–Bernstein)",
     latex:R`\overline{Nu}_D = 0.3 + \frac{0.62\,Re_D^{1/2}Pr^{1/3}}{\big[1+(0.4/Pr)^{2/3}\big]^{1/4}}\left[1+\left(\frac{Re_D}{282000}\right)^{5/8}\right]^{4/5}`,
     desc:"Single comprehensive correlation for a cylinder in cross-flow, valid over a wide Re·Pr range (Re·Pr ≳ 0.2). Zukauskas and Hilpert forms are alternatives.",
     vars:[{sym:R`Re_D`,mean:"diameter Reynolds number"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"cylinder cross flow churchill bernstein zukauskas hilpert nusselt diameter"},

    {id:"eq-sphere", cat:"External convection", name:"Sphere (Whitaker)",
     latex:R`\overline{Nu}_D = 2 + \big(0.4\,Re_D^{1/2} + 0.06\,Re_D^{2/3}\big)Pr^{0.4}\left(\frac{\mu}{\mu_s}\right)^{1/4}`,
     desc:"Average Nusselt number for flow over a sphere; the limit Nu = 2 is pure conduction into a stationary infinite medium. Properties at T∞, with a viscosity ratio correction.",
     vars:[{sym:R`\mu_s`,mean:"viscosity at surface temp"}],
     links:[{label:"Week 5",href:"week-05.html"}],
     keywords:"sphere whitaker ranz marshall nusselt limit 2 conduction droplet viscosity ratio"},

    /* ---- Internal convection ---- */
    {id:"eq-reynolds-d", cat:"Internal convection", name:"Pipe Reynolds number",
     latex:R`Re_D = \frac{\rho u_m D}{\mu} = \frac{4\dot m}{\pi D\mu}`,
     desc:"For internal flow, transition is near Re_D ≈ 2300 (laminar below, fully turbulent above ≈ 4000). u_m is the mean (bulk) velocity.",
     vars:[{sym:R`u_m`,mean:"mean velocity"},{sym:R`\dot m`,mean:"mass flow rate"}],
     links:[{label:"Week 6",href:"week-06.html"}],
     keywords:"pipe reynolds internal flow transition 2300 4000 mean velocity mass flow"},

    {id:"eq-hydraulic-d", cat:"Internal convection", name:"Hydraulic diameter",
     latex:R`D_h = \frac{4A_c}{P}`,
     desc:"Lets non-circular ducts (rectangles, annuli) reuse the circular-tube correlations by defining an equivalent diameter from the flow area and wetted perimeter.",
     vars:[{sym:R`A_c`,mean:"cross-sectional flow area"},{sym:R`P`,mean:"wetted perimeter"}],
     links:[{label:"Week 6",href:"week-06.html"}],
     keywords:"hydraulic diameter non circular duct rectangle annulus equivalent wetted perimeter"},

    {id:"eq-int-flux", cat:"Internal convection", name:"Constant heat flux — mean temperature",
     latex:R`T_m(x) = T_{m,i} + \frac{q''_s P}{\dot m c_p}\,x`,
     desc:"Under a uniform wall heat flux, the mean temperature rises linearly along the tube; the surface temperature runs parallel to it once the flow is fully developed.",
     vars:[{sym:R`q''_s`,mean:"surface heat flux"},{sym:R`P`,mean:"perimeter"}],
     links:[{label:"Week 6",href:"week-06.html"}],
     keywords:"constant heat flux mean temperature linear rise fully developed surface temperature"},

    {id:"eq-int-ts", cat:"Internal convection", name:"Constant surface temperature — decay",
     latex:R`\frac{T_s - T_m(x)}{T_s - T_{m,i}} = \exp\!\left(-\frac{P\,\bar h}{\dot m c_p}\,x\right)`,
     desc:"With a fixed wall temperature the mean-to-wall difference decays exponentially; integrating gives the log-mean temperature difference for the whole tube. For a fixed external fluid, 1/(ṁc_p) uses the overall resistance.",
     vars:[{sym:R`T_s`,mean:"surface temperature"},{sym:R`\bar h`,mean:"average coefficient"}],
     links:[{label:"Week 6",href:"week-06.html"},{label:"LMTD",href:"glossary.html#g-lmtd"}],
     keywords:"constant surface temperature exponential decay log mean temperature difference outlet"},

    {id:"eq-laminar-nu", cat:"Internal convection", name:"Laminar fully developed Nusselt",
     latex:R`Nu_D = 4.36\ (q''_s\text{ const}), \qquad Nu_D = 3.66\ (T_s\text{ const})`,
     desc:"For fully developed laminar flow in a circular tube the Nusselt number is constant — h does not depend on flow rate, only on the boundary condition.",
     vars:[{sym:R`Nu_D`,mean:"Nusselt number on D"}],
     links:[{label:"Week 6",href:"week-06.html"}],
     keywords:"laminar fully developed nusselt constant 4.36 3.66 circular tube boundary condition"},

    {id:"eq-dittus-boelter", cat:"Internal convection", name:"Dittus–Boelter (turbulent)",
     latex:R`Nu_D = 0.023\,Re_D^{4/5}\,Pr^{n}, \quad n=\begin{cases}0.4 & \text{heating}\\0.3 & \text{cooling}\end{cases}`,
     desc:"Workhorse turbulent internal-flow correlation for fully developed conditions (Re ≳ 10⁴, 0.6 ≤ Pr ≤ 160). Colburn and Gnielinski are more accurate alternatives.",
     vars:[{sym:R`n`,mean:"0.4 heating / 0.3 cooling"}],
     links:[{label:"Week 6",href:"week-06.html"}],
     keywords:"dittus boelter turbulent internal flow correlation heating cooling colburn gnielinski"},

    /* ---- Heat exchangers ---- */
    {id:"eq-hx-q", cat:"Heat exchangers", name:"Heat rate & capacity rate",
     latex:R`q = C_h(T_{h,i}-T_{h,o}) = C_c(T_{c,o}-T_{c,i}), \quad C = \dot m c_p`,
     desc:"Overall energy balance on the two streams. The heat-capacity rate C = ṁc_p is the amount of heat each stream carries per degree; the stream with the smaller C changes temperature more.",
     vars:[{sym:R`C_h,C_c`,mean:"hot / cold capacity rates (W/K)"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Capacity rate",href:"glossary.html#g-capacity-rate"}],
     keywords:"heat exchanger energy balance capacity rate mdot cp hot cold stream"},

    {id:"eq-lmtd", cat:"Heat exchangers", name:"Log-mean temperature difference",
     latex:R`q = UA\,\Delta T_{lm}, \qquad \Delta T_{lm} = \frac{\Delta T_2 - \Delta T_1}{\ln(\Delta T_2/\Delta T_1)}`,
     desc:"The correct average driving difference for an exchanger, because the local ΔT varies along it. ΔT₁ and ΔT₂ are the end differences — defined differently for parallel vs counter-flow.",
     vars:[{sym:R`\Delta T_1,\Delta T_2`,mean:"end temperature differences"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"LMTD",href:"glossary.html#g-lmtd"}],
     keywords:"log mean temperature difference lmtd parallel counterflow driving difference sizing"},

    {id:"eq-hx-f", cat:"Heat exchangers", name:"LMTD correction factor",
     latex:R`q = F\,UA\,\Delta T_{lm,CF}`,
     desc:"For multipass and cross-flow exchangers the counter-flow LMTD is scaled by a correction factor F (< 1) read from charts, because the flow is not purely counter-current.",
     vars:[{sym:R`F`,mean:"correction factor (< 1)"},{sym:R`\Delta T_{lm,CF}`,mean:"counter-flow LMTD"}],
     links:[{label:"Week 7",href:"week-07.html"}],
     keywords:"correction factor F multipass cross flow shell and tube chart counterflow"},

    {id:"eq-effectiveness", cat:"Heat exchangers", name:"Effectiveness",
     latex:R`\varepsilon = \frac{q}{q_{max}}, \qquad q_{max} = C_{min}(T_{h,i}-T_{c,i})`,
     desc:"Actual heat transfer as a fraction of the thermodynamic maximum, which is set by the minimum capacity rate and the maximum available temperature difference. Basis of the ε–NTU rating method.",
     vars:[{sym:R`q_{max}`,mean:"maximum possible heat rate"},{sym:R`C_{min}`,mean:"smaller capacity rate"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Effectiveness",href:"glossary.html#g-effectiveness"}],
     keywords:"effectiveness ntu qmax cmin maximum heat transfer rating"},

    {id:"eq-ntu", cat:"Heat exchangers", name:"Number of transfer units",
     latex:R`NTU = \frac{UA}{C_{min}}, \qquad C_r = \frac{C_{min}}{C_{max}}`,
     desc:"A dimensionless size for the exchanger. Effectiveness is a function ε = f(NTU, C_r) that depends on the flow arrangement, tabulated as relations and charts.",
     vars:[{sym:R`C_r`,mean:"capacity-rate ratio"}],
     links:[{label:"Week 7",href:"week-07.html"}],
     keywords:"number of transfer units ntu size capacity ratio cr effectiveness relations charts"},

    /* ---- Radiation ---- */
    {id:"eq-blackbody", cat:"Radiation", name:"Blackbody emissive power",
     latex:R`E_b = \sigma T^4`,
     desc:"Total power emitted per unit area by a blackbody — the perfect emitter and absorber, and the ceiling no real surface can exceed at a given temperature.",
     vars:[{sym:R`\sigma`,mean:"5.67×10⁻⁸ W/m²·K⁴"},{sym:R`T`,mean:"absolute temperature (K)"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Blackbody",href:"glossary.html#g-blackbody"}],
     keywords:"blackbody emissive power stefan boltzmann perfect emitter absorber maximum"},

    {id:"eq-planck", cat:"Radiation", name:"Planck distribution",
     latex:R`E_{\lambda,b}(\lambda,T) = \frac{C_1}{\lambda^5\big[\exp(C_2/\lambda T)-1\big]}`,
     desc:"The spectral distribution of blackbody emission — how emitted power is spread across wavelength. Integrating over all λ recovers σT⁴.",
     vars:[{sym:R`\lambda`,mean:"wavelength"},{sym:R`C_1,C_2`,mean:"radiation constants"}],
     links:[{label:"Week 9",href:"week-09.html"}],
     keywords:"planck distribution spectral blackbody wavelength radiation constants"},

    {id:"eq-wien", cat:"Radiation", name:"Wien's displacement law",
     latex:R`\lambda_{max}\,T = 2898\ \mu\text{m}\cdot\text{K}`,
     desc:"The wavelength of peak blackbody emission shifts inversely with temperature — hot objects glow at shorter wavelengths (the Sun peaks in the visible; room-temperature surfaces in the infrared).",
     vars:[{sym:R`\lambda_{max}`,mean:"peak-emission wavelength"}],
     links:[{label:"Week 9",href:"week-09.html"}],
     keywords:"wien displacement law peak wavelength temperature sun visible infrared"},

    {id:"eq-emissivity", cat:"Radiation", name:"Emissivity",
     latex:R`\varepsilon = \frac{E(T)}{E_b(T)}, \qquad 0 \le \varepsilon \le 1`,
     desc:"Ratio of a real surface's emission to a blackbody's at the same temperature. The total, hemispherical emissivity averages over all wavelengths and directions.",
     vars:[{sym:R`E(T)`,mean:"real emissive power"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Emissivity",href:"glossary.html#g-emissivity"}],
     keywords:"emissivity real surface total hemispherical ratio blackbody"},

    {id:"eq-radiosity", cat:"Radiation", name:"Radiosity",
     latex:R`J = \varepsilon E_b + (1-\varepsilon)\,G \quad(\text{opaque, }\rho = 1-\varepsilon)`,
     desc:"All radiation leaving a surface per unit area — its own emission plus the reflected part of the irradiation G. Central to the network method.",
     vars:[{sym:R`G`,mean:"irradiation (incident flux)"},{sym:R`J`,mean:"radiosity"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Week 10",href:"week-10.html"},{label:"Radiosity",href:"glossary.html#g-radiosity"}],
     keywords:"radiosity emission reflected irradiation leaving surface opaque network"},

    {id:"eq-kirchhoff", cat:"Radiation", name:"Kirchhoff's law",
     latex:R`\varepsilon = \alpha \quad(\text{gray surface})`,
     desc:"At thermal equilibrium a surface's emissivity equals its absorptivity. For a gray surface (properties independent of wavelength) this holds at all conditions, simplifying enclosure analysis.",
     vars:[{sym:R`\alpha`,mean:"absorptivity"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Gray surface",href:"glossary.html#g-gray-surface"}],
     keywords:"kirchhoff law emissivity absorptivity equal gray surface equilibrium"},

    {id:"eq-viewfactor", cat:"Radiation", name:"View factor",
     latex:R`F_{ij} = \frac{1}{A_i}\int_{A_i}\int_{A_j}\frac{\cos\theta_i\cos\theta_j}{\pi r^2}\,dA_i\,dA_j`,
     desc:"The fraction of radiation leaving surface i that is intercepted by surface j — a purely geometric quantity, read from charts or built up with the view-factor rules.",
     vars:[{sym:R`\theta_i,\theta_j`,mean:"angles to the connecting line"},{sym:R`r`,mean:"separation"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"View factor",href:"glossary.html#g-view-factor"}],
     keywords:"view factor shape configuration factor geometric fraction intercepted integral"},

    {id:"eq-reciprocity", cat:"Radiation", name:"View-factor reciprocity",
     latex:R`A_i F_{ij} = A_j F_{ji}`,
     desc:"With the summation rule (Σⱼ Fᵢⱼ = 1), superposition and symmetry, reciprocity lets most view factors in an enclosure be found without integrating.",
     vars:[{sym:R`A_i,A_j`,mean:"surface areas"}],
     links:[{label:"Week 10",href:"week-10.html"}],
     keywords:"reciprocity rule view factor summation superposition symmetry enclosure"},

    {id:"eq-summation", cat:"Radiation", name:"View-factor summation rule",
     latex:R`\sum_{j=1}^{N} F_{ij} = 1`,
     desc:"All radiation leaving a surface in an enclosure lands somewhere, so its view factors to every surface (including itself, for concave surfaces) sum to one.",
     vars:[{sym:R`N`,mean:"number of enclosure surfaces"}],
     links:[{label:"Week 10",href:"week-10.html"}],
     keywords:"summation rule view factor enclosure conservation self concave"},

    {id:"eq-blackbody-exchange", cat:"Radiation", name:"Blackbody exchange",
     latex:R`q_{ij} = A_i F_{ij}\,\sigma\,(T_i^4 - T_j^4)`,
     desc:"Net radiation exchange between two black surfaces depends only on their temperatures, areas and view factor — no surface resistance, since a blackbody reflects nothing.",
     vars:[{sym:R`F_{ij}`,mean:"view factor i→j"}],
     links:[{label:"Week 10",href:"week-10.html"}],
     keywords:"blackbody exchange net radiation two surfaces view factor temperatures"},

    {id:"eq-two-surface", cat:"Radiation", name:"Two-surface enclosure",
     latex:R`q_1 = \frac{\sigma(T_1^4 - T_2^4)}{\dfrac{1-\varepsilon_1}{\varepsilon_1 A_1} + \dfrac{1}{A_1 F_{12}} + \dfrac{1-\varepsilon_2}{\varepsilon_2 A_2}}`,
     desc:"The radiation network for two gray surfaces reduces to three resistances in series: surface resistance of 1, the space resistance, and surface resistance of 2. Specialises to parallel plates, concentric cylinders/spheres and small-body-in-large-enclosure.",
     vars:[{sym:R`\varepsilon_1,\varepsilon_2`,mean:"surface emissivities"},{sym:R`F_{12}`,mean:"view factor"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"Surface resistance",href:"glossary.html#g-surface-resistance"}],
     keywords:"two surface enclosure network surface space resistance gray parallel plates concentric shield"},

    /* ---- Numerical & 2-D conduction ---- */
    {id:"eq-laplace", cat:"Numerical & 2-D conduction", name:"2-D steady conduction (Laplace)",
     latex:R`\frac{\partial^2 T}{\partial x^2} + \frac{\partial^2 T}{\partial y^2} = 0`,
     desc:"The heat equation for 2-D steady conduction with no generation. Solved analytically by separation of variables (an infinite sine/sinh series) or numerically by finite differences.",
     vars:[{sym:R`T(x,y)`,mean:"temperature field"}],
     links:[{label:"Week 11",href:"week-11.html"}],
     keywords:"laplace equation two dimensional steady conduction separation of variables series"},

    {id:"eq-fdm-node", cat:"Numerical & 2-D conduction", name:"Interior nodal equation",
     latex:R`T_{m,n} = \frac{T_{m+1,n} + T_{m-1,n} + T_{m,n+1} + T_{m,n-1}}{4}`,
     desc:"For a square mesh with no generation, each interior node's temperature is the average of its four neighbours. Boundary, insulated and convective nodes are derived by the energy-balance method.",
     vars:[{sym:R`m,n`,mean:"node column / row indices"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Finite-difference method",href:"glossary.html#g-fdm"}],
     keywords:"finite difference nodal equation interior average neighbours mesh energy balance jacobi gauss seidel"},

    {id:"eq-fourier-number", cat:"Numerical & 2-D conduction", name:"Fourier number",
     latex:R`Fo = \frac{\alpha\,\Delta t}{\Delta x^2}`,
     desc:"Dimensionless time governing transient conduction — the ratio of heat conducted to heat stored. Appears as the step size in explicit finite-difference schemes.",
     vars:[{sym:R`\Delta t`,mean:"time step"},{sym:R`\Delta x`,mean:"grid spacing"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Fourier number",href:"glossary.html#g-fourier-number"}],
     keywords:"fourier number dimensionless time transient conduction step stored"},

    {id:"eq-stability", cat:"Numerical & 2-D conduction", name:"Explicit stability limit",
     latex:R`Fo \le \tfrac{1}{4}\ (\text{2-D}), \qquad Fo \le \tfrac{1}{2}\ (\text{1-D})`,
     desc:"The explicit finite-difference method is only conditionally stable — too large a time step makes the solution oscillate and blow up. Implicit schemes are unconditionally stable but solve a system each step.",
     vars:[{sym:R`Fo`,mean:"Fourier number"}],
     links:[{label:"Week 11",href:"week-11.html"}],
     keywords:"explicit stability limit fourier number oscillation blow up implicit unconditional time step"},

    {id:"eq-lumped", cat:"Numerical & 2-D conduction", name:"Lumped-capacitance model",
     latex:R`T(t) = T_\infty + (T_i - T_\infty)\,e^{-t/\tau}, \qquad \tau = \frac{\rho V c_p}{hA_s}`,
     desc:"When internal conduction is fast compared with surface convection (Bi ≪ 0.1), a body has a nearly uniform temperature that relaxes exponentially with time constant τ. The zero-D limit of transient conduction.",
     vars:[{sym:R`\tau`,mean:"thermal time constant (s)"},{sym:R`V`,mean:"body volume"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Lumped capacitance",href:"glossary.html#g-lumped"}],
     keywords:"lumped capacitance parameter zero dimensional uniform temperature exponential time constant biot number"}
  ],

  /* =========================================================
     GLOSSARY
     ========================================================= */
  glossary:[
    {id:"g-heat-flux", term:"Heat flux", sym:R`q''`,
      def:R`The rate of thermal-energy transfer per unit area, \(q''\) (W/m²). The heat rate \(q\) (W) is the flux integrated over area. Heat transfer cares about the local flux, which is largest where the driving temperature difference or coefficient is largest.`,
      see:[{label:"Fourier's law",href:"equations.html#eq-fourier"}]},
    {id:"g-thermal-conductivity", term:"Thermal conductivity", sym:R`k`,
      def:R`A material property (W/m·K) setting how readily it conducts heat under a temperature gradient. High for metals (copper ≈ 400), low for insulators (polystyrene ≈ 0.03). Defined by Fourier's law.`,
      see:[{label:"Fourier's law",href:"equations.html#eq-fourier"}]},
    {id:"g-thermal-diffusivity", term:"Thermal diffusivity", sym:R`\alpha`,
      def:R`\(\alpha = k/\rho c_p\) (m²/s) — how fast a material responds thermally, balancing its ability to conduct against its ability to store heat. Sets the thermal time scale \(t \sim L^2/\alpha\).`,
      see:[{label:"Equation",href:"equations.html#eq-thermal-diffusivity"}]},
    {id:"g-convection-coefficient", term:"Convection coefficient", sym:R`h`,
      def:R`The proportionality \(h\) (W/m²·K) in Newton's law of cooling. Not a fluid property — it depends on the flow (velocity, geometry, laminar/turbulent), which is why finding it is "the problem of convection". Recovered from the Nusselt number.`,
      see:[{label:"Newton's law",href:"equations.html#eq-newton-cooling"},{label:"Nusselt number",href:"#g-nusselt"}]},
    {id:"g-thermal-resistance", term:"Thermal resistance", sym:R`R_t`,
      def:R`The electrical-circuit analogue for heat flow: \(R_t = \Delta T/q\) (K/W). Conduction, convection and radiation each have a resistance, combined in series and parallel to analyse composite walls.`,
      see:[{label:"Conduction resistance",href:"equations.html#eq-r-cond"}]},
    {id:"g-overall-u", term:"Overall heat transfer coefficient", sym:R`U`,
      def:R`A single coefficient (W/m²·K) collapsing all the series/parallel resistances of a composite wall or heat exchanger: \(1/UA = \sum R_t\). Must always be stated with the area it is based on, since \(U_cA_c = U_hA_h\).`,
      see:[{label:"Equation",href:"equations.html#eq-overall-U"}]},
    {id:"g-contact-resistance", term:"Thermal contact resistance", sym:R`R''_{t,c}`,
      def:R`The extra resistance (m²·K/W) at an interface between two solids: because only surface asperities touch, a temperature jump appears across the joint. Reduced by higher contact pressure, softer/conductive fillers or thermal grease.`,
      see:[{label:"Equation",href:"equations.html#eq-contact"}]},
    {id:"g-fin", term:"Fin (extended surface)",
      def:R`A protrusion added to a surface to increase the area available for convection, \(q = hA_s(T_s-T_\infty)\). Ideally made of high-conductivity material so the whole fin stays near the base temperature.`,
      see:[{label:"Fin equation",href:"equations.html#eq-fin-equation"}]},
    {id:"g-fin-efficiency", term:"Fin efficiency", sym:R`\eta_f`,
      def:R`The actual fin heat rate divided by the rate if the entire fin were at the base temperature: \(\eta_f = q_f/hA_f\theta_b\). Falls below 1 because the fin cools along its length; \(\eta_f = \tanh(mL_c)/mL_c\) for the adiabatic-tip case.`,
      see:[{label:"Equation",href:"equations.html#eq-fin-efficiency"}]},
    {id:"g-fin-effectiveness", term:"Fin effectiveness", sym:R`\varepsilon_f`,
      def:R`The fin heat rate relative to the bare (unfinned) base area: \(\varepsilon_f = q_f/hA_{c,b}\theta_b\). A fin is worth adding only if \(\varepsilon_f \gtrsim 2\) — favoured by high \(k\), thin closely-spaced fins and low \(h\) (e.g. gas-side).`,
      see:[{label:"Equation",href:"equations.html#eq-fin-effectiveness"}]},
    {id:"g-boundary-layer", term:"Boundary layer",
      def:R`The thin fluid region next to a surface where velocity (velocity BL) or temperature (thermal BL) changes from the wall value to the free-stream value. At the wall the fluid is stationary, so heat crosses it purely by conduction — this is what \(h\) really measures.`,
      see:[{label:"Nusselt number",href:"#g-nusselt"}]},
    {id:"g-reynolds", term:"Reynolds number", sym:R`Re`,
      def:R`\(Re = \rho uL/\mu\), the ratio of inertial to viscous forces. Determines laminar vs turbulent flow — transition near \(5\times10^5\) on a flat plate and \(2300\) in a pipe.`,
      see:[{label:"Equation",href:"equations.html#eq-reynolds"}]},
    {id:"g-prandtl", term:"Prandtl number", sym:R`Pr`,
      def:R`\(Pr = \nu/\alpha\), a fluid property comparing momentum and thermal diffusion. Governs the relative thickness of the velocity and thermal boundary layers: \(Pr\approx0.7\) (air), \(\gg1\) (oils), \(\ll1\) (liquid metals).`,
      see:[{label:"Equation",href:"equations.html#eq-prandtl"}]},
    {id:"g-nusselt", term:"Nusselt number", sym:R`Nu`,
      def:R`\(Nu = hL/k\), the dimensionless convection coefficient — the ratio of convective to conductive transport across the fluid layer. Every convection correlation gives \(Nu=f(Re,Pr)\), from which \(h\) is found.`,
      see:[{label:"Equation",href:"equations.html#eq-nusselt"}]},
    {id:"g-film-temperature", term:"Film temperature", sym:R`T_f`,
      def:R`The average of surface and free-stream temperature, \(T_f = (T_s+T_\infty)/2\), at which fluid properties are evaluated for external-convection correlations (unless a correlation specifies otherwise).`,
      see:[{label:"External convection",href:"week-05.html"}]},
    {id:"g-entrance-length", term:"Entrance length", sym:R`x_{fd}`,
      def:R`The distance in a duct over which the velocity (hydrodynamic) or temperature (thermal) profile develops before becoming fully developed. Laminar: \(x_{fd,h}/D \approx 0.05\,Re_D\); thermal adds a factor of \(Pr\).`,
      see:[{label:"Internal convection",href:"week-06.html"}]},
    {id:"g-mean-temperature", term:"Mean (bulk) temperature", sym:R`T_m`,
      def:R`The flow-weighted average fluid temperature over a duct cross-section — the reference temperature for internal convection, \(q'' = h(T_s - T_m)\). Unlike \(T_\infty\) in external flow, \(T_m\) changes along the duct.`,
      see:[{label:"Internal convection",href:"week-06.html"}]},
    {id:"g-lmtd", term:"Log-mean temperature difference", sym:R`\Delta T_{lm}`,
      def:R`The proper average driving temperature difference along a tube or heat exchanger, since the local \(\Delta T\) varies exponentially: \(\Delta T_{lm} = (\Delta T_2-\Delta T_1)/\ln(\Delta T_2/\Delta T_1)\).`,
      see:[{label:"Equation",href:"equations.html#eq-lmtd"}]},
    {id:"g-capacity-rate", term:"Heat-capacity rate", sym:R`C`,
      def:R`\(C = \dot m c_p\) (W/K), the heat a stream carries per degree of temperature change. In a heat exchanger the stream with the smaller \(C\) (\(C_{min}\)) undergoes the larger temperature change.`,
      see:[{label:"Equation",href:"equations.html#eq-hx-q"}]},
    {id:"g-effectiveness", term:"Effectiveness", sym:R`\varepsilon`,
      def:R`\(\varepsilon = q/q_{max}\), the fraction of the thermodynamically maximum heat transfer a heat exchanger achieves. A function of NTU and the capacity ratio \(C_r\); basis of the ε–NTU rating method.`,
      see:[{label:"Equation",href:"equations.html#eq-effectiveness"},{label:"NTU",href:"equations.html#eq-ntu"}]},
    {id:"g-blackbody", term:"Blackbody",
      def:R`The ideal radiator: it absorbs all incident radiation at every wavelength and direction, and emits the maximum possible for its temperature (\(E_b=\sigma T^4\)), diffusely. The reference against which real surfaces are rated by emissivity.`,
      see:[{label:"Emissive power",href:"equations.html#eq-blackbody"}]},
    {id:"g-emissivity", term:"Emissivity", sym:R`\varepsilon`,
      def:R`The ratio of a surface's emission to a blackbody's at the same temperature, \(0\le\varepsilon\le1\). The total, hemispherical value averages over all wavelengths and directions.`,
      see:[{label:"Equation",href:"equations.html#eq-emissivity"}]},
    {id:"g-radiosity", term:"Radiosity", sym:R`J`,
      def:R`The total radiation leaving a surface per unit area — its emission plus the reflected fraction of the irradiation: \(J = \varepsilon E_b + (1-\varepsilon)G\) for an opaque surface. The key variable in the network method.`,
      see:[{label:"Equation",href:"equations.html#eq-radiosity"}]},
    {id:"g-gray-surface", term:"Gray / diffuse surface",
      def:R`Idealisations that make enclosure analysis tractable: a gray surface has radiative properties independent of wavelength (so \(\varepsilon=\alpha\) by Kirchhoff's law), and a diffuse surface emits/reflects independently of direction.`,
      see:[{label:"Kirchhoff's law",href:"equations.html#eq-kirchhoff"}]},
    {id:"g-view-factor", term:"View factor", sym:R`F_{ij}`,
      def:R`The fraction of radiation leaving surface \(i\) that strikes surface \(j\) — purely geometric. Found from charts or the reciprocity (\(A_iF_{ij}=A_jF_{ji}\)), summation, superposition and symmetry rules.`,
      see:[{label:"Equation",href:"equations.html#eq-viewfactor"},{label:"Reciprocity",href:"equations.html#eq-reciprocity"}]},
    {id:"g-surface-resistance", term:"Surface (radiative) resistance",
      def:R`\((1-\varepsilon)/\varepsilon A\) in the radiation network — the resistance to a gray surface reaching blackbody emission, driven by \(E_b - J\). Zero for a blackbody (\(\varepsilon=1\)).`,
      see:[{label:"Two-surface enclosure",href:"equations.html#eq-two-surface"}]},
    {id:"g-space-resistance", term:"Space (geometric) resistance",
      def:R`\(1/A_iF_{ij}\) in the radiation network — the resistance to radiation travelling between two surfaces, set by their geometry (areas and view factor), driven by \(J_i - J_j\).`,
      see:[{label:"Two-surface enclosure",href:"equations.html#eq-two-surface"}]},
    {id:"g-fdm", term:"Finite-difference method",
      def:R`A numerical scheme that replaces the continuous heat equation with algebraic equations at discrete nodes on a mesh. Interior nodes average their neighbours; boundary nodes come from an energy balance. Solved iteratively (Jacobi / Gauss–Seidel).`,
      see:[{label:"Nodal equation",href:"equations.html#eq-fdm-node"}]},
    {id:"g-fourier-number", term:"Fourier number", sym:R`Fo`,
      def:R`Dimensionless time for transient conduction, \(Fo = \alpha t/L^2\) — the ratio of heat conducted to heat stored. In explicit finite-difference schemes it must stay below a stability limit (¼ in 2-D).`,
      see:[{label:"Equation",href:"equations.html#eq-fourier-number"}]},
    {id:"g-lumped", term:"Lumped capacitance", sym:R`Bi`,
      def:R`The approximation that a body has a uniform temperature that relaxes exponentially in time, valid when internal conduction easily outpaces surface convection — the Biot number \(Bi = hL_c/k \ll 0.1\).`,
      see:[{label:"Equation",href:"equations.html#eq-lumped"}]}
  ],

  /* =========================================================
     ASSESSMENTS  (from the 2026 S1 course outline)
     ========================================================= */
  assessments:[
    {id:"a-assign1", name:"Assignment 1", type:"Written assignment", weight:"30%",
      weekLabel:"Week 4 · in class", dueWeek:4, dueOffsetDays:0,
      covers:"Weeks 1–3: the three modes, 1-D steady conduction, thermal resistance and fins.",
      desc:"Individual written assignment — a set of problems submitted in class (90 minutes). Assesses learning outcomes 1–3.",
      study:[
        "The three modes and their rate laws (Fourier, Newton's cooling, Stefan–Boltzmann).",
        "The heat diffusion equation and its 1-D steady reductions; boundary conditions.",
        "Plane and cylindrical conduction with the thermal-resistance network and overall U.",
        "Contact resistance and conduction with internal generation.",
        "Fin equation, the four tip conditions, fin efficiency and effectiveness."
      ],
      weeks:[1,2,3],
      related:[{label:"Fourier's law",href:"equations.html#eq-fourier"},{label:"Thermal resistance",href:"glossary.html#g-thermal-resistance"},{label:"Fins (Week 3)",href:"week-03.html"},{label:"Fin efficiency",href:"equations.html#eq-fin-efficiency"}]},

    {id:"a-assign2", name:"Assignment 2", type:"Online quiz", weight:"5%",
      weekLabel:"Week 6 · online", dueWeek:6, dueOffsetDays:0,
      covers:"Weeks 4–6: convection fundamentals, external and internal convection.",
      desc:"Individual online quiz (60 minutes) — a short set of problems. Assesses learning outcomes 1–3.",
      study:[
        "Velocity and thermal boundary layers; local vs average h.",
        "Reynolds, Prandtl and Nusselt numbers and the film temperature.",
        "External correlations: flat plate (laminar/turbulent/mixed), cylinder, sphere.",
        "Internal flow: entrance lengths, constant-flux vs constant-Ts, Dittus–Boelter."
      ],
      weeks:[4,5,6],
      related:[{label:"Reynolds number",href:"equations.html#eq-reynolds"},{label:"Nusselt number",href:"glossary.html#g-nusselt"},{label:"External convection (Week 5)",href:"week-05.html"},{label:"Dittus–Boelter",href:"equations.html#eq-dittus-boelter"}]},

    {id:"a-lab", name:"Laboratory Report", type:"Group report", weight:"15%",
      weekLabel:"Lab in Week 8–9 · report due 2 weeks after", dueWeek:10, dueOffsetDays:4,
      covers:"A heat-transfer experiment (labs run in Weeks 8 and 9; attend one session).",
      desc:"Group of four carries out a lab experiment at EC110 with the demonstrator and submits one common written report online. Lab attendance is compulsory. Assesses learning outcomes 1–4.",
      study:[
        "Record data carefully and quantify experimental uncertainty.",
        "Compare measurements against the theory from Weeks 1–7.",
        "Structure a clear, well-presented technical report."
      ],
      weeks:[],
      related:[{label:"Heat exchangers (Week 7)",href:"week-07.html"},{label:"Convection (Week 4)",href:"week-04.html"}]},

    {id:"a-midquiz", name:"Mid-Semester Quiz", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 8 · in class", dueWeek:8, dueOffsetDays:0,
      covers:"Weeks 1–7: conduction, fins, convection and heat exchangers.",
      desc:"Individual in-class quiz (90 minutes) — a set of problems. Assesses learning outcomes 1–3.",
      study:[
        "Conduction: resistance networks, cylindrical walls, generation, fins.",
        "Convection: boundary layers, dimensionless groups, external and internal correlations.",
        "Heat exchangers: U with fouling, the LMTD method and the ε–NTU method."
      ],
      weeks:[1,2,3,4,5,6,7],
      related:[{label:"Overall coefficient U",href:"equations.html#eq-overall-U"},{label:"LMTD",href:"equations.html#eq-lmtd"},{label:"Heat exchangers (Week 7)",href:"week-07.html"},{label:"Effectiveness",href:"equations.html#eq-effectiveness"}]},

    {id:"a-endquiz", name:"End-Semester Quiz", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 12 · in class", dueWeek:12, dueOffsetDays:0,
      covers:"Weeks 9–11: radiation, radiation exchange, and 2-D / numerical conduction.",
      desc:"Individual in-class non-formal quiz (90 minutes) — a set of problems. Assesses learning outcomes 1–3.",
      study:[
        "Radiation properties: blackbody, Planck/Wien, emissivity, Kirchhoff, radiosity.",
        "View factors and their rules; the two-surface enclosure and radiation network.",
        "2-D conduction by separation of variables and finite differences.",
        "Transient methods: explicit/implicit stability and the lumped-capacitance model."
      ],
      weeks:[9,10,11],
      related:[{label:"Blackbody emissive power",href:"equations.html#eq-blackbody"},{label:"View factor",href:"glossary.html#g-view-factor"},{label:"Two-surface enclosure",href:"equations.html#eq-two-surface"},{label:"2-D conduction (Week 11)",href:"week-11.html"},{label:"Lumped capacitance",href:"equations.html#eq-lumped"}]}
  ]
};
