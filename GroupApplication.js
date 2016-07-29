var arrayQuestion = [];
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var elementArray = [q1, q2, q3];
var btn = document.getElementById('submit');
var Question = (function () {
    function Question(question, answer, type) {
        this.question = question;
        this.answer = answer;
        this.type = type;
    }
    return Question;
}());
var aQuestion = [
    new Question("The sky is yellow True or False?", "False", "tf"),
    new Question("How many teachers and TAs do we have? a: 1, b: 2, c: 80, d:5 ", "b", "mc"),
    new Question("5 + 2 = ___", "7", "blank"),
    new Question("If you cut an earthworm in half, both halves can regrow their body. True or False?", "true", "tf"),
    new Question("When creating a variable in JavaScript use the following syntax: a: var , b: let, c: variable, d: int", "b", "mc")
];
for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * aQuestion.length);
    arrayQuestion.push(aQuestion[num]);
    aQuestion.splice(num, 1);
}
function typeChecker(question) {
    if (question.type === "tf") {
        var trueFalse = "<select form = \"trueform\">\n                         <option value = \"true\">True</option>\n                         <option value = \"false\">False</option>\n                         </select>";
        return trueFalse;
    }
    else if (question.type === "mc") {
        var mcElement = "<form>\n                        <input type= \"radio\" name= \"mc\" value= \"a\" > A.<br>\n                        <input type= \"radio\" name= \"mc\" value= \"b\"> B.<br>\n                        <input type= \"radio\" name= \"mc\" value= \"c\"> C.<br>\n                        <input type= \"radio\" name= \"mc\" value= \"d\"> D.<br>\n                        </form>";
        return mcElement;
    }
    else if (question.type === "blank") {
        var blankElement = "<form>\n                            Enter your answer:</br>\n                            <input type= \"text\" name= \"blank\"></br>\n                            </form>";
        return blankElement;
    }
}
function display() {
    for (var i = 0; i < arrayQuestion.length; i++) {
        elementArray[i].innerHTML = arrayQuestion[i].question + typeChecker(arrayQuestion[i]);
        console.log(arrayQuestion[i].question);
        console.log(elementArray);
        console.log(q1.children[0]);
        console.log(q2.children[0]);
        console.log(q3.children[0]);
    }
}
function input() {
    for (var i = 0; i < 3; i++) {
        var val = arrayQuestion[i].value;
        var ans = void 0;
        if (val === "tf") {
        }
        else if (val === "mc") {
        }
        else if (val === "blank") {
        }
        return ans;
    }
}
var right = 0;
function check() {
    if (input() === arrayQuestion[0].answer) {
        right + 1;
    }
    if (input() === arrayQuestion[1].answer) {
        right + 1;
    }
    if (input() === arrayQuestion[2].answer) {
        right + 1;
    }
}
btn.addEventListener('click', function () {
    check();
    alert("You got " + right + "/3 correct!");
});
display();
