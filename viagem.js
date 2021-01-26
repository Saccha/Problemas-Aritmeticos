/*Desafio
Rubens quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem de carro, sendo que seu carro faz 12 KM/L. 
Como ele não sabe fazer um programa que o auxilie nessa missão, ele te pede ajuda. 
Para efetuar o cálculo, deve-se fornecer o tempo gasto em horas na viagem e a velocidade média durante a mesma em km/h. 
Assim, você conseguirá passar para Rubens qual a distância percorrida e, em seguida, calcular quantos litros serão necessários para a viagem que ele quer fazer.
Mostre o valor com 3 casas decimais após o ponto.

Entrada
O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem em horas e o segundo é a velocidade média durante a mesma em km/h.

Saída
Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

 
Exemplo de Entrada	
10 85
Saída
70.833

Entrada
22 67
Saída
122.833
*/

/*Resposta*/

let line = gets().split(" ");
let t = parseInt(line[0]);
let v = parseInt(line[1]);
let distance = t * v;

let liters = distance / 12;

console.log(liters.toFixed(3));
