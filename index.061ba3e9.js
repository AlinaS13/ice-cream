!function(){var e={openModalList:document.querySelectorAll("[data-ingredients-modal-open]"),closeModalBtn:document.querySelector("[data-ingredients-modal-close]"),modal:document.querySelector("[data-ingredients-modal]"),body:document.querySelector("body")},t=!0,o=!1,l=void 0;try{for(var n,d=e.openModalList[Symbol.iterator]();!(t=(n=d.next()).done);t=!0)item=n.value,item.addEventListener("click",a)}catch(e){o=!0,l=e}finally{try{t||null==d.return||d.return()}finally{if(o)throw l}}function a(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.closeModalBtn.addEventListener("click",a)}();
//# sourceMappingURL=index.061ba3e9.js.map
