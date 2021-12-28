async function callBackendApi() {
  // Ajax Logic :: HTTP, AJAX, JSON
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const res = await fetch(url);
  const list = await res.json();

  const parent = document.querySelector("#parent");

  for (let item of list) {
    const prevChilds = parent.innerHTML;
    const newChild = `<p>${item.title}</p>`;

    parent.innerHTML = newChild + prevChilds;
  }
}
