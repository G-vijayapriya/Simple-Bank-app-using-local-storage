let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let addp = document.getElementById("add");
let payp = document.getElementById("pay");
let generatep = document.getElementById("generate");
let productp = document.getElementById("product");


function clear(){
    btn1.disabled = true;
    btn2.disabled = true;
    addp.innerText="";
    payp.innerText ="";
    generatep.innerText="";
    productp.innerText ="";

}

btn1.addEventListener("click",()=>{
    clear();
    addByPromise();
    
})
btn2.addEventListener("click",()=>{
    clear();
    addByAwait();
})

function addItem(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Idem added to cart");
        },1000);
    })
}
function makePayment(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Payment done!");
        },2000);
    })
}
function generateInvoice(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Generate invoice");
        },1000);
    })
}
function shipTheProduct(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Product shipped");
        });
    })
}

function addByPromise(){
    addItem().then((result)=>{
        addp.innerText = result;
        console.log(result);
        return makePayment();
    }).then((result)=>{
        payp.innerText = result;
        console.log(result);
        return generateInvoice();
    }).then((result)=>{
        generatep.innerText = result;
        console.log(result);
        return shipTheProduct();
    }).then((result)=>{
        productp.innerText = result;
        console.log(result);
        btn1.disabled = false;
        btn2.disabled = false;
    })
    
}

async function addByAwait(){
    let add = await addItem();
    addp.innerText = add;
    console.log(add);
    let pay = await makePayment();
    payp.innerText = pay;
    console.log(pay);
    let generate = await generateInvoice();
    generatep.innerText = generate;
    console.log(generate);
    let product = await shipTheProduct();
    productp.innerText = product;
    console.log(product);
    btn1.disabled = false;
    btn2.disabled = false;
}
