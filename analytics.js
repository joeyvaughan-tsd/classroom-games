/* Visitor counting for the Classroom Game Hub (GoatCounter: free, no cookies).
   To turn counting on, replace YOUR-CODE below with your GoatCounter code. */
(function () {
  var CODE = 'YOUR-CODE';
  window.hubTrack = function () {};
  if (!CODE || CODE === 'YOUR-CODE' || location.protocol === 'file:') return;
  window.goatcounter = window.goatcounter || {};
  var queue = [];
  window.hubTrack = function (path, title) {
    var ev = { path: path, title: title, event: true };
    if (window.goatcounter.count) window.goatcounter.count(ev); else queue.push(ev);
  };
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + CODE + '.goatcounter.com/count');
  s.onload = function () { var t = setInterval(function () { if (window.goatcounter.count) { clearInterval(t); queue.splice(0).forEach(function (e) { window.goatcounter.count(e); }); } }, 200); setTimeout(function () { clearInterval(t); }, 8000); };
  document.head.appendChild(s);
})();
