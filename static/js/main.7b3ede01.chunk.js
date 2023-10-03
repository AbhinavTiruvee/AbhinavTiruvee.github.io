(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(3),i=n(1),s=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),l=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://AbhinavTiruvee.github.io",j="AT",h="Abhinav Tiruveedhula",b="Software Developer",d="I am a Computer Science major currently enrolled at the University of Texas at Austin, driven by a strong passion for software development. With two previous internships completed, I am eagerly seeking an internship opportunity for the summer of 2024. If you have a role that aligns with my skill set, please get in touch with me.",u="https://drive.google.com/file/d/1HvshCj_ZCDxs9Es004-nslM4UhWsVS-6/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/abhinav-tiruveedhula/",github:"https://github.com/AbhinavTiruvee"},p=[{name:"Impact of Online Stock Recommendations",description:"Research and research report on validity of online stock recommendations before 2017",stack:["R","Python","Excel"],sourceCode:"https://github.com/AbhinavTiruvee/OnlineStockRecommendations"},{name:"Valorant Statistics using APIs",description:"From a given Valorant player's username, advanced metrics are given using the Valorant API",stack:["Python"],sourceCode:"https://github.com/AbhinavTiruvee/ValorantStats"},{name:"Personal Portfolio Website",description:"Made a website that provides information about my software development background",stack:["HTML","CSS","JavaScript","React"],sourceCode:"https://github.com/AbhinavTiruvee/newportfolio"}],x=[{name:"Tecmend",position:"Full Stack Development Intern",dates:"Jan 2023 - May 2023",description:"Utilized skills in Python and Django to add to three projects's backends over the course of the internship. Gained project-based experience in web applications, APIs, and databases",stack:["Python","Django","React","JavaScript"]},{name:"Springworks",position:"Sofware Development Engineering Intern",dates:"May 2022 - August 2022",description:"Contributed to six machine learning projects, culminating in the creation of a OCR program. Gained valuable experience in project management, teamwork, and agile development methodologies",stack:["Python","AWS","Docker","Postman"]}],O=["Python","Java","R","SQL","JavaScript","React","Django","Excel","AWS","Docker","Postman","Git"],v="abhinav.tiruveedhula@utexas.edu",f=n(17),k=n.n(f),g=n(15),_=n.n(g),N=n(19),w=n.n(N),y=n(18),S=n.n(y),C=(n(28),function(){var e=Object(i.useContext)(r),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(i.useState)(!1),o=Object(a.a)(l,2),j=o[0],h=o[1],b=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#exps",onClick:b,className:"link link--nav",children:"Experience"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,v?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(_.a,{}):Object(s.jsx)(k.a,{})}),Object(s.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(S.a,{}):Object(s.jsx)(w.a,{})})]})}),P=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(C,{})]})}),A=n(8),T=n.n(A),E=n(20),I=n.n(E),R=(n(33),function(){var e=h,t=b,n=d,c=u,a=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsx)("h1",{children:Object(s.jsx)("span",{className:"about__name",children:e})}),t&&Object(s.jsx)("h2",{className:"about__role",children:t}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,target:"_blank",rel:"noopener noreferrer","aria-label":"github",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(I.a,{})})]})]})]})}),D=n(4),J=n.n(D),M=n(12),L=n.n(M),V=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noopener noreferrer","aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})}),W=(n(36),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(V,{project:e},J()())}))})]}):null}),F=(n(37),function(e){var t=e.exp;return Object(s.jsxs)("div",{className:"exp",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("h4",{children:t.position}),Object(s.jsx)("h6",{children:t.dates}),Object(s.jsx)("p",{className:"exp__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"exp__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"exp__stack-item",children:e},J()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,target:"_blank",rel:"noopener noreferrer","aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noopener noreferrer","aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})}),G=(n(38),function(){return x.length?Object(s.jsxs)("section",{id:"exps",className:"section exps",children:[Object(s.jsx)("h2",{className:"section__title",children:"Experience"}),Object(s.jsx)("div",{className:"exps__grid",children:x.map((function(e){return Object(s.jsx)(F,{exp:e},J()())}))})]}):null}),U=(n(39),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),z=n(21),H=n.n(z),B=(n(40),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(H.a,{fontSize:"large"})})}):null}),Q=(n(41),function(){return v?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(v),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(42),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/AbhinavTiruvee/newportfolio",target:"_blank",rel:"noopener noreferrer",className:"link footer__link",children:"Abhinav Tiruveedhula "})})}),Z=(n(43),function(){var e=Object(i.useContext)(r),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(P,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(R,{}),Object(s.jsx)(W,{}),Object(s.jsx)(G,{}),Object(s.jsx)(U,{}),Object(s.jsx)(Q,{})]}),Object(s.jsx)(B,{}),Object(s.jsx)(Y,{})]})});n(44);Object(c.render)(Object(s.jsx)(l,{children:Object(s.jsx)(Z,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.7b3ede01.chunk.js.map