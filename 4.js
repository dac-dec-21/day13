// window.onload = () => getAllMessages();

async function getAllMessages() {
  const inputValue = document.querySelector("#input").value;
  const url = `https://jsonplaceholder.typicode.com/posts?_limit=${inputValue}`;

  const res = await fetch(url);
  const result = await res.json();

  for (let item of result) {
    const parent = document.querySelector("#parent");

    const childs = parent.innerHTML;
    const newChild = `<p>${item.title}</p>`;

    parent.innerHTML = newChild + childs;
  }
}
