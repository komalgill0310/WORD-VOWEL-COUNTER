let text = document.getElementById("paragraph-text");

displayContainedVowelAndWordInText();
resetApp();

function displayContainedVowelAndWordInText() {
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
  const vowelCount = text.value.match(/[aeiou]/gim).length;
  document.getElementById("vowel-count").textContent = `Contains ${vowelCount}vowels`;  
}

function countWords() {
  const wordCount = text.value.match(/([^\s])+/gim).length;
  document.getElementById("word-count").textContent = `Contains ${wordCount}words`;
}

function resetPage() {
  text.value = "";
  document.getElementById("vowel-count").textContent = "";
  document.getElementById("word-count").textContent = "";
}
