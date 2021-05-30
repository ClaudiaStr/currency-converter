let formElement = document.querySelector(".js-form");
let formFirst = document.querySelector(".js-form__fieldFirst");
let buttonCountElement = document.querySelector(".js-buttonCount");
let buttonCleanElement = document.querySelector(".js-buttonClean");
let eurElement = document.querySelector(".js-textEur");
let usdElement = document.querySelector(".js-textUsd");
let gbpElement = document.querySelector(".js-textGbp");
let btcElement = document.querySelector(".js-textBtc");
let chfElement = document.querySelector(".js-textChf");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let first = +formFirst.value;
    let eur = first / 4.5490;	
    let usd = first / 3.7618;
    let gbp = first / 5.2310;
    let btc = first / 201159.24;
    let chf = first / 4.1095;
    
    eurElement.innerText = eur.toFixed(2) + " €";
    usdElement.innerText = usd.toFixed(2) + " $";
    gbpElement.innerText = gbp.toFixed(2) + " £";
    btcElement.innerText = btc.toFixed(4) + " ₿";
    chfElement.innerText = chf.toFixed(2) + " ₣";
});


buttonCleanElement.addEventListener("click", () => {
    eurElement.innerText = ("");
    usdElement.innerText = ("");
    gbpElement.innerText = ("");
    btcElement.innerText = ("");
    chfElement.innerText = ("");
});