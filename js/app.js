document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.callback')
  const modal = document.querySelector('.modal-overlay')
  const exitButton = document.querySelector('.exit')

  function handleModal(){
    modal.classList.toggle('displayed')
  }


  buttons.forEach(button => {
    button.addEventListener('click', handleModal)
  })

  exitButton.addEventListener('click', handleModal)

  console.log('🏃🏽‍♂️💨')
})
