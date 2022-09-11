console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//Create a function called addItem. It should:

//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added
let basket = [];

function addItem(item){ //start of addItem
    basket.push(item); // adding item
    if(basket.includes(item)){ //test to see if item is added
        return true;          //true if item is in basket
    }
    else{
        return false;      //false if item is not found in basket
    }
}// end of addItem
console.log('basket is now', basket);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('basket is now',basket);

//Create a function called listItems. It should:

//loop over the items in the basket array
//console.log each individual item on a new line
//console.log('Question 1: if item is added return true', addItem('test')) //testing to see if code works properly

function listItems(){ //start of listitems
    for(let i = 0; i < basket.length; i++){ // loop to list items in list
        console.log(basket[item])
    }
}//end of listItem
listItems()

//Create a function called empty. It should:
//reset the basket to an empty array

function empty(){
    basket = [];
    return basket

}

empty()

console.log(basket)

