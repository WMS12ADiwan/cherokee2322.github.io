// Array of words with their corresponding hints

let words = [
  // Each object represents a word and its hint
  
  {
    word: "Thiamine",
    hint: "Professionals suggest that patients with PDCD take this which is a cofactor for the pyruvate dehydrogenase complex."
  }, 
  {
    word: "PDHA1",
    hint: "The most common cause of PDCD is a mutation in this gene."
  },
  {
    word: "Lactic Acidosis",
    hint: "Associated with impaired pyruvate dehydrogenase activity, can result from various causes."
  }, 
  {
    word: "Phosphofructokinase-1",
    hint: "Acts as negative allosteric regulator of key glycolytic enzymes"
  },
  {
    word: "Isocitrate",
    hint: "This is oxidised to alpha-ketoglutarate a five-carbon molecule) which results in the release of carbon dioxide. One NADH molecule is formed."
  },
  {
    word: "Isocitrate Dehydrogenase",
    hint: "allosterically controlled enzyme."
  },
  {
    word: "Citric Acid Cycle",
    hint: "Central driver of cellular respiration."
  },
  {
    word: "Cytoplasm",
    hint: "In prokaryotic cells, the transition step occurs in the ______; in eukaryotic cells the pyruvates must first enter the mitochondria because the transition reaction and the citric acid cycle take place in the matrix of the mitochondria"
  },
  {
    word: "Pyruvate oxidation",
    hint: "Is the stage where pyruvate is oxidized and converted to acetyl CoA, producing NADH and releasing one molecule of CO2."
  },
  {
    word: "Isomerization",
    hint: "alpha-D-Glucose-6-phosphate is then converted into D-Fructose-6-phosphate (F-6-P) by the enzyme Phosphoglucoisomerase."
  },
  {
    word: "Nicotinamide adenine dinucleotide",
    hint: "Is a crucial coenzyme in metabolism."
  },
  {
    word: "Glucose Priming Phase",
    hint: "Is the initial stage of Glycolysis, demanding an energy input of 2 ATPs per glucose molecule."
  },
  {
    word: "Oxidative Phosphorylation",
    hint: "A step that occurs on the inner mitochondrial membrane, with protons diffusing across into the membrane and later pumped back into the matrix."
  },
  {
    word: "adenosine triphosphate",
    hint: "or ATP which is an organic compound that the body can use for energy"
  },
  {
    word: "krebs cycle",
    hint: "A step that occurs in the mitochondrial matrix, where pyruvate is turned into acetyl-CoA, then goes through a series of reactions, producing ATP, NADH, and FADH2."
  }
  
  
];

const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");

let correctWord, timer;
 
// Function to initialize the timer 
/*
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};
*/
// Function to initialize the game
var count = words.length - 1;
const initGame = () => {
  let randomObj = words[count];
  let jumbledWords = shuffleWord(randomObj.word); // Assuming you have a function to shuffle the entire word
  let wordArray = jumbledWords.split(" ");
  let spacedWordArray = wordArray.map(word => shuffleLetters(word) + " "); // Shuffle letters within each word and add space

  wordText.innerHTML = spacedWordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase(); // Keep the correct order of letters
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
};

// Function to shuffle the entire words without mixing separated words
const shuffleWord = (word) => {
  let wordArray = word.split(" ");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  return wordArray.join(" ");
};

// Function to shuffle letters within a word
const shuffleLetters = (word) => {
  let wordArray = word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  return wordArray.join("");
};

initGame();

// Function to check the user's input word
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
   if(count!=0){
    count--;
    initGame();
   }
  //initGame();
};

// Event listeners for the refresh and check buttons
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

// Event listener for the "Next" button
const nextBtn = document.querySelector(".next-word");
nextBtn.addEventListener("click", nextWord);

function nextWord() {
  // Increment the index or perform logic to get the next word
  // For now, let's assume you have an array of words called 'words'
  // and you have a variable 'currentIndex' to keep track of the current word
  currentIndex++;
  
  // Check if currentIndex exceeds the length of the words array
  if (currentIndex >= words.length) {
    // Handle the end of the game or loop back to the first word
    currentIndex = 0;
  }

  // Update the display with the next word
  updateDisplay();
}

// Function to update the display with the current word
function updateDisplay() {
  let randomObj = words[currentIndex];
  let jumbledWords = shuffleWord(randomObj.word);
  let wordArray = jumbledWords.split(" ");
  let spacedWordArray = wordArray.map(word => shuffleLetters(word) + " ");

  wordText.innerHTML = spacedWordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
}
function skipWord(){
  if(count!=0){
    count--;
    initGame();
  }
}
