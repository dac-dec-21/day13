async function weatherReport() {
  const city = document.querySelector("#input").value;
  const appid = "7023923dd26a725da995c75b65864de5";
  const unit = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=${unit}`;

  const response = await fetch(url);
  const result = await response.json();

  console.log(result.main.temp);

  const parent = document.querySelector("#parent");
  const childs = parent.innerHTML;
  const newchild = `<h1>${city} ${result.main.temp}</h1>`;

  parent.innerHTML = newchild + childs;
}
