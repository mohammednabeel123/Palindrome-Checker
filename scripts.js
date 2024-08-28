const textArea = document.getElementById("text-area");
const inputBox = document.getElementById("inputbox");
const checker = document.getElementById("checker");
checker.addEventListener("click", function () {
  word = inputBox.value;
  //console.log(word);
  // changing text to lowercase and remove non-alphanumeric character
  word = word.toLowerCase();
  let sentence = word.replace(/[^a-z0-9]/g, "");

  // reverse the normal sentence or word
  const reversedsentence = sentence.split("").reverse().join("");
  if (reversedsentence === sentence) {
    textArea.textContent = `${word} is a Palindrome!`;
    textArea.style.fontSize = "20px";
  } else {
    textArea.textContent = `${word} is  not a palindrome!`;
    textArea.style.fontSize = "20px";
  }
});
