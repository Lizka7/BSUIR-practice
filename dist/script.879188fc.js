parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function e(e){return c(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("[data-preload]");window.addEventListener("load",function(){e.classList.add("loaded"),document.body.classList.add("loaded")})});var a,s,i=document.querySelector(".progress-bar"),u=document.querySelector(".progress-text"),l=function(e){var n=e/S*100;i.style.width="".concat(n,"%"),u.innerHTML="".concat(e)},d=document.querySelector(".start"),f=document.querySelector("#num-questions"),y=document.querySelector("#category"),m=document.querySelector("#difficulty"),L=document.querySelector("#time"),v=document.querySelector(".quiz"),p=document.querySelector(".start-screen"),q=[],S=30,h=0,w=function(){var e=f.value,n=y.value,t=m.value;M();var r="https://opentdb.com/api.php?amount=".concat(e,"&category=").concat(n,"&difficulty=").concat(t,"&type=multiple");fetch(r).then(function(e){return e.json()}).then(function(e){q=e.results,setTimeout(function(){p.classList.add("hide"),v.classList.remove("hide"),a=1,b(q[0])},1e3)})};d.addEventListener("click",w);var b=function(n){var t=document.querySelector(".question"),r=document.querySelector(".answer-wrapper");questionNumber=document.querySelector(".number"),t.innerHTML=n.question;var c=[].concat(e(n.incorrect_answers),[n.correct_answer.toString()]);r.innerHTML="",c.sort(function(){return Math.random()-.5}),c.forEach(function(e){r.innerHTML+='\n                  <div class="answer ">\n            <span class="text">'.concat(e,'</span>\n            <span class="checkbox">\n              <i class="fas fa-check"></i>\n            </span>\n          </div>\n        ')}),questionNumber.innerHTML=' Question <span class="current">'.concat(q.indexOf(n)+1,'</span>\n            <span class="total">/').concat(q.length,"</span>");var o=document.querySelectorAll(".answer");o.forEach(function(e){e.addEventListener("click",function(){e.classList.contains("checked")||(o.forEach(function(e){e.classList.remove("selected")}),e.classList.add("selected"),T.disabled=!1)})}),S=L.value,g(S)},g=function(e){s=setInterval(function(){3===e&&O("countdown.mp3"),e>=0?(l(e),e--):H()},1e3)},M=function(){d.innerHTML="Loading";setInterval(function(){10===d.innerHTML.length?d.innerHTML="Loading":d.innerHTML+="."},500)},T=document.querySelector(".submit"),E=document.querySelector(".next");T.addEventListener("click",function(){H()}),E.addEventListener("click",function(){A(),T.style.display="block",E.style.display="none"});var H=function(){clearInterval(s);var e=document.querySelector(".answer.selected");if(e){var n=e.querySelector(".text").innerHTML;if(console.log(a),n===q[a-1].correct_answer)h++,e.classList.add("correct");else{e.classList.add("wrong");document.querySelectorAll(".answer").forEach(function(e){e.querySelector(".text").innerHTML===q[a-1].correct_answer&&e.classList.add("correct")})}}else document.querySelectorAll(".answer").forEach(function(e){e.querySelector(".text").innerHTML===q[a-1].correct_answer&&e.classList.add("correct")});document.querySelectorAll(".answer").forEach(function(e){e.classList.add("checked")}),T.style.display="none",E.style.display="block"},A=function(){a<q.length?b(q[++a-1]):_()},k=document.querySelector(".end-screen"),x=document.querySelector(".final-score"),I=document.querySelector(".total-score"),_=function(){k.classList.remove("hide"),v.classList.add("hide"),x.innerHTML=h,I.innerHTML="/ ".concat(q.length)},j=document.querySelector(".restart");j.addEventListener("click",function(){window.location.reload()});var O=function(e){new Audio(e).play()};
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.879188fc.js.map