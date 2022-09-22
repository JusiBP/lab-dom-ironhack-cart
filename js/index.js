// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;


  let subtotalValue = priceValue * quantityValue;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;
  
  console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let totalValue = 0
  for (let i = 0 ; i < products.length ; i++){
    let product = document.getElementsByClassName('product')[i];
    updateSubtotal(product);

    totalValue += Number(updateSubtotal(product).innerHTML)
    console.log(totalValue);
  }


  // ITERATION 3
  //... your code goes here
  document.querySelector('h2 span').innerHTML = totalValue;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const removeButt1 = document.getElementsByClassName('btn-remove')[0];
  const removeButt2 = document.getElementsByClassName('btn-remove')[1];
  removeButt1.addEventListener('click', removeProduct);
  removeButt2.addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
