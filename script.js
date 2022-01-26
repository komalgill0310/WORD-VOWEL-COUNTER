let text = document.getElementById("paragraph-text");

document.getElementById("count-word-vowel").addEventListener("click", (e) => {
  e.preventDefault();
  countVowels();
  text.value = "";
});

function countVowels() {
  let i = text.value;
  let x = /[aeiou]/gim;
  let result = i.match(x);
  let y = result.length;
  console.log(result);
  console.log(y);
  document.getElementById("word-count").textContent = `Vowels: ${y}`;
}

