const eigthtGb= document.getElementById('eight-gb');
const sixteenGb= document.getElementById('sixteen-gb');
const freeCharge = document.getElementById ('free-shipping');
const sixteenGbValue=document.getElementById('sixteenGb');
const bestPrice = document.getElementById('fixedPrice');
const totalPrice= document.getElementById ('totalPrice');


eigthtGb.addEventListener('click',function(){
    freeCharge.innerText= '0';
    updateTotalPrice();
})
sixteenGb.addEventListener('click',function(){
    freeCharge.innerText= '180';
    updateTotalPrice();
})
document.getElementById('ssd256').addEventListener('click',function(){
    extraStorage.innerText= '0';
    updateTotalPrice();
})

document.getElementById('ssd512').addEventListener('click',function(){
    extraStorage.innerText= '100';
    updateTotalPrice();
})

document.getElementById('ssd1Tb').addEventListener('click',function(){
    extraStorage.innerText= '180';
    updateTotalPrice();
})


function updateTotalPrice(){
 const productPriceValue= parseInt(freeCharge.innerText);
 const bestAmount = parseInt(bestPrice.innerText);
 const storagePrice = parseInt(extraStorage.innerText);
 const totalAmount= productPriceValue+bestAmount+storagePrice;
 totalPrice.innerText=totalAmount;
}





