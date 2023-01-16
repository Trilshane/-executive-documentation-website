window.addEventListener("DOMContentLoaded", () => {
  //Модальное окно
  let openModal = document.querySelector(".openModal"),
    modalWindow = document.querySelector(".modal"),
    closeModal = document.querySelector(".formClose");

  function modalOpen() {
    modalWindow.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  function modalClose() {
    modalWindow.style.display = "none";
    document.body.style.overflowY = "scroll";
  }
  openModal.addEventListener("click", modalOpen);
  closeModal.addEventListener("click", modalClose);
  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      modalClose();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.style.display === "block") {
      modalClose();
    }
  });

  //Слайдер в примерах работ
  let offset = 0, //смещение от левого края
    sliderLine = document.querySelectorAll(".slider-line"),
    nextBTN = document.querySelectorAll(".next"),
    prevBTN = document.querySelectorAll(".previous");

  function buttons(next, prev, slider) {
    next.addEventListener("click", function () {
      offset += 600;
      if (offset > 1200) {
        offset = 0;
      }
      slider.style.left = -offset + "px";
    });
    prev.addEventListener("click", function () {
      offset -= 600;
      if (offset < 0) {
        offset = 1200;
      }
      slider.style.left = -offset + "px";
    });
  }
  buttons(nextBTN[0], prevBTN[0], sliderLine[0]);
  buttons(nextBTN[1], prevBTN[1], sliderLine[1]);
  buttons(nextBTN[2], prevBTN[2], sliderLine[2]);
});
