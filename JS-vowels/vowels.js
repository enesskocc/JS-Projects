const button = document.querySelector(".button");
const container = document.querySelector(".container");

let vowels = ["a", "e", "i", "ı", "o", "ö", "u", "ü"];

let counter = 0;

button.onclick = () => {
  const deger = document.querySelector("#text").value;
  const yenideger = deger.split("");
  console.log(deger);
  console.log(yenideger);
  for (let i of yenideger) {
    if (vowels.includes(i)) {
      counter++;
     
    }
  }
  const sonuc = document.querySelector(".sonucp");
  sonuc.innerHTML = `There are ${counter} vowels in <span>${deger}</span>`;
  
};


// button.onclick = () => {
//   const deger = document.querySelector("#text").value;
//   const yenideger = deger.split("");
//   console.log(deger);
//   console.log(yenideger);
//   yenideger.map((i) => {
//     if (vowels.includes(i)) {
//       counter++;
//     }
//   });
//   console.log(counter);
//   const sonuc = document.querySelector(".sonucp");
//   sonuc.innerHTML = `There are ${counter} vowels in ${deger}`;
// };
