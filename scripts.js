const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectOne = document.querySelector(".currency-select-one");

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const cunrrencyValueToConvert = document.querySelector(".value-to-convert");
  const cunrrencyValueConverted = document.querySelector(".value-convert");

  console.log(currencySelect.value, currencySelectOne);

  const url = "https://economia.awesomeapi.com.br/json/last/" + currencySelect.value

  let dados = await fetch(url).then(response => {
    return response.json();
  })
 

  if (currencySelect.value == "USD") {
    const valorMoeda = dados.USDBRL.low
    cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",      
    }).format(inputCurrencyValue / valorMoeda);
  }
  
  if (currencySelect.value == "USD") {
    const valorMoeda = dados.USDBRL.low
    cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",      
    }).format(inputCurrencyValue / valorMoeda);
  }
  if (currencySelect.value == "EUR") {
    const valorMoeda = dados.EURBRL.low
    cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / valorMoeda);
  }
  if (currencySelect.value == "GBP") {
    const valorMoeda = dados.GBPBRL.low
    cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / valorMoeda);
  }
  if (currencySelect.value == "BTC") {
    const valorMoeda = dados.BTCBRL.low
    cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputCurrencyValue / valorMoeda);
  }

  cunrrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelectOne.value == "USD") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }
  if ((currencySelect.value == "USD")) {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "EUR") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }
  if (currencySelect.value == "GBP") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra 1.png";
  }
  if (currencySelect.value == "BTC") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin 1.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
