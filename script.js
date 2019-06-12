

// AVISO: APAGAR O "/*" PARA DESMONTRAR O CÓDIGO

/*

let idade = 105;                                //declarando variável
idade += 1;                                     // somando 1 ao valor idade
console.log(idade);                             // Obtendo valor de "idade" no console


let nick = 'Lucas';
let cargo = 'programador';
let signo = 'aries';

alert(`o nome do usuário é: ${nick}` `e o cargo é: ${cargo}` `e o signo é: ${signo}`); 

*/

//----------------------------- EXERCÍCIO  1 -----------------------------------------


/* Contruir uma escada com hashtag (#) com quantos degraus prefirir, através do comando for e
o qual siga as informações */

/*

let materialEscada = prompt("Digite o material da escada");   //material escada vale um "hashtag"
let degrau = materialEscada;                                  // degrau guardou o valor sem alterar o material escada
let qtd= Number(prompt("Quantos degraus?"));                  // perguntando a quantidade de degraus requerida

for(let i=0; i<qtd; i++){
    console.log(materialEscada);
    materialEscada += degrau;
}

*/

// LISTAS

/*
let filmes = [
  {titulo:"Harry Potter", idade: 10},
  {titulo:"It, a coisa", idade: 16},
  {titulo:"O albergue", idade: 18}
]

console.log(filmes[0]);


*/

//--------------------------- EXERCÍCIO 2 -----------------------------------------
// 1 - Criar uma lista de filme onde a indicação depende da sua faixa-etária

/*
let idade = prompt("Qual sua idade?");

let filmes_cartaz = [
  {titulo:"Harry Potter", idade: 10},
  {titulo:"It, a coisa", idade: 16},
  {titulo:"O albergue", idade: 18}
]

for(let i=0; i<filmes_cartaz.length; i++){
  if(idade)
}

TA AQUI

*/

// <><><><><><><><><><><><><><><> ----  FUNÇÕES ---- <><><><><><><><><><><><><><><><><><><><><><<><><><>


/* Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript:
um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la 
em algum lugar no escopo do qual você quiser chamá-la. */

/*
// -- Função de chamar alerta ----------------------------------------------------------------------------------------

function abrirAlert()                               // Apenas criando a função
{                    
  alert("Chamei função")                            // Definindo a ação da função
}
abrirAlert();                                       // Estou invocando a função
*/



// -- Função de operação matemática----------------------------------------------------------------------------------

/*

function somar(x,y){                               // parâmetros criados "x" e "y"
  console.log(x + y);                              // atribuindo ação dos parâmetros (contexto da função)
}
somar (10,4);                                      // desmonstrar ação com valores atribuídos, portanto somar = 14
somar (5,2);                                       // desmonstrar ação com valores atribuídos, portanto somar = 7

*/

// -- Função de operação matemática com prompt ------------------------------------------------------------------------

/*
// No exercício, a ideia era utilizar dois valores inseridos pelo usuário e fazer a operação

let valorCalculo1= Number (prompt("Digite o primeiro valor"));    // valor 1
let valorCalculo2= Number (prompt("Digite o segundo valor"));     // valor 2

function somarValor()                                             // Perceba que não precisa atribuir parâmetros no ()
  {
      console.log(valorCalculo1 + valorCalculo2);                 // Aqui você atribui os parâmetros para a função
  }
somarValor();

*/

// -- Função de operação matemática média aritmética -------------------------------------------------------------------

/*

function media(n1,n2,n3,n4)                       // parâmetros "n" dos valores da média
{                       
  let media = (n1+n2+n3+n4)/4                     // media = ( x1 + x2 + x3 + xn / n)
  console.log(`A média é: ${media}`);
}
media(10,4,5,7);                                  // desmonstrar o valor escolhido;

*/

// -- calculadora: soma / subtração / multiplicação / divisão -----------------------------------------------------------

/*

let valorX1= Number (prompt("Digite o primeiro valor"));    // valor 1
let valorX2= Number (prompt("Digite o segundo valor"));     // valor 2

function calculadora()                                            // parâmetros X dos valores da 
{                       
  let plus       = (valorX1 + valorX2);                          // soma
  let less       = ( valorX1 - valorX2);                         // subtração
  let multiply   = (valorX1 * valorX2);                       // multiplicação
  let division   = 


  console.log(`A soma é: ${plus}`, `a ` )
}
calculadora();                                  // desmonstrar o valor escolhido;

*/

// <><><><><><><><><><><><><><><> ----  FUNÇÕES (ARROW) ---- <><><><><><><><><><><><><><><><><><><><><><<><><><>

/*Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função 
(function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de 
funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras
HORA DA REVISÃO: Na arrow function, a variável se torna global, diferente de function que é interna apenas*/ 

/*
calculator = (a,b) =>{
  console.log(a+b)
}
calculator(2,6);
*/

// <><><><><><><><><><><><><><><> ----  FUNÇÕES (ANÔNIMA) ---- <><><><><><><><><><><><><><><><><><><><><><<><><><>

/*A finalidade de uma função anônima é exatamente a de permitir passá-la como se fosse um objeto qualquer, 
que você pode atribuir a uma variável, independentemente de haver um nome para a função.*/

/*
let fazerConta = function(x,z){
  console.log(x+z)
}

fazerConta();
*/