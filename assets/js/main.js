const telaCalc = document.querySelector('.display')
const calcCorpo = document.querySelector('.calculadora')

function calculadora() {
  mostraDisplay()
  limpaTela()
  apagaUltimo()
  realizaConta()
  enterPress()

  function realizaConta() {
    calcCorpo.addEventListener('click', e => {
      const elemento = e.target

      try {
        if (!telaCalc.value) {
          return
        }

        if (elemento.classList.contains('btn-igual')) {
          telaCalc.value = eval(telaCalc.value)
        }
      } catch (error) {
        limpaTela()
      }
    })
  }

  function enterPress() {
    telaCalc.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        telaCalc.value = eval(telaCalc.value)
      }
    })
  }

  function mostraDisplay() {
    calcCorpo.addEventListener('click', e => {
      const elemento = e.target
      telaCalc.focus()

      if (elemento.classList.contains('btn-num')) {
        telaCalc.value += elemento.textContent
      }
    })
  }

  function limpaTela() {
    telaCalc.value = ''
    calcCorpo.addEventListener('click', e => {
      const elemento = e.target
      if (elemento.classList.contains('btn-limpar')) {
        telaCalc.value = ''
      }
    })
  }

  function apagaUltimo() {
    calcCorpo.addEventListener('click', e => {
      let elemento = e.target
      if (elemento.classList.contains('btn-apagar')) {
        telaCalc.value = telaCalc.value.slice(0, -1)
      }
    })
  }
}

calculadora()
