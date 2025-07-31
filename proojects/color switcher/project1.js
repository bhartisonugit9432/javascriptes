const buttons = document.querySelectorAll(".button");

const bodyItem = document.querySelector("body");

buttons.forEach(function (button) {
  //   console.log(button);

  button.addEventListener("click", function (e) {
    // console.log(e);

    // console.log(e.target);

    if (e.target.id === "gray") {
      bodyItem.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      bodyItem.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      bodyItem.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      bodyItem.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      bodyItem.style.backgroundColor = e.target.id;
    }
  });
});
