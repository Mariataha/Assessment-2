///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

let intialValue = 0
const cartTotal = cart.reduce((prev, curr) => {return prev + curr.price}, initialValue);
console.log(cartTotal)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let calcTax = cartTotal * tax;
    let totalWithTax = cartTotal + calcTax;
    let final = totalWithTax - couponValue;
    return final;
}
    console.log(calcFinalPrice(cartTotal, 10, 0.06)) //Coupon value = 10

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    We need to know the customer's order, payment method, if they will dine in or take away, and the cost of the order.

1. Property = Customer's Order, and it's a String datatype because it's a menu item
2. Property = Payment method, and it's a String datatype because it's card or cash
3. Property = Take away, and it's a Boolean because its true or false take away order
4. Property = Cost, and it's a number because it's the price
5. Property = Cell number to keep track of pick up/ take away orders

/*
    Now, create a customer object following your own
    guidelines. 
*/ 

//CODE HERE
let customerObject = {
        order: "String",
        payment: "String",
        takeAway: "Boolean",
        cost: "number",
        cell: "number",
};