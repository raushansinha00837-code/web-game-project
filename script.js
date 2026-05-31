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
  for(let patter of winningcombinations){
    let one1= boxes[patter[0]].innerText;
    let one2= boxes[patter[1]].innerText;
    let one3= boxes[patter[2]].innerText;
    if(one1 !== "" && one1 === one2 && one2 === one3){
      alert(`${one1} wins!`);
      dissableboxes();
      return;
    }
  }
}
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
const resetgame = () => {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
}
resetbtn.addEventListener("click", resetgame);
