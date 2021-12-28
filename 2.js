async function callBackendApi() {
  // Ajax Logic :: HTTP, AJAX, JSON
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const res = await fetch(url);
  const list = await res.json();

  for (let item of list) {
    // console.log(item);
    console.log(item.title);
  }
}
