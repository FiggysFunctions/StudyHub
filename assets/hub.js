/* ============================================================
   STUDY HUB — shared application logic (offline, no build step)
   Reads a global `SUBJECT` object (from each subject's subject.js)
   and powers: navigation, search, math rendering, cross-link
   tooltips, and adjustable assessment dates (saved in this browser).
   ============================================================ */
(function(){
"use strict";

/* ---------- tiny helpers ---------- */
var $=function(s,r){return (r||document).querySelector(s);};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});};
var fileOf=function(p){return (p||location.pathname).split("/").pop()||"index.html";};
/* Reduce a rich-text data string (may contain HTML tags and \( \) / $ math
   delimiters) to plain text for search indexing and snippets. */
var plain=function(s){
 return String(s==null?"":s)
   .replace(/<[^>]*>/g," ")                       /* strip tags */
   .replace(/\\\(|\\\)|\\\[|\\\]|\$\$?/g,"")      /* strip math delimiters */
   .replace(/\s+/g," ").trim();
};
var S=window.SUBJECT||null;

/* ---------- icons (inline SVG, stroke uses currentColor) ---------- */
var IC={
 home:'<path d="M3 9.5 9 4l6 5.5M4.5 8.3V15h9V8.3"/>',
 eq:'<path d="M4 6h10M4 12h7M11 12l3 4M14 12l-3 4"/>',
 book:'<path d="M4 4.5h7a2 2 0 0 1 2 2V15a1.5 1.5 0 0 0-1.5-1.5H4z M4 4.5V15"/>',
 flag:'<path d="M5 15V3M5 3.5h7l-1.4 2.5L12 8.5H5"/>',
 search:'<circle cx="8" cy="8" r="4.2"/><path d="M11 11l3 3"/>',
 topic:'<path d="M5 4.5h9M5 9h9M5 13.5h6"/>',
 ext:'<path d="M7 4.5H4.5V15H15v-2.5M10 4.5h4.5V9M14 5l-6 6"/>'
};
function icon(n){return '<svg class="ic" width="17" height="17" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(IC[n]||IC.topic)+'</svg>';}

/* the stress-element signature glyph: a material cube face with σ + τ arrows */
var GLYPH='<svg class="glyph" width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">'
 +'<rect x="8" y="8" width="14" height="14" rx="1" fill="#1E2839" stroke="#3C72B8" stroke-width="1.4"/>'
 +'<g stroke="#C9763F" stroke-width="1.4" stroke-linecap="round">'
 +'<path d="M15 7V2.5"/><path d="M13.2 4.2 15 2.5l1.8 1.7"/>'    /* up arrow σ */
 +'<path d="M15 23v4.5"/><path d="M13.2 25.8 15 27.5l1.8-1.7"/>' /* down arrow σ */
 +'<path d="M23 15h4.5"/><path d="M25.8 13.2 27.5 15l-1.7 1.8"/>'/* right arrow */
 +'<path d="M7 15H2.5"/><path d="M4.2 13.2 2.5 15l1.7 1.8"/>'    /* left arrow */
 +'</g></svg>';

/* =========================================================
   1. SIDEBAR + SHELL
   ========================================================= */
function buildShell(){
 var shell=$(".shell"); if(!shell||!S) return;
 var here=fileOf();

 /* nav groups from config + auto "Weekly content" from pages */
 var navHTML="";
 (S.nav||[]).forEach(function(g){
   navHTML+='<div class="nav-group"><span class="lbl">'+esc(g.label)+'</span>';
   g.links.forEach(function(l){
     var a=here===l.f?" active":"";
     navHTML+='<a class="nav-link'+a+'" href="'+l.f+'">'+icon(l.icon)+'<span>'+esc(l.t)+'</span></a>';
   });
   navHTML+='</div>';
 });
 if((S.pages||[]).length){
   navHTML+='<div class="nav-group"><span class="lbl">Weekly content</span>';
   S.pages.slice().sort(function(a,b){return a.week-b.week;}).forEach(function(p){
     var a=here===p.f?" active":"";
     navHTML+='<a class="nav-link'+a+'" href="'+p.f+'"><span class="wk">W'+p.week+'</span><span>'+esc(p.t)+'</span></a>';
   });
   navHTML+='</div>';
 }

 var side=el("aside","side");
 side.innerHTML=
   '<div class="brand"><a href="index.html" title="'+esc(S.meta.title)+' home">'+GLYPH+'</a>'
   +'<a href="index.html"><b>'+esc(S.meta.code)+'</b><small>'+esc(S.meta.title)+'</small></a></div>'
   +'<div class="side-search"><input id="navSearch" type="search" placeholder="Search this subject…" autocomplete="off"></div>'
   +'<nav class="side-nav">'+navHTML+'</nav>'
   +'<div class="side-foot"><a href="../index.html">← All subjects</a> · <a href="../README.html">How to edit</a></div>';

 var topbar=el("header","topbar");
 topbar.innerHTML='<button class="hamburger" aria-label="Menu" aria-expanded="false">≡</button><b>'+esc(S.meta.code)+'</b>';
 var scrim=el("div","scrim");

 shell.insertBefore(side,shell.firstChild);
 document.body.insertBefore(topbar,document.body.firstChild);
 document.body.appendChild(scrim);

 /* mobile drawer */
 function toggle(o){
   side.classList.toggle("open",o);scrim.classList.toggle("show",o);
   $(".hamburger").setAttribute("aria-expanded",o?"true":"false");
 }
 document.addEventListener("keydown",function(e){
   if(e.key==="Escape"&&side.classList.contains("open"))toggle(false);
 });
 $(".hamburger").addEventListener("click",function(){toggle(!side.classList.contains("open"));});
 scrim.addEventListener("click",function(){toggle(false);});
 $$(".side-nav a").forEach(function(a){a.addEventListener("click",function(){toggle(false);});});

 /* sidebar search → search page */
 var ns=$("#navSearch");
 ns.addEventListener("keydown",function(e){
   if(e.key==="Enter"){location.href="search.html?q="+encodeURIComponent(ns.value);}
 });
}

/* =========================================================
   2. MATH RENDERING (KaTeX, offline)
   ========================================================= */
function renderMath(root){
 if(!window.renderMathInElement) return;
 window.renderMathInElement(root||document.body,{
   delimiters:[
     {left:"$$",right:"$$",display:true},
     {left:"\\[",right:"\\]",display:true},
     {left:"$",right:"$",display:false},
     {left:"\\(",right:"\\)",display:false}
   ],
   throwOnError:false,
   ignoredTags:["script","noscript","style","textarea","pre","code"]
 });
}
function tex(s,display){
 try{return window.katex.renderToString(s,{throwOnError:false,displayMode:!!display});}
 catch(e){return esc(s);}
}

/* =========================================================
   3. HEADING ANCHORS (for in-page deep links)
   ========================================================= */
function addAnchors(){
 $$(".content h2[id], .content h3[id]").forEach(function(h){
   var a=el("a","anchor","#");a.href="#"+h.id;a.setAttribute("aria-label","Link to "+h.textContent);
   h.appendChild(a);
 });
}

/* =========================================================
   4. CROSS-LINK TOOLTIPS (glossary + equations)
   ========================================================= */
var tipEl=null;
function ensureTip(){if(!tipEl){tipEl=el("div","tip");document.body.appendChild(tipEl);}return tipEl;}
function showTip(target,html){
 var t=ensureTip();t.innerHTML=html;
 renderMath(t);               /* defs may contain \( \) inline math */
 t.classList.add("show");
 var r=target.getBoundingClientRect();var tw=Math.min(330,t.offsetWidth);
 var left=Math.max(10,Math.min(window.innerWidth-tw-10,r.left));
 var top=r.bottom+8; if(top+t.offsetHeight>window.innerHeight-8){top=r.top-t.offsetHeight-8;}
 t.style.left=left+"px";t.style.top=Math.max(8,top)+"px";
}
function hideTip(){if(tipEl)tipEl.classList.remove("show");}
function wireTooltips(){
 if(!S) return;
 var gById={},eById={};
 (S.glossary||[]).forEach(function(g){gById[g.id]=g;});
 (S.equations||[]).forEach(function(e){eById[e.id]=e;});
 $$('a.gloss').forEach(function(a){
   var id=(a.getAttribute("href")||"").split("#")[1]; var g=gById[id]; if(!g)return;
   /* g.def is trusted local content and may contain <em>, links and
      \( \) math — insert as-is; showTip() renders the math. */
   var html='<span class="tt">'+esc(g.term)+(g.sym?' · '+esc(g.sym):'')+'</span>'+g.def;
   bindTip(a,html);
 });
 $$('a.eqref').forEach(function(a){
   var id=(a.getAttribute("href")||"").split("#")[1]; var e=eById[id]; if(!e)return;
   var html='<span class="tt">'+esc(e.name)+'</span>'+tex(e.latex,true);
   bindTip(a,html);
 });
}
function bindTip(a,html){
 a.addEventListener("mouseenter",function(){showTip(a,html);});
 a.addEventListener("mouseleave",hideTip);
 a.addEventListener("focus",function(){showTip(a,html);});
 a.addEventListener("blur",hideTip);
}
document.addEventListener("keydown",function(e){if(e.key==="Escape")hideTip();});

/* =========================================================
   5. SEARCH INDEX + ENGINE
   ========================================================= */
function buildIndex(){
 var idx=[];
 (S.pages||[]).forEach(function(p){
   idx.push({kind:"topic",title:p.t,sub:"Week "+p.week,url:p.f,
     snip:plain(p.summary),hay:plain(p.t+" "+(p.summary||"")+" "+(p.keywords||"")+" week "+p.week).toLowerCase()});
 });
 (S.equations||[]).forEach(function(e){
   idx.push({kind:"equation",title:e.name,sub:e.cat,url:"equations.html#"+e.id,
     snip:plain(e.desc),hay:plain(e.name+" "+e.cat+" "+(e.desc||"")+" "+(e.keywords||"")+" "+(e.vars||[]).map(function(v){return v.sym+" "+v.mean;}).join(" ")).toLowerCase()});
 });
 (S.glossary||[]).forEach(function(g){
   idx.push({kind:"glossary",title:g.term,sub:g.sym||"Term",url:"glossary.html#"+g.id,
     snip:plain(g.def),hay:plain(g.term+" "+(g.sym||"")+" "+(g.def||"")).toLowerCase()});
 });
 (S.assessments||[]).forEach(function(a){
   idx.push({kind:"assessment",title:a.name,sub:a.weight+" · "+(a.weekLabel||""),url:"assessments.html#"+a.id,
     snip:plain(a.desc),hay:plain(a.name+" "+a.type+" "+(a.desc||"")+" "+(a.covers||"")+" "+(a.study||[]).join(" ")).toLowerCase()});
 });
 return idx;
}
function search(q,idx){
 q=(q||"").trim().toLowerCase(); if(!q) return [];
 var terms=q.split(/\s+/);
 var out=[];
 idx.forEach(function(it){
   var score=0,ok=true;
   terms.forEach(function(t){
     var inT=it.title.toLowerCase().indexOf(t)>=0;
     var inH=it.hay.indexOf(t)>=0;
     if(!inH){ok=false;}
     if(inT)score+=5; if(inH)score+=1;
     if(it.title.toLowerCase()===q)score+=10;
   });
   if(ok)out.push({it:it,score:score});
 });
 out.sort(function(a,b){return b.score-a.score;});
 return out.map(function(o){return o.it;});
}
function hl(text,q){
 if(!q)return esc(text);
 var terms=q.trim().split(/\s+/).filter(Boolean).map(function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");});
 if(!terms.length)return esc(text);
 /* Match on the RAW text and escape each piece separately — escaping
    first would let a query like "amp" split an &amp; entity in half. */
 var re=new RegExp("("+terms.join("|")+")","ig");
 return String(text).split(re).map(function(piece,i){
   return i%2 ? "<mark>"+esc(piece)+"</mark>" : esc(piece);
 }).join("");
}

/* search PAGE renderer */
function initSearchPage(){
 var box=$("#searchBox"),meta=$("#sMeta"),res=$("#sResults"); if(!box)return;
 var idx=buildIndex();
 function run(){
   var q=box.value;var r=search(q,idx);
   if(!q.trim()){meta.textContent="";res.innerHTML='<p class="empty">Type to search topics, equations, glossary terms and assessments.</p>';return;}
   meta.textContent=r.length+" result"+(r.length===1?"":"s")+' for "'+q+'"';
   if(!r.length){res.innerHTML='<p class="empty">Nothing found. Try fewer or different words.</p>';return;}
   res.innerHTML=r.map(function(it){
     return '<a class="s-res" href="'+it.url+'"><span class="kind '+it.kind+'">'+it.kind+'</span>'
       +'<span class="t">'+hl(it.title,q)+'</span>'
       +'<span class="sn">'+hl((it.snip||it.sub||"").slice(0,150),q)+'</span></a>';
   }).join("");
 }
 box.addEventListener("input",run);
 var q0=new URLSearchParams(location.search).get("q");
 if(q0){box.value=q0;}
 box.focus();run();
}

/* =========================================================
   6. EQUATIONS PAGE
   ========================================================= */
function initEquationsPage(){
 var host=$("#eqList"); if(!host)return;
 var cats=[];var byCat={};
 (S.equations||[]).forEach(function(e){if(!byCat[e.cat]){byCat[e.cat]=[];cats.push(e.cat);}byCat[e.cat].push(e);});
 var html="";
 cats.forEach(function(c){
   html+='<div class="eq-cat" data-cat="'+esc(c)+'">'+esc(c)+'</div>';
   byCat[c].forEach(function(e){
     html+='<div class="eq" id="'+e.id+'" data-hay="'+esc(((e.name+" "+e.desc+" "+(e.keywords||"")+" "+c).toLowerCase()))+'">'
       +'<div class="eq-head"><span class="name">'+esc(e.name)+'</span><span class="id">'+esc(e.id)+'</span></div>'
       +'<div class="eq-render">'+tex(e.latex,true)+'</div>';
     if(e.desc)html+='<p class="eq-desc">'+esc(e.desc)+'</p>';
     if(e.vars&&e.vars.length){
       html+='<div class="eq-vars">'+e.vars.map(function(v){
         return '<div class="v"><span class="sym">'+tex(v.sym)+'</span><span class="mean">'+esc(v.mean)+'</span></div>';
       }).join("")+'</div>';
     }
     if(e.links&&e.links.length){
       html+='<div class="eq-links">'+e.links.map(function(l){return '<a class="chip" href="'+l.href+'">'+esc(l.label)+'</a>';}).join("")+'</div>';
     }
     html+='</div>';
   });
 });
 host.innerHTML=html;
 /* filter box */
 var f=$("#eqFilter");
 if(f){f.addEventListener("input",function(){
   var q=f.value.trim().toLowerCase();
   $$(".eq",host).forEach(function(card){
     card.style.display=(!q||card.getAttribute("data-hay").indexOf(q)>=0)?"":"none";
   });
   $$(".eq-cat",host).forEach(function(c){
     var any=false;var n=c.nextElementSibling;
     while(n&&n.classList.contains("eq")){if(n.style.display!=="none")any=true;n=n.nextElementSibling;}
     c.style.display=any?"":"none";
   });
 });}
 if(location.hash){var t=$(location.hash);if(t)setTimeout(function(){t.scrollIntoView();},60);}
}

/* =========================================================
   7. GLOSSARY PAGE
   ========================================================= */
function initGlossaryPage(){
 var host=$("#glossList"); if(!host)return;
 var terms=(S.glossary||[]).slice().sort(function(a,b){return a.term.toLowerCase()<b.term.toLowerCase()?-1:1;});
 var letters={};terms.forEach(function(t){letters[t.term[0].toUpperCase()]=true;});
 /* A–Z jump bar */
 var bar=$("#glossJump");
 if(bar){var L="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   bar.innerHTML=L.map(function(c){return letters[c]?'<a href="#L-'+c+'">'+c+'</a>':'<a class="off">'+c+'</a>';}).join("");}
 var html="",cur="";
 terms.forEach(function(t){
   var L=t.term[0].toUpperCase();
   if(L!==cur){cur=L;html+='<div class="gletter" id="L-'+L+'">'+L+'</div>';}
   html+='<div class="gterm" id="'+t.id+'"><h3>'+esc(t.term)+(t.sym?' <span class="sym">'+tex(t.sym)+'</span>':'')+'</h3>'
     +'<p>'+t.def+'</p>';
   if(t.see&&t.see.length){html+='<div class="see">See also: '+t.see.map(function(s){return '<a href="'+s.href+'">'+esc(s.label)+'</a>';}).join(" · ")+'</div>';}
   html+='</div>';
 });
 host.innerHTML=html;
 if(location.hash){var el2=$(location.hash);if(el2)setTimeout(function(){el2.scrollIntoView();},60);}
}

/* =========================================================
   8. ASSESSMENTS PAGE (adjustable dates, saved locally)
   ========================================================= */
var DAY=86400000;
function lsKey(k){return "SUBJ_"+(S.meta.code||"X")+"_"+k;}
function getLS(k,d){try{var v=localStorage.getItem(lsKey(k));return v===null?d:v;}catch(e){return d;}}
function setLS(k,v){try{localStorage.setItem(lsKey(k),v);}catch(e){}}
function delLS(k){try{localStorage.removeItem(lsKey(k));}catch(e){}}
function anchorMonday(){return getLS("anchor",S.meta.weekOneMonday);}
function weekMonday(n){var d=new Date(anchorMonday()+"T00:00:00");d.setDate(d.getDate()+(n-1)*7);return d;}
function fmtDate(d){return d.toLocaleDateString(undefined,{weekday:"short",day:"numeric",month:"short",year:"numeric"});}
/* Format as YYYY-MM-DD in LOCAL time. (toISOString() converts to UTC,
   which shifts the date back a day for anyone east of Greenwich.) */
function isoDate(d){
 var p=function(n){return (n<10?"0":"")+n;};
 return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate());
}
function dueOf(a){
 var ov=getLS("due_"+a.id,null);
 if(ov)return new Date(ov+"T00:00:00");
 var d=weekMonday(a.dueWeek||1);d.setDate(d.getDate()+(a.dueOffsetDays||0));return d;
}
function statusOf(due,done){
 if(done)return{cls:"done",label:"Completed"};
 var days=Math.ceil((due-new Date().setHours(0,0,0,0))/DAY);
 if(days<0)return{cls:"overdue",label:"Overdue — "+Math.abs(days)+" day"+(Math.abs(days)===1?"":"s")+" ago"};
 if(days===0)return{cls:"soon",label:"Due today"};
 if(days<=10)return{cls:"soon",label:"in "+days+" day"+(days===1?"":"s")};
 return{cls:"upcoming",label:"in "+days+" days"};
}
function weekChip(n){
 var p=(S.pages||[]).filter(function(x){return x.week===n;})[0];
 if(p)return '<a class="chip" href="'+p.f+'">W'+n+' · '+esc(p.t)+'</a>';
 return '<span class="chip">Week '+n+'</span>';
}
function initAssessmentsPage(){
 var host=$("#asmtList"); if(!host)return;
 /* anchor editor */
 var ah=$("#anchorBox");
 if(ah){
   ah.innerHTML='<label>Week&nbsp;1 Monday <input type="date" id="anchorDate" value="'+anchorMonday()+'"></label>'
     +'<button class="btn ghost" id="anchorReset">Reset all dates</button>'
     +'<button class="btn ghost" id="setExport">Export settings</button>'
     +'<button class="btn ghost" id="setImport">Import settings</button>'
     +'<input type="file" id="setImportFile" accept=".json,application/json" style="display:none">'
     +'<span class="hint">Set your real Week 1 Monday — quiz/report dates and weekly content shift to match. Edits are saved in this browser only; use Export/Import to carry them to another browser or machine.</span>';
   $("#anchorDate").addEventListener("change",function(){
     if(!this.value){this.value=anchorMonday();return;}  /* ignore a cleared input — "" would poison every date */
     setLS("anchor",this.value);render();
   });
   $("#anchorReset").addEventListener("click",function(){
     if(!confirm("Reset the semester anchor and every adjusted due-date / completed mark back to defaults?"))return;
     delLS("anchor");(S.assessments||[]).forEach(function(a){delLS("due_"+a.id);delLS("done_"+a.id);});
     render();
   });
   /* ---- export / import of this subject's saved state (anchor,
           adjusted due dates, completed marks) as a small JSON file ---- */
   $("#setExport").addEventListener("click",function(){
     var out={subject:S.meta.code,anchor:getLS("anchor",null),due:{},done:{}};
     (S.assessments||[]).forEach(function(a){
       var d=getLS("due_"+a.id,null); if(d)out.due[a.id]=d;
       if(getLS("done_"+a.id,"0")==="1")out.done[a.id]=1;
     });
     var blob=new Blob([JSON.stringify(out,null,2)],{type:"application/json"});
     var aEl=document.createElement("a");
     aEl.href=URL.createObjectURL(blob);
     aEl.download=S.meta.code.toLowerCase()+"-settings.json";
     document.body.appendChild(aEl);aEl.click();
     setTimeout(function(){URL.revokeObjectURL(aEl.href);aEl.remove();},0);
   });
   $("#setImport").addEventListener("click",function(){$("#setImportFile").click();});
   $("#setImportFile").addEventListener("change",function(){
     var f=this.files&&this.files[0]; this.value=""; if(!f)return;
     var rd=new FileReader();
     rd.onload=function(){
       try{
         var data=JSON.parse(rd.result);
         if(data.subject&&data.subject!==S.meta.code&&
            !confirm("This file was exported from "+data.subject+", not "+S.meta.code+". Import anyway?"))return;
         if(/^\d{4}-\d{2}-\d{2}$/.test(data.anchor||""))setLS("anchor",data.anchor);
         (S.assessments||[]).forEach(function(a){
           if(data.due&&/^\d{4}-\d{2}-\d{2}$/.test(data.due[a.id]||""))setLS("due_"+a.id,data.due[a.id]);
           if(data.done&&data.done[a.id])setLS("done_"+a.id,"1");
         });
         render();
       }catch(e){alert("Couldn't read that file — it doesn't look like a settings export.");}
     };
     rd.readAsText(f);
   });
 }
 function render(){
   if($("#anchorDate"))$("#anchorDate").value=anchorMonday();
   var list=(S.assessments||[]).map(function(a){
     return {a:a,due:dueOf(a),done:getLS("done_"+a.id,"0")==="1"};
   }).sort(function(x,y){return x.due-y.due;});
   host.innerHTML=list.map(function(o){
     var a=o.a,st=statusOf(o.due,o.done);
     return '<div class="asmt '+st.cls+'" id="'+a.id+'">'
       +'<div class="asmt-top"><div><div class="type">'+esc(a.type)+' · '+esc(a.weekLabel||"")+'</div><h3>'+esc(a.name)+'</h3></div>'
       +'<div class="weight">'+esc(a.weight)+'</div></div>'
       +'<div class="due"><input type="date" data-id="'+a.id+'" value="'+isoDate(o.due)+'" aria-label="Due date for '+esc(a.name)+'">'
       +'<span class="countdown '+st.cls+'">'+st.label+'</span>'
       +'<button class="btn" data-done="'+a.id+'">'+(o.done?"Mark not done":"Mark completed")+'</button></div>'
       +(a.desc?'<p class="desc">'+esc(a.desc)+'</p>':'')
       +(a.study&&a.study.length?'<h5>What to study</h5><ul class="studylist">'+a.study.map(function(s){return '<li>'+s+'</li>';}).join("")+'</ul>':'')
       +(a.weeks&&a.weeks.length?'<h5>Content covered</h5><div class="weeklinks">'+a.weeks.map(weekChip).join("")+'</div>':'')
       +(a.related&&a.related.length?'<h5>Related</h5><div class="weeklinks">'+a.related.map(function(r){return '<a class="chip" href="'+r.href+'">'+esc(r.label)+'</a>';}).join("")+'</div>':'')
       +'</div>';
   }).join("");
   $$('input[type=date][data-id]',host).forEach(function(inp){
     inp.addEventListener("change",function(){setLS("due_"+this.getAttribute("data-id"),this.value);render();});
   });
   $$('button[data-done]',host).forEach(function(b){
     b.addEventListener("click",function(){var id=this.getAttribute("data-done");setLS("done_"+id,getLS("done_"+id,"0")==="1"?"0":"1");render();});
   });
   if(location.hash){var t=$(location.hash);if(t)setTimeout(function(){t.scrollIntoView();},60);}
 }
 render();
}

/* =========================================================
   9. DASHBOARD (subject home)
   ========================================================= */
function initDashboard(){
 var host=$("#dashTopics"); if(!S) return;
 if(host){
   host.innerHTML=(S.pages||[]).slice().sort(function(a,b){return a.week-b.week;}).map(function(p){
     return '<a class="topic-card" href="'+p.f+'"><span class="wk">WEEK '+p.week+'</span><h4>'+esc(p.t)+'</h4>'
       +'<p>'+esc((p.summary||"").slice(0,110))+'</p></a>';
   }).join("")||'<p class="empty">No topic pages yet. Add one with _template.html.</p>';
 }
 /* next-up assessment + stats */
 var up=$("#dashNext");
 if(up){
   /* Incomplete assessments only; overdue ones sort first so a missed
      deadline shouts from the dashboard instead of quietly vanishing. */
   var items=(S.assessments||[]).map(function(a){return {a:a,due:dueOf(a),done:getLS("done_"+a.id,"0")==="1"};})
     .filter(function(o){return !o.done;})
     .sort(function(x,y){return x.due-y.due;});
   if(items.length){
     var o=items[0],st=statusOf(o.due,false);
     up.innerHTML='<a class="asmt '+st.cls+'" href="assessments.html#'+o.a.id+'" style="display:block;text-decoration:none">'
       +'<div class="asmt-top"><div><div class="type">'+(st.cls==="overdue"?"Overdue":"Next up")+' · '+esc(o.a.weekLabel||"")+'</div><h3>'+esc(o.a.name)+'</h3></div>'
       +'<span class="countdown '+st.cls+'">'+st.label+'</span></div>'
       +'<p class="desc" style="margin-bottom:0">'+fmtDate(o.due)+' — '+esc(o.a.weight)+'. '+esc((o.a.covers||""))+'</p></a>';
   } else { up.innerHTML='<div class="note"><span class="k">All clear</span>No upcoming assessments. Add or adjust them on the Assessments page.</div>'; }
 }
 var stats=$("#dashStats");
 if(stats){
   stats.innerHTML=''
     +stat((S.pages||[]).length,"Topic pages")
     +stat((S.equations||[]).length,"Equations")
     +stat((S.glossary||[]).length,"Glossary terms")
     +stat((S.assessments||[]).length,"Assessments");
 }
 function stat(n,l){return '<div class="stat"><div class="n">'+n+'</div><div class="l">'+l+'</div></div>';}
}

/* =========================================================
   10. HUB HOME (list of subjects) — uses window.HUB
   ========================================================= */
function initHub(){
 var host=$("#subjGrid"); if(!host||!window.HUB)return;
 host.innerHTML=window.HUB.subjects.map(function(s){
   return '<a class="subj-card" href="'+s.path+'"><span class="code">'+esc(s.code)+'</span>'
     +'<h3>'+esc(s.title)+'</h3><p>'+esc(s.blurb)+'</p>'
     +'<div class="meta"><span>'+esc(s.term)+'</span><span>'+esc(s.tally||"")+'</span></div></a>';
 }).join("")
 +'<a class="subj-card add" href="README.html"><div><div style="font-size:26px">＋</div>Add a subject<br><span style="font-size:12px">See the editing guide</span></div></a>';
}

/* =========================================================
   BOOTSTRAP
   ========================================================= */
/* favicon: the stress-element glyph as an inline SVG data URI, so no
   extra file is needed and the browser stops 404-ing for favicon.ico */
(function(){
 if(document.querySelector('link[rel="icon"]'))return;
 var svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">'
  +'<rect x="8" y="8" width="14" height="14" rx="1" fill="%231E2839" stroke="%233C72B8" stroke-width="1.4"/>'
  +'<g stroke="%23C9763F" stroke-width="1.4" stroke-linecap="round">'
  +'<path d="M15 7V2.5"/><path d="M13.2 4.2 15 2.5l1.8 1.7"/>'
  +'<path d="M15 23v4.5"/><path d="M13.2 25.8 15 27.5l1.8-1.7"/>'
  +'<path d="M23 15h4.5"/><path d="M25.8 13.2 27.5 15l-1.7 1.8"/>'
  +'<path d="M7 15H2.5"/><path d="M4.2 13.2 2.5 15l1.7 1.8"/>'
  +'</g></svg>';
 var l=document.createElement("link");
 l.rel="icon";l.type="image/svg+xml";
 l.href="data:image/svg+xml,"+svg.replace(/"/g,"'").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/#/g,"%23");
 document.head.appendChild(l);
})();

/* service worker: turns the hosted site into an installable offline app.
   Only registers over http(s) — opening the folder directly via file://
   keeps working exactly as before, service workers just don't apply. */
(function(){
 if(!("serviceWorker" in navigator))return;
 if(location.protocol!=="http:"&&location.protocol!=="https:")return;
 /* derive the site root from this script's own src (assets/hub.js) */
 var me=document.querySelector('script[src*="hub.js"]');
 var root=me?me.getAttribute("src").replace(/assets\/hub\.js.*$/,""):"./";
 navigator.serviceWorker.register(root+"sw.js").catch(function(e){
   console.warn("Service worker registration failed:",e);
 });
})();

document.addEventListener("DOMContentLoaded",function(){
 buildShell();
 initDashboard();
 initEquationsPage();
 initGlossaryPage();
 initAssessmentsPage();
 initSearchPage();
 initHub();
 renderMath(document.body);
 addAnchors();
 wireTooltips();
 var c=$(".content,.hub-hero"); if(c)c.classList.add("fadein");
});

/* expose a couple of helpers for inline use if ever needed */
window.HUBJS={renderMath:renderMath,tex:tex};
})();
