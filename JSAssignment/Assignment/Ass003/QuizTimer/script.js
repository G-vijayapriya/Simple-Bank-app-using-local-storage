let btn= document.getElementById("btn");

let text = document.getElementById("qus");

let question = ["1. What is the sum of 130+125+191?","2. Find the missing terms in multiple of 3: 3, 6, 9, __, 15","3. Solve 24÷8+2.","4. What is the next prime number after 5?","5. The product of 121 x 0 x 200 x 25 is"];

btn.addEventListener("click",()=>{
    console.log("Working");
    btn.disabled = true;
    startQuiz();
      
})
async function startQuiz(){
    for(let i=0;i<question.length;i++){
        text.textContent = question[i];
        await handleDelay().then((result)=>{
            console.log(result);
        });
    }
    btn.disabled = false;
    text.textContent = "Quiz Complete!"
}

function handleDelay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Wait");
        },5000)
    })
}