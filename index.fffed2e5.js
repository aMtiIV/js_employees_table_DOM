function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}return o}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}(t,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e){var t=0,n=e;do t++,n=n.previousElementSibling;while(n)return k[t-1].innerText.toLowerCase()}function r(e){return parseInt(e.replaceAll(",","").slice(1))}function a(e){return e.length>=4}function o(){var e=document.querySelector("tbody"),t=document.createElement("tbody"),n=!0,r=!1,a=void 0;try{for(var o,i=w[Symbol.iterator]();!(n=(o=i.next()).done);n=!0)!function(){var e=o.value,n=document.createElement("tr"),r=Array.from({length:5},function(){return document.createElement("td")}),a=e.name,i=e.position,c=e.office,s=e.age,d=e.salary,f=e.active;r[0].textContent=a,r[1].textContent=i,r[2].textContent=c,r[3].textContent=s,r[4].textContent="$"+d.toString().split("").reduce(function(e,t,n){return e+t+((d.toString().length-n-1)%3==0?",":"")},"").slice(0,-1),r.forEach(function(e){e.addEventListener("dblclick",u),n.append(e)}),f&&n.classList.add("active"),n.addEventListener("click",l),t.append(n)}()}catch(e){r=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}e.replaceWith(t)}function i(){var e=this.innerText;e===q?w.reverse():(q=e,w.sort(function(e){switch(e){case"Name":return function(e,t){return e.name>t.name?1:e.name<t.name?-1:0};case"Position":return function(e,t){return e.position>t.position?1:e.position<t.position?-1:0};case"Office":return function(e,t){return e.office>t.office?1:e.office<t.office?-1:0};case"Age":return function(e,t){return e.age-t.age};case"Salary":return function(e,t){return e.salary-t.salary}}}(e))),o()}function l(){document.querySelectorAll("tbody tr").forEach(function(e){e.classList.remove("active")}),w.forEach(function(e){e.active=!1}),this.classList.add("active");for(var e=document.querySelectorAll("tbody tr"),t=0;t<e.length;t++)e[t].matches(".active")&&(w[t].active=!0)}function c(e){if(L&&("blur"===e.type||"keydown"===e.type&&"Enter"===e.key)){var t=n(this.parentElement),r=!0;if(L=!1,this.value.length<=0)r=!1;else switch(t){case"name":a(this.value)||(r=!1);break;case"age":(this.value<18||this.value>90)&&(r=!1);break;case"salary":this.value>=0||(r=!1)}r&&(function(e){var t=0,n=e;do t++,n=n.previousElementSibling;while(n)return w[t-1]}(this.parentElement.parentElement)[t]=this.value,q=""),o(),this.remove(),L=!0}}function u(){if(3===this.firstChild.nodeType&&!document.querySelector("td > input, td > select")){switch(n(this)){case"name":case"position":f(this,"text",this.innerText);break;case"office":var e,t;e=this.innerText,(t=document.createElement("select")).className="cell-input",d(t),t.selectedIndex=A.indexOf(e),t.addEventListener("blur",c),t.addEventListener("keydown",c),this.append(t);break;case"age":f(this,"number",this.innerText);break;case"salary":f(this,"number",r(this.innerText))}this.firstChild.remove()}}function s(e,t,n,r){var a=document.createElement("div"),o=document.createElement("h2"),i=document.createElement("p");a.className="notification "+r,a.dataset.qa="notification",o.className="title",o.textContent=t,i.textContent=n,a.append(o),a.append(i),e.append(a),setTimeout(function(){a.style.display="none"},1999)}function d(e){var t=!0,n=!1,r=void 0;try{for(var a,o=A[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value,l=document.createElement("option");l.innerText=i,l.value=i,e.append(l)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}function f(e,t,n){var r=document.createElement("input");r.className="cell-input",r.type=t,r.value=n,r.addEventListener("blur",c),r.addEventListener("keydown",c),e.append(r)}function m(e,t,n,r){var a=document.createElement("label"),o=document.createElement("input");a.innerText=t,o.type=n,o.name=r,o.dataset.qa=r,o.required=!0,a.append(o),e.append(a)}var y,v,p,h,b,E,x,g,S,T=document.querySelectorAll("tbody tr"),w=[],k=document.querySelectorAll("thead th"),A=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],q="",L=!0;T.forEach(function(e){var n=t(e.children,5),a=n[0],o=n[1],i=n[2],c=n[3],s=n[4];w.push({name:a.innerText,position:o.innerText,office:i.innerText,age:parseInt(c.innerText),salary:r(s.innerText),active:!1});var d=!0,f=!1,m=void 0;try{for(var y,v=e.children[Symbol.iterator]();!(d=(y=v.next()).done);d=!0)y.value.addEventListener("dblclick",u)}catch(e){f=!0,m=e}finally{try{d||null==v.return||v.return()}finally{if(f)throw m}}e.addEventListener("click",l)}),k.forEach(function(e){e.addEventListener("click",i)}),y=document.body,(v=document.createElement("form")).className="new-employee-form",m(v,"Name:","text","name"),m(v,"Position:","text","position"),p="Office:",h="office",b=document.createElement("label"),E=document.createElement("select"),b.innerText=p,E.name=h,E.dataset.qa=h,E.required=!0,d(E),b.append(E),v.append(b),m(v,"Age:","number","age"),m(v,"Salary:","number","salary"),x="Save to table",g="submit",(S=document.createElement("button")).innerText=x,S.type=g,S.addEventListener("click",function(e){var n=t(document.querySelectorAll("label > input"),4),r=n[0],i=n[1],l=n[2],c=n[3],u=document.querySelector("select");e.preventDefault(),function(e,t,n,r,o){var i=!0,l=!1,c=void 0;try{for(var u,d=arguments[Symbol.iterator]();!(i=(u=d.next()).done);i=!0)if(u.value.value.length<=0)return s(document.body,"Error","All fields are required!","error"),!1}catch(e){l=!0,c=e}finally{try{i||null==d.return||d.return()}finally{if(l)throw c}}return a(e.value)?r.value<18?(s(document.body,"Error","Employee is too young!","error"),!1):r.value>90?(s(document.body,"Error","Employee is too old!","error"),!1):o.value>=0||(s(document.body,"Error","Salary should be higher or equal to 0!","error"),!1):(s(document.body,"Error","Name is too short!","error"),!1)}(r,i,u,l,c)&&(w.push({name:r.value,position:i.value,office:u.value,age:l.value,salary:c.value,active:!1}),o(),q="",s(document.body,"Success","New person has been added!","success"))}),v.append(S),y.append(v);
//# sourceMappingURL=index.fffed2e5.js.map
