let buttons,
  modal,
  exitButton,
  mailButton,
  modalHeader

function init(){
  buttons = document.querySelectorAll('.callback')
  modal = document.querySelector('.modal-overlay')
  exitButton = document.querySelector('.exit')
  mailButton = document.getElementById('mail-button')
  modalHeader = document.querySelector('.modal h2')

  addEvents()
}

function handleButton(button){
  const spaceIndex = button.value.indexOf(' ')
  const offerType = button.value.substring(0, spaceIndex)
  modalHeader.innerText = `Requesting a callback about a${offerType.charAt(0) === 'E'? 'n':''} ${button.value}`
  mailButton.setAttribute(
    'href',
    `mailto:info@acquio.co.uk?subject=${offerType} Partner Offer`
  )
}

function handleModal(button){
  modal.classList.toggle('displayed')
  if (button.value){
    handleButton(button)
  }
}

function addEvents(){
  buttons.forEach(button => {
    button.addEventListener('click', () => handleModal(button))
  })
  exitButton.addEventListener('click', () => handleModal(exitButton))
}

document.addEventListener('DOMContentLoaded', init)
