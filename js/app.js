document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.callback')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(button.value)
    })
  })

  console.log('🏃🏽‍♂️💨')
})
