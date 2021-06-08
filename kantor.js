{
    const eurElement = document.querySelector(".js-textEur");
    const usdElement = document.querySelector(".js-textUsd");
    const gbpElement = document.querySelector(".js-textGbp");
    const btcElement = document.querySelector(".js-textBtc");
    const chfElement = document.querySelector(".js-textChf");

    const onFromElementSubmit = (event) => {
        event.preventDefault();
        const formFirst = document.querySelector(".js-form__fieldFirst");
        const amount = +formFirst.value;
        const eur = amount / 4.5490;
        const usd = amount / 3.7618;
        const gbp = amount / 5.2310;
        const btc = amount / 201159.24;
        const chf = amount / 4.1095;
        eurElement.innerText = eur.toFixed(2) + " €";
        usdElement.innerText = usd.toFixed(2) + " $";
        gbpElement.innerText = gbp.toFixed(2) + " £";
        btcElement.innerText = btc.toFixed(2) + " ₿";
        chfElement.innerText = chf.toFixed(2) + " ₣";

    };


    const OnButtonClean = () => {
        eurElement.innerText = ("");
        usdElement.innerText = ("");
        gbpElement.innerText = ("");
        btcElement.innerText = ("");
        chfElement.innerText = ("");

    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        const buttonCleanElement = document.querySelector(".js-buttonClean");
        formElement.addEventListener("submit", onFromElementSubmit);
        buttonCleanElement.addEventListener("click", OnButtonClean);

    };

    init();
}