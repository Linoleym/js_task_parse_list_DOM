var r=document.querySelector("ul");function a(r){return Number(r.replace(/[^0-9.]/g,""))}Array.from(r.children).sort(function(r,t){var e=a(r.dataset.salary);return a(t.dataset.salary)-e}).forEach(function(a){return r.appendChild(a)}),Array.from(r.children).map(function(r){return{name:r.textContent.trim(),salary:a(r.dataset.salary)}});
//# sourceMappingURL=index.5a15fcee.js.map
