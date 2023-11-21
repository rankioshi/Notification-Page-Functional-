"use strict";

const markAsRead = document.querySelector(".noti-markasread");
const noti1 = document.querySelector(".noti1");
const noti2 = document.querySelector(".noti2");
const noti3 = document.querySelector(".noti3");
const notiCount = document.querySelector(".noti-count");
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const sec = document.querySelector(".section-notification");

markAsRead.addEventListener("click", function () {
  markAsRead.style.color = "hsl(219, 14%, 63%)";

  noti1.classList.remove("noti-unread");
  noti2.classList.remove("noti-unread");
  noti3.classList.remove("noti-unread");

  dot1.style.backgroundColor = "transparent";
  dot2.style.backgroundColor = "transparent";
  dot3.style.backgroundColor = "transparent";
  notiCount.textContent = "0";
});