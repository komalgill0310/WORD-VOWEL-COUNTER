let text = document.getElementById("paragraph-text");

displayNumberOfVowelAndWord();
resetApp();

function displayNumberOfVowelAndWord() {
  document.getElementById("count-word-vowel").addEventListener("click", (e) => {
    e.preventDefault();
    if (isTextBoxEmpty()) {
      alert("Please type some text in Text Box!");
    }
    countVowels();
    countWords();
  });
}

function resetApp() {
  document.getElementById("reset").addEventListener("click", (e) => {
    e.preventDefault();
    return isTextBoxEmpty() ? alert("Please type some text in Text Box!") : resetPage();
  });
}

function isTextBoxEmpty() {
  return document.getElementById("paragraph-text").value === "" ? true : false;
}

function countVowels() {
  const regEx = (/(?=[aeiou])|([aeiou])/gim);
  const findVowels = text.value.match(regEx);
  // if(findVowels){
  //   console.log("hey");
  // }
  // else{
  //   console.log("no match!");
  // }
  // const findVowels = text.value.match(/[aeiou]/gim);
  const vowelCount = findVowels.length;
// if(vowelCount === text.value.match(/[^aeiou]/gim)){
//    console.log('hello');
// }
  document.getElementById("vowel-count").textContent = `Contains ${vowelCount}vowels`;
}

function countWords() {
  let wordCount = text.value.match(/([^\s])+/gim).length;
  document.getElementById("word-count").textContent = `Contains ${wordCount}words`;
}

function resetPage() {
  text.value = "";
  document.getElementById("vowel-count").textContent = "";
  document.getElementById("word-count").textContent = "";
}
