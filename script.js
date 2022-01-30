let text = document.getElementById("paragraph-text");

document.getElementById("count-word-vowel").addEventListener("click", (e) => {
  e.preventDefault();
  countVowels();
  countWords();
});

document.getElementById("reset").addEventListener("click", (e) => {
  e.preventDefault();
resetPage();
})

function countVowels() {
  const vowelCount = text.value.match(/[aeiou]/gim).length;
  document.getElementById("vowel-count").textContent = `Contains ${vowelCount}vowels`;
}

function countWords(){
 let wordCount = text.value.match(/([^\s])+/gim).length;
 document.getElementById("word-count").textContent = `Contains ${wordCount}words`;
}

function resetPage(){
  text.value = "";
  document.getElementById("vowel-count").textContent = "";
  document.getElementById("word-count").textContent = "";
}
