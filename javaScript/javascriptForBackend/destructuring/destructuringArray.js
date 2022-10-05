//------------------------Em Array------------------------

const pairNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];

const arrsNumbers =[pairNumbers, oddNumbers];
const numbers = [...pairNumbers, ...oddNumbers];

console.log(arrsNumbers, numbers);

//-------------------------------------------------------

const num1 = 1;
const num2 = 2;

console.log(num1, num2,)

const [number1, number2, ...number3] = [1, 2, 3, 4, 5];


console.log(number1, number2, number3)


//-------------------------------------------------------

const [name1 = 'Rafael'] = ['João'];
const [name2 = 'Rafael'] = [];

console.log(name1, name2);
