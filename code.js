$( document ).ready(function() {

});
function submit1(){
    var a =  document.getElementById("number1").value;
    var b='';
    for(let i=0;i<a.length;i++)
    {
        b+=String.fromCharCode(122-((a.charCodeAt(i)-97)%26));
    }

    document.getElementById("screen1").innerHTML=b;
  }

  function submit2(){
    var a =  document.getElementById("number2").value;
    var b='';
    for(let i=0;i<a.length;i++)
    {
        b+=String.fromCharCode(122-((a.charCodeAt(i)-97)%26));
    }

    document.getElementById("screen2").innerHTML=b;
  }
