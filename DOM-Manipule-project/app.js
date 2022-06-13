const res=document.querySelector(".resim");

res.onmouseover=()=>{
res.src="./img/aslan1.jpeg"

}

res.onmouseout=()=>{
    res.src="./img/aslan2.jpeg"
    
}

const baglat = document.querySelector(".btn-2");

baglat.onclick=()=>{
    res.src = "./img/telbagla.gif"
    x.pause();
}

const konus = document.querySelector(".btn-3");

konus.onclick=()=>{
    res.src="./img/telefon.gif"
}

const ara = document.querySelector(".btn-1");
var x = document.querySelector(".ses");

ara.onclick=()=>{
    res.src="./img/img.gif"
    x.play();
    x.volume=0.003
}

const check = document.querySelector(".checkbox");
const text = document.querySelector(".textbox");

text.onkeyup=()=>{
  if(check.checked)
  { text.value= text.value.toUpperCase() }  


}


//* ekle butonuna basildigi zaman inputa girilen degerler benim ul listeme eklensin.

document.querySelector(".ekle").onclick=()=>{

 const liste =   document.querySelector(".liste");
 const language =   document.querySelector(".language");

liste.innerHTML= liste.innerHTML+`<li> ${language.value} </li>`
language.value="";

}


// ! Yukaridakinin Uzun hali
// yeni girilen satiri saklamak icin bir li olusturduk.
  // const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  // const textNode = document.createTextNode(satir.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  // yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // liste.appendChild(yeniLi);

//  * Sil botunu tiklandiginda

document.querySelector(".sil").onclick=()=>{

    const liste =   document.querySelector(".liste"); 

    liste.removeChild(liste.lastElementChild);
}


//* Enter ile

document.querySelector(".language").onkeydown=(tuslar)=>{
    console.log(tuslar);
  
    //*eğer enter=13 tuşuna basıldıysa
    if (tuslar.keyCode === 13) {
      document.querySelector(".ekle").click();
    }
  
    //*eğer delete =46 tuşuna basılırsa sil butonu tetiklensin

    if (tuslar.keyCode === 46) {
      document.querySelector(".sil").click();
    }
  }

//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const liste = document.querySelector(".liste"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// inputDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.

//!kısa yol

liste.innerHTML = `<h1> ${"Programming Languages"}</h1>` +liste.innerHTML;





