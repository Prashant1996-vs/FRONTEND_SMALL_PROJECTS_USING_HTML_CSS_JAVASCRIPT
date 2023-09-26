let quote = document.getElementById("quote");
let sign = document.getElementById("sign");
function getQuote() {
  let url = "https://type.fit/api/quotes";
  fetch(url)
    .then((dataJson) => {
      return dataJson.json();
    })
    .then((data) => {
      let i = Math.floor(Math.random() * data.length);
      quote.innerHTML = data[i].text;
      sign.innerHTML = data[i].author;
    });
}
window.addEventListener("load", getQuote);
