

function calculadora() {
  const telaCalc = document.querySelector('.display');
  const calcCorpo = document.querySelector('.calculadora');


  mostraDisplay();
  limpaTela();
  apagaUltimo();
  realizaConta();


   function realizaConta() {
   calcCorpo.addEventListener('click', (e)=> {
   const elemento = e.target;
   
   if(elemento.classList.contains('btn-igual')){
    telaCalc.value = eval(telaCalc.value);
   } })

   };


  function mostraDisplay() {
    calcCorpo.addEventListener('click', e => {
      const elemento = e.target;
      if (elemento.classList.contains('btn-num')) {
        telaCalc.value += elemento.textContent
      }
    });
  };


  function limpaTela() {
    calcCorpo.addEventListener('click', (e)=>{
     const elemento = e.target;
     if(elemento.classList.contains("btn-limpar")) {
      telaCalc.value = '';
     }
    });
  };
  
  function apagaUltimo() {
    calcCorpo.addEventListener('click', (e)=>{
      let elemento = e.target;
      if(elemento.classList.contains('btn-apagar')){
        telaCalc.value = telaCalc.value.slice(0,-1);
      }
    });
  };



}

calculadora();
