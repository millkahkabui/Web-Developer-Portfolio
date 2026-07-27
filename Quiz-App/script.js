function checkAnswer(answer){

    if(answer==="a"){
        document.getElementById("result").innerHTML="✅ Correct!";
        document.getElementById("result").style.color="green";
    }

    else{
        document.getElementById("result").innerHTML="❌ Wrong Answer";
        document.getElementById("result").style.color="red";
    }

}