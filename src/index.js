function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: "Recipe here",
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateRecipe);
