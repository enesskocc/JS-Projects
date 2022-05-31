const rastgele = Math.ceil(Math.random()*20)
let hak= 5;
let deneme=0;

while(hak>0){
    const tahmin= +prompt("0-20 arasında bir sayı giriniz")
      hak--;
    
     deneme++;
      if (tahmin==rastgele) {
      
       console.log(`Tebrikler ${deneme} . denemede bildiniz 🥳`);
    break;
    
    
    
      }else if(tahmin<rastgele) {
     console.log(`Dikkat ${hak} hakkınız kaldı`);
     console.log("ARTTIR 📈");
    
    }else {
    console.log(`Dikkat ${hak} hakkınız kaldı`);
       console.log("AZALT📉");
      }}
    if(hak==0)
      console.log("oyunu kaybettiniz 😞 ");