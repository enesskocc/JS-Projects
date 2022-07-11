const select = document.querySelector(".form-select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const hesaplaBtn = document.querySelector(".btn-dark");

let oran = 0;
hesaplaBtn.onclick = (bilgiler) => {
  //*form işlemlerinde formun submit inin default kendi hareketlerini yapmaması, benim istediklerimi yapması için e.preventDefault() komutunu kullanırız

  bilgiler.preventDefault();

  if (select.value === "Konut Kredisi") {
    oran = 1.29;
  } else if (select.value === "Ihtiyac Kredisi") {
    oran = 1.99;
  } else if (select.value === "Arac Kredisi") {
    oran = 1.79;
  }

  const faiz = oran / 100;
  taksit =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);

  const sonuclar = document.querySelector(".sonuclar");

  sonuclar.innerHTML = `
<h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>loan amount</th>
      <td>${tutar.value} ₺</td>
      <th>Loan Type</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Maturity</th>
      <td>${vade.value}</td>
      <th>rate of interest</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Total amount</th>
      <td>${(taksit * vade.value).toFixed(2)} ₺</td>
      <th>Installment Amount</th>
      <td>${taksit.toFixed(2)} ₺</td>
    </tr>
  </tbody>
</table>
`
};