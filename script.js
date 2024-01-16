const submit = document.getElementById("submit");
var meow = new Audio("audio/cat sound.mp3");
var results = [];
const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
var diceNum;
var rollNum;

function changeMode() {
  //alternate between light and dark mode
  var element = document.body;
  var modeIcon = document.getElementById("changeIcon");

  element.classList.toggle("light-mode");
  if (element.classList.contains("light-mode")) {
    modeIcon.style.color = "#2b2d42";
  } else {
    modeIcon.style.color = "#edf2f4";
  }
}

function start() {
  meow.play();
  diceNum = parseInt(dice.value);
  rollNum = parseInt(roll.value);
  if (rollNum == 0) {
    window.alert(
      "Please change your dice roll quantity into an integer greater than 0!"
    );
  } else {
    results = [];
    for (let x = 0; x < rollNum; x++) {
      //rolls
      let sum = 0;
      for (let y = 0; y < diceNum; y++) {
        const result = Math.floor(Math.random() * 6) + 1; //stimulate the result of one dice roll
        results.push(result); //append roll value to arr
      }
    }
    console.log(results);
    console.log(calculateMean());
    console.log(calculateMedian());
    console.log(calculateMode());
  }

  function calculateMean() {
    let sum = 0;
    for (let i = 0; i < results.length; i++) {
      sum += results[i];
    }
    let mean = sum / results.length;
    return mean;
  }
}

function calculateMode() {
  hash = {}; //empty object to use as hash table to store each number's frequency
  results.forEach(function (e) {
    if (hash[e] === undefined) {
      hash[e] = 0;
    }
    hash[e] += 1; //increment by 1 if we come across a common value
  });
  return hash[2].counts;
}

function calculateMedian() {
  let temp = results;
  temp.sort();
  if (results % 2 == 1) {
    let middleIndex = Math.floor(results.length / 2);
    return temp[middleIndex];
  } else {
    let index = results.length / 2 - 1;
    let median = (results[index] + results[index + 1]) / 2;
    return median;
  }
}

document.querySelector("form").addEventListener("submit", function (x) {
  x.preventDefault(); //prevent submit form to reload site
});
