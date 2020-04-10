const increment = document.getElementById("increment");

const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const number = document.getElementById("number");

var counter = 0;
number.innerHTML = counter;

increment.addEventListener("click", function () {
  axios
    .get("/increment")
    .then(function (response) {
      console.log(response.data);
      number.innerHTML = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
});

decrement.addEventListener("click", function () {
  axios
    .get("/decrement")
    .then(function (response) {
      console.log(response.data);
      number.innerHTML = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
});

reset.addEventListener("click", function () {
  axios
    .get("/reset")
    .then(function (response) {
      console.log(response.data);
      number.innerHTML = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
});
