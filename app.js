document.getElementById("searchButton").addEventListener("click", function () {
    // Make an AJAX request using the fetch API
    fetch("superheroes.php")
      .then((response) => {
        return response.text();
      })
      .then((content) => {
        alert(content);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });