(this["webpackJsonpatilara.github.io"]=this["webpackJsonpatilara.github.io"]||[]).push([[0],{22:function(t,e,n){t.exports=n(34)},34:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),u=n(10),i=n(2),l=n(6),d=n(1),m=n(4);function s(){var t=Object(m.a)([""]);return s=function(){return t},t}var f=i.d.h1(s());var b=function(){return a.a.createElement(f,null,"Home")};function h(){var t=Object(m.a)([""]);return h=function(){return t},t}var g=i.d.h1(h());var p=function(){return a.a.createElement(g,null,"Projects")};function v(){var t=Object(m.a)([""]);return v=function(){return t},t}var E=i.d.h1(v());var j=function(){return a.a.createElement(E,null,"Contact")};var x=function(t){return a.a.createElement(d.c,null,a.a.createElement(d.a,{path:"/",exact:!0,component:b}),a.a.createElement(d.a,{path:"/projects",component:p}),a.a.createElement(d.a,{path:"/contact",component:j}))};var O=function(t,e){var n=Object(r.useState)((function(){var n=localStorage.getItem(t);return n?JSON.parse(n):e})),a=Object(u.a)(n,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem(t,JSON.stringify(o))}),[t,o]),[o,c]},k=n(21),y=n.n(k);function F(){var t=Object(m.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\n\ta {\n\t\tmargin: 0 10px;\n\t}\n"]);return F=function(){return t},t}function w(){var t=Object(m.a)(["\n\tcolor: ",";\n"]);return w=function(){return t},t}function C(){var t=Object(m.a)(["\n\theight: 60px;\n\tbackground: ",";\n\tcolor: white;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tpadding: 0 20px;\n"]);return C=function(){return t},t}var I=i.d.div(C(),(function(t){return t.theme.colors.primary})),S=Object(i.d)(l.b)(w(),(function(t){return t.theme.colors.headerText})),J=i.d.div(F());var T=function(t){var e=t.toggleTheme,n=Object(r.useContext)(i.a),o=n.colors,c=n.title;return a.a.createElement(I,null,a.a.createElement(S,{to:"/"},"\xc1tila Rodrigues"),a.a.createElement(J,null,a.a.createElement(S,{to:"/projects"},"Projetos"),a.a.createElement(S,{to:"/contact"},"Contato"),a.a.createElement(y.a,{onChange:e,checked:"dark"===c,checkedIcon:!1,uncheckedIcon:!1,height:10,width:40,handleDiameter:20,onColor:o.secondary})))};function P(){var t=Object(m.a)(["\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\ttransition: color 0.3s ease;\n\t\ttransition: background-color 0.3s ease;\n\t}\n\n\tbody {\n\t\tbackground: ",";\n\t\tfont-size: 14px;\n\t\tcolor: ",";\n\t}\n\n\tbody, button, input, textarea {\n\t\tfont: 500 1rem Poppins;\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ","\n\t}\n"]);return P=function(){return t},t}var z=Object(i.c)(P(),(function(t){return t.theme.colors.background}),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.text})),N={title:"light",colors:{primary:"#457b9d",secondary:"#a8dadc",background:"#f1faee",text:"#333",headerText:"#FFF"}},B={title:"dark",colors:{primary:"#1d3557",secondary:"#457b9d",background:"#333",text:"#FFF"}};var D=function(){var t=O("theme",N),e=Object(u.a)(t,2),n=e[0],r=e[1];return a.a.createElement(l.a,null,a.a.createElement(i.b,{theme:n},a.a.createElement(z,null),a.a.createElement(T,{toggleTheme:function(){r("light"===n.title?B:N)}}),a.a.createElement(x,null)))};c.a.render(a.a.createElement(D,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a83f8108.chunk.js.map