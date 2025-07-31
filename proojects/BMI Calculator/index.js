const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give Valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give Valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * weight) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi === 18.6) {
      weightGides.innerHTML = `<p>Under weight : less than ${bmi} </p>`;
    } else if (bmi === 18.6 || bmi <= 24.9) {
      weightGides.innerHTML = `<p>Normal Ranges : ${bmi} </p>`;
    } else {
      weightGides.innerHTML = `<p>OverWeight : Greater than ${bmi} </p>`;
    }
  }
});
