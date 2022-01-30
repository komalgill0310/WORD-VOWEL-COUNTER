let text = document.getElementById("paragraph-text");

document.getElementById("count-word-vowel").addEventListener("click", (e) => {
  e.preventDefault();
  countVowels();
  countConsonants();
  countWords();
  text.value = "";
});

function countVowels() {
  const vowelCount = text.value.match(/[aeiou]/gim).length;
  document.getElementById("vowel-count").textContent = `Vowels: ${vowelCount}`;
}

function countWords(){
 let wordCount = text.value.match(/([^\s])+/gim).length;
 document.getElementById("word-count").textContent = `Word: ${wordCount}`;
}
