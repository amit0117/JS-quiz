var data=[
    {
        question:"Which framework is related to javascript ?",
        a:".net",
        b:"flask",
        c:"django",
        d:"react",
        correct:"a"

    },
    {
        question:"Which is not a programming language?",
        a:"HTML",
        b:"Java",
        c:"JavaScript",
        d:"C++",
        correct:"a"

    },
    {
        question:"Which is not a framework?",
        a:"React",
        b:"JavaScript",
        c:"Angular",
        d:"Django",
        correct:"b"

    },
    {
        question:"CSS stands for?",
        a:"Cascading style state",
        b:"Cascading style sheet",
        c:"Cascading sheet of style",
        d:"None",
        correct:"b"

    }
]

var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
var submit_btn=document.getElementById('submit')  
var currentQ=0;
var score=0;
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}
loadquiz()
function loadquiz(){

deselect()
question.innerHTML=data[currentQ].question
option_a.innerText=data[currentQ].a
option_b.innerText=data[currentQ].b
option_c.innerText=data[currentQ].c
option_d.innerText=data[currentQ].d
}
submit_btn.addEventListener('click',()=>{
    var selected=-1
    answer.forEach(answer=>{
        if(answer.checked){
         selected=answer.id
        }
    })
    if(selected==-1){
        var input = prompt("Do you really want to skip this current question?Type Y for proceed and N for answer this current quetion.");
        if(input=='N'||input=='n'){
            if(currentQ>0)
            currentQ=currentQ-1
        }
        else if(input!='y'||input!='Y')
        alert("You have entered invalid choice.So we are proceeding you.")
    }
    if(selected==data[currentQ].correct)
    {
        score=score+1
    }
    currentQ=currentQ+1
    if(currentQ==data.length){
        var container = document.getElementById("reload");
        var heading = document.createElement("h3");
        heading.style.display="block"
        heading.innerHTML=`<h3>Your Test Score is ${score}/${data.length}.</h3>`
        var button = document.createElement("button");
        button.innerHTML = "Retake Quiz"; 
        button.classList.add("btn")
        button.classList.add("btn-secondary")
        button.onclick = function() {
        currentQ=0
        score=0
        loadquiz()
        document.getElementById('quiz').classList.remove("remove")
        container.removeChild(heading)
        container.removeChild(button)
        }
        document.getElementById('quiz').classList.add("remove")
        container.appendChild(heading)
        container.appendChild(button);
    }
    else
    loadquiz()
})


