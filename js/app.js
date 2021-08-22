const freeCharge = document.getElementById ('free-shipping');
const sixteenGbValue=document.getElementById('sixteenGb');
const bestPrice = document.getElementById('fixedPrice');
const totalPrice= document.getElementById ('totalPrice');
const grandTotalAmount = document.getElementById('totalGrandPrice');
;
function eighGBandDelivery(params) {
    
}

// For 8Gb and 16 GB
document.getElementById('eight-gb').addEventListener('click',function(){
    freeCharge.innerText= '0';
    updateTotalPrice();
})
document.getElementById('sixteen-gb').addEventListener('click',function(){
    freeCharge.innerText= '180';
    updateTotalPrice();
})

// For 256 to 1Tb Code
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

// For Delivery Code
document.getElementById('freeCharge').addEventListener('click',function(){
    freePrice.innerText = '0';
    updateTotalPrice();
})
document.getElementById('Takalagbe').addEventListener('click',function(){
    freePrice.innerText = '20';
    updateTotalPrice();
})

// Grand Total Calcualtion

function updateTotalPrice(){
 const productPriceValue= parseInt(freeCharge.innerText);
 const bestAmount = parseInt(bestPrice.innerText);
 const storagePrice = parseInt(extraStorage.innerText);
 const delvieryCharge= parseInt(freePrice.innerText);
 const totalAmount= productPriceValue+bestAmount+storagePrice+delvieryCharge;
 totalPrice.innerText=totalAmount;
 grandTotalAmount.innerText=totalAmount;
}






