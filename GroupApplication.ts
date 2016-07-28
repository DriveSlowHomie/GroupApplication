class Question {
    constructor(public question: string, public answer: string, public type: string) { }
}
let aQuestion = [new Question("The sky is yellow True or False?", "false", "tf"),
    new Question("How many teachers and TAs do we have? a: 1, b: 2, c: 80, d:5 ", "d", "mc"),
    new Question("5+2=___", "7", "blank"),
    new Question("If you cut an earthworm in half, both halves can regrow their body. True or False", "true", "tf"),
    new Question("When creating a variable in js use the following syntax: a:var , b:let, c:variable, d:int", "b", "mc")];
let bQuestion = [];
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let elementArray = [q1, q2, q3];

for (let i = 0; i < 3; i++) {
    let question1 = Math.floor(Math.random() * aQuestion.length);
    bQuestion.push(aQuestion[question1]);
    aQuestion.splice(question1, 1);


}


function displayTest() {
    for (let i = 0; i < bQuestion.length; i++) {
        elementArray[i].innerHTML = bQuestion[i].question + typeChecker(bQuestion[i]);


        console.log(bQuestion[i].question);
        console.log(elementArray);

    }
}

function typeChecker(question) {
    if (question.type === "tf") {

        let trueFalse = `<select name="trueFalse" form="trueform">
      <option value="true">true</option>
      <option value="false">false</option>
    </select>`;

        return trueFalse;

    }
    else if (question.type === "mc") {

        let mcElement = `<form>
      <input type="radio" name="mc" value="a" checked> A.<br>
      <input type="radio" name="mc" value="b"> B.<br>
      <input type="radio" name="mc" value="c"> C.<br>
      <input type="radio" name="mc" value="d"> D.<br>
    </form>`

        return mcElement;



    }
    else if (question.type === "blank") {
        let blankElement = `<form>
  Enter your answer:<br>
  <input type="text" name="blank"><br>
</form>`

        return blankElement;

    }
}



displayTest();
