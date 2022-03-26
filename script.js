
// MODAL WINDOW
let modalWindow = document.querySelector('.modal-container');
let infoBlock = document.querySelector('.order-link');
let modalCloseButton = document.querySelector('.modal-close-button')

infoBlock.onclick = function () {
  modalWindow.classList.remove('modal-container-close');
}

modalCloseButton.onclick = function () {
  modalWindow.classList.add('modal-container-close');
}
