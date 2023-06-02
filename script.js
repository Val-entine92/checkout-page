'use strict'
const $ =document.querySelector.bind(document);

var slideIndex=1; 
changeSlide(slideIndex);

function showSlide(){
    let slide = document.getElementsByClassName("imageSlide");
    let button=document.querySelector("button");
    let i;
    for (i=0;i<slide.length;i++){
        slide[i].style.display='none';
    }
        slide[slideIndex-1].style.display='block';
    for (i=0;i<button.length;i++){
        button[i].classList.remove("active");
    }
        
}

async function productInfo(){
    await fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(product=>(displayInfo(product)));
            function displayInfo(product){
                console.table(product);
                let item =product[Math.ceil(Math.random()*product.length)];
                let category= item.category;
                let productName=item.title;
                let image=item.image;
                let price=item.price;
                console.log(category,productName);
                $(".brand").innerText=category;
                $(".productName").innerText=productName;
                $(".image").src=image;
                $(".price").innerText=price + '$';
                }
}

$(".next").addEventListener('click',(event)=>{
    event.preventDefault()
    changeSlide()
    }
)
function submit() {
    let cardTypeInput = document.querySelector('.checkout-container input[placeholder="Card Type"]');
    let cardNumberInput = document.querySelector('.checkout-container input[placeholder="Card Number"]');
    let cardholderNameInput = document.querySelector('.checkout-container input[placeholder="Cardholder Name"]');
    let expiryDateInput = document.querySelector('.checkout-container input[placeholder="Expiry Date"]');
    let cvvInput = document.querySelector('.checkout-container input[placeholder="CVV"]');

    if (!cardTypeInput.value || !cardNumberInput.value || !cardholderNameInput.value || !expiryDateInput.value || !cvvInput.value) {
        $(".message").innerHTML = "Please enter a value for all fields";
        return;
    }
}

function changeSlide(){
    productInfo();
    showSlide();
}