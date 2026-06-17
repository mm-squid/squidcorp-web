(function () {
  "use strict";

  var SUPPORTED = ["cs", "en"];
  var STORAGE_KEY = "squidcorp-lang";

  function pickInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    // Default to Czech for first-time visitors.
    return "cs";
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    // Fill text nodes that carry both translations.
    var nodes = document.querySelectorAll("[data-cs][data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.classList.contains("lang-btn")) continue;
      var val = el.getAttribute("data-" + lang);
      if (val === null) continue;
      if (el.tagName === "META") {
        el.setAttribute("content", val);
      } else {
        el.textContent = val;
      }
    }

    // Update button pressed state.
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var b = btns[j];
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest ? ev.target.closest(".lang-btn") : null;
    if (!btn) return;
    applyLang(btn.getAttribute("data-lang"));
  });

  applyLang(pickInitialLang());
})();
