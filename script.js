//------------------ Slot Machine Code ---------------------------

const icons = ['🍒', '🍋', '🍉', '🍇', '🍓', '🍊'];
// 0 cherries, 1 lemons, 2 watermelons, 3 grapes, 4 strawberries, 5 oranges, 6 blank
const betInput = document.getElementById('betInput');
let reel1 = document.getElementById('reel1');
let reel2 = document.getElementById('reel2');
let reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const spinResult = document.getElementById('spinResult');

spinButton.addEventListener('click', () => {
  let bet = Number(betInput.value); // Convert input value to a number

  if (bet <= 0 || bet == undefined || isNaN(bet)) {
    alert("Please place a bet!"); // Alert if the bet is not a valid number
    return; 
  } else {
    const num1 = Math.floor(Math.random() * icons.length) ; // Random number between 0 and 6    
    const num2 = Math.floor(Math.random() * icons.length); // Random number between 0 and 6    
    const num3= Math.floor(Math.random() * icons.length); // Random number between 0 and 6
    reel1.textContent = icons[num1]; // Display the random icon in the first reel
    reel2.textContent = icons[num2]; // Display the random icon in the second reel
    reel3.textContent = icons[num3]; // Display the random icon in the third reel      
    // very simple scoring element
    if ( num1 == num2 && num2 == num3) { // Check if all three numbers are the same
      //spinResult.style.display = 'block'; // Show the result element
      bet = bet * 100; // Multiply the bet by 100 for the win
      spinResult.textContent = `You Win $${bet}!`; // Display the win message
    }
    
    //console.log(num1, num2, num3, bet); // Log the random numbers for debugging
  }
});




















































  // referecne
  /*
  document.getElementById('spinButton').addEventListener('click', spin);

function spin() {
    const symbols = ['🍒', '🍋', '🍉', '🍇', '🍓', '🍊'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
}
  */