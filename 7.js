window.onload = () => weatherReport("mumbai");

async function weatherReport() {
  const city = document.querySelector("#input").value || "mumbai";
  const appid = "7023923dd26a725da995c75b65864de5";
  const unit = "metric";

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${appid}&units=${unit}`;

  const response = await fetch(url);
  const result = await response.json();

  console.log(result);
  for (let item of result.list) {
    let date = new Date(item.dt * 1000);
    console.log(date, item.temp.day);

    const parent = document.querySelector("#parent");
    const childs = parent.innerHTML;
    const newChild = `<div style="margin-top: 8px">
                        <div style="font-size: 32px">${city} ${item.temp.day}</div>
                        <div>${date}</div>
                      </div>`;

    parent.innerHTML = newChild + childs;
  }
}
