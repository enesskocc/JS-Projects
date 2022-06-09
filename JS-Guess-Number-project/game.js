const tahmin = document.querySelector(".guess");
const rastgele = Math.ceil(Math.random() * 20);
const cek = document.querySelector(".check");
const start = document.querySelector(".msg");
const skor = document.querySelector(".score");
const topskor = document.querySelector(".top-score");
const numara = document.querySelector(".number");
const tekrar = document.querySelector(".again");
const badi = document.querySelector("body");

let skorpc = 10;
let enyüksekskor = 0;

cek.onclick = () => {
  // console.log("merhaba");
  // console.log(rastgele);
  while (skorpc > 0) {
    if (tahmin.value == rastgele) {
      const bildiniz = "Congratulations!";
      start.textContent = bildiniz;
      skor.textContent=skorpc;
      topskor.textContent=enyüksekskor
        numara.textContent=rastgele
      document.querySelector("body").style.backgroundColor = "green";
      break;
    } else if (tahmin.value < rastgele) {
      const arttir = "Increase the Number!";
      start.textContent = arttir;
      skorpc--;
      enyüksekskor++;
      skor.textContent=skorpc;
      topskor.textContent=enyüksekskor

      document.querySelector("body").style.backgroundColor = "red";
      break;
    } else {
      const azalt = "Decrease the Number!";
      start.textContent = azalt;
      skorpc--;
      enyüksekskor++;
      skor.textContent=skorpc;
      topskor.textContent=enyüksekskor

      document.querySelector("body").style.backgroundColor = "red";
      break;
    }
  }

  if (skorpc == 0) {
    const kaybettiniz = "You lost!";
    start.textContent = kaybettiniz;
    document.querySelector("body").style.backgroundColor = "red";
  }
};

// tekrar.onclick = () => {
//   window.onload
// }

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadtButton.addEventListener("click", reload, false);
