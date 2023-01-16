window.addEventListener("DOMContentLoaded", () => {
  //Табы вопрос ответ
  let tabs = document.querySelectorAll(".questionTabsBTN"),
    tabsContent = document.querySelectorAll(".questionTabsPane"),
    tabsParent = document.querySelector(".questionTabsNav");

  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.style.display = "none";
    });
    tabs.forEach(function (item) {
      item.classList.remove("questionTabsBTNActive");
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("questionTabsBTNActive");
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("questionTabsBTN")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // аккордеон
  let acc = document.querySelectorAll(".accordeon"),
    accHead = document.querySelectorAll(".accordeonHead"),
    accContent = document.querySelectorAll(".accordeonContent");

  function showAccContetnt(i = 0) {
    accHead[i].classList.toggle("accordeonHead__active");
    if (accHead[i].classList.contains("accordeonHead__active")) {
      accContent[i].style.maxHeight = accContent[i].scrollHeight + "px";
    } else {
      accContent[i].style.maxHeight = 0;
    }
  }
  acc.forEach((item, i) => {
    item.addEventListener("click", () => {
      showAccContetnt(i);
    });
  });
});
