(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),s=a(1),i=a.n(s),m=a(4),o=a(5);a(12);function u(e){return c.a.createElement("div",null,c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"jumbotron mt-3 text-right"},c.a.createElement("span",{class:"text-left"},c.a.createElement("img",{class:"invert",src:e.aboutObj.image})),c.a.createElement("h1",null,e.aboutObj.name),c.a.createElement("p",{class:"lead"},e.aboutObj.short_description),c.a.createElement("ul",{class:"list-inline dev-icons"},e.aboutObj.socials.map((function(e){return c.a.createElement("li",{class:"list-inline-item"},c.a.createElement("a",{href:e.link,target:"_blank"}," ",c.a.createElement("i",{class:e.icon})," "))}))))),c.a.createElement("div",{class:"container"},c.a.createElement("h2",{class:"mt-5"},"..."),c.a.createElement("p",{class:"lead"},e.aboutObj.description)))}a(13);function d(e){return c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"timeline"},c.a.createElement("section",{class:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},c.a.createElement("div",{class:"w-100"},c.a.createElement("h2",{class:"mb-5"},"Experience"),e.experienceObj.map((function(e){return c.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},c.a.createElement("div",{class:"resume-content"},c.a.createElement("h3",{class:"mb-0"},e.title),c.a.createElement("div",{class:"subheading mb-3"},e.company),c.a.createElement("p",null,e.description),c.a.createElement("p",null,c.a.createElement("ul",{class:"list-inline dev-icons"},e.skills.map((function(e){return c.a.createElement("li",{class:"list-inline-item"},c.a.createElement("i",{class:e.icon}))}))))),c.a.createElement("div",{class:"resume-date text-md-right"},c.a.createElement("span",{class:"text-primary"},e.date)))}))))))}function E(e){return c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"timeline"},c.a.createElement("section",{class:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},c.a.createElement("div",{class:"w-100"},c.a.createElement("h2",{class:"mb-5"},"Education"),e.educationObj.map((function(e){return c.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},c.a.createElement("div",{class:"resume-content"},c.a.createElement("h3",{class:"mb-0"},e.short_description),c.a.createElement("div",{class:"subheading mb-3"}),c.a.createElement("p",null,e.name),c.a.createElement("p",null)))}))))))}a(14);function f(){return c.a.createElement("div",null,c.a.createElement("nav",{class:"navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark"},c.a.createElement("a",{class:"navbar-brand",href:"#"},"othiagoveloso@gmail.com"),c.a.createElement("a",{class:"navbar-brand",href:"#"},c.a.createElement("i",{class:"fas fa-map-pin"})," Brazil")))}a(15);function p(e){return c.a.createElement("div",{class:"container"},c.a.createElement("h2",{class:"mb-5"},"Certifications"),c.a.createElement("div",{class:"filter-body columns"},e.certificationObj.map((function(e){return c.a.createElement("div",{class:"column col-4 filter-item","data-tag":"tag-2"},c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-header"},c.a.createElement("figure",{class:"avatar avatar-xl"},c.a.createElement("img",{src:e.icon,alt:"..."})),c.a.createElement("div",{class:"card-title text-bold"},e.name))))}))))}var b=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],r=function(){var e=Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://foradoboxprod.herokuapp.com/api/profiles/1").then((function(e){return e.json()})).then((function(e){return l(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),!1===a?c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"loading loading-lg"}))):c.a.createElement("div",null,c.a.createElement(u,{aboutObj:a}),c.a.createElement(d,{experienceObj:a.experiences}),c.a.createElement(p,{certificationObj:a.certifications}),c.a.createElement(E,{educationObj:a.educations}),c.a.createElement(f,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.049d26a7.chunk.js.map