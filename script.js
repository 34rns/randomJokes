(() => {
  const h1Elm = document.querySelector("#h1");
  const btnElm = document.querySelector(".btn");
  const h1CateElm = document.querySelector(".category");
  const imgElm = document.querySelector("img");
  function pickRandomCatagories(dataArr) {
    let indexA = Math.floor(Math.random() * dataArr.length);
    return indexA;
  }

  btnElm.addEventListener("click", (e) => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((cateResponse) => cateResponse.json())
      .then((data) => {
        const index = pickRandomCatagories(data);
        const category = data[index];
        return fetch(
          `https://api.chucknorris.io/jokes/random?category=${category}`
        );
      })
      .then((jokeResponse) => jokeResponse.json())
      .then((joke) => {
        const icon = joke.icon_url;
        h1Elm.textContent = joke.value;
        h1CateElm.textContent = joke.categories[0];
      })
      .catch((err) => console.log(err));
  });
})();
