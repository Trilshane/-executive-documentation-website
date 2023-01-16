window.addEventListener("DOMContentLoaded", () => {
  let dropDownList = document.querySelector(".dropDownList"),
    subMenu = document.querySelector(".subMenu");

  function showSubMenu() {
    dropDownList.classList.toggle("dropDownListActive");
    if (dropDownList.classList.contains("dropDownListActive")) {
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    } else {
      subMenu.style.maxHeight = 0;
    }
  }
  dropDownList.addEventListener("click", showSubMenu);
});
