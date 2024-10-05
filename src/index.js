function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "40b5c70t36fead3dof40b74ca69cca04";
  let prompt = `User instructions: Generate the name of a Spanish dish with: ${instructionsInput.value}. Also add the working link after a <br> element. Sign with 'SheCodes AI' inside a <strong> element at the end of your answer using <br><br>.`;
  let context =
    "You are an expert in Spanish cuisine so with the ingredients given to you you are going to give the name of a Spanish dish you can do using those ingredients. Make sure to use the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateRecipe);
