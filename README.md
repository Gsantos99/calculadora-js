# Calculadora GS

![Artigo Calculadora GS (3)](https://user-images.githubusercontent.com/94020264/193489631-07717d03-14f8-4657-858a-899dbb1671c3.png)

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
 
 ![estruturaHtml](https://user-images.githubusercontent.com/94020264/193489749-47657c81-20c9-406f-a0c5-2d8cdcdcb182.png)
 
 <p> Utilizei uma tabela para fazer o formato da calculadora, uma tag de input para representar sua tela e exibir o que fosse clicado pelo usuário, e tags de buttons para representar as teclas. Optei por utilizar uma tabela e um input, pois assim o formato quadrado já viria pronto. </p>
 
 ![input readonly](https://user-images.githubusercontent.com/94020264/193490138-16bfe61c-b276-4431-a8bf-f2590cd0ea96.png)

 

## <h1 id='css'> :computer: O estilo: CSS </h1>
<p>Para a fonte do projeto escolhi a Opens Sans, importei do site fonts.google.com. Para estilizar o fundo da página resolvi aplicar um gradiente com tons de azul.  </p>

![fontoECores](https://user-images.githubusercontent.com/94020264/193490204-490ca9a7-63d5-4ff7-a4d1-f694cea50230.png)


<p> O efeito de animação dos ícones foi feito por meio da função do CSS scale, ela redimensiona o elemento tanto no eixo horizontal quanto no vertical, preferi um scale de 1.25 assim quando o mouse passa pelos ícones eles crescem. Além disso, criei uma animação onde os elementos da página aparecem de baixo para cima quando a página é carregada. Para facilitar, usei o @keyframe  que controla as etapas intermediárias em uma sequência de animação CSS. </p>

![css keyframes](https://user-images.githubusercontent.com/94020264/193490291-0feb8768-1e9b-493d-b5f3-aff3930293e0.png)

<p> Para prevenir o zoom ocasionado pelo double click nos mobiles utilizei a propriedade touch-action, assim o usuário poderá clicar várias vezes em uma mesma tecla sem acionar o zoom no dispositivo.  </p>


![css desativazoom](https://user-images.githubusercontent.com/94020264/193490343-9fb5761c-e04a-45c1-bb8e-37a0827a275c.png)


## <h1 id='css'> :computer: A funcionalidade: JavaScript </h1>
<p> Primeiramente, para que todo o código funcione é necessário capturar o clique na página, assim dependendo do elemento clicado a calculadora faz diferentes ações. Logo dentro das tags do HTML coloquei diferentes classes que serão selecionadas dentro do arquivo de JavaScript para serem manipuladas.  </p>


![classesHtmlJS](https://user-images.githubusercontent.com/94020264/193490556-ccd544cc-fea2-4109-87eb-b8ee2db89c41.png)


<p>Então, selecionei a tela da calculadora (o input de texto), e a própria calculadora (nesse caso a tabela). Para seleção utilizei o método do Document: querySelector. </p>



![selecaoQuerySelector](https://user-images.githubusercontent.com/94020264/193490597-0625c216-24dc-410d-a693-b570fab22ecf.png)


<p>  Em segundo, com os elementos já selecionados criei uma grande função que chama outras funções, dessa maneira separei as funcionalidades entre elas, para facilitar a manutenção do código.  </p>

![function pt1](https://user-images.githubusercontent.com/94020264/193490635-c48eb7d0-87bd-4ce1-887e-385dd981a9e8.png)


<p> criei funções para: </p>

<ul> 
<li>Mostrar o que é digitado na tela </li> 
<li>Limpar o que está sendo exibido </li> 
<li>Apagar o último dígito </li> 
<li>Realizar as operações </li> 
</ul>

<p> Todas as funções são bem semelhantes em sua composição, detectam qual elemento está sendo clicado e de acordo com as classes do elemento  certas ações serão ativadas.  </p>

![function realizaconta](https://user-images.githubusercontent.com/94020264/193490828-afbbd5dc-9017-496a-9307-c822ae1ad8a1.png)


<p>Por exemplo, na função que realiza as operações da calculadora, ao invés de inserir várias condicionais para cada operação utilizei a função “eval”, que interpreta um código em javaScript, logo toda operação inserida seria resolvida como código. Para impedir o usuário de digitar no input (tela da calculadora) coloquei um atributo “readonly” em sua tag HTML. Também adicionei um try and catch para limpar a tela em caso de erros, como teclas apertadas aleatoriamente.  </p>


![input readonly](https://user-images.githubusercontent.com/94020264/193490866-b961205a-7329-46d2-bc79-ab0a2e10e4a2.png)


## <h1 id='tecnologias'> :computer: Tecnologias usadas no projeto </h1>
<ul>
<li> Html </li>
<li> CSS </li>
<li> JavaScript </li>
<li> Git e Github </li>
</ul>

## <h1 id='autor'> Autor </h1>


<p> Feito por <a href='https://www.linkedin.com/in/giulyano-santos-a92b6917b/' target='_blank'> Giulyano Santos </a> </p>


