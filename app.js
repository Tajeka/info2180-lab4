document.getElementById("searchButton").addEventListener("click", function () {
    var userInput = document.querySelector("input").value.trim();
    // sanitize
    var searchQuery = encodeURIComponent(userInput);
    // Make an AJAX request using the fetch API
    fetch("superheroes.php?query=" + searchQuery)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((superheroes) => {
        // Display the result in the "result" div
        displayResult(superheroes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  
  function displayResult(superheroes) {
    // Get the "result" div element
    var resultDiv = document.getElementById("result");
  
    resultDiv.innerHTML = "";
  
    resultDiv.innerHTML = `
      <div>
        <h2>RESULT</h2>
        <hr>
      </div>
    `;
  
    // Check if any superheroes were found
    if (superheroes.length === 0) {
      resultDiv.innerHTML += `
        <div>
          <p class="not-found" >SUPERHERO NOT FOUND</p>
        </div>
      `;
    } else if (superheroes.length === 1) {
      // Display details for a single superhero
      var superhero = superheroes[0];
      resultDiv.innerHTML += `
        <div>
          <h3>${superhero.alias}</h3>
          <h4>${superhero.name}</h4>
          <p>${superhero.biography}</p>
        </div>
      `;
    } else {
      // Display a list of superheroes
      var list = document.createElement("ul");
      superheroes.forEach((superhero) => {
        var listItem = document.createElement("li");
        listItem.textContent = superhero.name;
        list.appendChild(listItem);
      });
      resultDiv.appendChild(list);
    }
  }