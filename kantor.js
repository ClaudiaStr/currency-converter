{
    const formElement = document.querySelector(".js-form");
    const formFirst = document.querySelector(".js-form__fieldFirst");
    const buttonCleanElement = document.querySelector(".js-buttonClean");
    const eurElement = document.querySelector(".js-textEur");
    const usdElement = document.querySelector(".js-textUsd");
    const gbpElement = document.querySelector(".js-textGbp");
    const btcElement = document.querySelector(".js-textBtc");
    const chfElement = document.querySelector(".js-textChf");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const first = +formFirst.value;
        const eur = first / 4.5490;
        const usd = first / 3.7618;
        const gbp = first / 5.2310;
        const btc = first / 201159.24;
        const chf = first / 4.1095;

        eurElement.innerText = eur.toFixed(2) + " €";
        usdElement.innerText = usd.toFixed(2) + " $";
        gbpElement.innerText = gbp.toFixed(2) + " £";
        btcElement.innerText = btc.toFixed(2) + " ₿";
        chfElement.innerText = chf.toFixed(2) + " ₣";
    });


    buttonCleanElement.addEventListener("click", () => {
        eurElement.innerText = ("");
        usdElement.innerText = ("");
        gbpElement.innerText = ("");
        btcElement.innerText = ("");
        chfElement.innerText = ("");
    });
}