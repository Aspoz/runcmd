"use strict";function toggleClassMenu(){myMenu.classList.add("menu--animatable"),myMenu.classList.contains("menu--visible")?myMenu.classList.remove("menu--visible"):myMenu.classList.add("menu--visible")}function OnTransitionEnd(){myMenu.classList.remove("menu--animatable")}var myMenu=document.querySelector(".menu"),oppMenu=document.querySelector(".menu-icon"),closeMenu=document.querySelector(".menu-close");myMenu.addEventListener("transitionend",OnTransitionEnd,!1),oppMenu.addEventListener("click",toggleClassMenu,!1),closeMenu.addEventListener("click",toggleClassMenu,!1);