var Question = (function () {
    function Question(question, answer, type) {
        this.question = question;
        this.answer = answer;
        this.type = type;
    }
    return Question;
}());
var aQuestion = [new Question("The sky is yellow True or False?", "false", "tf"),
    new Question("How many teachers and TAs do we have?", "5", "mc"),
    new Question("5+2=___", "7", "blank"),
    new Question("If you cut an earthworm in half, both halves can regrow their body. True or False", "true", "tf"),
    new Question("When creating a variable in js use the following syntax: a:var , b:let, c:variable, d:int", "b", "mc")];
var bQuestion = [];
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var elementArray = [q1, q2, q3];
for (var i = 0; i < 3; i++) {
    var question1 = Math.floor(Math.random() * aQuestion.length);
    bQuestion.push(aQuestion[question1]);
    aQuestion.splice(question1, 1);
}
function displayTest() {
    for (var i = 0; i < bQuestion.length; i++) {
        elementArray[i].innerHTML = bQuestion[i].question;
        console.log(bQuestion[i].question);
        console.log(elementArray);
    }
}
displayTest();
