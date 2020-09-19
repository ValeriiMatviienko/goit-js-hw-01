const name = '«Генератор защитного поля»';
let price = 1000;
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'
