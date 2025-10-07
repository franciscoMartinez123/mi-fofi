$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = $("#bgMusic")[0];
  var musicBtn = $("#musicBtn");
  var img = $("#loveImage");

  // abrir/cerrar carta
  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  // botón de música
  musicBtn.click(function () {
    if (music.paused) {
      music.play();
      musicBtn.text("🔈 Pause Music");
    } else {
      music.pause();
      musicBtn.text("🔊 Play Music");
    }
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    img.addClass("show");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    img.removeClass("show");
  }

  // música automática al cargar (opcional)
  window.addEventListener("load", () => {
    // algunos navegadores bloquean autoplay, por eso hay botón
    music.play().catch(() => {});
  });
});