let h1 =document.querySelector(".title");
h1.addEventListener("mouseover", function() {
  h1.style.color = "rgb(70,81,48)";
});
h1.addEventListener("mouseout", function() {
  h1.style.color = "rgb(123, 74, 74)";
});
let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset");
let currentplayer = "X";
const winningcombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const dissableboxes= ()=> {
  boxes.forEach(box => {box.disabled = true;});

}
const checkwin = () => {
  for (const pattern of winningcombinations) {
    const one1 = boxes[pattern[0]].innerText;
    const one2 = boxes[pattern[1]].innerText;
    const one3 = boxes[pattern[2]].innerText;
    if (one1 !== "" && one1 === one2 && one2 === one3) {
      alert(`${one1} wins!`);
      dissableboxes();
      return;
    }
  }
};
boxes.forEach(box => {
  box.addEventListener("click", function() {
    if(currentplayer === "X"){
      box.innerText = "X";
      currentplayer = "O";
    } else {
      box.innerText = "O";
      currentplayer = "X";
    }
    box.disabled = true;
    checkwin(); 
  });
});
function resetgame() {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
}
function showName() {
  let username = document.getElementById("name").value;
  document.getElementById("result").innerText = `WELCOME, ${username}!`;
}
function celebrate() {
  let name = document.getElementById("name").value;
  saveName(name);
 document.getElementById("result").innerText = `Congratulations, ${name},have a good day\n Enjoy every moment and make today unforgettable!`;
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
 });
 

  
}
function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById("result").innerHTML = `\n        <b>Latitude:</b> ${lat}<br>\n        <b>Longitude:</b> ${lon}<br><br>\n\n        <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">\n          📍 Open in Google Maps\n        </a>\n        <br><br>\n      `;
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => { window.saveLocation(lat, lon, data.display_name);
          document.getElementById("result").innerHTML += `\n            <b>Address:</b><br>\n            ${data.display_name}\n          `;
        })
        .catch(() => {
          document.getElementById("result").innerHTML += "<br><b>Address:</b> Not found.";
        });
    },
    () => { alert("Location permission denied."); }
  );
}