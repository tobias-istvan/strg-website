// Copy-to-clipboard for the install command. The page works without JS; the command is selectable text.
(function () {
  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallbackCopy(text); });
    }
    return Promise.resolve(fallbackCopy(text));
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var label = btn.querySelector(".copy-label");
    var timer;
    btn.addEventListener("click", function () {
      copy(btn.getAttribute("data-copy")).then(function (ok) {
        label.textContent = ok ? "Copied" : "Press ⌘C";
        btn.classList.toggle("is-done", ok);
        clearTimeout(timer);
        timer = setTimeout(function () {
          label.textContent = "Copy";
          btn.classList.remove("is-done");
        }, 2000);
      });
    });
  });
})();
