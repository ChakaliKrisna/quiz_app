questions=["1. What is the default value of a boolean variable in Java?",

    "2. What is the result of this operation in Java:\n \n(int)(7.9)? ",

    "3. What will the following loop print int x = 1;\n while(x < 4) {\n System.out.println(x); x++;\n};",
     
    "4. Can an interface in Java extend multiple interfaces?",

    "5. Identify the flaw in this Java code:\n  char[] chars = new char[-1];",
   
    

  "6. Which interface represents a collection of objects in which duplicate values can be stored?",
   "7. what is the out put for this code: if(false){\n "+"System.out.println('true')} else\n {\n System.out.println('false');\n"+
        "};",

   " 8. Which method is used to start the execution of a thread?"]





answers=["false","7","1 2 3","Yes","Negative array size","List","false","start()"];




let question_index=0;
// let time=30;
let correct_index=0;
const options_array=[["true","false","null","0"],
["7","7.9","8","syntax error"],

["1 2 3","2 3 4","1 2 3 4","1"],
["Yes","No","Only if they are marker interfaces","Only abstract classes can extend multiple interfaces"],

["Negative array size","Syntax error","No error","Logic error"],



["List","Set","Map","ListMap"],
["true","false","error","no-output"],

["run()","start()","execute()","go()"]];
let attempt="incorrect";
let correct=0;
let wrong=-1


 let time=30;
function nextslide(){
    // let time=30;
    // let time=30;

//  i++;
    // const couter=document.getElementById("counter");
// setInterval(updatetimer,1000);












   
     // updatetime(time);
    document.getElementById("initial").style.display="none";
    console.log(question_index)
   if(question_index < questions.length){
    if(attempt=="correct"){

        correct++;
    }

    else{
        wrong++;
    }
     console.log(correct);


    let nodelist=document.querySelectorAll(".container");
    nodelist.forEach(element => {
        element.remove();
        
    });

    //  bool attempted=false;\
    // document.getElementById("app").style.display="none";
     document.getElementById("next").style.display="none";
     
    let new_div=document.createElement('div');
    new_div.className="container";
    new_div.id="active";




    let questionh2=document.createElement('h2');
    questionh2.textContent=questions[question_index];
    questionh2.id="question";



    let ans_buttons=document.createElement("div");
     let clickattempt="no";
    for(let i=0;i<4;i++){
   
    let Option=document.createElement('button');
    Option.classList.add("btn");
    // Option.classList.add(".btn");
    Option.textContent=options_array[question_index][i];
    Option.addEventListener("click",event=>{
        if(clickattempt==="no"){
            clicked(Option);
            clickattempt="yes";
        }
        
    })


    ans_buttons.appendChild(Option);
    }
    


    new_div.appendChild(questionh2);
    new_div.appendChild(ans_buttons);


    document.getElementById("app").prepend(new_div);
    
    // document.getElementById("container").style.display="block";

//  document.getElementById("active").classList.remove("unactive");



    // ;
    question_index++;



}
else{

    document.getElementById("active").style.display="none";
   let result_div = document.createElement('div');
   result_div.id="result_div";
   
   
    const end=document.createElement("h2");
    end.id="result_h2";
    end.textContent="quiz completed";
    const score=document.createElement("h3");
    score.textContent="your score is :"+ correct +"";
    score.id="score";
    result_div.appendChild(score);
    result_div.appendChild(end);
    document.getElementById('app').appendChild(result_div);
     document.getElementById("next").style.display="none";
}

}
function clicked(Option) {
    
    console.log("hellos");

    // // // Option.style.backgroundColor="black";
    const clickedbuttons=document.querySelectorAll(".btn");
    // // document.getElementById(Option.classList.add("clicked");"next").style.display="block";
    // clickedbuttons.forEach(element => {
    //     element.classList.remove("clicked");
        
    // });
    //  Option.classList.add("clicked");
    // document.getElementById("next").style.document. style.animation=" sidebar 1s ease-in 1s 1 normal none";

    document.getElementById("next").style.display="block";
    // document.getElementById("next").style.font-family = "Courier Newfont Courier, monospace";

    //  document.getElementById("next").style.transform="scale(1.1)";


   
    let content=document.getElementById("question").textContent;



    let correct_index=questions.indexOf(content);

     console.log(Option.textContent)
    console.log(answers[correct_index]);


    if(Option.textContent==answers[correct_index]){
       attempt="correct";
       console.log("correct");
    //    Option.style.background="green";
    Option.classList.add("green")
       
        
    }
    else{
        attempt="incorrect";
        Option.classList.add("red");
        clickedbuttons.forEach(element => {
            if(element.textContent== answers[correct_index]){
                element.classList.add("green");
            }
            
        });
        
    }

}
// setTimeout(nextslide,3000)





