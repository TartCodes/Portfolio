const open = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal_container');
const close = document.getElementById('modal-close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show')
})

close.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})