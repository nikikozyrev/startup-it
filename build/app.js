"use strict";var burger=document.querySelector(".burger"),menu=document.querySelector(".nav"),menuLinks=menu.querySelectorAll(".nav__link");burger.addEventListener("click",(function(){burger.classList.toggle("burger--active"),menu.classList.toggle("nav--active"),document.body.classList.toggle("stop-scroll")})),menuLinks.forEach((function(e){e.addEventListener("click",(function(){burger.classList.remove("burger--active"),menu.classList.remove("nav--active"),document.body.classList.remove("stop-scroll")}))}));