/*Desafio
Há um país denominado Lolipad, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados 
são utilizados em benefício da população, sem qualquer desvio. 
A moeda deste país é o Loli, cujo símbolo é o R$.
Você terá o desafio de ler um valor com duas casas decimais, equivalente ao salário de uma pessoa de Loli. 
Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.
Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento".

 
Exemplos de Entrada	
3002.00
Saída
R$ 80.36
Entrada
1701.12
Saída
Isento
Entrada
4520.00
Saída
R$ 355.60
*/

let renda = parseFloat(gets());

if (renda <= 2000.00) {
    console.log('Isento');
} else if (renda <= 3000.00) {
    result = parseFloat((renda - 2000.00) * 0.08);
    console.log('R$ ' + result.toFixed(2));
} else if (renda <= 4500.00) {
    faixa1 = parseFloat(renda - 2000.00);
    faixa2 = parseFloat(1000.00 * 0.08);
    faixa3 = parseFloat((faixa1 - 1000.00) * 0.18);
    result = faixa2 + faixa3;
    console.log('R$ ' + result.toFixed(2));
} else {
    faixa1 = parseFloat(renda - 2000.00);
    faixa2 = parseFloat(1000.00 * 0.08);
    faixa3 = parseFloat(1500.00 * 0.18);
    faixa4 = parseFloat((faixa1 - 2500) * 0.28);
    result = faixa2 + faixa3 + faixa4;
    console.log('R$ ' + result.toFixed(2));
}
