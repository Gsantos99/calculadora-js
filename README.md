# Calculadora GS
Uma calculadora feita utilizando HTML, CSS e JavaScript. 

# :warning: Em construção 

<p align="center">
 <a href="#obj">Objetivo do projeto</a> • 
 <a href="#html">A Estrutura: HTML</a> •  
 <a href="#css">O estilo: CSS</a> •   
 <a href="#tecnologias">Tecnologias usadas no projeto</a> •  
 <a href="#autor">Autor</a> 
</p>


## <h1 id='obj'> :computer: Objetivo do projeto </h1>
<p> Meu objetivo era construir uma calculadora funcional utilizando JavaScript puro. Buscando assim praticar alguns fundamentos da linguagem como funções, condicionais, a manipulação da DOM entre outros. Apesar de ser um projeto simples e comum entre os iniciantes, é muito útil para exemplificar como funciona a construção de uma página web interativa, que modifica seu conteúdo conforme o comportamento do usuário.  </p>



## <h1 id='html'> :computer: A Estrutura: HTML </h1>
<p>A estrutura da página é composta (de maneira geral) por duas tags section: uma guarda a calculadora e a outra para os links de contato do Linkedin e Github. Além de uma tag script que permite o link do arquivo de JavaScript com o HTML, fazendo assim a calculadora funcionar.
 </p>
 
 x 
 
 <p> Utilizei uma tabela para fazer o formato da calculadora, uma tag de input para representar sua tela e exibir o que fosse clicado pelo usuário, e tags de buttons para representar as teclas. Optei por utilizar uma tabela e um input, pois assim o formato quadrado já viria pronto. </p>
 
 x
 

## <h1 id='css'> :computer: O estilo: CSS </h1>
<p>Para a fonte do projeto escolhi a Opens Sans, importei do site fonts.google.com. Para estilizar o fundo da página resolvi aplicar um gradiente com tons de azul.  </p>

x 

<p> O efeito de animação dos ícones foi feito por meio da função do CSS scale, ela redimensiona o elemento tanto no eixo horizontal quanto no vertical, preferi um scale de 1.25 assim quando o mouse passa pelos ícones eles crescem. Além disso, criei uma animação onde os elementos da página aparecem de baixo para cima quando a página é carregada. Para facilitar, usei o @keyframe  que controla as etapas intermediárias em uma sequência de animação CSS. </p>

x

<p> Para prevenir o zoom ocasionado pelo double click nos mobiles utilizei a propriedade touch-action, assim o usuário poderá clicar várias vezes em uma mesma tecla sem acionar o zoom no dispositivo.  </p>

x

## <h1 id='css'> :computer: A funcionalidade: JavaScript </h1>
<p> Primeiramente, para que todo o código funcione é necessário capturar o clique na página, assim dependendo do elemento clicado a calculadora faz diferentes ações. Logo dentro das tags do HTML coloquei diferentes classes que serão selecionadas dentro do arquivo de JavaScript para serem manipuladas.  </p>

x

<p>Então, selecionei a tela da calculadora (o input de texto), e a própria calculadora (nesse caso a tabela). Para seleção utilizei o método do Document: querySelector. </p>

x

<p>  Em segundo, com os elementos já selecionados criei uma grande função que chama outras funções, dessa maneira separei as funcionalidades entre elas, para facilitar a manutenção do código.  </p>

x

Em seguida criei funções para: 

<ul> 
<li>Mostrar o que é digitado na tela </li> 
<li>Limpar o que está sendo exibido </li> 
<li>Apagar o último dígito </li> 
<li>Realizar as operações </li> 
</ul>

<p> Todas as funções são bem semelhantes em sua composição, detectam qual elemento está sendo clicado e de acordo com as classes do elemento  certas ações serão ativadas.  </p>

x

<p>Por exemplo, na função que realiza as operações da calculadora, ao invés de inserir várias condicionais para cada operação utilizei a função “eval”, que interpreta um código em javaScript, logo toda operação inserida seria resolvida como código. Para impedir o usuário de digitar no input (tela da calculadora) coloquei um atributo “readonly” em sua tag HTML. Também adicionei um try and catch para limpar a tela em caso de erros, como teclas apertadas aleatoriamente.  </p>

x



## <h1 id='tecnologias'> :computer: Tecnologias usadas no projeto </h1>
<ul>
<li> Html </li>
<li> CSS </li>
<li> JavaScript </li>
<li> Git e Github </li>
</ul>

## <h1 id='autor'> Autor </h1>
:heavy_multiplication_x:
<p> ... </p>


