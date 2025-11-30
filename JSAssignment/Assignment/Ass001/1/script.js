let uploadBtn = document.getElementById("uploadBtn");
let submitBtn = document.getElementById("submitBtn");
let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");
let status3 = document.getElementById("status3");

function uploadFile(resolve,reject,status){
    if(Math.random()>.5){
        resolve("Success");
        status.classList.add("success");
        status.classList.remove("failed");
        
        status.textContent = "uploaded";
        

      } 
      else{
        reject("Failed");
        
            status.innerText = "not upload";
                
        status.classList.add("failed");
        status.classList.remove("success")
      }
}


uploadBtn.addEventListener("click",()=>{
    submitBtn.disabled = true;

    status1.innerText = "Uploading...";
    status2.innerText = "Uploading...";
    status3.innerText = "Uploading...";
    let p1 = new Promise((resolve,reject)=>{
        uploadFile(resolve,reject,status1);
    });
    
    let p2 = new Promise((resolve,reject)=>{
        uploadFile(resolve,reject,status2);
    });
    
    let p3 = new Promise((resolve,reject)=>{
        uploadFile(resolve,reject,status3);
    });
    
    Promise.all([p1,p2,p3]).then((result)=>{
        console.log(result);
        submitBtn.disabled = false;
    })
    
})
submitBtn.addEventListener("click",()=>{
    alert("Successfully all files uploaded");
});



// Promise.allSettled([p1,p2,p3]).then((msg)=>{
//     console.log(msg);
// })

// Promise.any([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })
let cabResult = document.getElementById("cabResult");
let cabBtn = document.getElementById("cabResultBtn");

cabBtn.addEventListener("click",()=>{
    let b1 = new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve("Driver 1 Accepted");
            console.log("1 accept")
        }
        else{
            reject("Driver 1 Rejected");
            console.log("1 reject")

        }
    });

    let b2 = new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve("Driver 2 Accepted");
            console.log("2 accept")

        }
        else{
            reject("Driver 2 Rejected");
            console.log("2 reject")

        }
    });
    let b3 = new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve("Driver 3 Accepted");
            console.log("3 accept")

        }
        else{
            reject("Driver 3 Rejected");
            console.log("1 reject")

        }
    });
    Promise.any([b1,b2,b3]).then((result)=>{
        cabResult.innerText = result;
        cabResult.classList.add("success");
        cabResult.classList.remove("failed");
    }).catch((e)=>{
        cabResult.innerText = "Drivers are not available,Book later";
        cabResult.classList.add("failed");
        cabResult.classList.remove("success");
    })
})


function bkUp(resolve,reject,status){
    if(Math.random()>0.5){
        resolve("Successfully backuped!");
        status.classList.add("success");
        status.classList.remove("failed");
        status.textContent = "Success";
    }
    else{
        
        reject("Not backup.");
        status.classList.remove("success");
        status.classList.add("failed");
        status.textContent = "Failed";
    }
}
let photoBkup = document.getElementById("backup1");
let contactBkup = document.getElementById("backup2");
let msgBkup = document.getElementById("backup3");
let notesBkup = document.getElementById("backup4");
let bkResult= document.getElementById("bkResult");

let bkBtn = document.getElementById("bkBtn");
bkBtn.addEventListener("click",()=>{
    // 
    let b1= new Promise((resolve,reject)=>{
        bkUp(resolve,reject,photoBkup);
    })
    let b2 = new Promise((resolve,reject)=>{
        bkUp(resolve,reject,contactBkup);
    })
    let b3 = new Promise((resolve,reject)=>{
        bkUp(resolve,reject,msgBkup);
    })
    let b4 = new Promise((resolve,reject)=>{
        bkUp(resolve,reject,notesBkup);
    })
    let bkdatas = ["Photos: ","Contact: ","Messages: ","Notes: "];
    Promise.allSettled([b1,b2,b3,b4]).then((result)=>{
        console.log(result);
        let finalstr = "Backup summary\n\n";
        for(let i=0;i<result.length;i++){
            finalstr+=bkdatas[i];
            if(result[i].status == "fulfilled"){
                finalstr+=result[i].value;
            }
            else{
                finalstr+=result[i].reason;
            }
            finalstr+="\n";
        }
        bkResult.innerText = finalstr;
    })
})