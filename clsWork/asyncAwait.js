function wash(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Vegetable washed");
            

        },1000)
    })
}

function chop(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Vegetable choped");

        },1000)
    })
}
function cook(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Vegetable cooked");

        },2000)
    })
}

function serve(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Vegetable served");

        },1000)
    })
}

function makeCook(){
    wash().then((response)=>{
        console.log(response)
        return chop();
    }).then((response)=>{
        console.log(response)
        return cook();
    }).then((response)=>{
        console.log(response);
        return serve();
    }).then((response)=>{
        console.log(response);
    })
    
}

// makeCook();

async function makecookAsync(){
    let washMsg = await wash();
    console.log(washMsg);
    let chopMsg = await chop();
    console.log(chopMsg);
    let cookMsg = await cook();
    console.log(cookMsg);
    let serveMsg = await serve();
    console.log(serveMsg);

}
makecookAsync();