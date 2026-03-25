function runAnalysis() {
    let input = document.getElementById("textInput").value;

    if (input.trim() === "") {
        alert("Please paste some text first!");
        return;
    }

    let charCount = input.length;
    
    let wordsArray = input.trim().split(/\s+/);
    let wordCount = wordsArray.length;

    let reversedText = input.split("").reverse().join("");

    document.getElementById("charRes").innerText = charCount;
    document.getElementById("wordRes").innerText = wordCount;
    document.getElementById("revRes").innerText = reversedText;
}