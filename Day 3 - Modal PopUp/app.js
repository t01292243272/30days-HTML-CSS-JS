var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal_header i')
var buttonClose = document.querySelector('.modal_footer button')

function toggleModal(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
buttonClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        toggleModal()
    }
})
