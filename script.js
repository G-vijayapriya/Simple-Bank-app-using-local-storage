function apiCalling(){
    let content = document.getElementById("inputfield").value;
    let result = document.getElementById("result");



    let url = "https://api.api-ninjas.com/v1/spellcheck?text="+content;
    console.log(content)
    let xhr =new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.setRequestHeader("X-Api-Key","cby5ZiAv4k4eGdWbl2M46g==zG1vSkqtcaMOwoX1");
    xhr.send();
    xhr.onload=()=>{
        if(xhr.status===200){
            
            let obj = JSON.parse(xhr.responseText);
           result.textContent = (obj.corrected);

        }
    }
   
}