let forAramaListe=[]

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

.then((res)=>res.json())

.then((datA)=>

{forAramaListe=datA
menü(forAramaListe.meals)

})


function menü(data) {
    console.log(data);
    let liste=document.querySelector(".food")
    
     liste.innerHTML="";
    
    
    data.forEach((w)=>{
    liste.innerHTML += ` <div class="col-md-3">   <div class="card">
      <img src=${w.strMealThumb} class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">${w.strMeal }</h5>
        
        
      </div>
    </div></div>  `;
    
    })
    }

    document.getElementById("ara").oninput=(harf)=>{
        console.log(harf.target.value);
        
        let data2= forAramaListe.meals.filter((w)=>w.strMeal.toLowerCase().includes(harf.target.value.toLowerCase()))
        console.log(data2);
        menü(data2)
        
}


const ülkeler = document.querySelectorAll(".ülkeler")


for (let i of ülkeler) {

    i.onclick = (e) => {
        console.log(e.target.className);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=turkish`)
        yemek_check(e.target.className);

    }
}

function yemek_check(country) {

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
        .then((res) => res.json())

        .then((datA) => {
            forAramaListe = datA
            console.log(forAramaListe);
            menü(forAramaListe.meals)

        })
}
