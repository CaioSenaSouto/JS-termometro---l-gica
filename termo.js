var temperatura = document.querySelector('input')
temperatura.focus()
function verifica() {
  if (temperatura.value >= 38) {
    alert('Você está com febre!')
  } else {
    alert('Nada de febre!')
  }
  temperatura.value = ''
  temperatura.focus()
}

var confirma = document.querySelector('button')
confirma.onclick = verifica
