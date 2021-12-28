function callBackendApi() {
  // Ajax Logic
  const url = `https://jsonplaceholder.typicode.com/posts`;

  // AJAX  Intermediate
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
