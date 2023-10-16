Promise.all([
  fetch(`https://api.github.com/users`).then((response) => response.json()),
  fetch(`https://fakestoreapi.com/products`).then((response) =>
    response.json()
  ),
])
  .then((results) => {
    return results.filter((result) => result);
  })
  .then((results) => {
    console.log(results);
  });
