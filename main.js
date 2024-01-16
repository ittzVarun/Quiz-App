const questions=[
    {
        'que': 'Which one is an markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a'

    },

    {
        'que': 'Who created Java?',
        'a':'Charles Babbage',
        'b':'Dennis Ritchie',
        'c':'James Gosling',
        'd':'Guido Van Rossum',
        'correct':'c'
    },

    {
        'que': 'Which one is framework?',
        'a':'React JS',
        'b':'Express JS',
        'c':'PHP',
        'd':'Mongo DB',
        'correct':'b'
    }   
]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const queBox=document.getElementById("quesBox");
const optionInput=document.querySelectorAll(".options");
const loadQuestion = ()=>{
    if(index===total)
    {
        return endQuiz();
    }
    reset();
    const data=questions[index];
    queBox.innerHTML=`${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}



const submitQuiz = ()=>{
    const data=questions[index];
    const ans= getAnswer();
    if(ans===data.correct)
    {
        right++
    }
    else
    {
        wrong++
    }
    index++;
    loadQuestion();
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
        }
    }
    )
    return answer;
}

const reset=() =>{
    optionInput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
    }
    
const endQuiz= ()=>{
    document.getElementById("box").innerHTML=`<h3>Thanks for playing Quiz😊😊</h3>
    <h2>${right}/${total} are correct</h2>
    `
}


loadQuestion();
