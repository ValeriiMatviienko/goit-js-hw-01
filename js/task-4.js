const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = pricePerDroid * orderPieces;
let balanceCredit = credits - totalPrice;
let message;

// totalPrice = pricePerDroid * orderPieces;
// balanceCredit = credits - totalPrice;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces <= 7) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else if (orderPieces >= 7) {
  message = ACCESS_DENIED;
}

console.log(message);
