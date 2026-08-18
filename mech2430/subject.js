/* ============================================================
   MECH2430 — Mechanics of Solids 1   ·  SUBJECT DATA FILE
   ------------------------------------------------------------
   THIS is the file you edit most. Everything below feeds the
   navigation, search, equations page, glossary, assessments and
   dashboard automatically. Write maths as normal LaTeX inside the
   R`...` raw strings (single backslashes — no escaping needed).

   • Add an equation  -> push an object into  SUBJECT.equations
   • Add a glossary term -> push into  SUBJECT.glossary
   • Add an assessment -> push into  SUBJECT.assessments
   • Add a weekly topic page -> create the .html, then add an entry
                                to SUBJECT.pages  (see week-01)
   ============================================================ */
const R = String.raw;   // lets you write LaTeX with single backslashes

window.SUBJECT = {

  /* ---- course meta. Set weekOneMonday to YOUR real Week-1 Monday;
          all weekly/assessment dates are computed from it. ---- */
  meta:{
    code:"MECH2430",
    title:"Mechanics of Solids 1",
    inst:"University of Newcastle · Callaghan",
    term:"Semester 2, 2026",
    coordinator:"A/Prof Chris Wensrich",
    text:"Hibbeler — Mechanics of Materials (any SI edition)",
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
     WEEKLY CONTENT PAGES
     keywords = extra words that should match in search.
     related  = links shown in the right-hand rail on that page.
     ========================================================= */
  pages:[
    {
      f:"week-01.html", week:1,
      t:"Stress, Strain & Elasticity",
      summary:"Foundations: normal/shear/bearing stress, stress as a tensor, strain, Hooke's law, axial deformation, thermal effects, Poisson's ratio, generalised Hooke's law, dilation and bulk modulus.",
      keywords:"stress strain elasticity normal shear bearing oblique plane tensor poisson hooke young modulus axial deformation thermal expansion statically indeterminate superposition dilation bulk modulus shear modulus tensile test yield constitutive",
      related:[
        {type:"eq", label:"Hooke's law (1D)",     href:"equations.html#eq-hooke-1d"},
        {type:"eq", label:"Generalised Hooke",    href:"equations.html#eq-hooke-3d"},
        {type:"eq", label:"Axial deformation",    href:"equations.html#eq-axial-deformation"},
        {type:"def",label:"Poisson's ratio",      href:"glossary.html#g-poisson"},
        {type:"def",label:"Stress tensor",        href:"glossary.html#g-stress-tensor"},
        {type:"flag",label:"Quiz 1 (covers W1–3)", href:"assessments.html#a-quiz1"}
      ]
    },
    {
      f:"week-02.html", week:2,
      t:"Torsion",
      summary:"Twisting of circular shafts: shear stress and strain from torque, the polar moment of area J, angle of twist, statically indeterminate and composite shafts, stress concentrations at steps, brittle failure on oblique planes, and elastoplastic shafts with residual stress.",
      keywords:"torsion torque shaft circular shear stress strain polar moment of area J angle of twist phi GJ torsional rigidity statically indeterminate compatibility equilibrium composite shaft hollow solid stress concentration factor fillet step brittle failure oblique plane pure shear elastoplastic elastic core plastic yield first yield residual stress permanent twist springback superposition spindle sleeve aluminium jacket steel core",
      related:[
        {type:"eq", label:"Torsional shear stress (Tr/J)",  href:"equations.html#eq-torsion-stress"},
        {type:"eq", label:"Angle of twist (TL/JG)",         href:"equations.html#eq-torsion-angle"},
        {type:"eq", label:"Shear strain in torsion",        href:"equations.html#eq-torsion-strain"},
        {type:"eq", label:"Torque at first yield",          href:"equations.html#eq-torsion-yield"},
        {type:"eq", label:"Elastoplastic torsion",          href:"equations.html#eq-torsion-plastic"},
        {type:"eq", label:"Torsional stress concentration", href:"equations.html#eq-torsion-stress-conc"},
        {type:"def",label:"Polar moment of area",           href:"glossary.html#g-polar-moment"},
        {type:"def",label:"Angle of twist",                 href:"glossary.html#g-angle-twist"},
        {type:"def",label:"Torsional rigidity",             href:"glossary.html#g-torsional-rigidity"},
        {type:"def",label:"Residual stress",                href:"glossary.html#g-residual-stress"},
        {type:"def",label:"Statically indeterminate",       href:"glossary.html#g-stat-indeterminate"},
        {type:"flag",label:"Quiz 1 (covers W1–3)",          href:"assessments.html#a-quiz1"}
      ]
    },
    {
      f:"week-03.html", week:3,
      t:"Bending",
      summary:"Bending of beams: pure bending and the flexure formula (σ=My/I), the neutral axis and second moment of area, curvature and flexural rigidity, anticlastic (transverse) curvature from Poisson effects, composite beams via transformed sections, elastoplastic bending with an elastic core (yield and plastic moments, shape factor), residual stress and curvature after unloading, and eccentric axial loading by superposition.",
      keywords:"bending flexure beam pure bending transverse eccentric loading neutral axis centroid second moment of area I parallel axis theorem curvature radius of curvature rho flexural rigidity EI moment of couple flexure formula My/I stress distribution linear anticlastic curvature poisson transverse deformation composite beam transformed section modular ratio n equivalent width timber aluminium brass reinforced concrete laminated elastoplastic bending elastic core yield moment My plastic moment Mp shape factor fully plastic residual stress residual curvature springback unloading superposition eccentric axial loading combined P/A My/I clamp channel I-beam H-section",
      related:[
        {type:"eq", label:"Flexure formula (My/I)",         href:"equations.html#eq-bending-stress"},
        {type:"eq", label:"Bending strain (y/ρ)",           href:"equations.html#eq-bending-strain"},
        {type:"eq", label:"Parallel-axis theorem",          href:"equations.html#eq-parallel-axis"},
        {type:"eq", label:"Curvature (1/ρ = M/EI)",         href:"equations.html#eq-beam-deflection"},
        {type:"eq", label:"Moment at first yield",          href:"equations.html#eq-yield-moment"},
        {type:"eq", label:"Elastoplastic bending (rect.)",  href:"equations.html#eq-bending-plastic-rect"},
        {type:"eq", label:"Elastoplastic bending (sym.)",   href:"equations.html#eq-bending-plastic-sym"},
        {type:"eq", label:"Transformed (composite) section",href:"equations.html#eq-transformed-section"},
        {type:"eq", label:"Anticlastic curvature",          href:"equations.html#eq-anticlastic"},
        {type:"eq", label:"Eccentric axial loading",        href:"equations.html#eq-eccentric-axial"},
        {type:"eq", label:"Residual curvature",             href:"equations.html#eq-residual-curvature"},
        {type:"def",label:"Neutral axis",                   href:"glossary.html#g-neutral-axis"},
        {type:"def",label:"Second moment of area",          href:"glossary.html#g-second-moment"},
        {type:"def",label:"Radius of curvature",            href:"glossary.html#g-radius-curvature"},
        {type:"def",label:"Flexural rigidity",              href:"glossary.html#g-flexural-rigidity"},
        {type:"def",label:"Composite beam",                 href:"glossary.html#g-composite-beam"},
        {type:"def",label:"Shape factor & plastic moment",  href:"glossary.html#g-shape-factor"},
        {type:"flag",label:"Quiz 1 (covers W1–3)",          href:"assessments.html#a-quiz1"}
      ]
    },
    {
      f:"week-05.html", week:5,
      t:"Transverse Loading & Shear in Beams",
      summary:"Shear stresses from transverse loads: why vertical shear demands longitudinal (horizontal) shear, the shear force on a horizontal plane H = VQx/I, shear flow q = VQ/I for sizing nails/bolts/glue in built-up beams, shear stress τ = VQ/It and its parabolic distribution in rectangles (τmax = 3V/2A), wide-flange behaviour (web carries the shear), shear on arbitrary and vertical planes (thin-walled sections and flanges), plastic deformation under transverse load and the plastic hinge, and superposition for general loading.",
      keywords:"transverse loading shear stress shear flow VQ/I VQ/It first moment of area Q A'ybar built-up beam nails bolts glue fasteners spacing nail force longitudinal horizontal shear H plank demonstration complementary shear rectangular section parabolic distribution 3V/2A maximum shear wide flange I-beam web flange thin-walled channel box section arbitrary plane vertical plane shear flow distribution resultant force plastic deformation plastic hinge elastic zone yield general loading superposition Hibbeler chapter 6 7",
      related:[
        {type:"eq", label:"Shear flow (VQ/I)",            href:"equations.html#eq-shear-flow"},
        {type:"eq", label:"Transverse shear stress (VQ/It)", href:"equations.html#eq-shear-stress-transverse"},
        {type:"eq", label:"Fastener (nail/bolt) force",   href:"equations.html#eq-fastener-force"},
        {type:"eq", label:"Rectangular-section shear",    href:"equations.html#eq-shear-rect"},
        {type:"eq", label:"Elastoplastic bending (rect.)",href:"equations.html#eq-bending-plastic-rect"},
        {type:"def",label:"First moment of area Q",       href:"glossary.html#g-first-moment"},
        {type:"def",label:"Shear flow",                   href:"glossary.html#g-shear-flow"},
        {type:"def",label:"Built-up member",              href:"glossary.html#g-built-up"},
        {type:"def",label:"Plastic hinge",                href:"glossary.html#g-plastic-hinge"},
        {type:"flag",label:"Quiz 2 (covers W5–7)",        href:"assessments.html#a-quiz2"}
      ]
    },
    {
      f:"week-06.html", week:6,
      t:"Combined Loading & Superposition",
      summary:"General loading: real components carry axial force, shear, torque and bending all at once. Cut a section through the point of interest, transfer the external forces to an equivalent force–couple system at the centroid (up to six internal resultants: P, V₁, V₂, T, M₁, M₂), find the stress the point feels from each one (P/A, My/I, Tr/J, VQ/It), and superpose — normal stresses add together, shear stresses add with direction. Includes Q for solid and hollow circular sections, spotting when each stress term is zero (neutral axis, free surfaces, Q=0), and the crankshaft, bar and billboard worked examples.",
      keywords:"combined loading general loading superposition stress at a point section resultants equivalent force couple system transfer forces onto section internal loads axial P shear V torque T bending moment M1 M2 crankshaft billboard bracket pipe assembly axle machine element P/A My/I Tr/J VQ/It stress element normal shear semicircle Q 2r^3/3 hollow circular tube first moment neutral axis zero stress free surface direction of shear Beer Johnston chapter 8 8.31 8.36 8.37 8.39 8.41 8.45 8.53 8.57 8.69 8.70 quiz 2",
      related:[
        {type:"eq", label:"Superposition of stresses",        href:"equations.html#eq-combined-stress"},
        {type:"eq", label:"Q for circular sections",          href:"equations.html#eq-q-circular"},
        {type:"eq", label:"Normal stress (P/A)",              href:"equations.html#eq-normal-stress"},
        {type:"eq", label:"Flexure formula (My/I)",           href:"equations.html#eq-bending-stress"},
        {type:"eq", label:"Torsional shear stress (Tr/J)",    href:"equations.html#eq-torsion-stress"},
        {type:"eq", label:"Transverse shear stress (VQ/It)",  href:"equations.html#eq-shear-stress-transverse"},
        {type:"eq", label:"Eccentric axial loading",          href:"equations.html#eq-eccentric-axial"},
        {type:"def",label:"Combined (general) loading",       href:"glossary.html#g-combined-loading"},
        {type:"def",label:"Internal force resultants",        href:"glossary.html#g-section-resultants"},
        {type:"def",label:"Superposition",                    href:"glossary.html#g-superposition"},
        {type:"def",label:"First moment of area Q",           href:"glossary.html#g-first-moment"},
        {type:"flag",label:"Quiz 2 (covers W5–7)",            href:"assessments.html#a-quiz2"}
      ]
    },
    {
      f:"week-07.html", week:7,
      t:"Transformation of Stress & Strain",
      summary:"Same stress state, different axes: plane stress and the transformation equations, Mohr's circle (doubled angles, sign convention, centre σ_ave and radius R), principal planes and principal stresses, maximum in-plane shear at 45°, the stress-tensor/traction view (principal stresses as an eigenvalue problem), 3D Mohr's circles and the out-of-plane σ₃ = 0 trap for maximum shear, plane strain and strain transformation, and measuring strain with gauges and rosettes.",
      keywords:"stress transformation plane stress rotated element theta 2theta mohr circle mohrs centre sigma ave radius R principal planes principal stresses sigma1 sigma2 sigma3 maximum shear stress tau max in-plane out-of-plane 45 degrees theta p theta s stress tensor traction normal vector eigenvalue eigenvector dot product 3d mohr circles three dimensional plane strain strain transformation gamma/2 principal strains strain gauge rosette 45 60 90 rosette whetstone bridge poisson wire resistance Beer Johnston chapter 7 7.5 7.6 7.7 7.8 7.9 7.13 7.24 7.25 7.26 7.34 7.53 7.66 7.69 7.144 lever post axle quiz 2",
      related:[
        {type:"eq", label:"Stress transformation",        href:"equations.html#eq-stress-transformation"},
        {type:"eq", label:"Mohr's circle",                href:"equations.html#eq-mohr-circle"},
        {type:"eq", label:"Principal stresses",           href:"equations.html#eq-principal-stress"},
        {type:"eq", label:"Maximum in-plane shear",       href:"equations.html#eq-max-shear-stress"},
        {type:"eq", label:"Max shear in 3D (σ₁−σ₃)/2",    href:"equations.html#eq-max-shear-3d"},
        {type:"eq", label:"Traction & the stress tensor", href:"equations.html#eq-traction"},
        {type:"eq", label:"Strain transformation",        href:"equations.html#eq-strain-transformation"},
        {type:"eq", label:"Strain rosette",               href:"equations.html#eq-strain-rosette"},
        {type:"eq", label:"Superposition of stresses",    href:"equations.html#eq-combined-stress"},
        {type:"def",label:"Plane stress",                 href:"glossary.html#g-plane-stress"},
        {type:"def",label:"Mohr's circle",                href:"glossary.html#g-mohr"},
        {type:"def",label:"Principal stresses",           href:"glossary.html#g-principal"},
        {type:"def",label:"Maximum shearing stress",      href:"glossary.html#g-max-shear"},
        {type:"def",label:"Plane strain",                 href:"glossary.html#g-plane-strain"},
        {type:"def",label:"Strain rosette",               href:"glossary.html#g-strain-rosette"},
        {type:"flag",label:"Quiz 2 (covers W5–7)",        href:"assessments.html#a-quiz2"}
      ]
    },
    {
      f:"week-09.html", week:9,
      t:"Failure Criteria",
      summary:"When does a general stress state actually fail the material? Comparing stress states needs invariant measures (principal stresses, max shear, energy). Ductile materials: the maximum-shear-stress (Tresca) criterion with its three plane-stress cases and hexagonal safe zone, and the maximum-distortion-energy (von Mises) criterion — splitting strain energy into hydrostatic (volume-change) and deviatoric (shape-change) parts, the von Mises equivalent stress and its elliptical yield surface, pure shear and the τ_y/σ_y ≈ 0.5–0.6 ratio, and why hydrostatic stress alone never yields. Brittle materials: sudden fracture at ultimate strength, Coulomb's maximum-normal-stress criterion, why micro-cracks make brittle materials weaker in tension than compression, and Mohr's criterion as an envelope of Mohr's circles from tension/compression/torsion tests (straight-line tangents when torsion data is missing). Safety factors under each criterion and combined-loading applications (checking multiple candidate points on a shaft).",
      keywords:"failure criteria theory yield criterion ductile brittle tresca maximum shear stress criterion von mises distortion energy maximum distortion energy criterion equivalent stress sigma vm safe zone hexagon ellipse yield surface principal stress invariant hydrostatic deviatoric volume change shape change strain energy density pure shear tau y sigma y 0.577 coulomb criterion maximum normal stress ultimate strength sigma u sigma UT sigma UC tension compression micro-cracks microcracks stress concentration chalk mohr criterion mohr's failure envelope tension test compression test torsion test tangent lines safety factor factor of safety combined loading shaft torque axial P/A My/I Tr/J VQ/It Beer Johnston chapter 7 7.81 7.82 7.83 7.84 7.85 7.86 7.87 7.95 7.96 7.97 Hibbeler chapter 10 11 10-73 10-74 10-75 10-76 10-92 11-42 11-43 quiz 3",
      related:[
        {type:"eq", label:"Tresca (max shear) criterion",     href:"equations.html#eq-tresca"},
        {type:"eq", label:"von Mises criterion",              href:"equations.html#eq-von-mises"},
        {type:"eq", label:"Distortion energy",                href:"equations.html#eq-distortion-energy"},
        {type:"eq", label:"Hydrostatic & deviatoric split",   href:"equations.html#eq-hydrostatic-deviatoric"},
        {type:"eq", label:"Coulomb criterion (brittle)",      href:"equations.html#eq-coulomb"},
        {type:"eq", label:"Mohr's criterion (brittle)",       href:"equations.html#eq-mohr-criterion"},
        {type:"eq", label:"Max shear in 3D (σ₁−σ₃)/2",        href:"equations.html#eq-max-shear-3d"},
        {type:"eq", label:"Principal stresses",               href:"equations.html#eq-principal-stress"},
        {type:"eq", label:"Superposition of stresses",        href:"equations.html#eq-combined-stress"},
        {type:"def",label:"Tresca criterion",                 href:"glossary.html#g-tresca"},
        {type:"def",label:"von Mises criterion",              href:"glossary.html#g-vonmises"},
        {type:"def",label:"Distortion energy",                href:"glossary.html#g-distortion-energy"},
        {type:"def",label:"Hydrostatic / deviatoric stress",  href:"glossary.html#g-hydrostatic"},
        {type:"def",label:"Ductile vs brittle failure",       href:"glossary.html#g-ductile-brittle"},
        {type:"def",label:"Ultimate strength",                href:"glossary.html#g-ultimate"},
        {type:"def",label:"Mohr's (failure) criterion",       href:"glossary.html#g-mohr-criterion"},
        {type:"def",label:"Factor of safety",                 href:"glossary.html#g-fos"},
        {type:"flag",label:"Quiz 3 (covers W9–11)",           href:"assessments.html#a-quiz3"}
      ]
    },
    {
      f:"week-10.html", week:10,
      t:"Thin-Walled Pressure Vessels",
      summary:"Membrane stresses in pressurised shells where t ≪ R: the plane-stress assumptions (uniform through-thickness stress, no bending in the wall), spherical vessels (σ = PR/2t the same in every direction), cylindrical vessels (hoop σh = PR/t and axial σa = PR/2t — hoop is double axial and governs), Mohr's circles for both including the −P third principal stress on the inner surface and the out-of-plane maximum shear (PR/2t cylinder, PR/4t sphere), why end and support conditions can eliminate the axial stress entirely (open piston-supported cylinder vs capped vessel, Hibbeler 8-3), stresses on welds and helical seams via stress transformation, thermally-shrunk bands and the interface pressure they exert (Hibbeler 8-9, Beer 7.126), and design for combined pressure + gravity bending using the von Mises equivalent stress and a safety factor (the LPG tank example, t_min = 6.76 mm).",
      keywords:"pressure vessel thin walled thin-walled cylinder sphere spherical cylindrical hoop stress circumferential axial longitudinal stress PR/t PR/2t PR/4t membrane plane stress gauge pressure boiler tank pipe LPG gas cylinder balloon submarine mohr circle out of plane in plane maximum shear open closed end cap piston base support conditions weld welded seam helix helical angle beta stress transformation thermal band shrink fit stainless steel band interface contact pressure nonlinear temperature drop combined loading gravity bending von mises design safety factor plate thickness storage tank water compressed air torque collar brass steel ring Beer Johnston chapter 7 7.101 7.104 7.105 7.114 7.115 7.116 7.120 7.124 7.125 7.126 Hibbeler chapter 8 8-3 8-9 quiz 3",
      related:[
        {type:"eq", label:"Hoop stress (PR/t)",              href:"equations.html#eq-cyl-hoop"},
        {type:"eq", label:"Axial stress (PR/2t)",            href:"equations.html#eq-cyl-axial"},
        {type:"eq", label:"Spherical vessel (PR/2t)",        href:"equations.html#eq-sphere"},
        {type:"eq", label:"Max shear in vessel walls",       href:"equations.html#eq-vessel-max-shear"},
        {type:"eq", label:"von Mises criterion",             href:"equations.html#eq-von-mises"},
        {type:"eq", label:"Mohr's circle",                   href:"equations.html#eq-mohr-circle"},
        {type:"eq", label:"Stress transformation",           href:"equations.html#eq-stress-transformation"},
        {type:"eq", label:"Thermal deformation",             href:"equations.html#eq-thermal"},
        {type:"def",label:"Thin-walled pressure vessel",     href:"glossary.html#g-thin-wall"},
        {type:"def",label:"Hoop stress",                     href:"glossary.html#g-hoop"},
        {type:"def",label:"Axial (longitudinal) stress",     href:"glossary.html#g-axial-stress"},
        {type:"def",label:"Gauge pressure",                  href:"glossary.html#g-gauge-pressure"},
        {type:"def",label:"Plane stress",                    href:"glossary.html#g-plane-stress"},
        {type:"def",label:"Factor of safety",                href:"glossary.html#g-fos"},
        {type:"flag",label:"Quiz 3 (covers W9–11)",          href:"assessments.html#a-quiz3"}
      ]
    },
    {
      f:"week-11.html", week:11,
      t:"Deflection of Beams",
      summary:"Finding the deflected shape of a beam by integrating the moment: the elastic-curve ODE d²y/dx² = M/EI from the Week-3 curvature result (with the small-slope approximation), double integration EIy = ∫∫M dx dx + C₁x + C₂ and the boundary conditions that fix the constants (y = 0 at pins/rollers; y = 0 and dy/dx = 0 at a fixed end), the classic cantilever results (end moment, end load, UDL, triangular load — Beer 9.1–9.4), multi-region beams where the moment changes expression (point loads, applied couples) and the continuity/matching conditions on y and dy/dx at region boundaries (Hibbeler 12-3, 12-42; Beer 9.13, 9.14), real-number deflections with W-shape section properties and unit bookkeeping, and statically indeterminate beams where the deflection equations supply the missing equilibrium information — 5 unknowns, 5 equations (Sample Problem 9.3; Beer 9.19–9.22, 9.33, 9.34).",
      keywords:"deflection of beams elastic curve deflection curve double integration method integrate moment M/EI EI d2y/dx2 slope dy/dx boundary conditions pin roller fixed end cantilever simply supported y=0 constants of integration C1 C2 C3 C4 continuity matching conditions multi region two regions point load couple moment M0 UDL uniformly distributed triangular load w0 maximum deflection PL3/48EI PL3/3EI wL4/8EI M0L2/2EI slope at A PL2/16EI statically indeterminate reaction at roller propped cantilever fixed fixed both ends redundant reaction bending moment diagram SFD BMD small slope approximation curvature radius flexural rigidity W shape W360x44 W100x19.3 appendix C second moment units mm4 m4 Beer Johnston chapter 9 9.1 9.2 9.3 9.4 9.13 9.14 9.19 9.20 9.21 9.22 9.33 9.34 sample problem 9.3 Hibbeler chapter 12 12-3 12-42 quiz 3",
      related:[
        {type:"eq", label:"Elastic curve by integration",     href:"equations.html#eq-elastic-curve"},
        {type:"eq", label:"Curvature (1/ρ = M/EI)",           href:"equations.html#eq-beam-deflection"},
        {type:"eq", label:"Cantilever standard results",      href:"equations.html#eq-cantilever-results"},
        {type:"eq", label:"Simply supported, central load",   href:"equations.html#eq-ss-central"},
        {type:"eq", label:"Flexure formula (My/I)",           href:"equations.html#eq-bending-stress"},
        {type:"def",label:"Elastic curve",                    href:"glossary.html#g-elastic-curve"},
        {type:"def",label:"Boundary conditions",              href:"glossary.html#g-boundary-conditions"},
        {type:"def",label:"Continuity (matching) conditions", href:"glossary.html#g-continuity"},
        {type:"def",label:"Flexural rigidity",                href:"glossary.html#g-flexural-rigidity"},
        {type:"def",label:"Radius of curvature",              href:"glossary.html#g-radius-curvature"},
        {type:"def",label:"Statically indeterminate",         href:"glossary.html#g-stat-indeterminate"},
        {type:"flag",label:"Quiz 3 (covers W9–11)",           href:"assessments.html#a-quiz3"}
      ]
    }
  ],

  /* =========================================================
     EQUATIONS  (transcribed from the MECH2430 formula sheet)
     cat groups them on the Equations page.
     ========================================================= */
  equations:[
    /* ---- Stress, strain & elasticity ---- */
    {id:"eq-normal-stress", cat:"Stress, strain & elasticity", name:"Normal stress",
     latex:R`\sigma = \frac{dF}{dA} \qquad \sigma_{\text{avg}} = \frac{F}{A}`,
     desc:"Stress is the concentration of force on an element of area. The average over a section is F/A, but failure is governed by the maximum, not the average.",
     vars:[{sym:R`\sigma`,mean:"normal stress (Pa)"},{sym:R`F`,mean:"axial force (N)"},{sym:R`A`,mean:"cross-sectional area"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Week 6",href:"week-06.html"},{label:"Normal stress",href:"glossary.html#g-normal-stress"}],
     keywords:"average maximum pa mpa concentration force area"},

    {id:"eq-normal-strain", cat:"Stress, strain & elasticity", name:"Normal strain",
     latex:R`\varepsilon = \frac{d\delta}{dL} \qquad \varepsilon = \frac{\delta}{L}`,
     desc:"Strain measures deformation as the ratio of change in length to original length (dimensionless).",
     vars:[{sym:R`\varepsilon`,mean:"normal strain"},{sym:R`\delta`,mean:"elongation"},{sym:R`L`,mean:"original length"}],
     links:[{label:"Strain",href:"glossary.html#g-strain"}], keywords:"deformation elongation dimensionless"},

    {id:"eq-poisson", cat:"Stress, strain & elasticity", name:"Poisson's ratio",
     latex:R`\nu = -\frac{\varepsilon_y}{\varepsilon_x} = -\frac{\varepsilon_z}{\varepsilon_x}`,
     desc:"Ratio of lateral contraction to axial extension under uniaxial load.",
     vars:[{sym:R`\nu`,mean:"Poisson's ratio"},{sym:R`\varepsilon_x`,mean:"axial strain"},{sym:R`\varepsilon_y,\varepsilon_z`,mean:"lateral strains"}],
     links:[{label:"Poisson's ratio",href:"glossary.html#g-poisson"}], keywords:"lateral axial contraction"},

    {id:"eq-hooke-1d", cat:"Stress, strain & elasticity", name:"Hooke's law (1D)",
     latex:R`\sigma = E\varepsilon`,
     desc:"Linear elastic relation below yield. E is Young's modulus (steel ≈ 210 GPa, aluminium ≈ 70 GPa).",
     vars:[{sym:R`E`,mean:"Young's modulus"}],
     links:[{label:"Week 1",href:"week-01.html"},{label:"Young's modulus",href:"glossary.html#g-young"}],
     keywords:"linear elastic young modulus elasticity"},

    {id:"eq-axial-deformation", cat:"Stress, strain & elasticity", name:"Axial deformation",
     latex:R`\delta = \int_0^L \frac{F}{EA}\,dx = \frac{FL}{EA}`,
     desc:"Elongation of an axially loaded member; the closed form holds for constant F, E, A.",
     vars:[{sym:R`\delta`,mean:"elongation"},{sym:R`F`,mean:"internal axial force"},{sym:R`E`,mean:"Young's modulus"},{sym:R`A`,mean:"area"},{sym:R`L`,mean:"length"}],
     keywords:"deflection rod bar elongation stiffness"},

    {id:"eq-thermal", cat:"Stress, strain & elasticity", name:"Thermal deformation",
     latex:R`\delta_T = \alpha(\Delta T)\,L`,
     desc:"Free thermal expansion. If the member is restrained, this drives thermal stress.",
     vars:[{sym:R`\alpha`,mean:"coeff. of thermal expansion"},{sym:R`\Delta T`,mean:"temperature change"}],
     links:[{label:"Thermal expansion",href:"glossary.html#g-thermal"}], keywords:"temperature heat restraint expansion"},

    {id:"eq-hooke-3d", cat:"Stress, strain & elasticity", name:"Generalised Hooke's law (3D, isotropic)",
     latex:R`\begin{aligned}
       \varepsilon_x &= \tfrac{\sigma_x}{E} - \nu\tfrac{\sigma_y}{E} - \nu\tfrac{\sigma_z}{E}\\[2pt]
       \varepsilon_y &= -\nu\tfrac{\sigma_x}{E} + \tfrac{\sigma_y}{E} - \nu\tfrac{\sigma_z}{E}\\[2pt]
       \varepsilon_z &= -\nu\tfrac{\sigma_x}{E} - \nu\tfrac{\sigma_y}{E} + \tfrac{\sigma_z}{E}\\[2pt]
       \gamma_{xy}&=\tfrac{\tau_{xy}}{G},\quad \gamma_{xz}=\tfrac{\tau_{xz}}{G},\quad \gamma_{yz}=\tfrac{\tau_{yz}}{G}
     \end{aligned}`,
     desc:"Couples all three normal strains to all three normal stresses, plus independent shear relations.",
     vars:[{sym:R`G`,mean:"shear modulus"},{sym:R`\nu`,mean:"Poisson's ratio"}],
     links:[{label:"Week 1",href:"week-01.html"}], keywords:"multiaxial isotropic triaxial generalized"},

    {id:"eq-shear-hooke", cat:"Stress, strain & elasticity", name:"Hooke's law in shear",
     latex:R`\tau = G\gamma`,
     desc:"Elastic shear relation. G is the shear modulus / modulus of rigidity (steel ≈ 75 GPa).",
     vars:[{sym:R`G`,mean:"shear modulus"},{sym:R`\gamma`,mean:"engineering shear strain"}],
     links:[{label:"Shear modulus",href:"glossary.html#g-shear-modulus"}], keywords:"rigidity engineering strain"},

    {id:"eq-dilation", cat:"Stress, strain & elasticity", name:"Dilation (volumetric strain)",
     latex:R`e = \frac{1-2\nu}{E}\left(\sigma_x+\sigma_y+\sigma_z\right)`,
     desc:"Fractional change in volume of a unit cube under normal stresses.",
     vars:[{sym:R`e`,mean:"dilation (ΔV/V)"}], keywords:"volume volumetric bulk hydrostatic"},

    {id:"eq-bulk", cat:"Stress, strain & elasticity", name:"Bulk modulus",
     latex:R`k = \frac{E}{3(1-2\nu)},\qquad p = -k\,e`,
     desc:"Resistance to uniform (hydrostatic) compression. As ν→0.5 the material becomes incompressible (e.g. rubber).",
     vars:[{sym:R`k`,mean:"bulk modulus"},{sym:R`p`,mean:"hydrostatic pressure"}],
     links:[{label:"Bulk modulus",href:"glossary.html#g-bulk"}], keywords:"compression hydrostatic incompressible rubber"},

    /* ---- Torsion ---- */
    {id:"eq-torsion-strain", cat:"Torsional loading", name:"Shear strain in torsion",
     latex:R`\gamma = \frac{r\phi}{L}`,
     desc:"Shear strain varies linearly with radius for a circular shaft.",
     vars:[{sym:R`r`,mean:"radial position"},{sym:R`\phi`,mean:"angle of twist"},{sym:R`L`,mean:"length"}],
     links:[{label:"Week 2",href:"week-02.html"}], keywords:"twist angular deformation shaft"},

    {id:"eq-torsion-equil", cat:"Torsional loading", name:"Torsion equilibrium",
     latex:R`T = \int_A r\,\tau\,dA`,
     desc:"Internal torque equals the moment of the shear-stress distribution about the axis.",
     vars:[{sym:R`T`,mean:"internal torque"}], links:[{label:"Week 2",href:"week-02.html"}], keywords:"moment integral"},

    {id:"eq-torsion-stress", cat:"Torsional loading", name:"Torsional shear stress",
     latex:R`\tau = \frac{Tr}{J},\qquad J = \int_A r^2\,dA`,
     desc:"Elastic shear stress in a circular shaft; J is the polar second moment of area.",
     vars:[{sym:R`\tau`,mean:"shear stress"},{sym:R`T`,mean:"torque"},{sym:R`J`,mean:"polar moment of area"},{sym:R`r`,mean:"radius"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Week 6",href:"week-06.html"},{label:"Polar moment J",href:"glossary.html#g-polar-moment"}], keywords:"shaft circular elastic"},

    {id:"eq-torsion-angle", cat:"Torsional loading", name:"Angle of twist",
     latex:R`\phi = \int_0^L \frac{T}{JG}\,dx = \frac{TL}{JG}`,
     desc:"Angular deflection due to torque; closed form for constant T, J, G.",
     vars:[{sym:R`\phi`,mean:"angle of twist (rad)"},{sym:R`G`,mean:"shear modulus"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Angle of twist",href:"glossary.html#g-angle-twist"}],
     keywords:"deflection rotation rigidity"},

    {id:"eq-torsion-yield", cat:"Torsional loading", name:"Torque at first yield",
     latex:R`T_y = \frac{J\tau_y}{R} = \tfrac12\pi R^{3}\tau_y`,
     desc:"Torque at which the outer surface of a solid circular shaft just reaches the yield shear stress; the whole section is still elastic. Below T_y the shaft is fully elastic (use Tr/J); above it an elastic core forms.",
     vars:[{sym:R`T_y`,mean:"torque at first yield"},{sym:R`\tau_y`,mean:"yield shear stress"},{sym:R`R`,mean:"outer radius"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Elastoplastic torsion",href:"equations.html#eq-torsion-plastic"}],
     keywords:"yield onset elastic limit plastic shaft first"},

    {id:"eq-torsion-plastic", cat:"Torsional loading", name:"Elastoplastic torsion (cylindrical)",
     latex:R`T = \tfrac{4}{3}T_y\!\left(1-\tfrac14\Big(\tfrac{r_y}{R}\Big)^{3}\right)
              = \tfrac{4}{3}T_y\!\left(1-\tfrac14\Big(\tfrac{\phi_y}{\phi}\Big)^{3}\right)`,
     desc:"Torque once part of the section has yielded; r_y is the elastic-core radius. As r_y→0 the fully plastic torque is 4/3 T_y.",
     vars:[{sym:R`T_y`,mean:"torque at first yield"},{sym:R`r_y`,mean:"elastic-core radius"},{sym:R`R`,mean:"outer radius"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Torque at first yield",href:"equations.html#eq-torsion-yield"},{label:"Residual stress",href:"glossary.html#g-residual-stress"}],
     keywords:"plastic yield core fully plastic"},

    {id:"eq-torsion-stress-conc", cat:"Torsional loading", name:"Torsional stress concentration",
     latex:R`\tau_{\max} = k\,\frac{T\,(d/2)}{J}`,
     desc:"At a step or fillet in a stepped shaft the smooth Tr/J result is amplified by a stress-concentration factor k, read from a chart against r/d for the given D/d. Use the smaller (downstream) diameter for d and its J.",
     vars:[{sym:R`k`,mean:"stress-concentration factor"},{sym:R`d`,mean:"smaller shaft diameter"},{sym:R`D`,mean:"larger shaft diameter"},{sym:R`r`,mean:"fillet radius"}],
     links:[{label:"Week 2",href:"week-02.html"},{label:"Stress concentration",href:"glossary.html#g-stress-concentration"}],
     keywords:"fillet step stepped shaft change in diameter peak chart factor k discontinuity"},

    /* ---- Bending ---- */
    {id:"eq-bending-strain", cat:"Bending loads", name:"Bending strain",
     latex:R`\varepsilon = \frac{y}{\rho}`,
     desc:"Normal strain varies linearly with distance y from the neutral axis; ρ is the radius of curvature. Because it comes purely from geometry, this stays true even when the material has yielded.",
     vars:[{sym:R`y`,mean:"distance from neutral axis"},{sym:R`\rho`,mean:"radius of curvature"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Neutral axis",href:"glossary.html#g-neutral-axis"},{label:"Radius of curvature",href:"glossary.html#g-radius-curvature"}], keywords:"curvature neutral axis linear plastic"},

    {id:"eq-bending-stress", cat:"Bending loads", name:"Flexure formula",
     latex:R`\sigma_x = \frac{My}{I},\qquad I = \int_A y^2\,dA`,
     desc:"Elastic bending stress; I is the second moment of area about the neutral axis.",
     vars:[{sym:R`M`,mean:"bending moment"},{sym:R`y`,mean:"distance from N.A."},{sym:R`I`,mean:"second moment of area"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Week 6",href:"week-06.html"},{label:"Second moment I",href:"glossary.html#g-second-moment"},{label:"Pure bending",href:"glossary.html#g-pure-bending"}], keywords:"elastic beam flexural my/i sigma"},

    {id:"eq-parallel-axis", cat:"Bending loads", name:"Parallel-axis theorem",
     latex:R`I = I_0 + A d^2`,
     desc:"Shifts a second moment of area from a centroidal axis to a parallel axis a distance d away. Essential for building up I of a composite cross-section (flanges + web, H- and channel-sections) from its rectangular pieces.",
     vars:[{sym:R`I_0`,mean:"centroidal second moment"},{sym:R`A`,mean:"area"},{sym:R`d`,mean:"axis offset"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Second moment I",href:"glossary.html#g-second-moment"}],
     keywords:"composite section centroid transfer flange web H channel I-beam built-up"},

    {id:"eq-beam-deflection", cat:"Bending loads", name:"Elastic beam deflection",
     latex:R`\frac{d^2y}{dx^2} = \frac{1}{\rho} = \frac{M}{EI}`,
     desc:"Curvature of the neutral axis is proportional to bending moment: the stiffer the beam (larger EI) the straighter it stays. Also the governing ODE for small elastic beam deflections — integrated twice in Week 11 to find the elastic curve.",
     vars:[{sym:R`EI`,mean:"flexural rigidity"},{sym:R`M`,mean:"bending moment"},{sym:R`\rho`,mean:"radius of curvature"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Week 11",href:"week-11.html"},{label:"Elastic curve by integration",href:"equations.html#eq-elastic-curve"},{label:"Flexural rigidity",href:"glossary.html#g-flexural-rigidity"},{label:"Radius of curvature",href:"glossary.html#g-radius-curvature"}],
     keywords:"curvature differential equation slope deflection rho EI radius"},

    {id:"eq-yield-moment", cat:"Bending loads", name:"Moment at first yield",
     latex:R`M_y = \frac{\sigma_y\,I}{Y}`,
     desc:"Bending moment at which the extreme fibre just reaches the yield stress; below it the whole section is elastic (use My/I), above it an elastic core forms. For a rectangle this is M_y = ⅔bY²σ_y. Not restricted to rectangles — for an I- or H-section use its actual I and Y.",
     vars:[{sym:R`M_y`,mean:"moment at first yield"},{sym:R`\sigma_y`,mean:"yield stress"},{sym:R`I`,mean:"second moment of area"},{sym:R`Y`,mean:"distance to extreme fibre"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Elastoplastic bending",href:"equations.html#eq-bending-plastic-rect"},{label:"Shape factor",href:"glossary.html#g-shape-factor"}],
     keywords:"first yield onset elastic limit plastic bending extreme fibre my"},

    {id:"eq-bending-plastic-sym", cat:"Bending loads", name:"Elastoplastic bending (symmetric)",
     latex:R`M = \sigma_y\!\left(\frac{I_{\text{elastic}}}{y_y} + \sum_{\text{plastic}} A\bar{y}\right)`,
     desc:"Moment when the outer fibres have yielded but an elastic core remains. Sum the elastic-core contribution (via its I) and each fully-plastic region treated as a resultant force σ_y·A acting at its centroid ȳ. The general method for any symmetric section (rectangle formula is the special case).",
     vars:[{sym:R`\sigma_y`,mean:"yield stress"},{sym:R`y_y`,mean:"elastic-core half-height"},{sym:R`A\bar{y}`,mean:"first moment of a plastic zone"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Moment at first yield",href:"equations.html#eq-yield-moment"},{label:"Elastoplastic",href:"glossary.html#g-elastoplastic"}],
     keywords:"plastic partially yielded core moment resultant force flange fully plastic I-beam"},

    {id:"eq-bending-plastic-rect", cat:"Bending loads", name:"Elastoplastic bending (rectangular)",
     latex:R`M = \tfrac{3}{2}M_y\!\left(1-\tfrac13\frac{y_y^{2}}{Y^{2}}\right)
              = \tfrac{3}{2}M_y\!\left(1-\tfrac13\frac{\rho^{2}}{\rho_y^{2}}\right)`,
     desc:"Closed form for a RECTANGULAR section only. As the elastic core vanishes (y_y→0) the fully plastic moment is M_p = 1.5 M_y, so the shape factor of a rectangle is 1.5. Note M_p = 1.5 M_y strictly only at ρ = 0.",
     vars:[{sym:R`M_y`,mean:"moment at first yield"},{sym:R`y_y`,mean:"elastic-core half-height"},{sym:R`Y`,mean:"section half-height"},{sym:R`\rho_y`,mean:"radius at first yield"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Moment at first yield",href:"equations.html#eq-yield-moment"},{label:"Shape factor",href:"glossary.html#g-shape-factor"}],
     keywords:"shape factor fully plastic rectangle 1.5 mp core"},

    {id:"eq-residual-curvature", cat:"Bending loads", name:"Residual stress & curvature (bending)",
     latex:R`\frac{1}{\rho_{\text{resid}}} = \frac{1}{\rho_L} - \frac{1}{\rho_{UL}}`,
     desc:"Bend a beam past yield then release it: the residual state is the elastoplastic loading distribution minus an ELASTIC unloading distribution (σ = My/I with the same M). This leaves a self-equilibrating residual stress and a permanent curvature. Springback in bending is the direct analogue of permanent twist in torsion.",
     vars:[{sym:R`\rho_L`,mean:"loaded curvature radius"},{sym:R`\rho_{UL}`,mean:"elastic unloading radius"},{sym:R`\rho_{\text{resid}}`,mean:"permanent radius"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Residual stress",href:"glossary.html#g-residual-stress"}],
     keywords:"springback permanent unloading superposition elastic residual self-equilibrating"},

    {id:"eq-transformed-section", cat:"Bending loads", name:"Composite beam — transformed section",
     latex:R`n = \frac{E_2}{E_1},\qquad \sigma_2 = n\,\sigma_{\text{transf}}`,
     desc:"To bend a two-material beam, replace material 2 with an equivalent WIDTH (not height) of n·b of material 1, analyse the all-material-1 transformed section with the ordinary flexure formula, then multiply the stress found in the transformed region by n to get the true stress there. The neutral axis passes through the centroid of the transformed section.",
     vars:[{sym:R`n`,mean:"modular ratio E₂/E₁"},{sym:R`E_1`,mean:"reference modulus"},{sym:R`E_2`,mean:"other material modulus"},{sym:R`b`,mean:"original width (becomes nb)"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Composite beam",href:"glossary.html#g-composite-beam"}],
     keywords:"composite laminated reinforced concrete modular ratio equivalent width stiffness ratio timber aluminium brass transform"},

    {id:"eq-anticlastic", cat:"Bending loads", name:"Anticlastic curvature",
     latex:R`\frac{1}{\rho'} = \frac{\nu}{\rho}`,
     desc:"Poisson strains make the cross-section curve gently across its width in the opposite sense to the main bending (a saddle shape), with radius ρ' = ρ/ν.",
     vars:[{sym:R`\rho'`,mean:"transverse (anticlastic) radius"},{sym:R`\rho`,mean:"longitudinal radius"},{sym:R`\nu`,mean:"Poisson's ratio"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Poisson's ratio",href:"glossary.html#g-poisson"},{label:"Anticlastic curvature",href:"glossary.html#g-anticlastic"}],
     keywords:"transverse curvature poisson saddle opposite width lateral deformation"},

    {id:"eq-eccentric-axial", cat:"Bending loads", name:"Eccentric / combined axial loading",
     latex:R`\sigma_x = \frac{P}{A} - \frac{My}{I},\qquad M = P\,d`,
     desc:"A load applied a distance d off the centroid is equivalent to a centric axial force P plus a couple M = Pd. Superpose the uniform axial stress P/A and the linear bending stress My/I. Used for clamps, hooks and offset columns.",
     vars:[{sym:R`P`,mean:"axial force"},{sym:R`A`,mean:"area"},{sym:R`M`,mean:"couple = P·d"},{sym:R`d`,mean:"eccentricity"}],
     links:[{label:"Week 3",href:"week-03.html"},{label:"Week 6",href:"week-06.html"},{label:"Flexure formula",href:"equations.html#eq-bending-stress"},{label:"Eccentric loading",href:"glossary.html#g-eccentric-loading"}],
     keywords:"eccentric combined loading superposition offset clamp hook axial plus bending centric couple"},

    /* ---- Transverse loading ---- */
    {id:"eq-shear-horizontal", cat:"Transverse (shear) loading", name:"Shear force on a horizontal plane",
     latex:R`H = \frac{VQ}{I}\,x,\qquad Q = \int_{A'} y\,dA = A'\bar{y}`,
     desc:"Longitudinal shear force transmitted across a horizontal (or any longitudinal) cut over a length x of beam, found from equilibrium of the bending stresses on the area A' beyond the cut. The starting point for shear flow and transverse shear stress. The same derivation works on ANY arbitrary longitudinal surface — the cut need not be planar or horizontal.",
     vars:[{sym:R`H`,mean:"longitudinal shear force (N)"},{sym:R`V`,mean:"transverse shear force"},{sym:R`Q`,mean:"first moment of A' about the N.A."},{sym:R`x`,mean:"length of beam considered"},{sym:R`A'`,mean:"area beyond the cut"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Shear flow",href:"equations.html#eq-shear-flow"},{label:"First moment Q",href:"glossary.html#g-first-moment"}],
     keywords:"horizontal plane longitudinal cut equilibrium arbitrary surface H VQ/I x"},

    {id:"eq-shear-flow", cat:"Transverse (shear) loading", name:"Shear flow",
     latex:R`q = \frac{H}{x} = \frac{VQ}{I},\qquad Q = \int_{A'} y\,dA = A'\bar{y}`,
     desc:"Longitudinal shear force per unit length; Q is the first moment of the area beyond the cut. Sizes nails, bolts and glue in built-up beams, and maps the flow of shear around thin-walled sections (linear along flanges, parabolic down webs, zero at free edges and — by symmetry — on the axis of symmetry).",
     vars:[{sym:R`q`,mean:"shear flow (N/m)"},{sym:R`V`,mean:"transverse shear force"},{sym:R`Q`,mean:"first moment of area"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"First moment Q",href:"glossary.html#g-first-moment"},{label:"Shear flow (glossary)",href:"glossary.html#g-shear-flow"},{label:"Fastener force",href:"equations.html#eq-fastener-force"}],
     keywords:"built-up beam nails glue longitudinal channel box thin-walled distribution free edge symmetry"},

    {id:"eq-fastener-force", cat:"Transverse (shear) loading", name:"Fastener (nail/bolt) force from shear flow",
     latex:R`F = \frac{q\,s}{n} = \frac{VQ}{I}\cdot\frac{s}{n}`,
     desc:"The shear flow q along a joint must be carried by discrete fasteners spaced s apart: each fastener picks up the flow accumulated over one spacing. If n parallel rows of fasteners (e.g. two rows of nails) share the same joint, divide between them. Rearranged, it gives the allowable shear V or the required spacing s from an allowable fastener force.",
     vars:[{sym:R`F`,mean:"shear force per fastener"},{sym:R`s`,mean:"fastener spacing along the beam"},{sym:R`n`,mean:"number of parallel fastener rows"},{sym:R`q`,mean:"shear flow at the joint"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Shear flow",href:"equations.html#eq-shear-flow"},{label:"Built-up member",href:"glossary.html#g-built-up"}],
     keywords:"nail bolt rivet screw spacing rows allowable shear built-up beam glue joint pitch"},

    {id:"eq-shear-stress-transverse", cat:"Transverse (shear) loading", name:"Transverse shear stress",
     latex:R`\tau_{xy} = \tau_{yx} = \frac{\Delta H}{\Delta A} = \frac{VQ}{It}`,
     desc:"Average shear stress on a longitudinal section of width t. Because shear stresses on perpendicular planes are equal, this is also the transverse (vertical) shear stress at the same point. Zero on free (top/bottom) faces; the maximum is NOT necessarily on the neutral axis — it depends on both Q and t. The same formula with the section made through a vertical plane gives τ_xz in flanges.",
     vars:[{sym:R`t`,mean:"width at the cut"},{sym:R`I`,mean:"second moment of area"},{sym:R`Q`,mean:"first moment of area beyond the cut"}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Week 6",href:"week-06.html"},{label:"Shear flow",href:"equations.html#eq-shear-flow"},{label:"Rectangular section",href:"equations.html#eq-shear-rect"}],
     keywords:"shear formula beam parabolic distribution vertical plane flange complementary VQ/It width"},

    {id:"eq-shear-rect", cat:"Transverse (shear) loading", name:"Shear stress in a rectangular section",
     latex:R`\tau_{xy} = \frac{3}{2}\frac{V}{A}\!\left(1-\frac{y^{2}}{Y^{2}}\right),\qquad \tau_{\max} = \frac{3}{2}\frac{V}{A}\ \text{ at the N.A.}`,
     desc:"Specialising VQ/It to a b×h rectangle (half-height Y) gives a parabolic distribution: zero at the top and bottom faces, maximum 1.5×(V/A) on the neutral axis. Valid provided the section is reasonably narrow (b ≤ h/4 keeps the variation across the width under ~20%).",
     vars:[{sym:R`V`,mean:"transverse shear force"},{sym:R`A`,mean:"cross-sectional area bh"},{sym:R`Y`,mean:"half-height h/2"},{sym:R`y`,mean:"distance from N.A."}],
     links:[{label:"Week 5",href:"week-05.html"},{label:"Transverse shear stress",href:"equations.html#eq-shear-stress-transverse"}],
     keywords:"rectangle parabolic 3V/2A maximum neutral axis narrow"},

    /* ---- Combined (general) loading ---- */
    {id:"eq-combined-stress", cat:"Combined (general) loading", name:"Superposition of stresses (combined loading)",
     latex:R`\sigma = \frac{P}{A} + \sum \frac{My}{I}
            \qquad
            \tau = \frac{Tr}{J} + \frac{VQ}{It}`,
     desc:"Stress at any point under general loading is found by superposition: cut a section through the point, transfer the external forces to the centroid to get the internal resultants (axial P, shears V, torque T, bending moments M), evaluate the stress each resultant produces AT THAT POINT, then add. Normal stresses (P/A and each My/I) combine into a single σ; shear stresses (Tr/J and VQ/It) must be added with attention to their directions — torsional shear runs tangent to the perimeter while transverse shear follows V, so at some points they add and at others they cancel. Sketch the final stress element.",
     vars:[{sym:R`P`,mean:"internal axial force"},{sym:R`M`,mean:"internal bending moment(s)"},{sym:R`T`,mean:"internal torque"},{sym:R`V`,mean:"internal shear force(s)"}],
     links:[{label:"Week 6",href:"week-06.html"},{label:"Combined loading",href:"glossary.html#g-combined-loading"},{label:"Internal resultants",href:"glossary.html#g-section-resultants"},{label:"Flexure formula",href:"equations.html#eq-bending-stress"},{label:"Torsional shear",href:"equations.html#eq-torsion-stress"},{label:"Transverse shear",href:"equations.html#eq-shear-stress-transverse"}],
     keywords:"combined general loading superposition stress element point add normal shear direction crankshaft billboard section resultants"},

    {id:"eq-q-circular", cat:"Combined (general) loading", name:"First moment Q — circular sections",
     latex:R`Q_{\text{NA}} = \frac{1}{2}\pi r^{2}\cdot\frac{4r}{3\pi} = \frac{2r^{3}}{3}
            \qquad
            Q_{\text{hollow}} = \frac{2}{3}\left(r_o^{3}-r_i^{3}\right)`,
     desc:"The first moment of the half-section about the neutral axis, needed for VQ/It in circular shafts and tubes. A solid semicircle has area ½πr² with centroid 4r/3π above the axis, giving Q = 2r³/3; for a tube subtract the inner semicircle from the outer, Q = Q_outer − Q_inner. Q (and hence transverse shear stress) is largest at the neutral axis and zero at the top and bottom of the section — the opposite pattern to bending stress.",
     vars:[{sym:R`r`,mean:"radius (solid section)"},{sym:R`r_o`,mean:"outer radius"},{sym:R`r_i`,mean:"inner radius"},{sym:R`4r/3\pi`,mean:"centroid height of a semicircle"}],
     links:[{label:"Week 6",href:"week-06.html"},{label:"First moment Q",href:"glossary.html#g-first-moment"},{label:"Transverse shear stress",href:"equations.html#eq-shear-stress-transverse"},{label:"Week 5",href:"week-05.html"}],
     keywords:"semicircle circular shaft tube hollow pipe centroid 4r/3pi 2r^3/3 neutral axis VQ/It"},

    /* ---- Transformation ---- */
    {id:"eq-stress-transformation", cat:"Transformation of stress & strain", name:"Stress transformation",
     latex:R`\begin{aligned}
       \sigma_{x'} &= \tfrac{\sigma_x+\sigma_y}{2} + \tfrac{\sigma_x-\sigma_y}{2}\cos 2\theta + \tau_{xy}\sin 2\theta\\[2pt]
       \sigma_{y'} &= \tfrac{\sigma_x+\sigma_y}{2} - \tfrac{\sigma_x-\sigma_y}{2}\cos 2\theta - \tau_{xy}\sin 2\theta\\[2pt]
       \tau_{x'y'} &= -\tfrac{\sigma_x-\sigma_y}{2}\sin 2\theta + \tau_{xy}\cos 2\theta
     \end{aligned}`,
     desc:"Plane-stress components on axes rotated by θ (anticlockwise positive), found by cutting the element and summing forces. Same information as Mohr's circle. Note σ_x' + σ_y' = σ_x + σ_y — the trace is invariant — and the σ_y' expression is just σ_x' with θ replaced by θ+90°.",
     vars:[{sym:R`\theta`,mean:"rotation angle (CCW +ve)"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"},{label:"Plane stress",href:"glossary.html#g-plane-stress"}],
     keywords:"mohr circle rotated plane plane stress invariant equilibrium wedge"},

    {id:"eq-mohr-circle", cat:"Transformation of stress & strain", name:"Mohr's circle (plane stress)",
     latex:R`\left(\sigma_{x'}-\sigma_{\text{ave}}\right)^2 + \tau_{x'y'}^{2} = R^2,\qquad
            \sigma_{\text{ave}} = \frac{\sigma_x+\sigma_y}{2},\qquad
            R = \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^{2}+\tau_{xy}^{2}}`,
     desc:"Eliminating θ from the transformation equations gives a circle of centre (σ_ave, 0) and radius R: every point on it is the (σ, τ) pair on some plane through the point. Plot X at (σ_x, τ_xy) and Y at (σ_y, τ_yx) using the polarity tip — anticlockwise shear is positive and plotted BELOW the σ-axis — and remember angles on the circle are DOUBLED: planes θ apart in the material sit 2θ apart on the circle.",
     vars:[{sym:R`\sigma_{\text{ave}}`,mean:"circle centre (mean normal stress)"},{sym:R`R`,mean:"circle radius = max in-plane shear"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Mohr's circle (glossary)",href:"glossary.html#g-mohr"},{label:"Principal stresses",href:"equations.html#eq-principal-stress"},{label:"Maximum in-plane shear",href:"equations.html#eq-max-shear-stress"}],
     keywords:"circle centre radius doubled angle 2theta polarity sign convention anticlockwise clockwise plot graphical"},

    {id:"eq-traction", cat:"Transformation of stress & strain", name:"Traction & the stress tensor",
     latex:R`\frac{d\tilde{f}}{dA}=\boldsymbol{\sigma}\tilde{n},\qquad
            \sigma_{x'x'}=\tilde{n}^{T}\boldsymbol{\sigma}\,\tilde{n},\qquad
            \tau_{x'y'}=\tilde{t}^{T}\boldsymbol{\sigma}\,\tilde{n},\qquad
            \sigma_{y'y'}=\tilde{t}^{T}\boldsymbol{\sigma}\,\tilde{t}`,
     desc:"The tensor route to the same answers: the stress tensor maps a plane's unit normal n to the traction (force per area) on that plane. Dotting the traction back onto n gives the normal stress; onto the tangent t gives the shear. With n = (cos θ, sin θ) this reproduces the transformation equations. A principal plane is one where the traction is parallel to n — i.e. σn = σ_p n — so principal stresses are the EIGENVALUES of the stress tensor and principal directions its eigenvectors.",
     vars:[{sym:R`\boldsymbol{\sigma}`,mean:"stress tensor (matrix)"},{sym:R`\tilde{n}`,mean:"unit normal of the plane"},{sym:R`\tilde{t}`,mean:"unit tangent of the plane"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Week 1",href:"week-01.html"},{label:"Stress tensor",href:"glossary.html#g-stress-tensor"},{label:"Principal stresses",href:"glossary.html#g-principal"}],
     keywords:"tensor traction normal tangent dot product matrix eigenvalue eigenvector principal direction alternative method"},

    {id:"eq-strain-transformation", cat:"Transformation of stress & strain", name:"Strain transformation",
     latex:R`\begin{aligned}
       \varepsilon_{x'} &= \tfrac{\varepsilon_x+\varepsilon_y}{2} + \tfrac{\varepsilon_x-\varepsilon_y}{2}\cos 2\theta + \tfrac{\gamma_{xy}}{2}\sin 2\theta\\[2pt]
       \varepsilon_{y'} &= \tfrac{\varepsilon_x+\varepsilon_y}{2} - \tfrac{\varepsilon_x-\varepsilon_y}{2}\cos 2\theta - \tfrac{\gamma_{xy}}{2}\sin 2\theta\\[2pt]
       \tfrac{\gamma_{x'y'}}{2} &= -\tfrac{\varepsilon_x-\varepsilon_y}{2}\sin 2\theta + \tfrac{\gamma_{xy}}{2}\cos 2\theta
     \end{aligned}`,
     desc:"Identical in form to stress transformation, using γ/2 in place of τ — so there is a Mohr's circle for plane strain too, with centre ε_ave = (ε_x+ε_y)/2 and radius R = √[((ε_x−ε_y)/2)² + (γ_xy/2)²]. Note these are NOT numerically the same equations as the stress ones: the factor of ½ on the shear strain matters.",
     links:[{label:"Week 7",href:"week-07.html"},{label:"Plane strain",href:"glossary.html#g-plane-strain"},{label:"Strain rosette",href:"equations.html#eq-strain-rosette"}],
     keywords:"mohr strain gauge rosette rotated plane strain gamma over two half"},

    {id:"eq-principal-stress", cat:"Transformation of stress & strain", name:"Principal stresses",
     latex:R`\sigma_{\max,\min} = \frac{\sigma_x+\sigma_y}{2} \pm \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2}
            \qquad \tan 2\theta_p = \frac{2\tau_{xy}}{\sigma_x-\sigma_y}`,
     desc:"Extreme normal stresses and the orientation θ_p of the planes on which they act (shear is zero there). On Mohr's circle these are simply σ_ave ± R, the two crossings of the σ-axis. Equivalently they are the eigenvalues of the stress tensor. Remember in plane stress there is always a THIRD principal stress, σ = 0 in the z direction.",
     vars:[{sym:R`\theta_p`,mean:"principal plane angle"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Principal stress",href:"glossary.html#g-principal"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"},{label:"Traction & tensor",href:"equations.html#eq-traction"}],
     keywords:"maximum minimum eigenvalue mohr sigma ave plus minus R zero shear plane"},

    {id:"eq-max-shear-stress", cat:"Transformation of stress & strain", name:"Maximum in-plane shear",
     latex:R`\tau_{\max,\text{in-plane}} = R = \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2}\qquad \theta_s = \theta_p + 45^\circ`,
     desc:"Largest IN-PLANE shear stress — the radius of Mohr's circle, on planes 45° from the principal planes (2θ = 90° on the circle). The normal stress on those planes is σ_ave. Caution: the true maximum shear at the point may be OUT of plane — check the 3D circles.",
     links:[{label:"Week 7",href:"week-07.html"},{label:"Max shear in 3D",href:"equations.html#eq-max-shear-3d"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"}],
     keywords:"mohr radius maximum shear 45 degrees theta s in-plane sigma ave"},

    {id:"eq-max-shear-3d", cat:"Transformation of stress & strain", name:"Maximum shear in 3D (plane stress cases)",
     latex:R`\tau_{\max} = \frac{\sigma_1-\sigma_3}{2},\qquad \sigma_3\le\sigma_2\le\sigma_1`,
     desc:"The true maximum shear stress is half the spread between the LARGEST and SMALLEST of the three principal stresses. In plane stress one principal stress is always zero, giving three cases: both in-plane values positive (0 < σ₂ < σ₁) → τ_max = σ₁/2, out of plane; opposite signs (σ₃ < 0 < σ₁) → τ_max = (σ₁−σ₃)/2, in plane; both negative (σ₃ < σ₂ < 0) → τ_max = −σ₃/2 = |σ₃|/2, out of plane. Classic trap: if both in-plane principal stresses are positive, what you called σ₂ is really σ₂ with σ₃ = 0, and the biggest circle is the out-of-plane one.",
     vars:[{sym:R`\sigma_1`,mean:"largest principal stress"},{sym:R`\sigma_3`,mean:"smallest principal stress"},{sym:R`\sigma_2`,mean:"middle principal stress (often 0 in plane stress)"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Week 9",href:"week-09.html"},{label:"Maximum shearing stress",href:"glossary.html#g-max-shear"},{label:"Tresca criterion",href:"equations.html#eq-tresca"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"}],
     keywords:"three dimensional out-of-plane in-plane sigma1 sigma3 half convention 3d mohr circles trap sigma2 is actually sigma3"},

    {id:"eq-principal-strain", cat:"Transformation of stress & strain", name:"Principal strains",
     latex:R`\varepsilon_{\max,\min} = \frac{\varepsilon_x+\varepsilon_y}{2} \pm \sqrt{\left(\frac{\varepsilon_x-\varepsilon_y}{2}\right)^2 + \left(\frac{\gamma_{xy}}{2}\right)^2}`,
     desc:"Extreme normal strains, analogous to principal stresses — centre ± radius of the strain Mohr's circle. Question worth pondering: for an isotropic material, principal strain directions coincide with principal stress directions.",
     links:[{label:"Week 7",href:"week-07.html"},{label:"Strain transformation",href:"equations.html#eq-strain-transformation"}],
     keywords:"strain gauge mohr maximum principal directions"},

    {id:"eq-strain-rosette", cat:"Transformation of stress & strain", name:"Strain rosette",
     latex:R`\varepsilon_i = \varepsilon_x\cos^2\theta_i + \varepsilon_y\sin^2\theta_i + \gamma_{xy}\sin\theta_i\cos\theta_i \qquad (i=1,2,3)`,
     desc:"Stress is hard to measure; strain is easy — a strain gauge is a zig-zag wire whose resistance rises as it stretches (Poisson thinning), read by a Wheatstone bridge. One gauge gives strain in one direction only, so a rosette bonds 2–3 gauges at known angles (45°, 60° or 90° patterns). Write the first strain-transformation equation for each gauge angle θ_i and solve the three equations simultaneously for ε_x, ε_y and γ_xy — then find principal strains if wanted.",
     vars:[{sym:R`\varepsilon_i`,mean:"strain measured by gauge i"},{sym:R`\theta_i`,mean:"angle of gauge i from the x-axis"}],
     links:[{label:"Week 7",href:"week-07.html"},{label:"Strain rosette (glossary)",href:"glossary.html#g-strain-rosette"},{label:"Strain transformation",href:"equations.html#eq-strain-transformation"}],
     keywords:"gauge rosette 45 60 90 wheatstone bridge measure simultaneous equations three gauges wire resistance"},

    /* ---- Failure criteria ---- */
    {id:"eq-tresca", cat:"Failure criteria", name:"Maximum-shear (Tresca) criterion",
     latex:R`\tau_{\max} = \frac{\sigma_1-\sigma_3}{2} < \frac{\sigma_y}{2}`,
     desc:"Yield in a ductile material is predominantly due to shear — lattice planes slide, atoms are not pulled apart (even a tensile specimen necks on oblique planes). Failure is therefore predicted when the maximum shear stress reaches the maximum shear in a tensile test at yield, which is σ_y/2. Use the TRUE 3D maximum shear (σ₁−σ₃)/2, remembering the three plane-stress cases and the out-of-plane check from Week 7: same-sign in-plane principals → τ_max = σ₁/2 or |σ₃|/2 out of plane. On principal-stress axes the safe zone is the Tresca hexagon. Conservative — it sits inside the von Mises ellipse.",
     vars:[{sym:R`\sigma_y`,mean:"uniaxial yield stress"},{sym:R`\sigma_1,\sigma_3`,mean:"largest / smallest principal stresses"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Tresca",href:"glossary.html#g-tresca"},{label:"Max shear in 3D",href:"equations.html#eq-max-shear-3d"},{label:"von Mises criterion",href:"equations.html#eq-von-mises"}],
     keywords:"yield ductile conservative shear hexagon safe zone tensile test sigma y over 2 slip lattice"},

    {id:"eq-von-mises", cat:"Failure criteria", name:"Distortion-energy (von Mises) criterion",
     latex:R`\begin{aligned}
       \sigma_{vm} &= \sqrt{\tfrac12\big[(\sigma_1-\sigma_2)^2+(\sigma_1-\sigma_3)^2+(\sigma_2-\sigma_3)^2\big]} \;<\; \sigma_y\\[4pt]
       \text{plane stress:}\quad \sigma_{vm} &= \sqrt{\sigma_1^2 - \sigma_1\sigma_2 + \sigma_2^2}
        \;=\; \sqrt{\sigma_x^2 - \sigma_x\sigma_y + \sigma_y^2 + 3\tau_{xy}^2}
     \end{aligned}`,
     desc:"Yield when the distortion (shape-change) energy reaches the value it has at yield in a tensile test. Comparing dU_d/dv for a general state against the tensile-test value 2(1+ν)σ_y²/3E defines the von Mises equivalent stress σ_vm: yield has occurred if σ_vm > σ_y. Top form is fully 3D in principal stresses; the plane-stress (σ₃ = 0) forms use principal or general x–y components. On principal-stress axes the yield surface is an ellipse (a cylinder about the hydrostatic axis in 3D) — hydrostatic stress alone produces NO distortion energy and never yields the material. Predicts yield in pure shear at τ_y = σ_y/√3 ≈ 0.577σ_y, matching the experimental τ_y/σ_y ≈ 0.5–0.6 better than Tresca's 0.5.",
     vars:[{sym:R`\sigma_{vm}`,mean:"von Mises (equivalent) stress"},{sym:R`\sigma_1,\sigma_2,\sigma_3`,mean:"principal stresses"},{sym:R`\sigma_y`,mean:"uniaxial yield stress"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"von Mises",href:"glossary.html#g-vonmises"},{label:"Distortion energy",href:"equations.html#eq-distortion-energy"},{label:"Tresca criterion",href:"equations.html#eq-tresca"},{label:"Factor of safety",href:"glossary.html#g-fos"}],
     keywords:"yield ductile distortion energy equivalent stress sigma vm ellipse cylinder hydrostatic axis pure shear 0.577 root 3"},

    {id:"eq-distortion-energy", cat:"Failure criteria", name:"Strain energy & distortion energy",
     latex:R`\begin{aligned}
       \frac{dU}{dv} &= \tfrac12\,\boldsymbol{\sigma}\!:\!\boldsymbol{\epsilon}
         = \tfrac12\big(\sigma_{xx}\epsilon_{xx}+\sigma_{yy}\epsilon_{yy}+\sigma_{zz}\epsilon_{zz}
           + 2\tau_{xy}\gamma_{xy} + 2\tau_{xz}\gamma_{xz} + 2\tau_{yz}\gamma_{yz}\big)\\[4pt]
       \frac{dU_v}{dv} &= \tfrac32\,\bar{\sigma}\bar{\epsilon} = \frac{3(1-2\nu)}{2E}\,\bar{\sigma}^2
       \qquad
       \frac{dU_d}{dv} = \tfrac12\,\boldsymbol{\sigma}^{*}\!:\!\boldsymbol{\epsilon}^{*}
         = \frac{(1+\nu)}{3E}\big[(\sigma_1-\sigma_2)^2+(\sigma_1-\sigma_3)^2+(\sigma_2-\sigma_3)^2\big]
     \end{aligned}`,
     desc:"Elastic strain energy per unit volume (area under the σ–ε triangle) splits into two independent parts when written in principal directions with Hooke's law: dU_v/dv, the energy to CHANGE VOLUME (driven by the hydrostatic components σ̄, ε̄), and dU_d/dv, the energy to DISTORT THE SHAPE (driven by the deviatoric components σ*, ε*). At yield in a tensile test (σ₁ = σ_y, σ₂ = σ₃ = 0) the distortion energy is 2(1+ν)σ_y²/3E — equating any state's dU_d/dv to this value is exactly the von Mises criterion.",
     vars:[{sym:R`dU/dv`,mean:"total strain energy density"},{sym:R`dU_v/dv`,mean:"volumetric part"},{sym:R`dU_d/dv`,mean:"distortion part"},{sym:R`\bar{\sigma},\bar{\epsilon}`,mean:"hydrostatic (mean) stress & strain"},{sym:R`\boldsymbol{\sigma}^{*},\boldsymbol{\epsilon}^{*}`,mean:"deviatoric stress & strain"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"von Mises criterion",href:"equations.html#eq-von-mises"},{label:"Hydrostatic & deviatoric",href:"equations.html#eq-hydrostatic-deviatoric"},{label:"Generalised Hooke",href:"equations.html#eq-hooke-3d"}],
     keywords:"strain energy density elastic volume shape change distortion deviatoric hydrostatic tensile test yield 2(1+v)/3E"},

    {id:"eq-hydrostatic-deviatoric", cat:"Failure criteria", name:"Hydrostatic & deviatoric decomposition",
     latex:R`\bar{\sigma} = \frac{\sigma_{xx}+\sigma_{yy}+\sigma_{zz}}{3},\qquad
            \bar{\epsilon} = \frac{\epsilon_{xx}+\epsilon_{yy}+\epsilon_{zz}}{3},\qquad
            \boldsymbol{\sigma} = \bar{\sigma}\mathbf{I} + \boldsymbol{\sigma}^{*}`,
     desc:"Any stress (or strain) state splits into a HYDROSTATIC part — the mean normal stress σ̄ acting equally in all directions, which changes volume (∂V = 3ε̄V) but not shape — and a DEVIATORIC remainder σ*, which changes shape at constant volume (∂V = 0). The split is what lets strain energy separate cleanly into volumetric and distortion parts, and explains why ductile yield (a shape-change phenomenon) is insensitive to hydrostatic pressure.",
     vars:[{sym:R`\bar{\sigma}`,mean:"hydrostatic (mean) stress"},{sym:R`\boldsymbol{\sigma}^{*}`,mean:"deviatoric stress"},{sym:R`\mathbf{I}`,mean:"identity tensor"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Distortion energy",href:"equations.html#eq-distortion-energy"},{label:"Hydrostatic / deviatoric",href:"glossary.html#g-hydrostatic"},{label:"Dilation",href:"equations.html#eq-dilation"}],
     keywords:"mean stress pressure volume constant shape change decomposition split trace deviator"},

    {id:"eq-coulomb", cat:"Failure criteria", name:"Coulomb (maximum-normal-stress) criterion — brittle",
     latex:R`|\sigma_1| < \sigma_u \quad\text{and}\quad |\sigma_2| < \sigma_u`,
     desc:"Brittle materials fail suddenly by fracture at the ultimate strength σ_u, with no yielding. Coulomb's criterion: failure occurs when the magnitude of either principal stress reaches σ_u — a square safe zone on principal-stress axes. Its flaw: it assumes equal strength in tension and compression, but brittle materials are usually much WEAKER IN TENSION because micro-cracks act as intense stress concentrations in tension while having no effect in compression (think of chalk). Mohr's criterion fixes this.",
     vars:[{sym:R`\sigma_u`,mean:"ultimate strength"},{sym:R`\sigma_1,\sigma_2`,mean:"principal stresses"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Mohr's criterion",href:"equations.html#eq-mohr-criterion"},{label:"Ultimate strength",href:"glossary.html#g-ultimate"},{label:"Ductile vs brittle",href:"glossary.html#g-ductile-brittle"}],
     keywords:"brittle fracture rupture maximum normal stress square safe zone ultimate tension compression equal"},

    {id:"eq-mohr-criterion", cat:"Failure criteria", name:"Mohr's criterion — brittle",
     latex:R`\text{safe if the Mohr's circle lies inside the envelope of test circles}
            \qquad
            \sigma_2 = \frac{\sigma_{UC}}{\sigma_{UT}}\,\sigma_1 - \sigma_{UC}
            \;\;\text{(4th-quadrant line)}`,
     desc:"Accounts for brittle materials being weaker in tension (σ_UT) than compression (σ_UC). Plot the Mohr's circles of the available failure tests — tension, compression and (if you have it) torsion — and draw their envelope in the σ–τ plane: a stress state is safe while its own circle fits inside. Without torsion data, estimate the envelope by straight-line TANGENTS to the tension and compression circles (usually conservative). On principal-stress axes the safe zone matches Coulomb's square in the first and third quadrants but is cut back by sloping lines in the mixed-sign quadrants; the fourth-quadrant boundary is the line given, used with the load-path ratio σ₁/σ₂ to solve failure-torque problems (e.g. Beer 7.95/7.96).",
     vars:[{sym:R`\sigma_{UT}`,mean:"ultimate tensile strength"},{sym:R`\sigma_{UC}`,mean:"ultimate compressive strength (magnitude)"},{sym:R`\tau_U`,mean:"ultimate torsional shear (if tested)"}],
     links:[{label:"Week 9",href:"week-09.html"},{label:"Coulomb criterion",href:"equations.html#eq-coulomb"},{label:"Mohr's criterion (glossary)",href:"glossary.html#g-mohr-criterion"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"}],
     keywords:"brittle envelope tension compression torsion test tangent straight line conservative cast iron aluminium fourth quadrant mixed sign"},

    /* ---- Pressure vessels ---- */
    {id:"eq-cyl-hoop", cat:"Thin-walled pressure vessels", name:"Cylindrical — hoop stress",
     latex:R`\sum F_x = 0 = 2Lt\,\sigma_h - 2RLP \quad\Rightarrow\quad \sigma_h = \frac{PR}{t}`,
     desc:"Circumferential stress in a thin cylinder, from equilibrium of a half-cylinder: the pressure pushing on the projected area 2RL is held by the wall on two cuts of area Lt each. Twice the axial stress, so hoop governs the design — which is why pressurised cylinders split along their length (think of a sausage).",
     vars:[{sym:R`P`,mean:"internal (gauge) pressure"},{sym:R`R`,mean:"radius"},{sym:R`t`,mean:"wall thickness"},{sym:R`L`,mean:"length of segment considered"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"Hoop stress",href:"glossary.html#g-hoop"},{label:"Axial stress",href:"equations.html#eq-cyl-axial"}],
     keywords:"circumferential cylinder vessel tank pipe boiler half cylinder projected area sausage"},

    {id:"eq-cyl-axial", cat:"Thin-walled pressure vessels", name:"Cylindrical — axial stress",
     latex:R`\sum F_z = 0 = 2\pi Rt\,\sigma_a - \pi R^2 P \quad\Rightarrow\quad \sigma_a = \frac{PR}{2t} = \frac{\sigma_h}{2}`,
     desc:"Longitudinal stress in a thin cylinder, from equilibrium of the pressure on the end cap (area πR²) against the wall annulus (area 2πRt). Exactly half the hoop stress. CAUTION: it exists only when the ends actually load the wall — an open cylinder whose pressure is reacted by a piston and base (Hibbeler 8-3a) has σa = 0.",
     vars:[{sym:R`\sigma_a`,mean:"axial (longitudinal) stress"},{sym:R`P`,mean:"internal (gauge) pressure"},{sym:R`R`,mean:"radius"},{sym:R`t`,mean:"wall thickness"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"Axial stress",href:"glossary.html#g-axial-stress"},{label:"Hoop stress",href:"equations.html#eq-cyl-hoop"}],
     keywords:"longitudinal cylinder vessel end cap annulus half hoop open closed piston support"},

    {id:"eq-sphere", cat:"Thin-walled pressure vessels", name:"Spherical vessel stress",
     latex:R`\sum F_z = 0 = 2\pi Rt\,\sigma_h - \pi R^2 P \quad\Rightarrow\quad \sigma_h = \frac{PR}{2t}`,
     desc:"Uniform membrane stress in a thin sphere — the same in every in-plane direction by symmetry, so every direction is principal and the in-plane Mohr's circle collapses to a point. Same equilibrium cut as the cylinder's axial direction, hence the same PR/2t. For a given pressure and radius a sphere needs half the wall thickness of a cylinder, which is why high-pressure gas is stored in spheres.",
     vars:[{sym:R`P`,mean:"internal (gauge) pressure"},{sym:R`R`,mean:"radius"},{sym:R`t`,mean:"wall thickness"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"Thin-walled vessel",href:"glossary.html#g-thin-wall"},{label:"Max shear in vessel walls",href:"equations.html#eq-vessel-max-shear"}],
     keywords:"sphere spherical vessel membrane uniform point circle gas storage"},

    {id:"eq-vessel-max-shear", cat:"Thin-walled pressure vessels", name:"Maximum shear in vessel walls",
     latex:R`\tau_{\max} = \tfrac12(\sigma_h + P) \approx \frac{\sigma_h}{2}
            \qquad\Rightarrow\qquad
            \tau_{\max}^{\text{cyl}} = \frac{PR}{2t},\quad
            \tau_{\max}^{\text{sph}} = \frac{PR}{4t}
            \quad (t \ll R)`,
     desc:"The wall is in plane stress, but the third principal stress is −P on the inner surface (0 on the outer). The biggest of the three 3D Mohr's circles therefore runs from −P to σh, giving τmax = ½(σh + P) ≈ σh/2 since P ≪ σh for a thin wall — acting OUT OF PLANE, at 45° through the thickness. In a sphere the in-plane circle is a point (σ1 = σ2), so all the shear is out-of-plane. TRAP: for a cylinder, quoting the in-plane radius (σh−σa)/2 = PR/4t understates the true maximum PR/2t by a factor of two — the same out-of-plane trap as Week 7.",
     vars:[{sym:R`\sigma_h`,mean:"hoop (largest membrane) stress"},{sym:R`P`,mean:"internal pressure (−P is σ₃ at the inner surface)"}],
     links:[{label:"Week 10",href:"week-10.html"},{label:"Week 7",href:"week-07.html"},{label:"Max shear in 3D",href:"equations.html#eq-max-shear-3d"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"}],
     keywords:"maximum shear out of plane in plane third principal stress minus P inner surface 45 degrees through thickness trap"},

    /* ---- Beam deflection ---- */
    {id:"eq-elastic-curve", cat:"Beam deflection", name:"Elastic curve by double integration",
     latex:R`EI\frac{d^2y}{dx^2} = M(x)
            \quad\Rightarrow\quad
            EI\frac{dy}{dx} = \int M(x)\,dx + C_1
            \quad\Rightarrow\quad
            EIy = \int\!\!\left(\int M(x)\,dx\right)dx + C_1 x + C_2`,
     desc:"The governing ODE for small elastic deflections, from 1/ρ = M/EI with the small-slope approximation (dy/dx)² ≈ 0. Write M(x) from a section cut (guided by the SFD/BMD), integrate twice, and fix the constants from BOUNDARY CONDITIONS: y = 0 at a pin or roller; y = 0 AND dy/dx = 0 at a fixed end. If the moment expression changes along the beam (point load, applied couple), integrate each region separately — each brings its own pair of constants — and add CONTINUITY conditions: y and dy/dx must match where regions meet. Watch coordinate directions: if two x-coordinates run towards each other, the matching gradients are opposite in sign.",
     vars:[{sym:R`y`,mean:"deflection of the neutral axis"},{sym:R`M(x)`,mean:"internal bending moment"},{sym:R`EI`,mean:"flexural rigidity"},{sym:R`C_1,C_2`,mean:"integration constants (one pair per region)"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Curvature (1/ρ = M/EI)",href:"equations.html#eq-beam-deflection"},{label:"Elastic curve",href:"glossary.html#g-elastic-curve"},{label:"Boundary conditions",href:"glossary.html#g-boundary-conditions"},{label:"Continuity conditions",href:"glossary.html#g-continuity"}],
     keywords:"double integration method deflection slope elastic curve ODE constants boundary conditions continuity matching regions M/EI"},

    {id:"eq-cantilever-results", cat:"Beam deflection", name:"Cantilever tip deflections (standard cases)",
     latex:R`\begin{aligned}
       \text{end couple } M_0:&\quad y_{\text{tip}} = \frac{M_0 L^2}{2EI}, & \theta_{\text{tip}} &= \frac{M_0 L}{EI}\\[2pt]
       \text{end load } P:&\quad y_{\text{tip}} = -\frac{PL^3}{3EI}, & \theta_{\text{tip}} &= -\frac{PL^2}{2EI}\\[2pt]
       \text{UDL } w:&\quad y_{\text{tip}} = -\frac{wL^4}{8EI}, & \theta_{\text{tip}} &= -\frac{wL^3}{6EI}
     \end{aligned}`,
     desc:"Free-end deflection and slope of a cantilever for the three classic loadings, each derived by double integration with y = 0 and dy/dx = 0 at the wall (Beer 9.1–9.3). Signs follow the usual y-up convention: a downward P or w deflects the tip downward. Worth memorising — they reappear constantly in superposition solutions of indeterminate beams.",
     vars:[{sym:R`M_0`,mean:"couple applied at the free end"},{sym:R`P`,mean:"point load at the free end"},{sym:R`w`,mean:"uniform load per unit length"},{sym:R`L`,mean:"cantilever length"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Elastic curve",href:"equations.html#eq-elastic-curve"},{label:"Flexural rigidity",href:"glossary.html#g-flexural-rigidity"}],
     keywords:"cantilever free end tip deflection slope end moment couple point load uniformly distributed standard cases table PL3/3EI wL4/8EI M0L2/2EI"},

    {id:"eq-ss-central", cat:"Beam deflection", name:"Simply supported beam — central point load",
     latex:R`EIy = \frac{P x^3}{12} - \frac{P L^2 x}{16}\ \ (0\le x\le \tfrac{L}{2}),
            \qquad
            \theta_A = \frac{PL^2}{16EI},
            \qquad
            y_{\max} = -\frac{PL^3}{48EI}\ \text{at mid-span}`,
     desc:"The benchmark simply supported case (Hibbeler 12-3): with M(x) = Px/2 on the left half, integrate twice, use y = 0 at the pin and — by symmetry — dy/dx = 0 at mid-span to fix the constants. If the load is OFF-CENTRE the symmetry shortcut dies: solve two regions (each with M = Rx from its own end) and match y and dy/dx at the load point, remembering that gradients measured along coordinates running towards each other differ in sign.",
     vars:[{sym:R`P`,mean:"central point load"},{sym:R`L`,mean:"span"},{sym:R`\theta_A`,mean:"slope at the support (rad)"}],
     links:[{label:"Week 11",href:"week-11.html"},{label:"Elastic curve",href:"equations.html#eq-elastic-curve"},{label:"Continuity conditions",href:"glossary.html#g-continuity"}],
     keywords:"simply supported central midspan point load PL3/48EI PL2/16EI symmetry asymmetric off-centre two regions matching"}
  ],

  /* =========================================================
     GLOSSARY  (def may contain inline LaTeX via \( ... \))
     ========================================================= */
  glossary:[
    {id:"g-stress", term:"Stress", sym:R`\sigma`,
      def:R`The concentration of internal force on an element of area, \(\sigma=dF/dA\). Units: Pa (N/m²); 1 MPa = 1 N/mm². MECH2430 cares about the <em>distribution</em> of stress, not just the average.`,
      see:[{label:"Normal stress",href:"#g-normal-stress"},{label:"Shear stress",href:"#g-shear-stress"}]},
    {id:"g-normal-stress", term:"Normal stress", sym:R`\sigma`,
      def:R`Stress acting perpendicular to a surface (tension positive, compression negative).`,
      see:[{label:"Flexure formula",href:"equations.html#eq-bending-stress"}]},
    {id:"g-shear-stress", term:"Shear stress", sym:R`\tau`,
      def:R`Stress acting parallel to a surface. Arises in transverse loading, torsion and on oblique planes. Normal and shear stress are "two sides of the same coin".`,
      see:[{label:"Transverse shear",href:"equations.html#eq-shear-stress-transverse"}]},
    {id:"g-bearing-stress", term:"Bearing stress",
      def:R`Average contact pressure a pin or bolt exerts on the inside of a hole, \(\sigma_b=F/(td)\). The real distribution is far from uniform.`},
    {id:"g-strain", term:"Strain", sym:R`\varepsilon`,
      def:R`A dimensionless measure of deformation. Normal strain \(\varepsilon=\delta/L\); shear strain \(\gamma\) measures angular distortion.`,
      see:[{label:"Normal strain",href:"equations.html#eq-normal-strain"}]},
    {id:"g-shear-strain", term:"Shear strain", sym:R`\gamma`,
      def:R`The change in angle (radians) between two originally perpendicular lines. Physics notation uses \(\epsilon_{xy}=\tfrac12\gamma_{xy}\).`},
    {id:"g-poisson", term:"Poisson's ratio", sym:R`\nu`,
      def:R`Ratio of lateral contraction to axial extension, \(\nu=-\varepsilon_{lat}/\varepsilon_{axial}\). Typically 0.25–0.35; approaches 0.5 for incompressible materials.`,
      see:[{label:"Equation",href:"equations.html#eq-poisson"}]},
    {id:"g-hooke", term:"Hooke's law",
      def:R`The linear-elastic constitutive law relating stress and strain below yield: \(\sigma=E\varepsilon\) in 1D, generalised to 3D for isotropic materials.`,
      see:[{label:"1D",href:"equations.html#eq-hooke-1d"},{label:"3D",href:"equations.html#eq-hooke-3d"}]},
    {id:"g-young", term:"Young's modulus", sym:R`E`,
      def:R`The elastic stiffness in tension/compression — the slope of the linear part of the stress–strain curve. Steel ≈ 210 GPa, aluminium ≈ 70 GPa, brass ≈ 120 GPa.`},
    {id:"g-shear-modulus", term:"Shear modulus", sym:R`G`,
      def:R`Modulus of rigidity: elastic stiffness in shear, \(\tau=G\gamma\). Steel ≈ 75 GPa, aluminium ≈ 25 GPa.`},
    {id:"g-bulk", term:"Bulk modulus", sym:R`k`,
      def:R`Resistance to uniform volume change under hydrostatic pressure, \(k=E/[3(1-2\nu)]\). Must be positive, which forces \(\nu<0.5\).`,
      see:[{label:"Equation",href:"equations.html#eq-bulk"}]},
    {id:"g-dilation", term:"Dilation", sym:R`e`,
      def:R`The fractional change in volume, \(e=\varepsilon_x+\varepsilon_y+\varepsilon_z\).`},
    {id:"g-constitutive", term:"Constitutive law",
      def:R`A model for how stress and strain are related in a material (e.g. Hooke's law for linear-elastic behaviour).`},
    {id:"g-tensile-test", term:"Tensile test",
      def:R`A standard experiment that loads a specimen in tension to measure the stress–strain curve, yield stress and Young's modulus. Basis of Assessment 4.`,
      see:[{label:"Engineering Report",href:"assessments.html#a-report"}]},
    {id:"g-yield", term:"Yield stress", sym:R`\sigma_y`,
      def:R`The stress at which a material stops behaving elastically and begins to deform permanently (plastically).`},
    {id:"g-elastoplastic", term:"Elastoplastic",
      def:R`Behaviour where part of a section has yielded (plastic) while a core remains elastic — relevant to torsion (Week 2) and bending past first yield (Week 3). Strain stays linear across the section even in the plastic zones; only the stress distribution flattens to \(\sigma_y\).`,
      see:[{label:"Elastoplastic torsion",href:"equations.html#eq-torsion-plastic"},{label:"Elastoplastic bending",href:"equations.html#eq-bending-plastic-sym"},{label:"Week 2",href:"week-02.html"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-stress-tensor", term:"Stress tensor",
      def:R`A rank-2 tensor (3×3 matrix of \(\sigma\) and \(\tau\) components) that maps a plane's normal vector to the traction (force concentration) on that plane. Stress is neither a scalar nor a vector. Used in Week 7 as the matrix route to stress transformation and principal stresses (eigenvalues).`,
      see:[{label:"Week 1",href:"week-01.html"},{label:"Week 7",href:"week-07.html"},{label:"Traction & tensor",href:"equations.html#eq-traction"}]},
    {id:"g-strain-tensor", term:"Strain tensor",
      def:R`The rank-2 tensor of normal and shear strains describing deformation at a point.`},
    {id:"g-oblique", term:"Oblique plane",
      def:R`A cut at angle θ to the axis of a loaded member. The internal force resolves into normal and shear components, so even pure axial load produces shear on oblique planes.`},
    {id:"g-stat-indeterminate", term:"Statically indeterminate",
      def:R`A system with more reactions than equilibrium equations can solve. Requires compatibility (deformation) conditions — often handled by superposition. For beams (Week 11) the elastic-curve boundary conditions supply the missing equations: e.g. a propped cantilever has 5 unknowns (\(M_A,R_A,R_B,C_1,C_2\)) matched by \(\sum F_y=0\), \(\sum M=0\), \(y_A=0\), \(y_B=0\) and \(dy/dx|_A=0\).`,
      see:[{label:"Superposition",href:"#g-superposition"},{label:"Elastic curve",href:"#g-elastic-curve"},{label:"Week 11",href:"week-11.html"}]},
    {id:"g-superposition", term:"Superposition method",
      def:R`Because the governing relations are linear, the response to several loads equals the sum of the responses to each load applied alone. Used to solve indeterminate problems (remove redundant reactions, treat them as unknown loads, add the deformations) and, in Week 6, to find the stress at a point under combined loading by adding the stresses from each internal resultant.`,
      see:[{label:"Superposition of stresses",href:"equations.html#eq-combined-stress"},{label:"Week 6",href:"week-06.html"}]},
    {id:"g-thermal", term:"Thermal expansion",
      def:R`Materials expand with temperature, \(\delta_T=\alpha\,\Delta T\,L\). If restrained, this generates thermal stress.`},
    {id:"g-neutral-axis", term:"Neutral axis",
      def:R`The line in a bent cross-section where bending stress and strain are zero. It passes through the centroid for elastic bending (and through the centroid of the transformed section for a composite beam).`,
      see:[{label:"Flexure formula",href:"equations.html#eq-bending-stress"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-second-moment", term:"Second moment of area", sym:R`I`,
      def:R`\(I=\int_A y^2\,dA\). Governs bending stiffness and stress. Combine sub-areas with the parallel-axis theorem; for a rectangle about its centroid \(I=\tfrac{1}{12}bd^3\).`,
      see:[{label:"Parallel-axis",href:"equations.html#eq-parallel-axis"},{label:"Flexure formula",href:"equations.html#eq-bending-stress"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-pure-bending", term:"Pure bending",
      def:R`Bending under a constant moment with no shear force (a flat SFD, so \(V=0\)). The reference case from which the flexure formula is derived; more general transverse loadings are handled by superposition of pure-bending results.`,
      see:[{label:"Flexure formula",href:"equations.html#eq-bending-stress"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-radius-curvature", term:"Radius of curvature", sym:R`\rho`,
      def:R`The radius \(\rho\) of the circular arc into which the neutral axis bends; the curvature is \(1/\rho\). Linked to moment by \(1/\rho=M/EI\) and to strain by \(\varepsilon=y/\rho\). A smaller \(\rho\) means a sharper bend.`,
      see:[{label:"Curvature",href:"equations.html#eq-beam-deflection"},{label:"Bending strain",href:"equations.html#eq-bending-strain"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-flexural-rigidity", term:"Flexural rigidity", sym:R`EI`,
      def:R`A beam's resistance to bending — the product of Young's modulus \(E\) and second moment of area \(I\). Plays the role in bending that axial rigidity \(EA\) plays under axial load and torsional rigidity \(GJ\) plays in torsion.`,
      see:[{label:"Curvature",href:"equations.html#eq-beam-deflection"},{label:"Second moment of area",href:"#g-second-moment"}]},
    {id:"g-composite-beam", term:"Composite beam / transformed section",
      def:R`A beam made of two or more materials (e.g. timber bolted to an aluminium plate, or reinforced concrete). Analysed by transforming the section into an equivalent one of a single material: multiply the width of the other material by the modular ratio \(n=E_2/E_1\) (height unchanged), apply the ordinary flexure formula, then scale the transformed material's stress by \(n\).`,
      see:[{label:"Transformed section",href:"equations.html#eq-transformed-section"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-anticlastic", term:"Anticlastic curvature", sym:R`\rho'`,
      def:R`The gentle curvature a beam's cross-section takes across its width, opposite in sense to the main bending (a saddle shape), caused by Poisson strains above and below the neutral axis. Its radius is \(\rho'=\rho/\nu\).`,
      see:[{label:"Equation",href:"equations.html#eq-anticlastic"},{label:"Poisson's ratio",href:"#g-poisson"}]},
    {id:"g-shape-factor", term:"Shape factor & plastic moment", sym:R`M_p`,
      def:R`As a section yields fully the moment approaches the plastic moment \(M_p\). The shape factor \(M_p/M_y\) depends only on the cross-section shape (1.5 for a rectangle, smaller for an I-beam where most area is far from the neutral axis). Between \(M_y\) and \(M_p\) the section is elastoplastic with a shrinking elastic core.`,
      see:[{label:"Moment at first yield",href:"equations.html#eq-yield-moment"},{label:"Elastoplastic bending",href:"equations.html#eq-bending-plastic-rect"},{label:"Yield stress",href:"#g-yield"}]},
    {id:"g-eccentric-loading", term:"Eccentric axial loading",
      def:R`An axial force applied off the centroid of a section. It is statically equivalent to a centric force plus a couple \(M=Pd\), so the stress is the superposition \(\sigma=P/A-My/I\). Governs clamps, hooks and offset columns.`,
      see:[{label:"Equation",href:"equations.html#eq-eccentric-axial"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-polar-moment", term:"Polar moment of area", sym:R`J`,
      def:R`\(J=\int_A r^2\,dA\); the torsional analogue of \(I\). For a solid circle \(J=\pi R^4/2\); for a hollow circle \(J=\tfrac{\pi}{2}(R_o^4-R_i^4)\).`,
      see:[{label:"Torsional shear stress",href:"equations.html#eq-torsion-stress"},{label:"Week 2",href:"week-02.html"}]},
    {id:"g-angle-twist", term:"Angle of twist", sym:R`\phi`,
      def:R`The relative rotation (radians) between the two ends of a shaft under torque, \(\phi=TL/JG\) in the elastic range. The torsional analogue of axial elongation \(\delta=FL/EA\).`,
      see:[{label:"Equation",href:"equations.html#eq-torsion-angle"},{label:"Week 2",href:"week-02.html"}]},
    {id:"g-torsional-rigidity", term:"Torsional rigidity", sym:R`GJ`,
      def:R`A shaft's resistance to twisting — the product of shear modulus \(G\) and polar moment of area \(J\). Plays the role in torsion that axial rigidity \(EA\) plays under axial load and flexural rigidity \(EI\) plays in bending.`,
      see:[{label:"Angle of twist",href:"equations.html#eq-torsion-angle"}]},
    {id:"g-stress-concentration", term:"Stress concentration factor", sym:R`k`,
      def:R`A multiplier on the nominal stress capturing the local peak at a geometric discontinuity such as a fillet or step in a shaft. Read from a chart against \(r/d\) for the relevant \(D/d\). Concentrations matter for brittle materials and fatigue, less so for static ductile yielding.`,
      see:[{label:"Equation",href:"equations.html#eq-torsion-stress-conc"},{label:"Week 2",href:"week-02.html"}]},
    {id:"g-compatibility", term:"Compatibility (angular)",
      def:R`The geometric condition that connected or bonded members share the same deflection (or angle of twist). With equilibrium it resolves statically indeterminate torsion problems — composite shafts and bonded spindle/sleeve assemblies — by adding the equation \(\phi_1=\phi_2\) (or \(\phi_1+\phi_2=0\) for a shaft fixed at both ends).`,
      see:[{label:"Statically indeterminate",href:"#g-stat-indeterminate"},{label:"Week 2",href:"week-02.html"}]},
    {id:"g-residual-stress", term:"Residual stress",
      def:R`Self-equilibrating stress left in a member after it is loaded past yield and then unloaded. Found by superposition: the elastoplastic loading stress minus an elastic unloading stress. In torsion (Week 2) the elastic unload is \(\tau=TR/J\) and the leftover is a permanent twist \(\phi_{\text{perm}}=\phi_{\text{load}}-\phi_{\text{unload}}\); in bending (Week 3) it is \(\sigma=My/I\) and the leftover is a permanent curvature.`,
      see:[{label:"Elastoplastic torsion",href:"equations.html#eq-torsion-plastic"},{label:"Residual curvature",href:"equations.html#eq-residual-curvature"},{label:"Week 2",href:"week-02.html"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-first-moment", term:"First moment of area", sym:R`Q`,
      def:R`\(Q=A'\bar{y}\), the first moment of the area beyond a cut about the neutral axis. Used in the shear-flow and transverse-shear formulas. \(Q=0\) at the top/bottom faces (no area beyond the cut) and is largest at the neutral axis; by symmetry it is also zero for a cut on the section's axis of symmetry, which is why shear flow vanishes there.`,
      see:[{label:"Shear flow",href:"equations.html#eq-shear-flow"},{label:"Transverse shear stress",href:"equations.html#eq-shear-stress-transverse"},{label:"Q for circular sections",href:"equations.html#eq-q-circular"},{label:"Week 5",href:"week-05.html"},{label:"Week 6",href:"week-06.html"}]},
    {id:"g-shear-flow", term:"Shear flow", sym:R`q`,
      def:R`Longitudinal shear force per unit length along a beam, \(q=VQ/I\). Sizes the nails/welds/glue in built-up beams and describes how shear is distributed around thin-walled sections: linear along flanges, parabolic down webs, always zero at free edges.`,
      see:[{label:"Equation",href:"equations.html#eq-shear-flow"},{label:"Fastener force",href:"equations.html#eq-fastener-force"},{label:"Week 5",href:"week-05.html"}]},
    {id:"g-built-up", term:"Built-up member",
      def:R`A beam fabricated from several boards, plates or rolled sections joined by nails, bolts, rivets or glue. The joints must carry the longitudinal shear flow \(q=VQ/I\) at the joined surface, so each fastener resists \(F=qs/n\) for spacing \(s\) and \(n\) parallel rows. Take \(Q\) as the first moment of the piece being held on.`,
      see:[{label:"Fastener force",href:"equations.html#eq-fastener-force"},{label:"Shear flow",href:"equations.html#eq-shear-flow"},{label:"Week 5",href:"week-05.html"}]},
    {id:"g-plastic-hinge", term:"Plastic hinge",
      def:R`The state reached when the elastic core of a bending section vanishes (\(y_y=0\)) and the moment attains the plastic moment \(M_p\) (\(=\tfrac{3}{2}M_y\) for a rectangle). The section can then rotate freely at constant moment, like a hinge — the largest load a beam can support based on normal stress. Because the plastic zones carry constant \(\sigma_y\), they contain no shear stress: all vertical shear is supported by the elastic zone.`,
      see:[{label:"Elastoplastic bending",href:"equations.html#eq-bending-plastic-rect"},{label:"Shape factor & plastic moment",href:"#g-shape-factor"},{label:"Week 5",href:"week-05.html"},{label:"Week 3",href:"week-03.html"}]},
    {id:"g-combined-loading", term:"Combined (general) loading",
      def:R`Loading in which a component simultaneously carries several types of internal load — axial force, shear, torque and bending. The stress at any point is found by superposition: evaluate \(\sigma=P/A\), \(\sigma=My/I\), \(\tau=Tr/J\) and \(\tau=VQ/It\) at that point and add, keeping careful track of the direction of each shear contribution. The subject of Week 6 (Beer &amp; Johnston chapter 8) and the raw material for stress transformation in Week 7.`,
      see:[{label:"Superposition of stresses",href:"equations.html#eq-combined-stress"},{label:"Internal resultants",href:"#g-section-resultants"},{label:"Week 6",href:"week-06.html"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-section-resultants", term:"Internal force resultants",
      def:R`The equivalent force–couple system obtained by cutting a section through the point of interest and transferring all external forces to the section's centroid: up to an axial force \(P\), two shear forces \(V_1,V_2\), a torque \(T\) about the axis, and two bending moments \(M_1,M_2\). Each resultant generates stress at the point through its own formula, and the transferred couples are simply force × perpendicular distance from the original line of action to the centroid.`,
      see:[{label:"Superposition of stresses",href:"equations.html#eq-combined-stress"},{label:"Combined loading",href:"#g-combined-loading"},{label:"Week 6",href:"week-06.html"}]},
    {id:"g-principal", term:"Principal stresses",
      def:R`The maximum and minimum normal stresses at a point; they act on the <em>principal planes</em>, where shear stress is zero. On Mohr's circle they are the two crossings of the \(\sigma\)-axis, \(\sigma_{\text{ave}}\pm R\); in tensor language they are the eigenvalues of the stress tensor and the principal directions its eigenvectors. In 3D there are three, ordered by convention \(\sigma_3\le\sigma_2\le\sigma_1\) — and in plane stress one of them is always the zero stress normal to the plane.`,
      see:[{label:"Equation",href:"equations.html#eq-principal-stress"},{label:"Traction & tensor",href:"equations.html#eq-traction"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-mohr", term:"Mohr's circle",
      def:R`A graphical representation of the stress-transformation equations: a circle of centre \((\sigma_{\text{ave}},0)\) and radius \(R\) whose points give \((\sigma,\tau)\) on every plane through the point. Angles are <em>doubled</em> — planes \(\theta\) apart in the material are \(2\theta\) apart on the circle. Sign tip used in MECH2430: anticlockwise shear is positive and plotted <em>below</em> the \(\sigma\)-axis. A full 3D state is drawn as three circles between the ordered principal stresses.`,
      see:[{label:"Equation",href:"equations.html#eq-mohr-circle"},{label:"Principal stresses",href:"#g-principal"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-plane-stress", term:"Plane stress",
      def:R`A state where all stress lies in one plane: \(\sigma_z=\tau_{xz}=\tau_{yz}=0\). Good for thin plates and free surfaces, and the standard outcome of a Week-6 combined-loading calculation. Because the \(z\) face is shear-free, \(z\) is automatically a principal axis with principal stress zero — which matters when hunting the true maximum shear.`,
      see:[{label:"Stress transformation",href:"equations.html#eq-stress-transformation"},{label:"Max shear in 3D",href:"equations.html#eq-max-shear-3d"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-plane-strain", term:"Plane strain",
      def:R`The strain analogue of plane stress: no strain in planes normal to \(z\), \(\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0\) (think long, constrained bodies). Strain transforms between coordinate systems just like stress, but with \(\gamma/2\) playing the role of \(\tau\), and has its own Mohr's circle.`,
      see:[{label:"Strain transformation",href:"equations.html#eq-strain-transformation"},{label:"Plane stress",href:"#g-plane-stress"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-max-shear", term:"Maximum shearing stress",
      def:R`The largest shear stress at a point, \(\tau_{\max}=(\sigma_1-\sigma_3)/2\) — half the spread between the extreme principal stresses, acting at \(45^\circ\) to the principal planes. The in-plane value equals the Mohr's-circle radius \(R\), but in plane stress the true maximum can be <em>out of plane</em>: when both in-plane principal stresses have the same sign, the biggest of the three 3D circles is the one through \(\sigma=0\). Feeds directly into the Tresca yield criterion.`,
      see:[{label:"In-plane equation",href:"equations.html#eq-max-shear-stress"},{label:"3D equation",href:"equations.html#eq-max-shear-3d"},{label:"Tresca",href:"#g-tresca"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-strain-gauge", term:"Strain gauge",
      def:R`A zig-zag conducting wire bonded to a surface: stretching thins the wire (Poisson's ratio), raising its electrical resistance, which a Wheatstone bridge reads with great sensitivity. Measures normal strain in one direction only — hence the rosette. Strain is measured because stress can't be (except as an average).`,
      see:[{label:"Strain rosette",href:"#g-strain-rosette"},{label:"Poisson's ratio",href:"#g-poisson"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-strain-rosette", term:"Strain rosette",
      def:R`Two or three strain gauges mounted at known angles on one substrate (common patterns: \(90^\circ\), \(45^\circ\), \(60^\circ\)). Writing the strain-transformation equation \(\varepsilon_i=\varepsilon_x\cos^2\theta_i+\varepsilon_y\sin^2\theta_i+\gamma_{xy}\sin\theta_i\cos\theta_i\) for each gauge gives simultaneous equations for the full in-plane strain state \((\varepsilon_x,\varepsilon_y,\gamma_{xy})\), from which principal strains follow.`,
      see:[{label:"Equation",href:"equations.html#eq-strain-rosette"},{label:"Strain gauge",href:"#g-strain-gauge"},{label:"Week 7",href:"week-07.html"}]},
    {id:"g-tresca", term:"Tresca criterion",
      def:R`The maximum-shear-stress failure theory for ductile materials: yield when \(\tau_{\max}=(\sigma_1-\sigma_3)/2\) reaches \(\sigma_y/2\), the maximum shear in a tensile test at yield. Motivated by the physics of ductile yield — crystal lattice planes <em>slide</em> rather than being pulled apart, which is why even tensile specimens neck along oblique (45°) planes. Its safe zone on principal-stress axes is a hexagon inscribed in the von Mises ellipse, so Tresca is the more conservative of the two.`,
      see:[{label:"Equation",href:"equations.html#eq-tresca"},{label:"Maximum shearing stress",href:"#g-max-shear"},{label:"von Mises",href:"#g-vonmises"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-vonmises", term:"von Mises criterion",
      def:R`The maximum-distortion-energy failure theory for ductile materials: yield when the shape-change part of the strain energy reaches the value it has at yield in a tensile test. Packaged as an equivalent stress \(\sigma_{vm}\) compared directly to \(\sigma_y\): yield has occurred if \(\sigma_{vm}>\sigma_y\), and the safety factor is \(\sigma_y/\sigma_{vm}\). Its yield surface is an ellipse on principal-stress axes (a cylinder about the hydrostatic axis in 3D), and it predicts yield in pure shear at \(\tau_y\approx 0.577\sigma_y\) — a better fit to the experimental \(\tau_y/\sigma_y\approx 0.5\)–\(0.6\) than Tresca.`,
      see:[{label:"Equation",href:"equations.html#eq-von-mises"},{label:"Distortion energy",href:"#g-distortion-energy"},{label:"Tresca",href:"#g-tresca"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-distortion-energy", term:"Distortion energy", sym:R`dU_d/dv`,
      def:R`The part of the elastic strain energy density spent changing a material element's <em>shape</em>, as opposed to its volume. Splitting the stress state into hydrostatic and deviatoric parts separates the energy cleanly: \(dU_v/dv\) (volume change, from \(\bar\sigma\)) plus \(dU_d/dv\) (distortion, from \(\boldsymbol\sigma^{*}\)). Since ductile yield is a shape-change process, distortion energy is the natural yardstick — equating it to its tensile-test value at yield gives the von Mises criterion.`,
      see:[{label:"Equation",href:"equations.html#eq-distortion-energy"},{label:"Hydrostatic / deviatoric",href:"#g-hydrostatic"},{label:"von Mises",href:"#g-vonmises"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-hydrostatic", term:"Hydrostatic & deviatoric stress", sym:R`\bar{\sigma},\ \boldsymbol{\sigma}^{*}`,
      def:R`Any stress state decomposes into a <em>hydrostatic</em> part — the mean normal stress \(\bar\sigma=(\sigma_{xx}+\sigma_{yy}+\sigma_{zz})/3\) acting equally in all directions, which changes volume but not shape — and a <em>deviatoric</em> remainder \(\boldsymbol\sigma^{*}\), which distorts the shape at constant volume. Ductile yield depends only on the deviatoric part: purely hydrostatic stress produces no distortion energy and (in theory) never causes yield, which is why the von Mises surface is an open cylinder about the hydrostatic axis \(\sigma_1=\sigma_2=\sigma_3\).`,
      see:[{label:"Equation",href:"equations.html#eq-hydrostatic-deviatoric"},{label:"Distortion energy",href:"#g-distortion-energy"},{label:"Dilation",href:"#g-dilation"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-ductile-brittle", term:"Ductile vs brittle failure",
      def:R`Ductile materials yield gradually by shear — lattice planes slide, giving necking and 45° slip before fracture — so their failure criteria (Tresca, von Mises) are built on shear stress or distortion energy compared to the <em>yield</em> stress. Brittle materials fracture suddenly at their <em>ultimate</em> strength with no yielding, and because micro-cracks act as intense stress concentrations in tension (but close up harmlessly in compression), they are typically far weaker in tension than compression — think of chalk. Their criteria (Coulomb, Mohr) are built on principal stresses compared to ultimate strengths.`,
      see:[{label:"Coulomb criterion",href:"equations.html#eq-coulomb"},{label:"Mohr's criterion",href:"equations.html#eq-mohr-criterion"},{label:"Ultimate strength",href:"#g-ultimate"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-ultimate", term:"Ultimate strength", sym:R`\sigma_u,\ \sigma_{UT},\ \sigma_{UC}`,
      def:R`The stress at which a material actually breaks. For brittle materials there is no yield plateau — the specimen fails suddenly at \(\sigma_u\) — and the tensile value \(\sigma_{UT}\) is usually much lower than the compressive value \(\sigma_{UC}\) because of micro-cracks. Both feed Mohr's criterion; a torsion test adds \(\tau_U\) to refine the envelope.`,
      see:[{label:"Mohr's criterion",href:"equations.html#eq-mohr-criterion"},{label:"Yield stress",href:"#g-yield"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-mohr-criterion", term:"Mohr's (failure) criterion",
      def:R`A failure criterion for brittle materials built as an <em>envelope</em> of all available test data: plot the Mohr's circles for the tension (\(\sigma_{UT}\)), compression (\(\sigma_{UC}\)) and torsion (\(\tau_U\)) tests in the \(\sigma\)–\(\tau\) plane, and declare a stress state safe while its circle stays inside the envelope. With no torsion data the envelope is estimated by straight tangent lines to the two test circles — usually conservative. Not to be confused with <em>Mohr's circle</em> (Week 7), the transformation tool it is drawn with.`,
      see:[{label:"Equation",href:"equations.html#eq-mohr-criterion"},{label:"Mohr's circle",href:"#g-mohr"},{label:"Ultimate strength",href:"#g-ultimate"},{label:"Week 9",href:"week-09.html"}]},
    {id:"g-thin-wall", term:"Thin-walled pressure vessel",
      def:R`A vessel where \(t\ll R\) (roughly \(R/t>10\)), so the wall carries load purely by in-plane (membrane) tension: the stress is essentially uniform through the thickness, the wall cannot support bending, and the state is plane stress. Two simplified geometries cover most cases — cylindrical (hoop + axial) and spherical (uniform).`,
      see:[{label:"Week 10",href:"week-10.html"},{label:"Hoop stress",href:"equations.html#eq-cyl-hoop"},{label:"Spherical vessel",href:"equations.html#eq-sphere"},{label:"Plane stress",href:"#g-plane-stress"}]},
    {id:"g-hoop", term:"Hoop stress", sym:R`\sigma_h`,
      def:R`Circumferential stress in a pressure vessel, \(\sigma_h=PR/t\) for a cylinder — twice the axial stress, so it governs the wall thickness and sets the failure direction (a longitudinal split). In a sphere the "hoop" stress is the same in every direction, \(\sigma_h=PR/2t\).`,
      see:[{label:"Cylinder equation",href:"equations.html#eq-cyl-hoop"},{label:"Sphere equation",href:"equations.html#eq-sphere"},{label:"Axial stress",href:"#g-axial-stress"},{label:"Week 10",href:"week-10.html"}]},
    {id:"g-axial-stress", term:"Axial (longitudinal) stress", sym:R`\sigma_a`,
      def:R`The membrane stress along a cylindrical vessel's axis, \(\sigma_a=PR/2t\) — half the hoop stress — found by balancing the pressure on the end cap \((\pi R^2 P)\) against the wall annulus \((2\pi Rt)\). It only exists if the ends actually load the wall: a cylinder whose pressure is reacted by a piston and its base (an "open" arrangement) carries hoop stress but \(\sigma_a=0\), so always check the support/end conditions before assuming \(PR/2t\).`,
      see:[{label:"Equation",href:"equations.html#eq-cyl-axial"},{label:"Hoop stress",href:"#g-hoop"},{label:"Week 10",href:"week-10.html"}]},
    {id:"g-gauge-pressure", term:"Gauge pressure",
      def:R`Pressure measured relative to the surrounding atmosphere, \(P_{\text{gauge}}=P_{\text{abs}}-P_{\text{atm}}\). It is the gauge pressure that loads a vessel wall, since atmosphere pushes on the outside too — pressure-vessel formulas always use it. A vessel at atmospheric pressure inside has zero wall stress even though the absolute pressure is ~101 kPa.`,
      see:[{label:"Hoop stress",href:"equations.html#eq-cyl-hoop"},{label:"Week 10",href:"week-10.html"}]},
    {id:"g-fos", term:"Factor of safety", sym:R`n`,
      def:R`Ratio of a limiting capacity (ultimate or yield) to the actual working load/stress, \(n=\sigma_{ult}/\sigma_{allow}\).`},
    {id:"g-elastic-curve", term:"Elastic curve", sym:R`y(x)`,
      def:R`The deflected shape of a beam's neutral axis under load. Governed by \(EI\,y''=M(x)\) — the Week-3 curvature result \(1/\rho=M/EI\) with the small-slope approximation \((dy/dx)^2\approx 0\) — and found by integrating the moment twice, fixing the constants from boundary and continuity conditions. Its slope \(dy/dx\) is the beam's rotation in radians at that point.`,
      see:[{label:"Equation",href:"equations.html#eq-elastic-curve"},{label:"Curvature",href:"equations.html#eq-beam-deflection"},{label:"Boundary conditions",href:"#g-boundary-conditions"},{label:"Week 11",href:"week-11.html"}]},
    {id:"g-boundary-conditions", term:"Boundary conditions (beams)",
      def:R`The known values of deflection or slope at the supports that fix the integration constants of the elastic curve: \(y=0\) at every pin or roller, and both \(y=0\) and \(dy/dx=0\) at a fixed (built-in) end. Each integration produces one constant, so a single-region beam needs two conditions; extra conditions beyond those needed for the constants are what make indeterminate reactions solvable.`,
      see:[{label:"Elastic curve",href:"#g-elastic-curve"},{label:"Equation",href:"equations.html#eq-elastic-curve"},{label:"Statically indeterminate",href:"#g-stat-indeterminate"},{label:"Week 11",href:"week-11.html"}]},
    {id:"g-continuity", term:"Continuity (matching) conditions",
      def:R`When the bending-moment expression changes along a beam — at a point load, applied couple or support — each region is integrated separately with its own constants, and the pieces are glued together by requiring the deflection \(y\) <em>and</em> the slope \(dy/dx\) to agree where the regions meet (the beam cannot kink or tear). Caution: if the two regions use \(x\)-coordinates running towards each other from opposite ends, matching slopes are equal and <em>opposite</em> in sign.`,
      see:[{label:"Elastic curve",href:"#g-elastic-curve"},{label:"Simply supported central load",href:"equations.html#eq-ss-central"},{label:"Week 11",href:"week-11.html"}]}
  ],

  /* =========================================================
     ASSESSMENTS   (dueWeek + dueOffsetDays compute the date from
     the semester anchor; students can override per-item in the UI)
     ========================================================= */
  assessments:[
    {id:"a-quiz1", name:"Quiz 1", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 4 · tutorial session", dueWeek:4, dueOffsetDays:0,
      covers:"Weeks 1–3: fundamentals of stress & strain, bending and torsion.",
      desc:"2-hour in-class quiz. Closed book — the formula sheet is provided. Partial marks for correct working.",
      study:[
        "Definitions of normal, shear and bearing stress; average vs maximum.",
        "Strain, Hooke's law, Young's modulus and axial deformation.",
        "Poisson's ratio, generalised Hooke's law, thermal effects.",
        "Bending stress (flexure formula) and second moment of area.",
        "Torsional shear stress and angle of twist."
      ],
      weeks:[1,2,3],
      related:[{label:"Formula sheet equations",href:"equations.html"},{label:"Torsion (Week 2)",href:"week-02.html"},{label:"Bending (Week 3)",href:"week-03.html"},{label:"Flexure formula",href:"equations.html#eq-bending-stress"},{label:"Glossary: yield stress",href:"glossary.html#g-yield"}]},

    {id:"a-quiz2", name:"Quiz 2", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 8 · tutorial session", dueWeek:8, dueOffsetDays:0,
      covers:"Weeks 5–7: transverse loading, superposition, and transformation of stress.",
      desc:"2-hour in-class quiz, closed book with formula sheet provided.",
      study:[
        "Transverse shear stress and shear flow (VQ/It).",
        "Superposition of stresses from combined loads.",
        "Stress transformation and Mohr's circle; principal stresses."
      ],
      weeks:[5,6,7],
      related:[{label:"Transverse loading (Week 5)",href:"week-05.html"},{label:"Combined loading (Week 6)",href:"week-06.html"},{label:"Stress transformation (Week 7)",href:"week-07.html"},{label:"Superposition of stresses",href:"equations.html#eq-combined-stress"},{label:"Shear flow",href:"equations.html#eq-shear-flow"},{label:"Transverse shear stress",href:"equations.html#eq-shear-stress-transverse"},{label:"Stress transformation",href:"equations.html#eq-stress-transformation"},{label:"Mohr's circle",href:"equations.html#eq-mohr-circle"},{label:"Principal stresses",href:"equations.html#eq-principal-stress"},{label:"Max shear in 3D",href:"equations.html#eq-max-shear-3d"}]},

    {id:"a-quiz3", name:"Quiz 3", type:"In-class quiz", weight:"25%",
      weekLabel:"Week 12 · tutorial session", dueWeek:12, dueOffsetDays:0,
      covers:"Weeks 9–11: failure theories, thin-walled pressure vessels, and beam deflections.",
      desc:"2-hour in-class quiz, closed book with formula sheet provided.",
      study:[
        "Failure criteria for ductile materials: Tresca (max shear) and von Mises (distortion energy), including safety factors.",
        "Failure criteria for brittle materials: Coulomb and Mohr's criterion.",
        "Thin-walled pressure vessels: hoop and axial stress.",
        "Beam deflection by integration of M/EI."
      ],
      weeks:[9,10,11],
      related:[{label:"Failure criteria (Week 9)",href:"week-09.html"},{label:"Pressure vessels (Week 10)",href:"week-10.html"},{label:"Beam deflections (Week 11)",href:"week-11.html"},{label:"Elastic curve by integration",href:"equations.html#eq-elastic-curve"},{label:"Tresca",href:"equations.html#eq-tresca"},{label:"von Mises",href:"equations.html#eq-von-mises"},{label:"Mohr's criterion",href:"equations.html#eq-mohr-criterion"},{label:"Max shear in 3D",href:"equations.html#eq-max-shear-3d"},{label:"Hoop stress",href:"equations.html#eq-cyl-hoop"},{label:"Axial stress",href:"equations.html#eq-cyl-axial"},{label:"Max shear in vessel walls",href:"equations.html#eq-vessel-max-shear"}]},

    {id:"a-report", name:"Engineering Report", type:"Individual report", weight:"25%",
      weekLabel:"Week 13 · Friday", dueWeek:13, dueOffsetDays:4,
      covers:"Analysis of experimental tensile-test data and residual-strain measurements from neutron diffraction.",
      desc:"In-depth engineering report. Submitted online. Detailed criteria are in the assessment handout.",
      study:[
        "Interpreting stress–strain curves from tensile tests.",
        "Residual strain and how neutron diffraction measures it.",
        "Engineering report structure and clear technical writing."
      ],
      weeks:[1,2],
      related:[{label:"Tensile test",href:"glossary.html#g-tensile-test"},{label:"Yield stress",href:"glossary.html#g-yield"}]}
  ]
};
