console.log("Ciao!");

dateElement = document.querySelector("#date");

today = new Date();

dateElement.innerText = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });