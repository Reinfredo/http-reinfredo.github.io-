document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.callback')
  const modal = document.querySelector('.modal-overlay')
  const exitButton = document.querySelector('.exit')
  const mailButton = document.getElementById('mail-button')
  const modalHeader = document.querySelector('.modal h2')

  function handleButton(button){
    const spaceIndex = button.value.indexOf(' ')
    const offerType = button.value.substring(0, spaceIndex)
    modalHeader.innerText = `Requesting a callback about a${offerType.charAt(0) === 'E'? 'n':''} ${button.value}`
    mailButton.setAttribute(
      'href',
      `mailto:info@acquio.co.uk?subject=${offerType} Partner Offer`)
  }

  function handleModal(button){
    modal.classList.toggle('displayed')
    if (button.value){
      handleButton(button)
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => handleModal(button))
  })

  exitButton.addEventListener('click', () => handleModal(exitButton))
})
