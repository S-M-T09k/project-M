//*onlyNumbers
document.querySelectorAll(".onlyNumbers").forEach(element => {
  element.addEventListener("keypress", evt => {
    if (evt.key === "=") {
      return;
    }
    else if (evt.which < 48 || evt.which > 53) {
      evt.preventDefault();
    };
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // event.preventDefault();
  console.log(event);
  const name = document.querySelector('form input[type="text"]').value;
  const index = document.querySelector('form .onlyNumbers').value;
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("index", index);
  console.log(sessionStorage);
});