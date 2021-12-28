async function callBackendApi() {
  // Ajax Logic :: HTTP, AJAX, JSON
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const res = await fetch(url);
  const list = await res.json();

  console.log(list);
}
