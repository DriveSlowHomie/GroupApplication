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
var q1 = Math.floor(Math.random() * aQuestion.length);
bQuestion.push(aQuestion.splice(q1));
