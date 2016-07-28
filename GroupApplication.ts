class Question
{
  constructor(public question:string, public answer:string, public type:string){}
}
let aQuestion = [new Question("The sky is yellow True or False?", "false", "tf"),
new Question("How many teachers and TAs do we have?","5","mc"),
new Question("5+2=___","7","blank"),
new Question("If you cut an earthworm in half, both halves can regrow their body. True or False","true","tf"),
new Question("When creating a variable in js use the following syntax: a:var , b:let, c:variable, d:int","b","mc")];
let bQuestion = [];
let q1  = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let elementArray = [q1,q2,q3];

for(let i = 0; i < 3; i++)
{
    let question1 = Math.floor(Math.random() * aQuestion.length);
    bQuestion.push(aQuestion[question1]);
    aQuestion.splice(question1, 1);


}


function displayTest()
{
  for(let i = 0; i<bQuestion.length; i++)
  {
    //debugger;
    elementArray[i].innerHTML = bQuestion[i].question;
    console.log(bQuestion[i].question);
    console.log(elementArray);

  }
}



displayTest();
