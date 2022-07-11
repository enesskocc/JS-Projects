const container = document.querySelector(".container");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list")

let loto = [];
let lotos = [];

button.onclick = () => {
  list.innerHTML = "" // ekranda 3 tane deger olmasini sagliyor.
  let input = document.querySelector("#input").value;
  for (let i = 0; i < input; i++) {
    while (loto.length < 8) {
      let rastgele = Math.floor(Math.random() * 91);
      if (!loto.includes(rastgele)) {
        loto.push(rastgele);
      }
    }
    loto.sort(function (a, b) {
      return a - b;
    }); // kücüktrn büyege siraladik!
    console.log(lotos);
    lotos.push(loto.join("-"));
    loto = [] // diger diziler ile ayni olmasini engelliyor.
  }
  showonscreen(); // ekranda göstermek icin fonksiyon yaz!
};

showonscreen = () => {
    lotos.map((e)=>{document.querySelector("#list").innerHTML += `<li>${e} </li>`;})
    lotos = []
  
};
