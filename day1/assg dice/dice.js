document.getElementById("roll").addEventListener("click", function (){
    var d1=Math.floor(Math.random()*6)+1
    var d2=Math.floor(Math.random()*6)+1
    var d3=Math.floor(Math.random()*6)+1
    console.log(d1,d2,d3);

    document.getElementById("member-1").innerText=d1;
    document.getElementById("member-2").innerText=d2;
    document.getElementById("member-3").innerText=d3;

    if(d1>d2 && d1>d3){
        document.getElementById("member-1").style.backgroundColor="green";
        if(d2>d3){
            document.getElementById("member-2").style.backgroundColor="yellow";
        }else if(d3>d2){
            document.getElementById("member-3").style.backgroundColor="red";
        }else{
            document.getElementById("member-2").style.backgroundColor="blue";
            document.getElementById("member-3").style.backgroundColor="blue";
        }
    }else if(d2>d1 && d2>d3){
        document.getElementById("member-2").style.backgroundColor="green";
        if(d1>d3){
            document.getElementById("member-1").style.backgroundColor="yellow";
        }else if(d3>d1){
            document.getElementById("member-3").style.backgroundColor="red";
        }else{
            document.getElementById("member-1").style.backgroundColor="blue";
            document.getElementById("member-3").style.backgroundColor="blue";
        }
    }
    else{
        document.getElementById("member-3").style.backgroundColor="green";
        if(d1>d2){
            document.getElementById("member-1").style.backgroundColor="yellow";
        }else if(d2>d1){
            document.getElementById("member-2").style.backgroundColor="red";
        }else{
            document.getElementById("member-1").style.backgroundColor="blue";
            document.getElementById("member-2").style.backgroundColor="blue";
        }
    }

})