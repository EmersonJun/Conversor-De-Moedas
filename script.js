const convertbutton = document.querySelector(".convertbutton");
const currencyselect = document.querySelector(".currency-select");

function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert");
    const currencyvalueconverted = document.querySelector(".currency-value");

    const dolartoday = 5.2;
    const eurotoday = 6.2;


    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue);

    if (currencyselect.value === "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday);
    }

    if (currencyselect.value === "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday);
    }

function changecurrency() {
    const currencyname = document.getElementById("currency-name");
    const currencyimage = document.querySelector(".currency-img");

    if (currencyselect.value === "dolar") {
        currencyname.innerHTML = "Dolar";
        currencyimage.src = "./assets/img/usa.png";
    }

    if (currencyselect.value === "euro") {
        currencyname.innerHTML = "Euro";
        currencyimage.src = "./assets/img/europa.png";
    }
}
    convertvalues();
}

currencyselect.addEventListener("change", changecurrency);
convertbutton.addEventListener("click", convertvalues);
