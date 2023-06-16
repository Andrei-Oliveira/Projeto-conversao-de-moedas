
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
 function convertValues() {
    const inputCurrencyValue = document.querySelector (".input-currency").value
    const cunrrencyValueToConvert= document.querySelector(".value-to-convert")
    const cunrrencyValueConverted= document.querySelector(".value-convert")

    console.log (currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7
    const bitcoinToday = 123.332
    
  

    if (currencySelect.value == "dolar"){
      cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(inputCurrencyValue / dolarToday)

    }
  if (currencySelect.value == "euro"){
  cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue / euroToday)

}
  if (currencySelect.value == "libra"){
  cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue / libraToday)


}
  if (currencySelect.value == "bitcoin"){
  cunrrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue / bitcoinToday)
}






    cunrrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)

  
 }

 function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
 

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    
  }

}



 currencySelect.addEventListener("change", changeCurrency)
 convertButton.addEventListener("click",convertValues)



  // function changeCurrency (){
 
    

  // if (currencySelect.value == "euro") {
  //  currencyName.innerHTML = "Euro"
  //   }
  //   if (currencySelect.value == "libra") {
  //    currencyName.innerHTML = "Libra"
  //     }
  //     if (currencySelect.value == "bitcoin") {
  //      currencyName.innerHTML = "Bitcoin"
  //       } 
  // }
