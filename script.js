let topTenList = [
    // "one",
    // "two",
    // "three",
    // "four",
    // "five",
    // "six",
    // "seven",
    // "eight",
    // "nine",
    // "ten",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
];

topTenList.forEach(function(topTen){
    let container = document.querySelector('.topTenContainer');
    let newEl = document.createElement('p')
    newEl.id = "j"+topTen.replaceAll(" ", "");
    newEl.innerHTML = topTen;
    newEl.style.visibility = 'hidden';
    container.append(newEl);
});

function submitAnswer(that){
    let answer = that.value;
    that.value = '';

    if (topTenList.includes(answer)){
        showAnswer(answer);
    }

}

function showAnswer(answer){
    let topTenParagraph = document.querySelector("#j" + answer.replaceAll(" ",""));
    topTenParagraph.style.visibility = 'visible';
}