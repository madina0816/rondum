const elInput = document.getElementById ('input');
const elTitle = document.getElementById ('title');
const elBtn = document.getElementById ('btn');


elBtn.addEventListener('click', function() {
let inputValue = elInput . value;

   let randomNumber = Math.random() * inputValue ;

   let numberFloor = Math.floor(randomNumber);

   elTitle.textContent = numberFloor;
});
