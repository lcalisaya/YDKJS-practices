/* --- Requirements ---
a) Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!)
until you run out of money in your bank account. You'll also buy accessories for each phone as long as
your purchase amount is below your mental spending threshold.
b) After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount,
properly formatted.
c) Finally, check the amount against your bank account balance to see if you can afford it or not.
d) You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold,"
as well as a variable for your "bank account balance."
e) You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
And Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier.
You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

const TAX_RATE = 0.21;
const PHONE_PRICE = 3500;
const ACCESORY_PRICE = 300;
const SPENDING_THRESHOLD = 10000; //Umbral de gastos ~ El máximo de lo que debería gastar.


var bank_account_balance = Number(prompt('Ingrese la cantidad de dinero disponible en su cuenta bancaria, por favor:')) || 0;
var totalPriceFormatted = '';
var totalPrice = 0;

while (totalPrice < bank_account_balance) {
  totalPrice = totalPrice + PHONE_PRICE;
  if (totalPrice< SPENDING_THRESHOLD) {
    totalPrice = totalPrice + ACCESORY_PRICE;
  }
}
totalPrice = addTax(totalPrice);
totalPriceFormatted = addFormatToPrice(totalPrice);
console.log('El precio final de la venta es: ' + totalPriceFormatted);

function addTax(quantity) {
  return quantity + quantity * TAX_RATE;
}

function addFormatToPrice(price){
  return "$" + price.toFixed(2);
}

if (totalPrice == 0) {
  console.log('Con la cantidad ingresada no se puede realizar ninguna compra. Intente otra vez.');
}
else if (totalPrice < bank_account_balance) {
  console.log('Usted puede pagar esta compra.')
} else {
  console.log('Usted no tiene el dinero suficiente para pagar esta compra.');
}
