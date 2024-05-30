console.log("Ciao!")

dateElement = document.querySelector("#date")

today = new Date()

dateElement.innerText = today.toLocaleString()