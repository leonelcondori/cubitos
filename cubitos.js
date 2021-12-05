var price = document.getElementById('price').value
console.log(price);

var total = 0;


calculate.addEventListener("click", (e) => {
    e.preventDefault();
    const price = document.getElementById('price').value;
    const saleQuantity = document.getElementById('saleQuantity').value;
    const salePrice = document.getElementById('salePrice').value;
    const quantity = document.getElementById('quantity').value;



    console.log(price, saleQuantity, salePrice, quantity);
    
    const noSale = +quantity % saleQuantity;
    const onSale = parseInt(+quantity / +saleQuantity);
    const total = +salePrice * onSale + +price * noSale;
    document.getElementById('total').innerHTML = `Total: $${total}`
});