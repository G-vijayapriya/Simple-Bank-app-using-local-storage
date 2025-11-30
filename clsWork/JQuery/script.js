function letterFunction(){
    let letter = document.getElementById("letter");
    console.log(letter);
}

// document.addEventListener("DOMContentLoaded",letterFunction); //defer



// JQUERY defer
// console.log($("#letter"))

// $(document).ready(letterFunction())



console.log($("#letter").next())
$("#letter").next().css({border:".4rem solid darkBlue"})
$("#letter").prev().css({border:".4rem solid black"})

$("#letter li").first().css({color:"red"})

$("#letter li").last().css({color:"green"})

$("#letter").find("li").eq(1).css({color:"pink"});

$("button").click(()=>{            //not add data in dynamic

})
$("button").on