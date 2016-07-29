//Set a blank array, grab div values, put div elements in an array
let arrayQuestion = [];
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let elementArray = [q1, q2, q3];
let btn = document.getElementById('submit');



//Creat a class with question string and type
class Question {
    constructor(public question: string, public answer: string, public type: string){
  }
}

//Set information for each question
let aQuestion = [
    new Question("The sky is yellow True or False?", "False", "tf"),
    new Question("How many teachers and TAs do we have? a: 1, b: 2, c: 80, d:5 ", "b", "mc"),
    new Question("5 + 2 = ___", "7", "blank"),
    new Question("If you cut an earthworm in half, both halves can regrow their body. True or False?", "true", "tf"),
    new Question("When creating a variable in JavaScript use the following syntax: a: var , b: let, c: variable, d: int", "b", "mc")
  ];



//Loop 3 times, generate num based on list for parent array, grab all info, splice?
for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * aQuestion.length);
    //pushes all info into empty array
    arrayQuestion.push(aQuestion[num]);
    aQuestion.splice(num, 1);
}


//Fill in appropriate question type, function takes in parameter of random question data
function typeChecker(question) {
    if (question.type === "tf") {
        let trueFalse = `<select form = "trueform">
                         <option value = "true">True</option>
                         <option value = "false">False</option>
                         </select>`;

        return trueFalse;
    }
    else if (question.type === "mc") {
        let mcElement = `<form>
                        <input type= "radio" name= "mc" value= "a" > A.<br>
                        <input type= "radio" name= "mc" value= "b"> B.<br>
                        <input type= "radio" name= "mc" value= "c"> C.<br>
                        <input type= "radio" name= "mc" value= "d"> D.<br>
                        </form>`

        return mcElement;
    }
    else if (question.type === "blank") {
        let blankElement = `<form>
                            Enter your answer:</br>
                            <input type= "text" name= "blank"></br>
                            </form>`

        return blankElement;
    }
}


//Changes the innerHTML of the divs to appropriate random question/type
function display() {
    for (let i = 0; i < arrayQuestion.length; i++) {
        //arrayQuestion + typeChecker
        elementArray[i].innerHTML = arrayQuestion[i].question + typeChecker(arrayQuestion[i]);

        console.log(arrayQuestion[i].question);
        console.log(elementArray);
        console.log(q1.children[0]);
        console.log(q2.children[0]);
        console.log(q3.children[0]);
    }
}

//A funtion to check the responses of the user to the answer property in Questions class
// let right:number = 0;
// function check() {
//     if ( === arrayQuestion[1].answer){
//       right + 1;
//     }
//     if ( === arrayQuestion[2].answer){
//       right + 1;
//     }
//     if ( === arrayQuestion[3].answer){
//       right + 1;
//     }
// }
//
//
// btn.addEventListener('click', () => {
//   check();
//   alert(`You got ${right}/3 correct!`)
// });






display();
