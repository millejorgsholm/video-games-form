const form = document.querySelector("form");
form.elements.title.focus();
// form.elements.title.addEventListener("click", () => {
//   form.elements.title.blur();
// });

function get() {
  fetch("https://frontendspring21-b357.restdb.io/rest/videogames", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "60740c1ef592f7113340f019",
      "cache-control": "no-cache",
    },
  })
    .then(e => e.json())
    .then(data => data.forEach(showGame));
}

function post() {
  const data = {
    title: "Minecraft",
    developer: "Mojang AB",
    genre: "Platform",
    price: "270",
    description: "dette er et spil",
    release_date: Date.now(),
    age_limit: 7,
  };

  const postData = JSON.stringify(data);
  fetch("https://frontendspring21-b357.restdb.io/rest/videogames", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "60740c1ef592f7113340f019",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then(res => res.json())
    .then(data => showGame(data));
}

function deleteGame(id) {
  fetch("https://frontendspring21-b357.restdb.io/rest/videogames" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "60740c1ef592f7113340f019",
      "cache-control": "no-cache",
    },
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

function showGame(game) {
  console.log(game);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h2").textContent = game.title;
  clone.querySelector(".age_limit span").textContent = game.age_limit;
  clone.querySelector(".developer span").textContent = game.developer;
  clone.querySelector(".release_date span").textContent = game.release_date;
  clone.querySelector(".genre span").textContent = game.genre;
  clone.querySelector(".price span").textContent = game.price;
  clone.querySelector(".description span").textContent = game.description;
  document.querySelector("main").appendChild(copy);
}

get();
