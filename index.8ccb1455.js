!function(){var e=document.querySelectorAll(".menu-btn__icon-wrap"),n=document.querySelector(".menu"),a=document.querySelector(".header"),t=document.querySelectorAll(".menu__button-link");function l(){1==n.dataset.menuClosed?(n.style="height: 100vh",n.className="menu",n.dataset.menuClosed=0,e[0].className="menu-btn__icon-wrap visually-hidden",e[1].className="menu-btn__icon-wrap",a.className="header fixed"):(n.className="menu is-hidden",n.dataset.menuClosed=1,e[1].className="menu-btn__icon-wrap visually-hidden",e[0].className="menu-btn__icon-wrap",a.className="header",setTimeout((function(){n.style="height: 1px"}),255))}document.querySelectorAll(".menu-btn").forEach((function(e){e.addEventListener("click",l)})),t.forEach((function(e){e.addEventListener("click",l),console.log(e)}));new Swiper(".myS",{autoplay:{delay:2e3},loop:!0}),new Swiper(".mySlider",{pagination:{el:".swiper-pagination",clickable:!0},loop:!0})}();
//# sourceMappingURL=index.8ccb1455.js.map
