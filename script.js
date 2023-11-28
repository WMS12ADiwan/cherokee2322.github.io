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
    word: "PDC",
    hint: "A multiple enzyme complex that catalyzes the production of acetyl-CoA."
  },
  {
    word: "Hypoxia",
    hint: "This is when glycolysis compensates for weakened OXPHOS."
  },
  {
    word: "Lactic_Acidosis",
    hint: "Associated with impaired pyruvate dehydrogenase activity, can result from various causes."
  }, 
  {
    word: "Metabolites",
    hint: "This is vital for essential cellular functions."
  },
  {
    word: "Temperature",
    hint: "Changes in this can influence the rate of glycolysis."
  },
  {
    word: "pH_Levels",
    hint: "can influence the activity of glycolytic enzymes."
  },
  {
    word: "Phosphofructokinase-1",
    hint: "Acts as a negative allosteric regulator of key glycolytic enzymes"
  },
  {
    word: "Isocitrate",
    hint: "This is oxidized to alpha-ketoglutarate a five-carbon molecule) which results in the release of carbon dioxide. One NADH molecule is formed."
  },
  {
    word: "allosterically_controlled_enzyme.",
    hint: "Isocitrate Dehydrogenase"
  },
  {
    word: "Citric_Acid_Cycle",
    hint: "Central driver of cellular respiration."
  },
  {
    word: "Cytoplasm",
    hint: "In prokaryotic cells, the transition step occurs in the ______; in eukaryotic cells the pyruvates must first enter the mitochondria because the transition reaction and the citric acid cycle take place in the matrix of the mitochondria"
  },
  {
    word: "Pyruvate_oxidation",
    hint: "Is the stage where pyruvate is oxidized and converted to acetyl CoA, producing NADH and releasing one molecule of CO2."
  },
  {
    word: "Isomerization",
    hint: "alpha-D-Glucose-6-phosphate is then converted into D-Fructose-6-phosphate (F-6-P) by the enzyme Phosphoglucoisomerase."
  },
  {
    word: "Nicotinamide_adenine_dinucleotide",
    hint: "Is a crucial coenzyme in metabolism."
  },
  {
    word: "Glucose_Priming_Phase",
    hint: "Is the initial stage of Glycolysis, demanding an energy input of 2 ATPs per glucose molecule."
  },
  {
    word: "Oxidative_Phosphorylation",
    hint: "A step that occurs on the inner mitochondrial membrane, with protons diffusing across into the membrane and later pumped back into the matrix."
  },
  {
    word: "adenosine_triphosphate",
    hint: "or ATP which is an organic compound that the body can use for energy"
  },
  {
    word: "krebs_cycle",
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
var count=words.length-1;
const initGame = () => {
  //initTimer(30);
  let randomObj = words[count];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
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
