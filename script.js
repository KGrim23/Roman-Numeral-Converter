const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("number");
const outputResult = document.getElementById("output");

//events listener for errors//
convertBtn.addEventListener("click", () => {
  let number = parseInt(userInput.value);
  if (isNaN(number)) {
    output.textContent = "Please enter a valid number!";
  }
  else if (number < 1) {
  output.textContent = "Please enter a number greater than or equal to 1!";
  }
  else if (number >= 4000) {
  output.textContent = "Please enter a number less than or equal to 3999!";
  }
  else { //correct result output//
  const romanNumeralsResult = convertToRoman(number);
  output.textContent = romanNumeralsResult;
    }

  });

//function for converter//
function convertToRoman(num) {
const romanNumeralResult = '';

const romanNumerals = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

for (var i = 0; i < romanNumerals.length; i++) {
  if (num >= romanNumerals[i][0]) {
  return romanNumerals[i][1] + convertToRoman(num - romanNumerals[i][0]);
    }
  } 
return romanNumeralResult;
}
/*key event listener//
document.getElementById('number').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
    output.textContent = romanNumeralsResult;
    }
});*/


//checks//
console.log(convertToRoman(3900))













  


