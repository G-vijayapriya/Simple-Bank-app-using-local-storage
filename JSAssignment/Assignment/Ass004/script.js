class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    displayDetails(){
        return ("Name: "+this.name+" | Age: "+this.age);
    }
}

class AccountHolder extends Person{
    constructor(name,age,pin){
        super(name,age)
        this.accountNumber =Date.now();
        this.balance = 0;    
        this.pin = pin; 
    }
    detailsToStore(){
        return {accountNumber: this.accountNumber, holderName: this.name,balance: this.balance,pin: this.pin};
    }
    displayDetails(){
        return super.displayDetails()+" | Account Number: "+this.accountNumber+" | Balance: "+this.balance;
    }
}

class Admin extends Person{
    constructor(name,age,id,password,bank){
        super(name,age);
        this.id = id;
        this.password = password;
        this.bank = bank;
    }
    searchAccountId(accountNum){
        
        let user =  bank.users.find(user=>user.accountNumber==accountNum);
        if(user!=null){
            userDetail.style.padding="1rem";
            userDetail.innerText = "User Detail\n\nAccount number: "+user.accountNumber+"\n\nHolder Name: "+user.holderName+"\n\nBalance: "+user.balance;
        }
        else{
            alert("Account not found");
        }
        

    }
    createUser(){
        let userName = prompt("Enter user name");
        let userAge = prompt("Enter user age");
        let userPin = prompt("Set pin");
        if(userName.trim()==""||userAge.trim()==""||userPin.trim()==""){
            alert("Enter valid inputs.")
            return;
        }
        let user = new AccountHolder(userName,userAge,userPin);
        this.bank.addUser(user);
        return;
    }
}

class Bank{
    constructor(bankName){
        this.bankName = bankName;   
        this.users=[];
    }
    addUser(u){
        this.users.push(u.detailsToStore());
        alert("Account created successfully!\nAccount Number : "+u.accountNumber);
    }
    withdraw(user,amt){
        if(amt<0){
            alert("Enter valid amount to withdraw");
        }
        else if(amt<=user.balance){
            user.balance-=amt;
            
    
            alert("Amount withdrawed succussfully!");

        }
        else{
            alert("Not enough amount to withdraw")
        }
    }

    deposit(user,amt){
        if(amt>0){
            user.balance+=amt;
            findUserByAccount(user.accountNumber).balance= user.balance;
            alert("Amount deposited succussfully!")
        }
        else{
            alert("Invalid amount")
        }
    }
    showBalance(user){
        alert("Your Balance: "+user.balance);
    }

}


let bank = new Bank("ABC");
let admin=new Admin("Priya",18,123,123,bank);

// admin.createUser();

// console.log(u+"\n---");
// bank.addUser(u)
// bank.showBalance(u);
// bank.deposit(u,1000);
// bank.showBalance(u);

let adminBtn = document.getElementById("adminBtn");
let createAcc = document.getElementById("createAcc");
let search = document.getElementById("searchUser");
let exitBtn = document.getElementById("exit");
let userDetail = document.querySelector("p");

let userBtn = document.getElementById("userBtn");
let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");
let balance = document.getElementById("bal")
let exituser = document.getElementById("exituser");

// let userDiv = document.querySelector(".user");

adminBtn.addEventListener("click",()=>{
    let id = prompt("Enter ID")
    let password = prompt("Enter password");
    if(id==admin.id && password==admin.password){
        userBtn.disabled = true;
        
        adminMenu();
    }
    else{
        alert("Invalid password or id")
    }

})

function adminMenu(){
    adminBtn.style.display="none";
    createAcc.style.display="flex";
    search.style.display="flex";
    exitBtn.style.display="flex";

    createAcc.addEventListener("click",()=>{
        userDetail.innerText=""
        userDetail.style.padding="0rem"
        admin.createUser();
        
        
    });

    search.addEventListener("click",()=>{
        let num = prompt("Enter account number to search");
        admin.searchAccountId(num);
        return;
    })

    exitBtn.addEventListener("click",()=>{
        userDetail.innerText=""
        userDetail.style.padding="0rem"
        createAcc.style.display="none";
        search.style.display="none";
        exitBtn.style.display="none";
        adminBtn.style.display="flex";
        userBtn.disabled = false;
        saveToFile();
    })
}


function userRole(user){
    deposit.addEventListener("click",()=>{
        
        let amt = Number(prompt("Enter amount to deposit"));
        bank.deposit(user,amt);
        return;
    })
    withdraw.addEventListener("click",()=>{
        let amt = Number(prompt("Enter amount to withdraw"));
        bank.withdraw(user,amt);
    })
    balance.addEventListener("click",()=>{
        bank.showBalance(user);
    })
    exituser.addEventListener("click",()=>{
        deposit.style.display="none";
        withdraw.style.display="none";
        exituser.style.display="none";
        balance.style.display="none";
        userBtn.style.display="flex";       
        adminBtn.disabled = false;
        saveToFile();
    })
}


userBtn.addEventListener("click",()=>{
    let cntUSer = null;
    let accountNumber = prompt("Enter account number: ");
    let pin = prompt("Enter pin");
    
    for(let i=0;i<bank.users.length;i++){
        if(bank.users[i].accountNumber==accountNumber && bank.users[i].pin ==pin){
           cntUSer = (bank.users[i]);
           
        }
    }

    if(cntUSer!=null){
        userBtn.style.display = "none"; 
        deposit.style.display = "flex";
        withdraw.style.display = "flex";
        exituser.style.display = "flex";
        balance.style.display = "flex";

        adminBtn.disabled = true;
        userRole(cntUSer)
    }
    else{
        alert("Invalid account number or pin");
    }
})
// localStorage.clear();

function saveToFile(){
    let userDetails =[];
    for(let i=0;i<bank.users.length;i++){
        userDetails.push(bank.users[i]);
    }

    localStorage.setItem("bank_accounts",JSON.stringify(userDetails))
}

function loadData(){
    bank.users = JSON.parse(localStorage.getItem("bank_accounts"))||[];
}

loadData();

function findUserByAccount(accountNum){
    return bank.users.find(u=>u.accountNumber==accountNum);
}