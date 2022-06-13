const inputici = document.querySelector("#todo-input");
const buton = document.querySelector("#todo-button");
const liste = document.querySelector("#todo-ul");
// const ikon = document.querySelector(".far");
// const ikon2 = document.querySelector(".fa-check");

buton.onclick = () => {
  liste.innerHTML =
    liste.innerHTML +
    ` <li><i class="fa-solid fa-check"></i><p>${inputici.value}</p>
    <i class="far fa-trash-alt"></i></li>`;
  inputici.value = "";
};

liste.onclick = (e) => {
  if (e.target.classList.contains("far")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("fa-check")) {
    if (e.target.parentElement.className!=("checked")) {
      e.target.parentElement.className = "checked";
    } else {
      e.target.parentElement.className=""
    }           
  }
};

inputici.onkeydown = (enter) => {
  if (enter.keyCode === 13) {
    buton.click();
  }
}
